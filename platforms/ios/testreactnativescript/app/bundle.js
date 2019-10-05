require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Reactified/API.ts": "./Reactified/API.ts",
	"./Reactified/ExtraProps.ts": "./Reactified/ExtraProps.ts",
	"./Reactified/Implementation/Helpers.ts": "./Reactified/Implementation/Helpers.ts",
	"./Reactified/Implementation/React/componentDidMountImpl.ts": "./Reactified/Implementation/React/componentDidMountImpl.ts",
	"./Reactified/Implementation/React/componentWillUnmountImpl.ts": "./Reactified/Implementation/React/componentWillUnmountImpl.ts",
	"./Reactified/Implementation/React/shouldComponentUpdateImpl.ts": "./Reactified/Implementation/React/shouldComponentUpdateImpl.ts",
	"./Reactified/Implementation/Types.ts": "./Reactified/Implementation/Types.ts",
	"./Reactified/Implementation/getCurrentRefImpl.ts": "./Reactified/Implementation/getCurrentRefImpl.ts",
	"./Reactified/Implementation/updateListenersHelperImpl.ts": "./Reactified/Implementation/updateListenersHelperImpl.ts",
	"./Reactified/Implementation/updateListenersImpl.ts": "./Reactified/Implementation/updateListenersImpl.ts",
	"./Reactified/Reactified.ts": "./Reactified/Reactified.ts",
	"./app.scss": "./app.scss",
	"./app.ts": "./app.ts",
	"./components/AppContainer.scss": "./components/AppContainer.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./Reactified/API.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reactify", function() { return Reactify; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Implementation_updateListenersHelperImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./Reactified/Implementation/updateListenersHelperImpl.ts");
/* harmony import */ var _Implementation_getCurrentRefImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./Reactified/Implementation/getCurrentRefImpl.ts");
/* harmony import */ var _Implementation_updateListenersImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./Reactified/Implementation/updateListenersImpl.ts");
/* harmony import */ var _Implementation_React_shouldComponentUpdateImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./Reactified/Implementation/React/shouldComponentUpdateImpl.ts");
/* harmony import */ var _Implementation_React_componentWillUnmountImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./Reactified/Implementation/React/componentWillUnmountImpl.ts");






/* declared here in seperate file so class can be accessed from impl files*/

var Reactify =
/** @class */
function (_super) {
  __extends(Reactify, _super);

  function Reactify() {
    var _this = _super !== null && _super.apply(this, arguments) || this; // static defaultProps = {... observable } 

    /*
    constructor(props: T & ExtraProps<T>) {
        super(props);
        Reactify.countOfthiss ++;
        console.log("constructing this " + Reactify.countOfthiss);
    }
    */


    _this.myRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    return _this;
  }

  Reactify.prototype.getCurrentRef = function () {
    return Object(_Implementation_getCurrentRefImpl__WEBPACK_IMPORTED_MODULE_2__["getCurrentRefImpl"])(this); // return (this.props.forwardedRef || this.myRef).current;
  };
  /**
  * Helper method for updateListeners: simply gets the current ref to pass on to it.
  * @param attach true: attach; false: detach; null: update
  */


  Reactify.prototype.updateListenersHelper = function (attach, nextProps) {
    Object(_Implementation_updateListenersHelperImpl__WEBPACK_IMPORTED_MODULE_1__["updateListenersHelperImpl"])(this, attach, nextProps); // can't run for some reason

    /*
    const node: T | null = this.getCurrentRef();
    if (node === null) {
        console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
        return;
    }
    this.updateListeners(node, attach, nextProps);
    */
  };
  /**
  *
  * @param attach true: attach; false: detach; null: update
  */


  Reactify.prototype.updateListeners = function (node, attach, nextProps) {
    Object(_Implementation_updateListenersImpl__WEBPACK_IMPORTED_MODULE_3__["updateListenersImpl"])(this, node, attach, nextProps);
  };

  Reactify.prototype.componentDidMount = function () {
    this.updateListenersHelper(true);
  };
  /**
  * PureComponent's shouldComponentUpdate() method is ignored and replaced with a shallowEqual()
  * comparison of props and state. We'll implement our Component's shouldComponentUpdate() to
  * match the way PureComponent is handled.
  */


  Reactify.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    /*
    // console.log(`Observable's shouldComponentUpdate`);
    const shouldUpdate: boolean = !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    // console.log(`[shouldComponentUpdate] shouldUpdate: ${shouldUpdate}.`);
     this.updateListenersHelper(null, nextProps);
     // https://lucybain.com/blog/2018/react-js-pure-component/
    return shouldUpdate;
    */
    return Object(_Implementation_React_shouldComponentUpdateImpl__WEBPACK_IMPORTED_MODULE_4__["shouldComponentUpdateImpl"])(this, nextProps, nextState);
  };

  Reactify.prototype.componentWillUnmount = function () {
    // this.updateListenersHelper(false);
    Object(_Implementation_React_componentWillUnmountImpl__WEBPACK_IMPORTED_MODULE_5__["componentWillUnmountImpl"])(this);
  };

  Reactify.countOfInstances = 0;
  return Reactify;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/ExtraProps.ts":
/***/ (function(module, exports, __webpack_require__) {

// inside https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/Switch.ts
// can listener be attached to this:PROPS.onToggle ?; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameOf", function() { return nameOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstLetterLowercase", function() { return firstLetterLowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeInOrder", function() { return executeInOrder; });
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);

function nameOf(object) {
  return object.constructor.name;
}
function firstLetterLowercase(name) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}
var implMethodRegistry = [];
console.log("all elements in element registry");

for (var elementName in react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["elementMap"]) {
  implMethodRegistry.push(elementName + "Impl");
}

var executeInOrder = function (implMethods) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  var returnValue = undefined;
  var run = undefined;
  run = implMethods.find(function (method) {
    return method.name === "observableImpl";
  });

  if (run) {
    returnValue = run.apply(void 0, args);
    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "viewBaseImpl";
  }); // extends Observable...

  if (run) {
    returnValue = run.apply(void 0, args);
    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "viewImpl";
  }); // extends ViewBase...

  if (run) {
    returnValue = run.apply(void 0, args);
    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "actionItemImpl";
  });

  if (run) {
    returnValue = run.apply(void 0, args);
    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "pageImpl";
  }); // extends View...

  if (run) {
    returnValue = run.apply(void 0, args);
    run = undefined;
  }
};
var hierarchyMap = {
  "AbsoluteLayout": "LayoutBase",
  "ActionBar": "View",
  "ActionItem": "ViewBase",
  "ActivityIndicator": "ViewBase"
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/React/componentDidMountImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentDidMountImpl", function() { return componentDidMountImpl; });
var componentDidMountImpl = function (instance) {
  observableImpl(instance);
};

var observableImpl = function (instance) {
  Reflect.get(instance, "updateListenersHelper")(true);
};
/*
const viewBaseImpl = <T extends Observable>(instance: React.Component<T & ExtraProps<T>>) => {
    // none
}
*/; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/React/componentWillUnmountImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentWillUnmountImpl", function() { return componentWillUnmountImpl; });
var componentWillUnmountImpl = function (instance) {
  observableImpl(instance);
};

var observableImpl = function (instance) {
  Reflect.get(instance, "updateListenersHelper")(false);
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/React/shouldComponentUpdateImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldComponentUpdateImpl", function() { return shouldComponentUpdateImpl; });
/* harmony import */ var react_nativescript_dist_client_shallowEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/shallowEqual.js");
/* harmony import */ var react_nativescript_dist_client_shallowEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_shallowEqual__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;


var shouldComponentUpdateImpl = function (instance, nextProps, nextState) {
  return observableImpl(instance, nextProps, nextState);
};

var observableImpl = function (instance, nextProps, nextState) {
  // console.log(`Observable's shouldComponentUpdate`);
  var shouldUpdate = !Object(react_nativescript_dist_client_shallowEqual__WEBPACK_IMPORTED_MODULE_0__["shallowEqual"])(_this.props, nextProps) || !Object(react_nativescript_dist_client_shallowEqual__WEBPACK_IMPORTED_MODULE_0__["shallowEqual"])(_this.state, nextState); // console.log(`[shouldComponentUpdate] shouldUpdate: ${shouldUpdate}.`);

  _this.updateListenersHelper(null, nextProps); // https://lucybain.com/blog/2018/react-js-pure-component/


  return shouldUpdate;
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryCast", function() { return tryCast; });
/*
export type Observable<T> = T extends Observable ? Reactify<Observable> : Empty

export type ViewBase<T> = T extends ViewBase ? Reactify<ViewBase> : Empty;

export type View<T> = T extends View ? Reactify<View> : Empty;

interface Empty {

}
*/
// helper method to be able to cast Reactify<Observable> to Reactify<View>  etc 
var tryCast = function (parameter) {
  return parameter;
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/getCurrentRefImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentRefImpl", function() { return getCurrentRefImpl; });
function getCurrentRefImpl(instance) {
  return (instance.props.forwardedRef || Reflect.get(instance, "myRef")).current;
}; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/updateListenersHelperImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateListenersHelperImpl", function() { return updateListenersHelperImpl; });
// import { Reactify } from "./Types";

/*
export const observableImpl = <T extends Observable>(instance: React.Component<T & ExtraProps<T>>, attach: boolean | null, nextProps?: P) => {
    
}
*/
var updateListenersHelperImpl = function (instance, attach, nextProps) {
  observableImpl(instance, attach, nextProps);
};

var observableImpl = function (instance, attach, nextProps) {
  var node = Reflect.get(instance, "getCurrentRef")();
  console.log("got node: " + node);

  if (node === null) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  Reflect.get(instance, "updateListeners")(node, attach, nextProps);
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/updateListenersImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateListenersImpl", function() { return updateListenersImpl; });
/* harmony import */ var react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/EventHandling.js");
/* harmony import */ var react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/gestures/gestures.js");
/* harmony import */ var tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./Reactified/Implementation/Types.ts");



var updateListenersImpl = function (instance, node, attach, nextProps) {
  /* implementation for any rns component here - or on reactify class body*/
  observableImpl(instance, node, attach, nextProps);
  viewImpl(Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(instance), Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(node), attach, Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(nextProps));
  actionItemImpl(Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(instance), Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(node), attach, Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(nextProps)); // directly inheriting view

  pageImpl(Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(instance), Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(node), attach, Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(nextProps));
};

var observableImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "propertyChange", instance.props.onPropertyChange, nextProps.onPropertyChange);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onPropertyChange) method("propertyChange", instance.props.onPropertyChange);
  }
}; // https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/View.ts


var viewImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "loaded", instance.props.onLoaded, nextProps.onLoaded);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "unloaded", instance.props.onUnloaded, nextProps.onUnloaded);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "androidBackPressed", instance.props.onAndroidBackPressed, nextProps.onAndroidBackPressed);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "showingModally", instance.props.onShowingModally, nextProps.onShowingModally);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "shownModally", instance.props.onShownModally, nextProps.onShownModally);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].tap, instance.props.onTap, nextProps.onTap, "tap");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].doubleTap, instance.props.onDoubleTap, nextProps.onDoubleTap, "doubleTap");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].pinch, instance.props.onPinch, nextProps.onPinch, "pinch");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].pan, instance.props.onPan, nextProps.onPan, "pan");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].swipe, instance.props.onSwipe, nextProps.onSwipe, "swipe");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].rotation, instance.props.onRotation, nextProps.onRotation, "rotation");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].longPress, instance.props.onLongPress, nextProps.onLongPress, "longPress");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].touch, instance.props.onTouch, nextProps.onTouch, "touch");
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onLoaded) method("loaded", instance.props.onLoaded);
    if (instance.props.onUnloaded) method("unloaded", instance.props.onUnloaded);
    if (instance.props.onAndroidBackPressed) method("androidBackPressed", instance.props.onAndroidBackPressed);
    if (instance.props.onShowingModally) method("showingModally", instance.props.onShowingModally);
    if (instance.props.onShownModally) method("shownModally", instance.props.onShownModally);
    if (instance.props.onTap) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].tap, instance.props.onTap);
    if (instance.props.onDoubleTap) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].doubleTap, instance.props.onDoubleTap);
    if (instance.props.onPinch) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].pinch, instance.props.onPinch);
    if (instance.props.onPan) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].pan, instance.props.onPan);
    if (instance.props.onSwipe) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].swipe, instance.props.onSwipe);
    if (instance.props.onRotation) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].rotation, instance.props.onRotation);
    if (instance.props.onLongPress) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].longPress, instance.props.onLongPress);
    if (instance.props.onTouch) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_1__["GestureTypes"].touch, instance.props.onTouch);
  }
};

var actionItemImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "tap", instance.props.onTap, nextProps.onTap);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onTap) method("tap", instance.props.onTap);
  }
};

var pageImpl = function (instance, node, attach, nextProps) {
  console.log("page impl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "navigatedFrom", instance.props.onNavigatedFrom, nextProps.onNavigatedFrom);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "navigatedTo", instance.props.onNavigatedTo, nextProps.onNavigatedTo);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "navigatingFrom", instance.props.onNavigatingFrom, nextProps.onNavigatingFrom);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "navigatingTo", instance.props.onNavigatingTo, nextProps.onNavigatingTo);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onNavigatedFrom) method("navigatedFrom", instance.props.onNavigatedFrom);
    if (instance.props.onNavigatedTo) method("navigatedTo", instance.props.onNavigatedTo);
    if (instance.props.onNavigatingFrom) method("navigatingFrom", instance.props.onNavigatingFrom);
    if (instance.props.onNavigatingTo) method("navigatingTo", instance.props.onNavigatingTo);
  }
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Reactified.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reactified", function() { return Reactified; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Implementation_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./Reactified/API.ts");




function Reactified(observable, name) {
  if (!name) {
    name = Object(_Implementation_Helpers__WEBPACK_IMPORTED_MODULE_2__["firstLetterLowercase"])(Object(_Implementation_Helpers__WEBPACK_IMPORTED_MODULE_2__["nameOf"])(observable));
  }

  console.log("registering " + name);
  Object(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["register"])(name, function () {
    return observable;
  });
  return (
    /** @class */
    function (_super) {
      __extends(class_1, _super);

      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      class_1.prototype.render = function () {
        var _a = this.props,
            forwardedRef = _a.forwardedRef,
            children = _a.children,
            rest = __rest(_a, ["forwardedRef", "children"]);

        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({}, rest, {
          ref: forwardedRef || this.myRef
        }), children);
      };

      return class_1;
    }(_API__WEBPACK_IMPORTED_MODULE_3__["Reactify"])
  ); // have to declare class name to make decorators work  // https://github.com/microsoft/TypeScript/issues/7342
} // React.Component<T & ExtraProps<T>

