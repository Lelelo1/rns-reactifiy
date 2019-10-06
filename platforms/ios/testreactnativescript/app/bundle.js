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
	"./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigAppendChildImpl.ts": "./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigAppendChildImpl.ts",
	"./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigInsertBeforeImpl.ts": "./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigInsertBeforeImpl.ts",
	"./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigRemoveChildImpl.ts": "./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigRemoveChildImpl.ts",
	"./Reactified/Implementation/Helpers.ts": "./Reactified/Implementation/Helpers.ts",
	"./Reactified/Implementation/React/componentDidMountImpl.ts": "./Reactified/Implementation/React/componentDidMountImpl.ts",
	"./Reactified/Implementation/React/componentWillUnmountImpl.ts": "./Reactified/Implementation/React/componentWillUnmountImpl.ts",
	"./Reactified/Implementation/React/renderImpl.ts": "./Reactified/Implementation/React/renderImpl.ts",
	"./Reactified/Implementation/React/shouldComponentUpdateImpl.ts": "./Reactified/Implementation/React/shouldComponentUpdateImpl.ts",
	"./Reactified/Implementation/Types.ts": "./Reactified/Implementation/Types.ts",
	"./Reactified/Implementation/Unique/onDataChangeImpl.ts": "./Reactified/Implementation/Unique/onDataChangeImpl.ts",
	"./Reactified/Implementation/Unique/onSelectedIndexChangeImpl.ts": "./Reactified/Implementation/Unique/onSelectedIndexChangeImpl.ts",
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

/***/ "./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigAppendChildImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__customHostConfigAppendChildImpl", function() { return __customHostConfigAppendChildImpl; });
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/text/formatted-string.js");
/* harmony import */ var tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__);


var __customHostConfigAppendChildImpl = function (parent, child) {
  return textBaseImpl(parent, child);
};

var textBaseImpl = function (parent, child) {
  if (parent instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["TextBase"]) {
    if (child instanceof tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__["FormattedString"]) {
      parent.formattedText = child;
      return true;
    }
  } // i.e. defer to Host Config.


  return false;
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigInsertBeforeImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__customHostConfigInsertBeforeImpl", function() { return __customHostConfigInsertBeforeImpl; });
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/text/formatted-string.js");
/* harmony import */ var tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__);


var __customHostConfigInsertBeforeImpl = function (parent, child, beforeChild) {
  return textBaseImpl(parent, child, beforeChild);
};

var textBaseImpl = function (parent, child, beforeChild) {
  if (parent instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["TextBase"]) {
    if (child instanceof tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__["FormattedString"]) {
      parent.formattedText = child;
      return true;
    }
  } // i.e. defer to Host Config.


  return false;
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigRemoveChildImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__customHostConfigRemoveChildImpl", function() { return __customHostConfigRemoveChildImpl; });
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/text/formatted-string.js");
/* harmony import */ var tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__);


var __customHostConfigRemoveChildImpl = function (parent, child) {
  return textBaseImpl(parent, child);
};

var textBaseImpl = function (parent, child) {
  if (parent instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["TextBase"]) {
    if (child instanceof tns_core_modules_text_formatted_string__WEBPACK_IMPORTED_MODULE_1__["FormattedString"]) {
      parent.formattedText = null;
      return true;
    } // i.e. defer to Host Config.


    return false;
  }
};; 
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
    return method.name === "genericImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "observableImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "viewBaseImpl";
  }); // extends Observable...

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "viewImpl";
  }); // extends ViewBase...

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "actionItemImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "pageImpl";
  }); // extends View...

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "textBaseImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "datePickerImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "frameImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "htmlViewImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "listPickerImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "buttonImpl";
  }); // extends TextBase...

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "labelImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "editableTextBaseImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "textFieldImpl";
  }); // extends EditableTextBase...

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  return returnValue;
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
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");

var componentDidMountImpl = function (instance) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([observableImpl, datePickerImpl, listPickerImpl], instance);
};

var observableImpl = function (instance) {
  Reflect.get(instance, "updateListenersHelper")(true);
};

var datePickerImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("dateChange", Reflect.get(instance, "onDateChange"));
};

var listPickerImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("selectedIndexChange", Reflect.get(instance, "onSelectedIndexChange"));
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/React/componentWillUnmountImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentWillUnmountImpl", function() { return componentWillUnmountImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");
var _this = undefined;


var componentWillUnmountImpl = function (instance) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([observableImpl, datePickerImpl, listPickerImpl], instance);
};

var observableImpl = function (instance) {
  Reflect.get(instance, "updateListenersHelper")(false);
};

var datePickerImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.off("dateChange", Reflect.get(instance, "onDateChange"));
};

var listPickerImpl = function (instance) {
  var node = _this.getCurrentRef();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.off("selectedIndexChange", Reflect.get(instance, "onSelectedIndexChange"));
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/React/renderImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderImpl", function() { return renderImpl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");



var renderImpl = function (name, instance, observable) {
  return Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["executeInOrder"])([genericImpl, buttonImpl, textFieldImpl, htmlViewImpl, labelImpl], name, instance, observable);
};

var genericImpl = function (name, instance, observable) {
  console.log("generic render");

  var _a = instance.props,
      forwardedRef = _a.forwardedRef,
      children = _a.children,
      rest = __rest(_a, ["forwardedRef", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({}, rest, {
    ref: forwardedRef || Reflect.get(instance, "myRef")
  }), children);
};

var buttonImpl = function (name, instance, observable) {
  var _a;

  if (observable instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["Button"]) {
    console.log("buttonImpl");

    var _b = instance.props,
        forwardedRef = _b.forwardedRef,
        text = _b.text,
        formattedText = _b.formattedText,
        children = _b.children,
        rest = __rest(_b, ["forwardedRef", "text", "formattedText", "children"]);

    if (text && formattedText) {
      console.warn("Both text and formattedText provided; shall use formattedText.");
    }

    var textContent = (_a = {}, _a[formattedText ? "formattedText" : "text"] = formattedText || text, _a);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({
      className: "btn btn-primary btn-active"
    }, rest, textContent, {
      ref: forwardedRef || Reflect.get(instance, "myRef")
    }), children // Weird that a button may contain children, but what do I know.
    );
  }

  return undefined;
};

var textFieldImpl = function (name, instance, observable) {
  var _a;

  if (observable instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["TextField"]) {
    var _b = instance.props,
        forwardedRef = _b.forwardedRef,
        text = _b.text,
        formattedText = _b.formattedText,
        children = _b.children,
        rest = __rest(_b, ["forwardedRef", "text", "formattedText", "children"]);

    if (text && formattedText) {
      console.warn("Both text and formattedText provided; shall use formattedText.");
    }

    var textContent = (_a = {}, _a[formattedText ? "formattedText" : "text"] = formattedText || text, _a);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({}, rest, textContent, {
      ref: forwardedRef || Reflect.get(instance, "myRef")
    }), children // Weird that a TextField may contain children, but what do I know.
    );
  }

  return undefined;
};

var htmlViewImpl = function (name, instance, observable) {
  if (observable instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["HtmlView"]) {
    var _a = instance.props,
        forwardedRef = _a.forwardedRef,
        children = _a.children,
        rest = __rest(_a, ["forwardedRef", "children"]);

    if (children) {
      console.warn("Ignoring 'children' prop on HtmlView; not permitted");
    }

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({}, rest, {
      ref: forwardedRef || Reflect.get(instance, "myRef")
    }), null);
  }

  return undefined;
};

var labelImpl = function (name, instance, observable) {
  var _a;

  if (observable instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["Label"]) {
    var _b = instance.props,
        forwardedRef = _b.forwardedRef,
        onLoaded = _b.onLoaded,
        onUnloaded = _b.onUnloaded,
        onAndroidBackPressed = _b.onAndroidBackPressed,
        onShowingModally = _b.onShowingModally,
        onShownModally = _b.onShownModally,
        onTap = _b.onTap,
        onDoubleTap = _b.onDoubleTap,
        onPinch = _b.onPinch,
        onPan = _b.onPan,
        onSwipe = _b.onSwipe,
        onRotation = _b.onRotation,
        onLongPress = _b.onLongPress,
        onTouch = _b.onTouch,
        onPropertyChange = _b.onPropertyChange,
        text = _b.text,
        formattedText = _b.formattedText,
        children = _b.children,
        rest = __rest(_b, ["forwardedRef", "onLoaded", "onUnloaded", "onAndroidBackPressed", "onShowingModally", "onShownModally", "onTap", "onDoubleTap", "onPinch", "onPan", "onSwipe", "onRotation", "onLongPress", "onTouch", "onPropertyChange", "text", "formattedText", "children"]);

    if (text && formattedText) {
      console.warn("Both text and formattedText provided; shall use formattedText.");
    }

    var textContent = (_a = {}, _a[formattedText ? "formattedText" : "text"] = formattedText || text, _a);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({}, rest, textContent, {
      ref: forwardedRef || Reflect.get(instance, "myRef")
    }), children // Weird that a Label may contain children, but what do I know.
    );
  }

  return undefined;
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

  Reflect.get(instance, "updateListenersHelper")(null, nextProps); // https://lucybain.com/blog/2018/react-js-pure-component/

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
// helper method to be able to cast Reactify<Observable> to Reactify<View>  etc 
var tryCast = function (parameter) {
  return parameter;
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Unique/onDataChangeImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDataChangeImpl", function() { return onDataChangeImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");

var onDataChangeImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([datePickerImpl], instance, args);
};

var datePickerImpl = function (instance, args) {
  var date = args.object.date;
  instance.props.onDateChange && instance.props.onDateChange(date);
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Unique/onSelectedIndexChangeImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSelectIndexChangeImpl", function() { return onSelectIndexChangeImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");

var onSelectIndexChangeImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([listPickerImpl], instance, args);
};

var listPickerImpl = function (instance, args) {
  var selectedIndex = args.object.selectedIndex;
  instance.props.onSelectedIndexChange && instance.props.onSelectedIndexChange(selectedIndex);
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/getCurrentRefImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentRefImpl", function() { return getCurrentRefImpl; });
function getCurrentRefImpl(instance) {
  var ref = (instance.props.forwardedRef || Reflect.get(instance, "myRef")).current;
  console.log("getCurrentRefImpl: " + ref);
  return ref;
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

  if (node === null) {
    // console.warn(`React ref to NativeScript View lost, so unable to update event listeners.`);
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
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");



var updateListenersImpl = function (instance, node, attach, nextProps) {
  /* implementation for any rns component here - or on reactify class body*/
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["executeInOrder"])([pageImpl, viewImpl, observableImpl, actionItemImpl, editableTextBaseImpl, frameImpl], instance, node, attach);
};

var observableImpl = function (instance, node, attach, nextProps) {
  console.log("observableImpl");

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
  // console.log("actionItem try cast: " + instance as ActionItem);
  console.log("actionItemImpl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "tap", instance.props.onTap, nextProps.onTap);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onTap) method("tap", instance.props.onTap);
  }
};

var pageImpl = function (instance, node, attach, nextProps) {
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
};

var editableTextBaseImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "blur", instance.props.onBlur, nextProps.onBlur);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "focus", instance.props.onFocus, nextProps.onFocus);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "textChange", instance.props.onTextChange, nextProps.onTextChange);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onBlur) method("blur", instance.props.onBlur);
    if (instance.props.onFocus) method("focus", instance.props.onFocus);
    if (instance.props.onTextChange) method("textChange", instance.props.onTextChange);
  }
};

var frameImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_0__["updateListener"])(node, "optionSelected", instance.props.onOptionSelected, nextProps.onOptionSelected);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onOptionSelected) method("optionSelected", instance.props.onOptionSelected);
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
/* harmony import */ var _Implementation_React_renderImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./Reactified/Implementation/React/renderImpl.ts");
/* harmony import */ var _Implementation_updateListenersImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./Reactified/Implementation/updateListenersImpl.ts");
/* harmony import */ var _Implementation_React_componentDidMountImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./Reactified/Implementation/React/componentDidMountImpl.ts");
/* harmony import */ var _Implementation_React_shouldComponentUpdateImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./Reactified/Implementation/React/shouldComponentUpdateImpl.ts");
/* harmony import */ var _Implementation_React_componentWillUnmountImpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./Reactified/Implementation/React/componentWillUnmountImpl.ts");
/* harmony import */ var _Implementation_CustomNodeHierarchyManager_customHostConfigAppendChildImpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigAppendChildImpl.ts");
/* harmony import */ var _Implementation_CustomNodeHierarchyManager_customHostConfigRemoveChildImpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigRemoveChildImpl.ts");
/* harmony import */ var _Implementation_CustomNodeHierarchyManager_customHostConfigInsertBeforeImpl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./Reactified/Implementation/CustomNodeHierarchyManager/__customHostConfigInsertBeforeImpl.ts");
/* harmony import */ var _Implementation_Unique_onDataChangeImpl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./Reactified/Implementation/Unique/onDataChangeImpl.ts");
/* harmony import */ var _Implementation_updateListenersHelperImpl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./Reactified/Implementation/updateListenersHelperImpl.ts");
/* harmony import */ var _Implementation_Unique_onSelectedIndexChangeImpl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./Reactified/Implementation/Unique/onSelectedIndexChangeImpl.ts");














