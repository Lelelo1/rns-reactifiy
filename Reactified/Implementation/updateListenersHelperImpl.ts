import { Observable } from "tns-core-modules/data/observable/observable";
import { ExtraProps } from "../ExtraProps";
import { Reactify, Base, Props } from "./Types";
// import { Reactify } from "./Types";

/*
export const observableImpl = <T extends Observable>(instance: React.Component<T & ExtraProps<T>>, attach: boolean | null, nextProps?: P) => {
    
}
*/
export const updateListenersHelperImpl = <T extends Base>(instance: Reactify<T>, attach: boolean | null, nextProps?: Props<T>) => {
    observableImpl(instance, attach, nextProps);
}

const observableImpl = <T extends Base>(instance: Reactify<T>, attach: boolean | null, nextProps?: Props<T>) => {
    
    // if(!(Reflect.get(instance, "getCurrentRef")() instanceof Observable)) return;
    
    const node: T | null = Reflect.get(instance, "getCurrentRef")();
        if (node === null) {
        // console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
            return;
        }
        Reflect.get(instance, "updateListeners")(node, attach, nextProps);
}