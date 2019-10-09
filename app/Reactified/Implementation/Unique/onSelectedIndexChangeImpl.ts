import { EventData } from "tns-core-modules/data/observable/observable";
import { Observable, ListPicker } from "react-nativescript/dist/client/ElementRegistry";
import { Reactify, Base } from "../Types";
import { executeInOrder } from "../Helpers";

export const onSelectIndexChangeImpl = <T extends Base>(instance: Reactify<T>, args: EventData) => {
    executeInOrder([listPickerImpl], instance, args);
}
const listPickerImpl = <T extends ListPicker>(instance: Reactify<T>, args: EventData) => {
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof ListPicker)) return;
    
    const selectedIndex: number = (<ListPicker>args.object).selectedIndex;
    instance.props.onSelectedIndexChange && instance.props.onSelectedIndexChange(selectedIndex);
}