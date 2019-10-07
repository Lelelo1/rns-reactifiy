
import { EventData } from "tns-core-modules/data/observable/observable";
import {
    Observable,
    View,
    Page,
    ActionItem,
    EditableTextBase,
    Frame,
    Placeholder,
    ScrollView,
    SearchBar,
    SegmentedBar,
    TabView
} from "react-nativescript/dist/client/ElementRegistry";

import { ExtraProps } from "../ExtraProps";
import { updateListener } from "react-nativescript/dist/client/EventHandling";
import { GestureTypes } from "tns-core-modules/ui/gestures/gestures";
import { tryCast, Props, Reactify } from "./Types";
import { executeInOrder } from "./Helpers";

export const updateListenersImpl = <T extends Observable>(instance: Reactify<T> ,node: T, attach: boolean | null, nextProps?: Props<T>) => {
    
    /* implementation for any rns component here - or on reactify class body*/
    executeInOrder(
        [pageImpl,
        viewImpl,
        observableImpl,
        actionItemImpl,
        editableTextBaseImpl,
        frameImpl,
        placeholderImpl,
        scrollViewImpl,
        searchBarImpl,
        segmentedBarImpl,
        tabViewImpl
    ],
    instance, node, attach);
}
const observableImpl = <T extends Observable>(instance: Reactify<Observable>, node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => {
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof Observable)) return;

    console.log("observableImpl");
    if (attach === null) {
        updateListener(node, "propertyChange", instance.props.onPropertyChange, nextProps.onPropertyChange);
    } else {
        const method = (attach ? node.on : node.off).bind(node);
        if (instance.props.onPropertyChange) method("propertyChange", instance.props.onPropertyChange);
    }
    
}

// https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/View.ts
const viewImpl = <T extends View>(instance: Reactify<T>, node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => {
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof View)) return;
    
    console.log("view impl");
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

const actionItemImpl = <T extends ActionItem>(instance: Reactify<T>, node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => {
    /* tap assigning tap on actionitem crashes */
    /* should be conditionally ran so that two tap gesture recognizers aren't added*/
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof ActionItem)) return;

    console.log("actionItemImpl")
    if (attach === null) {
        updateListener(node, "tap", instance.props.onTap, nextProps.onTap);
    } else {
        const method = (attach ? node.on : node.off).bind(node);
        if (instance.props.onTap) method("tap", instance.props.onTap);
    }
    
}
const pageImpl = <T extends Page>(instance: Reactify<T>, node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => {
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof Page)) return;
    
    console.log("pageImpl");
    if (attach === null) {
        updateListener(node, "navigatedFrom", instance.props.onNavigatedFrom, nextProps.onNavigatedFrom);
        updateListener(node, "navigatedTo", instance.props.onNavigatedTo, nextProps.onNavigatedTo);
        updateListener(node, "navigatingFrom", instance.props.onNavigatingFrom, nextProps.onNavigatingFrom);
        updateListener(node, "navigatingTo", instance.props.onNavigatingTo, nextProps.onNavigatingTo);
    } else {
        const method = (attach ? node.on : node.off).bind(node);
        
        if (instance.props.onNavigatedFrom) method("navigatedFrom", instance.props.onNavigatedFrom);
        if (instance.props.onNavigatedTo) method("navigatedTo", instance.props.onNavigatedTo);
        if (instance.props.onNavigatingFrom) method("navigatingFrom", instance.props.onNavigatingFrom);
        if (instance.props.onNavigatingTo) method("navigatingTo", instance.props.onNavigatingTo);
    }
}

const editableTextBaseImpl = <T extends EditableTextBase>(instance: Reactify<T>, node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => {
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof ActionItem)) return;
    
    console.log("editableTextBaseImpl");
    if (attach === null) {
        updateListener(node, "blur", instance.props.onBlur, nextProps.onBlur);
        updateListener(node, "focus", instance.props.onFocus, nextProps.onFocus);
        updateListener(node, "textChange", instance.props.onTextChange, nextProps.onTextChange);
    } else {
        const method = (attach ? node.on : node.off).bind(node);
        if (instance.props.onBlur) method("blur", instance.props.onBlur);
        if (instance.props.onFocus) method("focus", instance.props.onFocus);
        if (instance.props.onTextChange) method("textChange", instance.props.onTextChange);
    }
}
const frameImpl = <T extends Frame>(instance: Reactify<T>, node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => {
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof Frame)) return;
    
    console.log("frameImpl");
    if (attach === null) {
        updateListener(node, "optionSelected", instance.props.onOptionSelected, nextProps.onOptionSelected);
    } else {
        const method = (attach ? node.on : node.off).bind(node);

        if (instance.props.onOptionSelected) method("optionSelected", instance.props.onOptionSelected);
    }
}
const placeholderImpl = <T extends Placeholder>(instance: Reactify<T>, node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => { 
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof Placeholder)) return;

    console.log("placeholderImpl");
    if (attach === null) {
        updateListener(node, "creatingView", instance.props.onCreatingView, nextProps.onCreatingView);
    } else {
        const method = (attach ? node.on : node.off).bind(node);
        if (instance.props.onCreatingView) method("creatingView", instance.props.onCreatingView);
    }
}
const scrollViewImpl = <T extends ScrollView>(instance: Reactify<T>, node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => { 
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof ScrollView)) return;
    
    console.log("scrollViewImpl");
    if (attach === null) {
        updateListener(node, "scroll", this.props.onScroll, nextProps.onScroll);
    } else {
        const method = (attach ? node.on : node.off).bind(node);
    
        if (instance.props.onScroll) method("scroll", instance.props.onScroll);
    }
}
const searchBarImpl = <T extends SearchBar>(instance: Reactify<T>, node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => { 
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof SearchBar)) return;
    
    console.log("searchBarImpl");
    if (attach === null) {
        updateListener(node, "submit", instance.props.onSubmit, nextProps.onSubmit);
        updateListener(node, "close", instance.props.onClose, nextProps.onClose);
    } else {
        const method = (attach ? node.on : node.off).bind(node);

        if (instance.props.onSubmit) method("submit", instance.props.onSubmit);
        if (instance.props.onClose) method("close", instance.props.onClose);
    }
}
const segmentedBarImpl = <T extends SegmentedBar>(instance: Reactify<T>, node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => { 
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof SegmentedBar)) return;

    console.log("segmentedBarImpl");
    if (attach === null) {
        updateListener(
            node,
            "selectedIndexChange",
            instance.props.onSelectedIndexChange,
            nextProps.onSelectedIndexChange
        );
    } else {
        const method = (attach ? node.on : node.off).bind(node);

        if (instance.props.onSelectedIndexChange) method("selectedIndexChange", instance.props.onSelectedIndexChange);
    }
}
const tabViewImpl = <T extends TabView>(instance: Reactify<T>, node: T, attach: boolean | null, nextProps?: T & ExtraProps<T>) => { 
    
    if(!(Reflect.get(instance, "getCurrentRef")() instanceof TabView)) return;
    
    console.log("tabViewImpl");
    if (attach === null) {
        updateListener(
            node,
            "selectedIndexChange",
            instance.props.onSelectedIndexChange,
            nextProps.onSelectedIndexChange
        );
    } else {
        const method = (attach ? node.on : node.off).bind(node);
    
        if (instance.props.onSelectedIndexChange) method("selectedIndexChange", instance.props.onSelectedIndexChange);
    }
}



