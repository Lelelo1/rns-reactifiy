import { Observable } from  "tns-core-modules/data/observable/observable";
// import { Reactify } from "./Types";
import { ExtraProps } from "../ExtraProps";
import { Reactify, Base } from "./Types";

export function getCurrentRefImpl <T extends Base>(instance: Reactify<T>): T | null {
    const ref = (instance.props.forwardedRef || Reflect.get(instance, "myRef")).current;
    return ref;
}



