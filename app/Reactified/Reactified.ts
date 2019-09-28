import * as React from "react";
import { Observable, EventData } from "tns-core-modules/data/observable/observable";
import { Button } from "tns-core-modules/ui/button/button";


export function Reactified<T extends Observable>(observable: T) {

    return class extends React.Component<T, any> {
        constructor(props?: T) {
            super(props);
            /*
            const t = this as Object;
            console.log("created: " + t.constructor.name);
            */
        }
        public static defaultProps = observable;
        test() {
            console.log("register: " + nameOf(observable));
        }
    }
}
function nameOf(object: Object): string {
    return object.constructor.name;
}
