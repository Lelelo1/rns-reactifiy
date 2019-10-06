import { Observable, ViewBase, View, Page } from "react-nativescript/dist/client/ElementRegistry";
import { ExtraProps } from "../ExtraProps";

export type Reactify<T extends Observable> = React.Component<T & ExtraProps<T>, any>;

export type Props<T extends Observable> = T & ExtraProps<T>;


/*
export type Observable<T> = T extends Observable ? Reactify<Observable> : Empty

export type ViewBase<T> = T extends ViewBase ? Reactify<ViewBase> : Empty;

export type View<T> = T extends View ? Reactify<View> : Empty;

interface Empty {

}
*/
/*
export const tryCast = <T extends Observable>(instance: Reactify<T>) => {
    if((instance.props) as Props<T>) {
        console.log("Was instance");
        return instance;
    }
    console.log("Was not instance");
    return null;
}
*/
// https://stackoverflow.com/questions/17392349/how-can-i-check-if-element-is-an-instanceof-u
/*
export function tryCast<T>(instance: any) {
    if(instance instanceof T) {
        console.log("was");
        return instance;
    }
    console.log("was not");
    return null;
}
*/

// https://stackoverflow.com/questions/23533374/compare-types-in-generic-function-using-typescript
// helper method to be able to cast Reactify<Observable> to Reactify<View>  etc


// helper method to be able to cast Reactify<Observable> to Reactify<View>  etc 
export const tryCast = <T>(parameter: any) => {
    return parameter as T;
}