/*
// Are not actually needed ?!
function JSX<T extends Observable>(observable: new(...args: any[]) => React.Component<T & ExtraProps<T>>) {
    return React.forwardRef<T, PropsWithoutForwardedRef<T & ExtraProps<T>>>(
        (props: React.PropsWithChildren<PropsWithoutForwardedRef<T & ExtraProps<T>>>, ref: React.RefObject<T>) => {
            const { children, ...rest } = props;
            return React.createElement(
                observable
                ,
                {
                    ...rest,
                    forwardedRef: ref,
                },
                children
            );
        }
    )
}
*/
// export const MyObservable: React.ComponentType<PropsWithoutForwardedRef<Observable> & ExtraProps<Observable>> & React.ClassAttributes<Observable> = JSX(new Observable());
// export const MyButton = JSX(new Button());
// export const MyContentView: React.ComponentType<PropsWithoutForwardedRef<ContentView & ExtraProps<ContentView>>> & React.ClassAttributes<ContentView> = JSX(new ContentView());; 
if (false ) {} 

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n/**\r\n * Color classes\r\n * The following creates this pattern:\r\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\r\n**/\n.c-white {\n  color: #fff; }\n\n.c-bg-white {\n  background-color: #fff; }\n\n.c-black {\n  color: #000; }\n\n.c-bg-black {\n  background-color: #000; }\n\n.c-aqua {\n  color: #00caab; }\n\n.c-bg-aqua {\n  background-color: #00caab; }\n\n.c-blue {\n  color: #3d5afe; }\n\n.c-bg-blue {\n  background-color: #3d5afe; }\n\n.c-charcoal {\n  color: #303030; }\n\n.c-bg-charcoal {\n  background-color: #303030; }\n\n.c-brown {\n  color: #795548; }\n\n.c-bg-brown {\n  background-color: #795548; }\n\n.c-forest {\n  color: #006968; }\n\n.c-bg-forest {\n  background-color: #006968; }\n\n.c-grey {\n  color: #e0e0e0; }\n\n.c-bg-grey {\n  background-color: #e0e0e0; }\n\n.c-grey-light {\n  color: #bababa; }\n\n.c-bg-grey-light {\n  background-color: #bababa; }\n\n.c-grey-dark {\n  color: #5c687c; }\n\n.c-bg-grey-dark {\n  background-color: #5c687c; }\n\n.c-purple {\n  color: #8130ff; }\n\n.c-bg-purple {\n  background-color: #8130ff; }\n\n.c-lemon {\n  color: #ffea00; }\n\n.c-bg-lemon {\n  background-color: #ffea00; }\n\n.c-lime {\n  color: #aee406; }\n\n.c-bg-lime {\n  background-color: #aee406; }\n\n.c-orange {\n  color: #f57c00; }\n\n.c-bg-orange {\n  background-color: #f57c00; }\n\n.c-ruby {\n  color: #ff1744; }\n\n.c-bg-ruby {\n  background-color: #ff1744; }\n\n.c-sky {\n  color: #30bcff; }\n\n.c-bg-sky {\n  background-color: #30bcff; }\n\n/* Width/Height */\n.w-full {\n  width: 100%; }\n\n.w-100 {\n  width: 100; }\n\n.h-full {\n  height: 100%; }\n\n.h-100 {\n  height: 100; }\n\n/**\r\n * Margin and Padding\r\n * The following creates this pattern:\r\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\r\n * Same for Padding (using the 'p' abbreviation)\r\n * From 0, 2, 5, 10, 15, 20, 25, 30\r\n**/\n.m-0 {\n  margin: 0; }\n\n.m-t-0 {\n  margin-top: 0; }\n\n.m-r-0 {\n  margin-right: 0; }\n\n.m-b-0 {\n  margin-bottom: 0; }\n\n.m-l-0 {\n  margin-left: 0; }\n\n.m-x-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.m-y-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.m-2 {\n  margin: 2; }\n\n.m-t-2 {\n  margin-top: 2; }\n\n.m-r-2 {\n  margin-right: 2; }\n\n.m-b-2 {\n  margin-bottom: 2; }\n\n.m-l-2 {\n  margin-left: 2; }\n\n.m-x-2 {\n  margin-right: 2;\n  margin-left: 2; }\n\n.m-y-2 {\n  margin-top: 2;\n  margin-bottom: 2; }\n\n.m-4 {\n  margin: 4; }\n\n.m-t-4 {\n  margin-top: 4; }\n\n.m-r-4 {\n  margin-right: 4; }\n\n.m-b-4 {\n  margin-bottom: 4; }\n\n.m-l-4 {\n  margin-left: 4; }\n\n.m-x-4 {\n  margin-right: 4;\n  margin-left: 4; }\n\n.m-y-4 {\n  margin-top: 4;\n  margin-bottom: 4; }\n\n.m-5 {\n  margin: 5; }\n\n.m-t-5 {\n  margin-top: 5; }\n\n.m-r-5 {\n  margin-right: 5; }\n\n.m-b-5 {\n  margin-bottom: 5; }\n\n.m-l-5 {\n  margin-left: 5; }\n\n.m-x-5 {\n  margin-right: 5;\n  margin-left: 5; }\n\n.m-y-5 {\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.m-8 {\n  margin: 8; }\n\n.m-t-8 {\n  margin-top: 8; }\n\n.m-r-8 {\n  margin-right: 8; }\n\n.m-b-8 {\n  margin-bottom: 8; }\n\n.m-l-8 {\n  margin-left: 8; }\n\n.m-x-8 {\n  margin-right: 8;\n  margin-left: 8; }\n\n.m-y-8 {\n  margin-top: 8;\n  margin-bottom: 8; }\n\n.m-10 {\n  margin: 10; }\n\n.m-t-10 {\n  margin-top: 10; }\n\n.m-r-10 {\n  margin-right: 10; }\n\n.m-b-10 {\n  margin-bottom: 10; }\n\n.m-l-10 {\n  margin-left: 10; }\n\n.m-x-10 {\n  margin-right: 10;\n  margin-left: 10; }\n\n.m-y-10 {\n  margin-top: 10;\n  margin-bottom: 10; }\n\n.m-12 {\n  margin: 12; }\n\n.m-t-12 {\n  margin-top: 12; }\n\n.m-r-12 {\n  margin-right: 12; }\n\n.m-b-12 {\n  margin-bottom: 12; }\n\n.m-l-12 {\n  margin-left: 12; }\n\n.m-x-12 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.m-y-12 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.m-15 {\n  margin: 15; }\n\n.m-t-15 {\n  margin-top: 15; }\n\n.m-r-15 {\n  margin-right: 15; }\n\n.m-b-15 {\n  margin-bottom: 15; }\n\n.m-l-15 {\n  margin-left: 15; }\n\n.m-x-15 {\n  margin-right: 15;\n  margin-left: 15; }\n\n.m-y-15 {\n  margin-top: 15;\n  margin-bottom: 15; }\n\n.m-16 {\n  margin: 16; }\n\n.m-t-16 {\n  margin-top: 16; }\n\n.m-r-16 {\n  margin-right: 16; }\n\n.m-b-16 {\n  margin-bottom: 16; }\n\n.m-l-16 {\n  margin-left: 16; }\n\n.m-x-16 {\n  margin-right: 16;\n  margin-left: 16; }\n\n.m-y-16 {\n  margin-top: 16;\n  margin-bottom: 16; }\n\n.m-20 {\n  margin: 20; }\n\n.m-t-20 {\n  margin-top: 20; }\n\n.m-r-20 {\n  margin-right: 20; }\n\n.m-b-20 {\n  margin-bottom: 20; }\n\n.m-l-20 {\n  margin-left: 20; }\n\n.m-x-20 {\n  margin-right: 20;\n  margin-left: 20; }\n\n.m-y-20 {\n  margin-top: 20;\n  margin-bottom: 20; }\n\n.m-24 {\n  margin: 24; }\n\n.m-t-24 {\n  margin-top: 24; }\n\n.m-r-24 {\n  margin-right: 24; }\n\n.m-b-24 {\n  margin-bottom: 24; }\n\n.m-l-24 {\n  margin-left: 24; }\n\n.m-x-24 {\n  margin-right: 24;\n  margin-left: 24; }\n\n.m-y-24 {\n  margin-top: 24;\n  margin-bottom: 24; }\n\n.m-25 {\n  margin: 25; }\n\n.m-t-25 {\n  margin-top: 25; }\n\n.m-r-25 {\n  margin-right: 25; }\n\n.m-b-25 {\n  margin-bottom: 25; }\n\n.m-l-25 {\n  margin-left: 25; }\n\n.m-x-25 {\n  margin-right: 25;\n  margin-left: 25; }\n\n.m-y-25 {\n  margin-top: 25;\n  margin-bottom: 25; }\n\n.m-28 {\n  margin: 28; }\n\n.m-t-28 {\n  margin-top: 28; }\n\n.m-r-28 {\n  margin-right: 28; }\n\n.m-b-28 {\n  margin-bottom: 28; }\n\n.m-l-28 {\n  margin-left: 28; }\n\n.m-x-28 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.m-y-28 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.m-30 {\n  margin: 30; }\n\n.m-t-30 {\n  margin-top: 30; }\n\n.m-r-30 {\n  margin-right: 30; }\n\n.m-b-30 {\n  margin-bottom: 30; }\n\n.m-l-30 {\n  margin-left: 30; }\n\n.m-x-30 {\n  margin-right: 30;\n  margin-left: 30; }\n\n.m-y-30 {\n  margin-top: 30;\n  margin-bottom: 30; }\n\n.p-0 {\n  padding: 0; }\n\n.p-t-0 {\n  padding-top: 0; }\n\n.p-r-0 {\n  padding-right: 0; }\n\n.p-b-0 {\n  padding-bottom: 0; }\n\n.p-l-0 {\n  padding-left: 0; }\n\n.p-x-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.p-y-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.p-2 {\n  padding: 2; }\n\n.p-t-2 {\n  padding-top: 2; }\n\n.p-r-2 {\n  padding-right: 2; }\n\n.p-b-2 {\n  padding-bottom: 2; }\n\n.p-l-2 {\n  padding-left: 2; }\n\n.p-x-2 {\n  padding-right: 2;\n  padding-left: 2; }\n\n.p-y-2 {\n  padding-top: 2;\n  padding-bottom: 2; }\n\n.p-4 {\n  padding: 4; }\n\n.p-t-4 {\n  padding-top: 4; }\n\n.p-r-4 {\n  padding-right: 4; }\n\n.p-b-4 {\n  padding-bottom: 4; }\n\n.p-l-4 {\n  padding-left: 4; }\n\n.p-x-4 {\n  padding-right: 4;\n  padding-left: 4; }\n\n.p-y-4 {\n  padding-top: 4;\n  padding-bottom: 4; }\n\n.p-5 {\n  padding: 5; }\n\n.p-t-5 {\n  padding-top: 5; }\n\n.p-r-5 {\n  padding-right: 5; }\n\n.p-b-5 {\n  padding-bottom: 5; }\n\n.p-l-5 {\n  padding-left: 5; }\n\n.p-x-5 {\n  padding-right: 5;\n  padding-left: 5; }\n\n.p-y-5 {\n  padding-top: 5;\n  padding-bottom: 5; }\n\n.p-8 {\n  padding: 8; }\n\n.p-t-8 {\n  padding-top: 8; }\n\n.p-r-8 {\n  padding-right: 8; }\n\n.p-b-8 {\n  padding-bottom: 8; }\n\n.p-l-8 {\n  padding-left: 8; }\n\n.p-x-8 {\n  padding-right: 8;\n  padding-left: 8; }\n\n.p-y-8 {\n  padding-top: 8;\n  padding-bottom: 8; }\n\n.p-10 {\n  padding: 10; }\n\n.p-t-10 {\n  padding-top: 10; }\n\n.p-r-10 {\n  padding-right: 10; }\n\n.p-b-10 {\n  padding-bottom: 10; }\n\n.p-l-10 {\n  padding-left: 10; }\n\n.p-x-10 {\n  padding-right: 10;\n  padding-left: 10; }\n\n.p-y-10 {\n  padding-top: 10;\n  padding-bottom: 10; }\n\n.p-12 {\n  padding: 12; }\n\n.p-t-12 {\n  padding-top: 12; }\n\n.p-r-12 {\n  padding-right: 12; }\n\n.p-b-12 {\n  padding-bottom: 12; }\n\n.p-l-12 {\n  padding-left: 12; }\n\n.p-x-12 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.p-y-12 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.p-15 {\n  padding: 15; }\n\n.p-t-15 {\n  padding-top: 15; }\n\n.p-r-15 {\n  padding-right: 15; }\n\n.p-b-15 {\n  padding-bottom: 15; }\n\n.p-l-15 {\n  padding-left: 15; }\n\n.p-x-15 {\n  padding-right: 15;\n  padding-left: 15; }\n\n.p-y-15 {\n  padding-top: 15;\n  padding-bottom: 15; }\n\n.p-16 {\n  padding: 16; }\n\n.p-t-16 {\n  padding-top: 16; }\n\n.p-r-16 {\n  padding-right: 16; }\n\n.p-b-16 {\n  padding-bottom: 16; }\n\n.p-l-16 {\n  padding-left: 16; }\n\n.p-x-16 {\n  padding-right: 16;\n  padding-left: 16; }\n\n.p-y-16 {\n  padding-top: 16;\n  padding-bottom: 16; }\n\n.p-20 {\n  padding: 20; }\n\n.p-t-20 {\n  padding-top: 20; }\n\n.p-r-20 {\n  padding-right: 20; }\n\n.p-b-20 {\n  padding-bottom: 20; }\n\n.p-l-20 {\n  padding-left: 20; }\n\n.p-x-20 {\n  padding-right: 20;\n  padding-left: 20; }\n\n.p-y-20 {\n  padding-top: 20;\n  padding-bottom: 20; }\n\n.p-24 {\n  padding: 24; }\n\n.p-t-24 {\n  padding-top: 24; }\n\n.p-r-24 {\n  padding-right: 24; }\n\n.p-b-24 {\n  padding-bottom: 24; }\n\n.p-l-24 {\n  padding-left: 24; }\n\n.p-x-24 {\n  padding-right: 24;\n  padding-left: 24; }\n\n.p-y-24 {\n  padding-top: 24;\n  padding-bottom: 24; }\n\n.p-25 {\n  padding: 25; }\n\n.p-t-25 {\n  padding-top: 25; }\n\n.p-r-25 {\n  padding-right: 25; }\n\n.p-b-25 {\n  padding-bottom: 25; }\n\n.p-l-25 {\n  padding-left: 25; }\n\n.p-x-25 {\n  padding-right: 25;\n  padding-left: 25; }\n\n.p-y-25 {\n  padding-top: 25;\n  padding-bottom: 25; }\n\n.p-28 {\n  padding: 28; }\n\n.p-t-28 {\n  padding-top: 28; }\n\n.p-r-28 {\n  padding-right: 28; }\n\n.p-b-28 {\n  padding-bottom: 28; }\n\n.p-l-28 {\n  padding-left: 28; }\n\n.p-x-28 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.p-y-28 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.p-30 {\n  padding: 30; }\n\n.p-t-30 {\n  padding-top: 30; }\n\n.p-r-30 {\n  padding-right: 30; }\n\n.p-b-30 {\n  padding-bottom: 30; }\n\n.p-l-30 {\n  padding-left: 30; }\n\n.p-x-30 {\n  padding-right: 30;\n  padding-left: 30; }\n\n.p-y-30 {\n  padding-top: 30;\n  padding-bottom: 30; }\n\n/* Dividers */\n.hr-light {\n  height: 1;\n  background-color: #e0e0e0;\n  width: 100%; }\n\n.hr-dark {\n  height: 1;\n  background-color: #303030;\n  width: 100%; }\n\n/* Alignment */\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n/**\r\n * Font size\r\n * The following creates this pattern:\r\n * .t-10{font-size:10}\r\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\r\n**/\n.t-10 {\n  font-size: 10; }\n\n.t-12 {\n  font-size: 12; }\n\n.t-14 {\n  font-size: 14; }\n\n.t-15 {\n  font-size: 15; }\n\n.t-16 {\n  font-size: 16; }\n\n.t-17 {\n  font-size: 17; }\n\n.t-18 {\n  font-size: 18; }\n\n.t-19 {\n  font-size: 19; }\n\n.t-20 {\n  font-size: 20; }\n\n.t-25 {\n  font-size: 25; }\n\n.t-30 {\n  font-size: 30; }\n\n.img-rounded {\n  border-radius: 5; }\n\n.img-circle {\n  border-radius: 20; }\n\n.img-thumbnail {\n  border-radius: 0; }\n\n.invisible {\n  visibility: collapse; }\n\n.pull-left {\n  horizontal-align: left; }\n\n.pull-right {\n  horizontal-align: right; }\n\n.m-x-auto {\n  horizontal-align: center; }\n\n.m-y-auto {\n  vertical-align: center; }\n\n.text-primary {\n  color: #3A53FF; }\n\n.text-danger {\n  color: #ED473F; }\n\n.text-muted {\n  color: #9e9e9e; }\n\n.bg-primary {\n  background-color: #3A53FF;\n  color: #fff; }\n\n.bg-danger {\n  background-color: #ED473F;\n  color: #fff; }\n\n.action-bar {\n  background-color: #3A53FF;\n  color: #fff; }\n  .action-bar .action-bar-title {\n    font-weight: bold;\n    font-size: 17;\n    vertical-align: center; }\n  .action-bar .action-item {\n    font-weight: normal; }\n\n.activity-indicator {\n  color: #3A53FF;\n  width: 30;\n  height: 30; }\n\n.btn {\n  color: #3A53FF;\n  background-color: transparent;\n  min-height: 36;\n  min-width: 64;\n  padding: 10 10 10 10;\n  font-size: 18;\n  margin: 8 16 8 16; }\n  .btn.btn-active:highlighted {\n    color: #fff;\n    background-color: #6d80ff; }\n\n.btn-primary {\n  background-color: #3A53FF;\n  border-color: #3A53FF;\n  color: #fff; }\n  .btn-primary.btn-active:highlighted {\n    background-color: #0726ff;\n    border-color: #0726ff; }\n  .btn-primary.btn-aqua {\n    background-color: #00caab; }\n  .btn-primary.btn-blue {\n    background-color: #3d5afe; }\n  .btn-primary.btn-brown {\n    background-color: #795548; }\n  .btn-primary.btn-forest {\n    background-color: #006968; }\n  .btn-primary.btn-grey {\n    background-color: #5c687c; }\n  .btn-primary.btn-lemon {\n    background-color: #ffea00;\n    color: #000; }\n  .btn-primary.btn-lime {\n    background-color: #aee406;\n    color: #000; }\n  .btn-primary.btn-orange {\n    background-color: #f57c00; }\n  .btn-primary.btn-purple {\n    background-color: #8130ff; }\n  .btn-primary.btn-ruby {\n    background-color: #ff1744; }\n  .btn-primary.btn-sky {\n    background-color: #30bcff; }\n\n.btn-outline {\n  background-color: transparent;\n  border-color: #3A53FF;\n  color: #3A53FF; }\n  .btn-outline.btn-active:highlighted {\n    background-color: #6d80ff; }\n\n.btn[isEnabled=false] {\n  color: #a4a4a4;\n  background-color: #e0e0e0;\n  border-color: #e0e0e0; }\n\n.fa {\n  font-family: FontAwesome, fontawesome-webfont; }\n\n.form .input {\n  padding: 16 8 16 8;\n  background-color: transparent; }\n  .form .input.input-border {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 2;\n    padding: 16; }\n  .form .input.input-rounded {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 28;\n    padding: 16; }\n  .form .input[isEnabled='false'] {\n    background-color: #fafafa; }\n\n.form .input-field {\n  margin: 8; }\n  .form .input-field .label {\n    font-size: 12;\n    color: #bababa; }\n  .form .input-field .input {\n    padding: 0;\n    margin: 0 0 8 0; }\n  .form .input-field .hr-light.active,\n  .form .input-field .hr-dark.active {\n    background-color: #3A53FF; }\n  .form .input-field.input-sides .label {\n    font-size: 18;\n    margin: 0 0 8 0; }\n\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 4;\n  font-weight: normal;\n  color: #022734; }\n\n.body,\n.body2,\n.footnote {\n  font-weight: normal;\n  color: #022734; }\n\n.h1 {\n  font-size: 32; }\n\n.h2 {\n  font-size: 22; }\n\n.h3 {\n  font-size: 15; }\n\n.h4 {\n  font-size: 12; }\n\n.h5 {\n  font-size: 11; }\n\n.h6 {\n  font-size: 10; }\n\n.body {\n  font-size: 14; }\n\n.body2 {\n  font-size: 17; }\n\n.footnote {\n  font-size: 13; }\n\n.list-group .list-group-item {\n  color: #212121;\n  font-size: 16;\n  margin: 0;\n  padding: 16; }\n  .list-group .list-group-item Label {\n    vertical-align: center; }\n  .list-group .list-group-item .thumb {\n    stretch: fill;\n    width: 40;\n    height: 40;\n    margin-right: 16; }\n  .list-group .list-group-item.active {\n    background-color: #e0e0e0; }\n  .list-group .list-group-item .list-group-item-text {\n    color: #022734;\n    font-size: 14; }\n\n.page {\n  background-color: #fff; }\n\n.progress {\n  color: #3A53FF;\n  background-color: #bababa; }\n\n.segmented-bar {\n  font-size: 13;\n  background-color: #fff;\n  color: #212121;\n  selected-background-color: #3A53FF; }\n\n.sidedrawer-left, .sidedrawer-center {\n  background-color: #FFFFFF; }\n\n.sidedrawer-header {\n  background-color: #fafafa;\n  height: 148;\n  width: 100%; }\n\n.sidedrawer-left .sidedrawer-header {\n  padding: 16 16 0 16; }\n\n.sidedrawer-center .sidedrawer-header {\n  padding: 20 15 0 15; }\n\n.sidedrawer-header-image {\n  background-color: #e0e0e0; }\n\n.sidedrawer-left .sidedrawer-header-image {\n  height: 64;\n  width: 64;\n  border-radius: 32;\n  horizontal-align: left;\n  margin-bottom: 36; }\n\n.sidedrawer-center .sidedrawer-header-image {\n  height: 74;\n  width: 74;\n  border-radius: 37;\n  horizontal-align: center;\n  margin-bottom: 24; }\n\n.sidedrawer-header-brand {\n  color: #737373; }\n\n.sidedrawer-left .sidedrawer-header-brand {\n  horizontal-align: left;\n  font-size: 14; }\n\n.sidedrawer-center .sidedrawer-header-brand {\n  horizontal-align: center;\n  font-size: 15; }\n\n.sidedrawer-list-item {\n  height: 48;\n  horizontal-align: left;\n  width: 100%;\n  orientation: horizontal; }\n  .sidedrawer-list-item .sidedrawer-list-item-icon {\n    width: 24;\n    text-align: center;\n    font-size: 20;\n    height: 48;\n    vertical-align: center; }\n  .sidedrawer-list-item.active {\n    color: #3A53FF;\n    background-color: #F8F8F8; }\n    .sidedrawer-list-item.active .sidedrawer-list-item-icon {\n      color: #3A53FF; }\n\n.sidedrawer-left .sidedrawer-list-item-icon {\n  margin: 0 16 0 16; }\n\n.sidedrawer-center .sidedrawer-list-item-icon {\n  margin: 0 0 0 15; }\n\n.sidedrawer-list-item-text {\n  horizontal-align: left;\n  text-align: left;\n  font-size: 15;\n  background-color: transparent;\n  border-width: 0.1;\n  width: 80%;\n  vertical-align: center; }\n\n.sidedrawer-left .sidedrawer-list-item-text {\n  padding-left: 16; }\n\n.sidedrawer-center .sidedrawer-list-item-text {\n  padding-left: 15; }\n\n.slider {\n  background-color: #3A53FF; }\n  .slider[isEnabled=false] {\n    background-color: #e0e0e0;\n    color: #e0e0e0; }\n\n.switch[checked=true] {\n  background-color: #3A53FF;\n  color: #3A53FF; }\n\n.switch[checked=true][isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #fff; }\n\n.switch[isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #e0e0e0; }\n\n.tab-view {\n  /*color: $secondary;*/\n  selected-color: #30bcff;\n  tabs-background-color: #fff; }\n  .tab-view .tab-view-item {\n    background-color: #fff;\n    tabs-background-color: #fff; }\n\n#login-background {\n  margin-top: -20;\n  background-size: cover;\n  background-position: center; }\n\n.login-wrap {\n  padding: 0 40; }\n\n.logo-wrap {\n  margin: 60 0 10 0;\n  padding: 20 0; }\n  .logo-wrap .login-logo {\n    text-align: center;\n    font-size: 30;\n    font-weight: bold;\n    margin-bottom: 10;\n    opacity: 1;\n    color: #212121;\n    opacity: .9; }\n  .logo-wrap .login-logo-sub {\n    color: #212121;\n    opacity: .8;\n    text-align: center; }\n\n.login-wrapper {\n  padding: 20;\n  background-color: #fff;\n  border-radius: 3; }\n  .login-wrapper TextField {\n    padding: 10 10;\n    margin: 10 0 0 0; }\n\n.go-back {\n  font-size: 14;\n  text-align: center;\n  color: #212121;\n  margin-top: 10; }\n\n/**\r\n * Import all platform specific files here\r\n */\n.btn {\n  border-width: 0;\n  font-family: 'SF UI Text Medium';\n  font-size: 15; }\n\n.btn-outline {\n  border-width: 1; }\n\n.btn-rounded-sm {\n  border-radius: 4; }\n\n.btn-rounded-lg {\n  border-radius: 19; }\n\n.form {\n  font-family: 'SF UI Text Regular'; }\n  .form .input {\n    font-size: 15; }\n    .form .input.input-rounded {\n      border-radius: 27; }\n\n/* This is here temporarily because _index.ios.scss cannot be empty */\n.h1 {\n  font-size: 32; }\n\n.slider {\n  margin: 10 15; }\n\n.sidedrawer-list-item-icon, .sidedrawer-list-item {\n  color: #022734; }\n\n.switch {\n  margin: 8 15; }\n\n.list-group .list-group-item {\n  padding: 16 15 16 15; }\n  .list-group .list-group-item .thumb {\n    margin-right: 15; }\n  .list-group .list-group-item .list-group-item-heading {\n    margin-bottom: 5; }\n\n.segmented-bar {\n  margin: 0 15;\n  color: #3A53FF; }\n\n.fa {\n  font-family: \"FontAwesome\"; }\n", ""]);

; 
if (false ) {} 

/***/ }),

