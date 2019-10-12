import { 
    elementMap,
    AbsoluteLayout,
    ActionBar,
    ActionItem,
    ActivityIndicator,
    Animation,
    Observable
}from "react-nativescript/dist/client/ElementRegistry";


export function nameOf(object: Object): string {
    return object.constructor.name;
}
export function firstLetterLowercase(name: string) {
    return name.charAt(0).toLowerCase() + name.slice(1);
}

type ImplMethod = (...args: any) => any
export const executeInOrder = (implMethods: ImplMethod[], ...args: any) => { 
    let returnValue : any = undefined;
    let run = undefined;

    run = implMethods.find((method) => method.name === "genericImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "observableImpl");
    if(run) { 
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "viewBaseImpl"); // extends Observable...
    
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined
    }

    run = implMethods.find((method) => method.name === "viewImpl"); // extends ViewBase...
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined
    }

    run = implMethods.find((method) => method.name === "actionItemImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "tabViewItemImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "pageImpl") // extends View...
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "textBaseImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "datePickerImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "frameImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "htmlViewImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "listPickerImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "placeholderImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "searchBarImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "segmentedBarImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "sliderImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "switchImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "tabViewImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "timePickerImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "webViewImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "contentViewImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "scrollViewImpl"); // extends ContentView...
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "buttonImpl"); // extends TextBase...
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "labelImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "editableTextBaseImpl");
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    run = implMethods.find((method) => method.name === "textFieldImpl"); // extends EditableTextBase...
    if(run) {
        const value = run(...args);
        if(value) {
            returnValue = value;
        }
        run = undefined;
    }

    return returnValue;
}

const hierarchyMap: Record<string, string> = {
    "AbsoluteLayout" : "LayoutBase",
    "ActionBar" : "View",
    "ActionItem" : "ViewBase",
    "ActivityIndicator" : "ViewBase",
};