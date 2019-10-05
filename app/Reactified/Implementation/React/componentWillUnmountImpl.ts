import { Observable } from "tns-core-modules/data/observable/observable";
import { Reactify } from "~/Reactified/API";



export const componentWillUnmountImpl = <T extends Observable>(instance: Reactify<T>) => {
    observableImpl(instance);
}

const observableImpl = <T extends Observable>(instance: Reactify<T>) => {
    Reflect.get(instance, "updateListenersHelper")(false);
}