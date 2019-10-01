import { Observable } from  "tns-core-modules/data/observable/observable";
import { ExtraProps } from "./ExtraProps";
/* methods that are added other than those from react component or nativescript component*/
export interface Extras<T extends Observable> {
    myRef: React.RefObject<T>;
    getCurrentRef(): T | null;
    updateListenersHelper(attach: boolean | null, nextProps?: T & ExtraProps<T>): void;
    updateListeners(node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>): void;
}