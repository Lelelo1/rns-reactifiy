
import * as React from "react";
import { Observable, Button } from "react-nativescript/dist/client/ElementRegistry";
import { executeInOrder } from "../Helpers";
import { Reactify } from "../Types";

export const renderImpl = <T extends Observable>(name:string, instance: Reactify<T>): React.ReactNode => {
    return executeInOrder([genericImpl, buttonImpl], name, instance);
}
const genericImpl = <T extends Observable>(name: string, instance: Reactify<T>) => {
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