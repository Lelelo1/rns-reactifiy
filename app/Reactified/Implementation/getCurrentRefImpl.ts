import { Observable } from  "tns-core-modules/data/observable/observable";
// import { Reactify } from "./Types";
import { ExtraProps } from "../ExtraProps";
import { Reactify } from "./Types";
import { Instance } from "react-nativescript/dist/shared/HostConfigTypes";


export function getCurrentRefImpl <T extends Instance>(instance: Reactify<T>): T | null {
    const ref = (instance.props.forwardedRef || Reflect.get(instance, "myRef")).current;
    console.log("getCurrentRefImpl: " + ref);
    return ref;
}



