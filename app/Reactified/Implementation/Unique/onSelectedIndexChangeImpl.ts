import { EventData } from "tns-core-modules/data/observable/observable";
import { Observable, ListPicker } from "react-nativescript/dist/client/ElementRegistry";
import { Reactify } from "../Types";
import { executeInOrder } from "../Helpers";

export const onSelectIndexChangeImpl = <T extends Observable>(instance: Reactify<T>, args: EventData) => {
    executeInOrder([listPickerImpl], instance, args);
}
const listPickerImpl = <T extends ListPicker>(instance: Reactify<T>, args: EventData) => {
    const selectedIndex: number = (<ListPicker>args.object).selectedIndex;
    instance.props.onSelectedIndexChange && instance.props.onSelectedIndexChange(selectedIndex);
}