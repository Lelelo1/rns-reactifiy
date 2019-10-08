
import * as React from "react";
import {Observable, View } from "react-nativescript/dist/client/ElementRegistry";

interface A {
    someProp: string;
}
interface B {
    someOtherProp: string;
}
type AProps<T> = T extends View ? A : null;
type BProps<T> = T extends View ? B : null;

type Props<T> = AProps<T> & BProps<T>;

const create = <T extends Observable>(): React.ComponentType<Props<T>> => {
    return React.forwardRef(null);
}