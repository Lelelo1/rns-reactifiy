import { Observable, EventData } from "tns-core-modules/data/observable/observable";
import { ExtraProps } from "./ExtraProps";
import { updateListener } from "react-nativescript/dist/client/EventHandling";
import { GestureTypes } from "tns-core-modules/ui/gestures/gestures";
import { View } from "tns-core-modules/ui/core/view/view";
import {Reactified} from "./Reactified";


/*
type Constructor<R> = new(...args: any[]) => R;
export const observableImpl= <T extends Observable, R extends Constructor<React.Component<T & ExtraProps<T>, any>>>(reactify: R) => {
    return class extends reactify {
        helloWorld = () => { console.log("helloWorld!"); super}
    }
}
*/
/* can't add methods with decorators
export function observableImpl<T extends Observable>(observable: T) {
    return function<R extends Constructor<{}>>(reactify: R) {
        return class extends reactify {
            helloWorld = () => { console.log("helloWorld!"); }
        }
    }
}
*/

// https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/View.ts
export const viewImpl = <T extends Observable>(instance: React.Component<T & ExtraProps<T>, any>,node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => {
    console.log("viewImpl...");
    if (attach === null) {
        updateListener(node, "loaded", instance.props.onLoaded, nextProps.onLoaded);
        updateListener(node, "unloaded", instance.props.onUnloaded, nextProps.onUnloaded);
        updateListener(node, "androidBackPressed", instance.props.onAndroidBackPressed, nextProps.onAndroidBackPressed);
        updateListener(node, "showingModally", instance.props.onShowingModally, nextProps.onShowingModally);
        updateListener(node, "shownModally", instance.props.onShownModally, nextProps.onShownModally);
        updateListener(node, GestureTypes.tap, instance.props.onTap, nextProps.onTap, "tap");
        updateListener(node, GestureTypes.doubleTap, instance.props.onDoubleTap, nextProps.onDoubleTap, "doubleTap");
        updateListener(node, GestureTypes.pinch, instance.props.onPinch, nextProps.onPinch, "pinch");
        updateListener(node, GestureTypes.pan, instance.props.onPan, nextProps.onPan, "pan");
        updateListener(node, GestureTypes.swipe, instance.props.onSwipe, nextProps.onSwipe, "swipe");
        updateListener(node, GestureTypes.rotation, instance.props.onRotation, nextProps.onRotation, "rotation");
        updateListener(node, GestureTypes.longPress, instance.props.onLongPress, nextProps.onLongPress, "longPress");
        updateListener(node, GestureTypes.touch, instance.props.onTouch, nextProps.onTouch, "touch");
    } else {
        const method = (attach ? node.on : node.off).bind(node);
        if (instance.props.onLoaded) method("loaded", instance.props.onLoaded);
        if (instance.props.onUnloaded) method("unloaded", instance.props.onUnloaded);
        if (instance.props.onAndroidBackPressed) method("androidBackPressed", instance.props.onAndroidBackPressed);
        if (instance.props.onShowingModally) method("showingModally", instance.props.onShowingModally);
        if (instance.props.onShownModally) method("shownModally", instance.props.onShownModally);
        if (instance.props.onTap) method(GestureTypes.tap, instance.props.onTap);
        if (instance.props.onDoubleTap) method(GestureTypes.doubleTap, instance.props.onDoubleTap);
        if (instance.props.onPinch) method(GestureTypes.pinch, instance.props.onPinch);
        if (instance.props.onPan) method(GestureTypes.pan, instance.props.onPan);
        if (instance.props.onSwipe) method(GestureTypes.swipe, instance.props.onSwipe);
        if (instance.props.onRotation) method(GestureTypes.rotation, instance.props.onRotation);
        if (instance.props.onLongPress) method(GestureTypes.longPress, instance.props.onLongPress);
        if (instance.props.onTouch) method(GestureTypes.touch, instance.props.onTouch);
    }
}

/*
// decorators: https://www.logicbig.com/tutorials/misc/typescript/method-decorator.html
type updateListeners<T extends Observable> = (node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => void
// https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/View.ts
export const viewImpl = <T extends Observable>() => { // might not event want generic here?
    return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<updateListeners<T>>) => {

    }
}
*/