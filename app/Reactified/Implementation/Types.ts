import { Observable, ViewBase, View, Page } from "react-nativescript/dist/client/ElementRegistry";
import { ExtraProps } from "../ExtraProps";
import { Instance as Base} from "react-nativescript/dist/shared/HostConfigTypes";

export type Reactify<T extends Base> = React.Component<Partial<T & ExtraProps<T>>>;

/* Instance/ViewBase is used by rns CustomNodeHierarchyManager */
export { Base }; 

