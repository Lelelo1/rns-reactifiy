
**rns-reactify**
A hoc/mixin reimplimantion of react-nativescript components making it easy to use
NativeScript UI plugins in your react-nativescript project

* import the NativeScript UI plugin
* find the name of which components it extends, Button, StackLayout eg.
* import Reactified

**Usage** 

Make it a react-nativescript component:
```import { CheckBox } from "@nstudio/nativescript-checkbox";
class RNSCheckBox extends Reactified(new CheckBox(), "view") {}```
... where the string given is the name in camelCase of the NativeScript component i'ts extending.

Use the react-nativescript like you normally do in react:

``
