import { Observable } from "tns-core-modules/data/observable/observable";
import { ExtraProps } from "./ExtraProps";
import { Extras } from "./Extras";

export type Reactify<T extends Observable> = React.Component<T & ExtraProps<T>> & Extras<T>;