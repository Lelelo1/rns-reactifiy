import { EventData, Observable } from "tns-core-modules/data/observable/observable";
import { Switch } from "react-nativescript/dist/client/ElementRegistry";
import { executeInOrder } from "../Helpers";
import { Reactify, Base } from "../Types";

export const onToggleImpl = <T extends Base>(instance: Reactify<T>, args: EventData ) => {
    executeInOrder([switchImpl], instance, args);
}

const switchImpl = <T extends Switch>(instance: Reactify<T>, args: EventData) => {
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof Switch)) return;
    
    const checked: boolean = (<Switch>args.object).checked;

        instance.props.onToggle && instance.props.onToggle(checked);
}