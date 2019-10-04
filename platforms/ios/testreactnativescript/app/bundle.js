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
  instance.updateListenersHelper(true);
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
  instance.updateListenersHelper(false);
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

/*
export const tryCast = <T extends Observable>(instance: Reactify<T>) => {
    if((instance.props) as Props<T>) {
        console.log("Was instance");
        return instance;
    }
    console.log("Was not instance");
    return null;
}
*/
// https://stackoverflow.com/questions/17392349/how-can-i-check-if-element-is-an-instanceof-u

/*
export function tryCast<T>(instance: any) {
    if(instance instanceof T) {
        console.log("was");
        return instance;
    }
    console.log("was not");
    return null;
}
*/
// https://stackoverflow.com/questions/23533374/compare-types-in-generic-function-using-typescript
// helper method to be able to cast Reactify<Observable> to Reactify<View>  etc

/* never got his to work*/
var tryCast = function (instance) {
  return instance;
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
/*
export const observableImpl = <T extends Observable>(instance: React.Component<T & ExtraProps<T>>, attach: boolean | null, nextProps?: P) => {
    
}
*/
var updateListenersHelperImpl = function (instance, attach, nextProps) {
  observableImpl(instance, attach, nextProps);
};

var observableImpl = function (instance, attach, nextProps) {
  var node = instance.getCurrentRef();

  if (node === null) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  instance.updateListeners(node, attach, nextProps);
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
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");




var updateListenersImpl = function (instance, node, attach, nextProps) {
  /* implementation for any rns component here - or on reactify class body*/
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["executeInOrder"])([pageImpl, viewImpl, observableImpl, actionItemImpl], instance, node, attach);
};

var observableImpl = function (instance, node, attach, nextProps) {
  if (Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(instance)) {
    console.log("observableImpl");

    if (attach === null) {
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "propertyChange", instance.props.onPropertyChange, nextProps.onPropertyChange);
    } else {
      var method = (attach ? node.on : node.off).bind(node);
      if (instance.props.onPropertyChange) method("propertyChange", instance.props.onPropertyChange);
    }
  }
}; // https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/View.ts


var viewImpl = function (instance, node, attach, nextProps) {
  if (Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(instance)) {
    console.log("viewImpl");

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
  }
};

var actionItemImpl = function (instance, node, attach, nextProps) {
  // console.log("actionItem try cast: " + instance as ActionItem);
  if (Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(instance)) {
    console.log("actionItemImpl");

    if (attach === null) {
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "tap", instance.props.onTap, nextProps.onTap);
    } else {
      var method = (attach ? node.on : node.off).bind(node);
      if (instance.props.onTap) method("tap", instance.props.onTap);
    }
  }
};

var pageImpl = function (instance, node, attach, nextProps) {
  if (Object(_Types__WEBPACK_IMPORTED_MODULE_2__["tryCast"])(instance)) {
    console.log("pageImpl");

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
/* harmony import */ var _Implementation_updateListenersImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./Reactified/Implementation/updateListenersImpl.ts");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Implementation_updateListenersHelperImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./Reactified/Implementation/updateListenersHelperImpl.ts");
/* harmony import */ var _Implementation_getCurrentRefImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./Reactified/Implementation/getCurrentRefImpl.ts");
/* harmony import */ var _Implementation_React_componentDidMountImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./Reactified/Implementation/React/componentDidMountImpl.ts");
/* harmony import */ var _Implementation_React_componentWillUnmountImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./Reactified/Implementation/React/componentWillUnmountImpl.ts");
/* harmony import */ var _Implementation_React_shouldComponentUpdateImpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./Reactified/Implementation/React/shouldComponentUpdateImpl.ts");
/* harmony import */ var _Implementation_Helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");









function Reactified(observable, name) {
  var _a;

  if (!name) {
    name = Object(_Implementation_Helpers__WEBPACK_IMPORTED_MODULE_8__["firstLetterLowercase"])(Object(_Implementation_Helpers__WEBPACK_IMPORTED_MODULE_8__["nameOf"])(observable));
  }

  console.log("registering " + name);
  Object(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_2__["register"])(name, function () {
    return observable;
  }); // const WithObservableImpl = observableImpl(Reactify);

  return _a =
  /** @class */
  function (_super) {
    __extends(Reactify, _super);

    function Reactify() {
      var _this = _super !== null && _super.apply(this, arguments) || this; // static defaultProps = {... observable } 

      /*
      constructor(props: T & ExtraProps<T>) {
          super(props);
          Reactify.countOfInstances ++;
          console.log("constructing instance " + Reactify.countOfInstances);
      }
      */


      _this.myNativeScriptType = observable;
      _this.myRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
      return _this;
    }

    ;

    Reactify.prototype.getCurrentRef = function () {
      return Object(_Implementation_getCurrentRefImpl__WEBPACK_IMPORTED_MODULE_4__["getCurrentRefImpl"])(this);
    };
    /**
    * Helper method for updateListeners: simply gets the current ref to pass on to it.
    * @param attach true: attach; false: detach; null: update
    */


    Reactify.prototype.updateListenersHelper = function (attach, nextProps) {
      Object(_Implementation_updateListenersHelperImpl__WEBPACK_IMPORTED_MODULE_3__["updateListenersHelperImpl"])(this, attach, nextProps);
    };
    /**
    *
    * @param attach true: attach; false: detach; null: update
    */


    Reactify.prototype.updateListeners = function (node, attach, nextProps) {
      Object(_Implementation_updateListenersImpl__WEBPACK_IMPORTED_MODULE_1__["updateListenersImpl"])(this, node, attach, nextProps);
    };

    Reactify.prototype.componentDidMount = function () {
      Object(_Implementation_React_componentDidMountImpl__WEBPACK_IMPORTED_MODULE_5__["componentDidMountImpl"])(this);
    };
    /**
    * PureComponent's shouldComponentUpdate() method is ignored and replaced with a shallowEqual()
    * comparison of props and state. We'll implement our Component's shouldComponentUpdate() to
    * match the way PureComponent is handled.
    */


    Reactify.prototype.shouldComponentUpdate = function (nextProps, nextState) {
      return Object(_Implementation_React_shouldComponentUpdateImpl__WEBPACK_IMPORTED_MODULE_7__["shouldComponentUpdateImpl"])(this, nextState, nextState);
    };

    Reactify.prototype.componentWillUnmount = function () {
      Object(_Implementation_React_componentWillUnmountImpl__WEBPACK_IMPORTED_MODULE_6__["componentWillUnmountImpl"])(this);
    };

    Reactify.prototype.render = function () {
      var _a = this.props,
          forwardedRef = _a.forwardedRef,
          children = _a.children,
          rest = __rest(_a, ["forwardedRef", "children"]);

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({}, rest, {
        ref: forwardedRef || this.myRef
      }), children);
    };

    return Reactify;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _a.countOfInstances = 0, _a;
} // have to declare class name to make decorators work  // https://github.com/microsoft/TypeScript/issues/7342
// React.Component<T & ExtraProps<T>

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
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Reactified_Reactified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./Reactified/Reactified.ts");







var MyFancyButton =
/** @class */
function (_super) {
  __extends(MyFancyButton, _super);

  function MyFancyButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return MyFancyButton;
}(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__["Button"]);

var MyButton = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_5__["Reactified"])(new MyFancyButton(), "button");
var bb = new MyButton(null);