/***/ "./app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRef", function() { return rootRef; });
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/react-nativescript/dist/index.js");
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_nativescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/AppContainer.tsx");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (false) {}
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (false) {}
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
         // Must be imported before React and ReactNativeScript.


/* Controls react-nativescript log verbosity. true: all logs; false: only error logs. */

Object.defineProperty(global, '__DEV__', {
  value: false
});


var rootRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
react_nativescript__WEBPACK_IMPORTED_MODULE_2__["start"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_AppContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  forwardedRef: rootRef
}, null),
/* This ref MUST match the ref that you pass into the base component of your app container. */
rootRef);; 
if (false ) {} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/AppContainer.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.fa {\n  color: #3A53FF; }\n\n.info {\n  font-size: 20; }\n", ""]);

; 
if (false ) {} 

/***/ }),

/***/ "./components/AppContainer.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/react-nativescript/dist/index.js");
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_nativescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Reactified_Reactified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./Reactified/Reactified.ts");
/* harmony import */ var tns_core_modules_ui_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/ui/button/button.js");
/* harmony import */ var tns_core_modules_ui_button_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_button_button__WEBPACK_IMPORTED_MODULE_5__);





 // import { Button } from 'tns-core-modules/ui/button/button';

var MyFancyButton =
/** @class */
function (_super) {
  __extends(MyFancyButton, _super);

  function MyFancyButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return MyFancyButton;
}(tns_core_modules_ui_button_button__WEBPACK_IMPORTED_MODULE_5__["Button"]);

var MyButton = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_4__["Reactified"])(new tns_core_modules_ui_button_button__WEBPACK_IMPORTED_MODULE_5__["Button"](), "button");

var AppContainer =
/** @class */
function (_super) {
  __extends(AppContainer, _super);

  function AppContainer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.pageRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this.myFancyButtonRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    return _this;
  }

  AppContainer.prototype.componentDidMount = function () {
    var _this = this;

    var frame = this.props.forwardedRef.current;
    frame.navigate({
      create: function () {
        var page = _this.pageRef.current;
        page.addCssFile("./components/AppContainer.scss"); // Path is relative to the 'app' folder; not relative to this file!

        return page;
      }
    });
    setTimeout(function () {
      var myFancyButton = _this.myFancyButtonRef.current;
      myFancyButton.backgroundColor = new tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_3__["Color"]("silver");
      myFancyButton.on("tap", function (event) {
        console.log("tap");
      });
    }, 2000);
  };

  AppContainer.prototype.render = function () {
    var forwardedRef = this.props.forwardedRef;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$Frame"], {
      ref: forwardedRef
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$Page"], {
      ref: this.pageRef,
      className: "page",
      actionBarHidden: false
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$StackLayout"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyButton, {
      forwardedRef: this.myFancyButtonRef,
      backgroundColor: new tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_3__["Color"]("green"),
      width: 120,
      height: 40
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyButton, {
      backgroundColor: new tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_3__["Color"]("orange"),
      width: 100,
      height: 20
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$Button"], {
      text: "test",
      onTap: function () {
        console.log("tap");
      }
    }))));
  };

  return AppContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); // export default AppContainer;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__["hot"])(AppContainer)); // Replace this line with the above line if you want to remove hot loading.

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc","markingMode":"none"},"devDependencies":{"@types/react-mixin":"^2.0.32"}};

