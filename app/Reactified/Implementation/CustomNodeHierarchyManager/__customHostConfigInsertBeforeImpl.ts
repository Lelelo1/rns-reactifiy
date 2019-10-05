import { TextBase as NativeScriptTextBase, Observable} from "react-nativescript/dist/client/ElementRegistry";
import { Instance, TextInstance } from "react-nativescript/dist/shared/HostConfigTypes";
import { FormattedString } from "tns-core-modules/text/formatted-string"


export const __customHostConfigInsertBeforeImpl = <T extends Observable>(
    parent: T,
    child: Instance | TextInstance,
    beforeChild: Instance | TextInstance
): boolean => {
    return textBaseImpl(parent, child, beforeChild);
}
const textBaseImpl = <T extends Observable>(
    parent: T,
    child: Instance | TextInstance,
    beforeChild: Instance | TextInstance
) : boolean => {
    if(parent instanceof NativeScriptTextBase) {
        if (child instanceof FormattedString) {
            parent.formattedText = child;
            return true;
        }
    }

    // i.e. defer to Host Config.
    return false;
}