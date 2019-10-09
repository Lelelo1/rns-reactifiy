import { Observable } from "tns-core-modules/data/observable/observable";

import { ExtraProps } from "~/Reactified/ExtraProps";
import { shallowEqual } from "react-nativescript/dist/client/shallowEqual";
import { Reactify, Base } from "../Types";


export const shouldComponentUpdateImpl = <T extends Base>(instance: Reactify<T>, nextProps: T & ExtraProps<T>, nextState: any): boolean => {
    return observableImpl(instance, nextProps, nextState);
}

const observableImpl = <T extends Base>(instance: Reactify<T>, nextProps: T & ExtraProps<T>, nextState: any) => {
    
    // if(!(Reflect.get(instance, "getCurrentRef")() instanceof Observable)) return;
    
    // console.log(`Observable's shouldComponentUpdate`);
    const shouldUpdate: boolean = !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    // console.log(`[shouldComponentUpdate] shouldUpdate: ${shouldUpdate}.`);
    Reflect.get(instance, "updateListenersHelper")(null, nextProps);
    // https://lucybain.com/blog/2018/react-js-pure-component/
    return shouldUpdate;
}