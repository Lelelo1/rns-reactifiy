import { Observable, ViewBase, View } from "react-nativescript/dist/client/ElementRegistry";
import { ExtraProps } from "../ExtraProps";
import { Extras } from "../Extras";

export type Reactify<T extends Observable> = React.Component<Props<T>> & Extras<T>;
export type Props<T> = T & ExtraProps<T>;
/*
export type Observable<T> = T extends Observable ? Reactify<Observable> : Empty

export type ViewBase<T> = T extends ViewBase ? Reactify<ViewBase> : Empty;

export type View<T> = T extends View ? Reactify<View> : Empty;

interface Empty {

}
*/

// helper method to be able to cast Reactify<Observable> to Reactify<View>  etc 
export const tryCast = <T>(parameter: any) => {
    return parameter as T;
}