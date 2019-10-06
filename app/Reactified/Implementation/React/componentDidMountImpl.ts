import { Observable } from "tns-core-modules/data/observable/observable";
import { DatePicker } from "react-nativescript/dist/client/ElementRegistry";
import { executeInOrder } from "../Helpers";
import { Reactify } from "../Types";

export const componentDidMountImpl = <T extends Observable>(instance: Reactify<T>) => {
    executeInOrder([observableImpl, datePickerImpl], instance);
    
}

const observableImpl = <T extends Observable>(instance: Reactify<T>) => {
    Reflect.get(instance, "updateListenersHelper")(true);
}
const datePickerImpl = <T extends DatePicker>(instance: Reactify<T>) => {
    if(instance) {
        const node: T | null = Reflect.get(instance, "getCurrentRef")();
        if (!node) {
            console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
            return;
        }
        node.on("dateChange", Reflect.get(instance, "onDateChange"));
    }
}