function Reactified(observable, name) {
  if (!name) {
    name = Object(_Implementation_Helpers__WEBPACK_IMPORTED_MODULE_2__["firstLetterLowercase"])(Object(_Implementation_Helpers__WEBPACK_IMPORTED_MODULE_2__["nameOf"])(observable));
  }

  console.log("registering " + name);
  Object(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["register"])(name, function () {
    return observable;
  }); // let self: Reactify = null;

  var Reactify =
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


      _this.myRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();

      _this.getCurrentRef = function () {
        return (_this.props.forwardedRef || _this.myRef).current;
      };
      /**
      * Helper method for updateListeners: simply gets the current ref to pass on to it.
      * @param attach true: attach; false: detach; null: update
      */


      _this.updateListenersHelper = function (attach, nextProps) {
        Object(_Implementation_updateListenersHelperImpl__WEBPACK_IMPORTED_MODULE_12__["updateListenersHelperImpl"])(_this, attach, nextProps);
      };
      /**
      *
      * @param attach true: attach; false: detach; null: update
      */


      _this.updateListeners = function (node, attach, nextProps) {
        Object(_Implementation_updateListenersImpl__WEBPACK_IMPORTED_MODULE_4__["updateListenersImpl"])(_this, node, attach, nextProps);
      };

      _this.componentDidMount = function () {
        Object(_Implementation_React_componentDidMountImpl__WEBPACK_IMPORTED_MODULE_5__["componentDidMountImpl"])(_this);
      };
      /**
      * PureComponent's shouldComponentUpdate() method is ignored and replaced with a shallowEqual()
      * comparison of props and state. We'll implement our Component's shouldComponentUpdate() to
      * match the way PureComponent is handled.
      */


      _this.shouldComponentUpdate = function (nextProps, nextState) {
        return Object(_Implementation_React_shouldComponentUpdateImpl__WEBPACK_IMPORTED_MODULE_6__["shouldComponentUpdateImpl"])(_this, nextProps, nextState);
      };

      _this.componentWillUnmount = function () {
        // this.updateListenersHelper(false);
        Object(_Implementation_React_componentWillUnmountImpl__WEBPACK_IMPORTED_MODULE_7__["componentWillUnmountImpl"])(_this);
      };

      _this.render = function () {
        return Object(_Implementation_React_renderImpl__WEBPACK_IMPORTED_MODULE_3__["renderImpl"])(name, _this, observable);
      };

      _this.__customHostConfigAppendChild = function (parentInstance, child) {
        return Object(_Implementation_CustomNodeHierarchyManager_customHostConfigAppendChildImpl__WEBPACK_IMPORTED_MODULE_8__["__customHostConfigAppendChildImpl"])(parentInstance, child);
      };

      _this.__customHostConfigRemoveChild = function (parentInstance, child) {
        return Object(_Implementation_CustomNodeHierarchyManager_customHostConfigRemoveChildImpl__WEBPACK_IMPORTED_MODULE_9__["__customHostConfigRemoveChildImpl"])(parentInstance, child);
      };

      _this.__customHostConfigInsertBefore = function (parentInstance, child, beforeChild) {
        return Object(_Implementation_CustomNodeHierarchyManager_customHostConfigInsertBeforeImpl__WEBPACK_IMPORTED_MODULE_10__["__customHostConfigInsertBeforeImpl"])(parentInstance, child, beforeChild);
      };
      /* unique/ completely custom stuff... */


      _this.onDateChange = function (args) {
        Object(_Implementation_Unique_onDataChangeImpl__WEBPACK_IMPORTED_MODULE_11__["onDataChangeImpl"])(_this, args);
      };

      _this.onSelectedIndexChange = function (args) {
        Object(_Implementation_Unique_onSelectedIndexChangeImpl__WEBPACK_IMPORTED_MODULE_13__["onSelectIndexChangeImpl"])(_this, args);
      };

      return _this;
    }

    Reactify.countOfInstances = 0;
    return Reactify;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  return Reactify; // have to declare class name to make decorators work  // https://github.com/microsoft/TypeScript/issues/7342
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
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_6__);






 // import { Button } from 'tns-core-modules/ui/button/button';

var MyFancyButton =
/** @class */
function (_super) {
  __extends(MyFancyButton, _super);

  function MyFancyButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return MyFancyButton;
}(tns_core_modules_ui_button_button__WEBPACK_IMPORTED_MODULE_5__["Button"]); // const MyButton = Reactified(new Button(), "button");


var MyComponent = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_4__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_6__["ListPicker"]());

