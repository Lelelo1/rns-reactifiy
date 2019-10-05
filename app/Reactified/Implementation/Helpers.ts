import { 
    elementMap,
    AbsoluteLayout,
    ActionBar,
    ActionItem,
    ActivityIndicator,
    Animation,
    Observable
}from "react-nativescript/dist/client/ElementRegistry";


<<<<<<< HEAD
export function nameOf(object: Object): string {
    return object.constructor.name;
}
export function firstLetterLowercase(name: string) {
    return name.charAt(0).toLowerCase() + name.slice(1);
}
=======
import { 
    elementMap,
    AbsoluteLayout,
    ActionBar,
    ActionItem,
    ActivityIndicator,
    Animation,
    Observable
}from "react-nativescript/dist/client/ElementRegistry";
>>>>>>> a3b5339711abfeaa0959f5eb65d1eeace8042726

const implMethodRegistry: string[] = []; 
console.log("all elements in element registry")
for(let elementName in elementMap) {
    implMethodRegistry.push(elementName + "Impl");
}

<<<<<<< HEAD
type ImplMethod = (...args: any) => any
export const executeInOrder = (implMethods: ImplMethod[], ...args: any) => { 
    let returnValue : any = undefined;
    let run = undefined;

=======
export function nameOf(object: Object): string {
    return object.constructor.name;
}
export function firstLetterLowercase(name: string) {
    return name.charAt(0).toLowerCase() + name.slice(1);
}

const implMethodRegistry: string[] = []; 
console.log("all elements in element registry")
for(let elementName in elementMap) {
    implMethodRegistry.push(elementName + "Impl");
}

type ImplMethod = (...args: any) => any
export const executeInOrder = (implMethods: ImplMethod[], ...args: any) => { 
    let returnValue : any = undefined;
    let run = undefined;

>>>>>>> a3b5339711abfeaa0959f5eb65d1eeace8042726
    run = implMethods.find((method) => method.name === "observableImpl");
    if(run) { 
        returnValue = run(...args);
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "viewBaseImpl"); // extends Observable...
    
    if(run) {
        returnValue = run(...args);
        run = undefined
    }

    run = implMethods.find((method) => method.name === "viewImpl"); // extends ViewBase...
    if(run) {
        returnValue = run(...args);
        run = undefined
    }

    run = implMethods.find((method) => method.name === "actionItemImpl");
    if(run) {
        returnValue = run(...args);
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "pageImpl") // extends View...
    if(run) {
        returnValue = run(...args);
        run = undefined;
    }
}

const hierarchyMap: Record<string, string> = {
    "AbsoluteLayout" : "LayoutBase",
    "ActionBar" : "View",
    "ActionItem" : "ViewBase",
    "ActivityIndicator" : "ViewBase",
};