/***/ })

},[["./app.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9BUEkudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudERpZE1vdW50SW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudFdpbGxVbm1vdW50SW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L3Nob3VsZENvbXBvbmVudFVwZGF0ZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnRzeCJdLCJuYW1l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WUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFv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bWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL1JlYWN0aWZpZWQvQVBJLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0FQSS50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0V4dHJhUHJvcHMudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vSGVscGVycy50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9IZWxwZXJzLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudERpZE1vdW50SW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnREaWRNb3VudEltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50V2lsbFVubW91bnRJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudFdpbGxVbm1vdW50SW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9zaG91bGRDb21wb25lbnRVcGRhdGVJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L3Nob3VsZENvbXBvbmVudFVwZGF0ZUltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVHlwZXMudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVHlwZXMudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vZ2V0Q3VycmVudFJlZkltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vZ2V0Q3VycmVudFJlZkltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi91cGRhdGVMaXN0ZW5lcnNIZWxwZXJJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzXCI6IFwiLi9SZWFjdGlmaWVkL1JlYWN0aWZpZWQudHNcIixcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAudHNcIixcblx0XCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIjogXCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKilcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1cGRhdGVMaXN0ZW5lciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRXZlbnRIYW5kbGluZ1wiO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9zaGFsbG93RXF1YWxcIjtcbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwiLi9FeHRyYVByb3BzXCI7XG5pbXBvcnQgeyB1cGRhdGVMaXN0ZW5lcnNIZWxwZXJJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbFwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFJlZkltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9nZXRDdXJyZW50UmVmSW1wbFwiO1xuaW1wb3J0IHvCoE9ic2VydmFibGUgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgdXBkYXRlTGlzdGVuZXJzSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGxcIjtcbmltcG9ydCB7IHNob3VsZENvbXBvbmVudFVwZGF0ZUltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9SZWFjdC9zaG91bGRDb21wb25lbnRVcGRhdGVJbXBsXCI7XG5pbXBvcnQgeyBjb21wb25lbnRXaWxsVW5tb3VudEltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnRXaWxsVW5tb3VudEltcGxcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzXCI7XG5cbi8qIGRlY2xhcmVkIGhlcmUgaW4gc2VwZXJhdGUgZmlsZSBzbyBjbGFzcyBjYW4gYmUgYWNjZXNzZWQgZnJvbSBpbXBsIGZpbGVzKi9cbmV4cG9ydCBjbGFzcyBSZWFjdGlmeTxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VCAmIEV4dHJhUHJvcHM8VD4sIGFueT4ge1xuICAgIHN0YXRpYyBjb3VudE9mSW5zdGFuY2VzID0gMDtcbiAgICAvLyBzdGF0aWMgZGVmYXVsdFByb3BzID0gey4uLiBvYnNlcnZhYmxlIH0gXG4gICAgLypcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVCAmIEV4dHJhUHJvcHM8VD4pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBSZWFjdGlmeS5jb3VudE9mdGhpc3MgKys7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29uc3RydWN0aW5nIHRoaXMgXCIgKyBSZWFjdGlmeS5jb3VudE9mdGhpc3MpO1xuICAgIH1cbiAgICAqL1xuICAgIHByb3RlY3RlZCByZWFkb25seSBteVJlZjogUmVhY3QuUmVmT2JqZWN0PFQ+ID0gUmVhY3QuY3JlYXRlUmVmPFQ+KCk7XG4gICAgcHJvdGVjdGVkIGdldEN1cnJlbnRSZWYoKTogVCB8IG51bGwge1xuICAgICAgICByZXR1cm4gZ2V0Q3VycmVudFJlZkltcGwodGhpcyk7XG4gICAgICAgIC8vIHJldHVybiAodGhpcy5wcm9wcy5mb3J3YXJkZWRSZWYgfHwgdGhpcy5teVJlZikuY3VycmVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBIZWxwZXIgbWV0aG9kIGZvciB1cGRhdGVMaXN0ZW5lcnM6IHNpbXBseSBnZXRzIHRoZSBjdXJyZW50IHJlZiB0byBwYXNzIG9uIHRvIGl0LlxuICAgICogQHBhcmFtIGF0dGFjaCB0cnVlOiBhdHRhY2g7IGZhbHNlOiBkZXRhY2g7IG51bGw6IHVwZGF0ZVxuICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUxpc3RlbmVyc0hlbHBlcihhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPik6IHZvaWQge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcnNIZWxwZXJJbXBsKHRoaXMsIGF0dGFjaCwgbmV4dFByb3BzKTsgLy8gY2FuJ3QgcnVuIGZvciBzb21lIHJlYXNvblxuICAgICAgICAvKlxuICAgICAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IHRoaXMuZ2V0Q3VycmVudFJlZigpO1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVMaXN0ZW5lcnMobm9kZSwgYXR0YWNoLCBuZXh0UHJvcHMpO1xuICAgICAgICAqL1xuICAgIH1cbiAgICAvKipcbiAgICAqXG4gICAgKiBAcGFyYW0gYXR0YWNoIHRydWU6IGF0dGFjaDsgZmFsc2U6IGRldGFjaDsgbnVsbDogdXBkYXRlXG4gICAgKi9cblxuICAgIHByb3RlY3RlZCB1cGRhdGVMaXN0ZW5lcnMobm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pOiB2b2lkIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXJzSW1wbCh0aGlzLCBub2RlLCBhdHRhY2gsIG5leHRQcm9wcyk7ICAgICAgICBcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzSGVscGVyKHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFB1cmVDb21wb25lbnQncyBzaG91bGRDb21wb25lbnRVcGRhdGUoKSBtZXRob2QgaXMgaWdub3JlZCBhbmQgcmVwbGFjZWQgd2l0aCBhIHNoYWxsb3dFcXVhbCgpXG4gICAgKiBjb21wYXJpc29uIG9mIHByb3BzIGFuZCBzdGF0ZS4gV2UnbGwgaW1wbGVtZW50IG91ciBDb21wb25lbnQncyBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB0b1xuICAgICogbWF0Y2ggdGhlIHdheSBQdXJlQ29tcG9uZW50IGlzIGhhbmRsZWQuXG4gICAgKi9cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBUICYgRXh0cmFQcm9wczxUPiwgbmV4dFN0YXRlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgLypcbiAgICAgICAgLy8gY29uc29sZS5sb2coYE9ic2VydmFibGUncyBzaG91bGRDb21wb25lbnRVcGRhdGVgKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkVXBkYXRlOiBib29sZWFuID0gIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFtzaG91bGRDb21wb25lbnRVcGRhdGVdIHNob3VsZFVwZGF0ZTogJHtzaG91bGRVcGRhdGV9LmApO1xuXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzSGVscGVyKG51bGwsIG5leHRQcm9wcyk7XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9sdWN5YmFpbi5jb20vYmxvZy8yMDE4L3JlYWN0LWpzLXB1cmUtY29tcG9uZW50L1xuICAgICAgICByZXR1cm4gc2hvdWxkVXBkYXRlO1xuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbCh0aGlzLCBuZXh0UHJvcHMsIG5leHRTdGF0ZSk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAvLyB0aGlzLnVwZGF0ZUxpc3RlbmVyc0hlbHBlcihmYWxzZSk7XG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50SW1wbCh0aGlzKTtcbiAgICB9XG59IiwiXG5pbXBvcnQgeyBFdmVudERhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBEb2NrIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9kb2NrLWxheW91dC9kb2NrLWxheW91dFwiO1xuaW1wb3J0IHsgU2hvd25Nb2RhbGx5RGF0YX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3L3ZpZXdcIjtcbmltcG9ydCB7XG4gICAgR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBHZXN0dXJlVHlwZXMsXG4gICAgVG91Y2hHZXN0dXJlRXZlbnREYXRhLFxuICAgIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEsXG4gICAgUGluY2hHZXN0dXJlRXZlbnREYXRhLFxuICAgIFBhbkdlc3R1cmVFdmVudERhdGEsXG59IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzXCI7XG5cbmltcG9ydCB7T2JzZXJ2YWJsZSwgVmlld0Jhc2UsIFZpZXcsIFBhZ2UsIEFjdGlvbkl0ZW19IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoL3N3aXRjaFwiO1xuXG5cbi8vIGV4cG9ydCB0eXBlIEV4dHJhUHJvcHM8VCBleHRlbmRzIE9ic2VydmFibGU+ID0gT2JzZXJ2YWJsZVByb3BzPFQ+ICYgVmlld0Jhc2VQcm9wczxUPiAmIFZpZXdQcm9wczxUPiAmIFBhZ2VQcm9wczxUPiAmIEFjdGlvbkl0ZW1Qcm9wczxUPjtcbmV4cG9ydCB0eXBlIEV4dHJhUHJvcHM8VCBleHRlbmRzIE9ic2VydmFibGU+ID0gT2JzZXJ2YWJsZVByb3BzPFQ+ICYgSVZpZXcgJiBWaWV3UHJvcHM8VD4gJiBQYWdlUHJvcHM8VD4gJiBBY3Rpb25JdGVtUHJvcHM8VD47XG4vLyB1c2luZyBjb25kaXRpb25hbCBzbyB0aGF0IFJOU0J1dHRvbiBkb24ndCBnZXQgbmF2aWdhdGVkVG8gKFBhZ2VQcm9wcykgXG5cblxuLyogXG4gU2hvdWxkIGdldCBPYnNlcnZhYmxlUHJvcHNcbiB3aXRoIGdldHRlci9vbmRpdGlvbmFsIHR5cGluZyAtIHNpbmNlIHRoZSBucyBjb21wb25lbnRcbiBtdXN0IGJlIG9mIHR5cGUgT2JzZXJ2YWJsZS4gdXNpbmcgYmVsb3cgY29uaWR0aW9uYWwgdHlwZVxuIGFsc28gY2F1c2UgYW4gdHlwZSBlcnJvciBpbiBnZXRDdXJyZW50UmVmSW1wbFxuICovXG4vLyB0eXBlIE9ic2VydmFibGVQcm9wczxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4gPSBUIGV4dGVuZHMgT2JzZXJ2YWJsZSA/IElPYnNlcnZhYmxlPFQ+IDogRW1wdHlcblxuaW50ZXJmYWNlIE9ic2VydmFibGVQcm9wczxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ge1xuICAgIGVsZW1lbnRLZXk/OiBzdHJpbmcgLy8gYWRkZWRcbiAgICBmb3J3YXJkZWRSZWY/OiBSZWFjdC5SZWZPYmplY3Q8VD47XG4gICAgb25Qcm9wZXJ0eUNoYW5nZT86IChkYXRhOiBFdmVudERhdGEpID0+IHZvaWQ7XG59XG5cbi8qIHJlc3QgaXMgdXNpbmcgY29uZGl0aW9uYWwgdHlwZSBcImdldHRlcnNcIiBzbyB0aGF0IGJ1dHRvbiBkb24ndCBhY2Nlc3MgZ2V0IHBhZ2UncyBwcm9wcyBldGMqL1xuXG50eXBlIFZpZXdCYXNlUHJvcHM8VD4gPSBUIGV4dGVuZHMgVmlld0Jhc2UgPyBJVmlld0Jhc2UgOiBFbXB0eVxuaW50ZXJmYWNlIElWaWV3QmFzZSB7XG4gICAgX19ybnNfX25vZGVUcmVlUm9sZT86IHN0cmluZztcbiAgICBkb2NrPzogRG9jaztcbn1cblxudHlwZSBWaWV3UHJvcHM8VD4gPSBUIGV4dGVuZHMgVmlldyA/IElWaWV3IDogRW1wdHk7XG5pbnRlcmZhY2UgSVZpZXcge1xuICAgIC8qIEZyb20gVmlldy4gKi9cbiAgICBvbkxvYWRlZD86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25VbmxvYWRlZD86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25BbmRyb2lkQmFja1ByZXNzZWQ/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uU2hvd2luZ01vZGFsbHk/OiAoYXJnczogU2hvd25Nb2RhbGx5RGF0YSkgPT4gdm9pZDtcbiAgICBvblNob3duTW9kYWxseT86IChhcmdzOiBTaG93bk1vZGFsbHlEYXRhKSA9PiB2b2lkO1xuXG4gICAgLyogVGhlIGdlc3R1cmUgaGFuZGxlcnMuICovXG4gICAgb25UYXA/OiAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvbkRvdWJsZVRhcD86IChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uUGluY2g/OiAoYXJnczogUGluY2hHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uUGFuPzogKGFyZ3M6IFBhbkdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Td2lwZT86IChhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Sb3RhdGlvbj86IChhcmdzOiBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Mb25nUHJlc3M/OiAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblRvdWNoPzogKGFyZ3M6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcblxuICAgIC8qIFRoZXNlIGFyZSB0byBiZSBvdmVycmlkZGVuIGluIHN1YmNsYXNzZXMgb2YgVmlldywgc28gdW5saWtlbHkgdG8gYmUgYXBwcm9wcmlhdGUuICovXG4gICAgLy8gb25MYXlvdXQ/OiAobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgLy8gb25NZWFzdXJlPzogKHdpZHRoTWVhc3VyZVNwZWM6IG51bWJlciwgaGVpZ2h0TWVhc3VyZVNwZWM6IG51bWJlcikgPT4gdm9pZDtcbn1cblxudHlwZSBQYWdlUHJvcHM8VD4gPSBUIGV4dGVuZHMgUGFnZSA/IElQYWdlIDogRW1wdHlcbmludGVyZmFjZSBJUGFnZSB7XG4gICAgb25OYXZpZ2F0aW5nVG8/OiBQYWdlTmF2aWdhdGlvbkV2ZW50SGFuZGxlcjtcbiAgICBvbk5hdmlnYXRlZFRvPzogUGFnZU5hdmlnYXRpb25FdmVudEhhbmRsZXI7XG4gICAgb25OYXZpZ2F0aW5nRnJvbT86IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyO1xuICAgIG9uTmF2aWdhdGVkRnJvbT86IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyO1xufVxuXG50eXBlIEFjdGlvbkl0ZW1Qcm9wczxUPiA9IFQgZXh0ZW5kcyBBY3Rpb25JdGVtID8gSUFjdGlvbkl0ZW0gOiBFbXB0eVxuaW50ZXJmYWNlIElBY3Rpb25JdGVtIHtcbiAgICBvblRhcD86IChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xufVxuXG4vKiBjb3VsZCBiZSB1c2VkIHNldCBwcm9wcyBmb3IgZXZlcnkgc3RpbmdsZSBSTlMgQ29tcG9uZW50Ki9cbmludGVyZmFjZSBFbXB0eSB7XG5cbn1cblxuLy8gaW5zaWRlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaGlyYWthYmEvcmVhY3QtbmF0aXZlc2NyaXB0L2Jsb2IvbWFzdGVyL3JlYWN0LW5hdGl2ZXNjcmlwdC9zcmMvY29tcG9uZW50cy9Td2l0Y2gudHNcbi8vIGNhbiBsaXN0ZW5lciBiZSBhdHRhY2hlZCB0byB0aGlzOlBST1BTLm9uVG9nZ2xlID8iLCJpbXBvcnQgeyBcbiAgICBlbGVtZW50TWFwLFxuICAgIEFic29sdXRlTGF5b3V0LFxuICAgIEFjdGlvbkJhcixcbiAgICBBY3Rpb25JdGVtLFxuICAgIEFjdGl2aXR5SW5kaWNhdG9yLFxuICAgIEFuaW1hdGlvbixcbiAgICBPYnNlcnZhYmxlXG59ZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZU9mKG9iamVjdDogT2JqZWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gb2JqZWN0LmNvbnN0cnVjdG9yLm5hbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMZXR0ZXJMb3dlcmNhc2UobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xufVxuXG5jb25zdCBpbXBsTWV0aG9kUmVnaXN0cnk6IHN0cmluZ1tdID0gW107IFxuY29uc29sZS5sb2coXCJhbGwgZWxlbWVudHMgaW4gZWxlbWVudCByZWdpc3RyeVwiKVxuZm9yKGxldCBlbGVtZW50TmFtZSBpbiBlbGVtZW50TWFwKSB7XG4gICAgaW1wbE1ldGhvZFJlZ2lzdHJ5LnB1c2goZWxlbWVudE5hbWUgKyBcIkltcGxcIik7XG59XG5cbnR5cGUgSW1wbE1ldGhvZCA9ICguLi5hcmdzOiBhbnkpID0+IGFueVxuZXhwb3J0IGNvbnN0IGV4ZWN1dGVJbk9yZGVyID0gKGltcGxNZXRob2RzOiBJbXBsTWV0aG9kW10sIC4uLmFyZ3M6IGFueSkgPT4geyBcbiAgICBsZXQgcmV0dXJuVmFsdWUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgbGV0IHJ1biA9IHVuZGVmaW5lZDtcblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwib2JzZXJ2YWJsZUltcGxcIik7XG4gICAgaWYocnVuKSB7IFxuICAgICAgICByZXR1cm5WYWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwidmlld0Jhc2VJbXBsXCIpOyAvLyBleHRlbmRzIE9ic2VydmFibGUuLi5cbiAgICBcbiAgICBpZihydW4pIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwidmlld0ltcGxcIik7IC8vIGV4dGVuZHMgVmlld0Jhc2UuLi5cbiAgICBpZihydW4pIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiYWN0aW9uSXRlbUltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJwYWdlSW1wbFwiKSAvLyBleHRlbmRzIFZpZXcuLi5cbiAgICBpZihydW4pIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5cbmNvbnN0IGhpZXJhcmNoeU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBcIkFic29sdXRlTGF5b3V0XCIgOiBcIkxheW91dEJhc2VcIixcbiAgICBcIkFjdGlvbkJhclwiIDogXCJWaWV3XCIsXG4gICAgXCJBY3Rpb25JdGVtXCIgOiBcIlZpZXdCYXNlXCIsXG4gICAgXCJBY3Rpdml0eUluZGljYXRvclwiIDogXCJWaWV3QmFzZVwiLFxufTsiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnREaWRNb3VudEltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIG9ic2VydmFibGVJbXBsKGluc3RhbmNlKTtcbn1cblxuY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcInVwZGF0ZUxpc3RlbmVyc0hlbHBlclwiKSh0cnVlKTtcbn1cbi8qXG5jb25zdCB2aWV3QmFzZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdC5Db21wb25lbnQ8VCAmIEV4dHJhUHJvcHM8VD4+KSA9PiB7XG4gICAgLy8gbm9uZVxufVxuKi9cbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwifi9SZWFjdGlmaWVkL0FQSVwiO1xuXG5cblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudFdpbGxVbm1vdW50SW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgb2JzZXJ2YWJsZUltcGwoaW5zdGFuY2UpO1xufVxuXG5jb25zdCBvYnNlcnZhYmxlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwidXBkYXRlTGlzdGVuZXJzSGVscGVyXCIpKGZhbHNlKTtcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcblxuaW1wb3J0IHsgRXh0cmFQcm9wcyB9IGZyb20gXCJ+L1JlYWN0aWZpZWQvRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9zaGFsbG93RXF1YWxcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIn4vUmVhY3RpZmllZC9BUElcIjtcblxuXG5leHBvcnQgY29uc3Qgc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBuZXh0UHJvcHM6IFQgJiBFeHRyYVByb3BzPFQ+LCBuZXh0U3RhdGU6IGFueSk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlSW1wbChpbnN0YW5jZSwgbmV4dFByb3BzLCBuZXh0U3RhdGUpO1xufVxuY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbmV4dFByb3BzOiBUICYgRXh0cmFQcm9wczxUPiwgbmV4dFN0YXRlOiBhbnkpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhgT2JzZXJ2YWJsZSdzIHNob3VsZENvbXBvbmVudFVwZGF0ZWApO1xuICAgIGNvbnN0IHNob3VsZFVwZGF0ZTogYm9vbGVhbiA9ICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgLy8gY29uc29sZS5sb2coYFtzaG91bGRDb21wb25lbnRVcGRhdGVdIHNob3VsZFVwZGF0ZTogJHtzaG91bGRVcGRhdGV9LmApO1xuXG4gICAgdGhpcy51cGRhdGVMaXN0ZW5lcnNIZWxwZXIobnVsbCwgbmV4dFByb3BzKTtcblxuICAgIC8vIGh0dHBzOi8vbHVjeWJhaW4uY29tL2Jsb2cvMjAxOC9yZWFjdC1qcy1wdXJlLWNvbXBvbmVudC9cbiAgICByZXR1cm4gc2hvdWxkVXBkYXRlO1xufSIsImltcG9ydCB7IE9ic2VydmFibGUsIFZpZXdCYXNlLCBWaWV3IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwiLi4vRXh0cmFQcm9wc1wiO1xuXG5cbi8vIGV4cG9ydCB0eXBlIFJlYWN0aWZ5PFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiA9IFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPiwgYW55PjtcblxuZXhwb3J0IHR5cGUgUHJvcHM8VCBleHRlbmRzIE9ic2VydmFibGU+ID0gVCAmIEV4dHJhUHJvcHM8VD47XG4vKlxuZXhwb3J0IHR5cGUgT2JzZXJ2YWJsZTxUPiA9IFQgZXh0ZW5kcyBPYnNlcnZhYmxlID8gUmVhY3RpZnk8T2JzZXJ2YWJsZT4gOiBFbXB0eVxuXG5leHBvcnQgdHlwZSBWaWV3QmFzZTxUPiA9IFQgZXh0ZW5kcyBWaWV3QmFzZSA/IFJlYWN0aWZ5PFZpZXdCYXNlPiA6IEVtcHR5O1xuXG5leHBvcnQgdHlwZSBWaWV3PFQ+ID0gVCBleHRlbmRzIFZpZXcgPyBSZWFjdGlmeTxWaWV3PiA6IEVtcHR5O1xuXG5pbnRlcmZhY2UgRW1wdHkge1xuXG59XG4qL1xuXG5cbi8vIGhlbHBlciBtZXRob2QgdG8gYmUgYWJsZSB0byBjYXN0IFJlYWN0aWZ5PE9ic2VydmFibGU+IHRvIFJlYWN0aWZ5PFZpZXc+ICBldGMgXG5leHBvcnQgY29uc3QgdHJ5Q2FzdCA9IDxUPihwYXJhbWV0ZXI6IGFueSkgPT4ge1xuICAgIHJldHVybiBwYXJhbWV0ZXIgYXMgVDtcbn1cbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbi8vIGltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwiLi4vRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vQVBJXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRSZWZJbXBsIDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KTogVCB8IG51bGwge1xuICAgIHJldHVybiAoaW5zdGFuY2UucHJvcHMuZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpKS5jdXJyZW50O1xufVxuXG5cblxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5fSBmcm9tIFwiLi4vQVBJXCI7XG4vLyBpbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuL1R5cGVzXCI7XG5cbi8qXG5leHBvcnQgY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdC5Db21wb25lbnQ8VCAmIEV4dHJhUHJvcHM8VD4+LCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBQKSA9PiB7XG4gICAgXG59XG4qL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUxpc3RlbmVyc0hlbHBlckltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBvYnNlcnZhYmxlSW1wbChpbnN0YW5jZSwgYXR0YWNoLCBuZXh0UHJvcHMpO1xufVxuXG5jb25zdCBvYnNlcnZhYmxlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIGNvbnN0IG5vZGU6IFQgfCBudWxsID0gUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpO1xuICAgIGNvbnNvbGUubG9nKFwiZ290IG5vZGU6IFwiICsgbm9kZSk7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJ1cGRhdGVMaXN0ZW5lcnNcIikobm9kZSwgYXR0YWNoLCBuZXh0UHJvcHMpO1xufSIsIlxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIFZpZXcsIFBhZ2UsIEFjdGlvbkl0ZW0gfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuXG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IHVwZGF0ZUxpc3RlbmVyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FdmVudEhhbmRsaW5nXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgdHJ5Q2FzdCwgUHJvcHMgfSBmcm9tIFwiLi9UeXBlc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vQVBJXCI7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVMaXN0ZW5lcnNJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4gLG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFByb3BzPFQ+KSA9PiB7XG4gICAgXG4gICAgLyogaW1wbGVtZW50YXRpb24gZm9yIGFueSBybnMgY29tcG9uZW50IGhlcmUgLSBvciBvbiByZWFjdGlmeSBjbGFzcyBib2R5Ki9cbiAgICBcbiAgICBvYnNlcnZhYmxlSW1wbChpbnN0YW5jZSwgbm9kZSwgYXR0YWNoLCBuZXh0UHJvcHMpO1xuXG4gICAgdmlld0ltcGwoXG4gICAgICAgIHRyeUNhc3Q8UmVhY3RpZnk8Vmlldz4+KGluc3RhbmNlKSxcbiAgICAgICAgdHJ5Q2FzdChub2RlKSwgYXR0YWNoLFxuICAgICAgICB0cnlDYXN0PFByb3BzPFZpZXc+PihuZXh0UHJvcHMpXG4gICAgKTtcblxuXG4gICAgYWN0aW9uSXRlbUltcGwoXG4gICAgICAgIHRyeUNhc3Q8UmVhY3RpZnk8QWN0aW9uSXRlbT4+KGluc3RhbmNlKSxcbiAgICAgICAgdHJ5Q2FzdDxBY3Rpb25JdGVtPihub2RlKSxcbiAgICAgICAgYXR0YWNoLFxuICAgICAgICB0cnlDYXN0PFByb3BzPEFjdGlvbkl0ZW0+PihuZXh0UHJvcHMpXG4gICAgKTtcbiAgICAvLyBkaXJlY3RseSBpbmhlcml0aW5nIHZpZXdcbiAgICBwYWdlSW1wbChcbiAgICAgICAgdHJ5Q2FzdDxSZWFjdGlmeTxQYWdlPj4oaW5zdGFuY2UpLFxuICAgICAgICB0cnlDYXN0PFBhZ2U+KG5vZGUpLFxuICAgICAgICBhdHRhY2gsIFxuICAgICAgICB0cnlDYXN0PFByb3BzPFBhZ2U+PihuZXh0UHJvcHMpXG4gICAgKTtcbn1cblxuY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxPYnNlcnZhYmxlPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwicHJvcGVydHlDaGFuZ2VcIiwgaW5zdGFuY2UucHJvcHMub25Qcm9wZXJ0eUNoYW5nZSwgbmV4dFByb3BzLm9uUHJvcGVydHlDaGFuZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblByb3BlcnR5Q2hhbmdlKSBtZXRob2QoXCJwcm9wZXJ0eUNoYW5nZVwiLCBpbnN0YW5jZS5wcm9wcy5vblByb3BlcnR5Q2hhbmdlKTtcbiAgICB9XG4gICAgXG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaGlyYWthYmEvcmVhY3QtbmF0aXZlc2NyaXB0L2Jsb2IvbWFzdGVyL3JlYWN0LW5hdGl2ZXNjcmlwdC9zcmMvY29tcG9uZW50cy9WaWV3LnRzXG5jb25zdCB2aWV3SW1wbCA9IDxUIGV4dGVuZHMgVmlldz4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJsb2FkZWRcIiwgaW5zdGFuY2UucHJvcHMub25Mb2FkZWQsIG5leHRQcm9wcy5vbkxvYWRlZCk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwidW5sb2FkZWRcIiwgaW5zdGFuY2UucHJvcHMub25VbmxvYWRlZCwgbmV4dFByb3BzLm9uVW5sb2FkZWQpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcImFuZHJvaWRCYWNrUHJlc3NlZFwiLCBpbnN0YW5jZS5wcm9wcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCwgbmV4dFByb3BzLm9uQW5kcm9pZEJhY2tQcmVzc2VkKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJzaG93aW5nTW9kYWxseVwiLCBpbnN0YW5jZS5wcm9wcy5vblNob3dpbmdNb2RhbGx5LCBuZXh0UHJvcHMub25TaG93aW5nTW9kYWxseSk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwic2hvd25Nb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd25Nb2RhbGx5LCBuZXh0UHJvcHMub25TaG93bk1vZGFsbHkpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMudGFwLCBpbnN0YW5jZS5wcm9wcy5vblRhcCwgbmV4dFByb3BzLm9uVGFwLCBcInRhcFwiKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLmRvdWJsZVRhcCwgaW5zdGFuY2UucHJvcHMub25Eb3VibGVUYXAsIG5leHRQcm9wcy5vbkRvdWJsZVRhcCwgXCJkb3VibGVUYXBcIik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5waW5jaCwgaW5zdGFuY2UucHJvcHMub25QaW5jaCwgbmV4dFByb3BzLm9uUGluY2gsIFwicGluY2hcIik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5wYW4sIGluc3RhbmNlLnByb3BzLm9uUGFuLCBuZXh0UHJvcHMub25QYW4sIFwicGFuXCIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMuc3dpcGUsIGluc3RhbmNlLnByb3BzLm9uU3dpcGUsIG5leHRQcm9wcy5vblN3aXBlLCBcInN3aXBlXCIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMucm90YXRpb24sIGluc3RhbmNlLnByb3BzLm9uUm90YXRpb24sIG5leHRQcm9wcy5vblJvdGF0aW9uLCBcInJvdGF0aW9uXCIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMubG9uZ1ByZXNzLCBpbnN0YW5jZS5wcm9wcy5vbkxvbmdQcmVzcywgbmV4dFByb3BzLm9uTG9uZ1ByZXNzLCBcImxvbmdQcmVzc1wiKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLnRvdWNoLCBpbnN0YW5jZS5wcm9wcy5vblRvdWNoLCBuZXh0UHJvcHMub25Ub3VjaCwgXCJ0b3VjaFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25Mb2FkZWQpIG1ldGhvZChcImxvYWRlZFwiLCBpbnN0YW5jZS5wcm9wcy5vbkxvYWRlZCk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblVubG9hZGVkKSBtZXRob2QoXCJ1bmxvYWRlZFwiLCBpbnN0YW5jZS5wcm9wcy5vblVubG9hZGVkKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uQW5kcm9pZEJhY2tQcmVzc2VkKSBtZXRob2QoXCJhbmRyb2lkQmFja1ByZXNzZWRcIiwgaW5zdGFuY2UucHJvcHMub25BbmRyb2lkQmFja1ByZXNzZWQpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TaG93aW5nTW9kYWxseSkgbWV0aG9kKFwic2hvd2luZ01vZGFsbHlcIiwgaW5zdGFuY2UucHJvcHMub25TaG93aW5nTW9kYWxseSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNob3duTW9kYWxseSkgbWV0aG9kKFwic2hvd25Nb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd25Nb2RhbGx5KTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uVGFwKSBtZXRob2QoR2VzdHVyZVR5cGVzLnRhcCwgaW5zdGFuY2UucHJvcHMub25UYXApO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25Eb3VibGVUYXApIG1ldGhvZChHZXN0dXJlVHlwZXMuZG91YmxlVGFwLCBpbnN0YW5jZS5wcm9wcy5vbkRvdWJsZVRhcCk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblBpbmNoKSBtZXRob2QoR2VzdHVyZVR5cGVzLnBpbmNoLCBpbnN0YW5jZS5wcm9wcy5vblBpbmNoKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uUGFuKSBtZXRob2QoR2VzdHVyZVR5cGVzLnBhbiwgaW5zdGFuY2UucHJvcHMub25QYW4pO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25Td2lwZSkgbWV0aG9kKEdlc3R1cmVUeXBlcy5zd2lwZSwgaW5zdGFuY2UucHJvcHMub25Td2lwZSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblJvdGF0aW9uKSBtZXRob2QoR2VzdHVyZVR5cGVzLnJvdGF0aW9uLCBpbnN0YW5jZS5wcm9wcy5vblJvdGF0aW9uKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uTG9uZ1ByZXNzKSBtZXRob2QoR2VzdHVyZVR5cGVzLmxvbmdQcmVzcywgaW5zdGFuY2UucHJvcHMub25Mb25nUHJlc3MpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25Ub3VjaCkgbWV0aG9kKEdlc3R1cmVUeXBlcy50b3VjaCwgaW5zdGFuY2UucHJvcHMub25Ub3VjaCk7XG4gICAgfVxufVxuXG5jb25zdCBhY3Rpb25JdGVtSW1wbCA9IDxUIGV4dGVuZHMgQWN0aW9uSXRlbT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJ0YXBcIiwgaW5zdGFuY2UucHJvcHMub25UYXAsIG5leHRQcm9wcy5vblRhcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uVGFwKSBtZXRob2QoXCJ0YXBcIiwgaW5zdGFuY2UucHJvcHMub25UYXApO1xuICAgIH1cbn1cblxuY29uc3QgcGFnZUltcGwgPSA8VCBleHRlbmRzIFBhZ2U+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInBhZ2UgaW1wbFwiKTtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibmF2aWdhdGVkRnJvbVwiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZEZyb20sIG5leHRQcm9wcy5vbk5hdmlnYXRlZEZyb20pO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcIm5hdmlnYXRlZFRvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkVG8sIG5leHRQcm9wcy5vbk5hdmlnYXRlZFRvKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJuYXZpZ2F0aW5nRnJvbVwiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdGcm9tLCBuZXh0UHJvcHMub25OYXZpZ2F0aW5nRnJvbSk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibmF2aWdhdGluZ1RvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ1RvLCBuZXh0UHJvcHMub25OYXZpZ2F0aW5nVG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgXG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZEZyb20pIG1ldGhvZChcIm5hdmlnYXRlZEZyb21cIiwgaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0ZWRGcm9tKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkVG8pIG1ldGhvZChcIm5hdmlnYXRlZFRvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkVG8pO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nRnJvbSkgbWV0aG9kKFwibmF2aWdhdGluZ0Zyb21cIiwgaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nRnJvbSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdUbykgbWV0aG9kKFwibmF2aWdhdGluZ1RvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ1RvKTtcbiAgICB9XG59XG5cblxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyByZWdpc3RlciwgQ29udGVudFZpZXcgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgbmFtZU9mLCBmaXJzdExldHRlckxvd2VyY2FzZSB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL0hlbHBlcnNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vQVBJXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gUmVhY3RpZmllZDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ob2JzZXJ2YWJsZTogVCwgbmFtZT86IHN0cmluZykgeyBcblxuICAgIGlmKCFuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBmaXJzdExldHRlckxvd2VyY2FzZShuYW1lT2Yob2JzZXJ2YWJsZSkpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyaW5nIFwiICsgbmFtZSk7XG4gICAgcmVnaXN0ZXIobmFtZSwgKCkgPT4ge1xuICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH0pO1xuXG4gICAgXG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3RpZnk8VD4ge1xuICAgICAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZm9yd2FyZGVkUmVmLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgICAgIHJlZjogZm9yd2FyZGVkUmVmIHx8IHRoaXMubXlSZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0gICAgLy8gaGF2ZSB0byBkZWNsYXJlIGNsYXNzIG5hbWUgdG8gbWFrZSBkZWNvcmF0b3JzIHdvcmsgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvNzM0MlxufVxuXG5cbi8vIFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPlxuXG4vKiBcbi8vIEFyZSBub3QgYWN0dWFsbHkgbmVlZGVkID8hXG5mdW5jdGlvbiBKU1g8VCBleHRlbmRzIE9ic2VydmFibGU+KG9ic2VydmFibGU6IG5ldyguLi5hcmdzOiBhbnlbXSkgPT4gUmVhY3QuQ29tcG9uZW50PFQgJiBFeHRyYVByb3BzPFQ+Pikge1xuICAgIHJldHVybiBSZWFjdC5mb3J3YXJkUmVmPFQsIFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxUICYgRXh0cmFQcm9wczxUPj4+KFxuICAgICAgICAocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxUICYgRXh0cmFQcm9wczxUPj4+LCByZWY6IFJlYWN0LlJlZk9iamVjdDxUPikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlXG4gICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgICAgICAgICAgZm9yd2FyZGVkUmVmOiByZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIClcbn1cbiovXG5cblxuXG4vLyBleHBvcnQgY29uc3QgTXlPYnNlcnZhYmxlOiBSZWFjdC5Db21wb25lbnRUeXBlPFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxPYnNlcnZhYmxlPiAmIEV4dHJhUHJvcHM8T2JzZXJ2YWJsZT4+ICYgUmVhY3QuQ2xhc3NBdHRyaWJ1dGVzPE9ic2VydmFibGU+ID0gSlNYKG5ldyBPYnNlcnZhYmxlKCkpO1xuLy8gZXhwb3J0IGNvbnN0IE15QnV0dG9uID0gSlNYKG5ldyBCdXR0b24oKSk7XG4vLyBleHBvcnQgY29uc3QgTXlDb250ZW50VmlldzogUmVhY3QuQ29tcG9uZW50VHlwZTxQcm9wc1dpdGhvdXRGb3J3YXJkZWRSZWY8Q29udGVudFZpZXcgJiBFeHRyYVByb3BzPENvbnRlbnRWaWV3Pj4+ICYgUmVhY3QuQ2xhc3NBdHRyaWJ1dGVzPENvbnRlbnRWaWV3PiA9IEpTWChuZXcgQ29udGVudFZpZXcoKSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXG4qKi9cXG4vKipcXHJcXG4gKiBDb2xvciBjbGFzc2VzXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAuYy1ncmV5e2NvbG9yOiNlMGUwZTB9LmMtYmctZ3JleXtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTB9XFxyXFxuKiovXFxuLmMtd2hpdGUge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1iZy13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLmMtYmxhY2sge1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1iZy1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XFxuXFxuLmMtYXF1YSB7XFxuICBjb2xvcjogIzAwY2FhYjsgfVxcblxcbi5jLWJnLWFxdWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2FhYjsgfVxcblxcbi5jLWJsdWUge1xcbiAgY29sb3I6ICMzZDVhZmU7IH1cXG5cXG4uYy1iZy1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG5cXG4uYy1jaGFyY29hbCB7XFxuICBjb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJnLWNoYXJjb2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7IH1cXG5cXG4uYy1icm93biB7XFxuICBjb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWJnLWJyb3duIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7IH1cXG5cXG4uYy1mb3Jlc3Qge1xcbiAgY29sb3I6ICMwMDY5Njg7IH1cXG5cXG4uYy1iZy1mb3Jlc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWdyZXkge1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uYy1iZy1ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uYy1ncmV5LWxpZ2h0IHtcXG4gIGNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLmMtYmctZ3JleS1saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLmMtZ3JleS1kYXJrIHtcXG4gIGNvbG9yOiAjNWM2ODdjOyB9XFxuXFxuLmMtYmctZ3JleS1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1wdXJwbGUge1xcbiAgY29sb3I6ICM4MTMwZmY7IH1cXG5cXG4uYy1iZy1wdXJwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWxlbW9uIHtcXG4gIGNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtYmctbGVtb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWEwMDsgfVxcblxcbi5jLWxpbWUge1xcbiAgY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uYy1iZy1saW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uYy1vcmFuZ2Uge1xcbiAgY29sb3I6ICNmNTdjMDA7IH1cXG5cXG4uYy1iZy1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLXJ1Ynkge1xcbiAgY29sb3I6ICNmZjE3NDQ7IH1cXG5cXG4uYy1iZy1ydWJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDQ7IH1cXG5cXG4uYy1za3kge1xcbiAgY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYy1iZy1za3kge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcblxcbi8qIFdpZHRoL0hlaWdodCAqL1xcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMDsgfVxcblxcbi5oLWZ1bGwge1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmgtMTAwIHtcXG4gIGhlaWdodDogMTAwOyB9XFxuXFxuLyoqXFxyXFxuICogTWFyZ2luIGFuZCBQYWRkaW5nXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAubS0we21hcmdpbjowfS5tLXQtMHttYXJnaW4tdG9wOjB9Lm0tci0we21hcmdpbi1yaWdodDowfS5tLWItMHttYXJnaW4tYm90dG9tOjB9Lm0tbC0we21hcmdpbi1sZWZ0OjB9Lm0teC0we21hcmdpbi1yaWdodDowO21hcmdpbi1sZWZ0OjB9Lm0teS0we21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxyXFxuICogU2FtZSBmb3IgUGFkZGluZyAodXNpbmcgdGhlICdwJyBhYmJyZXZpYXRpb24pXFxyXFxuICogRnJvbSAwLCAyLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzBcXHJcXG4qKi9cXG4ubS0wIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5tLXQtMCB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLm0tci0wIHtcXG4gIG1hcmdpbi1yaWdodDogMDsgfVxcblxcbi5tLWItMCB7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm0tbC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0teC0wIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0teS0wIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm0tMiB7XFxuICBtYXJnaW46IDI7IH1cXG5cXG4ubS10LTIge1xcbiAgbWFyZ2luLXRvcDogMjsgfVxcblxcbi5tLXItMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI7IH1cXG5cXG4ubS1iLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjsgfVxcblxcbi5tLWwtMiB7XFxuICBtYXJnaW4tbGVmdDogMjsgfVxcblxcbi5tLXgtMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI7XFxuICBtYXJnaW4tbGVmdDogMjsgfVxcblxcbi5tLXktMiB7XFxuICBtYXJnaW4tdG9wOiAyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjsgfVxcblxcbi5tLTQge1xcbiAgbWFyZ2luOiA0OyB9XFxuXFxuLm0tdC00IHtcXG4gIG1hcmdpbi10b3A6IDQ7IH1cXG5cXG4ubS1yLTQge1xcbiAgbWFyZ2luLXJpZ2h0OiA0OyB9XFxuXFxuLm0tYi00IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7IH1cXG5cXG4ubS1sLTQge1xcbiAgbWFyZ2luLWxlZnQ6IDQ7IH1cXG5cXG4ubS14LTQge1xcbiAgbWFyZ2luLXJpZ2h0OiA0O1xcbiAgbWFyZ2luLWxlZnQ6IDQ7IH1cXG5cXG4ubS15LTQge1xcbiAgbWFyZ2luLXRvcDogNDtcXG4gIG1hcmdpbi1ib3R0b206IDQ7IH1cXG5cXG4ubS01IHtcXG4gIG1hcmdpbjogNTsgfVxcblxcbi5tLXQtNSB7XFxuICBtYXJnaW4tdG9wOiA1OyB9XFxuXFxuLm0tci01IHtcXG4gIG1hcmdpbi1yaWdodDogNTsgfVxcblxcbi5tLWItNSB7XFxuICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLm0tbC01IHtcXG4gIG1hcmdpbi1sZWZ0OiA1OyB9XFxuXFxuLm0teC01IHtcXG4gIG1hcmdpbi1yaWdodDogNTtcXG4gIG1hcmdpbi1sZWZ0OiA1OyB9XFxuXFxuLm0teS01IHtcXG4gIG1hcmdpbi10b3A6IDU7XFxuICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLm0tOCB7XFxuICBtYXJnaW46IDg7IH1cXG5cXG4ubS10LTgge1xcbiAgbWFyZ2luLXRvcDogODsgfVxcblxcbi5tLXItOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDg7IH1cXG5cXG4ubS1iLTgge1xcbiAgbWFyZ2luLWJvdHRvbTogODsgfVxcblxcbi5tLWwtOCB7XFxuICBtYXJnaW4tbGVmdDogODsgfVxcblxcbi5tLXgtOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDg7XFxuICBtYXJnaW4tbGVmdDogODsgfVxcblxcbi5tLXktOCB7XFxuICBtYXJnaW4tdG9wOiA4O1xcbiAgbWFyZ2luLWJvdHRvbTogODsgfVxcblxcbi5tLTEwIHtcXG4gIG1hcmdpbjogMTA7IH1cXG5cXG4ubS10LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwOyB9XFxuXFxuLm0tci0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwOyB9XFxuXFxuLm0tYi0xMCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDsgfVxcblxcbi5tLWwtMTAge1xcbiAgbWFyZ2luLWxlZnQ6IDEwOyB9XFxuXFxuLm0teC0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwOyB9XFxuXFxuLm0teS0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tMTIge1xcbiAgbWFyZ2luOiAxMjsgfVxcblxcbi5tLXQtMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7IH1cXG5cXG4ubS1yLTEyIHtcXG4gIG1hcmdpbi1yaWdodDogMTI7IH1cXG5cXG4ubS1iLTEyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEyOyB9XFxuXFxuLm0tbC0xMiB7XFxuICBtYXJnaW4tbGVmdDogMTI7IH1cXG5cXG4ubS14LTEyIHtcXG4gIG1hcmdpbi1yaWdodDogMTI7XFxuICBtYXJnaW4tbGVmdDogMTI7IH1cXG5cXG4ubS15LTEyIHtcXG4gIG1hcmdpbi10b3A6IDEyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS0xNSB7XFxuICBtYXJnaW46IDE1OyB9XFxuXFxuLm0tdC0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTsgfVxcblxcbi5tLXItMTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTsgfVxcblxcbi5tLWItMTUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7IH1cXG5cXG4ubS1sLTE1IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNTsgfVxcblxcbi5tLXgtMTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gIG1hcmdpbi1sZWZ0OiAxNTsgfVxcblxcbi5tLXktMTUge1xcbiAgbWFyZ2luLXRvcDogMTU7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLTE2IHtcXG4gIG1hcmdpbjogMTY7IH1cXG5cXG4ubS10LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2OyB9XFxuXFxuLm0tci0xNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuXFxuLm0tYi0xNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNjsgfVxcblxcbi5tLWwtMTYge1xcbiAgbWFyZ2luLWxlZnQ6IDE2OyB9XFxuXFxuLm0teC0xNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgbWFyZ2luLWxlZnQ6IDE2OyB9XFxuXFxuLm0teS0xNiB7XFxuICBtYXJnaW4tdG9wOiAxNjtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tMjAge1xcbiAgbWFyZ2luOiAyMDsgfVxcblxcbi5tLXQtMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7IH1cXG5cXG4ubS1yLTIwIHtcXG4gIG1hcmdpbi1yaWdodDogMjA7IH1cXG5cXG4ubS1iLTIwIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwOyB9XFxuXFxuLm0tbC0yMCB7XFxuICBtYXJnaW4tbGVmdDogMjA7IH1cXG5cXG4ubS14LTIwIHtcXG4gIG1hcmdpbi1yaWdodDogMjA7XFxuICBtYXJnaW4tbGVmdDogMjA7IH1cXG5cXG4ubS15LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS0yNCB7XFxuICBtYXJnaW46IDI0OyB9XFxuXFxuLm0tdC0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDsgfVxcblxcbi5tLXItMjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNDsgfVxcblxcbi5tLWItMjQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4ubS1sLTI0IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNDsgfVxcblxcbi5tLXgtMjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNDtcXG4gIG1hcmdpbi1sZWZ0OiAyNDsgfVxcblxcbi5tLXktMjQge1xcbiAgbWFyZ2luLXRvcDogMjQ7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLTI1IHtcXG4gIG1hcmdpbjogMjU7IH1cXG5cXG4ubS10LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1OyB9XFxuXFxuLm0tci0yNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1OyB9XFxuXFxuLm0tYi0yNSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNTsgfVxcblxcbi5tLWwtMjUge1xcbiAgbWFyZ2luLWxlZnQ6IDI1OyB9XFxuXFxuLm0teC0yNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1O1xcbiAgbWFyZ2luLWxlZnQ6IDI1OyB9XFxuXFxuLm0teS0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNTtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tMjgge1xcbiAgbWFyZ2luOiAyODsgfVxcblxcbi5tLXQtMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7IH1cXG5cXG4ubS1yLTI4IHtcXG4gIG1hcmdpbi1yaWdodDogMjg7IH1cXG5cXG4ubS1iLTI4IHtcXG4gIG1hcmdpbi1ib3R0b206IDI4OyB9XFxuXFxuLm0tbC0yOCB7XFxuICBtYXJnaW4tbGVmdDogMjg7IH1cXG5cXG4ubS14LTI4IHtcXG4gIG1hcmdpbi1yaWdodDogMjg7XFxuICBtYXJnaW4tbGVmdDogMjg7IH1cXG5cXG4ubS15LTI4IHtcXG4gIG1hcmdpbi10b3A6IDI4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS0zMCB7XFxuICBtYXJnaW46IDMwOyB9XFxuXFxuLm0tdC0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDsgfVxcblxcbi5tLXItMzAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDsgfVxcblxcbi5tLWItMzAge1xcbiAgbWFyZ2luLWJvdHRvbTogMzA7IH1cXG5cXG4ubS1sLTMwIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMDsgfVxcblxcbi5tLXgtMzAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gIG1hcmdpbi1sZWZ0OiAzMDsgfVxcblxcbi5tLXktMzAge1xcbiAgbWFyZ2luLXRvcDogMzA7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5wLTAge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5wLXQtMCB7XFxuICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbi5wLXItMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuLnAtYi0wIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuXFxuLnAtbC0wIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLXgtMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteS0wIHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC0yIHtcXG4gIHBhZGRpbmc6IDI7IH1cXG5cXG4ucC10LTIge1xcbiAgcGFkZGluZy10b3A6IDI7IH1cXG5cXG4ucC1yLTIge1xcbiAgcGFkZGluZy1yaWdodDogMjsgfVxcblxcbi5wLWItMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjsgfVxcblxcbi5wLWwtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDI7IH1cXG5cXG4ucC14LTIge1xcbiAgcGFkZGluZy1yaWdodDogMjtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXktMiB7XFxuICBwYWRkaW5nLXRvcDogMjtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtNCB7XFxuICBwYWRkaW5nOiA0OyB9XFxuXFxuLnAtdC00IHtcXG4gIHBhZGRpbmctdG9wOiA0OyB9XFxuXFxuLnAtci00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ7IH1cXG5cXG4ucC1iLTQge1xcbiAgcGFkZGluZy1ib3R0b206IDQ7IH1cXG5cXG4ucC1sLTQge1xcbiAgcGFkZGluZy1sZWZ0OiA0OyB9XFxuXFxuLnAteC00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC15LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLTUge1xcbiAgcGFkZGluZzogNTsgfVxcblxcbi5wLXQtNSB7XFxuICBwYWRkaW5nLXRvcDogNTsgfVxcblxcbi5wLXItNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1OyB9XFxuXFxuLnAtYi01IHtcXG4gIHBhZGRpbmctYm90dG9tOiA1OyB9XFxuXFxuLnAtbC01IHtcXG4gIHBhZGRpbmctbGVmdDogNTsgfVxcblxcbi5wLXgtNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1O1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteS01IHtcXG4gIHBhZGRpbmctdG9wOiA1O1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC04IHtcXG4gIHBhZGRpbmc6IDg7IH1cXG5cXG4ucC10LTgge1xcbiAgcGFkZGluZy10b3A6IDg7IH1cXG5cXG4ucC1yLTgge1xcbiAgcGFkZGluZy1yaWdodDogODsgfVxcblxcbi5wLWItOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogODsgfVxcblxcbi5wLWwtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDg7IH1cXG5cXG4ucC14LTgge1xcbiAgcGFkZGluZy1yaWdodDogODtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXktOCB7XFxuICBwYWRkaW5nLXRvcDogODtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtMTAge1xcbiAgcGFkZGluZzogMTA7IH1cXG5cXG4ucC10LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDsgfVxcblxcbi5wLXItMTAge1xcbiAgcGFkZGluZy1yaWdodDogMTA7IH1cXG5cXG4ucC1iLTEwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLWwtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDsgfVxcblxcbi5wLXgtMTAge1xcbiAgcGFkZGluZy1yaWdodDogMTA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteS0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTA7IH1cXG5cXG4ucC0xMiB7XFxuICBwYWRkaW5nOiAxMjsgfVxcblxcbi5wLXQtMTIge1xcbiAgcGFkZGluZy10b3A6IDEyOyB9XFxuXFxuLnAtci0xMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMjsgfVxcblxcbi5wLWItMTIge1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtbC0xMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDEyOyB9XFxuXFxuLnAteC0xMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMjtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC15LTEyIHtcXG4gIHBhZGRpbmctdG9wOiAxMjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMjsgfVxcblxcbi5wLTE1IHtcXG4gIHBhZGRpbmc6IDE1OyB9XFxuXFxuLnAtdC0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7IH1cXG5cXG4ucC1yLTE1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1OyB9XFxuXFxuLnAtYi0xNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC1sLTE1IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4ucC14LTE1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1O1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXktMTUge1xcbiAgcGFkZGluZy10b3A6IDE1O1xcbiAgcGFkZGluZy1ib3R0b206IDE1OyB9XFxuXFxuLnAtMTYge1xcbiAgcGFkZGluZzogMTY7IH1cXG5cXG4ucC10LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjsgfVxcblxcbi5wLXItMTYge1xcbiAgcGFkZGluZy1yaWdodDogMTY7IH1cXG5cXG4ucC1iLTE2IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLWwtMTYge1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5wLXgtMTYge1xcbiAgcGFkZGluZy1yaWdodDogMTY7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteS0xNiB7XFxuICBwYWRkaW5nLXRvcDogMTY7XFxuICBwYWRkaW5nLWJvdHRvbTogMTY7IH1cXG5cXG4ucC0yMCB7XFxuICBwYWRkaW5nOiAyMDsgfVxcblxcbi5wLXQtMjAge1xcbiAgcGFkZGluZy10b3A6IDIwOyB9XFxuXFxuLnAtci0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMDsgfVxcblxcbi5wLWItMjAge1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtbC0yMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwOyB9XFxuXFxuLnAteC0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMDtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC15LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDsgfVxcblxcbi5wLTI0IHtcXG4gIHBhZGRpbmc6IDI0OyB9XFxuXFxuLnAtdC0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7IH1cXG5cXG4ucC1yLTI0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0OyB9XFxuXFxuLnAtYi0yNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC1sLTI0IHtcXG4gIHBhZGRpbmctbGVmdDogMjQ7IH1cXG5cXG4ucC14LTI0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0O1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXktMjQge1xcbiAgcGFkZGluZy10b3A6IDI0O1xcbiAgcGFkZGluZy1ib3R0b206IDI0OyB9XFxuXFxuLnAtMjUge1xcbiAgcGFkZGluZzogMjU7IH1cXG5cXG4ucC10LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTsgfVxcblxcbi5wLXItMjUge1xcbiAgcGFkZGluZy1yaWdodDogMjU7IH1cXG5cXG4ucC1iLTI1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLWwtMjUge1xcbiAgcGFkZGluZy1sZWZ0OiAyNTsgfVxcblxcbi5wLXgtMjUge1xcbiAgcGFkZGluZy1yaWdodDogMjU7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteS0yNSB7XFxuICBwYWRkaW5nLXRvcDogMjU7XFxuICBwYWRkaW5nLWJvdHRvbTogMjU7IH1cXG5cXG4ucC0yOCB7XFxuICBwYWRkaW5nOiAyODsgfVxcblxcbi5wLXQtMjgge1xcbiAgcGFkZGluZy10b3A6IDI4OyB9XFxuXFxuLnAtci0yOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyODsgfVxcblxcbi5wLWItMjgge1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtbC0yOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI4OyB9XFxuXFxuLnAteC0yOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyODtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC15LTI4IHtcXG4gIHBhZGRpbmctdG9wOiAyODtcXG4gIHBhZGRpbmctYm90dG9tOiAyODsgfVxcblxcbi5wLTMwIHtcXG4gIHBhZGRpbmc6IDMwOyB9XFxuXFxuLnAtdC0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7IH1cXG5cXG4ucC1yLTMwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwOyB9XFxuXFxuLnAtYi0zMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4ucC1sLTMwIHtcXG4gIHBhZGRpbmctbGVmdDogMzA7IH1cXG5cXG4ucC14LTMwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwO1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXktMzAge1xcbiAgcGFkZGluZy10b3A6IDMwO1xcbiAgcGFkZGluZy1ib3R0b206IDMwOyB9XFxuXFxuLyogRGl2aWRlcnMgKi9cXG4uaHItbGlnaHQge1xcbiAgaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmhyLWRhcmsge1xcbiAgaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLyogQWxpZ25tZW50ICovXFxuLnRleHQtbGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLnRleHQtcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtbG93ZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7IH1cXG5cXG4udGV4dC11cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi50ZXh0LWNhcGl0YWxpemUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG5cXG4uZm9udC13ZWlnaHQtbm9ybWFsIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uZm9udC13ZWlnaHQtYm9sZCB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5mb250LWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4vKipcXHJcXG4gKiBGb250IHNpemVcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC50LTEwe2ZvbnQtc2l6ZToxMH1cXHJcXG4gKiBGcm9tIDEwLCAxMiwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBcXHJcXG4qKi9cXG4udC0xMCB7XFxuICBmb250LXNpemU6IDEwOyB9XFxuXFxuLnQtMTIge1xcbiAgZm9udC1zaXplOiAxMjsgfVxcblxcbi50LTE0IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4udC0xNSB7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLnQtMTYge1xcbiAgZm9udC1zaXplOiAxNjsgfVxcblxcbi50LTE3IHtcXG4gIGZvbnQtc2l6ZTogMTc7IH1cXG5cXG4udC0xOCB7XFxuICBmb250LXNpemU6IDE4OyB9XFxuXFxuLnQtMTkge1xcbiAgZm9udC1zaXplOiAxOTsgfVxcblxcbi50LTIwIHtcXG4gIGZvbnQtc2l6ZTogMjA7IH1cXG5cXG4udC0yNSB7XFxuICBmb250LXNpemU6IDI1OyB9XFxuXFxuLnQtMzAge1xcbiAgZm9udC1zaXplOiAzMDsgfVxcblxcbi5pbWctcm91bmRlZCB7XFxuICBib3JkZXItcmFkaXVzOiA1OyB9XFxuXFxuLmltZy1jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogMjA7IH1cXG5cXG4uaW1nLXRodW1ibmFpbCB7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuXFxuLmludmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTsgfVxcblxcbi5wdWxsLWxlZnQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDsgfVxcblxcbi5wdWxsLXJpZ2h0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLm0teC1hdXRvIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5tLXktYXV0byB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtcHJpbWFyeSB7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi50ZXh0LWRhbmdlciB7XFxuICBjb2xvcjogI0VENDczRjsgfVxcblxcbi50ZXh0LW11dGVkIHtcXG4gIGNvbG9yOiAjOWU5ZTllOyB9XFxuXFxuLmJnLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmJnLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUQ0NzNGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYWN0aW9uLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5hY3Rpb24tYmFyIC5hY3Rpb24tYmFyLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTc7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5hY3Rpb24tYmFyIC5hY3Rpb24taXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgd2lkdGg6IDMwO1xcbiAgaGVpZ2h0OiAzMDsgfVxcblxcbi5idG4ge1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1pbi1oZWlnaHQ6IDM2O1xcbiAgbWluLXdpZHRoOiA2NDtcXG4gIHBhZGRpbmc6IDEwIDEwIDEwIDEwO1xcbiAgZm9udC1zaXplOiAxODtcXG4gIG1hcmdpbjogOCAxNiA4IDE2OyB9XFxuICAuYnRuLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkODBmZjsgfVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgYm9yZGVyLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MjZmZjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDcyNmZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWFxdWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWJsdWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1YWZlOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWJyb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1mb3Jlc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWdyZXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2ODdjOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWxlbW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWEwMDtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGltZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZWU0MDY7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLW9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTdjMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tcHVycGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxMzBmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ydWJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1za3kge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5idG4tb3V0bGluZS5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkODBmZjsgfVxcblxcbi5idG5baXNFbmFibGVkPWZhbHNlXSB7XFxuICBjb2xvcjogI2E0YTRhNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBib3JkZXItY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lLCBmb250YXdlc29tZS13ZWJmb250OyB9XFxuXFxuLmZvcm0gLmlucHV0IHtcXG4gIHBhZGRpbmc6IDE2IDggMTYgODtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAuZm9ybSAuaW5wdXQuaW5wdXQtYm9yZGVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI7XFxuICAgIHBhZGRpbmc6IDE2OyB9XFxuICAuZm9ybSAuaW5wdXQuaW5wdXQtcm91bmRlZCB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyODtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dFtpc0VuYWJsZWQ9J2ZhbHNlJ10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XFxuXFxuLmZvcm0gLmlucHV0LWZpZWxkIHtcXG4gIG1hcmdpbjogODsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTI7XFxuICAgIGNvbG9yOiAjYmFiYWJhOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmlucHV0IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwIDAgOCAwOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmhyLWxpZ2h0LmFjdGl2ZSxcXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItZGFyay5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQuaW5wdXQtc2lkZXMgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgbWFyZ2luOiAwIDAgOCAwOyB9XFxuXFxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XFxuICBtYXJnaW4tYm90dG9tOiA0O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLmJvZHksXFxuLmJvZHkyLFxcbi5mb290bm90ZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uaDEge1xcbiAgZm9udC1zaXplOiAzMjsgfVxcblxcbi5oMiB7XFxuICBmb250LXNpemU6IDIyOyB9XFxuXFxuLmgzIHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uaDQge1xcbiAgZm9udC1zaXplOiAxMjsgfVxcblxcbi5oNSB7XFxuICBmb250LXNpemU6IDExOyB9XFxuXFxuLmg2IHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4uYm9keSB7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLmJvZHkyIHtcXG4gIGZvbnQtc2l6ZTogMTc7IH1cXG5cXG4uZm9vdG5vdGUge1xcbiAgZm9udC1zaXplOiAxMzsgfVxcblxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBmb250LXNpemU6IDE2O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTY7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gTGFiZWwge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC50aHVtYiB7XFxuICAgIHN0cmV0Y2g6IGZpbGw7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XFxuICAgIGNvbG9yOiAjMDIyNzM0O1xcbiAgICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbi5wcm9ncmVzcyB7XFxuICBjb2xvcjogIzNBNTNGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uc2VnbWVudGVkLWJhciB7XFxuICBmb250LXNpemU6IDEzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQsIC5zaWRlZHJhd2VyLWNlbnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBoZWlnaHQ6IDE0ODtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgcGFkZGluZzogMTYgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgcGFkZGluZzogMjAgMTUgMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA2NDtcXG4gIHdpZHRoOiA2NDtcXG4gIGJvcmRlci1yYWRpdXM6IDMyO1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IDM2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDc0O1xcbiAgd2lkdGg6IDc0O1xcbiAgYm9yZGVyLXJhZGl1czogMzc7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBjb2xvcjogIzczNzM3MzsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gIGhlaWdodDogNDg7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcmllbnRhdGlvbjogaG9yaXpvbnRhbDsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gICAgd2lkdGg6IDI0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGhlaWdodDogNDg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUge1xcbiAgICBjb2xvcjogIzNBNTNGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODsgfVxcbiAgICAuc2lkZWRyYXdlci1saXN0LWl0ZW0uYWN0aXZlIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gICAgICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDE2IDAgMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDAgMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiAwLjE7XFxuICB3aWR0aDogODAlO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuICAuc2xpZGVyW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uc3dpdGNoW2NoZWNrZWQ9dHJ1ZV1baXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnRhYi12aWV3IHtcXG4gIC8qY29sb3I6ICRzZWNvbmRhcnk7Ki9cXG4gIHNlbGVjdGVkLWNvbG9yOiAjMzBiY2ZmO1xcbiAgdGFicy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAudGFiLXZpZXcgLnRhYi12aWV3LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4jbG9naW4tYmFja2dyb3VuZCB7XFxuICBtYXJnaW4tdG9wOiAtMjA7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXAge1xcbiAgcGFkZGluZzogMCA0MDsgfVxcblxcbi5sb2dvLXdyYXAge1xcbiAgbWFyZ2luOiA2MCAwIDEwIDA7XFxuICBwYWRkaW5nOiAyMCAwOyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuOTsgfVxcbiAgLmxvZ28td3JhcCAubG9naW4tbG9nby1zdWIge1xcbiAgICBjb2xvcjogIzIxMjEyMTtcXG4gICAgb3BhY2l0eTogLjg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5sb2dpbi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDM7IH1cXG4gIC5sb2dpbi13cmFwcGVyIFRleHRGaWVsZCB7XFxuICAgIHBhZGRpbmc6IDEwIDEwO1xcbiAgICBtYXJnaW46IDEwIDAgMCAwOyB9XFxuXFxuLmdvLWJhY2sge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4vKipcXHJcXG4gKiBJbXBvcnQgYWxsIHBsYXRmb3JtIHNwZWNpZmljIGZpbGVzIGhlcmVcXHJcXG4gKi9cXG4uYnRuIHtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGZvbnQtZmFtaWx5OiAnU0YgVUkgVGV4dCBNZWRpdW0nO1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5idG4tb3V0bGluZSB7XFxuICBib3JkZXItd2lkdGg6IDE7IH1cXG5cXG4uYnRuLXJvdW5kZWQtc20ge1xcbiAgYm9yZGVyLXJhZGl1czogNDsgfVxcblxcbi5idG4tcm91bmRlZC1sZyB7XFxuICBib3JkZXItcmFkaXVzOiAxOTsgfVxcblxcbi5mb3JtIHtcXG4gIGZvbnQtZmFtaWx5OiAnU0YgVUkgVGV4dCBSZWd1bGFyJzsgfVxcbiAgLmZvcm0gLmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNTsgfVxcbiAgICAuZm9ybSAuaW5wdXQuaW5wdXQtcm91bmRlZCB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjc7IH1cXG5cXG4vKiBUaGlzIGlzIGhlcmUgdGVtcG9yYXJpbHkgYmVjYXVzZSBfaW5kZXguaW9zLnNjc3MgY2Fubm90IGJlIGVtcHR5ICovXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogMzI7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIG1hcmdpbjogMTAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiwgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLnN3aXRjaCB7XFxuICBtYXJnaW46IDggMTU7IH1cXG5cXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIHtcXG4gIHBhZGRpbmc6IDE2IDE1IDE2IDE1OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC50aHVtYiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTU7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIG1hcmdpbjogMCAxNTtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLmZhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udEF3ZXNvbWVcXFwiOyB9XFxuXCIsIFwiXCJdKTtcblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5zY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9hcHAuc2Nzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgJ3JlYWN0LWhvdC1sb2FkZXInOyAvLyBNdXN0IGJlIGltcG9ydGVkIGJlZm9yZSBSZWFjdCBhbmQgUmVhY3ROYXRpdmVTY3JpcHQuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyogQ29udHJvbHMgcmVhY3QtbmF0aXZlc2NyaXB0IGxvZyB2ZXJib3NpdHkuIHRydWU6IGFsbCBsb2dzOyBmYWxzZTogb25seSBlcnJvciBsb2dzLiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCwgJ19fREVWX18nLCB7IHZhbHVlOiBmYWxzZSB9KTtcbmltcG9ydCAqIGFzIFJlYWN0TmF0aXZlU2NyaXB0IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBDb250YWluZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJvb3RSZWY6IFJlYWN0LlJlZk9iamVjdDxhbnk+ID0gUmVhY3QuY3JlYXRlUmVmPGFueT4oKTtcblxuUmVhY3ROYXRpdmVTY3JpcHQuc3RhcnQoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQXBwQ29udGFpbmVyLFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3J3YXJkZWRSZWY6IHJvb3RSZWZcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbFxuICAgICksXG4gICAgLyogVGhpcyByZWYgTVVTVCBtYXRjaCB0aGUgcmVmIHRoYXQgeW91IHBhc3MgaW50byB0aGUgYmFzZSBjb21wb25lbnQgb2YgeW91ciBhcHAgY29udGFpbmVyLiAqL1xuICAgIHJvb3RSZWZcbik7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxuKiovXFxuLmZhIHtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLmluZm8ge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblwiLCBcIlwiXSk7XG5cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IGhvdCB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXIvcm9vdCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7ICRQYWdlLCAkTGFiZWwsICRBY3Rpb25CYXIsICRHcmlkTGF5b3V0LCAkRm9ybWF0dGVkU3RyaW5nLCAkU3BhbiwgJFN3aXRjaCwgJEZyYW1lLCAkQnV0dG9uLCAkU3RhY2tMYXlvdXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBJdGVtU3BlYyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dC9ncmlkLWxheW91dCc7XG5pbXBvcnQgeyBGcmFtZSwgUGFnZSwgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcbmltcG9ydCB7IFJlYWN0aWZpZWQgfSBmcm9tICd+L1JlYWN0aWZpZWQvUmVhY3RpZmllZCc7XG5cbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbC9sYWJlbCc7XG5pbXBvcnQgeyBfTGFiZWwgYXMgTGFiZWxDb21wb25lbnQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY29tcG9uZW50cy9MYWJlbFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b24vYnV0dG9uJztcbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uL2J1dHRvbic7XG5cbmNsYXNzIE15RmFuY3lCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuXG59XG5cbmNvbnN0IE15QnV0dG9uID0gUmVhY3RpZmllZChuZXcgQnV0dG9uKCksIFwiYnV0dG9uXCIpO1xuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgZm9yd2FyZGVkUmVmOiBSZWFjdC5SZWZPYmplY3Q8RnJhbWU+LFxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuXG59XG5cbmNsYXNzIEFwcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhZ2VSZWY6IFJlYWN0LlJlZk9iamVjdDxQYWdlPiA9IFJlYWN0LmNyZWF0ZVJlZjxQYWdlPigpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbXlGYW5jeUJ1dHRvblJlZjogUmVhY3QuUmVmT2JqZWN0PE15RmFuY3lCdXR0b24+ID0gUmVhY3QuY3JlYXRlUmVmPE15RmFuY3lCdXR0b24+KCk7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgY29uc3QgZnJhbWU6IEZyYW1lID0gdGhpcy5wcm9wcy5mb3J3YXJkZWRSZWYuY3VycmVudCE7XG4gICAgICAgIGZyYW1lLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSB0aGlzLnBhZ2VSZWYuY3VycmVudCE7XG4gICAgICAgICAgICAgICAgcGFnZS5hZGRDc3NGaWxlKFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCIpOyAvLyBQYXRoIGlzIHJlbGF0aXZlIHRvIHRoZSAnYXBwJyBmb2xkZXI7IG5vdCByZWxhdGl2ZSB0byB0aGlzIGZpbGUhXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG15RmFuY3lCdXR0b24gPSB0aGlzLm15RmFuY3lCdXR0b25SZWYuY3VycmVudDtcbiAgICAgICAgICAgIG15RmFuY3lCdXR0b24uYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKFwic2lsdmVyXCIpO1xuICAgICAgICAgICAgbXlGYW5jeUJ1dHRvbi5vbihcInRhcFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcFwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sMjAwMClcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgeyBmb3J3YXJkZWRSZWYgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDwkRnJhbWUgcmVmPXtmb3J3YXJkZWRSZWZ9PlxuICAgICAgICAgICAgICAgIDwkUGFnZSByZWY9e3RoaXMucGFnZVJlZn0gY2xhc3NOYW1lPVwicGFnZVwiIGFjdGlvbkJhckhpZGRlbj17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8JFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8TXlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRlZFJlZj17dGhpcy5teUZhbmN5QnV0dG9uUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtuZXcgQ29sb3IoXCJncmVlblwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8TXlCdXR0b24gYmFja2dyb3VuZENvbG9yPXtuZXcgQ29sb3IoXCJvcmFuZ2VcIil9IHdpZHRoPXsxMDB9IGhlaWdodD17MjB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8JEJ1dHRvbiB0ZXh0PXtcInRlc3RcIn0gb25UYXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvJFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvJFBhZ2U+XG4gICAgICAgICAgICA8LyRGcmFtZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG4vLyBleHBvcnQgZGVmYXVsdCBBcHBDb250YWluZXI7XG5leHBvcnQgZGVmYXVsdCBob3QoQXBwQ29udGFpbmVyKTsgLy8gUmVwbGFjZSB0aGlzIGxpbmUgd2l0aCB0aGUgYWJvdmUgbGluZSBpZiB5b3Ugd2FudCB0byByZW1vdmUgaG90IGxvYWRpbmcuIl0sInNvdXJjZVJvb3QiOiIifQ==