var AppContainer =
/** @class */
function (_super) {
  __extends(AppContainer, _super);

  function AppContainer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.pageRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this.myFancyButtonRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this.myDatePickerRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
    _this.myEditableTextBaseRef = react__WEBPACK_IMPORTED_MODULE_1__["createRef"](); // (won't show)

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
      /*
      const myFancyButton = this.myFancyButtonRef.current;
      myFancyButton.backgroundColor = new Color("silver");
      myFancyButton.on("tap", (event) => {
          console.log("tap");
      })
      */

      /*
      const myDatePicker = this.myDatePickerRef.current;
      myDatePicker.backgroundColor = new Color("green");
      myDatePicker.on("tap", (event) => {
          console.log("taaap!");
      })
      */
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
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$StackLayout"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyComponent, {
      width: 200,
      height: 200,
      backgroundColor: new tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_3__["Color"]("gray"),
      items: ["hej", "och", "hå"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnREaWRNb3VudEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnRXaWxsVW5tb3VudEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9yZW5kZXJJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3Qvc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uRGF0YUNoYW5nZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25TZWxlY3RlZEluZGV4Q2hhbmdlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIOzs7Ozs7O0FDaUdBO0FBQ0E7Ozs7Ozs7OztBQzNJQTtBQUFBO0FBQUE7QUFB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RUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1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RkE7QUFHUixxQkFBZSxFQUFFLElBQUkscUVBQUosQ0FBVSxNQUFWLENBSFQ7QUFJUixXQUFLLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLElBQWY7QUFKQyxLQUFaLENBRkEsQ0FISixDQURKLENBREo7QUFpQkgsR0FwQkQ7O0FBcUJKO0FBQUMsQ0F4REQsQ0FBMkIsK0NBQTNCLEUsQ0F5REE7OztBQUNlLGdJQUFHLENBQUMsWUFBRCxDQUFsQixFLENBQWtDLDJFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0V4dHJhUHJvcHMudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkSW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmVJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ0luc2VydEJlZm9yZUltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnUmVtb3ZlQ2hpbGRJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9IZWxwZXJzLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0hlbHBlcnMudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50RGlkTW91bnRJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudERpZE1vdW50SW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnRXaWxsVW5tb3VudEltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50V2lsbFVubW91bnRJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L3JlbmRlckltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3QvcmVuZGVySW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9zaG91bGRDb21wb25lbnRVcGRhdGVJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L3Nob3VsZENvbXBvbmVudFVwZGF0ZUltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVHlwZXMudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVHlwZXMudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uRGF0YUNoYW5nZUltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uRGF0YUNoYW5nZUltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uU2VsZWN0ZWRJbmRleENoYW5nZUltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uU2VsZWN0ZWRJbmRleENoYW5nZUltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vZ2V0Q3VycmVudFJlZkltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vZ2V0Q3VycmVudFJlZkltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi91cGRhdGVMaXN0ZW5lcnNIZWxwZXJJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzXCI6IFwiLi9SZWFjdGlmaWVkL1JlYWN0aWZpZWQudHNcIixcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAudHNcIixcblx0XCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIjogXCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKilcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiXG5pbXBvcnQgeyBFdmVudERhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBEb2NrIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9kb2NrLWxheW91dC9kb2NrLWxheW91dFwiO1xuaW1wb3J0IHsgU2hvd25Nb2RhbGx5RGF0YX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3L3ZpZXdcIjtcbmltcG9ydCB7XG4gICAgR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBHZXN0dXJlVHlwZXMsXG4gICAgVG91Y2hHZXN0dXJlRXZlbnREYXRhLFxuICAgIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEsXG4gICAgUGluY2hHZXN0dXJlRXZlbnREYXRhLFxuICAgIFBhbkdlc3R1cmVFdmVudERhdGEsXG59IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzXCI7XG5cbmltcG9ydCB7IFxuICAgIE9ic2VydmFibGUsXG4gICAgVmlld0Jhc2UsXG4gICAgVmlldyxcbiAgICBQYWdlLFxuICAgIEFjdGlvbkl0ZW0sXG4gICAgRGF0ZVBpY2tlcixcbiAgICBFZGl0YWJsZVRleHRCYXNlLFxuICAgIEZyYW1lLFxuICAgIEdyaWRMYXlvdXQsXG4gICAgSHRtbFZpZXcsXG4gICAgTGlzdFBpY2tlcixcbiAgICBTd2l0Y2gsXG59IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHsgSXRlbVNwZWMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0L2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBJdGVtc1NvdXJjZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyL2xpc3QtcGlja2VyXCI7XG5cblxuLy8gZXhwb3J0IHR5cGUgRXh0cmFQcm9wczxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4gPSBPYnNlcnZhYmxlUHJvcHM8VD4gJiBWaWV3QmFzZVByb3BzPFQ+ICYgVmlld1Byb3BzPFQ+ICYgUGFnZVByb3BzPFQ+ICYgQWN0aW9uSXRlbVByb3BzPFQ+O1xuZXhwb3J0IHR5cGUgRXh0cmFQcm9wczxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4gPSBPYnNlcnZhYmxlUHJvcHM8VD4gJiBWaWV3QmFzZVByb3BzPFQ+ICYgVmlld1Byb3BzPFQ+XG4gJiBQYWdlUHJvcHM8VD4gJiBBY3Rpb25JdGVtUHJvcHM8VD4gJiBEYXRlUGlja2VyUHJvcHM8VD4gJiBFZGl0YWJsZVRleHRCYXNlUHJvcHM8VD4gJiBGcmFtZVByb3BzPFQ+XG4gJiBHcmlkTGF5b3V0UHJvcHM8VD4gJiBIdG1sVmlld1Byb3BzPFQ+ICYgTGlzdFBpY2tlclByb3BzPFQ+O1xuXG4vLyB1c2luZyBjb25kaXRpb25hbCBzbyB0aGF0IFJOU0J1dHRvbiBkb24ndCBnZXQgbmF2aWdhdGVkVG8gKFBhZ2VQcm9wcykgXG5cblxuLyogXG4gU2hvdWxkIGdldCBPYnNlcnZhYmxlUHJvcHNcbiB3aXRoIGdldHRlci9vbmRpdGlvbmFsIHR5cGluZyAtIHNpbmNlIHRoZSBucyBjb21wb25lbnRcbiBtdXN0IGJlIG9mIHR5cGUgT2JzZXJ2YWJsZS4gdXNpbmcgYmVsb3cgY29uaWR0aW9uYWwgdHlwZVxuIGFsc28gY2F1c2UgYW4gdHlwZSBlcnJvciBpbiBnZXRDdXJyZW50UmVmSW1wbFxuICovXG4vLyB0eXBlIE9ic2VydmFibGVQcm9wczxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4gPSBUIGV4dGVuZHMgT2JzZXJ2YWJsZSA/IElPYnNlcnZhYmxlPFQ+IDogRW1wdHlcblxuaW50ZXJmYWNlIE9ic2VydmFibGVQcm9wczxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ge1xuICAgIGVsZW1lbnRLZXk/OiBzdHJpbmcgLy8gYWRkZWRcbiAgICBmb3J3YXJkZWRSZWY/OiBSZWFjdC5SZWZPYmplY3Q8VD47XG4gICAgb25Qcm9wZXJ0eUNoYW5nZT86IChkYXRhOiBFdmVudERhdGEpID0+IHZvaWQ7XG59XG5cbi8qIHJlc3QgaXMgdXNpbmcgY29uZGl0aW9uYWwgdHlwZSBcImdldHRlcnNcIiBzbyB0aGF0IGJ1dHRvbiBkb24ndCBhY2Nlc3MgZ2V0IHBhZ2UncyBwcm9wcyBldGMqL1xuXG50eXBlIFZpZXdCYXNlUHJvcHM8VD4gPSBUIGV4dGVuZHMgVmlld0Jhc2UgPyBJVmlld0Jhc2UgOiBFbXB0eVxuaW50ZXJmYWNlIElWaWV3QmFzZSB7XG4gICAgX19ybnNfX25vZGVUcmVlUm9sZT86IHN0cmluZztcbiAgICBkb2NrPzogRG9jaztcbn1cblxudHlwZSBWaWV3UHJvcHM8VD4gPSBUIGV4dGVuZHMgVmlldyA/IElWaWV3IDogRW1wdHk7XG5pbnRlcmZhY2UgSVZpZXcge1xuICAgIC8qIEZyb20gVmlldy4gKi9cbiAgICBvbkxvYWRlZD86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25VbmxvYWRlZD86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25BbmRyb2lkQmFja1ByZXNzZWQ/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uU2hvd2luZ01vZGFsbHk/OiAoYXJnczogU2hvd25Nb2RhbGx5RGF0YSkgPT4gdm9pZDtcbiAgICBvblNob3duTW9kYWxseT86IChhcmdzOiBTaG93bk1vZGFsbHlEYXRhKSA9PiB2b2lkO1xuXG4gICAgLyogVGhlIGdlc3R1cmUgaGFuZGxlcnMuICovXG4gICAgb25UYXA/OiAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvbkRvdWJsZVRhcD86IChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uUGluY2g/OiAoYXJnczogUGluY2hHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uUGFuPzogKGFyZ3M6IFBhbkdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Td2lwZT86IChhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Sb3RhdGlvbj86IChhcmdzOiBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Mb25nUHJlc3M/OiAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblRvdWNoPzogKGFyZ3M6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcblxuICAgIC8qIFRoZXNlIGFyZSB0byBiZSBvdmVycmlkZGVuIGluIHN1YmNsYXNzZXMgb2YgVmlldywgc28gdW5saWtlbHkgdG8gYmUgYXBwcm9wcmlhdGUuICovXG4gICAgLy8gb25MYXlvdXQ/OiAobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgLy8gb25NZWFzdXJlPzogKHdpZHRoTWVhc3VyZVNwZWM6IG51bWJlciwgaGVpZ2h0TWVhc3VyZVNwZWM6IG51bWJlcikgPT4gdm9pZDtcbn1cblxudHlwZSBQYWdlUHJvcHM8VD4gPSBUIGV4dGVuZHMgUGFnZSA/IElQYWdlIDogRW1wdHlcbmludGVyZmFjZSBJUGFnZSB7XG4gICAgb25OYXZpZ2F0aW5nVG8/OiBQYWdlTmF2aWdhdGlvbkV2ZW50SGFuZGxlcjtcbiAgICBvbk5hdmlnYXRlZFRvPzogUGFnZU5hdmlnYXRpb25FdmVudEhhbmRsZXI7XG4gICAgb25OYXZpZ2F0aW5nRnJvbT86IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyO1xuICAgIG9uTmF2aWdhdGVkRnJvbT86IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyO1xufVxuXG50eXBlIEFjdGlvbkl0ZW1Qcm9wczxUPiA9IFQgZXh0ZW5kcyBBY3Rpb25JdGVtID8gSUFjdGlvbkl0ZW0gOiBFbXB0eVxuaW50ZXJmYWNlIElBY3Rpb25JdGVtIHtcbiAgICBvblRhcD86IChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xufVxuXG50eXBlIERhdGVQaWNrZXJQcm9wczxUPiA9IFQgZXh0ZW5kcyBEYXRlUGlja2VyID8gSURhdGVQaWNrZXIgOiBFbXB0eVxuaW50ZXJmYWNlIElEYXRlUGlja2VyIHtcbiAgICBvbkRhdGVDaGFuZ2U/OiAoZGF0ZTogRGF0ZSkgPT4gdm9pZDtcbn1cbnR5cGUgRWRpdGFibGVUZXh0QmFzZVByb3BzPFQ+PSBUIGV4dGVuZHMgRWRpdGFibGVUZXh0QmFzZSA/IElFZGl0YWJsZVRleHRCYXNlIDogRW1wdHlcbmludGVyZmFjZSBJRWRpdGFibGVUZXh0QmFzZSB7XG4gICAgb25CbHVyPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvbkZvY3VzPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblRleHRDaGFuZ2U/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xufVxudHlwZSBGcmFtZVByb3BzPFQ+ID0gVCBleHRlbmRzIEZyYW1lID8gSUZyYW1lIDogRW1wdHk7XG5pbnRlcmZhY2UgSUZyYW1lIHtcbiAgICBvbk9wdGlvblNlbGVjdGVkPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbn1cbnR5cGUgR3JpZExheW91dFByb3BzPFQ+ID0gVCBleHRlbmRzIEdyaWRMYXlvdXQgPyBJR3JpZExheW91dCA6IEVtcHR5O1xuaW50ZXJmYWNlIElHcmlkTGF5b3V0IHtcbiAgICAvKiBFYWNoIGNvbnN0aXR1ZW50IHZpZXcgcGFzc2VkIGluIG11c3QgYmVhciBcInJvd1wiIGFuZCBcImNvbFwiIFByb3BzLiAqL1xuICAgICAgICAvKiByb3dzIGFuZCBjb2x1bW5zIHdpbGwgYmUgYWRkZWQgaW4gb3JkZXIgc3BlY2lmaWVkLiAqL1xuICAgIHJvd3M/OiBJdGVtU3BlY1tdO1xuICAgIGNvbHVtbnM/OiBJdGVtU3BlY1tdO1xufVxuXG50eXBlIEh0bWxWaWV3UHJvcHM8VD4gPSBUIGV4dGVuZHMgSHRtbFZpZXcgPyBJSHRtbFZpZXcgOiBFbXB0eVxuaW50ZXJmYWNlIElIdG1sVmlldyB7XG4gICAgaHRtbDogc3RyaW5nO1xufVxudHlwZSBMaXN0UGlja2VyUHJvcHM8VD4gPSBUIGV4dGVuZHMgTGlzdFBpY2tlciA/IElMaXN0UGlja2VyIDogRW1wdHk7XG5pbnRlcmZhY2UgSUxpc3RQaWNrZXIge1xuICAgIGl0ZW1zOiBhbnlbXSB8IEl0ZW1zU291cmNlO1xuICAgIG9uU2VsZWN0ZWRJbmRleENoYW5nZT86IChzZWxlY3RlZEluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbi8qIGNvdWxkIGJlIHVzZWQgc2V0IHByb3BzIGZvciBldmVyeSBzaW5nbGUgUk5TIENvbXBvbmVudCovXG5pbnRlcmZhY2UgRW1wdHkge1xuXG59XG5cbi8vIGluc2lkZSBodHRwczovL2dpdGh1Yi5jb20vc2hpcmFrYWJhL3JlYWN0LW5hdGl2ZXNjcmlwdC9ibG9iL21hc3Rlci9yZWFjdC1uYXRpdmVzY3JpcHQvc3JjL2NvbXBvbmVudHMvU3dpdGNoLnRzXG4vLyBjYW4gbGlzdGVuZXIgYmUgYXR0YWNoZWQgdG8gdGhpczpQUk9QUy5vblRvZ2dsZSA/IiwiaW1wb3J0IHsgVGV4dEJhc2UgYXMgTmF0aXZlU2NyaXB0VGV4dEJhc2UsIE9ic2VydmFibGV9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBJbnN0YW5jZSwgVGV4dEluc3RhbmNlIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L3NoYXJlZC9Ib3N0Q29uZmlnVHlwZXNcIjtcbmltcG9ydCB7IEZvcm1hdHRlZFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiXG5leHBvcnQgY29uc3QgX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihwYXJlbnQ6IFQsIGNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZSk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiB0ZXh0QmFzZUltcGwocGFyZW50LCBjaGlsZCk7XG59XG5cbmNvbnN0IHRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ocGFyZW50OiBULCBjaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UpID0+IHtcbiAgICBpZihwYXJlbnQgaW5zdGFuY2VvZiBOYXRpdmVTY3JpcHRUZXh0QmFzZSkge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBGb3JtYXR0ZWRTdHJpbmcpIHtcbiAgICAgICAgICAgIHBhcmVudC5mb3JtYXR0ZWRUZXh0ID0gY2hpbGQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBpLmUuIGRlZmVyIHRvIEhvc3QgQ29uZmlnLlxuICAgIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgeyBUZXh0QmFzZSBhcyBOYXRpdmVTY3JpcHRUZXh0QmFzZSwgT2JzZXJ2YWJsZX0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IEluc3RhbmNlLCBUZXh0SW5zdGFuY2UgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3Qvc2hhcmVkL0hvc3RDb25maWdUeXBlc1wiO1xuaW1wb3J0IHsgRm9ybWF0dGVkU3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCJcblxuXG5leHBvcnQgY29uc3QgX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oXG4gICAgcGFyZW50OiBULFxuICAgIGNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZSxcbiAgICBiZWZvcmVDaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2Vcbik6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiB0ZXh0QmFzZUltcGwocGFyZW50LCBjaGlsZCwgYmVmb3JlQ2hpbGQpO1xufVxuY29uc3QgdGV4dEJhc2VJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihcbiAgICBwYXJlbnQ6IFQsXG4gICAgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlLFxuICAgIGJlZm9yZUNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZVxuKSA6IGJvb2xlYW4gPT4ge1xuICAgIGlmKHBhcmVudCBpbnN0YW5jZW9mIE5hdGl2ZVNjcmlwdFRleHRCYXNlKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEZvcm1hdHRlZFN0cmluZykge1xuICAgICAgICAgICAgcGFyZW50LmZvcm1hdHRlZFRleHQgPSBjaGlsZDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaS5lLiBkZWZlciB0byBIb3N0IENvbmZpZy5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHsgVGV4dEJhc2UgYXMgTmF0aXZlU2NyaXB0VGV4dEJhc2UsIE9ic2VydmFibGV9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBJbnN0YW5jZSwgVGV4dEluc3RhbmNlIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L3NoYXJlZC9Ib3N0Q29uZmlnVHlwZXNcIjtcbmltcG9ydCB7IEZvcm1hdHRlZFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiXG5cbmV4cG9ydCBjb25zdCBfX2N1c3RvbUhvc3RDb25maWdSZW1vdmVDaGlsZEltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KHBhcmVudDogVCwgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIHRleHRCYXNlSW1wbChwYXJlbnQsIGNoaWxkKTtcbn1cblxuY29uc3QgdGV4dEJhc2VJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihwYXJlbnQ6IFQsIGNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZSk6IGJvb2xlYW4gPT4ge1xuICAgIGlmKHBhcmVudCBpbnN0YW5jZW9mIE5hdGl2ZVNjcmlwdFRleHRCYXNlKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEZvcm1hdHRlZFN0cmluZykge1xuICAgICAgICAgICAgcGFyZW50LmZvcm1hdHRlZFRleHQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGkuZS4gZGVmZXIgdG8gSG9zdCBDb25maWcuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IFxuICAgIGVsZW1lbnRNYXAsXG4gICAgQWJzb2x1dGVMYXlvdXQsXG4gICAgQWN0aW9uQmFyLFxuICAgIEFjdGlvbkl0ZW0sXG4gICAgQWN0aXZpdHlJbmRpY2F0b3IsXG4gICAgQW5pbWF0aW9uLFxuICAgIE9ic2VydmFibGVcbn1mcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lT2Yob2JqZWN0OiBPYmplY3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBvYmplY3QuY29uc3RydWN0b3IubmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExldHRlckxvd2VyY2FzZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG59XG5cbmNvbnN0IGltcGxNZXRob2RSZWdpc3RyeTogc3RyaW5nW10gPSBbXTsgXG5jb25zb2xlLmxvZyhcImFsbCBlbGVtZW50cyBpbiBlbGVtZW50IHJlZ2lzdHJ5XCIpXG5mb3IobGV0IGVsZW1lbnROYW1lIGluIGVsZW1lbnRNYXApIHtcbiAgICBpbXBsTWV0aG9kUmVnaXN0cnkucHVzaChlbGVtZW50TmFtZSArIFwiSW1wbFwiKTtcbn1cblxudHlwZSBJbXBsTWV0aG9kID0gKC4uLmFyZ3M6IGFueSkgPT4gYW55XG5leHBvcnQgY29uc3QgZXhlY3V0ZUluT3JkZXIgPSAoaW1wbE1ldGhvZHM6IEltcGxNZXRob2RbXSwgLi4uYXJnczogYW55KSA9PiB7IFxuICAgIGxldCByZXR1cm5WYWx1ZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBsZXQgcnVuID0gdW5kZWZpbmVkO1xuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJnZW5lcmljSW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcIm9ic2VydmFibGVJbXBsXCIpO1xuICAgIGlmKHJ1bikgeyBcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInZpZXdCYXNlSW1wbFwiKTsgLy8gZXh0ZW5kcyBPYnNlcnZhYmxlLi4uXG4gICAgXG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInZpZXdJbXBsXCIpOyAvLyBleHRlbmRzIFZpZXdCYXNlLi4uXG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImFjdGlvbkl0ZW1JbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwicGFnZUltcGxcIikgLy8gZXh0ZW5kcyBWaWV3Li4uXG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJ0ZXh0QmFzZUltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJkYXRlUGlja2VySW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImZyYW1lSW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImh0bWxWaWV3SW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImxpc3RQaWNrZXJJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiYnV0dG9uSW1wbFwiKTsgLy8gZXh0ZW5kcyBUZXh0QmFzZS4uLlxuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwibGFiZWxJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiZWRpdGFibGVUZXh0QmFzZUltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJ0ZXh0RmllbGRJbXBsXCIpOyAvLyBleHRlbmRzIEVkaXRhYmxlVGV4dEJhc2UuLi5cbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59XG5cbmNvbnN0IGhpZXJhcmNoeU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBcIkFic29sdXRlTGF5b3V0XCIgOiBcIkxheW91dEJhc2VcIixcbiAgICBcIkFjdGlvbkJhclwiIDogXCJWaWV3XCIsXG4gICAgXCJBY3Rpb25JdGVtXCIgOiBcIlZpZXdCYXNlXCIsXG4gICAgXCJBY3Rpdml0eUluZGljYXRvclwiIDogXCJWaWV3QmFzZVwiLFxufTsiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIsIExpc3RQaWNrZXIgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudERpZE1vdW50SW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoW29ic2VydmFibGVJbXBsLCBkYXRlUGlja2VySW1wbCwgbGlzdFBpY2tlckltcGxdLCBpbnN0YW5jZSk7XG4gICAgXG59XG5cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJ1cGRhdGVMaXN0ZW5lcnNIZWxwZXJcIikodHJ1ZSk7XG59XG5jb25zdCBkYXRlUGlja2VySW1wbCA9IDxUIGV4dGVuZHMgRGF0ZVBpY2tlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5vbihcImRhdGVDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25EYXRlQ2hhbmdlXCIpKTtcbn1cbmNvbnN0IGxpc3RQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBMaXN0UGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9uKFwic2VsZWN0ZWRJbmRleENoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblNlbGVjdGVkSW5kZXhDaGFuZ2VcIikpO1xufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRGF0ZVBpY2tlciwgTGlzdFBpY2tlciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuXG5cblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudFdpbGxVbm1vdW50SW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoW29ic2VydmFibGVJbXBsLCBkYXRlUGlja2VySW1wbCwgbGlzdFBpY2tlckltcGxdLCBpbnN0YW5jZSk7XG59XG5cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJ1cGRhdGVMaXN0ZW5lcnNIZWxwZXJcIikoZmFsc2UpO1xufVxuY29uc3QgZGF0ZVBpY2tlckltcGwgPSA8VCBleHRlbmRzIERhdGVQaWNrZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIGNvbnN0IG5vZGU6IFQgfCBudWxsID0gUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpO1xuICAgIGlmICghbm9kZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlLm9mZihcImRhdGVDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25EYXRlQ2hhbmdlXCIpKTtcbn1cbmNvbnN0IGxpc3RQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBMaXN0UGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IHRoaXMuZ2V0Q3VycmVudFJlZigpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUub2ZmKFwic2VsZWN0ZWRJbmRleENoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblNlbGVjdGVkSW5kZXhDaGFuZ2VcIikpO1xufSIsIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCdXR0b24sIFRleHRGaWVsZCwgSHRtbFZpZXcsIExhYmVsIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihuYW1lOnN0cmluZywgaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBvYnNlcnZhYmxlOiBUKTogUmVhY3QuUmVhY3ROb2RlID0+IHtcbiAgICByZXR1cm4gZXhlY3V0ZUluT3JkZXIoW2dlbmVyaWNJbXBsLCBidXR0b25JbXBsLCB0ZXh0RmllbGRJbXBsLCBodG1sVmlld0ltcGwsIGxhYmVsSW1wbF0sIG5hbWUsIGluc3RhbmNlLCBvYnNlcnZhYmxlKTtcbn1cbmNvbnN0IGdlbmVyaWNJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihuYW1lOiBzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgb2JzZXJ2YWJsZTogVCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJpYyByZW5kZXJcIik7XG4gICAgY29uc3QgeyBmb3J3YXJkZWRSZWYsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBpbnN0YW5jZS5wcm9wc1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBuYW1lLFxuICAgICAgICB7XG4gICAgICAgIC4uLnJlc3QsXG4gICAgICAgIHJlZjogZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpLFxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICk7XG59XG5cbmNvbnN0IGJ1dHRvbkltcGwgPSAobmFtZTpzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxCdXR0b24+LCBvYnNlcnZhYmxlOiBCdXR0b24pID0+IHtcbiAgICBpZihvYnNlcnZhYmxlIGluc3RhbmNlb2YgQnV0dG9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnV0dG9uSW1wbFwiKTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZm9yd2FyZGVkUmVmLFxuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIGZvcm1hdHRlZFRleHQsXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgfSA9IGluc3RhbmNlLnByb3BzO1xuICAgIFxuICAgICAgICBpZiAodGV4dCAmJiBmb3JtYXR0ZWRUZXh0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEJvdGggdGV4dCBhbmQgZm9ybWF0dGVkVGV4dCBwcm92aWRlZDsgc2hhbGwgdXNlIGZvcm1hdHRlZFRleHQuYCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSB7XG4gICAgICAgICAgICBbZm9ybWF0dGVkVGV4dCA/IFwiZm9ybWF0dGVkVGV4dFwiIDogXCJ0ZXh0XCJdOiBmb3JtYXR0ZWRUZXh0IHx8IHRleHQsXG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmVcIiwgLy8gTmF0aXZlU2NyaXB0IGRlZmF1bHRzIGZyb20gZG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgLi4udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW4gLy8gV2VpcmQgdGhhdCBhIGJ1dHRvbiBtYXkgY29udGFpbiBjaGlsZHJlbiwgYnV0IHdoYXQgZG8gSSBrbm93LlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCB0ZXh0RmllbGRJbXBsID0gKG5hbWU6c3RyaW5nLCBpbnN0YW5jZTogUmVhY3RpZnk8VGV4dEZpZWxkPiwgb2JzZXJ2YWJsZTogVGV4dEZpZWxkKSA9PiB7XG4gICAgaWYob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIFRleHRGaWVsZCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmb3J3YXJkZWRSZWYsXG4gICAgXG4gICAgXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgZm9ybWF0dGVkVGV4dCxcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICB9ID0gaW5zdGFuY2UucHJvcHM7XG4gICAgXG4gICAgICAgIGlmICh0ZXh0ICYmIGZvcm1hdHRlZFRleHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQm90aCB0ZXh0IGFuZCBmb3JtYXR0ZWRUZXh0IHByb3ZpZGVkOyBzaGFsbCB1c2UgZm9ybWF0dGVkVGV4dC5gKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IHtcbiAgICAgICAgICAgIFtmb3JtYXR0ZWRUZXh0ID8gXCJmb3JtYXR0ZWRUZXh0XCIgOiBcInRleHRcIl06IGZvcm1hdHRlZFRleHQgfHwgdGV4dCxcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgLi4udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW4gLy8gV2VpcmQgdGhhdCBhIFRleHRGaWVsZCBtYXkgY29udGFpbiBjaGlsZHJlbiwgYnV0IHdoYXQgZG8gSSBrbm93LlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBodG1sVmlld0ltcGwgPSAobmFtZTpzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxIdG1sVmlldz4sIG9ic2VydmFibGU6IEh0bWxWaWV3KSA9PiB7XG4gICAgaWYob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIEh0bWxWaWV3KSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgIFxuICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICB9ID0gaW5zdGFuY2UucHJvcHM7XG4gICAgXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiSWdub3JpbmcgJ2NoaWxkcmVuJyBwcm9wIG9uIEh0bWxWaWV3OyBub3QgcGVybWl0dGVkXCIpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICAgICAgICAgIHJlZjogZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgbGFiZWxJbXBsID0gKG5hbWU6c3RyaW5nLCBpbnN0YW5jZTogUmVhY3RpZnk8TGFiZWw+LCBvYnNlcnZhYmxlOiBMYWJlbCkgPT4ge1xuICAgIGlmKG9ic2VydmFibGUgaW5zdGFuY2VvZiBMYWJlbCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmb3J3YXJkZWRSZWYsXG4gICAgXG4gICAgICAgICAgICBvbkxvYWRlZCxcbiAgICAgICAgICAgIG9uVW5sb2FkZWQsXG4gICAgICAgICAgICBvbkFuZHJvaWRCYWNrUHJlc3NlZCxcbiAgICAgICAgICAgIG9uU2hvd2luZ01vZGFsbHksXG4gICAgICAgICAgICBvblNob3duTW9kYWxseSxcbiAgICBcbiAgICAgICAgICAgIG9uVGFwLFxuICAgICAgICAgICAgb25Eb3VibGVUYXAsXG4gICAgICAgICAgICBvblBpbmNoLFxuICAgICAgICAgICAgb25QYW4sXG4gICAgICAgICAgICBvblN3aXBlLFxuICAgICAgICAgICAgb25Sb3RhdGlvbixcbiAgICAgICAgICAgIG9uTG9uZ1ByZXNzLFxuICAgICAgICAgICAgb25Ub3VjaCxcbiAgICBcbiAgICAgICAgICAgIG9uUHJvcGVydHlDaGFuZ2UsXG4gICAgXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgZm9ybWF0dGVkVGV4dCxcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICB9ID0gaW5zdGFuY2UucHJvcHM7XG4gICAgXG4gICAgICAgIGlmICh0ZXh0ICYmIGZvcm1hdHRlZFRleHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQm90aCB0ZXh0IGFuZCBmb3JtYXR0ZWRUZXh0IHByb3ZpZGVkOyBzaGFsbCB1c2UgZm9ybWF0dGVkVGV4dC5gKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IHtcbiAgICAgICAgICAgIFtmb3JtYXR0ZWRUZXh0ID8gXCJmb3JtYXR0ZWRUZXh0XCIgOiBcInRleHRcIl06IGZvcm1hdHRlZFRleHQgfHwgdGV4dCxcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgLi4udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW4gLy8gV2VpcmQgdGhhdCBhIExhYmVsIG1heSBjb250YWluIGNoaWxkcmVuLCBidXQgd2hhdCBkbyBJIGtub3cuXG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwifi9SZWFjdGlmaWVkL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IHNoYWxsb3dFcXVhbCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvc2hhbGxvd0VxdWFsXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuXG5cbmV4cG9ydCBjb25zdCBzaG91bGRDb21wb25lbnRVcGRhdGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5leHRQcm9wczogVCAmIEV4dHJhUHJvcHM8VD4sIG5leHRTdGF0ZTogYW55KTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVJbXBsKGluc3RhbmNlLCBuZXh0UHJvcHMsIG5leHRTdGF0ZSk7XG59XG5jb25zdCBvYnNlcnZhYmxlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBuZXh0UHJvcHM6IFQgJiBFeHRyYVByb3BzPFQ+LCBuZXh0U3RhdGU6IGFueSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGBPYnNlcnZhYmxlJ3Mgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCk7XG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlOiBib29sZWFuID0gIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhgW3Nob3VsZENvbXBvbmVudFVwZGF0ZV0gc2hvdWxkVXBkYXRlOiAke3Nob3VsZFVwZGF0ZX0uYCk7XG4gICAgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwidXBkYXRlTGlzdGVuZXJzSGVscGVyXCIpKG51bGwsIG5leHRQcm9wcyk7XG4gICAgLy8gaHR0cHM6Ly9sdWN5YmFpbi5jb20vYmxvZy8yMDE4L3JlYWN0LWpzLXB1cmUtY29tcG9uZW50L1xuICAgIHJldHVybiBzaG91bGRVcGRhdGU7XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgVmlld0Jhc2UsIFZpZXcsIFBhZ2UgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgRXh0cmFQcm9wcyB9IGZyb20gXCIuLi9FeHRyYVByb3BzXCI7XG5cbmV4cG9ydCB0eXBlIFJlYWN0aWZ5PFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiA9IFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPiwgYW55PjtcblxuZXhwb3J0IHR5cGUgUHJvcHM8VCBleHRlbmRzIE9ic2VydmFibGU+ID0gVCAmIEV4dHJhUHJvcHM8VD47XG5cblxuLypcbmV4cG9ydCB0eXBlIE9ic2VydmFibGU8VD4gPSBUIGV4dGVuZHMgT2JzZXJ2YWJsZSA/IFJlYWN0aWZ5PE9ic2VydmFibGU+IDogRW1wdHlcblxuZXhwb3J0IHR5cGUgVmlld0Jhc2U8VD4gPSBUIGV4dGVuZHMgVmlld0Jhc2UgPyBSZWFjdGlmeTxWaWV3QmFzZT4gOiBFbXB0eTtcblxuZXhwb3J0IHR5cGUgVmlldzxUPiA9IFQgZXh0ZW5kcyBWaWV3ID8gUmVhY3RpZnk8Vmlldz4gOiBFbXB0eTtcblxuaW50ZXJmYWNlIEVtcHR5IHtcblxufVxuKi9cbi8qXG5leHBvcnQgY29uc3QgdHJ5Q2FzdCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgaWYoKGluc3RhbmNlLnByb3BzKSBhcyBQcm9wczxUPikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIldhcyBpbnN0YW5jZVwiKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIldhcyBub3QgaW5zdGFuY2VcIik7XG4gICAgcmV0dXJuIG51bGw7XG59XG4qL1xuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTczOTIzNDkvaG93LWNhbi1pLWNoZWNrLWlmLWVsZW1lbnQtaXMtYW4taW5zdGFuY2VvZi11XG4vKlxuZXhwb3J0IGZ1bmN0aW9uIHRyeUNhc3Q8VD4oaW5zdGFuY2U6IGFueSkge1xuICAgIGlmKGluc3RhbmNlIGluc3RhbmNlb2YgVCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndhc1wiKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIndhcyBub3RcIik7XG4gICAgcmV0dXJuIG51bGw7XG59XG4qL1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzUzMzM3NC9jb21wYXJlLXR5cGVzLWluLWdlbmVyaWMtZnVuY3Rpb24tdXNpbmctdHlwZXNjcmlwdFxuLy8gaGVscGVyIG1ldGhvZCB0byBiZSBhYmxlIHRvIGNhc3QgUmVhY3RpZnk8T2JzZXJ2YWJsZT4gdG8gUmVhY3RpZnk8Vmlldz4gIGV0Y1xuXG5cbi8vIGhlbHBlciBtZXRob2QgdG8gYmUgYWJsZSB0byBjYXN0IFJlYWN0aWZ5PE9ic2VydmFibGU+IHRvIFJlYWN0aWZ5PFZpZXc+ICBldGMgXG5leHBvcnQgY29uc3QgdHJ5Q2FzdCA9IDxUPihwYXJhbWV0ZXI6IGFueSkgPT4ge1xuICAgIHJldHVybiBwYXJhbWV0ZXIgYXMgVDtcbn1cbiIsIlxuaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IG9uRGF0YUNoYW5nZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXJnczogRXZlbnREYXRhICkgPT4ge1xuICAgIGV4ZWN1dGVJbk9yZGVyKFtkYXRlUGlja2VySW1wbF0sIGluc3RhbmNlLCBhcmdzKTtcbn1cblxuY29uc3QgZGF0ZVBpY2tlckltcGwgPSA8VCBleHRlbmRzIERhdGVQaWNrZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgY29uc3QgZGF0ZTogRGF0ZSA9ICg8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdCkuZGF0ZTtcbiAgICBpbnN0YW5jZS5wcm9wcy5vbkRhdGVDaGFuZ2UgJiYgaW5zdGFuY2UucHJvcHMub25EYXRlQ2hhbmdlKGRhdGUpO1xufVxuIiwiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIExpc3RQaWNrZXIgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IG9uU2VsZWN0SW5kZXhDaGFuZ2VJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIGV4ZWN1dGVJbk9yZGVyKFtsaXN0UGlja2VySW1wbF0sIGluc3RhbmNlLCBhcmdzKTtcbn1cbmNvbnN0IGxpc3RQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBMaXN0UGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXg6IG51bWJlciA9ICg8TGlzdFBpY2tlcj5hcmdzLm9iamVjdCkuc2VsZWN0ZWRJbmRleDtcbiAgICBpbnN0YW5jZS5wcm9wcy5vblNlbGVjdGVkSW5kZXhDaGFuZ2UgJiYgaW5zdGFuY2UucHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlKHNlbGVjdGVkSW5kZXgpO1xufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbi8vIGltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwiLi4vRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi9UeXBlc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UmVmSW1wbCA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPik6IFQgfCBudWxsIHtcbiAgICBjb25zdCByZWYgPSAoaW5zdGFuY2UucHJvcHMuZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpKS5jdXJyZW50O1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0Q3VycmVudFJlZkltcGw6IFwiICsgcmVmKTtcbiAgICByZXR1cm4gcmVmO1xufVxuXG5cblxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcbi8vIGltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuLypcbmV4cG9ydCBjb25zdCBvYnNlcnZhYmxlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPj4sIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFApID0+IHtcbiAgICBcbn1cbiovXG5leHBvcnQgY29uc3QgdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIG9ic2VydmFibGVJbXBsKGluc3RhbmNlLCBhdHRhY2gsIG5leHRQcm9wcyk7XG59XG5cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcInVwZGF0ZUxpc3RlbmVyc1wiKShub2RlLCBhdHRhY2gsIG5leHRQcm9wcyk7XG59IiwiXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgVmlldywgUGFnZSwgQWN0aW9uSXRlbSwgRWRpdGFibGVUZXh0QmFzZSwgRnJhbWUgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuXG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IHVwZGF0ZUxpc3RlbmVyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FdmVudEhhbmRsaW5nXCI7XG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgdHJ5Q2FzdCwgUHJvcHMsIFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4vSGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGlzdGVuZXJzSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+ICxub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBQcm9wczxUPikgPT4ge1xuICAgIFxuICAgIC8qIGltcGxlbWVudGF0aW9uIGZvciBhbnkgcm5zIGNvbXBvbmVudCBoZXJlIC0gb3Igb24gcmVhY3RpZnkgY2xhc3MgYm9keSovXG4gICAgZXhlY3V0ZUluT3JkZXIoW3BhZ2VJbXBsLCB2aWV3SW1wbCwgb2JzZXJ2YWJsZUltcGwsIGFjdGlvbkl0ZW1JbXBsLCBlZGl0YWJsZVRleHRCYXNlSW1wbCwgZnJhbWVJbXBsXSwgaW5zdGFuY2UsIG5vZGUsIGF0dGFjaCk7XG59XG5cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8T2JzZXJ2YWJsZT4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJvYnNlcnZhYmxlSW1wbFwiKTtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwicHJvcGVydHlDaGFuZ2VcIiwgaW5zdGFuY2UucHJvcHMub25Qcm9wZXJ0eUNoYW5nZSwgbmV4dFByb3BzLm9uUHJvcGVydHlDaGFuZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblByb3BlcnR5Q2hhbmdlKSBtZXRob2QoXCJwcm9wZXJ0eUNoYW5nZVwiLCBpbnN0YW5jZS5wcm9wcy5vblByb3BlcnR5Q2hhbmdlKTtcbiAgICB9XG4gICAgXG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaGlyYWthYmEvcmVhY3QtbmF0aXZlc2NyaXB0L2Jsb2IvbWFzdGVyL3JlYWN0LW5hdGl2ZXNjcmlwdC9zcmMvY29tcG9uZW50cy9WaWV3LnRzXG5jb25zdCB2aWV3SW1wbCA9IDxUIGV4dGVuZHMgVmlldz4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJsb2FkZWRcIiwgaW5zdGFuY2UucHJvcHMub25Mb2FkZWQsIG5leHRQcm9wcy5vbkxvYWRlZCk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwidW5sb2FkZWRcIiwgaW5zdGFuY2UucHJvcHMub25VbmxvYWRlZCwgbmV4dFByb3BzLm9uVW5sb2FkZWQpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcImFuZHJvaWRCYWNrUHJlc3NlZFwiLCBpbnN0YW5jZS5wcm9wcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCwgbmV4dFByb3BzLm9uQW5kcm9pZEJhY2tQcmVzc2VkKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJzaG93aW5nTW9kYWxseVwiLCBpbnN0YW5jZS5wcm9wcy5vblNob3dpbmdNb2RhbGx5LCBuZXh0UHJvcHMub25TaG93aW5nTW9kYWxseSk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwic2hvd25Nb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd25Nb2RhbGx5LCBuZXh0UHJvcHMub25TaG93bk1vZGFsbHkpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMudGFwLCBpbnN0YW5jZS5wcm9wcy5vblRhcCwgbmV4dFByb3BzLm9uVGFwLCBcInRhcFwiKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLmRvdWJsZVRhcCwgaW5zdGFuY2UucHJvcHMub25Eb3VibGVUYXAsIG5leHRQcm9wcy5vbkRvdWJsZVRhcCwgXCJkb3VibGVUYXBcIik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5waW5jaCwgaW5zdGFuY2UucHJvcHMub25QaW5jaCwgbmV4dFByb3BzLm9uUGluY2gsIFwicGluY2hcIik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5wYW4sIGluc3RhbmNlLnByb3BzLm9uUGFuLCBuZXh0UHJvcHMub25QYW4sIFwicGFuXCIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMuc3dpcGUsIGluc3RhbmNlLnByb3BzLm9uU3dpcGUsIG5leHRQcm9wcy5vblN3aXBlLCBcInN3aXBlXCIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMucm90YXRpb24sIGluc3RhbmNlLnByb3BzLm9uUm90YXRpb24sIG5leHRQcm9wcy5vblJvdGF0aW9uLCBcInJvdGF0aW9uXCIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMubG9uZ1ByZXNzLCBpbnN0YW5jZS5wcm9wcy5vbkxvbmdQcmVzcywgbmV4dFByb3BzLm9uTG9uZ1ByZXNzLCBcImxvbmdQcmVzc1wiKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLnRvdWNoLCBpbnN0YW5jZS5wcm9wcy5vblRvdWNoLCBuZXh0UHJvcHMub25Ub3VjaCwgXCJ0b3VjaFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25Mb2FkZWQpIG1ldGhvZChcImxvYWRlZFwiLCBpbnN0YW5jZS5wcm9wcy5vbkxvYWRlZCk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblVubG9hZGVkKSBtZXRob2QoXCJ1bmxvYWRlZFwiLCBpbnN0YW5jZS5wcm9wcy5vblVubG9hZGVkKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uQW5kcm9pZEJhY2tQcmVzc2VkKSBtZXRob2QoXCJhbmRyb2lkQmFja1ByZXNzZWRcIiwgaW5zdGFuY2UucHJvcHMub25BbmRyb2lkQmFja1ByZXNzZWQpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TaG93aW5nTW9kYWxseSkgbWV0aG9kKFwic2hvd2luZ01vZGFsbHlcIiwgaW5zdGFuY2UucHJvcHMub25TaG93aW5nTW9kYWxseSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNob3duTW9kYWxseSkgbWV0aG9kKFwic2hvd25Nb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd25Nb2RhbGx5KTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uVGFwKSBtZXRob2QoR2VzdHVyZVR5cGVzLnRhcCwgaW5zdGFuY2UucHJvcHMub25UYXApO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25Eb3VibGVUYXApIG1ldGhvZChHZXN0dXJlVHlwZXMuZG91YmxlVGFwLCBpbnN0YW5jZS5wcm9wcy5vbkRvdWJsZVRhcCk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblBpbmNoKSBtZXRob2QoR2VzdHVyZVR5cGVzLnBpbmNoLCBpbnN0YW5jZS5wcm9wcy5vblBpbmNoKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uUGFuKSBtZXRob2QoR2VzdHVyZVR5cGVzLnBhbiwgaW5zdGFuY2UucHJvcHMub25QYW4pO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25Td2lwZSkgbWV0aG9kKEdlc3R1cmVUeXBlcy5zd2lwZSwgaW5zdGFuY2UucHJvcHMub25Td2lwZSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblJvdGF0aW9uKSBtZXRob2QoR2VzdHVyZVR5cGVzLnJvdGF0aW9uLCBpbnN0YW5jZS5wcm9wcy5vblJvdGF0aW9uKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uTG9uZ1ByZXNzKSBtZXRob2QoR2VzdHVyZVR5cGVzLmxvbmdQcmVzcywgaW5zdGFuY2UucHJvcHMub25Mb25nUHJlc3MpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25Ub3VjaCkgbWV0aG9kKEdlc3R1cmVUeXBlcy50b3VjaCwgaW5zdGFuY2UucHJvcHMub25Ub3VjaCk7XG4gICAgfVxufVxuXG5jb25zdCBhY3Rpb25JdGVtSW1wbCA9IDxUIGV4dGVuZHMgQWN0aW9uSXRlbT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiYWN0aW9uSXRlbSB0cnkgY2FzdDogXCIgKyBpbnN0YW5jZSBhcyBBY3Rpb25JdGVtKTtcbiAgICBjb25zb2xlLmxvZyhcImFjdGlvbkl0ZW1JbXBsXCIpXG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInRhcFwiLCBpbnN0YW5jZS5wcm9wcy5vblRhcCwgbmV4dFByb3BzLm9uVGFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25UYXApIG1ldGhvZChcInRhcFwiLCBpbnN0YW5jZS5wcm9wcy5vblRhcCk7XG4gICAgfVxufVxuY29uc3QgcGFnZUltcGwgPSA8VCBleHRlbmRzIFBhZ2U+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInBhZ2VJbXBsXCIpO1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJuYXZpZ2F0ZWRGcm9tXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkRnJvbSwgbmV4dFByb3BzLm9uTmF2aWdhdGVkRnJvbSk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibmF2aWdhdGVkVG9cIiwgaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0ZWRUbywgbmV4dFByb3BzLm9uTmF2aWdhdGVkVG8pO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcIm5hdmlnYXRpbmdGcm9tXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ0Zyb20sIG5leHRQcm9wcy5vbk5hdmlnYXRpbmdGcm9tKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJuYXZpZ2F0aW5nVG9cIiwgaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nVG8sIG5leHRQcm9wcy5vbk5hdmlnYXRpbmdUbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZEZyb20pIG1ldGhvZChcIm5hdmlnYXRlZEZyb21cIiwgaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0ZWRGcm9tKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkVG8pIG1ldGhvZChcIm5hdmlnYXRlZFRvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkVG8pO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nRnJvbSkgbWV0aG9kKFwibmF2aWdhdGluZ0Zyb21cIiwgaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nRnJvbSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdUbykgbWV0aG9kKFwibmF2aWdhdGluZ1RvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ1RvKTtcbiAgICB9XG59XG5cbmNvbnN0IGVkaXRhYmxlVGV4dEJhc2VJbXBsID0gPFQgZXh0ZW5kcyBFZGl0YWJsZVRleHRCYXNlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcImJsdXJcIiwgaW5zdGFuY2UucHJvcHMub25CbHVyLCBuZXh0UHJvcHMub25CbHVyKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJmb2N1c1wiLCBpbnN0YW5jZS5wcm9wcy5vbkZvY3VzLCBuZXh0UHJvcHMub25Gb2N1cyk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwidGV4dENoYW5nZVwiLCBpbnN0YW5jZS5wcm9wcy5vblRleHRDaGFuZ2UsIG5leHRQcm9wcy5vblRleHRDaGFuZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkJsdXIpIG1ldGhvZChcImJsdXJcIiwgaW5zdGFuY2UucHJvcHMub25CbHVyKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uRm9jdXMpIG1ldGhvZChcImZvY3VzXCIsIGluc3RhbmNlLnByb3BzLm9uRm9jdXMpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25UZXh0Q2hhbmdlKSBtZXRob2QoXCJ0ZXh0Q2hhbmdlXCIsIGluc3RhbmNlLnByb3BzLm9uVGV4dENoYW5nZSk7XG4gICAgfVxufVxuY29uc3QgZnJhbWVJbXBsID0gPFQgZXh0ZW5kcyBGcmFtZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJvcHRpb25TZWxlY3RlZFwiLCBpbnN0YW5jZS5wcm9wcy5vbk9wdGlvblNlbGVjdGVkLCBuZXh0UHJvcHMub25PcHRpb25TZWxlY3RlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25PcHRpb25TZWxlY3RlZCkgbWV0aG9kKFwib3B0aW9uU2VsZWN0ZWRcIiwgaW5zdGFuY2UucHJvcHMub25PcHRpb25TZWxlY3RlZCk7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IHJlZ2lzdGVyLCBDb250ZW50VmlldyB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBuYW1lT2YsIGZpcnN0TGV0dGVyTG93ZXJjYXNlIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vSGVscGVyc1wiO1xuaW1wb3J0IHsgcmVuZGVySW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1JlYWN0L3JlbmRlckltcGxcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRSZWZJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vZ2V0Q3VycmVudFJlZkltcGxcIjtcbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwiLi9FeHRyYVByb3BzXCI7XG5pbXBvcnQgeyB1cGRhdGVMaXN0ZW5lcnNJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSW1wbFwiO1xuaW1wb3J0IHsgY29tcG9uZW50RGlkTW91bnRJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50RGlkTW91bnRJbXBsXCI7XG5pbXBvcnQgeyBzaG91bGRDb21wb25lbnRVcGRhdGVJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vUmVhY3Qvc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbFwiO1xuaW1wb3J0IHsgY29tcG9uZW50V2lsbFVubW91bnRJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50V2lsbFVubW91bnRJbXBsXCI7XG5pbXBvcnQgeyBfX2N1c3RvbUhvc3RDb25maWdBcHBlbmRDaGlsZEltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdBcHBlbmRDaGlsZEltcGxcIjtcbmltcG9ydCB7IF9fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbFwiO1xuaW1wb3J0IHsgX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ0luc2VydEJlZm9yZUltcGxcIjtcbmltcG9ydCB7IG9uRGF0YUNoYW5nZUltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25EYXRhQ2hhbmdlSW1wbFwiO1xuaW1wb3J0IHsgQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3Qvc2hhcmVkL0hvc3RDb25maWdUeXBlc1wiO1xuaW1wb3J0IHsgdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0hlbHBlckltcGxcIjtcbmltcG9ydCB7IG9uU2VsZWN0SW5kZXhDaGFuZ2VJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vVW5pcXVlL29uU2VsZWN0ZWRJbmRleENoYW5nZUltcGxcIjtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBSZWFjdGlmaWVkPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihvYnNlcnZhYmxlOiBULCBuYW1lPzogc3RyaW5nKSB7IFxuXG4gICAgaWYoIW5hbWUpIHtcbiAgICAgICAgbmFtZSA9IGZpcnN0TGV0dGVyTG93ZXJjYXNlKG5hbWVPZihvYnNlcnZhYmxlKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJpbmcgXCIgKyBuYW1lKTtcbiAgICByZWdpc3RlcihuYW1lLCAoKSA9PiB7XG4gICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfSk7XG4gICAgLy8gbGV0IHNlbGY6IFJlYWN0aWZ5ID0gbnVsbDtcbiAgICBjbGFzcyBSZWFjdGlmeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPiwgYW55PiBpbXBsZW1lbnRzIEN1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyPFQ+IHtcbiAgICAgICAgc3RhdGljIGNvdW50T2ZJbnN0YW5jZXMgPSAwO1xuICAgICAgICAvLyBzdGF0aWMgZGVmYXVsdFByb3BzID0gey4uLiBvYnNlcnZhYmxlIH0gXG4gICAgICAgIC8qXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUICYgRXh0cmFQcm9wczxUPikge1xuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgUmVhY3RpZnkuY291bnRPZkluc3RhbmNlcyArKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uc3RydWN0aW5nIGluc3RhbmNlIFwiICsgUmVhY3RpZnkuY291bnRPZkluc3RhbmNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IG15UmVmOiBSZWFjdC5SZWZPYmplY3Q8VD4gPSBSZWFjdC5jcmVhdGVSZWY8VD4oKTtcbiAgICAgICAgcHJvdGVjdGVkIGdldEN1cnJlbnRSZWYgPSAoKTogVCB8IG51bGwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLmZvcndhcmRlZFJlZiB8fCB0aGlzLm15UmVmKS5jdXJyZW50O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAqIEhlbHBlciBtZXRob2QgZm9yIHVwZGF0ZUxpc3RlbmVyczogc2ltcGx5IGdldHMgdGhlIGN1cnJlbnQgcmVmIHRvIHBhc3Mgb24gdG8gaXQuXG4gICAgICAgICogQHBhcmFtIGF0dGFjaCB0cnVlOiBhdHRhY2g7IGZhbHNlOiBkZXRhY2g7IG51bGw6IHVwZGF0ZVxuICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlTGlzdGVuZXJzSGVscGVyID0gKGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KTogdm9pZCAgPT4ge1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbCh0aGlzLCBhdHRhY2gsIG5leHRQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICpcbiAgICAgICAgKiBAcGFyYW0gYXR0YWNoIHRydWU6IGF0dGFjaDsgZmFsc2U6IGRldGFjaDsgbnVsbDogdXBkYXRlXG4gICAgICAgICovXG4gICAgXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVMaXN0ZW5lcnMgPSAobm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyc0ltcGwodGhpcywgbm9kZSwgYXR0YWNoLCBuZXh0UHJvcHMpOyAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnREaWRNb3VudEltcGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICogUHVyZUNvbXBvbmVudCdzIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIG1ldGhvZCBpcyBpZ25vcmVkIGFuZCByZXBsYWNlZCB3aXRoIGEgc2hhbGxvd0VxdWFsKClcbiAgICAgICAgKiBjb21wYXJpc29uIG9mIHByb3BzIGFuZCBzdGF0ZS4gV2UnbGwgaW1wbGVtZW50IG91ciBDb21wb25lbnQncyBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB0b1xuICAgICAgICAqIG1hdGNoIHRoZSB3YXkgUHVyZUNvbXBvbmVudCBpcyBoYW5kbGVkLlxuICAgICAgICAqL1xuICAgICAgICBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAobmV4dFByb3BzOiBUICYgRXh0cmFQcm9wczxUPiwgbmV4dFN0YXRlOiBhbnkpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzaG91bGRDb21wb25lbnRVcGRhdGVJbXBsKHRoaXMsIG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlTGlzdGVuZXJzSGVscGVyKGZhbHNlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50SW1wbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVuZGVyID0gKCk6IFJlYWN0LlJlYWN0Tm9kZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVySW1wbChuYW1lLCB0aGlzLCBvYnNlcnZhYmxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9fSW1wbGVtZW50c0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyX186IHRydWU7XG4gICAgICAgIF9fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkPyA9IChwYXJlbnRJbnN0YW5jZTogVCwgY2hpbGQ6IE9ic2VydmFibGUgfCBpbXBvcnQoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtYmFzZS90ZXh0LWJhc2VcIikuVGV4dEJhc2UpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBfX2N1c3RvbUhvc3RDb25maWdBcHBlbmRDaGlsZEltcGwocGFyZW50SW5zdGFuY2UsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBfX2N1c3RvbUhvc3RDb25maWdSZW1vdmVDaGlsZD8gPSAocGFyZW50SW5zdGFuY2U6IFQsIGNoaWxkOiBPYnNlcnZhYmxlIHwgaW1wb3J0KFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWJhc2UvdGV4dC1iYXNlXCIpLlRleHRCYXNlKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gX19jdXN0b21Ib3N0Q29uZmlnUmVtb3ZlQ2hpbGRJbXBsKHBhcmVudEluc3RhbmNlLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlPz0gKHBhcmVudEluc3RhbmNlOiBULCBjaGlsZDogT2JzZXJ2YWJsZSB8IGltcG9ydChcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1iYXNlL3RleHQtYmFzZVwiKS5UZXh0QmFzZSwgYmVmb3JlQ2hpbGQ6IE9ic2VydmFibGUgfCBpbXBvcnQoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtYmFzZS90ZXh0LWJhc2VcIikuVGV4dEJhc2UpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBfX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmVJbXBsKHBhcmVudEluc3RhbmNlLCBjaGlsZCwgYmVmb3JlQ2hpbGQpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8qIHVuaXF1ZS8gY29tcGxldGVseSBjdXN0b20gc3R1ZmYuLi4gKi9cbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBvbkRhdGVDaGFuZ2UgPSAoYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICBvbkRhdGFDaGFuZ2VJbXBsKHRoaXMsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG9uU2VsZWN0ZWRJbmRleENoYW5nZSA9IChhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIG9uU2VsZWN0SW5kZXhDaGFuZ2VJbXBsKHRoaXMsIGFyZ3MpXG4gICAgICAgIH07XG5cbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0aWZ5O1xuICAgICAvLyBoYXZlIHRvIGRlY2xhcmUgY2xhc3MgbmFtZSB0byBtYWtlIGRlY29yYXRvcnMgd29yayAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy83MzQyXG59XG5cblxuLy8gUmVhY3QuQ29tcG9uZW50PFQgJiBFeHRyYVByb3BzPFQ+XG5cbi8qIFxuLy8gQXJlIG5vdCBhY3R1YWxseSBuZWVkZWQgPyFcbmZ1bmN0aW9uIEpTWDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ob2JzZXJ2YWJsZTogbmV3KC4uLmFyZ3M6IGFueVtdKSA9PiBSZWFjdC5Db21wb25lbnQ8VCAmIEV4dHJhUHJvcHM8VD4+KSB7XG4gICAgcmV0dXJuIFJlYWN0LmZvcndhcmRSZWY8VCwgUHJvcHNXaXRob3V0Rm9yd2FyZGVkUmVmPFQgJiBFeHRyYVByb3BzPFQ+Pj4oXG4gICAgICAgIChwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHNXaXRob3V0Rm9yd2FyZGVkUmVmPFQgJiBFeHRyYVByb3BzPFQ+Pj4sIHJlZjogUmVhY3QuUmVmT2JqZWN0PFQ+KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIG9ic2VydmFibGVcbiAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICAgICAgICAgICAgICBmb3J3YXJkZWRSZWY6IHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgKVxufVxuKi9cblxuXG5cbi8vIGV4cG9ydCBjb25zdCBNeU9ic2VydmFibGU6IFJlYWN0LkNvbXBvbmVudFR5cGU8UHJvcHNXaXRob3V0Rm9yd2FyZGVkUmVmPE9ic2VydmFibGU+ICYgRXh0cmFQcm9wczxPYnNlcnZhYmxlPj4gJiBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8T2JzZXJ2YWJsZT4gPSBKU1gobmV3IE9ic2VydmFibGUoKSk7XG4vLyBleHBvcnQgY29uc3QgTXlCdXR0b24gPSBKU1gobmV3IEJ1dHRvbigpKTtcbi8vIGV4cG9ydCBjb25zdCBNeUNvbnRlbnRWaWV3OiBSZWFjdC5Db21wb25lbnRUeXBlPFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxDb250ZW50VmlldyAmIEV4dHJhUHJvcHM8Q29udGVudFZpZXc+Pj4gJiBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8Q29udGVudFZpZXc+ID0gSlNYKG5ldyBDb250ZW50VmlldygpKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxuICogVGhlbWUgdmFyaWFibGVzIG92ZXJyaWRlc1xcbioqL1xcbi8qKlxcclxcbiAqIENvbG9yIGNsYXNzZXNcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5jLWdyZXl7Y29sb3I6I2UwZTBlMH0uYy1iZy1ncmV5e2JhY2tncm91bmQtY29sb3I6I2UwZTBlMH1cXHJcXG4qKi9cXG4uYy13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1ibGFjayB7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbi5jLWJnLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1hcXVhIHtcXG4gIGNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmctYXF1YSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmx1ZSB7XFxuICBjb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWJnLWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWNoYXJjb2FsIHtcXG4gIGNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYmctY2hhcmNvYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJyb3duIHtcXG4gIGNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtYmctYnJvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWZvcmVzdCB7XFxuICBjb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWJnLWZvcmVzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtZ3JleSB7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWJnLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWdyZXktbGlnaHQge1xcbiAgY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1iZy1ncmV5LWxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1ncmV5LWRhcmsge1xcbiAgY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1iZy1ncmV5LWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLXB1cnBsZSB7XFxuICBjb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWJnLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtbGVtb24ge1xcbiAgY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1iZy1sZW1vbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtbGltZSB7XFxuICBjb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLWJnLWxpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLW9yYW5nZSB7XFxuICBjb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLWJnLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtcnVieSB7XFxuICBjb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLWJnLXJ1Ynkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLXNreSB7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcblxcbi5jLWJnLXNreSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLyogV2lkdGgvSGVpZ2h0ICovXFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwOyB9XFxuXFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uaC0xMDAge1xcbiAgaGVpZ2h0OiAxMDA7IH1cXG5cXG4vKipcXHJcXG4gKiBNYXJnaW4gYW5kIFBhZGRpbmdcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5tLTB7bWFyZ2luOjB9Lm0tdC0we21hcmdpbi10b3A6MH0ubS1yLTB7bWFyZ2luLXJpZ2h0OjB9Lm0tYi0we21hcmdpbi1ib3R0b206MH0ubS1sLTB7bWFyZ2luLWxlZnQ6MH0ubS14LTB7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MH0ubS15LTB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXHJcXG4gKiBTYW1lIGZvciBQYWRkaW5nICh1c2luZyB0aGUgJ3AnIGFiYnJldmlhdGlvbilcXHJcXG4gKiBGcm9tIDAsIDIsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMFxcclxcbioqL1xcbi5tLTAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLm0tdC0wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ubS1yLTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLm0tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS1sLTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS14LTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS15LTAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS0yIHtcXG4gIG1hcmdpbjogMjsgfVxcblxcbi5tLXQtMiB7XFxuICBtYXJnaW4tdG9wOiAyOyB9XFxuXFxuLm0tci0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjsgfVxcblxcbi5tLWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tbC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teC0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teS0yIHtcXG4gIG1hcmdpbi10b3A6IDI7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tNCB7XFxuICBtYXJnaW46IDQ7IH1cXG5cXG4ubS10LTQge1xcbiAgbWFyZ2luLXRvcDogNDsgfVxcblxcbi5tLXItNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7IH1cXG5cXG4ubS1iLTQge1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLWwtNCB7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXgtNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXktNCB7XFxuICBtYXJnaW4tdG9wOiA0O1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLTUge1xcbiAgbWFyZ2luOiA1OyB9XFxuXFxuLm0tdC01IHtcXG4gIG1hcmdpbi10b3A6IDU7IH1cXG5cXG4ubS1yLTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1OyB9XFxuXFxuLm0tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS1sLTUge1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS14LTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1O1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS15LTUge1xcbiAgbWFyZ2luLXRvcDogNTtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS04IHtcXG4gIG1hcmdpbjogODsgfVxcblxcbi5tLXQtOCB7XFxuICBtYXJnaW4tdG9wOiA4OyB9XFxuXFxuLm0tci04IHtcXG4gIG1hcmdpbi1yaWdodDogODsgfVxcblxcbi5tLWItOCB7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tbC04IHtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teC04IHtcXG4gIG1hcmdpbi1yaWdodDogODtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teS04IHtcXG4gIG1hcmdpbi10b3A6IDg7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tMTAge1xcbiAgbWFyZ2luOiAxMDsgfVxcblxcbi5tLXQtMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4ubS1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7IH1cXG5cXG4ubS1iLTEwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tbC0xMCB7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS14LTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS15LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS0xMiB7XFxuICBtYXJnaW46IDEyOyB9XFxuXFxuLm0tdC0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjsgfVxcblxcbi5tLXItMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjsgfVxcblxcbi5tLWItMTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS1sLTEyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXgtMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXktMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLTE1IHtcXG4gIG1hcmdpbjogMTU7IH1cXG5cXG4ubS10LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1OyB9XFxuXFxuLm0tci0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1OyB9XFxuXFxuLm0tYi0xNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLWwtMTUge1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teC0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teS0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tMTYge1xcbiAgbWFyZ2luOiAxNjsgfVxcblxcbi5tLXQtMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7IH1cXG5cXG4ubS1yLTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7IH1cXG5cXG4ubS1iLTE2IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tbC0xNiB7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS14LTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS15LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS0yMCB7XFxuICBtYXJnaW46IDIwOyB9XFxuXFxuLm0tdC0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDsgfVxcblxcbi5tLXItMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDsgfVxcblxcbi5tLWItMjAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS1sLTIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXgtMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXktMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLTI0IHtcXG4gIG1hcmdpbjogMjQ7IH1cXG5cXG4ubS10LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0OyB9XFxuXFxuLm0tci0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0OyB9XFxuXFxuLm0tYi0yNCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLWwtMjQge1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teC0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0O1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teS0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tMjUge1xcbiAgbWFyZ2luOiAyNTsgfVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7IH1cXG5cXG4ubS1yLTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7IH1cXG5cXG4ubS1iLTI1IHtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tbC0yNSB7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS14LTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS15LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1O1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS0yOCB7XFxuICBtYXJnaW46IDI4OyB9XFxuXFxuLm0tdC0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODsgfVxcblxcbi5tLXItMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODsgfVxcblxcbi5tLWItMjgge1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS1sLTI4IHtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXgtMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXktMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLTMwIHtcXG4gIG1hcmdpbjogMzA7IH1cXG5cXG4ubS10LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwOyB9XFxuXFxuLm0tci0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwOyB9XFxuXFxuLm0tYi0zMCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5tLWwtMzAge1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teC0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teS0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLnAtMCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnAtdC0wIHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLnAtci0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG4ucC1iLTAge1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC1sLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteC0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC15LTAge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLTIge1xcbiAgcGFkZGluZzogMjsgfVxcblxcbi5wLXQtMiB7XFxuICBwYWRkaW5nLXRvcDogMjsgfVxcblxcbi5wLXItMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyOyB9XFxuXFxuLnAtYi0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXgtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyO1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteS0yIHtcXG4gIHBhZGRpbmctdG9wOiAyO1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDQ7IH1cXG5cXG4ucC10LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7IH1cXG5cXG4ucC1yLTQge1xcbiAgcGFkZGluZy1yaWdodDogNDsgfVxcblxcbi5wLWItNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLWwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC14LTQge1xcbiAgcGFkZGluZy1yaWdodDogNDtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXktNCB7XFxuICBwYWRkaW5nLXRvcDogNDtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtNSB7XFxuICBwYWRkaW5nOiA1OyB9XFxuXFxuLnAtdC01IHtcXG4gIHBhZGRpbmctdG9wOiA1OyB9XFxuXFxuLnAtci01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7IH1cXG5cXG4ucC1iLTUge1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC1sLTUge1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteC01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDU7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLTgge1xcbiAgcGFkZGluZzogODsgfVxcblxcbi5wLXQtOCB7XFxuICBwYWRkaW5nLXRvcDogODsgfVxcblxcbi5wLXItOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4OyB9XFxuXFxuLnAtYi04IHtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtbC04IHtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXgtOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4O1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteS04IHtcXG4gIHBhZGRpbmctdG9wOiA4O1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMDsgfVxcblxcbi5wLXQtMTAge1xcbiAgcGFkZGluZy10b3A6IDEwOyB9XFxuXFxuLnAtci0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDsgfVxcblxcbi5wLWItMTAge1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtbC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLTEyIHtcXG4gIHBhZGRpbmc6IDEyOyB9XFxuXFxuLnAtdC0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7IH1cXG5cXG4ucC1yLTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyOyB9XFxuXFxuLnAtYi0xMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC1sLTEyIHtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC14LTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXktMTIge1xcbiAgcGFkZGluZy10b3A6IDEyO1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtMTUge1xcbiAgcGFkZGluZzogMTU7IH1cXG5cXG4ucC10LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTsgfVxcblxcbi5wLXItMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7IH1cXG5cXG4ucC1iLTE1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLWwtMTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXgtMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteS0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC0xNiB7XFxuICBwYWRkaW5nOiAxNjsgfVxcblxcbi5wLXQtMTYge1xcbiAgcGFkZGluZy10b3A6IDE2OyB9XFxuXFxuLnAtci0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjsgfVxcblxcbi5wLWItMTYge1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtbC0xNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteC0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC15LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLTIwIHtcXG4gIHBhZGRpbmc6IDIwOyB9XFxuXFxuLnAtdC0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7IH1cXG5cXG4ucC1yLTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwOyB9XFxuXFxuLnAtYi0yMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC1sLTIwIHtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC14LTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXktMjAge1xcbiAgcGFkZGluZy10b3A6IDIwO1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtMjQge1xcbiAgcGFkZGluZzogMjQ7IH1cXG5cXG4ucC10LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDsgfVxcblxcbi5wLXItMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7IH1cXG5cXG4ucC1iLTI0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLWwtMjQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXgtMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteS0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC0yNSB7XFxuICBwYWRkaW5nOiAyNTsgfVxcblxcbi5wLXQtMjUge1xcbiAgcGFkZGluZy10b3A6IDI1OyB9XFxuXFxuLnAtci0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTsgfVxcblxcbi5wLWItMjUge1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtbC0yNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteC0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC15LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLTI4IHtcXG4gIHBhZGRpbmc6IDI4OyB9XFxuXFxuLnAtdC0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7IH1cXG5cXG4ucC1yLTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4OyB9XFxuXFxuLnAtYi0yOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC1sLTI4IHtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC14LTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4O1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXktMjgge1xcbiAgcGFkZGluZy10b3A6IDI4O1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtMzAge1xcbiAgcGFkZGluZzogMzA7IH1cXG5cXG4ucC10LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDsgfVxcblxcbi5wLXItMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7IH1cXG5cXG4ucC1iLTMwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi5wLWwtMzAge1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXgtMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteS0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4vKiBEaXZpZGVycyAqL1xcbi5oci1saWdodCB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uaHItZGFyayB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4vKiBBbGlnbm1lbnQgKi9cXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1sb3dlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTsgfVxcblxcbi50ZXh0LXVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLnRleHQtY2FwaXRhbGl6ZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcblxcbi5mb250LXdlaWdodC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5mb250LXdlaWdodC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmZvbnQtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi8qKlxcclxcbiAqIEZvbnQgc2l6ZVxcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLnQtMTB7Zm9udC1zaXplOjEwfVxcclxcbiAqIEZyb20gMTAsIDEyLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMFxcclxcbioqL1xcbi50LTEwIHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4udC0xMiB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLnQtMTQge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi50LTE1IHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4udC0xNiB7XFxuICBmb250LXNpemU6IDE2OyB9XFxuXFxuLnQtMTcge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi50LTE4IHtcXG4gIGZvbnQtc2l6ZTogMTg7IH1cXG5cXG4udC0xOSB7XFxuICBmb250LXNpemU6IDE5OyB9XFxuXFxuLnQtMjAge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi50LTI1IHtcXG4gIGZvbnQtc2l6ZTogMjU7IH1cXG5cXG4udC0zMCB7XFxuICBmb250LXNpemU6IDMwOyB9XFxuXFxuLmltZy1yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDU7IH1cXG5cXG4uaW1nLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiAyMDsgfVxcblxcbi5pbWctdGh1bWJuYWlsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlOyB9XFxuXFxuLnB1bGwtbGVmdCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0OyB9XFxuXFxuLnB1bGwtcmlnaHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4ubS14LWF1dG8ge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm0teS1hdXRvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnRleHQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjRUQ0NzNGOyB9XFxuXFxuLnRleHQtbXV0ZWQge1xcbiAgY29sb3I6ICM5ZTllOWU7IH1cXG5cXG4uYmctcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYmctZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRDQ3M0Y7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24tYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNztcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICB3aWR0aDogMzA7XFxuICBoZWlnaHQ6IDMwOyB9XFxuXFxuLmJ0biB7XFxuICBjb2xvcjogIzNBNTNGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWluLWhlaWdodDogMzY7XFxuICBtaW4td2lkdGg6IDY0O1xcbiAgcGFkZGluZzogMTAgMTAgMTAgMTA7XFxuICBmb250LXNpemU6IDE4O1xcbiAgbWFyZ2luOiA4IDE2IDggMTY7IH1cXG4gIC5idG4uYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MGZmOyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBib3JkZXItY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcyNmZmO1xcbiAgICBib3JkZXItY29sb3I6ICMwNzI2ZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYXF1YSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYnJvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWZvcmVzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZ3JleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGVtb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwO1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1saW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1wdXJwbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXJ1Ynkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXNreSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYnRuLW91dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcbiAgLmJ0bi1vdXRsaW5lLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MGZmOyB9XFxuXFxuLmJ0bltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGNvbG9yOiAjYTRhNGE0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWUsIGZvbnRhd2Vzb21lLXdlYmZvbnQ7IH1cXG5cXG4uZm9ybSAuaW5wdXQge1xcbiAgcGFkZGluZzogMTYgOCAxNiA4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1ib3JkZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI4O1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0W2lzRW5hYmxlZD0nZmFsc2UnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cXG5cXG4uZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luOiA4OyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgY29sb3I6ICNiYWJhYmE7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItbGlnaHQuYWN0aXZlLFxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1kYXJrLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZC5pbnB1dC1zaWRlcyAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG5cXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uYm9keSxcXG4uYm9keTIsXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDMyOyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjI7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5oNCB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLmg1IHtcXG4gIGZvbnQtc2l6ZTogMTE7IH1cXG5cXG4uaDYge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi5mb290bm90ZSB7XFxuICBmb250LXNpemU6IDEzOyB9XFxuXFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSBMYWJlbCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgc3RyZXRjaDogZmlsbDtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6ICMwMjI3MzQ7XFxuICAgIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4ucGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLnByb2dyZXNzIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIGZvbnQtc2l6ZTogMTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCwgLnNpZGVkcmF3ZXItY2VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGhlaWdodDogMTQ4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxNiAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAyMCAxNSAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDY0O1xcbiAgd2lkdGg6IDY0O1xcbiAgYm9yZGVyLXJhZGl1czogMzI7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMzY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNzQ7XFxuICB3aWR0aDogNzQ7XFxuICBib3JkZXItcmFkaXVzOiAzNztcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGNvbG9yOiAjNzM3MzczOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgaGVpZ2h0OiA0ODtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9yaWVudGF0aW9uOiBob3Jpem9udGFsOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0gLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICB3aWR0aDogMjQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgaGVpZ2h0OiA0ODtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjM0E1M0ZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4OyB9XFxuICAgIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICAgIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMCAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDAuMTtcXG4gIHdpZHRoOiA4MCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5zbGlkZXJbaXNFbmFibGVkPWZhbHNlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXVtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4udGFiLXZpZXcge1xcbiAgLypjb2xvcjogJHNlY29uZGFyeTsqL1xcbiAgc2VsZWN0ZWQtY29sb3I6ICMzMGJjZmY7XFxuICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIC50YWItdmlldyAudGFiLXZpZXctaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbiNsb2dpbi1iYWNrZ3JvdW5kIHtcXG4gIG1hcmdpbi10b3A6IC0yMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcCB7XFxuICBwYWRkaW5nOiAwIDQwOyB9XFxuXFxuLmxvZ28td3JhcCB7XFxuICBtYXJnaW46IDYwIDAgMTAgMDtcXG4gIHBhZGRpbmc6IDIwIDA7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvLXN1YiB7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMzsgfVxcbiAgLmxvZ2luLXdyYXBwZXIgVGV4dEZpZWxkIHtcXG4gICAgcGFkZGluZzogMTAgMTA7XFxuICAgIG1hcmdpbjogMTAgMCAwIDA7IH1cXG5cXG4uZ28tYmFjayB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi8qKlxcclxcbiAqIEltcG9ydCBhbGwgcGxhdGZvcm0gc3BlY2lmaWMgZmlsZXMgaGVyZVxcclxcbiAqL1xcbi5idG4ge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdTRiBVSSBUZXh0IE1lZGl1bSc7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGJvcmRlci13aWR0aDogMTsgfVxcblxcbi5idG4tcm91bmRlZC1zbSB7XFxuICBib3JkZXItcmFkaXVzOiA0OyB9XFxuXFxuLmJ0bi1yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE5OyB9XFxuXFxuLmZvcm0ge1xcbiAgZm9udC1mYW1pbHk6ICdTRiBVSSBUZXh0IFJlZ3VsYXInOyB9XFxuICAuZm9ybSAuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE1OyB9XFxuICAgIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNzsgfVxcblxcbi8qIFRoaXMgaXMgaGVyZSB0ZW1wb3JhcmlseSBiZWNhdXNlIF9pbmRleC5pb3Muc2NzcyBjYW5ub3QgYmUgZW1wdHkgKi9cXG4uaDEge1xcbiAgZm9udC1zaXplOiAzMjsgfVxcblxcbi5zbGlkZXIge1xcbiAgbWFyZ2luOiAxMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uLCAuc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uc3dpdGNoIHtcXG4gIG1hcmdpbjogOCAxNTsgfVxcblxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xcbiAgcGFkZGluZzogMTYgMTUgMTYgMTU7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLnNlZ21lbnRlZC1iYXIge1xcbiAgbWFyZ2luOiAwIDE1O1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250QXdlc29tZVxcXCI7IH1cXG5cIiwgXCJcIl0pO1xuXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLnNjc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5zY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCAncmVhY3QtaG90LWxvYWRlcic7IC8vIE11c3QgYmUgaW1wb3J0ZWQgYmVmb3JlIFJlYWN0IGFuZCBSZWFjdE5hdGl2ZVNjcmlwdC5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKiBDb250cm9scyByZWFjdC1uYXRpdmVzY3JpcHQgbG9nIHZlcmJvc2l0eS4gdHJ1ZTogYWxsIGxvZ3M7IGZhbHNlOiBvbmx5IGVycm9yIGxvZ3MuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCAnX19ERVZfXycsIHsgdmFsdWU6IGZhbHNlIH0pO1xuaW1wb3J0ICogYXMgUmVhY3ROYXRpdmVTY3JpcHQgZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lclwiO1xuXG5leHBvcnQgY29uc3Qgcm9vdFJlZjogUmVhY3QuUmVmT2JqZWN0PGFueT4gPSBSZWFjdC5jcmVhdGVSZWY8YW55PigpO1xuXG5SZWFjdE5hdGl2ZVNjcmlwdC5zdGFydChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBBcHBDb250YWluZXIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZjogcm9vdFJlZlxuICAgICAgICB9LFxuICAgICAgICBudWxsXG4gICAgKSxcbiAgICAvKiBUaGlzIHJlZiBNVVNUIG1hdGNoIHRoZSByZWYgdGhhdCB5b3UgcGFzcyBpbnRvIHRoZSBiYXNlIGNvbXBvbmVudCBvZiB5b3VyIGFwcCBjb250YWluZXIuICovXG4gICAgcm9vdFJlZlxuKTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXG4qKi9cXG4uZmEge1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uaW5mbyB7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXCIsIFwiXCJdKTtcblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlci9yb290JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgJFBhZ2UsICRMYWJlbCwgJEFjdGlvbkJhciwgJEdyaWRMYXlvdXQsICRGb3JtYXR0ZWRTdHJpbmcsICRTcGFuLCAkU3dpdGNoLCAkRnJhbWUsICRCdXR0b24sICRTdGFja0xheW91dCwgJERhdGVQaWNrZXIsICRUZXh0RmllbGQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBJdGVtU3BlYyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dC9ncmlkLWxheW91dCc7XG5pbXBvcnQgeyBGcmFtZSwgUGFnZSwgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcbmltcG9ydCB7IFJlYWN0aWZpZWQgfSBmcm9tICd+L1JlYWN0aWZpZWQvUmVhY3RpZmllZCc7XG5cbmltcG9ydCB7IF9MYWJlbCBhcyBMYWJlbENvbXBvbmVudCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jb21wb25lbnRzL0xhYmVsXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciwgRWRpdGFibGVUZXh0QmFzZSwgVGV4dEZpZWxkLCBIdG1sVmlldywgTGFiZWwsIExpc3RQaWNrZXIgfSBmcm9tICdyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5Jztcbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uL2J1dHRvbic7XG5cbmNsYXNzIE15RmFuY3lCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuXG59XG5cblxuLy8gY29uc3QgTXlCdXR0b24gPSBSZWFjdGlmaWVkKG5ldyBCdXR0b24oKSwgXCJidXR0b25cIik7XG5cbmNvbnN0IE15Q29tcG9uZW50ID0gUmVhY3RpZmllZChuZXcgTGlzdFBpY2tlcigpKTsgXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgZm9yd2FyZGVkUmVmOiBSZWFjdC5SZWZPYmplY3Q8RnJhbWU+LFxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuXG59XG5cbmNsYXNzIEFwcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhZ2VSZWY6IFJlYWN0LlJlZk9iamVjdDxQYWdlPiA9IFJlYWN0LmNyZWF0ZVJlZjxQYWdlPigpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbXlGYW5jeUJ1dHRvblJlZjogUmVhY3QuUmVmT2JqZWN0PE15RmFuY3lCdXR0b24+ID0gUmVhY3QuY3JlYXRlUmVmPE15RmFuY3lCdXR0b24+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBteURhdGVQaWNrZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWY8RGF0ZVBpY2tlcj4oKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG15RWRpdGFibGVUZXh0QmFzZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxFZGl0YWJsZVRleHRCYXNlPigpOyAvLyAod29uJ3Qgc2hvdylcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuXG5cbiAgICAgICAgY29uc3QgZnJhbWU6IEZyYW1lID0gdGhpcy5wcm9wcy5mb3J3YXJkZWRSZWYuY3VycmVudCE7XG4gICAgICAgIGZyYW1lLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSB0aGlzLnBhZ2VSZWYuY3VycmVudCE7XG4gICAgICAgICAgICAgICAgcGFnZS5hZGRDc3NGaWxlKFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCIpOyAvLyBQYXRoIGlzIHJlbGF0aXZlIHRvIHRoZSAnYXBwJyBmb2xkZXI7IG5vdCByZWxhdGl2ZSB0byB0aGlzIGZpbGUhXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBjb25zdCBteUZhbmN5QnV0dG9uID0gdGhpcy5teUZhbmN5QnV0dG9uUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBteUZhbmN5QnV0dG9uLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcInNpbHZlclwiKTtcbiAgICAgICAgICAgIG15RmFuY3lCdXR0b24ub24oXCJ0YXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YXBcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBjb25zdCBteURhdGVQaWNrZXIgPSB0aGlzLm15RGF0ZVBpY2tlclJlZi5jdXJyZW50O1xuICAgICAgICAgICAgbXlEYXRlUGlja2VyLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcImdyZWVuXCIpO1xuICAgICAgICAgICAgbXlEYXRlUGlja2VyLm9uKFwidGFwXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFhYXAhXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwyMDAwKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IGZvcndhcmRlZFJlZiB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPCRGcmFtZSByZWY9e2ZvcndhcmRlZFJlZn0+XG4gICAgICAgICAgICAgICAgPCRQYWdlIHJlZj17dGhpcy5wYWdlUmVmfSBjbGFzc05hbWU9XCJwYWdlXCIgYWN0aW9uQmFySGlkZGVuPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwkU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8TXlDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17bmV3IENvbG9yKFwiZ3JheVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXCJoZWpcIiwgXCJvY2hcIiwgXCJow6VcIl19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvJFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvJFBhZ2U+XG4gICAgICAgICAgICA8LyRGcmFtZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG4vLyBleHBvcnQgZGVmYXVsdCBBcHBDb250YWluZXI7XG5leHBvcnQgZGVmYXVsdCBob3QoQXBwQ29udGFpbmVyKTsgLy8gUmVwbGFjZSB0aGlzIGxpbmUgd2l0aCB0aGUgYWJvdmUgbGluZSBpZiB5b3Ugd2FudCB0byByZW1vdmUgaG90IGxvYWRpbmcuIl0sInNvdXJjZVJvb3QiOiIifQ==