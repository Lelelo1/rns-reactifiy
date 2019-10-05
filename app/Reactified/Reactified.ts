import * as React from "react";
import { Observable, EventData } from "tns-core-modules/data/observable/observable";
import { register, ContentView } from "react-nativescript/dist/client/ElementRegistry";
<<<<<<< HEAD
import { nameOf, firstLetterLowercase } from "./Implementation/Helpers";
import { Reactify } from "./API";



export function Reactified<T extends Observable>(observable: T, name?: string) { 

    if(!name) {
        name = firstLetterLowercase(nameOf(observable));
    }
=======
import { Container, HostContext, Instance, CustomNodeHierarchyManager } from "react-nativescript/dist/shared/HostConfigTypes";
import { number } from "prop-types";
import { updateListenersHelperImpl } from "./Implementation/updateListenersHelperImpl";
import { getCurrentRefImpl } from "./Implementation/getCurrentRefImpl";
import { componentDidMountImpl } from "./Implementation/React/componentDidMountImpl"
import { componentWillUnmountImpl } from "./Implementation/React/componentWillUnmountImpl";
import { shouldComponentUpdateImpl } from "./Implementation/React/shouldComponentUpdateImpl";
import { firstLetterLowercase, nameOf } from "./Implementation/Helpers";

export function Reactified<T extends Observable>(observable: T, name?: string) { 
    
    if(!name) {
        name = firstLetterLowercase(nameOf(observable));
    }
    
>>>>>>> a3b5339711abfeaa0959f5eb65d1eeace8042726
    console.log("registering " + name);
    register(name, () => {
       return observable;
    });
<<<<<<< HEAD

    
    return class extends Reactify<T> {
=======
    
    // const WithObservableImpl = observableImpl(Reactify);
    
    return class Reactify extends React.Component<T & ExtraProps<T>, any>{
        static countOfInstances = 0;
        // static defaultProps = {... observable } 
        /*
        constructor(props: T & ExtraProps<T>) {
            super(props);
            Reactify.countOfInstances ++;
            console.log("constructing instance " + Reactify.countOfInstances);
        }
        */
        protected myNativeScriptType = observable;
        protected myRef: React.RefObject<T> = React.createRef<T>();;
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
>>>>>>> a3b5339711abfeaa0959f5eb65d1eeace8042726
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
<<<<<<< HEAD
    }    // have to declare class name to make decorators work  // https://github.com/microsoft/TypeScript/issues/7342
}
=======
    }        
} // have to declare class name to make decorators work  // https://github.com/microsoft/TypeScript/issues/7342

>>>>>>> a3b5339711abfeaa0959f5eb65d1eeace8042726


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

<<<<<<< HEAD


// export const MyObservable: React.ComponentType<PropsWithoutForwardedRef<Observable> & ExtraProps<Observable>> & React.ClassAttributes<Observable> = JSX(new Observable());
// export const MyButton = JSX(new Button());
=======
// export const MyObservable: React.ComponentType<PropsWithoutForwardedRef<Observable> & ExtraProps<Observable>> & React.ClassAttributes<Observable> = JSX(new Observable());
// export const MyButton = JSX(new Button());

>>>>>>> a3b5339711abfeaa0959f5eb65d1eeace8042726
// export const MyContentView: React.ComponentType<PropsWithoutForwardedRef<ContentView & ExtraProps<ContentView>>> & React.ClassAttributes<ContentView> = JSX(new ContentView());
