import * as React from "react";
import { updateListener } from "react-nativescript/dist/client/EventHandling";
import { shallowEqual } from "react-nativescript/dist/client/shallowEqual";
import { ExtraProps } from "./ExtraProps";
import { updateListenersHelperImpl } from "./Implementation/updateListenersHelperImpl";
import { getCurrentRefImpl } from "./Implementation/getCurrentRefImpl";
import { Observable } from "react-nativescript/dist/client/ElementRegistry";
import { updateListenersImpl } from "./Implementation/updateListenersImpl";
import { shouldComponentUpdateImpl } from "./Implementation/React/shouldComponentUpdateImpl";
import { componentWillUnmountImpl } from "./Implementation/React/componentWillUnmountImpl";
import { GestureTypes } from "tns-core-modules/ui/gestures/gestures";
import { CustomNodeHierarchyManager } from "react-nativescript/dist/shared/HostConfigTypes";
import { __customHostConfigAppendChildImpl } from "./Implementation/CustomNodeHierarchyManager/__customHostConfigAppendChildImpl";
import { __customHostConfigRemoveChildImpl } from "./Implementation/CustomNodeHierarchyManager/__customHostConfigRemoveChildImpl";
import { __customHostConfigInsertBeforeImpl } from "./Implementation/CustomNodeHierarchyManager/__customHostConfigInsertBeforeImpl";

/* declared here in seperate file so class can be accessed from impl files*/
export class Reactify<T extends Observable> extends React.Component<T & ExtraProps<T>, any> implements CustomNodeHierarchyManager<T> {
    static countOfInstances = 0;
    // static defaultProps = {... observable } 
    /*
    constructor(props: T & ExtraProps<T>) {
        super(props);
        Reactify.countOfthiss ++;
        console.log("constructing this " + Reactify.countOfthiss);
    }
    */
    protected readonly myRef: React.RefObject<T> = React.createRef<T>();
    protected getCurrentRef(): T | null {
        return getCurrentRefImpl(this);
        // return (this.props.forwardedRef || this.myRef).current;
    }
    /**
    * Helper method for updateListeners: simply gets the current ref to pass on to it.
    * @param attach true: attach; false: detach; null: update
    */
    protected updateListenersHelper(attach: boolean | null, nextProps?: T & ExtraProps<T>): void {
        // updateListenersHelperImpl(this, attach, nextProps); // can't run for some reason
        
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
        updateListenersImpl(this, node, attach, nextProps);        
    }
    componentDidMount() {
        this.updateListenersHelper(true);
    }
    /**
    * PureComponent's shouldComponentUpdate() method is ignored and replaced with a shallowEqual()
    * comparison of props and state. We'll implement our Component's shouldComponentUpdate() to
    * match the way PureComponent is handled.
    */
    shouldComponentUpdate(nextProps: T & ExtraProps<T>, nextState: any): boolean {
        /*
        // console.log(`Observable's shouldComponentUpdate`);
        const shouldUpdate: boolean = !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
        // console.log(`[shouldComponentUpdate] shouldUpdate: ${shouldUpdate}.`);

        this.updateListenersHelper(null, nextProps);

        // https://lucybain.com/blog/2018/react-js-pure-component/
        return shouldUpdate;
        */
        return shouldComponentUpdateImpl(this, nextProps, nextState);
    }
    componentWillUnmount() {
        // this.updateListenersHelper(false);
        componentWillUnmountImpl(this);
    }
    /* render */

    __ImplementsCustomNodeHierarchyManager__: true;
    __customHostConfigAppendChild?(parentInstance: T, child: Observable | import("tns-core-modules/ui/text-base/text-base").TextBase): boolean {
        return __customHostConfigAppendChildImpl(parentInstance, child);
    }
    __customHostConfigRemoveChild?(parentInstance: T, child: Observable | import("tns-core-modules/ui/text-base/text-base").TextBase): boolean {
        return __customHostConfigRemoveChildImpl(parentInstance, child);
    }
    __customHostConfigInsertBefore?(parentInstance: T, child: Observable | import("tns-core-modules/ui/text-base/text-base").TextBase, beforeChild: Observable | import("tns-core-modules/ui/text-base/text-base").TextBase): boolean {
        return __customHostConfigInsertBeforeImpl(parentInstance, child, beforeChild);
    }

}