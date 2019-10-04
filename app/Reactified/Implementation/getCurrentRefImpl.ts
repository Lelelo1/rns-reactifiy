import { Observable } from  "tns-core-modules/data/observable/observable";
// import { Reactify } from "./Types";
import { ExtraProps } from "../ExtraProps";
import { Reactify } from "./Types";

export function getCurrentRefImpl <T extends Observable>(instance: Reactify<T>): T | null {
    return (instance.props.forwardedRef || Reflect.get(instance, "myRef")).current;
}



