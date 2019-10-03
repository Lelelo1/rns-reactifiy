import { Observable } from "tns-core-modules/data/observable/observable";
import { Reactify } from "../Types";

export const componentDidMountImpl = <T extends Observable>(instance: Reactify<T>) => {
    observableImpl(instance);
}

const observableImpl = <T extends Observable>(instance: Reactify<T>) => {
    instance.updateListenersHelper(true);
}
/*
const viewBaseImpl = <T extends Observable>(instance: React.Component<T & ExtraProps<T>>) => {
    // none
}
*/
