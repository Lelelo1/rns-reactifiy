import * as React from "react";
import { Observable, EventData } from "tns-core-modules/data/observable/observable";
import { register, ContentView } from "react-nativescript/dist/client/ElementRegistry";
import { nameOf, firstLetterLowercase } from "./Implementation/Helpers";
import { Reactify } from "./API";
import { renderImpl } from "./Implementation/React/renderImpl";



export function Reactified<T extends Observable>(observable: T, name?: string) { 

    if(!name) {
        name = firstLetterLowercase(nameOf(observable));
    }
    console.log("registering " + name);
    register(name, () => {
       return observable;
    });

    
    return class extends Reactify<T> {
        render(): React.ReactNode {
            return renderImpl(name, this, observable);
        }
    }    // have to declare class name to make decorators work  // https://github.com/microsoft/TypeScript/issues/7342
}


// React.Component<T & ExtraProps<T>

/* 
// Are not actually needed ?!
function JSX<T extends Observable>(observable: new(...args: any[]) => React.Component<T & ExtraProps<T>>) {
    return React.forwardRef<T, PropsWithoutForwardedRef<T & ExtraProps<T>>>(
        (props: React.PropsWithChildren<PropsWithoutForwardedRef<T & ExtraProps<T>>>, ref: React.RefObject<T>) => {
            const { children, ...rest } = props;
            return React.createElement(
                observable
                ,
                {
                    ...rest,
                    forwardedRef: ref,
                },
                children
            );
        }
    )
}
*/



// export const MyObservable: React.ComponentType<PropsWithoutForwardedRef<Observable> & ExtraProps<Observable>> & React.ClassAttributes<Observable> = JSX(new Observable());
// export const MyButton = JSX(new Button());
// export const MyContentView: React.ComponentType<PropsWithoutForwardedRef<ContentView & ExtraProps<ContentView>>> & React.ClassAttributes<ContentView> = JSX(new ContentView());
