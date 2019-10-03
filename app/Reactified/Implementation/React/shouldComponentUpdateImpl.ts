import { Observable } from "tns-core-modules/data/observable/observable";
import { Reactify } from "../Types";
import { ExtraProps } from "~/Reactified/ExtraProps";
import { shallowEqual } from "react-nativescript/dist/client/shallowEqual";


export const shouldComponentUpdateImpl = <T extends Observable>(instance: Reactify<T>, nextProps: T & ExtraProps<T>, nextState: any): boolean => {
    return observableImpl(instance, nextProps, nextState);
}
const observableImpl = <T extends Observable>(instance: Reactify<T>, nextProps: T & ExtraProps<T>, nextState: any) => {
    // console.log(`Observable's shouldComponentUpdate`);
    const shouldUpdate: boolean = !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    // console.log(`[shouldComponentUpdate] shouldUpdate: ${shouldUpdate}.`);

    this.updateListenersHelper(null, nextProps);

    // https://lucybain.com/blog/2018/react-js-pure-component/
    return shouldUpdate;
}