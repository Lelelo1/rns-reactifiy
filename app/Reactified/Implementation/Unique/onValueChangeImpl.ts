import { EventData, Observable } from "tns-core-modules/data/observable/observable";
import { Slider } from "react-nativescript/dist/client/ElementRegistry";
import { executeInOrder } from "../Helpers";
import { Reactify, Base } from "../Types";

export const onValueChangeImpl = <T extends Base>(instance: Reactify<T>, args: EventData ) => {
    executeInOrder([sliderImpl], instance, args);
}
/* typo found in https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/Slider.ts */
const sliderImpl = <T extends Slider>(instance: Reactify<T>, args: EventData) => {
    
    if(!(Reflect.get(instance, "tnsType") instanceof Slider)) return;
    
    const sliderValue: number = (<Slider>args.object).value;

        instance.props.onValueChange && instance.props.onValueChange(sliderValue);
}