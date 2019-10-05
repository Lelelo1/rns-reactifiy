import { TextBase as NativeScriptTextBase, Observable} from "react-nativescript/dist/client/ElementRegistry";
import { Instance, TextInstance } from "react-nativescript/dist/shared/HostConfigTypes";
import { FormattedString } from "tns-core-modules/text/formatted-string"
export const __customHostConfigAppendChildImpl = <T extends Observable>(parent: T, child: Instance | TextInstance): boolean => {
    return textBaseImpl(parent, child);
}

const textBaseImpl = <T extends Observable>(parent: T, child: Instance | TextInstance) => {
    if(parent instanceof NativeScriptTextBase) {
        if (child instanceof FormattedString) {
            parent.formattedText = child;
            return true;
        }
    }
    // i.e. defer to Host Config.
    return false;
}