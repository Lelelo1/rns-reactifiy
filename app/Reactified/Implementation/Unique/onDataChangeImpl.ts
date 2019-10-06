
import { EventData } from "tns-core-modules/data/observable/observable";
import { DatePicker } from "react-nativescript/dist/client/ElementRegistry";
import { executeInOrder } from "../Helpers";

export const onDataChangeImpl = (args: EventData ) => {
    executeInOrder([datePickerImpl], args);
}

const datePickerImpl = (args: EventData) => {
    const date: Date = (<DatePicker>args.object).date;
    this.props.onDateChange && this.props.onDateChange(date);
}
