import { Observable } from  "tns-core-modules/data/observable/observable";
import { Reactify } from "../Types";
export const getCurrentRefImpl = <T extends Observable>(instance: Reactify<T>) => {
    console.log("getRef: " + (instance.props.forwardedRef || instance.myRef).current);
    return (instance.props.forwardedRef || instance.myRef).current;
}