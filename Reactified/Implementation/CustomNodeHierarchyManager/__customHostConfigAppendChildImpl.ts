import { TextBase, Observable} from "react-nativescript/dist/client/ElementRegistry";
import { Instance, TextInstance } from "react-nativescript/dist/shared/HostConfigTypes";
import { FormattedString } from "tns-core-modules/text/formatted-string"
import { Reactify, Base } from "../Types";
import { executeInOrder } from "../Helpers";

export const __customHostConfigAppendChildImpl = <T extends Base>(instance: Reactify<T>, parent: T, child: T): boolean => {
    return executeInOrder([textBaseImpl], instance, parent, child);
}

const textBaseImpl = <T extends TextBase>(instance: Reactify<T>, parent: T, child: T) => {
    
    if(!(Reflect.get(instance, "tnsType") instanceof TextBase)) return;
    
    if(parent instanceof TextBase) {
        if (child instanceof FormattedString) {
            parent.formattedText = child;
            return true;
        }
    }
    
    // i.e. defer to Host Config.
    return false;
}