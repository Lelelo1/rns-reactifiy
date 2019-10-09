import { Observable, DatePicker, ListPicker, SearchBar, Slider, Switch } from "react-nativescript/dist/client/ElementRegistry";
import { executeInOrder } from "../Helpers";
import { Reactify, Base } from "../Types";



export const componentWillUnmountImpl = <T extends Base>(instance: Reactify<T>) => {
    executeInOrder(
        [observableImpl,
        datePickerImpl,
        listPickerImpl,
        searchBarImpl,
        sliderImpl,
        switchImpl], 
        instance);
}

const observableImpl = <T extends Base>(instance: Reactify<T>) => {
    
    // if(!(Reflect.get(instance, "getCurrentRef")() instanceof Observable)) return;
    
    Reflect.get(instance, "updateListenersHelper")(false);
}
const datePickerImpl = <T extends DatePicker>(instance: Reactify<T>) => {
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof DatePicker)) return;
    
    const node: T | null = Reflect.get(instance, "getCurrentRef")();
    if (!node) {
        console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
        return;
    }
    node.off("dateChange", Reflect.get(instance, "onDateChange"));
}
const listPickerImpl = <T extends ListPicker>(instance: Reactify<T>) => {
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof ListPicker)) return;
    
    const node: T | null = this.getCurrentRef();
        if (!node) {
            console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
            return;
        }
        node.off("selectedIndexChange", Reflect.get(instance, "onSelectedIndexChange"));
}
const searchBarImpl = <T extends SearchBar>(instance: Reactify<T>) => {
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof SearchBar)) return;
    
    const node: T | null = Reflect.get(instance, "getCurrentRef")();
        if (!node) {
            console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
            return;
        }
        node.off("textChange", Reflect.get(instance, "onTextChange"));
}

/* (this slider impl not the same as the others. Is probably an error) */
const sliderImpl = <T extends Slider>(instance: Reactify<T>) => {

    if(!(Reflect.get(instance, "getCurrentRef")() instanceof Slider)) return;

    const node: T | null = Reflect.get(instance, "getCurrentRef")();
        if (!node) {
            node.off("valueChange", Reflect.get(instance, "onValueChange"));
            return;
        }
        console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`)
}
const switchImpl = <T extends Switch>(instance: Reactify<T>) => {
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof Switch)) return;
    
    const node: T | null = Reflect.get(instance, "getCurrentRef")();
        if (!node) {
            console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
            return;
        }
        node.off("checkedChange", Reflect.get(instance, "onToggle"));
}