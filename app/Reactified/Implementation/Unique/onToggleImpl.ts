import { EventData, Observable } from "tns-core-modules/data/observable/observable";
import { Switch } from "react-nativescript/dist/client/ElementRegistry";
import { executeInOrder } from "../Helpers";
import { Reactify } from "../Types";

export const onToggleImpl = <T extends Observable>(instance: Reactify<T>, args: EventData ) => {
    executeInOrder([switchImpl], instance, args);
}

const switchImpl = <T extends Switch>(instance: Reactify<T>, args: EventData) => {
    const checked: boolean = (<Switch>args.object).checked;

        instance.props.onToggle && instance.props.onToggle(checked);
}