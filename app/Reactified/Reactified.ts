import * as React from "react";
import { Observable, EventData } from "tns-core-modules/data/observable/observable";
import { Button } from "tns-core-modules/ui/button/button";
import { updateListener } from "react-nativescript/dist/client/EventHandling";
import { shallowEqual } from "react-nativescript/dist/client/shallowEqual";
import { PropsWithoutForwardedRef } from "react-nativescript/dist/shared/NativeScriptComponentTypings";
import { ExtraProps } from "./ExtraProps";
import { updateListenersImpl } from "./Implementation/updateListenersImpl";
import { register, ContentView } from "react-nativescript/dist/client/ElementRegistry";
import { Container, HostContext, Instance, CustomNodeHierarchyManager } from "react-nativescript/dist/shared/HostConfigTypes";
import { number } from "prop-types";
import { updateListenersHelperImpl } from "./Implementation/updateListenersHelperImpl";
import { getCurrentRefImpl } from "./Implementation/getCurrentRefImpl";
import { componentDidMountImpl } from "./Implementation/React/componentDidMountImpl"
import { componentWillUnmountImpl } from "./Implementation/React/componentWillUnmountImpl";
import { shouldComponentUpdateImpl } from "./Implementation/React/shouldComponentUpdateImpl";


function Reactified<T extends Observable>(observable: T) { 

    const name = firstLetterLowercase(nameOf(observable));
    console.log("registering " + name);
    register(name, () => {
       return observable;
    });

    class Reactify extends React.Component<T & ExtraProps<T>, any> {
        static countOfInstances = 0;
        // static defaultProps = {... observable } 
        /*
        constructor(props: T & ExtraProps<T>) {
            super(props);
            Reactify.countOfInstances ++;
            console.log("constructing instance " + Reactify.countOfInstances);
        }
        */
        readonly myRef: React.RefObject<T> = React.createRef<T>();
        getCurrentRef(): T | null {
            return getCurrentRefImpl(this);
        }
        /**
        * Helper method for updateListeners: simply gets the current ref to pass on to it.
        * @param attach true: attach; false: detach; null: update
        */
        updateListenersHelper(attach: boolean | null, nextProps?: T & ExtraProps<T>): void {
            updateListenersHelperImpl(this, attach, nextProps);
        }
        /**
        *
        * @param attach true: attach; false: detach; null: update
        */

        updateListeners(node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>): void {
            updateListenersImpl(this, node, attach, nextProps);
        }
        componentDidMount() {
            componentDidMountImpl(this);
        }
        /**
        * PureComponent's shouldComponentUpdate() method is ignored and replaced with a shallowEqual()
        * comparison of props and state. We'll implement our Component's shouldComponentUpdate() to
        * match the way PureComponent is handled.
        */
        shouldComponentUpdate(nextProps: T & ExtraProps<T>, nextState: any): boolean {
            return shouldComponentUpdateImpl(this, nextState, nextState);
        }
        componentWillUnmount() {
            componentWillUnmountImpl(this);
        }
        render(): React.ReactNode {
            const { forwardedRef, children, ...rest } = this.props
            return React.createElement(
                name,
                {
                    ...rest,
                    ref: forwardedRef || this.myRef,
                },
                children
            );
        }
    }
    // const WithObservableImpl = observableImpl(Reactify);
    return Reactify; // have to declare class name to make decorators work  // https://github.com/microsoft/TypeScript/issues/7342
}


// React.Component<T & ExtraProps<T>

/* 
// Are not actually needed ?!
function JSX<T extends Observable>(observable: new(...args: any[]) => React.Component<T & ExtraProps<T>>) {
    return React.forwardRef<T, PropsWithoutForwardedRef<T & ExtraProps<T>>>(
        (props: React.PropsWithChildren<PropsWithoutForwardedRef<T & ExtraProps<T>>>, ref: React.RefObject<T>) => {
            const { children, ...rest } = props;
            return React.createElement(
                observable
                ,
                {
                    ...rest,
                    forwardedRef: ref,
                },
                children
            );
        }
    )
}
*/

// helpers for registering to elementRegistry
function nameOf(object: Object): string {
    return object.constructor.name;
}
function firstLetterLowercase(name: string) {
    return name.charAt(0).toLowerCase() + name.slice(1);
}

// export const MyObservable: React.ComponentType<PropsWithoutForwardedRef<Observable> & ExtraProps<Observable>> & React.ClassAttributes<Observable> = JSX(new Observable());
// export const MyButton = JSX(new Button());
export const MyButton = Reactified(new Button());
// export const MyContentView: React.ComponentType<PropsWithoutForwardedRef<ContentView & ExtraProps<ContentView>>> & React.ClassAttributes<ContentView> = JSX(new ContentView());
