
import * as React from "react";
import { Observable, Button, TextField, HtmlView, Label } from "react-nativescript/dist/client/ElementRegistry";
import { executeInOrder } from "../Helpers";
import { Reactify } from "../Types";

export const renderImpl = <T extends Observable>(name:string, instance: Reactify<T>, observable: T): React.ReactNode => {
    return executeInOrder([genericImpl, buttonImpl, textFieldImpl, htmlViewImpl, labelImpl], name, instance, observable);
}
const genericImpl = <T extends Observable>(name: string, instance: Reactify<T>, observable: T) => {
    console.log("generic render");
    const { forwardedRef, children, ...rest } = instance.props
    return React.createElement(
        name,
        {
        ...rest,
        ref: forwardedRef || Reflect.get(instance, "myRef"),
        },
        children
    );
}

const buttonImpl = (name:string, instance: Reactify<Button>, observable: Button) => {
    if(observable instanceof Button) {
        console.log("buttonImpl");
        const {
            forwardedRef,
            text,
            formattedText,
            children,
            ...rest
        } = instance.props;
    
        if (text && formattedText) {
            console.warn(`Both text and formattedText provided; shall use formattedText.`);
        }
    
        const textContent = {
            [formattedText ? "formattedText" : "text"]: formattedText || text,
        };
    
        return React.createElement(
            name,
            {
                className: "btn btn-primary btn-active", // NativeScript defaults from documentation
                ...rest,
                ...textContent,
                ref: forwardedRef || Reflect.get(instance, "myRef"),
            },
            children // Weird that a button may contain children, but what do I know.
        );
    }
    return undefined;
}

const textFieldImpl = (name:string, instance: Reactify<TextField>, observable: TextField) => {
    if(observable instanceof TextField) {
        const {
            forwardedRef,
    
    
            text,
            formattedText,
            children,
            ...rest
        } = instance.props;
    
        if (text && formattedText) {
            console.warn(`Both text and formattedText provided; shall use formattedText.`);
        }
    
        const textContent = {
            [formattedText ? "formattedText" : "text"]: formattedText || text,
        };
    
        return React.createElement(
            name,
            {
                ...rest,
                ...textContent,
                ref: forwardedRef || Reflect.get(instance, "myRef"),
            },
            children // Weird that a TextField may contain children, but what do I know.
        );
    }
    return undefined;
}

const htmlViewImpl = (name:string, instance: Reactify<HtmlView>, observable: HtmlView) => {
    if(observable instanceof HtmlView) {
        const {
            forwardedRef,
            children,
    
            ...rest
        } = instance.props;
    
        if (children) {
            console.warn("Ignoring 'children' prop on HtmlView; not permitted");
        }
    
        return React.createElement(
            name,
            {
                ...rest,
                ref: forwardedRef || Reflect.get(instance, "myRef"),
            },
            null
        );
    }
    return undefined;
}

const labelImpl = (name:string, instance: Reactify<Label>, observable: Label) => {
    if(observable instanceof Label) {
        console.log("label impl");
        const {
            forwardedRef,
    
            onLoaded,
            onUnloaded,
            onAndroidBackPressed,
            onShowingModally,
            onShownModally,
    
            onTap,
            onDoubleTap,
            onPinch,
            onPan,
            onSwipe,
            onRotation,
            onLongPress,
            onTouch,
    
            onPropertyChange,
    
            text,
            formattedText,
            children,
            ...rest
        } = instance.props;
    
        if (text && formattedText) {
            console.warn(`Both text and formattedText provided; shall use formattedText.`);
        }
    
        const textContent = {
            [formattedText ? "formattedText" : "text"]: formattedText || text,
        };
    
        return React.createElement(
            name,
            {
                ...rest,
                ...textContent,
                ref: forwardedRef || Reflect.get(instance, "myRef"),
            },
            children // Weird that a Label may contain children, but what do I know.
        );
    }
    return undefined;
}