var AppContainer =
/** @class */
function (_super) {
  __extends(AppContainer, _super);

  function AppContainer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.pageRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    return _this;
  } // private readonly myButtonRef = React.createRef<Button>();


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
      backgroundColor: new tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_3__["Color"]("green"),
      height: 300,
      width: 50
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyButton, {
      backgroundColor: new tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_3__["Color"]("green"),
      height: 300,
      width: 50
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$Button"], {
      text: "test",
      onTap: function () {
        console.log("tap");
      }
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$FormattedString"], null)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudERpZE1vdW50SW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudFdpbGxVbm1vdW50SW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L3Nob3VsZENvbXBvbmVudFVwZGF0ZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNB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LGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEs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QUUsR0FBOUM7QUFBbUQsV0FBSyxFQUFFO0FBQTFELEtBQVQsQ0FEQSxFQUVBLG9EQUFDLFFBQUQsRUFBUztBQUFDLHFCQUFlLEVBQUUsSUFBSSxxRUFBSixDQUFVLE9BQVYsQ0FBbEI7QUFBc0MsWUFBTSxFQUFFLEdBQTlDO0FBQW1ELFdBQUssRUFBRTtBQUExRCxLQUFULENBRkEsRUFJSSxvREFBQywwREFBRCxFQUFRO0FBQUMsVUFBSSxFQUFFLE1BQVA7QUFBZSxXQUFLLEVBQUU7QUFDMUIsZUFBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0g7QUFGTyxLQUFSLEVBSUksb0RBQUMsbUVBQUQsRUFBaUIsSUFBakIsQ0FKSixDQUpKLENBSEosQ0FESixDQURKO0FBbUJILEdBdEJEOztBQXVCSjtBQUFDLENBMUNELENBQTJCLCtDQUEzQixFLENBMkNBOzs7QUFDZSxnSUFBRyxDQUFDLFlBQUQsQ0FBbEIsRSxDQUFrQywyRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL1JlYWN0aWZpZWQvRXh0cmFQcm9wcy50c1wiOiBcIi4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0hlbHBlcnMudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vSGVscGVycy50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnREaWRNb3VudEltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50RGlkTW91bnRJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudFdpbGxVbm1vdW50SW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnRXaWxsVW5tb3VudEltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3Qvc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9zaG91bGRDb21wb25lbnRVcGRhdGVJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0hlbHBlckltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi91cGRhdGVMaXN0ZW5lcnNJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvUmVhY3RpZmllZC50c1wiOiBcIi4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzXCIsXG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwLnRzXCIsXG5cdFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCI6IFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIlxuaW1wb3J0IHsgRXZlbnREYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgRG9jayB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZG9jay1sYXlvdXQvZG9jay1sYXlvdXRcIjtcbmltcG9ydCB7IFNob3duTW9kYWxseURhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldy92aWV3XCI7XG5pbXBvcnQge1xuICAgIEdlc3R1cmVFdmVudERhdGEsXG4gICAgR2VzdHVyZVR5cGVzLFxuICAgIFRvdWNoR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBTd2lwZUdlc3R1cmVFdmVudERhdGEsXG4gICAgUm90YXRpb25HZXN0dXJlRXZlbnREYXRhLFxuICAgIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBQYW5HZXN0dXJlRXZlbnREYXRhLFxufSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlc1wiO1xuXG5pbXBvcnQge09ic2VydmFibGUsIFZpZXdCYXNlLCBWaWV3LCBQYWdlLCBBY3Rpb25JdGVtfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuXG5pbXBvcnQgeyBQYWdlTmF2aWdhdGlvbkV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaC9zd2l0Y2hcIjtcblxuXG5leHBvcnQgdHlwZSBFeHRyYVByb3BzPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiA9IE9ic2VydmFibGVQcm9wczxUPiAmIFZpZXdCYXNlUHJvcHM8VD4gJiBWaWV3UHJvcHM8VD4gJiBQYWdlUHJvcHM8VD4gJiBBY3Rpb25JdGVtUHJvcHM8VD47XG5cbi8vIHVzaW5nIGNvbmRpdGlvbmFsIHNvIHRoYXQgUk5TQnV0dG9uIGRvbid0IGdldCBuYXZpZ2F0ZWRUbyAoUGFnZVByb3BzKSBcblxuXG4vKiBcbiBTaG91bGQgZ2V0IE9ic2VydmFibGVQcm9wc1xuIHdpdGggZ2V0dGVyL29uZGl0aW9uYWwgdHlwaW5nIC0gc2luY2UgdGhlIG5zIGNvbXBvbmVudFxuIG11c3QgYmUgb2YgdHlwZSBPYnNlcnZhYmxlLiB1c2luZyBiZWxvdyBjb25pZHRpb25hbCB0eXBlXG4gYWxzbyBjYXVzZSBhbiB0eXBlIGVycm9yIGluIGdldEN1cnJlbnRSZWZJbXBsXG4gKi9cbi8vIHR5cGUgT2JzZXJ2YWJsZVByb3BzPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiA9IFQgZXh0ZW5kcyBPYnNlcnZhYmxlID8gSU9ic2VydmFibGU8VD4gOiBFbXB0eVxuXG5pbnRlcmZhY2UgT2JzZXJ2YWJsZVByb3BzPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiB7XG4gICAgZWxlbWVudEtleT86IHN0cmluZyAvLyBhZGRlZFxuICAgIGZvcndhcmRlZFJlZj86IFJlYWN0LlJlZk9iamVjdDxUPjtcbiAgICBvblByb3BlcnR5Q2hhbmdlPzogKGRhdGE6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbn1cblxuLyogcmVzdCBpcyB1c2luZyBjb25kaXRpb25hbCB0eXBlIFwiZ2V0dGVyc1wiIHNvIHRoYXQgYnV0dG9uIGRvbid0IGFjY2VzcyBnZXQgcGFnZSdzIHByb3BzIGV0YyovXG5cbnR5cGUgVmlld0Jhc2VQcm9wczxUPiA9IFQgZXh0ZW5kcyBWaWV3QmFzZSA/IElWaWV3QmFzZSA6IEVtcHR5XG5pbnRlcmZhY2UgSVZpZXdCYXNlIHtcbiAgICBfX3Juc19fbm9kZVRyZWVSb2xlPzogc3RyaW5nO1xuICAgIGRvY2s/OiBEb2NrO1xufVxuXG50eXBlIFZpZXdQcm9wczxUPiA9IFQgZXh0ZW5kcyBWaWV3ID8gSVZpZXcgOiBFbXB0eTtcbmludGVyZmFjZSBJVmlldyB7XG4gICAgLyogRnJvbSBWaWV3LiAqL1xuICAgIG9uTG9hZGVkPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblVubG9hZGVkPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvbkFuZHJvaWRCYWNrUHJlc3NlZD86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25TaG93aW5nTW9kYWxseT86IChhcmdzOiBTaG93bk1vZGFsbHlEYXRhKSA9PiB2b2lkO1xuICAgIG9uU2hvd25Nb2RhbGx5PzogKGFyZ3M6IFNob3duTW9kYWxseURhdGEpID0+IHZvaWQ7XG5cbiAgICAvKiBUaGUgZ2VzdHVyZSBoYW5kbGVycy4gKi9cbiAgICBvblRhcD86IChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uRG91YmxlVGFwPzogKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25QaW5jaD86IChhcmdzOiBQaW5jaEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25QYW4/OiAoYXJnczogUGFuR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblN3aXBlPzogKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblJvdGF0aW9uPzogKGFyZ3M6IFJvdGF0aW9uR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvbkxvbmdQcmVzcz86IChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uVG91Y2g/OiAoYXJnczogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuXG4gICAgLyogVGhlc2UgYXJlIHRvIGJlIG92ZXJyaWRkZW4gaW4gc3ViY2xhc3NlcyBvZiBWaWV3LCBzbyB1bmxpa2VseSB0byBiZSBhcHByb3ByaWF0ZS4gKi9cbiAgICAvLyBvbkxheW91dD86IChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlcikgPT4gdm9pZDtcbiAgICAvLyBvbk1lYXN1cmU/OiAod2lkdGhNZWFzdXJlU3BlYzogbnVtYmVyLCBoZWlnaHRNZWFzdXJlU3BlYzogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG50eXBlIFBhZ2VQcm9wczxUPiA9IFQgZXh0ZW5kcyBQYWdlID8gSVBhZ2UgOiBFbXB0eVxuaW50ZXJmYWNlIElQYWdlIHtcbiAgICBvbk5hdmlnYXRpbmdUbz86IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyO1xuICAgIG9uTmF2aWdhdGVkVG8/OiBQYWdlTmF2aWdhdGlvbkV2ZW50SGFuZGxlcjtcbiAgICBvbk5hdmlnYXRpbmdGcm9tPzogUGFnZU5hdmlnYXRpb25FdmVudEhhbmRsZXI7XG4gICAgb25OYXZpZ2F0ZWRGcm9tPzogUGFnZU5hdmlnYXRpb25FdmVudEhhbmRsZXI7XG59XG5cbnR5cGUgQWN0aW9uSXRlbVByb3BzPFQ+ID0gVCBleHRlbmRzIEFjdGlvbkl0ZW0gPyBJQWN0aW9uSXRlbSA6IEVtcHR5XG5pbnRlcmZhY2UgSUFjdGlvbkl0ZW0ge1xuICAgIG9uVGFwPzogKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG59XG5cbi8qIGNvdWxkIGJlIHVzZWQgc2V0IHByb3BzIGZvciBldmVyeSBzdGluZ2xlIFJOUyBDb21wb25lbnQqL1xuaW50ZXJmYWNlIEVtcHR5IHtcblxufVxuXG4vLyBpbnNpZGUgaHR0cHM6Ly9naXRodWIuY29tL3NoaXJha2FiYS9yZWFjdC1uYXRpdmVzY3JpcHQvYmxvYi9tYXN0ZXIvcmVhY3QtbmF0aXZlc2NyaXB0L3NyYy9jb21wb25lbnRzL1N3aXRjaC50c1xuLy8gY2FuIGxpc3RlbmVyIGJlIGF0dGFjaGVkIHRvIHRoaXM6UFJPUFMub25Ub2dnbGUgPyIsIlxuXG5pbXBvcnQgeyBcbiAgICBlbGVtZW50TWFwLFxuICAgIEFic29sdXRlTGF5b3V0LFxuICAgIEFjdGlvbkJhcixcbiAgICBBY3Rpb25JdGVtLFxuICAgIEFjdGl2aXR5SW5kaWNhdG9yLFxuICAgIEFuaW1hdGlvbixcbiAgICBPYnNlcnZhYmxlXG59ZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZU9mKG9iamVjdDogT2JqZWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gb2JqZWN0LmNvbnN0cnVjdG9yLm5hbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMZXR0ZXJMb3dlcmNhc2UobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xufVxuXG5jb25zdCBpbXBsTWV0aG9kUmVnaXN0cnk6IHN0cmluZ1tdID0gW107IFxuY29uc29sZS5sb2coXCJhbGwgZWxlbWVudHMgaW4gZWxlbWVudCByZWdpc3RyeVwiKVxuZm9yKGxldCBlbGVtZW50TmFtZSBpbiBlbGVtZW50TWFwKSB7XG4gICAgaW1wbE1ldGhvZFJlZ2lzdHJ5LnB1c2goZWxlbWVudE5hbWUgKyBcIkltcGxcIik7XG59XG5cbnR5cGUgSW1wbE1ldGhvZCA9ICguLi5hcmdzOiBhbnkpID0+IGFueVxuZXhwb3J0IGNvbnN0IGV4ZWN1dGVJbk9yZGVyID0gKGltcGxNZXRob2RzOiBJbXBsTWV0aG9kW10sIC4uLmFyZ3M6IGFueSkgPT4geyBcbiAgICBsZXQgcmV0dXJuVmFsdWUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgbGV0IHJ1biA9IHVuZGVmaW5lZDtcblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwib2JzZXJ2YWJsZUltcGxcIik7XG4gICAgaWYocnVuKSB7IFxuICAgICAgICByZXR1cm5WYWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwidmlld0Jhc2VJbXBsXCIpOyAvLyBleHRlbmRzIE9ic2VydmFibGUuLi5cbiAgICBcbiAgICBpZihydW4pIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwidmlld0ltcGxcIik7IC8vIGV4dGVuZHMgVmlld0Jhc2UuLi5cbiAgICBpZihydW4pIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiYWN0aW9uSXRlbUltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJwYWdlSW1wbFwiKSAvLyBleHRlbmRzIFZpZXcuLi5cbiAgICBpZihydW4pIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5cbmNvbnN0IGhpZXJhcmNoeU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBcIkFic29sdXRlTGF5b3V0XCIgOiBcIkxheW91dEJhc2VcIixcbiAgICBcIkFjdGlvbkJhclwiIDogXCJWaWV3XCIsXG4gICAgXCJBY3Rpb25JdGVtXCIgOiBcIlZpZXdCYXNlXCIsXG4gICAgXCJBY3Rpdml0eUluZGljYXRvclwiIDogXCJWaWV3QmFzZVwiLFxufTsiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnREaWRNb3VudEltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIG9ic2VydmFibGVJbXBsKGluc3RhbmNlKTtcbn1cblxuY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIGluc3RhbmNlLnVwZGF0ZUxpc3RlbmVyc0hlbHBlcih0cnVlKTtcbn1cbi8qXG5jb25zdCB2aWV3QmFzZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdC5Db21wb25lbnQ8VCAmIEV4dHJhUHJvcHM8VD4+KSA9PiB7XG4gICAgLy8gbm9uZVxufVxuKi9cbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcblxuXG5leHBvcnQgY29uc3QgY29tcG9uZW50V2lsbFVubW91bnRJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBvYnNlcnZhYmxlSW1wbChpbnN0YW5jZSk7XG59XG5cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBpbnN0YW5jZS51cGRhdGVMaXN0ZW5lcnNIZWxwZXIoZmFsc2UpO1xufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwifi9SZWFjdGlmaWVkL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IHNoYWxsb3dFcXVhbCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvc2hhbGxvd0VxdWFsXCI7XG5cblxuZXhwb3J0IGNvbnN0IHNob3VsZENvbXBvbmVudFVwZGF0ZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbmV4dFByb3BzOiBUICYgRXh0cmFQcm9wczxUPiwgbmV4dFN0YXRlOiBhbnkpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZUltcGwoaW5zdGFuY2UsIG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbn1cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5leHRQcm9wczogVCAmIEV4dHJhUHJvcHM8VD4sIG5leHRTdGF0ZTogYW55KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYE9ic2VydmFibGUncyBzaG91bGRDb21wb25lbnRVcGRhdGVgKTtcbiAgICBjb25zdCBzaG91bGRVcGRhdGU6IGJvb2xlYW4gPSAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBbc2hvdWxkQ29tcG9uZW50VXBkYXRlXSBzaG91bGRVcGRhdGU6ICR7c2hvdWxkVXBkYXRlfS5gKTtcblxuICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzSGVscGVyKG51bGwsIG5leHRQcm9wcyk7XG5cbiAgICAvLyBodHRwczovL2x1Y3liYWluLmNvbS9ibG9nLzIwMTgvcmVhY3QtanMtcHVyZS1jb21wb25lbnQvXG4gICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBWaWV3QmFzZSwgVmlldywgUGFnZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IHNoYWxsb3dFcXVhbCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvc2hhbGxvd0VxdWFsXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50UmVmSW1wbCB9IGZyb20gXCIuL2dldEN1cnJlbnRSZWZJbXBsXCI7XG5cbmV4cG9ydCB0eXBlIFJlYWN0aWZ5PFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiA9IFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPiwgYW55PjtcblxuZXhwb3J0IHR5cGUgUHJvcHM8VCBleHRlbmRzIE9ic2VydmFibGU+ID0gVCAmIEV4dHJhUHJvcHM8VD47XG5cblxuLypcbmV4cG9ydCB0eXBlIE9ic2VydmFibGU8VD4gPSBUIGV4dGVuZHMgT2JzZXJ2YWJsZSA/IFJlYWN0aWZ5PE9ic2VydmFibGU+IDogRW1wdHlcblxuZXhwb3J0IHR5cGUgVmlld0Jhc2U8VD4gPSBUIGV4dGVuZHMgVmlld0Jhc2UgPyBSZWFjdGlmeTxWaWV3QmFzZT4gOiBFbXB0eTtcblxuZXhwb3J0IHR5cGUgVmlldzxUPiA9IFQgZXh0ZW5kcyBWaWV3ID8gUmVhY3RpZnk8Vmlldz4gOiBFbXB0eTtcblxuaW50ZXJmYWNlIEVtcHR5IHtcblxufVxuKi9cbi8qXG5leHBvcnQgY29uc3QgdHJ5Q2FzdCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgaWYoKGluc3RhbmNlLnByb3BzKSBhcyBQcm9wczxUPikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIldhcyBpbnN0YW5jZVwiKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIldhcyBub3QgaW5zdGFuY2VcIik7XG4gICAgcmV0dXJuIG51bGw7XG59XG4qL1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTczOTIzNDkvaG93LWNhbi1pLWNoZWNrLWlmLWVsZW1lbnQtaXMtYW4taW5zdGFuY2VvZi11XG4vKlxuZXhwb3J0IGZ1bmN0aW9uIHRyeUNhc3Q8VD4oaW5zdGFuY2U6IGFueSkge1xuICAgIGlmKGluc3RhbmNlIGluc3RhbmNlb2YgVCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndhc1wiKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIndhcyBub3RcIik7XG4gICAgcmV0dXJuIG51bGw7XG59XG4qL1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzUzMzM3NC9jb21wYXJlLXR5cGVzLWluLWdlbmVyaWMtZnVuY3Rpb24tdXNpbmctdHlwZXNjcmlwdFxuLy8gaGVscGVyIG1ldGhvZCB0byBiZSBhYmxlIHRvIGNhc3QgUmVhY3RpZnk8T2JzZXJ2YWJsZT4gdG8gUmVhY3RpZnk8Vmlldz4gIGV0Y1xuXG4vKiBuZXZlciBnb3QgaGlzIHRvIHdvcmsqL1xuZXhwb3J0IGNvbnN0IHRyeUNhc3QgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBhbnkpID0+IHtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAgXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG4vLyBpbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuL1R5cGVzXCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRSZWZJbXBsIDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KTogVCB8IG51bGwge1xuICAgIHJldHVybiAoaW5zdGFuY2UucHJvcHMuZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpKS5jdXJyZW50O1xufVxuXG5cblxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IEV4dHJhcyB9IGZyb20gXCIuLi9FeHRyYXNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuLypcbmV4cG9ydCBjb25zdCBvYnNlcnZhYmxlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPj4sIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFApID0+IHtcbiAgICBcbn1cbiovXG5leHBvcnQgY29uc3QgdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIG9ic2VydmFibGVJbXBsKGluc3RhbmNlLCBhdHRhY2gsIG5leHRQcm9wcyk7XG59XG5cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBpbnN0YW5jZS5nZXRDdXJyZW50UmVmKCk7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZS51cGRhdGVMaXN0ZW5lcnMobm9kZSwgYXR0YWNoLCBuZXh0UHJvcHMpO1xufSIsIlxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIFZpZXcsIFBhZ2UsIEFjdGlvbkl0ZW0gfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuXG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IHVwZGF0ZUxpc3RlbmVyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FdmVudEhhbmRsaW5nXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnksIFByb3BzLCB0cnlDYXN0fSBmcm9tIFwiLi9UeXBlc1wiXG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuL0hlbHBlcnNcIjtcbmltcG9ydCB7IEluc3RhbmNlLCBUZXh0SW5zdGFuY2UgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3Qvc2hhcmVkL0hvc3RDb25maWdUeXBlc1wiO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGlzdGVuZXJzSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+ICxub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBQcm9wczxUPikgPT4ge1xuICAgIFxuICAgIC8qIGltcGxlbWVudGF0aW9uIGZvciBhbnkgcm5zIGNvbXBvbmVudCBoZXJlIC0gb3Igb24gcmVhY3RpZnkgY2xhc3MgYm9keSovXG4gICAgZXhlY3V0ZUluT3JkZXIoW3BhZ2VJbXBsLCB2aWV3SW1wbCwgb2JzZXJ2YWJsZUltcGwsIGFjdGlvbkl0ZW1JbXBsXSwgaW5zdGFuY2UsIG5vZGUsIGF0dGFjaCk7XG59XG5cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8T2JzZXJ2YWJsZT4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgaWYodHJ5Q2FzdChpbnN0YW5jZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvYnNlcnZhYmxlSW1wbFwiKTtcbiAgICAgICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJwcm9wZXJ0eUNoYW5nZVwiLCBpbnN0YW5jZS5wcm9wcy5vblByb3BlcnR5Q2hhbmdlLCBuZXh0UHJvcHMub25Qcm9wZXJ0eUNoYW5nZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uUHJvcGVydHlDaGFuZ2UpIG1ldGhvZChcInByb3BlcnR5Q2hhbmdlXCIsIGluc3RhbmNlLnByb3BzLm9uUHJvcGVydHlDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2hpcmFrYWJhL3JlYWN0LW5hdGl2ZXNjcmlwdC9ibG9iL21hc3Rlci9yZWFjdC1uYXRpdmVzY3JpcHQvc3JjL2NvbXBvbmVudHMvVmlldy50c1xuY29uc3Qgdmlld0ltcGwgPSA8VCBleHRlbmRzIFZpZXc+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBpZih0cnlDYXN0PFZpZXc+KGluc3RhbmNlKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInZpZXdJbXBsXCIpO1xuICAgICAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcImxvYWRlZFwiLCBpbnN0YW5jZS5wcm9wcy5vbkxvYWRlZCwgbmV4dFByb3BzLm9uTG9hZGVkKTtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwidW5sb2FkZWRcIiwgaW5zdGFuY2UucHJvcHMub25VbmxvYWRlZCwgbmV4dFByb3BzLm9uVW5sb2FkZWQpO1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJhbmRyb2lkQmFja1ByZXNzZWRcIiwgaW5zdGFuY2UucHJvcHMub25BbmRyb2lkQmFja1ByZXNzZWQsIG5leHRQcm9wcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCk7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInNob3dpbmdNb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd2luZ01vZGFsbHksIG5leHRQcm9wcy5vblNob3dpbmdNb2RhbGx5KTtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwic2hvd25Nb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd25Nb2RhbGx5LCBuZXh0UHJvcHMub25TaG93bk1vZGFsbHkpO1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLnRhcCwgaW5zdGFuY2UucHJvcHMub25UYXAsIG5leHRQcm9wcy5vblRhcCwgXCJ0YXBcIik7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMuZG91YmxlVGFwLCBpbnN0YW5jZS5wcm9wcy5vbkRvdWJsZVRhcCwgbmV4dFByb3BzLm9uRG91YmxlVGFwLCBcImRvdWJsZVRhcFwiKTtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5waW5jaCwgaW5zdGFuY2UucHJvcHMub25QaW5jaCwgbmV4dFByb3BzLm9uUGluY2gsIFwicGluY2hcIik7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMucGFuLCBpbnN0YW5jZS5wcm9wcy5vblBhbiwgbmV4dFByb3BzLm9uUGFuLCBcInBhblwiKTtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5zd2lwZSwgaW5zdGFuY2UucHJvcHMub25Td2lwZSwgbmV4dFByb3BzLm9uU3dpcGUsIFwic3dpcGVcIik7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMucm90YXRpb24sIGluc3RhbmNlLnByb3BzLm9uUm90YXRpb24sIG5leHRQcm9wcy5vblJvdGF0aW9uLCBcInJvdGF0aW9uXCIpO1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLmxvbmdQcmVzcywgaW5zdGFuY2UucHJvcHMub25Mb25nUHJlc3MsIG5leHRQcm9wcy5vbkxvbmdQcmVzcywgXCJsb25nUHJlc3NcIik7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMudG91Y2gsIGluc3RhbmNlLnByb3BzLm9uVG91Y2gsIG5leHRQcm9wcy5vblRvdWNoLCBcInRvdWNoXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkxvYWRlZCkgbWV0aG9kKFwibG9hZGVkXCIsIGluc3RhbmNlLnByb3BzLm9uTG9hZGVkKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblVubG9hZGVkKSBtZXRob2QoXCJ1bmxvYWRlZFwiLCBpbnN0YW5jZS5wcm9wcy5vblVubG9hZGVkKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCkgbWV0aG9kKFwiYW5kcm9pZEJhY2tQcmVzc2VkXCIsIGluc3RhbmNlLnByb3BzLm9uQW5kcm9pZEJhY2tQcmVzc2VkKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNob3dpbmdNb2RhbGx5KSBtZXRob2QoXCJzaG93aW5nTW9kYWxseVwiLCBpbnN0YW5jZS5wcm9wcy5vblNob3dpbmdNb2RhbGx5KTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNob3duTW9kYWxseSkgbWV0aG9kKFwic2hvd25Nb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd25Nb2RhbGx5KTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblRhcCkgbWV0aG9kKEdlc3R1cmVUeXBlcy50YXAsIGluc3RhbmNlLnByb3BzLm9uVGFwKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkRvdWJsZVRhcCkgbWV0aG9kKEdlc3R1cmVUeXBlcy5kb3VibGVUYXAsIGluc3RhbmNlLnByb3BzLm9uRG91YmxlVGFwKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblBpbmNoKSBtZXRob2QoR2VzdHVyZVR5cGVzLnBpbmNoLCBpbnN0YW5jZS5wcm9wcy5vblBpbmNoKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblBhbikgbWV0aG9kKEdlc3R1cmVUeXBlcy5wYW4sIGluc3RhbmNlLnByb3BzLm9uUGFuKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblN3aXBlKSBtZXRob2QoR2VzdHVyZVR5cGVzLnN3aXBlLCBpbnN0YW5jZS5wcm9wcy5vblN3aXBlKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblJvdGF0aW9uKSBtZXRob2QoR2VzdHVyZVR5cGVzLnJvdGF0aW9uLCBpbnN0YW5jZS5wcm9wcy5vblJvdGF0aW9uKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkxvbmdQcmVzcykgbWV0aG9kKEdlc3R1cmVUeXBlcy5sb25nUHJlc3MsIGluc3RhbmNlLnByb3BzLm9uTG9uZ1ByZXNzKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblRvdWNoKSBtZXRob2QoR2VzdHVyZVR5cGVzLnRvdWNoLCBpbnN0YW5jZS5wcm9wcy5vblRvdWNoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYWN0aW9uSXRlbUltcGwgPSA8VCBleHRlbmRzIEFjdGlvbkl0ZW0+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImFjdGlvbkl0ZW0gdHJ5IGNhc3Q6IFwiICsgaW5zdGFuY2UgYXMgQWN0aW9uSXRlbSk7XG4gICAgaWYodHJ5Q2FzdDxBY3Rpb25JdGVtPihpbnN0YW5jZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb25JdGVtSW1wbFwiKVxuICAgICAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInRhcFwiLCBpbnN0YW5jZS5wcm9wcy5vblRhcCwgbmV4dFByb3BzLm9uVGFwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25UYXApIG1ldGhvZChcInRhcFwiLCBpbnN0YW5jZS5wcm9wcy5vblRhcCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCBwYWdlSW1wbCA9IDxUIGV4dGVuZHMgUGFnZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBQYWdlLCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBQYWdlICYgRXh0cmFQcm9wczxQYWdlPikgPT4ge1xuICAgIGlmKHRyeUNhc3Q8UGFnZT4oaW5zdGFuY2UpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFnZUltcGxcIik7XG4gICAgICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibmF2aWdhdGVkRnJvbVwiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZEZyb20sIG5leHRQcm9wcy5vbk5hdmlnYXRlZEZyb20pO1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJuYXZpZ2F0ZWRUb1wiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZFRvLCBuZXh0UHJvcHMub25OYXZpZ2F0ZWRUbyk7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcIm5hdmlnYXRpbmdGcm9tXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ0Zyb20sIG5leHRQcm9wcy5vbk5hdmlnYXRpbmdGcm9tKTtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibmF2aWdhdGluZ1RvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ1RvLCBuZXh0UHJvcHMub25OYXZpZ2F0aW5nVG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0ZWRGcm9tKSBtZXRob2QoXCJuYXZpZ2F0ZWRGcm9tXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkRnJvbSk7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0ZWRUbykgbWV0aG9kKFwibmF2aWdhdGVkVG9cIiwgaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0ZWRUbyk7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nRnJvbSkgbWV0aG9kKFwibmF2aWdhdGluZ0Zyb21cIiwgaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nRnJvbSk7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nVG8pIG1ldGhvZChcIm5hdmlnYXRpbmdUb1wiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdUbyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b24vYnV0dG9uXCI7XG5pbXBvcnQgeyB1cGRhdGVMaXN0ZW5lciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRXZlbnRIYW5kbGluZ1wiO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9zaGFsbG93RXF1YWxcIjtcbmltcG9ydCB7IFByb3BzV2l0aG91dEZvcndhcmRlZFJlZiB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9zaGFyZWQvTmF0aXZlU2NyaXB0Q29tcG9uZW50VHlwaW5nc1wiO1xuaW1wb3J0IHsgRXh0cmFQcm9wcyB9IGZyb20gXCIuL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IHVwZGF0ZUxpc3RlbmVyc0ltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi91cGRhdGVMaXN0ZW5lcnNJbXBsXCI7XG5pbXBvcnQgeyByZWdpc3RlciwgQ29udGVudFZpZXcgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBIb3N0Q29udGV4dCwgSW5zdGFuY2UsIEN1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L3NoYXJlZC9Ib3N0Q29uZmlnVHlwZXNcIjtcbmltcG9ydCB7IG51bWJlciB9IGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyB1cGRhdGVMaXN0ZW5lcnNIZWxwZXJJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbFwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFJlZkltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9nZXRDdXJyZW50UmVmSW1wbFwiO1xuaW1wb3J0IHsgY29tcG9uZW50RGlkTW91bnRJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50RGlkTW91bnRJbXBsXCJcbmltcG9ydCB7IGNvbXBvbmVudFdpbGxVbm1vdW50SW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudFdpbGxVbm1vdW50SW1wbFwiO1xuaW1wb3J0IHsgc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1JlYWN0L3Nob3VsZENvbXBvbmVudFVwZGF0ZUltcGxcIjtcbmltcG9ydCB7IGZpcnN0TGV0dGVyTG93ZXJjYXNlLCBuYW1lT2YgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9IZWxwZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWFjdGlmaWVkPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihvYnNlcnZhYmxlOiBULCBuYW1lPzogc3RyaW5nKSB7IFxuICAgIFxuICAgIGlmKCFuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBmaXJzdExldHRlckxvd2VyY2FzZShuYW1lT2Yob2JzZXJ2YWJsZSkpO1xuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyaW5nIFwiICsgbmFtZSk7XG4gICAgcmVnaXN0ZXIobmFtZSwgKCkgPT4ge1xuICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIGNvbnN0IFdpdGhPYnNlcnZhYmxlSW1wbCA9IG9ic2VydmFibGVJbXBsKFJlYWN0aWZ5KTtcbiAgICBcbiAgICByZXR1cm4gY2xhc3MgUmVhY3RpZnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VCAmIEV4dHJhUHJvcHM8VD4sIGFueT57XG4gICAgICAgIHN0YXRpYyBjb3VudE9mSW5zdGFuY2VzID0gMDtcbiAgICAgICAgLy8gc3RhdGljIGRlZmF1bHRQcm9wcyA9IHsuLi4gb2JzZXJ2YWJsZSB9IFxuICAgICAgICAvKlxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wczogVCAmIEV4dHJhUHJvcHM8VD4pIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgIFJlYWN0aWZ5LmNvdW50T2ZJbnN0YW5jZXMgKys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdGluZyBpbnN0YW5jZSBcIiArIFJlYWN0aWZ5LmNvdW50T2ZJbnN0YW5jZXMpO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBteU5hdGl2ZVNjcmlwdFR5cGUgPSBvYnNlcnZhYmxlO1xuICAgICAgICBwcm90ZWN0ZWQgbXlSZWY6IFJlYWN0LlJlZk9iamVjdDxUPiA9IFJlYWN0LmNyZWF0ZVJlZjxUPigpOztcbiAgICAgICAgZ2V0Q3VycmVudFJlZigpOiBUIHwgbnVsbCB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q3VycmVudFJlZkltcGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICogSGVscGVyIG1ldGhvZCBmb3IgdXBkYXRlTGlzdGVuZXJzOiBzaW1wbHkgZ2V0cyB0aGUgY3VycmVudCByZWYgdG8gcGFzcyBvbiB0byBpdC5cbiAgICAgICAgKiBAcGFyYW0gYXR0YWNoIHRydWU6IGF0dGFjaDsgZmFsc2U6IGRldGFjaDsgbnVsbDogdXBkYXRlXG4gICAgICAgICovXG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyc0hlbHBlcihhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPik6IHZvaWQge1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbCh0aGlzLCBhdHRhY2gsIG5leHRQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICpcbiAgICAgICAgKiBAcGFyYW0gYXR0YWNoIHRydWU6IGF0dGFjaDsgZmFsc2U6IGRldGFjaDsgbnVsbDogdXBkYXRlXG4gICAgICAgICovXG4gICAgXG4gICAgICAgIHVwZGF0ZUxpc3RlbmVycyhub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPik6IHZvaWQge1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXJzSW1wbCh0aGlzLCBub2RlLCBhdHRhY2gsIG5leHRQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICBjb21wb25lbnREaWRNb3VudEltcGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICogUHVyZUNvbXBvbmVudCdzIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIG1ldGhvZCBpcyBpZ25vcmVkIGFuZCByZXBsYWNlZCB3aXRoIGEgc2hhbGxvd0VxdWFsKClcbiAgICAgICAgKiBjb21wYXJpc29uIG9mIHByb3BzIGFuZCBzdGF0ZS4gV2UnbGwgaW1wbGVtZW50IG91ciBDb21wb25lbnQncyBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB0b1xuICAgICAgICAqIG1hdGNoIHRoZSB3YXkgUHVyZUNvbXBvbmVudCBpcyBoYW5kbGVkLlxuICAgICAgICAqL1xuICAgICAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiBUICYgRXh0cmFQcm9wczxUPiwgbmV4dFN0YXRlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgICAgIHJldHVybiBzaG91bGRDb21wb25lbnRVcGRhdGVJbXBsKHRoaXMsIG5leHRTdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50SW1wbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZm9yd2FyZGVkUmVmLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgICAgIHJlZjogZm9yd2FyZGVkUmVmIHx8IHRoaXMubXlSZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0gICAgICAgIFxufSAvLyBoYXZlIHRvIGRlY2xhcmUgY2xhc3MgbmFtZSB0byBtYWtlIGRlY29yYXRvcnMgd29yayAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy83MzQyXG5cblxuXG4vLyBSZWFjdC5Db21wb25lbnQ8VCAmIEV4dHJhUHJvcHM8VD5cblxuLyogXG4vLyBBcmUgbm90IGFjdHVhbGx5IG5lZWRlZCA/IVxuZnVuY3Rpb24gSlNYPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihvYnNlcnZhYmxlOiBuZXcoLi4uYXJnczogYW55W10pID0+IFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPj4pIHtcbiAgICByZXR1cm4gUmVhY3QuZm9yd2FyZFJlZjxULCBQcm9wc1dpdGhvdXRGb3J3YXJkZWRSZWY8VCAmIEV4dHJhUHJvcHM8VD4+PihcbiAgICAgICAgKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxQcm9wc1dpdGhvdXRGb3J3YXJkZWRSZWY8VCAmIEV4dHJhUHJvcHM8VD4+PiwgcmVmOiBSZWFjdC5SZWZPYmplY3Q8VD4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHByb3BzO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZVxuICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgICAgIGZvcndhcmRlZFJlZjogcmVmLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICApXG59XG4qL1xuXG4vLyBleHBvcnQgY29uc3QgTXlPYnNlcnZhYmxlOiBSZWFjdC5Db21wb25lbnRUeXBlPFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxPYnNlcnZhYmxlPiAmIEV4dHJhUHJvcHM8T2JzZXJ2YWJsZT4+ICYgUmVhY3QuQ2xhc3NBdHRyaWJ1dGVzPE9ic2VydmFibGU+ID0gSlNYKG5ldyBPYnNlcnZhYmxlKCkpO1xuLy8gZXhwb3J0IGNvbnN0IE15QnV0dG9uID0gSlNYKG5ldyBCdXR0b24oKSk7XG5cbi8vIGV4cG9ydCBjb25zdCBNeUNvbnRlbnRWaWV3OiBSZWFjdC5Db21wb25lbnRUeXBlPFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxDb250ZW50VmlldyAmIEV4dHJhUHJvcHM8Q29udGVudFZpZXc+Pj4gJiBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8Q29udGVudFZpZXc+ID0gSlNYKG5ldyBDb250ZW50VmlldygpKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxuICogVGhlbWUgdmFyaWFibGVzIG92ZXJyaWRlc1xcbioqL1xcbi8qKlxcclxcbiAqIENvbG9yIGNsYXNzZXNcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5jLWdyZXl7Y29sb3I6I2UwZTBlMH0uYy1iZy1ncmV5e2JhY2tncm91bmQtY29sb3I6I2UwZTBlMH1cXHJcXG4qKi9cXG4uYy13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1ibGFjayB7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbi5jLWJnLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1hcXVhIHtcXG4gIGNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmctYXF1YSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmx1ZSB7XFxuICBjb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWJnLWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWNoYXJjb2FsIHtcXG4gIGNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYmctY2hhcmNvYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJyb3duIHtcXG4gIGNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtYmctYnJvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWZvcmVzdCB7XFxuICBjb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWJnLWZvcmVzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtZ3JleSB7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWJnLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWdyZXktbGlnaHQge1xcbiAgY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1iZy1ncmV5LWxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1ncmV5LWRhcmsge1xcbiAgY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1iZy1ncmV5LWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLXB1cnBsZSB7XFxuICBjb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWJnLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtbGVtb24ge1xcbiAgY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1iZy1sZW1vbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtbGltZSB7XFxuICBjb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLWJnLWxpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLW9yYW5nZSB7XFxuICBjb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLWJnLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtcnVieSB7XFxuICBjb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLWJnLXJ1Ynkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLXNreSB7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcblxcbi5jLWJnLXNreSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLyogV2lkdGgvSGVpZ2h0ICovXFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwOyB9XFxuXFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uaC0xMDAge1xcbiAgaGVpZ2h0OiAxMDA7IH1cXG5cXG4vKipcXHJcXG4gKiBNYXJnaW4gYW5kIFBhZGRpbmdcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5tLTB7bWFyZ2luOjB9Lm0tdC0we21hcmdpbi10b3A6MH0ubS1yLTB7bWFyZ2luLXJpZ2h0OjB9Lm0tYi0we21hcmdpbi1ib3R0b206MH0ubS1sLTB7bWFyZ2luLWxlZnQ6MH0ubS14LTB7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MH0ubS15LTB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXHJcXG4gKiBTYW1lIGZvciBQYWRkaW5nICh1c2luZyB0aGUgJ3AnIGFiYnJldmlhdGlvbilcXHJcXG4gKiBGcm9tIDAsIDIsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMFxcclxcbioqL1xcbi5tLTAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLm0tdC0wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ubS1yLTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLm0tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS1sLTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS14LTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS15LTAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS0yIHtcXG4gIG1hcmdpbjogMjsgfVxcblxcbi5tLXQtMiB7XFxuICBtYXJnaW4tdG9wOiAyOyB9XFxuXFxuLm0tci0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjsgfVxcblxcbi5tLWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tbC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teC0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teS0yIHtcXG4gIG1hcmdpbi10b3A6IDI7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tNCB7XFxuICBtYXJnaW46IDQ7IH1cXG5cXG4ubS10LTQge1xcbiAgbWFyZ2luLXRvcDogNDsgfVxcblxcbi5tLXItNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7IH1cXG5cXG4ubS1iLTQge1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLWwtNCB7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXgtNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXktNCB7XFxuICBtYXJnaW4tdG9wOiA0O1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLTUge1xcbiAgbWFyZ2luOiA1OyB9XFxuXFxuLm0tdC01IHtcXG4gIG1hcmdpbi10b3A6IDU7IH1cXG5cXG4ubS1yLTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1OyB9XFxuXFxuLm0tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS1sLTUge1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS14LTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1O1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS15LTUge1xcbiAgbWFyZ2luLXRvcDogNTtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS04IHtcXG4gIG1hcmdpbjogODsgfVxcblxcbi5tLXQtOCB7XFxuICBtYXJnaW4tdG9wOiA4OyB9XFxuXFxuLm0tci04IHtcXG4gIG1hcmdpbi1yaWdodDogODsgfVxcblxcbi5tLWItOCB7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tbC04IHtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teC04IHtcXG4gIG1hcmdpbi1yaWdodDogODtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teS04IHtcXG4gIG1hcmdpbi10b3A6IDg7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tMTAge1xcbiAgbWFyZ2luOiAxMDsgfVxcblxcbi5tLXQtMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4ubS1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7IH1cXG5cXG4ubS1iLTEwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tbC0xMCB7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS14LTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS15LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS0xMiB7XFxuICBtYXJnaW46IDEyOyB9XFxuXFxuLm0tdC0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjsgfVxcblxcbi5tLXItMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjsgfVxcblxcbi5tLWItMTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS1sLTEyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXgtMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXktMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLTE1IHtcXG4gIG1hcmdpbjogMTU7IH1cXG5cXG4ubS10LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1OyB9XFxuXFxuLm0tci0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1OyB9XFxuXFxuLm0tYi0xNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLWwtMTUge1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teC0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teS0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tMTYge1xcbiAgbWFyZ2luOiAxNjsgfVxcblxcbi5tLXQtMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7IH1cXG5cXG4ubS1yLTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7IH1cXG5cXG4ubS1iLTE2IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tbC0xNiB7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS14LTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS15LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS0yMCB7XFxuICBtYXJnaW46IDIwOyB9XFxuXFxuLm0tdC0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDsgfVxcblxcbi5tLXItMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDsgfVxcblxcbi5tLWItMjAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS1sLTIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXgtMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXktMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLTI0IHtcXG4gIG1hcmdpbjogMjQ7IH1cXG5cXG4ubS10LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0OyB9XFxuXFxuLm0tci0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0OyB9XFxuXFxuLm0tYi0yNCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLWwtMjQge1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teC0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0O1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teS0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tMjUge1xcbiAgbWFyZ2luOiAyNTsgfVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7IH1cXG5cXG4ubS1yLTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7IH1cXG5cXG4ubS1iLTI1IHtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tbC0yNSB7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS14LTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS15LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1O1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS0yOCB7XFxuICBtYXJnaW46IDI4OyB9XFxuXFxuLm0tdC0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODsgfVxcblxcbi5tLXItMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODsgfVxcblxcbi5tLWItMjgge1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS1sLTI4IHtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXgtMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXktMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLTMwIHtcXG4gIG1hcmdpbjogMzA7IH1cXG5cXG4ubS10LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwOyB9XFxuXFxuLm0tci0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwOyB9XFxuXFxuLm0tYi0zMCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5tLWwtMzAge1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teC0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teS0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLnAtMCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnAtdC0wIHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLnAtci0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG4ucC1iLTAge1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC1sLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteC0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC15LTAge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLTIge1xcbiAgcGFkZGluZzogMjsgfVxcblxcbi5wLXQtMiB7XFxuICBwYWRkaW5nLXRvcDogMjsgfVxcblxcbi5wLXItMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyOyB9XFxuXFxuLnAtYi0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXgtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyO1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteS0yIHtcXG4gIHBhZGRpbmctdG9wOiAyO1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDQ7IH1cXG5cXG4ucC10LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7IH1cXG5cXG4ucC1yLTQge1xcbiAgcGFkZGluZy1yaWdodDogNDsgfVxcblxcbi5wLWItNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLWwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC14LTQge1xcbiAgcGFkZGluZy1yaWdodDogNDtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXktNCB7XFxuICBwYWRkaW5nLXRvcDogNDtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtNSB7XFxuICBwYWRkaW5nOiA1OyB9XFxuXFxuLnAtdC01IHtcXG4gIHBhZGRpbmctdG9wOiA1OyB9XFxuXFxuLnAtci01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7IH1cXG5cXG4ucC1iLTUge1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC1sLTUge1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteC01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDU7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLTgge1xcbiAgcGFkZGluZzogODsgfVxcblxcbi5wLXQtOCB7XFxuICBwYWRkaW5nLXRvcDogODsgfVxcblxcbi5wLXItOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4OyB9XFxuXFxuLnAtYi04IHtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtbC04IHtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXgtOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4O1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteS04IHtcXG4gIHBhZGRpbmctdG9wOiA4O1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMDsgfVxcblxcbi5wLXQtMTAge1xcbiAgcGFkZGluZy10b3A6IDEwOyB9XFxuXFxuLnAtci0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDsgfVxcblxcbi5wLWItMTAge1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtbC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLTEyIHtcXG4gIHBhZGRpbmc6IDEyOyB9XFxuXFxuLnAtdC0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7IH1cXG5cXG4ucC1yLTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyOyB9XFxuXFxuLnAtYi0xMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC1sLTEyIHtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC14LTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXktMTIge1xcbiAgcGFkZGluZy10b3A6IDEyO1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtMTUge1xcbiAgcGFkZGluZzogMTU7IH1cXG5cXG4ucC10LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTsgfVxcblxcbi5wLXItMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7IH1cXG5cXG4ucC1iLTE1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLWwtMTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXgtMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteS0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC0xNiB7XFxuICBwYWRkaW5nOiAxNjsgfVxcblxcbi5wLXQtMTYge1xcbiAgcGFkZGluZy10b3A6IDE2OyB9XFxuXFxuLnAtci0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjsgfVxcblxcbi5wLWItMTYge1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtbC0xNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteC0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC15LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLTIwIHtcXG4gIHBhZGRpbmc6IDIwOyB9XFxuXFxuLnAtdC0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7IH1cXG5cXG4ucC1yLTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwOyB9XFxuXFxuLnAtYi0yMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC1sLTIwIHtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC14LTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXktMjAge1xcbiAgcGFkZGluZy10b3A6IDIwO1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtMjQge1xcbiAgcGFkZGluZzogMjQ7IH1cXG5cXG4ucC10LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDsgfVxcblxcbi5wLXItMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7IH1cXG5cXG4ucC1iLTI0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLWwtMjQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXgtMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteS0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC0yNSB7XFxuICBwYWRkaW5nOiAyNTsgfVxcblxcbi5wLXQtMjUge1xcbiAgcGFkZGluZy10b3A6IDI1OyB9XFxuXFxuLnAtci0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTsgfVxcblxcbi5wLWItMjUge1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtbC0yNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteC0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC15LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLTI4IHtcXG4gIHBhZGRpbmc6IDI4OyB9XFxuXFxuLnAtdC0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7IH1cXG5cXG4ucC1yLTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4OyB9XFxuXFxuLnAtYi0yOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC1sLTI4IHtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC14LTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4O1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXktMjgge1xcbiAgcGFkZGluZy10b3A6IDI4O1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtMzAge1xcbiAgcGFkZGluZzogMzA7IH1cXG5cXG4ucC10LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDsgfVxcblxcbi5wLXItMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7IH1cXG5cXG4ucC1iLTMwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi5wLWwtMzAge1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXgtMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteS0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4vKiBEaXZpZGVycyAqL1xcbi5oci1saWdodCB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uaHItZGFyayB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4vKiBBbGlnbm1lbnQgKi9cXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1sb3dlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTsgfVxcblxcbi50ZXh0LXVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLnRleHQtY2FwaXRhbGl6ZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcblxcbi5mb250LXdlaWdodC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5mb250LXdlaWdodC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmZvbnQtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi8qKlxcclxcbiAqIEZvbnQgc2l6ZVxcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLnQtMTB7Zm9udC1zaXplOjEwfVxcclxcbiAqIEZyb20gMTAsIDEyLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMFxcclxcbioqL1xcbi50LTEwIHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4udC0xMiB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLnQtMTQge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi50LTE1IHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4udC0xNiB7XFxuICBmb250LXNpemU6IDE2OyB9XFxuXFxuLnQtMTcge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi50LTE4IHtcXG4gIGZvbnQtc2l6ZTogMTg7IH1cXG5cXG4udC0xOSB7XFxuICBmb250LXNpemU6IDE5OyB9XFxuXFxuLnQtMjAge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi50LTI1IHtcXG4gIGZvbnQtc2l6ZTogMjU7IH1cXG5cXG4udC0zMCB7XFxuICBmb250LXNpemU6IDMwOyB9XFxuXFxuLmltZy1yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDU7IH1cXG5cXG4uaW1nLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiAyMDsgfVxcblxcbi5pbWctdGh1bWJuYWlsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlOyB9XFxuXFxuLnB1bGwtbGVmdCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0OyB9XFxuXFxuLnB1bGwtcmlnaHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4ubS14LWF1dG8ge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm0teS1hdXRvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnRleHQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjRUQ0NzNGOyB9XFxuXFxuLnRleHQtbXV0ZWQge1xcbiAgY29sb3I6ICM5ZTllOWU7IH1cXG5cXG4uYmctcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYmctZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRDQ3M0Y7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24tYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNztcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICB3aWR0aDogMzA7XFxuICBoZWlnaHQ6IDMwOyB9XFxuXFxuLmJ0biB7XFxuICBjb2xvcjogIzNBNTNGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWluLWhlaWdodDogMzY7XFxuICBtaW4td2lkdGg6IDY0O1xcbiAgcGFkZGluZzogMTAgMTAgMTAgMTA7XFxuICBmb250LXNpemU6IDE4O1xcbiAgbWFyZ2luOiA4IDE2IDggMTY7IH1cXG4gIC5idG4uYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MGZmOyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBib3JkZXItY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcyNmZmO1xcbiAgICBib3JkZXItY29sb3I6ICMwNzI2ZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYXF1YSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYnJvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWZvcmVzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZ3JleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGVtb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwO1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1saW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1wdXJwbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXJ1Ynkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXNreSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYnRuLW91dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcbiAgLmJ0bi1vdXRsaW5lLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MGZmOyB9XFxuXFxuLmJ0bltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGNvbG9yOiAjYTRhNGE0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWUsIGZvbnRhd2Vzb21lLXdlYmZvbnQ7IH1cXG5cXG4uZm9ybSAuaW5wdXQge1xcbiAgcGFkZGluZzogMTYgOCAxNiA4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1ib3JkZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI4O1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0W2lzRW5hYmxlZD0nZmFsc2UnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cXG5cXG4uZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luOiA4OyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgY29sb3I6ICNiYWJhYmE7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItbGlnaHQuYWN0aXZlLFxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1kYXJrLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZC5pbnB1dC1zaWRlcyAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG5cXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uYm9keSxcXG4uYm9keTIsXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDMyOyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjI7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5oNCB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLmg1IHtcXG4gIGZvbnQtc2l6ZTogMTE7IH1cXG5cXG4uaDYge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi5mb290bm90ZSB7XFxuICBmb250LXNpemU6IDEzOyB9XFxuXFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSBMYWJlbCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgc3RyZXRjaDogZmlsbDtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6ICMwMjI3MzQ7XFxuICAgIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4ucGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLnByb2dyZXNzIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIGZvbnQtc2l6ZTogMTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCwgLnNpZGVkcmF3ZXItY2VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGhlaWdodDogMTQ4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxNiAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAyMCAxNSAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDY0O1xcbiAgd2lkdGg6IDY0O1xcbiAgYm9yZGVyLXJhZGl1czogMzI7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMzY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNzQ7XFxuICB3aWR0aDogNzQ7XFxuICBib3JkZXItcmFkaXVzOiAzNztcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGNvbG9yOiAjNzM3MzczOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgaGVpZ2h0OiA0ODtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9yaWVudGF0aW9uOiBob3Jpem9udGFsOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0gLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICB3aWR0aDogMjQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgaGVpZ2h0OiA0ODtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjM0E1M0ZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4OyB9XFxuICAgIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICAgIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMCAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDAuMTtcXG4gIHdpZHRoOiA4MCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5zbGlkZXJbaXNFbmFibGVkPWZhbHNlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXVtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4udGFiLXZpZXcge1xcbiAgLypjb2xvcjogJHNlY29uZGFyeTsqL1xcbiAgc2VsZWN0ZWQtY29sb3I6ICMzMGJjZmY7XFxuICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIC50YWItdmlldyAudGFiLXZpZXctaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbiNsb2dpbi1iYWNrZ3JvdW5kIHtcXG4gIG1hcmdpbi10b3A6IC0yMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcCB7XFxuICBwYWRkaW5nOiAwIDQwOyB9XFxuXFxuLmxvZ28td3JhcCB7XFxuICBtYXJnaW46IDYwIDAgMTAgMDtcXG4gIHBhZGRpbmc6IDIwIDA7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvLXN1YiB7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMzsgfVxcbiAgLmxvZ2luLXdyYXBwZXIgVGV4dEZpZWxkIHtcXG4gICAgcGFkZGluZzogMTAgMTA7XFxuICAgIG1hcmdpbjogMTAgMCAwIDA7IH1cXG5cXG4uZ28tYmFjayB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi8qKlxcclxcbiAqIEltcG9ydCBhbGwgcGxhdGZvcm0gc3BlY2lmaWMgZmlsZXMgaGVyZVxcclxcbiAqL1xcbi5idG4ge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdTRiBVSSBUZXh0IE1lZGl1bSc7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGJvcmRlci13aWR0aDogMTsgfVxcblxcbi5idG4tcm91bmRlZC1zbSB7XFxuICBib3JkZXItcmFkaXVzOiA0OyB9XFxuXFxuLmJ0bi1yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE5OyB9XFxuXFxuLmZvcm0ge1xcbiAgZm9udC1mYW1pbHk6ICdTRiBVSSBUZXh0IFJlZ3VsYXInOyB9XFxuICAuZm9ybSAuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE1OyB9XFxuICAgIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNzsgfVxcblxcbi8qIFRoaXMgaXMgaGVyZSB0ZW1wb3JhcmlseSBiZWNhdXNlIF9pbmRleC5pb3Muc2NzcyBjYW5ub3QgYmUgZW1wdHkgKi9cXG4uaDEge1xcbiAgZm9udC1zaXplOiAzMjsgfVxcblxcbi5zbGlkZXIge1xcbiAgbWFyZ2luOiAxMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uLCAuc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uc3dpdGNoIHtcXG4gIG1hcmdpbjogOCAxNTsgfVxcblxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xcbiAgcGFkZGluZzogMTYgMTUgMTYgMTU7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLnNlZ21lbnRlZC1iYXIge1xcbiAgbWFyZ2luOiAwIDE1O1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250QXdlc29tZVxcXCI7IH1cXG5cIiwgXCJcIl0pO1xuXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLnNjc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5zY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCAncmVhY3QtaG90LWxvYWRlcic7IC8vIE11c3QgYmUgaW1wb3J0ZWQgYmVmb3JlIFJlYWN0IGFuZCBSZWFjdE5hdGl2ZVNjcmlwdC5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKiBDb250cm9scyByZWFjdC1uYXRpdmVzY3JpcHQgbG9nIHZlcmJvc2l0eS4gdHJ1ZTogYWxsIGxvZ3M7IGZhbHNlOiBvbmx5IGVycm9yIGxvZ3MuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCAnX19ERVZfXycsIHsgdmFsdWU6IGZhbHNlIH0pO1xuaW1wb3J0ICogYXMgUmVhY3ROYXRpdmVTY3JpcHQgZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lclwiO1xuXG5leHBvcnQgY29uc3Qgcm9vdFJlZjogUmVhY3QuUmVmT2JqZWN0PGFueT4gPSBSZWFjdC5jcmVhdGVSZWY8YW55PigpO1xuXG5SZWFjdE5hdGl2ZVNjcmlwdC5zdGFydChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBBcHBDb250YWluZXIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZjogcm9vdFJlZlxuICAgICAgICB9LFxuICAgICAgICBudWxsXG4gICAgKSxcbiAgICAvKiBUaGlzIHJlZiBNVVNUIG1hdGNoIHRoZSByZWYgdGhhdCB5b3UgcGFzcyBpbnRvIHRoZSBiYXNlIGNvbXBvbmVudCBvZiB5b3VyIGFwcCBjb250YWluZXIuICovXG4gICAgcm9vdFJlZlxuKTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXG4qKi9cXG4uZmEge1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uaW5mbyB7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXCIsIFwiXCJdKTtcblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlci9yb290JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgJFBhZ2UsICRMYWJlbCwgJEFjdGlvbkJhciwgJEdyaWRMYXlvdXQsICRGb3JtYXR0ZWRTdHJpbmcsICRTcGFuLCAkU3dpdGNoLCAkRnJhbWUsICRCdXR0b24sICRTdGFja0xheW91dCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCB7IEl0ZW1TcGVjIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0L2dyaWQtbGF5b3V0JztcbmltcG9ydCB7IEZyYW1lLCBQYWdlLCBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWUnO1xuXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwvbGFiZWwnO1xuaW1wb3J0IHsgX0xhYmVsIGFzIExhYmVsQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NvbXBvbmVudHMvTGFiZWxcIjtcbmltcG9ydCB7IFJOU0ZyaWVuZGx5Rm9ybWF0dGVkU3RyaW5nIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NvbXBvbmVudHMvRm9ybWF0dGVkU3RyaW5nXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5JztcbmltcG9ydCB7IFJlYWN0aWZpZWQgfSBmcm9tIFwiLi4vUmVhY3RpZmllZC9SZWFjdGlmaWVkXCI7XG5cbmNsYXNzIE15RmFuY3lCdXR0b24gZXh0ZW5kcyBCdXR0b257XG5cbn1cbmNvbnN0IE15QnV0dG9uID0gUmVhY3RpZmllZChuZXcgTXlGYW5jeUJ1dHRvbigpLCBcImJ1dHRvblwiKTtcblxuY29uc3QgYmIgPSBuZXcgTXlCdXR0b24obnVsbCk7XG5cbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uL2J1dHRvbic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgZm9yd2FyZGVkUmVmOiBSZWFjdC5SZWZPYmplY3Q8RnJhbWU+LFxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuXG59XG5cbmNsYXNzIEFwcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhZ2VSZWY6IFJlYWN0LlJlZk9iamVjdDxQYWdlPiA9IFJlYWN0LmNyZWF0ZVJlZjxQYWdlPigpO1xuICAgIC8vIHByaXZhdGUgcmVhZG9ubHkgbXlCdXR0b25SZWYgPSBSZWFjdC5jcmVhdGVSZWY8QnV0dG9uPigpO1xuICAgIFxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG5cblxuICAgICAgICBjb25zdCBmcmFtZTogRnJhbWUgPSB0aGlzLnByb3BzLmZvcndhcmRlZFJlZi5jdXJyZW50ITtcbiAgICAgICAgZnJhbWUubmF2aWdhdGUoe1xuICAgICAgICAgICAgY3JlYXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZTogUGFnZSA9IHRoaXMucGFnZVJlZi5jdXJyZW50ITtcbiAgICAgICAgICAgICAgICBwYWdlLmFkZENzc0ZpbGUoXCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIik7IC8vIFBhdGggaXMgcmVsYXRpdmUgdG8gdGhlICdhcHAnIGZvbGRlcjsgbm90IHJlbGF0aXZlIHRvIHRoaXMgZmlsZSFcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IGZvcndhcmRlZFJlZiB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPCRGcmFtZSByZWY9e2ZvcndhcmRlZFJlZn0+XG4gICAgICAgICAgICAgICAgPCRQYWdlIHJlZj17dGhpcy5wYWdlUmVmfSBjbGFzc05hbWU9XCJwYWdlXCIgYWN0aW9uQmFySGlkZGVuPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwkU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxNeUJ1dHRvbiBiYWNrZ3JvdW5kQ29sb3I9e25ldyBDb2xvcihcImdyZWVuXCIpfSBoZWlnaHQ9ezMwMH0gd2lkdGg9ezUwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8TXlCdXR0b24gYmFja2dyb3VuZENvbG9yPXtuZXcgQ29sb3IoXCJncmVlblwiKX0gaGVpZ2h0PXszMDB9IHdpZHRoPXs1MH0gLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8JEJ1dHRvbiB0ZXh0PXtcInRlc3RcIn0gb25UYXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCRGb3JtYXR0ZWRTdHJpbmcgLz4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8LyRCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvJFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvJFBhZ2U+XG4gICAgICAgICAgICA8LyRGcmFtZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG4vLyBleHBvcnQgZGVmYXVsdCBBcHBDb250YWluZXI7XG5leHBvcnQgZGVmYXVsdCBob3QoQXBwQ29udGFpbmVyKTsgLy8gUmVwbGFjZSB0aGlzIGxpbmUgd2l0aCB0aGUgYWJvdmUgbGluZSBpZiB5b3Ugd2FudCB0byByZW1vdmUgaG90IGxvYWRpbmcuIl0sInNvdXJjZVJvb3QiOiIifQ==