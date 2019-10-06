import { Observable } from "tns-core-modules/data/observable/observable";
import { DatePicker, ListPicker, SearchBar, Slider, Switch } from "react-nativescript/dist/client/ElementRegistry";
import { executeInOrder } from "../Helpers";
import { Reactify } from "../Types";

export const componentDidMountImpl = <T extends Observable>(instance: Reactify<T>) => {
    executeInOrder(
        [observableImpl,
        datePickerImpl,
        listPickerImpl,
        searchBarImpl,
        sliderImpl,
        switchImpl],
        instance);
    
}

const observableImpl = <T extends Observable>(instance: Reactify<T>) => {
    Reflect.get(instance, "updateListenersHelper")(true);
}
const datePickerImpl = <T extends DatePicker>(instance: Reactify<T>) => {
    const node: T | null = Reflect.get(instance, "getCurrentRef")();
        if (!node) {
            console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
            return;
        }
        node.on("dateChange", Reflect.get(instance, "onDateChange"));
}
const listPickerImpl = <T extends ListPicker>(instance: Reactify<T>) => {
    const node: T | null = Reflect.get(instance, "getCurrentRef")();
        if (!node) {
            console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
            return;
        }
        node.on("selectedIndexChange", Reflect.get(instance, "onSelectedIndexChange"));
}

const searchBarImpl = <T extends SearchBar>(instance: Reactify<T>) => {
    const node: T | null = Reflect.get(instance, "getCurrentRef")();
        if (!node) {
            console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
            return;
        }
        node.on("textChange", Reflect.get(instance, "onTextChange"));
}

const sliderImpl = <T extends Slider>(instance: Reactify<T>) => {
    const node: T | null = Reflect.get(instance, "getCurrentRef")();
        if (!node) {
            console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
            return;
        }
        node.on("valueChange", Reflect.get(instance, "onValueChange"));
}
const switchImpl = <T extends Switch>(instance: Reactify<T>) => {
    const node: T | null = Reflect.get(instance, "getCurrentRef")();
        if (!node) {
            console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
            return;
        }
        node.on("checkedChange", Reflect.get(instance, "onToggle"));
}

