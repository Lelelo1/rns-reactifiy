# rns-reactify

Creates react components out of nativescript components, including nativescript ui plugins.

Installation:
`npm i git+https://github.com/Lelelo1/rns-reactify.git`

Usage:
```
import { Reactified } from "rns-reactify/Reactified/Reactified";
// import the nativescript plugin of your choice
import { CheckBox } from "@nstudio/nativescript-checkbox";

// turn the plugin into a react component...
const $CheckBox = Reactified(CheckBox, "checkBox");

// use it in jsx:
<$StackLayout>
    <$CheckBox />
    <$CheckBox checked={true}/>
    <$CheckBox />
</$StackLayout>
```

Result:

![alt text](https://user-images.githubusercontent.com/42244983/67231429-987da980-f43f-11e9-9c7f-7019d751c1cc.png)


