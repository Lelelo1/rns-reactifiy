import * as React from "react";
import { Observable, EventData } from "tns-core-modules/data/observable/observable";
import { Button } from "tns-core-modules/ui/button/button";
import { updateListener } from "react-nativescript/dist/client/EventHandling";
import { shallowEqual } from "react-nativescript/dist/client/shallowEqual";
import { ExtraProps } from "./ExtraProps";
import { viewImpl } from "./Implementation";
import { GestureTypes } from "tns-core-modules/ui/gestures/gestures";


export function Reactified<T extends Observable & ExtraProps<T>>(observable: T) {

    class Reactify extends React.Component<T & ExtraProps<T>, any> {
        
        // static defaultProps = {... observable } 
        constructor(props: ExtraProps<T>) {
            super({... observable, props});
            console.log("constructor: " + JSON.stringify(props));
        }
        protected readonly myRef: React.RefObject<T> = React.createRef<T>();
        protected getCurrentRef(): T | null {
            console.log("getRef: " + (this.props.forwardedRef || this.myRef).current);
            return (this.props.forwardedRef || this.myRef).current;
        }
        /**
        * Helper method for updateListeners: simply gets the current ref to pass on to it.
        * @param attach true: attach; false: detach; null: update
        */
        protected updateListenersHelper(attach: boolean | null, nextProps?: T & ExtraProps<T>): void {
            const node: T | null = this.getCurrentRef();
            if (node === null) {
                console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
                return;
            }
            this.updateListeners(node, attach, nextProps);
        }
        /**
        *
        * @param attach true: attach; false: detach; null: update
        */

        protected updateListeners(node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>): void {
            if (attach === null) {
                updateListener(node, "propertyChange", this.props.onPropertyChange, nextProps.onPropertyChange);
            } else {
                const method = (attach ? node.on : node.off).bind(node);
                if (this.props.onPropertyChange) method("propertyChange", this.props.onPropertyChange);
            }
            viewImpl(this, node, attach, nextProps);
        }
        componentDidMount() {
            this.updateListenersHelper(true);
            console.log("componentDidMount: " + JSON.stringify(this.getCurrentRef()));
        }
        /**
        * PureComponent's shouldComponentUpdate() method is ignored and replaced with a shallowEqual()
        * comparison of props and state. We'll implement our Component's shouldComponentUpdate() to
        * match the way PureComponent is handled.
        */
        shouldComponentUpdate(nextProps: T & ExtraProps<T>, nextState: any): boolean {
            // console.log(`Observable's shouldComponentUpdate`);
            const shouldUpdate: boolean = !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
            // console.log(`[shouldComponentUpdate] shouldUpdate: ${shouldUpdate}.`);

            this.updateListenersHelper(null, nextProps);

            // https://lucybain.com/blog/2018/react-js-pure-component/
            return shouldUpdate;
        }
        componentWillUnmount() {
            this.updateListenersHelper(false);
        }
        render(): React.ReactNode {
            const { forwardedRef, children, ...rest } = this.props
            return React.createElement(
                firstLetterLowercase(nameOf(observable)),
                {
                    ...rest,
                    ref: forwardedRef || this.myRef,
                },
                children
            );
        }
    }
    return Reactify; // have to declare class name to make decorators work  // https://github.com/microsoft/TypeScript/issues/7342
}

// helpers to register to elementRegistry
function nameOf(object: Object): string {
    return object.constructor.name;
}
function firstLetterLowercase(name: string) {
    return name.charAt(0).toLocaleLowerCase + name.slice(1);
}
