import { Observable, ViewBase, View, Page } from "react-nativescript/dist/client/ElementRegistry";
import { ExtraProps } from "../ExtraProps";
import { Instance as Base} from "react-nativescript/dist/shared/HostConfigTypes";
import { NativeScriptProps } from "../NativeScriptProps";

export type Props<T extends Base> = Partial< T /*NativeScriptProps<T>*/ & ExtraProps<T>>;
export type Reactify<T extends Base> = React.Component<Props<T>>;

/* Instance/ViewBase is used by rns CustomNodeHierarchyManager */
export { Base }; 

