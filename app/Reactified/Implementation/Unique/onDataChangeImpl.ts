
import { EventData, Observable } from "tns-core-modules/data/observable/observable";
import { DatePicker } from "react-nativescript/dist/client/ElementRegistry";
import { executeInOrder } from "../Helpers";
import { Reactify } from "../Types";

export const onDataChangeImpl = <T extends Observable>(instance: Reactify<T>, args: EventData ) => {
    executeInOrder([datePickerImpl], instance, args);
}

const datePickerImpl = <T extends DatePicker>(instance: Reactify<T>, args: EventData) => {
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof DatePicker)) return;
    
    const date: Date = (<DatePicker>args.object).date;
    instance.props.onDateChange && instance.props.onDateChange(date);
}
