import { Observable, EventData } from "tns-core-modules/data/observable/observable";
import { ExtraProps } from "../ExtraProps";
import { updateListener } from "react-nativescript/dist/client/EventHandling";
import { GestureTypes } from "tns-core-modules/ui/gestures/gestures";
import { View } from "tns-core-modules/ui/core/view/view";


/*
export const observableImpl = <T extends Observable>(instance: React.Component<T & ExtraProps<T>>) => {

}
*/

/* given in child to parent order - as it should be executed - or does it matter?*/


export const observableImpl = <T extends Observable>(instance: React.Component<T & ExtraProps<T>>) => {
    this.updateListenersHelper(true);
}

export const viewBaseImpl = <T extends Observable>(instance: React.Component<T & ExtraProps<T>>) => {
    // none
}

