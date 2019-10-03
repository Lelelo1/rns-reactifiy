**rns-reactify**
Is an attempt at refractoring react-nativescript components from a tree hierarchy into a mixin/hoc single class - so that wrapping nativescript ui plugins into react-nativescript becomes easier:

Intended usage when completed:
```
import { Reactified } from "../Reactified/Reactified";
import { Button } from "tns-core-modules/ui/button/button"
class FancyNativeScriptUIPlugin extends Button {
    
}
const ReactNativeScriptFancyButton = Reactified(new FancyNativeScriptUIPlugin());
// ...which then can be used in jsx
```