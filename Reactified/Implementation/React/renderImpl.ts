
import * as React from "react";
import {
    Observable,
    Button,
    TextField,
    HtmlView,
    Label,
    TabView,
    TabViewItem,
    TextView,
    TimePicker,
    WebView
} from "react-nativescript/dist/client/ElementRegistry";
import { executeInOrder } from "../Helpers";
import { Reactify, Base } from "../Types";
import { CheckBox } from "@nstudio/nativescript-checkbox";

export const renderImpl = <T extends Base>(name: string, instance: Reactify<T>): React.ReactNode => {
    return executeInOrder(
        [genericImpl,
        buttonImpl,
        textFieldImpl,
        htmlViewImpl,
        labelImpl,
        tabViewItemImpl,
        textViewImpl,
        timePickerImpl,
        webViewImpl],
        name, instance);
}
const genericImpl = <T extends Base>(name: string, instance: Reactify<T>) => {
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

const buttonImpl = <T extends Button>(name: string, instance: Reactify<T>) => {

    if(!(Reflect.get(instance, "tnsType") instanceof Button)) return undefined;
    
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
                // className: "btn btn-primary btn-active", // NativeScript defaults from documentation
                ...rest,
                ...textContent,
                ref: forwardedRef || Reflect.get(instance, "myRef"),
            },
            children // Weird that a button may contain children, but what do I know.
        );
}

const textFieldImpl = <T extends TextField>(name: string, instance: Reactify<T>, observable: T) => {
    
    if(!(Reflect.get(instance, "tnsType") instanceof TextField)) return undefined;
    
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

const htmlViewImpl = <T extends HtmlView>(name: string, instance: Reactify<T>) => {
    
    if(!(Reflect.get(instance, "tnsType") instanceof HtmlView)) return undefined;
    
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

const labelImpl = <T extends Label>(name: string, instance: Reactify<T>) => {
    
    if(!(Reflect.get(instance, "tnsType") instanceof Label)) return undefined;
    
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
            children // Weird that a Label may contain children, but what do I know.
        );
}

const tabViewItemImpl = <T extends TabViewItem>(name: string, instance: Reactify<T>) => { 
    
    if(!(Reflect.get(instance, "tnsType") instanceof TabViewItem)) return undefined;
    
    const {
        forwardedRef,
    
        children,
        // view, /* We disallow this at the typings level. */
        ...rest
    } = instance.props;
    
    if (React.Children.count(children) > 1 || typeof children === "string" || typeof children === "number") {
        console.log("count: " + React.Children.count(children));
        throw new Error(
            `'children' property passed into TabViewItem must be a single child node, which must not be a number or string`
        );
    }
    
    return React.createElement(
        name,
        {
            ...rest,
            ref: forwardedRef || Reflect.get(instance, "myRef"),
        },
        children
    );
}

const textViewImpl = <T extends TextView>(name: string, instance: Reactify<T>) => {
    
    if(!(Reflect.get(instance, "tnsType") instanceof TextView)) return undefined;
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
        children // Weird that a TextView may contain children, but what do I know.
    );
}

const timePickerImpl = <T extends TimePicker>(name: string, instance: Reactify<T>) => {
    if(!(Reflect.get(instance, "tnsType") instanceof TimePicker)) return undefined;
    const {
        forwardedRef,
        time,

        children,
        ...rest
    } = instance.props;
    return React.createElement(
        name,
        {
            ...rest,
            time: time || new Date(), // Does not help!: // This prevents the default time from becoming Sun Dec 31st 1899!
            ref: forwardedRef || Reflect.get(instance, "myRef"),
        },
        children
    );
}

const webViewImpl = <T extends WebView>(name: string, instance: Reactify<T>) => {
    
    if(!(Reflect.get(instance, "tnsType") instanceof WebView)) return undefined;

    const {
        forwardedRef,

        children,
    
        ...rest
    } = instance.props;
    
    if (children) {
        console.warn("Ignoring 'children' prop on WebView; not permitted");
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


