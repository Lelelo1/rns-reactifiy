

import { elementMap }from "react-nativescript/dist/client/ElementRegistry";



const implMethodRegistry: string[] = undefined; 
console.log("all elements in element registry")
for(let r in elementMap) {
    console.log("r");
}

type ImplMethod = (...args: any) => any;
export const executeInOrder = (... implMethod: ImplMethod[]) => { 
    console.log("executeInOrder");
}