import { EventData } from "tns-core-modules/data/observable/observable";
import { Observable, SearchBar } from "react-nativescript/dist/client/ElementRegistry";
import { Reactify } from "../Types";
import { executeInOrder } from "../Helpers";

export const onTextChangeImpl = <T extends Observable>(instance: Reactify<T>, args: EventData) => {
    executeInOrder([searchBarImpl], instance, args);
}
const searchBarImpl = <T extends SearchBar>(instance: Reactify<T>, args: EventData) => {
    
    if(!(Reflect.get(instance, "tnsType") instanceof SearchBar)) return;
    
    const text: string = (<SearchBar>args.object).text;
    instance.props.onTextChange && instance.props.onTextChange(text);
}