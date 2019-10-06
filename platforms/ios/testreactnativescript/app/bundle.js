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
	"./Reactified/Implementation/Unique/onTextChangeImpl.ts": "./Reactified/Implementation/Unique/onTextChangeImpl.ts",
	"./Reactified/Implementation/Unique/onToggleImpl.ts": "./Reactified/Implementation/Unique/onToggleImpl.ts",
	"./Reactified/Implementation/Unique/onValueChangeImpl.ts": "./Reactified/Implementation/Unique/onValueChangeImpl.ts",
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
    return method.name === "placeholderImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "searchBarImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "segmentedBarImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "sliderImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "switchImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "contentViewImpl";
  });

  if (run) {
    var value = run.apply(void 0, args);

    if (value) {
      returnValue = value;
    }

    run = undefined;
  }

  run = implMethods.find(function (method) {
    return method.name === "scrollViewImpl";
  }); // extends ContentView...

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
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([observableImpl, datePickerImpl, listPickerImpl, searchBarImpl, sliderImpl, switchImpl], instance);
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
};

var searchBarImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("textChange", Reflect.get(instance, "onTextChange"));
};

var sliderImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("valueChange", Reflect.get(instance, "onValueChange"));
};

var switchImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("checkedChange", Reflect.get(instance, "onToggle"));
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
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([observableImpl, datePickerImpl, listPickerImpl, searchBarImpl, sliderImpl, switchImpl], instance);
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
};

var searchBarImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.off("textChange", Reflect.get(instance, "onTextChange"));
};
/* (this slider impl not the same as the others. Is probably an error) */


var sliderImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    node.off("valueChange", Reflect.get(instance, "onValueChange"));
    return;
  }

  console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
};

var switchImpl = function (instance) {
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.off("checkedChange", Reflect.get(instance, "onToggle"));
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
    console.log("label impl");

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

/***/ "./Reactified/Implementation/Unique/onTextChangeImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onTextChangeImpl", function() { return onTextChangeImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");

var onTextChangeImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([searchBarImpl], instance, args);
};

var searchBarImpl = function (instance, args) {
  var text = args.object.text;
  instance.props.onTextChange && instance.props.onTextChange(text);
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Unique/onToggleImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onToggleImpl", function() { return onToggleImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");

var onToggleImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([switchImpl], instance, args);
};

var switchImpl = function (instance, args) {
  var checked = args.object.checked;
  instance.props.onToggle && instance.props.onToggle(checked);
};; 
if (false ) {} 

/***/ }),

/***/ "./Reactified/Implementation/Unique/onValueChangeImpl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onValueChangeImpl", function() { return onValueChangeImpl; });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");

var onValueChangeImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_0__["executeInOrder"])([sliderImpl], instance, args);
};
/* typo found in https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/Slider.ts */

var sliderImpl = function (instance, args) {
  var sliderValue = args.object.value;
  instance.props.onValueChange && instance.props.onValueChange(sliderValue);
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
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react-nativescript/dist/client/EventHandling.js");
/* harmony import */ var react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/gestures/gestures.js");
/* harmony import */ var tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");
var _this = undefined;





var updateListenersImpl = function (instance, node, attach, nextProps) {
  /* implementation for any rns component here - or on reactify class body*/
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["executeInOrder"])([pageImpl, viewImpl, observableImpl, actionItemImpl, editableTextBaseImpl, frameImpl, placeholderImpl, scrollViewImpl, searchBarImpl, segmentedBarImpl], instance, node, attach);
};

var observableImpl = function (instance, node, attach, nextProps) {
  console.log("observableImpl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "propertyChange", instance.props.onPropertyChange, nextProps.onPropertyChange);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onPropertyChange) method("propertyChange", instance.props.onPropertyChange);
  }
}; // https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/View.ts


var viewImpl = function (instance, node, attach, nextProps) {
  console.log("view impl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "loaded", instance.props.onLoaded, nextProps.onLoaded);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "unloaded", instance.props.onUnloaded, nextProps.onUnloaded);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "androidBackPressed", instance.props.onAndroidBackPressed, nextProps.onAndroidBackPressed);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "showingModally", instance.props.onShowingModally, nextProps.onShowingModally);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "shownModally", instance.props.onShownModally, nextProps.onShownModally);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].tap, instance.props.onTap, nextProps.onTap, "tap");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].doubleTap, instance.props.onDoubleTap, nextProps.onDoubleTap, "doubleTap");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].pinch, instance.props.onPinch, nextProps.onPinch, "pinch");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].pan, instance.props.onPan, nextProps.onPan, "pan");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].swipe, instance.props.onSwipe, nextProps.onSwipe, "swipe");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].rotation, instance.props.onRotation, nextProps.onRotation, "rotation");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].longPress, instance.props.onLongPress, nextProps.onLongPress, "longPress");
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].touch, instance.props.onTouch, nextProps.onTouch, "touch");
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onLoaded) method("loaded", instance.props.onLoaded);
    if (instance.props.onUnloaded) method("unloaded", instance.props.onUnloaded);
    if (instance.props.onAndroidBackPressed) method("androidBackPressed", instance.props.onAndroidBackPressed);
    if (instance.props.onShowingModally) method("showingModally", instance.props.onShowingModally);
    if (instance.props.onShownModally) method("shownModally", instance.props.onShownModally);
    if (instance.props.onTap) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].tap, instance.props.onTap);
    if (instance.props.onDoubleTap) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].doubleTap, instance.props.onDoubleTap);
    if (instance.props.onPinch) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].pinch, instance.props.onPinch);
    if (instance.props.onPan) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].pan, instance.props.onPan);
    if (instance.props.onSwipe) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].swipe, instance.props.onSwipe);
    if (instance.props.onRotation) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].rotation, instance.props.onRotation);
    if (instance.props.onLongPress) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].longPress, instance.props.onLongPress);
    if (instance.props.onTouch) method(tns_core_modules_ui_gestures_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].touch, instance.props.onTouch);
  }
};

var actionItemImpl = function (instance, node, attach, nextProps) {
  /* tap assigning tap on actionitem crashes */

  /* should be conditionally ran so that two tap gesture recognizers aren't added*/
  if (node instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["ActionItem"]) {
    console.log("actionItemImpl");

    if (attach === null) {
      Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "tap", instance.props.onTap, nextProps.onTap);
    } else {
      var method = (attach ? node.on : node.off).bind(node);
      if (instance.props.onTap) method("tap", instance.props.onTap);
    }
  }
};

var pageImpl = function (instance, node, attach, nextProps) {
  console.log("pageImpl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "navigatedFrom", instance.props.onNavigatedFrom, nextProps.onNavigatedFrom);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "navigatedTo", instance.props.onNavigatedTo, nextProps.onNavigatedTo);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "navigatingFrom", instance.props.onNavigatingFrom, nextProps.onNavigatingFrom);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "navigatingTo", instance.props.onNavigatingTo, nextProps.onNavigatingTo);
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
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "blur", instance.props.onBlur, nextProps.onBlur);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "focus", instance.props.onFocus, nextProps.onFocus);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "textChange", instance.props.onTextChange, nextProps.onTextChange);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onBlur) method("blur", instance.props.onBlur);
    if (instance.props.onFocus) method("focus", instance.props.onFocus);
    if (instance.props.onTextChange) method("textChange", instance.props.onTextChange);
  }
};

var frameImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "optionSelected", instance.props.onOptionSelected, nextProps.onOptionSelected);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onOptionSelected) method("optionSelected", instance.props.onOptionSelected);
  }
};

var placeholderImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "creatingView", instance.props.onCreatingView, nextProps.onCreatingView);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onCreatingView) method("creatingView", instance.props.onCreatingView);
  }
};

var scrollViewImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "scroll", _this.props.onScroll, nextProps.onScroll);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onScroll) method("scroll", instance.props.onScroll);
  }
};

var searchBarImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "submit", instance.props.onSubmit, nextProps.onSubmit);
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "close", instance.props.onClose, nextProps.onClose);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onSubmit) method("submit", instance.props.onSubmit);
    if (instance.props.onClose) method("close", instance.props.onClose);
  }
};

var segmentedBarImpl = function (instance, node, attach, nextProps) {
  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "selectedIndexChanged", instance.props.onSelectedIndexChanged, nextProps.onSelectedIndexChanged);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onSelectedIndexChanged) method("selectedIndexChanged", instance.props.onSelectedIndexChanged);
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
/* harmony import */ var _Implementation_Unique_onTextChangeImpl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./Reactified/Implementation/Unique/onTextChangeImpl.ts");
/* harmony import */ var _Implementation_Unique_onValueChangeImpl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./Reactified/Implementation/Unique/onValueChangeImpl.ts");
/* harmony import */ var _Implementation_Unique_onToggleImpl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./Reactified/Implementation/Unique/onToggleImpl.ts");

















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

      _this.onTextChange = function (args) {
        Object(_Implementation_Unique_onTextChangeImpl__WEBPACK_IMPORTED_MODULE_14__["onTextChangeImpl"])(_this, args);
      };

      _this.onValueChange = function (args) {
        Object(_Implementation_Unique_onValueChangeImpl__WEBPACK_IMPORTED_MODULE_15__["onValueChangeImpl"])(_this, args);
      };

      _this.onToggle = function (args) {
        Object(_Implementation_Unique_onToggleImpl__WEBPACK_IMPORTED_MODULE_16__["onToggleImpl"])(_this, args);
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
/* harmony import */ var _Reactified_Reactified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./Reactified/Reactified.ts");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__);




 // import { Button } from 'tns-core-modules/ui/button/button';

var MyFancyButton =
/** @class */
function (_super) {
  __extends(MyFancyButton, _super);

  function MyFancyButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return MyFancyButton;
}(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__["Button"]); // const MyButton = Reactified(new Button(), "button");


var MyComponent = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_3__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__["Switch"]());

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
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$ActionBar"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$ActionItem"], {
      text: "Check this out",
      onTap: function () {
        console.log("tap");
      }
    })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$StackLayout"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyComponent, {
      onTap: function () {
        console.log("tap");
      }
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$Switch"], {
      onToggle: function (checked) {
        console.log("checked: " + checked);
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnREaWRNb3VudEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnRXaWxsVW5tb3VudEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9yZW5kZXJJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3Qvc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uRGF0YUNoYW5nZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25TZWxlY3RlZEluZGV4Q2hhbmdlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRleHRDaGFuZ2VJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVG9nZ2xlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblZhbHVlQ2hhbmdlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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a0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1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Z0VBOzs7QUFDZSxnSUFBRyxDQUFDLFlBQUQsQ0FBbEIsRSxDQUFrQywyRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL1JlYWN0aWZpZWQvRXh0cmFQcm9wcy50c1wiOiBcIi4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdBcHBlbmRDaGlsZEltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmVJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdSZW1vdmVDaGlsZEltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vSGVscGVycy50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9IZWxwZXJzLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudERpZE1vdW50SW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnREaWRNb3VudEltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50V2lsbFVubW91bnRJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudFdpbGxVbm1vdW50SW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9yZW5kZXJJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L3JlbmRlckltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3Qvc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9zaG91bGRDb21wb25lbnRVcGRhdGVJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vbkRhdGFDaGFuZ2VJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vbkRhdGFDaGFuZ2VJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblNlbGVjdGVkSW5kZXhDaGFuZ2VJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblNlbGVjdGVkSW5kZXhDaGFuZ2VJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRleHRDaGFuZ2VJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRleHRDaGFuZ2VJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRvZ2dsZUltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVG9nZ2xlSW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25WYWx1ZUNoYW5nZUltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVmFsdWVDaGFuZ2VJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0hlbHBlckltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi91cGRhdGVMaXN0ZW5lcnNJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvUmVhY3RpZmllZC50c1wiOiBcIi4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzXCIsXG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwLnRzXCIsXG5cdFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCI6IFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIlxuaW1wb3J0IHsgRXZlbnREYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgRG9jayB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZG9jay1sYXlvdXQvZG9jay1sYXlvdXRcIjtcbmltcG9ydCB7IFNob3duTW9kYWxseURhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldy92aWV3XCI7XG5pbXBvcnQge1xuICAgIEdlc3R1cmVFdmVudERhdGEsXG4gICAgR2VzdHVyZVR5cGVzLFxuICAgIFRvdWNoR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBTd2lwZUdlc3R1cmVFdmVudERhdGEsXG4gICAgUm90YXRpb25HZXN0dXJlRXZlbnREYXRhLFxuICAgIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBQYW5HZXN0dXJlRXZlbnREYXRhLFxufSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlc1wiO1xuXG5pbXBvcnQgeyBcbiAgICBPYnNlcnZhYmxlLFxuICAgIFZpZXdCYXNlLFxuICAgIFZpZXcsXG4gICAgUGFnZSxcbiAgICBBY3Rpb25JdGVtLFxuICAgIERhdGVQaWNrZXIsXG4gICAgRWRpdGFibGVUZXh0QmFzZSxcbiAgICBGcmFtZSxcbiAgICBHcmlkTGF5b3V0LFxuICAgIEh0bWxWaWV3LFxuICAgIExpc3RQaWNrZXIsXG4gICAgU3dpdGNoLFxuICAgIFNjcm9sbFZpZXcsXG4gICAgU2VhcmNoQmFyLFxuICAgIFNlZ21lbnRlZEJhcixcbiAgICBTbGlkZXIsXG59IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHsgSXRlbVNwZWMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0L2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBJdGVtc1NvdXJjZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBDcmVhdGVWaWV3RXZlbnREYXRhLCBQbGFjZWhvbGRlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyXCI7XG5pbXBvcnQgeyBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlldy9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyL3NlZ21lbnRlZC1iYXJcIjtcblxuXG4vLyBleHBvcnQgdHlwZSBFeHRyYVByb3BzPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiA9IE9ic2VydmFibGVQcm9wczxUPiAmIFZpZXdCYXNlUHJvcHM8VD4gJiBWaWV3UHJvcHM8VD4gJiBQYWdlUHJvcHM8VD4gJiBBY3Rpb25JdGVtUHJvcHM8VD47XG5leHBvcnQgdHlwZSBFeHRyYVByb3BzPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiA9IE9ic2VydmFibGVQcm9wczxUPiAmIFZpZXdCYXNlUHJvcHM8VD4gJiBWaWV3UHJvcHM8VD5cbiAmIFBhZ2VQcm9wczxUPiAmIEFjdGlvbkl0ZW1Qcm9wczxUPiAmIERhdGVQaWNrZXJQcm9wczxUPiAmIEVkaXRhYmxlVGV4dEJhc2VQcm9wczxUPiAmIEZyYW1lUHJvcHM8VD5cbiAmIEdyaWRMYXlvdXRQcm9wczxUPiAmIEh0bWxWaWV3UHJvcHM8VD4gJiBMaXN0UGlja2VyUHJvcHM8VD4gJiBQbGFjZWhvbGRlclByb3BzPFQ+ICYgU2Nyb2xsVmlld1Byb3BzPFQ+XG4gJiBTZWFyY2hCYXJQcm9wczxUPiAmIFNlZ21lbnRlZEJhclByb3BzPFQ+ICYgU2xpZGVyUHJvcHM8VD4gJiBTd2l0Y2hQcm9wczxUPjtcblxuLy8gdXNpbmcgY29uZGl0aW9uYWwgc28gdGhhdCBSTlNCdXR0b24gZG9uJ3QgZ2V0IG5hdmlnYXRlZFRvIChQYWdlUHJvcHMpIFxuXG5cbi8qIFxuIFNob3VsZCBnZXQgT2JzZXJ2YWJsZVByb3BzXG4gd2l0aCBnZXR0ZXIvb25kaXRpb25hbCB0eXBpbmcgLSBzaW5jZSB0aGUgbnMgY29tcG9uZW50XG4gbXVzdCBiZSBvZiB0eXBlIE9ic2VydmFibGUuIHVzaW5nIGJlbG93IGNvbmlkdGlvbmFsIHR5cGVcbiBhbHNvIGNhdXNlIGFuIHR5cGUgZXJyb3IgaW4gZ2V0Q3VycmVudFJlZkltcGxcbiAqL1xuLy8gdHlwZSBPYnNlcnZhYmxlUHJvcHM8VCBleHRlbmRzIE9ic2VydmFibGU+ID0gVCBleHRlbmRzIE9ic2VydmFibGUgPyBJT2JzZXJ2YWJsZTxUPiA6IEVtcHR5XG5cbmludGVyZmFjZSBPYnNlcnZhYmxlUHJvcHM8VCBleHRlbmRzIE9ic2VydmFibGU+IHtcbiAgICBlbGVtZW50S2V5Pzogc3RyaW5nIC8vIGFkZGVkXG4gICAgZm9yd2FyZGVkUmVmPzogUmVhY3QuUmVmT2JqZWN0PFQ+O1xuICAgIG9uUHJvcGVydHlDaGFuZ2U/OiAoZGF0YTogRXZlbnREYXRhKSA9PiB2b2lkO1xufVxuXG4vKiByZXN0IGlzIHVzaW5nIGNvbmRpdGlvbmFsIHR5cGUgXCJnZXR0ZXJzXCIgc28gdGhhdCBidXR0b24gZG9uJ3QgYWNjZXNzIGdldCBwYWdlJ3MgcHJvcHMgZXRjKi9cblxudHlwZSBWaWV3QmFzZVByb3BzPFQ+ID0gVCBleHRlbmRzIFZpZXdCYXNlID8gSVZpZXdCYXNlIDogRW1wdHlcbmludGVyZmFjZSBJVmlld0Jhc2Uge1xuICAgIF9fcm5zX19ub2RlVHJlZVJvbGU/OiBzdHJpbmc7XG4gICAgZG9jaz86IERvY2s7XG59XG5cbnR5cGUgVmlld1Byb3BzPFQ+ID0gVCBleHRlbmRzIFZpZXcgPyBJVmlldyA6IEVtcHR5O1xuaW50ZXJmYWNlIElWaWV3IHtcbiAgICAvKiBGcm9tIFZpZXcuICovXG4gICAgb25Mb2FkZWQ/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uVW5sb2FkZWQ/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uQW5kcm9pZEJhY2tQcmVzc2VkPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblNob3dpbmdNb2RhbGx5PzogKGFyZ3M6IFNob3duTW9kYWxseURhdGEpID0+IHZvaWQ7XG4gICAgb25TaG93bk1vZGFsbHk/OiAoYXJnczogU2hvd25Nb2RhbGx5RGF0YSkgPT4gdm9pZDtcblxuICAgIC8qIFRoZSBnZXN0dXJlIGhhbmRsZXJzLiAqL1xuICAgIG9uVGFwPzogKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Eb3VibGVUYXA/OiAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblBpbmNoPzogKGFyZ3M6IFBpbmNoR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblBhbj86IChhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uU3dpcGU/OiAoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uUm90YXRpb24/OiAoYXJnczogUm90YXRpb25HZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uTG9uZ1ByZXNzPzogKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Ub3VjaD86IChhcmdzOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG5cbiAgICAvKiBUaGVzZSBhcmUgdG8gYmUgb3ZlcnJpZGRlbiBpbiBzdWJjbGFzc2VzIG9mIFZpZXcsIHNvIHVubGlrZWx5IHRvIGJlIGFwcHJvcHJpYXRlLiAqL1xuICAgIC8vIG9uTGF5b3V0PzogKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIC8vIG9uTWVhc3VyZT86ICh3aWR0aE1lYXN1cmVTcGVjOiBudW1iZXIsIGhlaWdodE1lYXN1cmVTcGVjOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbnR5cGUgUGFnZVByb3BzPFQ+ID0gVCBleHRlbmRzIFBhZ2UgPyBJUGFnZSA6IEVtcHR5XG5pbnRlcmZhY2UgSVBhZ2Uge1xuICAgIG9uTmF2aWdhdGluZ1RvPzogUGFnZU5hdmlnYXRpb25FdmVudEhhbmRsZXI7XG4gICAgb25OYXZpZ2F0ZWRUbz86IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyO1xuICAgIG9uTmF2aWdhdGluZ0Zyb20/OiBQYWdlTmF2aWdhdGlvbkV2ZW50SGFuZGxlcjtcbiAgICBvbk5hdmlnYXRlZEZyb20/OiBQYWdlTmF2aWdhdGlvbkV2ZW50SGFuZGxlcjtcbn1cblxudHlwZSBBY3Rpb25JdGVtUHJvcHM8VD4gPSBUIGV4dGVuZHMgQWN0aW9uSXRlbSA/IElBY3Rpb25JdGVtIDogRW1wdHlcbmludGVyZmFjZSBJQWN0aW9uSXRlbSB7XG4gICAgb25UYXA/OiAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbn1cblxudHlwZSBEYXRlUGlja2VyUHJvcHM8VD4gPSBUIGV4dGVuZHMgRGF0ZVBpY2tlciA/IElEYXRlUGlja2VyIDogRW1wdHlcbmludGVyZmFjZSBJRGF0ZVBpY2tlciB7XG4gICAgb25EYXRlQ2hhbmdlPzogKGRhdGU6IERhdGUpID0+IHZvaWQ7XG59XG50eXBlIEVkaXRhYmxlVGV4dEJhc2VQcm9wczxUPj0gVCBleHRlbmRzIEVkaXRhYmxlVGV4dEJhc2UgPyBJRWRpdGFibGVUZXh0QmFzZSA6IEVtcHR5XG5pbnRlcmZhY2UgSUVkaXRhYmxlVGV4dEJhc2Uge1xuICAgIG9uQmx1cj86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Gb2N1cz86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25UZXh0Q2hhbmdlPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbn1cbnR5cGUgRnJhbWVQcm9wczxUPiA9IFQgZXh0ZW5kcyBGcmFtZSA/IElGcmFtZSA6IEVtcHR5O1xuaW50ZXJmYWNlIElGcmFtZSB7XG4gICAgb25PcHRpb25TZWxlY3RlZD86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG59XG50eXBlIEdyaWRMYXlvdXRQcm9wczxUPiA9IFQgZXh0ZW5kcyBHcmlkTGF5b3V0ID8gSUdyaWRMYXlvdXQgOiBFbXB0eTtcbmludGVyZmFjZSBJR3JpZExheW91dCB7XG4gICAgLyogRWFjaCBjb25zdGl0dWVudCB2aWV3IHBhc3NlZCBpbiBtdXN0IGJlYXIgXCJyb3dcIiBhbmQgXCJjb2xcIiBQcm9wcy4gKi9cbiAgICAgICAgLyogcm93cyBhbmQgY29sdW1ucyB3aWxsIGJlIGFkZGVkIGluIG9yZGVyIHNwZWNpZmllZC4gKi9cbiAgICByb3dzPzogSXRlbVNwZWNbXTtcbiAgICBjb2x1bW5zPzogSXRlbVNwZWNbXTtcbn1cblxudHlwZSBIdG1sVmlld1Byb3BzPFQ+ID0gVCBleHRlbmRzIEh0bWxWaWV3ID8gSUh0bWxWaWV3IDogRW1wdHlcbmludGVyZmFjZSBJSHRtbFZpZXcge1xuICAgIGh0bWw6IHN0cmluZztcbn1cblxudHlwZSBMaXN0UGlja2VyUHJvcHM8VD4gPSBUIGV4dGVuZHMgTGlzdFBpY2tlciA/IElMaXN0UGlja2VyIDogRW1wdHk7XG5pbnRlcmZhY2UgSUxpc3RQaWNrZXIge1xuICAgIGl0ZW1zOiBhbnlbXSB8IEl0ZW1zU291cmNlO1xuICAgIG9uU2VsZWN0ZWRJbmRleENoYW5nZT86IChzZWxlY3RlZEluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbnR5cGUgUGxhY2Vob2xkZXJQcm9wczxUPiA9IFQgZXh0ZW5kcyBQbGFjZWhvbGRlciA/IElQbGFjZWhvbGRlciA6IEVtcHR5XG5pbnRlcmZhY2UgSVBsYWNlaG9sZGVyIHtcbiAgICBvbkNyZWF0aW5nVmlldz8oYXJnczogQ3JlYXRlVmlld0V2ZW50RGF0YSk6IHZvaWQ7XG59XG5cbnR5cGUgU2Nyb2xsVmlld1Byb3BzPFQ+ID0gVCBleHRlbmRzIFNjcm9sbFZpZXcgPyBJU2Nyb2xsVmlldyA6IEVtcHR5O1xuaW50ZXJmYWNlIElTY3JvbGxWaWV3IHtcbiAgICBvblNjcm9sbD86IChhcmdzOiBTY3JvbGxFdmVudERhdGEpID0+IHZvaWQ7XG59XG5cbnR5cGUgU2VhcmNoQmFyUHJvcHM8VD4gPSBUIGV4dGVuZHMgU2VhcmNoQmFyID8gSVNlYXJjaEJhciA6IEVtcHR5O1xuaW50ZXJmYWNlIElTZWFyY2hCYXIge1xuICAgIG9uVGV4dENoYW5nZT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25TdWJtaXQ/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uQ2xvc2U/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xufVxuXG50eXBlIFNlZ21lbnRlZEJhclByb3BzPFQ+ID0gVCBleHRlbmRzIFNlZ21lbnRlZEJhciA/IElTZWdtZW50ZWRCYXIgOiBFbXB0eVxuaW50ZXJmYWNlIElTZWdtZW50ZWRCYXIge1xuICAgIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQ/OiAoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpID0+IHZvaWQ7XG59XG5cbnR5cGUgU2xpZGVyUHJvcHM8VD4gPSBUIGV4dGVuZHMgU2xpZGVyID8gSVNsaWRlciA6IEVtcHR5O1xuaW50ZXJmYWNlIElTbGlkZXIge1xuICAgIG9uVmFsdWVDaGFuZ2U/OiAoYXJnczogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG50eXBlIFN3aXRjaFByb3BzPFQ+ID0gVCBleHRlbmRzIFN3aXRjaCA/IElTd2l0Y2ggOiBFbXB0eTtcbmludGVyZmFjZSBJU3dpdGNoIHtcbiAgICBvblRvZ2dsZT86IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG4vKiBjb3VsZCBiZSB1c2VkIHNldCBwcm9wcyBmb3IgZXZlcnkgc2luZ2xlIFJOUyBDb21wb25lbnQqL1xuaW50ZXJmYWNlIEVtcHR5IHtcblxufVxuXG4vLyBpbnNpZGUgaHR0cHM6Ly9naXRodWIuY29tL3NoaXJha2FiYS9yZWFjdC1uYXRpdmVzY3JpcHQvYmxvYi9tYXN0ZXIvcmVhY3QtbmF0aXZlc2NyaXB0L3NyYy9jb21wb25lbnRzL1N3aXRjaC50c1xuLy8gY2FuIGxpc3RlbmVyIGJlIGF0dGFjaGVkIHRvIHRoaXM6UFJPUFMub25Ub2dnbGUgPyIsImltcG9ydCB7IFRleHRCYXNlIGFzIE5hdGl2ZVNjcmlwdFRleHRCYXNlLCBPYnNlcnZhYmxlfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgSW5zdGFuY2UsIFRleHRJbnN0YW5jZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9zaGFyZWQvSG9zdENvbmZpZ1R5cGVzXCI7XG5pbXBvcnQgeyBGb3JtYXR0ZWRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIlxuZXhwb3J0IGNvbnN0IF9fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ocGFyZW50OiBULCBjaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gdGV4dEJhc2VJbXBsKHBhcmVudCwgY2hpbGQpO1xufVxuXG5jb25zdCB0ZXh0QmFzZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KHBhcmVudDogVCwgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlKSA9PiB7XG4gICAgaWYocGFyZW50IGluc3RhbmNlb2YgTmF0aXZlU2NyaXB0VGV4dEJhc2UpIHtcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgRm9ybWF0dGVkU3RyaW5nKSB7XG4gICAgICAgICAgICBwYXJlbnQuZm9ybWF0dGVkVGV4dCA9IGNoaWxkO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaS5lLiBkZWZlciB0byBIb3N0IENvbmZpZy5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHsgVGV4dEJhc2UgYXMgTmF0aXZlU2NyaXB0VGV4dEJhc2UsIE9ic2VydmFibGV9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBJbnN0YW5jZSwgVGV4dEluc3RhbmNlIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L3NoYXJlZC9Ib3N0Q29uZmlnVHlwZXNcIjtcbmltcG9ydCB7IEZvcm1hdHRlZFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiXG5cblxuZXhwb3J0IGNvbnN0IF9fY3VzdG9tSG9zdENvbmZpZ0luc2VydEJlZm9yZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KFxuICAgIHBhcmVudDogVCxcbiAgICBjaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UsXG4gICAgYmVmb3JlQ2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlXG4pOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gdGV4dEJhc2VJbXBsKHBhcmVudCwgY2hpbGQsIGJlZm9yZUNoaWxkKTtcbn1cbmNvbnN0IHRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oXG4gICAgcGFyZW50OiBULFxuICAgIGNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZSxcbiAgICBiZWZvcmVDaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2VcbikgOiBib29sZWFuID0+IHtcbiAgICBpZihwYXJlbnQgaW5zdGFuY2VvZiBOYXRpdmVTY3JpcHRUZXh0QmFzZSkge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBGb3JtYXR0ZWRTdHJpbmcpIHtcbiAgICAgICAgICAgIHBhcmVudC5mb3JtYXR0ZWRUZXh0ID0gY2hpbGQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGkuZS4gZGVmZXIgdG8gSG9zdCBDb25maWcuXG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCB7IFRleHRCYXNlIGFzIE5hdGl2ZVNjcmlwdFRleHRCYXNlLCBPYnNlcnZhYmxlfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgSW5zdGFuY2UsIFRleHRJbnN0YW5jZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9zaGFyZWQvSG9zdENvbmZpZ1R5cGVzXCI7XG5pbXBvcnQgeyBGb3JtYXR0ZWRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIlxuXG5leHBvcnQgY29uc3QgX19jdXN0b21Ib3N0Q29uZmlnUmVtb3ZlQ2hpbGRJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihwYXJlbnQ6IFQsIGNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZSk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiB0ZXh0QmFzZUltcGwocGFyZW50LCBjaGlsZCk7XG59XG5cbmNvbnN0IHRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ocGFyZW50OiBULCBjaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UpOiBib29sZWFuID0+IHtcbiAgICBpZihwYXJlbnQgaW5zdGFuY2VvZiBOYXRpdmVTY3JpcHRUZXh0QmFzZSkge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBGb3JtYXR0ZWRTdHJpbmcpIHtcbiAgICAgICAgICAgIHBhcmVudC5mb3JtYXR0ZWRUZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBpLmUuIGRlZmVyIHRvIEhvc3QgQ29uZmlnLlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBcbiAgICBlbGVtZW50TWFwLFxuICAgIEFic29sdXRlTGF5b3V0LFxuICAgIEFjdGlvbkJhcixcbiAgICBBY3Rpb25JdGVtLFxuICAgIEFjdGl2aXR5SW5kaWNhdG9yLFxuICAgIEFuaW1hdGlvbixcbiAgICBPYnNlcnZhYmxlXG59ZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZU9mKG9iamVjdDogT2JqZWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gb2JqZWN0LmNvbnN0cnVjdG9yLm5hbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMZXR0ZXJMb3dlcmNhc2UobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xufVxuXG5jb25zdCBpbXBsTWV0aG9kUmVnaXN0cnk6IHN0cmluZ1tdID0gW107IFxuY29uc29sZS5sb2coXCJhbGwgZWxlbWVudHMgaW4gZWxlbWVudCByZWdpc3RyeVwiKVxuZm9yKGxldCBlbGVtZW50TmFtZSBpbiBlbGVtZW50TWFwKSB7XG4gICAgaW1wbE1ldGhvZFJlZ2lzdHJ5LnB1c2goZWxlbWVudE5hbWUgKyBcIkltcGxcIik7XG59XG5cbnR5cGUgSW1wbE1ldGhvZCA9ICguLi5hcmdzOiBhbnkpID0+IGFueVxuZXhwb3J0IGNvbnN0IGV4ZWN1dGVJbk9yZGVyID0gKGltcGxNZXRob2RzOiBJbXBsTWV0aG9kW10sIC4uLmFyZ3M6IGFueSkgPT4geyBcbiAgICBsZXQgcmV0dXJuVmFsdWUgOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgbGV0IHJ1biA9IHVuZGVmaW5lZDtcblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiZ2VuZXJpY0ltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJvYnNlcnZhYmxlSW1wbFwiKTtcbiAgICBpZihydW4pIHsgXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJ2aWV3QmFzZUltcGxcIik7IC8vIGV4dGVuZHMgT2JzZXJ2YWJsZS4uLlxuICAgIFxuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJ2aWV3SW1wbFwiKTsgLy8gZXh0ZW5kcyBWaWV3QmFzZS4uLlxuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJhY3Rpb25JdGVtSW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInBhZ2VJbXBsXCIpIC8vIGV4dGVuZHMgVmlldy4uLlxuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwidGV4dEJhc2VJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiZGF0ZVBpY2tlckltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJmcmFtZUltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJodG1sVmlld0ltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJsaXN0UGlja2VySW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInBsYWNlaG9sZGVySW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInNlYXJjaEJhckltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJzZWdtZW50ZWRCYXJJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwic2xpZGVySW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInN3aXRjaEltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJjb250ZW50Vmlld0ltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJzY3JvbGxWaWV3SW1wbFwiKTsgLy8gZXh0ZW5kcyBDb250ZW50Vmlldy4uLlxuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiYnV0dG9uSW1wbFwiKTsgLy8gZXh0ZW5kcyBUZXh0QmFzZS4uLlxuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwibGFiZWxJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiZWRpdGFibGVUZXh0QmFzZUltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJ0ZXh0RmllbGRJbXBsXCIpOyAvLyBleHRlbmRzIEVkaXRhYmxlVGV4dEJhc2UuLi5cbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59XG5cbmNvbnN0IGhpZXJhcmNoeU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBcIkFic29sdXRlTGF5b3V0XCIgOiBcIkxheW91dEJhc2VcIixcbiAgICBcIkFjdGlvbkJhclwiIDogXCJWaWV3XCIsXG4gICAgXCJBY3Rpb25JdGVtXCIgOiBcIlZpZXdCYXNlXCIsXG4gICAgXCJBY3Rpdml0eUluZGljYXRvclwiIDogXCJWaWV3QmFzZVwiLFxufTsiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIsIExpc3RQaWNrZXIsIFNlYXJjaEJhciwgU2xpZGVyLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudERpZE1vdW50SW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoXG4gICAgICAgIFtvYnNlcnZhYmxlSW1wbCxcbiAgICAgICAgZGF0ZVBpY2tlckltcGwsXG4gICAgICAgIGxpc3RQaWNrZXJJbXBsLFxuICAgICAgICBzZWFyY2hCYXJJbXBsLFxuICAgICAgICBzbGlkZXJJbXBsLFxuICAgICAgICBzd2l0Y2hJbXBsXSxcbiAgICAgICAgaW5zdGFuY2UpO1xuICAgIFxufVxuXG5jb25zdCBvYnNlcnZhYmxlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwidXBkYXRlTGlzdGVuZXJzSGVscGVyXCIpKHRydWUpO1xufVxuY29uc3QgZGF0ZVBpY2tlckltcGwgPSA8VCBleHRlbmRzIERhdGVQaWNrZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIGNvbnN0IG5vZGU6IFQgfCBudWxsID0gUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUub24oXCJkYXRlQ2hhbmdlXCIsIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm9uRGF0ZUNoYW5nZVwiKSk7XG59XG5jb25zdCBsaXN0UGlja2VySW1wbCA9IDxUIGV4dGVuZHMgTGlzdFBpY2tlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5vbihcInNlbGVjdGVkSW5kZXhDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25TZWxlY3RlZEluZGV4Q2hhbmdlXCIpKTtcbn1cblxuY29uc3Qgc2VhcmNoQmFySW1wbCA9IDxUIGV4dGVuZHMgU2VhcmNoQmFyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9uKFwidGV4dENoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblRleHRDaGFuZ2VcIikpO1xufVxuXG5jb25zdCBzbGlkZXJJbXBsID0gPFQgZXh0ZW5kcyBTbGlkZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIGNvbnN0IG5vZGU6IFQgfCBudWxsID0gUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUub24oXCJ2YWx1ZUNoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblZhbHVlQ2hhbmdlXCIpKTtcbn1cbmNvbnN0IHN3aXRjaEltcGwgPSA8VCBleHRlbmRzIFN3aXRjaD4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5vbihcImNoZWNrZWRDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25Ub2dnbGVcIikpO1xufVxuXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBEYXRlUGlja2VyLCBMaXN0UGlja2VyLCBTZWFyY2hCYXIsIFNsaWRlciwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cblxuXG5leHBvcnQgY29uc3QgY29tcG9uZW50V2lsbFVubW91bnRJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBleGVjdXRlSW5PcmRlcihcbiAgICAgICAgW29ic2VydmFibGVJbXBsLFxuICAgICAgICBkYXRlUGlja2VySW1wbCxcbiAgICAgICAgbGlzdFBpY2tlckltcGwsXG4gICAgICAgIHNlYXJjaEJhckltcGwsXG4gICAgICAgIHNsaWRlckltcGwsXG4gICAgICAgIHN3aXRjaEltcGxdLCBcbiAgICAgICAgaW5zdGFuY2UpO1xufVxuXG5jb25zdCBvYnNlcnZhYmxlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwidXBkYXRlTGlzdGVuZXJzSGVscGVyXCIpKGZhbHNlKTtcbn1cbmNvbnN0IGRhdGVQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBEYXRlUGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbm9kZS5vZmYoXCJkYXRlQ2hhbmdlXCIsIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm9uRGF0ZUNoYW5nZVwiKSk7XG59XG5jb25zdCBsaXN0UGlja2VySW1wbCA9IDxUIGV4dGVuZHMgTGlzdFBpY2tlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSB0aGlzLmdldEN1cnJlbnRSZWYoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9mZihcInNlbGVjdGVkSW5kZXhDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25TZWxlY3RlZEluZGV4Q2hhbmdlXCIpKTtcbn1cbmNvbnN0IHNlYXJjaEJhckltcGwgPSA8VCBleHRlbmRzIFNlYXJjaEJhcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5vZmYoXCJ0ZXh0Q2hhbmdlXCIsIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm9uVGV4dENoYW5nZVwiKSk7XG59XG5cbi8qICh0aGlzIHNsaWRlciBpbXBsIG5vdCB0aGUgc2FtZSBhcyB0aGUgb3RoZXJzLiBJcyBwcm9iYWJseSBhbiBlcnJvcikgKi9cbmNvbnN0IHNsaWRlckltcGwgPSA8VCBleHRlbmRzIFNsaWRlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgbm9kZS5vZmYoXCJ2YWx1ZUNoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblZhbHVlQ2hhbmdlXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKVxufVxuY29uc3Qgc3dpdGNoSW1wbCA9IDxUIGV4dGVuZHMgU3dpdGNoPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9mZihcImNoZWNrZWRDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25Ub2dnbGVcIikpO1xufSIsIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCdXR0b24sIFRleHRGaWVsZCwgSHRtbFZpZXcsIExhYmVsIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihuYW1lOnN0cmluZywgaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBvYnNlcnZhYmxlOiBUKTogUmVhY3QuUmVhY3ROb2RlID0+IHtcbiAgICByZXR1cm4gZXhlY3V0ZUluT3JkZXIoW2dlbmVyaWNJbXBsLCBidXR0b25JbXBsLCB0ZXh0RmllbGRJbXBsLCBodG1sVmlld0ltcGwsIGxhYmVsSW1wbF0sIG5hbWUsIGluc3RhbmNlLCBvYnNlcnZhYmxlKTtcbn1cbmNvbnN0IGdlbmVyaWNJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihuYW1lOiBzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgb2JzZXJ2YWJsZTogVCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJpYyByZW5kZXJcIik7XG4gICAgY29uc3QgeyBmb3J3YXJkZWRSZWYsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBpbnN0YW5jZS5wcm9wc1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBuYW1lLFxuICAgICAgICB7XG4gICAgICAgIC4uLnJlc3QsXG4gICAgICAgIHJlZjogZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpLFxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICk7XG59XG5cbmNvbnN0IGJ1dHRvbkltcGwgPSAobmFtZTpzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxCdXR0b24+LCBvYnNlcnZhYmxlOiBCdXR0b24pID0+IHtcbiAgICBpZihvYnNlcnZhYmxlIGluc3RhbmNlb2YgQnV0dG9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYnV0dG9uSW1wbFwiKTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZm9yd2FyZGVkUmVmLFxuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIGZvcm1hdHRlZFRleHQsXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgfSA9IGluc3RhbmNlLnByb3BzO1xuICAgIFxuICAgICAgICBpZiAodGV4dCAmJiBmb3JtYXR0ZWRUZXh0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEJvdGggdGV4dCBhbmQgZm9ybWF0dGVkVGV4dCBwcm92aWRlZDsgc2hhbGwgdXNlIGZvcm1hdHRlZFRleHQuYCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSB7XG4gICAgICAgICAgICBbZm9ybWF0dGVkVGV4dCA/IFwiZm9ybWF0dGVkVGV4dFwiIDogXCJ0ZXh0XCJdOiBmb3JtYXR0ZWRUZXh0IHx8IHRleHQsXG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmVcIiwgLy8gTmF0aXZlU2NyaXB0IGRlZmF1bHRzIGZyb20gZG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgLi4udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW4gLy8gV2VpcmQgdGhhdCBhIGJ1dHRvbiBtYXkgY29udGFpbiBjaGlsZHJlbiwgYnV0IHdoYXQgZG8gSSBrbm93LlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCB0ZXh0RmllbGRJbXBsID0gKG5hbWU6c3RyaW5nLCBpbnN0YW5jZTogUmVhY3RpZnk8VGV4dEZpZWxkPiwgb2JzZXJ2YWJsZTogVGV4dEZpZWxkKSA9PiB7XG4gICAgaWYob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIFRleHRGaWVsZCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmb3J3YXJkZWRSZWYsXG4gICAgXG4gICAgXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgZm9ybWF0dGVkVGV4dCxcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICB9ID0gaW5zdGFuY2UucHJvcHM7XG4gICAgXG4gICAgICAgIGlmICh0ZXh0ICYmIGZvcm1hdHRlZFRleHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQm90aCB0ZXh0IGFuZCBmb3JtYXR0ZWRUZXh0IHByb3ZpZGVkOyBzaGFsbCB1c2UgZm9ybWF0dGVkVGV4dC5gKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IHtcbiAgICAgICAgICAgIFtmb3JtYXR0ZWRUZXh0ID8gXCJmb3JtYXR0ZWRUZXh0XCIgOiBcInRleHRcIl06IGZvcm1hdHRlZFRleHQgfHwgdGV4dCxcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgLi4udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW4gLy8gV2VpcmQgdGhhdCBhIFRleHRGaWVsZCBtYXkgY29udGFpbiBjaGlsZHJlbiwgYnV0IHdoYXQgZG8gSSBrbm93LlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBodG1sVmlld0ltcGwgPSAobmFtZTpzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxIdG1sVmlldz4sIG9ic2VydmFibGU6IEh0bWxWaWV3KSA9PiB7XG4gICAgaWYob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIEh0bWxWaWV3KSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgIFxuICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICB9ID0gaW5zdGFuY2UucHJvcHM7XG4gICAgXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiSWdub3JpbmcgJ2NoaWxkcmVuJyBwcm9wIG9uIEh0bWxWaWV3OyBub3QgcGVybWl0dGVkXCIpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICAgICAgICAgIHJlZjogZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgbGFiZWxJbXBsID0gKG5hbWU6c3RyaW5nLCBpbnN0YW5jZTogUmVhY3RpZnk8TGFiZWw+LCBvYnNlcnZhYmxlOiBMYWJlbCkgPT4ge1xuICAgIGlmKG9ic2VydmFibGUgaW5zdGFuY2VvZiBMYWJlbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxhYmVsIGltcGxcIik7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZixcbiAgICBcbiAgICAgICAgICAgIG9uTG9hZGVkLFxuICAgICAgICAgICAgb25VbmxvYWRlZCxcbiAgICAgICAgICAgIG9uQW5kcm9pZEJhY2tQcmVzc2VkLFxuICAgICAgICAgICAgb25TaG93aW5nTW9kYWxseSxcbiAgICAgICAgICAgIG9uU2hvd25Nb2RhbGx5LFxuICAgIFxuICAgICAgICAgICAgb25UYXAsXG4gICAgICAgICAgICBvbkRvdWJsZVRhcCxcbiAgICAgICAgICAgIG9uUGluY2gsXG4gICAgICAgICAgICBvblBhbixcbiAgICAgICAgICAgIG9uU3dpcGUsXG4gICAgICAgICAgICBvblJvdGF0aW9uLFxuICAgICAgICAgICAgb25Mb25nUHJlc3MsXG4gICAgICAgICAgICBvblRvdWNoLFxuICAgIFxuICAgICAgICAgICAgb25Qcm9wZXJ0eUNoYW5nZSxcbiAgICBcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBmb3JtYXR0ZWRUZXh0LFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgIH0gPSBpbnN0YW5jZS5wcm9wcztcbiAgICBcbiAgICAgICAgaWYgKHRleHQgJiYgZm9ybWF0dGVkVGV4dCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBCb3RoIHRleHQgYW5kIGZvcm1hdHRlZFRleHQgcHJvdmlkZWQ7IHNoYWxsIHVzZSBmb3JtYXR0ZWRUZXh0LmApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0ge1xuICAgICAgICAgICAgW2Zvcm1hdHRlZFRleHQgPyBcImZvcm1hdHRlZFRleHRcIiA6IFwidGV4dFwiXTogZm9ybWF0dGVkVGV4dCB8fCB0ZXh0LFxuICAgICAgICB9O1xuICAgIFxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgICAgICAuLi50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICByZWY6IGZvcndhcmRlZFJlZiB8fCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJteVJlZlwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbiAvLyBXZWlyZCB0aGF0IGEgTGFiZWwgbWF5IGNvbnRhaW4gY2hpbGRyZW4sIGJ1dCB3aGF0IGRvIEkga25vdy5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcblxuaW1wb3J0IHsgRXh0cmFQcm9wcyB9IGZyb20gXCJ+L1JlYWN0aWZpZWQvRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9zaGFsbG93RXF1YWxcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cblxuZXhwb3J0IGNvbnN0IHNob3VsZENvbXBvbmVudFVwZGF0ZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbmV4dFByb3BzOiBUICYgRXh0cmFQcm9wczxUPiwgbmV4dFN0YXRlOiBhbnkpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZUltcGwoaW5zdGFuY2UsIG5leHRQcm9wcywgbmV4dFN0YXRlKTtcbn1cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5leHRQcm9wczogVCAmIEV4dHJhUHJvcHM8VD4sIG5leHRTdGF0ZTogYW55KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYE9ic2VydmFibGUncyBzaG91bGRDb21wb25lbnRVcGRhdGVgKTtcbiAgICBjb25zdCBzaG91bGRVcGRhdGU6IGJvb2xlYW4gPSAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBbc2hvdWxkQ29tcG9uZW50VXBkYXRlXSBzaG91bGRVcGRhdGU6ICR7c2hvdWxkVXBkYXRlfS5gKTtcbiAgICBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJ1cGRhdGVMaXN0ZW5lcnNIZWxwZXJcIikobnVsbCwgbmV4dFByb3BzKTtcbiAgICAvLyBodHRwczovL2x1Y3liYWluLmNvbS9ibG9nLzIwMTgvcmVhY3QtanMtcHVyZS1jb21wb25lbnQvXG4gICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBWaWV3QmFzZSwgVmlldywgUGFnZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcblxuZXhwb3J0IHR5cGUgUmVhY3RpZnk8VCBleHRlbmRzIE9ic2VydmFibGU+ID0gUmVhY3QuQ29tcG9uZW50PFQgJiBFeHRyYVByb3BzPFQ+LCBhbnk+O1xuXG5leHBvcnQgdHlwZSBQcm9wczxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4gPSBUICYgRXh0cmFQcm9wczxUPjtcblxuXG4vKlxuZXhwb3J0IHR5cGUgT2JzZXJ2YWJsZTxUPiA9IFQgZXh0ZW5kcyBPYnNlcnZhYmxlID8gUmVhY3RpZnk8T2JzZXJ2YWJsZT4gOiBFbXB0eVxuXG5leHBvcnQgdHlwZSBWaWV3QmFzZTxUPiA9IFQgZXh0ZW5kcyBWaWV3QmFzZSA/IFJlYWN0aWZ5PFZpZXdCYXNlPiA6IEVtcHR5O1xuXG5leHBvcnQgdHlwZSBWaWV3PFQ+ID0gVCBleHRlbmRzIFZpZXcgPyBSZWFjdGlmeTxWaWV3PiA6IEVtcHR5O1xuXG5pbnRlcmZhY2UgRW1wdHkge1xuXG59XG4qL1xuLypcbmV4cG9ydCBjb25zdCB0cnlDYXN0ID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBpZigoaW5zdGFuY2UucHJvcHMpIGFzIFByb3BzPFQ+KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2FzIGluc3RhbmNlXCIpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiV2FzIG5vdCBpbnN0YW5jZVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cbiovXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzM5MjM0OS9ob3ctY2FuLWktY2hlY2staWYtZWxlbWVudC1pcy1hbi1pbnN0YW5jZW9mLXVcbi8qXG5leHBvcnQgZnVuY3Rpb24gdHJ5Q2FzdDxUPihpbnN0YW5jZTogYW55KSB7XG4gICAgaWYoaW5zdGFuY2UgaW5zdGFuY2VvZiBUKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FzXCIpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwid2FzIG5vdFwiKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cbiovXG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzNTMzMzc0L2NvbXBhcmUtdHlwZXMtaW4tZ2VuZXJpYy1mdW5jdGlvbi11c2luZy10eXBlc2NyaXB0XG4vLyBoZWxwZXIgbWV0aG9kIHRvIGJlIGFibGUgdG8gY2FzdCBSZWFjdGlmeTxPYnNlcnZhYmxlPiB0byBSZWFjdGlmeTxWaWV3PiAgZXRjXG5cblxuLy8gaGVscGVyIG1ldGhvZCB0byBiZSBhYmxlIHRvIGNhc3QgUmVhY3RpZnk8T2JzZXJ2YWJsZT4gdG8gUmVhY3RpZnk8Vmlldz4gIGV0YyBcbmV4cG9ydCBjb25zdCB0cnlDYXN0ID0gPFQ+KHBhcmFtZXRlcjogYW55KSA9PiB7XG4gICAgcmV0dXJuIHBhcmFtZXRlciBhcyBUO1xufVxuIiwiXG5pbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgb25EYXRhQ2hhbmdlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEgKSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoW2RhdGVQaWNrZXJJbXBsXSwgaW5zdGFuY2UsIGFyZ3MpO1xufVxuXG5jb25zdCBkYXRlUGlja2VySW1wbCA9IDxUIGV4dGVuZHMgRGF0ZVBpY2tlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICBjb25zdCBkYXRlOiBEYXRlID0gKDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0KS5kYXRlO1xuICAgIGluc3RhbmNlLnByb3BzLm9uRGF0ZUNoYW5nZSAmJiBpbnN0YW5jZS5wcm9wcy5vbkRhdGVDaGFuZ2UoZGF0ZSk7XG59XG4iLCJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgTGlzdFBpY2tlciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3Qgb25TZWxlY3RJbmRleENoYW5nZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoW2xpc3RQaWNrZXJJbXBsXSwgaW5zdGFuY2UsIGFyZ3MpO1xufVxuY29uc3QgbGlzdFBpY2tlckltcGwgPSA8VCBleHRlbmRzIExpc3RQaWNrZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gKDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0KS5zZWxlY3RlZEluZGV4O1xuICAgIGluc3RhbmNlLnByb3BzLm9uU2VsZWN0ZWRJbmRleENoYW5nZSAmJiBpbnN0YW5jZS5wcm9wcy5vblNlbGVjdGVkSW5kZXhDaGFuZ2Uoc2VsZWN0ZWRJbmRleCk7XG59IiwiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIFNlYXJjaEJhciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3Qgb25UZXh0Q2hhbmdlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICBleGVjdXRlSW5PcmRlcihbc2VhcmNoQmFySW1wbF0sIGluc3RhbmNlLCBhcmdzKTtcbn1cbmNvbnN0IHNlYXJjaEJhckltcGwgPSA8VCBleHRlbmRzIFNlYXJjaEJhcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICBjb25zdCB0ZXh0OiBzdHJpbmcgPSAoPFNlYXJjaEJhcj5hcmdzLm9iamVjdCkudGV4dDtcbiAgICBpbnN0YW5jZS5wcm9wcy5vblRleHRDaGFuZ2UgJiYgaW5zdGFuY2UucHJvcHMub25UZXh0Q2hhbmdlKHRleHQpO1xufSIsImltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IG9uVG9nZ2xlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEgKSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoW3N3aXRjaEltcGxdLCBpbnN0YW5jZSwgYXJncyk7XG59XG5cbmNvbnN0IHN3aXRjaEltcGwgPSA8VCBleHRlbmRzIFN3aXRjaD4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICBjb25zdCBjaGVja2VkOiBib29sZWFuID0gKDxTd2l0Y2g+YXJncy5vYmplY3QpLmNoZWNrZWQ7XG5cbiAgICAgICAgaW5zdGFuY2UucHJvcHMub25Ub2dnbGUgJiYgaW5zdGFuY2UucHJvcHMub25Ub2dnbGUoY2hlY2tlZCk7XG59IiwiaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgb25WYWx1ZUNoYW5nZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXJnczogRXZlbnREYXRhICkgPT4ge1xuICAgIGV4ZWN1dGVJbk9yZGVyKFtzbGlkZXJJbXBsXSwgaW5zdGFuY2UsIGFyZ3MpO1xufVxuLyogdHlwbyBmb3VuZCBpbiBodHRwczovL2dpdGh1Yi5jb20vc2hpcmFrYWJhL3JlYWN0LW5hdGl2ZXNjcmlwdC9ibG9iL21hc3Rlci9yZWFjdC1uYXRpdmVzY3JpcHQvc3JjL2NvbXBvbmVudHMvU2xpZGVyLnRzICovXG5jb25zdCBzbGlkZXJJbXBsID0gPFQgZXh0ZW5kcyBTbGlkZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVyVmFsdWU6IG51bWJlciA9ICg8U2xpZGVyPmFyZ3Mub2JqZWN0KS52YWx1ZTtcblxuICAgICAgICBpbnN0YW5jZS5wcm9wcy5vblZhbHVlQ2hhbmdlICYmIGluc3RhbmNlLnByb3BzLm9uVmFsdWVDaGFuZ2Uoc2xpZGVyVmFsdWUpO1xufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbi8vIGltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwiLi4vRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi9UeXBlc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UmVmSW1wbCA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPik6IFQgfCBudWxsIHtcbiAgICBjb25zdCByZWYgPSAoaW5zdGFuY2UucHJvcHMuZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpKS5jdXJyZW50O1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0Q3VycmVudFJlZkltcGw6IFwiICsgcmVmKTtcbiAgICByZXR1cm4gcmVmO1xufVxuXG5cblxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcbi8vIGltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4vVHlwZXNcIjtcblxuLypcbmV4cG9ydCBjb25zdCBvYnNlcnZhYmxlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPj4sIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFApID0+IHtcbiAgICBcbn1cbiovXG5leHBvcnQgY29uc3QgdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIG9ic2VydmFibGVJbXBsKGluc3RhbmNlLCBhdHRhY2gsIG5leHRQcm9wcyk7XG59XG5cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcInVwZGF0ZUxpc3RlbmVyc1wiKShub2RlLCBhdHRhY2gsIG5leHRQcm9wcyk7XG59IiwiXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtcbiAgICBPYnNlcnZhYmxlLFxuICAgIFZpZXcsXG4gICAgUGFnZSxcbiAgICBBY3Rpb25JdGVtLFxuICAgIEVkaXRhYmxlVGV4dEJhc2UsXG4gICAgRnJhbWUsXG4gICAgUGxhY2Vob2xkZXIsXG4gICAgU2Nyb2xsVmlldyxcbiAgICBTZWFyY2hCYXIsXG4gICAgU2VnbWVudGVkQmFyXG59IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwiLi4vRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgdXBkYXRlTGlzdGVuZXIgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0V2ZW50SGFuZGxpbmdcIjtcbmltcG9ydCB7IEdlc3R1cmVUeXBlcyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyB0cnlDYXN0LCBQcm9wcywgUmVhY3RpZnkgfSBmcm9tIFwiLi9UeXBlc1wiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi9IZWxwZXJzXCI7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVMaXN0ZW5lcnNJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4gLG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFByb3BzPFQ+KSA9PiB7XG4gICAgXG4gICAgLyogaW1wbGVtZW50YXRpb24gZm9yIGFueSBybnMgY29tcG9uZW50IGhlcmUgLSBvciBvbiByZWFjdGlmeSBjbGFzcyBib2R5Ki9cbiAgICBleGVjdXRlSW5PcmRlcihcbiAgICAgICAgW3BhZ2VJbXBsLFxuICAgICAgICB2aWV3SW1wbCxcbiAgICAgICAgb2JzZXJ2YWJsZUltcGwsXG4gICAgICAgIGFjdGlvbkl0ZW1JbXBsLFxuICAgICAgICBlZGl0YWJsZVRleHRCYXNlSW1wbCxcbiAgICAgICAgZnJhbWVJbXBsLFxuICAgICAgICBwbGFjZWhvbGRlckltcGwsXG4gICAgICAgIHNjcm9sbFZpZXdJbXBsLFxuICAgICAgICBzZWFyY2hCYXJJbXBsLFxuICAgICAgICBzZWdtZW50ZWRCYXJJbXBsXG4gICAgXSxcbiAgICBpbnN0YW5jZSwgbm9kZSwgYXR0YWNoKTtcbn1cblxuY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxPYnNlcnZhYmxlPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm9ic2VydmFibGVJbXBsXCIpO1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJwcm9wZXJ0eUNoYW5nZVwiLCBpbnN0YW5jZS5wcm9wcy5vblByb3BlcnR5Q2hhbmdlLCBuZXh0UHJvcHMub25Qcm9wZXJ0eUNoYW5nZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uUHJvcGVydHlDaGFuZ2UpIG1ldGhvZChcInByb3BlcnR5Q2hhbmdlXCIsIGluc3RhbmNlLnByb3BzLm9uUHJvcGVydHlDaGFuZ2UpO1xuICAgIH1cbiAgICBcbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NoaXJha2FiYS9yZWFjdC1uYXRpdmVzY3JpcHQvYmxvYi9tYXN0ZXIvcmVhY3QtbmF0aXZlc2NyaXB0L3NyYy9jb21wb25lbnRzL1ZpZXcudHNcbmNvbnN0IHZpZXdJbXBsID0gPFQgZXh0ZW5kcyBWaWV3PihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ2aWV3IGltcGxcIik7XG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcImxvYWRlZFwiLCBpbnN0YW5jZS5wcm9wcy5vbkxvYWRlZCwgbmV4dFByb3BzLm9uTG9hZGVkKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJ1bmxvYWRlZFwiLCBpbnN0YW5jZS5wcm9wcy5vblVubG9hZGVkLCBuZXh0UHJvcHMub25VbmxvYWRlZCk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwiYW5kcm9pZEJhY2tQcmVzc2VkXCIsIGluc3RhbmNlLnByb3BzLm9uQW5kcm9pZEJhY2tQcmVzc2VkLCBuZXh0UHJvcHMub25BbmRyb2lkQmFja1ByZXNzZWQpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInNob3dpbmdNb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd2luZ01vZGFsbHksIG5leHRQcm9wcy5vblNob3dpbmdNb2RhbGx5KTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJzaG93bk1vZGFsbHlcIiwgaW5zdGFuY2UucHJvcHMub25TaG93bk1vZGFsbHksIG5leHRQcm9wcy5vblNob3duTW9kYWxseSk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy50YXAsIGluc3RhbmNlLnByb3BzLm9uVGFwLCBuZXh0UHJvcHMub25UYXAsIFwidGFwXCIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMuZG91YmxlVGFwLCBpbnN0YW5jZS5wcm9wcy5vbkRvdWJsZVRhcCwgbmV4dFByb3BzLm9uRG91YmxlVGFwLCBcImRvdWJsZVRhcFwiKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLnBpbmNoLCBpbnN0YW5jZS5wcm9wcy5vblBpbmNoLCBuZXh0UHJvcHMub25QaW5jaCwgXCJwaW5jaFwiKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLnBhbiwgaW5zdGFuY2UucHJvcHMub25QYW4sIG5leHRQcm9wcy5vblBhbiwgXCJwYW5cIik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5zd2lwZSwgaW5zdGFuY2UucHJvcHMub25Td2lwZSwgbmV4dFByb3BzLm9uU3dpcGUsIFwic3dpcGVcIik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5yb3RhdGlvbiwgaW5zdGFuY2UucHJvcHMub25Sb3RhdGlvbiwgbmV4dFByb3BzLm9uUm90YXRpb24sIFwicm90YXRpb25cIik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5sb25nUHJlc3MsIGluc3RhbmNlLnByb3BzLm9uTG9uZ1ByZXNzLCBuZXh0UHJvcHMub25Mb25nUHJlc3MsIFwibG9uZ1ByZXNzXCIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMudG91Y2gsIGluc3RhbmNlLnByb3BzLm9uVG91Y2gsIG5leHRQcm9wcy5vblRvdWNoLCBcInRvdWNoXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkxvYWRlZCkgbWV0aG9kKFwibG9hZGVkXCIsIGluc3RhbmNlLnByb3BzLm9uTG9hZGVkKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uVW5sb2FkZWQpIG1ldGhvZChcInVubG9hZGVkXCIsIGluc3RhbmNlLnByb3BzLm9uVW5sb2FkZWQpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25BbmRyb2lkQmFja1ByZXNzZWQpIG1ldGhvZChcImFuZHJvaWRCYWNrUHJlc3NlZFwiLCBpbnN0YW5jZS5wcm9wcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNob3dpbmdNb2RhbGx5KSBtZXRob2QoXCJzaG93aW5nTW9kYWxseVwiLCBpbnN0YW5jZS5wcm9wcy5vblNob3dpbmdNb2RhbGx5KTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uU2hvd25Nb2RhbGx5KSBtZXRob2QoXCJzaG93bk1vZGFsbHlcIiwgaW5zdGFuY2UucHJvcHMub25TaG93bk1vZGFsbHkpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25UYXApIG1ldGhvZChHZXN0dXJlVHlwZXMudGFwLCBpbnN0YW5jZS5wcm9wcy5vblRhcCk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkRvdWJsZVRhcCkgbWV0aG9kKEdlc3R1cmVUeXBlcy5kb3VibGVUYXAsIGluc3RhbmNlLnByb3BzLm9uRG91YmxlVGFwKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uUGluY2gpIG1ldGhvZChHZXN0dXJlVHlwZXMucGluY2gsIGluc3RhbmNlLnByb3BzLm9uUGluY2gpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25QYW4pIG1ldGhvZChHZXN0dXJlVHlwZXMucGFuLCBpbnN0YW5jZS5wcm9wcy5vblBhbik7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblN3aXBlKSBtZXRob2QoR2VzdHVyZVR5cGVzLnN3aXBlLCBpbnN0YW5jZS5wcm9wcy5vblN3aXBlKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uUm90YXRpb24pIG1ldGhvZChHZXN0dXJlVHlwZXMucm90YXRpb24sIGluc3RhbmNlLnByb3BzLm9uUm90YXRpb24pO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25Mb25nUHJlc3MpIG1ldGhvZChHZXN0dXJlVHlwZXMubG9uZ1ByZXNzLCBpbnN0YW5jZS5wcm9wcy5vbkxvbmdQcmVzcyk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblRvdWNoKSBtZXRob2QoR2VzdHVyZVR5cGVzLnRvdWNoLCBpbnN0YW5jZS5wcm9wcy5vblRvdWNoKTtcbiAgICB9XG59XG5cbmNvbnN0IGFjdGlvbkl0ZW1JbXBsID0gPFQgZXh0ZW5kcyBBY3Rpb25JdGVtPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgLyogdGFwIGFzc2lnbmluZyB0YXAgb24gYWN0aW9uaXRlbSBjcmFzaGVzICovXG4gICAgLyogc2hvdWxkIGJlIGNvbmRpdGlvbmFsbHkgcmFuIHNvIHRoYXQgdHdvIHRhcCBnZXN0dXJlIHJlY29nbml6ZXJzIGFyZW4ndCBhZGRlZCovXG4gICAgaWYobm9kZSBpbnN0YW5jZW9mIEFjdGlvbkl0ZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb25JdGVtSW1wbFwiKVxuICAgICAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInRhcFwiLCBpbnN0YW5jZS5wcm9wcy5vblRhcCwgbmV4dFByb3BzLm9uVGFwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25UYXApIG1ldGhvZChcInRhcFwiLCBpbnN0YW5jZS5wcm9wcy5vblRhcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5jb25zdCBwYWdlSW1wbCA9IDxUIGV4dGVuZHMgUGFnZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicGFnZUltcGxcIik7XG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcIm5hdmlnYXRlZEZyb21cIiwgaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0ZWRGcm9tLCBuZXh0UHJvcHMub25OYXZpZ2F0ZWRGcm9tKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJuYXZpZ2F0ZWRUb1wiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZFRvLCBuZXh0UHJvcHMub25OYXZpZ2F0ZWRUbyk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibmF2aWdhdGluZ0Zyb21cIiwgaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nRnJvbSwgbmV4dFByb3BzLm9uTmF2aWdhdGluZ0Zyb20pO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcIm5hdmlnYXRpbmdUb1wiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdUbywgbmV4dFByb3BzLm9uTmF2aWdhdGluZ1RvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkRnJvbSkgbWV0aG9kKFwibmF2aWdhdGVkRnJvbVwiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZEZyb20pO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0ZWRUbykgbWV0aG9kKFwibmF2aWdhdGVkVG9cIiwgaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0ZWRUbyk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdGcm9tKSBtZXRob2QoXCJuYXZpZ2F0aW5nRnJvbVwiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdGcm9tKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ1RvKSBtZXRob2QoXCJuYXZpZ2F0aW5nVG9cIiwgaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nVG8pO1xuICAgIH1cbn1cblxuY29uc3QgZWRpdGFibGVUZXh0QmFzZUltcGwgPSA8VCBleHRlbmRzIEVkaXRhYmxlVGV4dEJhc2U+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwiYmx1clwiLCBpbnN0YW5jZS5wcm9wcy5vbkJsdXIsIG5leHRQcm9wcy5vbkJsdXIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcImZvY3VzXCIsIGluc3RhbmNlLnByb3BzLm9uRm9jdXMsIG5leHRQcm9wcy5vbkZvY3VzKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJ0ZXh0Q2hhbmdlXCIsIGluc3RhbmNlLnByb3BzLm9uVGV4dENoYW5nZSwgbmV4dFByb3BzLm9uVGV4dENoYW5nZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uQmx1cikgbWV0aG9kKFwiYmx1clwiLCBpbnN0YW5jZS5wcm9wcy5vbkJsdXIpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25Gb2N1cykgbWV0aG9kKFwiZm9jdXNcIiwgaW5zdGFuY2UucHJvcHMub25Gb2N1cyk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblRleHRDaGFuZ2UpIG1ldGhvZChcInRleHRDaGFuZ2VcIiwgaW5zdGFuY2UucHJvcHMub25UZXh0Q2hhbmdlKTtcbiAgICB9XG59XG5jb25zdCBmcmFtZUltcGwgPSA8VCBleHRlbmRzIEZyYW1lPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcIm9wdGlvblNlbGVjdGVkXCIsIGluc3RhbmNlLnByb3BzLm9uT3B0aW9uU2VsZWN0ZWQsIG5leHRQcm9wcy5vbk9wdGlvblNlbGVjdGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbk9wdGlvblNlbGVjdGVkKSBtZXRob2QoXCJvcHRpb25TZWxlY3RlZFwiLCBpbnN0YW5jZS5wcm9wcy5vbk9wdGlvblNlbGVjdGVkKTtcbiAgICB9XG59XG5jb25zdCBwbGFjZWhvbGRlckltcGwgPSA8VCBleHRlbmRzIFBsYWNlaG9sZGVyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7IFxuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJjcmVhdGluZ1ZpZXdcIiwgaW5zdGFuY2UucHJvcHMub25DcmVhdGluZ1ZpZXcsIG5leHRQcm9wcy5vbkNyZWF0aW5nVmlldyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uQ3JlYXRpbmdWaWV3KSBtZXRob2QoXCJjcmVhdGluZ1ZpZXdcIiwgaW5zdGFuY2UucHJvcHMub25DcmVhdGluZ1ZpZXcpO1xuICAgIH1cbn1cbmNvbnN0IHNjcm9sbFZpZXdJbXBsID0gPFQgZXh0ZW5kcyBTY3JvbGxWaWV3PihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7IFxuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJzY3JvbGxcIiwgdGhpcy5wcm9wcy5vblNjcm9sbCwgbmV4dFByb3BzLm9uU2Nyb2xsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgIFxuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TY3JvbGwpIG1ldGhvZChcInNjcm9sbFwiLCBpbnN0YW5jZS5wcm9wcy5vblNjcm9sbCk7XG4gICAgfVxufVxuY29uc3Qgc2VhcmNoQmFySW1wbCA9IDxUIGV4dGVuZHMgU2VhcmNoQmFyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7IFxuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJzdWJtaXRcIiwgaW5zdGFuY2UucHJvcHMub25TdWJtaXQsIG5leHRQcm9wcy5vblN1Ym1pdCk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwiY2xvc2VcIiwgaW5zdGFuY2UucHJvcHMub25DbG9zZSwgbmV4dFByb3BzLm9uQ2xvc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uU3VibWl0KSBtZXRob2QoXCJzdWJtaXRcIiwgaW5zdGFuY2UucHJvcHMub25TdWJtaXQpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25DbG9zZSkgbWV0aG9kKFwiY2xvc2VcIiwgaW5zdGFuY2UucHJvcHMub25DbG9zZSk7XG4gICAgfVxufVxuY29uc3Qgc2VnbWVudGVkQmFySW1wbCA9IDxUIGV4dGVuZHMgU2VnbWVudGVkQmFyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7IFxuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIoXG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgXCJzZWxlY3RlZEluZGV4Q2hhbmdlZFwiLFxuICAgICAgICAgICAgaW5zdGFuY2UucHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlZCxcbiAgICAgICAgICAgIG5leHRQcm9wcy5vblNlbGVjdGVkSW5kZXhDaGFuZ2VkXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlZCkgbWV0aG9kKFwic2VsZWN0ZWRJbmRleENoYW5nZWRcIiwgaW5zdGFuY2UucHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlZCk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCByZWdpc3RlciwgQ29udGVudFZpZXcgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgbmFtZU9mLCBmaXJzdExldHRlckxvd2VyY2FzZSB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL0hlbHBlcnNcIjtcbmltcG9ydCB7IHJlbmRlckltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9SZWFjdC9yZW5kZXJJbXBsXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50UmVmSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsXCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4vRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgdXBkYXRlTGlzdGVuZXJzSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGxcIjtcbmltcG9ydCB7IGNvbXBvbmVudERpZE1vdW50SW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudERpZE1vdW50SW1wbFwiO1xuaW1wb3J0IHsgc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1JlYWN0L3Nob3VsZENvbXBvbmVudFVwZGF0ZUltcGxcIjtcbmltcG9ydCB7IGNvbXBvbmVudFdpbGxVbm1vdW50SW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudFdpbGxVbm1vdW50SW1wbFwiO1xuaW1wb3J0IHsgX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsXCI7XG5pbXBvcnQgeyBfX2N1c3RvbUhvc3RDb25maWdSZW1vdmVDaGlsZEltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdSZW1vdmVDaGlsZEltcGxcIjtcbmltcG9ydCB7IF9fY3VzdG9tSG9zdENvbmZpZ0luc2VydEJlZm9yZUltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmVJbXBsXCI7XG5pbXBvcnQgeyBvbkRhdGFDaGFuZ2VJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vVW5pcXVlL29uRGF0YUNoYW5nZUltcGxcIjtcbmltcG9ydCB7IEN1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L3NoYXJlZC9Ib3N0Q29uZmlnVHlwZXNcIjtcbmltcG9ydCB7IHVwZGF0ZUxpc3RlbmVyc0hlbHBlckltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi91cGRhdGVMaXN0ZW5lcnNIZWxwZXJJbXBsXCI7XG5pbXBvcnQgeyBvblNlbGVjdEluZGV4Q2hhbmdlSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblNlbGVjdGVkSW5kZXhDaGFuZ2VJbXBsXCI7XG5pbXBvcnQgeyBvblRleHRDaGFuZ2VJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVGV4dENoYW5nZUltcGxcIjtcbmltcG9ydCB7IG9uVmFsdWVDaGFuZ2VJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVmFsdWVDaGFuZ2VJbXBsXCI7XG5pbXBvcnQgeyBvblRvZ2dsZUltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25Ub2dnbGVJbXBsXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gUmVhY3RpZmllZDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ob2JzZXJ2YWJsZTogVCwgbmFtZT86IHN0cmluZykgeyBcblxuICAgIGlmKCFuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBmaXJzdExldHRlckxvd2VyY2FzZShuYW1lT2Yob2JzZXJ2YWJsZSkpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyaW5nIFwiICsgbmFtZSk7XG4gICAgcmVnaXN0ZXIobmFtZSwgKCkgPT4ge1xuICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH0pO1xuICAgIC8vIGxldCBzZWxmOiBSZWFjdGlmeSA9IG51bGw7XG4gICAgY2xhc3MgUmVhY3RpZnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VCAmIEV4dHJhUHJvcHM8VD4sIGFueT4gaW1wbGVtZW50cyBDdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlcjxUPiB7XG4gICAgICAgIHN0YXRpYyBjb3VudE9mSW5zdGFuY2VzID0gMDtcbiAgICAgICAgLy8gc3RhdGljIGRlZmF1bHRQcm9wcyA9IHsuLi4gb2JzZXJ2YWJsZSB9IFxuICAgICAgICAvKlxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wczogVCAmIEV4dHJhUHJvcHM8VD4pIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgIFJlYWN0aWZ5LmNvdW50T2ZJbnN0YW5jZXMgKys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdGluZyBpbnN0YW5jZSBcIiArIFJlYWN0aWZ5LmNvdW50T2ZJbnN0YW5jZXMpO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCByZWFkb25seSBteVJlZjogUmVhY3QuUmVmT2JqZWN0PFQ+ID0gUmVhY3QuY3JlYXRlUmVmPFQ+KCk7XG4gICAgICAgIHByb3RlY3RlZCBnZXRDdXJyZW50UmVmID0gKCk6IFQgfCBudWxsID0+IHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5mb3J3YXJkZWRSZWYgfHwgdGhpcy5teVJlZikuY3VycmVudDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciB1cGRhdGVMaXN0ZW5lcnM6IHNpbXBseSBnZXRzIHRoZSBjdXJyZW50IHJlZiB0byBwYXNzIG9uIHRvIGl0LlxuICAgICAgICAqIEBwYXJhbSBhdHRhY2ggdHJ1ZTogYXR0YWNoOyBmYWxzZTogZGV0YWNoOyBudWxsOiB1cGRhdGVcbiAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUxpc3RlbmVyc0hlbHBlciA9IChhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPik6IHZvaWQgID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyc0hlbHBlckltcGwodGhpcywgYXR0YWNoLCBuZXh0UHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAqXG4gICAgICAgICogQHBhcmFtIGF0dGFjaCB0cnVlOiBhdHRhY2g7IGZhbHNlOiBkZXRhY2g7IG51bGw6IHVwZGF0ZVxuICAgICAgICAqL1xuICAgIFxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlTGlzdGVuZXJzID0gKG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcnNJbXBsKHRoaXMsIG5vZGUsIGF0dGFjaCwgbmV4dFByb3BzKTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50RGlkTW91bnRJbXBsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAqIFB1cmVDb21wb25lbnQncyBzaG91bGRDb21wb25lbnRVcGRhdGUoKSBtZXRob2QgaXMgaWdub3JlZCBhbmQgcmVwbGFjZWQgd2l0aCBhIHNoYWxsb3dFcXVhbCgpXG4gICAgICAgICogY29tcGFyaXNvbiBvZiBwcm9wcyBhbmQgc3RhdGUuIFdlJ2xsIGltcGxlbWVudCBvdXIgQ29tcG9uZW50J3Mgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkgdG9cbiAgICAgICAgKiBtYXRjaCB0aGUgd2F5IFB1cmVDb21wb25lbnQgaXMgaGFuZGxlZC5cbiAgICAgICAgKi9cbiAgICAgICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKG5leHRQcm9wczogVCAmIEV4dHJhUHJvcHM8VD4sIG5leHRTdGF0ZTogYW55KTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbCh0aGlzLCBuZXh0UHJvcHMsIG5leHRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZUxpc3RlbmVyc0hlbHBlcihmYWxzZSk7XG4gICAgICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudEltcGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlciA9ICgpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlckltcGwobmFtZSwgdGhpcywgb2JzZXJ2YWJsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBfX0ltcGxlbWVudHNDdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlcl9fOiB0cnVlO1xuICAgICAgICBfX2N1c3RvbUhvc3RDb25maWdBcHBlbmRDaGlsZD8gPSAocGFyZW50SW5zdGFuY2U6IFQsIGNoaWxkOiBPYnNlcnZhYmxlIHwgaW1wb3J0KFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWJhc2UvdGV4dC1iYXNlXCIpLlRleHRCYXNlKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsKHBhcmVudEluc3RhbmNlLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgX19jdXN0b21Ib3N0Q29uZmlnUmVtb3ZlQ2hpbGQ/ID0gKHBhcmVudEluc3RhbmNlOiBULCBjaGlsZDogT2JzZXJ2YWJsZSB8IGltcG9ydChcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1iYXNlL3RleHQtYmFzZVwiKS5UZXh0QmFzZSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIF9fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbChwYXJlbnRJbnN0YW5jZSwgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIF9fY3VzdG9tSG9zdENvbmZpZ0luc2VydEJlZm9yZT89IChwYXJlbnRJbnN0YW5jZTogVCwgY2hpbGQ6IE9ic2VydmFibGUgfCBpbXBvcnQoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtYmFzZS90ZXh0LWJhc2VcIikuVGV4dEJhc2UsIGJlZm9yZUNoaWxkOiBPYnNlcnZhYmxlIHwgaW1wb3J0KFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWJhc2UvdGV4dC1iYXNlXCIpLlRleHRCYXNlKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbChwYXJlbnRJbnN0YW5jZSwgY2hpbGQsIGJlZm9yZUNoaWxkKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvKiB1bmlxdWUvIGNvbXBsZXRlbHkgY3VzdG9tIHN0dWZmLi4uICovXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgb25EYXRlQ2hhbmdlID0gKGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgb25EYXRhQ2hhbmdlSW1wbCh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBvblNlbGVjdGVkSW5kZXhDaGFuZ2UgPSAoYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICBvblNlbGVjdEluZGV4Q2hhbmdlSW1wbCh0aGlzLCBhcmdzKVxuICAgICAgICB9O1xuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG9uVGV4dENoYW5nZSA9IChhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIG9uVGV4dENoYW5nZUltcGwodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgb25WYWx1ZUNoYW5nZSA9IChhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2VJbXBsKHRoaXMsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG9uVG9nZ2xlID0gKGFyZ3M6IEV2ZW50RGF0YSkgPT4geyBcbiAgICAgICAgICAgIG9uVG9nZ2xlSW1wbCh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiBSZWFjdGlmeTtcbiAgICAgLy8gaGF2ZSB0byBkZWNsYXJlIGNsYXNzIG5hbWUgdG8gbWFrZSBkZWNvcmF0b3JzIHdvcmsgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvNzM0MlxufVxuXG5cbi8vIFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPlxuXG4vKiBcbi8vIEFyZSBub3QgYWN0dWFsbHkgbmVlZGVkID8hXG5mdW5jdGlvbiBKU1g8VCBleHRlbmRzIE9ic2VydmFibGU+KG9ic2VydmFibGU6IG5ldyguLi5hcmdzOiBhbnlbXSkgPT4gUmVhY3QuQ29tcG9uZW50PFQgJiBFeHRyYVByb3BzPFQ+Pikge1xuICAgIHJldHVybiBSZWFjdC5mb3J3YXJkUmVmPFQsIFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxUICYgRXh0cmFQcm9wczxUPj4+KFxuICAgICAgICAocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxUICYgRXh0cmFQcm9wczxUPj4+LCByZWY6IFJlYWN0LlJlZk9iamVjdDxUPikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlXG4gICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgICAgICAgICAgZm9yd2FyZGVkUmVmOiByZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIClcbn1cbiovXG5cblxuXG4vLyBleHBvcnQgY29uc3QgTXlPYnNlcnZhYmxlOiBSZWFjdC5Db21wb25lbnRUeXBlPFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxPYnNlcnZhYmxlPiAmIEV4dHJhUHJvcHM8T2JzZXJ2YWJsZT4+ICYgUmVhY3QuQ2xhc3NBdHRyaWJ1dGVzPE9ic2VydmFibGU+ID0gSlNYKG5ldyBPYnNlcnZhYmxlKCkpO1xuLy8gZXhwb3J0IGNvbnN0IE15QnV0dG9uID0gSlNYKG5ldyBCdXR0b24oKSk7XG4vLyBleHBvcnQgY29uc3QgTXlDb250ZW50VmlldzogUmVhY3QuQ29tcG9uZW50VHlwZTxQcm9wc1dpdGhvdXRGb3J3YXJkZWRSZWY8Q29udGVudFZpZXcgJiBFeHRyYVByb3BzPENvbnRlbnRWaWV3Pj4+ICYgUmVhY3QuQ2xhc3NBdHRyaWJ1dGVzPENvbnRlbnRWaWV3PiA9IEpTWChuZXcgQ29udGVudFZpZXcoKSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXG4qKi9cXG4vKipcXHJcXG4gKiBDb2xvciBjbGFzc2VzXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAuYy1ncmV5e2NvbG9yOiNlMGUwZTB9LmMtYmctZ3JleXtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTB9XFxyXFxuKiovXFxuLmMtd2hpdGUge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1iZy13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLmMtYmxhY2sge1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1iZy1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XFxuXFxuLmMtYXF1YSB7XFxuICBjb2xvcjogIzAwY2FhYjsgfVxcblxcbi5jLWJnLWFxdWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2FhYjsgfVxcblxcbi5jLWJsdWUge1xcbiAgY29sb3I6ICMzZDVhZmU7IH1cXG5cXG4uYy1iZy1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG5cXG4uYy1jaGFyY29hbCB7XFxuICBjb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJnLWNoYXJjb2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7IH1cXG5cXG4uYy1icm93biB7XFxuICBjb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWJnLWJyb3duIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7IH1cXG5cXG4uYy1mb3Jlc3Qge1xcbiAgY29sb3I6ICMwMDY5Njg7IH1cXG5cXG4uYy1iZy1mb3Jlc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWdyZXkge1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uYy1iZy1ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uYy1ncmV5LWxpZ2h0IHtcXG4gIGNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLmMtYmctZ3JleS1saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLmMtZ3JleS1kYXJrIHtcXG4gIGNvbG9yOiAjNWM2ODdjOyB9XFxuXFxuLmMtYmctZ3JleS1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1wdXJwbGUge1xcbiAgY29sb3I6ICM4MTMwZmY7IH1cXG5cXG4uYy1iZy1wdXJwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWxlbW9uIHtcXG4gIGNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtYmctbGVtb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWEwMDsgfVxcblxcbi5jLWxpbWUge1xcbiAgY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uYy1iZy1saW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uYy1vcmFuZ2Uge1xcbiAgY29sb3I6ICNmNTdjMDA7IH1cXG5cXG4uYy1iZy1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLXJ1Ynkge1xcbiAgY29sb3I6ICNmZjE3NDQ7IH1cXG5cXG4uYy1iZy1ydWJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDQ7IH1cXG5cXG4uYy1za3kge1xcbiAgY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYy1iZy1za3kge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcblxcbi8qIFdpZHRoL0hlaWdodCAqL1xcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMDsgfVxcblxcbi5oLWZ1bGwge1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmgtMTAwIHtcXG4gIGhlaWdodDogMTAwOyB9XFxuXFxuLyoqXFxyXFxuICogTWFyZ2luIGFuZCBQYWRkaW5nXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAubS0we21hcmdpbjowfS5tLXQtMHttYXJnaW4tdG9wOjB9Lm0tci0we21hcmdpbi1yaWdodDowfS5tLWItMHttYXJnaW4tYm90dG9tOjB9Lm0tbC0we21hcmdpbi1sZWZ0OjB9Lm0teC0we21hcmdpbi1yaWdodDowO21hcmdpbi1sZWZ0OjB9Lm0teS0we21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxyXFxuICogU2FtZSBmb3IgUGFkZGluZyAodXNpbmcgdGhlICdwJyBhYmJyZXZpYXRpb24pXFxyXFxuICogRnJvbSAwLCAyLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzBcXHJcXG4qKi9cXG4ubS0wIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5tLXQtMCB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLm0tci0wIHtcXG4gIG1hcmdpbi1yaWdodDogMDsgfVxcblxcbi5tLWItMCB7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm0tbC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0teC0wIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0teS0wIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm0tMiB7XFxuICBtYXJnaW46IDI7IH1cXG5cXG4ubS10LTIge1xcbiAgbWFyZ2luLXRvcDogMjsgfVxcblxcbi5tLXItMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI7IH1cXG5cXG4ubS1iLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjsgfVxcblxcbi5tLWwtMiB7XFxuICBtYXJnaW4tbGVmdDogMjsgfVxcblxcbi5tLXgtMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI7XFxuICBtYXJnaW4tbGVmdDogMjsgfVxcblxcbi5tLXktMiB7XFxuICBtYXJnaW4tdG9wOiAyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjsgfVxcblxcbi5tLTQge1xcbiAgbWFyZ2luOiA0OyB9XFxuXFxuLm0tdC00IHtcXG4gIG1hcmdpbi10b3A6IDQ7IH1cXG5cXG4ubS1yLTQge1xcbiAgbWFyZ2luLXJpZ2h0OiA0OyB9XFxuXFxuLm0tYi00IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7IH1cXG5cXG4ubS1sLTQge1xcbiAgbWFyZ2luLWxlZnQ6IDQ7IH1cXG5cXG4ubS14LTQge1xcbiAgbWFyZ2luLXJpZ2h0OiA0O1xcbiAgbWFyZ2luLWxlZnQ6IDQ7IH1cXG5cXG4ubS15LTQge1xcbiAgbWFyZ2luLXRvcDogNDtcXG4gIG1hcmdpbi1ib3R0b206IDQ7IH1cXG5cXG4ubS01IHtcXG4gIG1hcmdpbjogNTsgfVxcblxcbi5tLXQtNSB7XFxuICBtYXJnaW4tdG9wOiA1OyB9XFxuXFxuLm0tci01IHtcXG4gIG1hcmdpbi1yaWdodDogNTsgfVxcblxcbi5tLWItNSB7XFxuICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLm0tbC01IHtcXG4gIG1hcmdpbi1sZWZ0OiA1OyB9XFxuXFxuLm0teC01IHtcXG4gIG1hcmdpbi1yaWdodDogNTtcXG4gIG1hcmdpbi1sZWZ0OiA1OyB9XFxuXFxuLm0teS01IHtcXG4gIG1hcmdpbi10b3A6IDU7XFxuICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLm0tOCB7XFxuICBtYXJnaW46IDg7IH1cXG5cXG4ubS10LTgge1xcbiAgbWFyZ2luLXRvcDogODsgfVxcblxcbi5tLXItOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDg7IH1cXG5cXG4ubS1iLTgge1xcbiAgbWFyZ2luLWJvdHRvbTogODsgfVxcblxcbi5tLWwtOCB7XFxuICBtYXJnaW4tbGVmdDogODsgfVxcblxcbi5tLXgtOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDg7XFxuICBtYXJnaW4tbGVmdDogODsgfVxcblxcbi5tLXktOCB7XFxuICBtYXJnaW4tdG9wOiA4O1xcbiAgbWFyZ2luLWJvdHRvbTogODsgfVxcblxcbi5tLTEwIHtcXG4gIG1hcmdpbjogMTA7IH1cXG5cXG4ubS10LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwOyB9XFxuXFxuLm0tci0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwOyB9XFxuXFxuLm0tYi0xMCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDsgfVxcblxcbi5tLWwtMTAge1xcbiAgbWFyZ2luLWxlZnQ6IDEwOyB9XFxuXFxuLm0teC0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwOyB9XFxuXFxuLm0teS0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tMTIge1xcbiAgbWFyZ2luOiAxMjsgfVxcblxcbi5tLXQtMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7IH1cXG5cXG4ubS1yLTEyIHtcXG4gIG1hcmdpbi1yaWdodDogMTI7IH1cXG5cXG4ubS1iLTEyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEyOyB9XFxuXFxuLm0tbC0xMiB7XFxuICBtYXJnaW4tbGVmdDogMTI7IH1cXG5cXG4ubS14LTEyIHtcXG4gIG1hcmdpbi1yaWdodDogMTI7XFxuICBtYXJnaW4tbGVmdDogMTI7IH1cXG5cXG4ubS15LTEyIHtcXG4gIG1hcmdpbi10b3A6IDEyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS0xNSB7XFxuICBtYXJnaW46IDE1OyB9XFxuXFxuLm0tdC0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTsgfVxcblxcbi5tLXItMTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTsgfVxcblxcbi5tLWItMTUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7IH1cXG5cXG4ubS1sLTE1IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNTsgfVxcblxcbi5tLXgtMTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gIG1hcmdpbi1sZWZ0OiAxNTsgfVxcblxcbi5tLXktMTUge1xcbiAgbWFyZ2luLXRvcDogMTU7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLTE2IHtcXG4gIG1hcmdpbjogMTY7IH1cXG5cXG4ubS10LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2OyB9XFxuXFxuLm0tci0xNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuXFxuLm0tYi0xNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNjsgfVxcblxcbi5tLWwtMTYge1xcbiAgbWFyZ2luLWxlZnQ6IDE2OyB9XFxuXFxuLm0teC0xNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgbWFyZ2luLWxlZnQ6IDE2OyB9XFxuXFxuLm0teS0xNiB7XFxuICBtYXJnaW4tdG9wOiAxNjtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tMjAge1xcbiAgbWFyZ2luOiAyMDsgfVxcblxcbi5tLXQtMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7IH1cXG5cXG4ubS1yLTIwIHtcXG4gIG1hcmdpbi1yaWdodDogMjA7IH1cXG5cXG4ubS1iLTIwIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwOyB9XFxuXFxuLm0tbC0yMCB7XFxuICBtYXJnaW4tbGVmdDogMjA7IH1cXG5cXG4ubS14LTIwIHtcXG4gIG1hcmdpbi1yaWdodDogMjA7XFxuICBtYXJnaW4tbGVmdDogMjA7IH1cXG5cXG4ubS15LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS0yNCB7XFxuICBtYXJnaW46IDI0OyB9XFxuXFxuLm0tdC0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDsgfVxcblxcbi5tLXItMjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNDsgfVxcblxcbi5tLWItMjQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4ubS1sLTI0IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNDsgfVxcblxcbi5tLXgtMjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNDtcXG4gIG1hcmdpbi1sZWZ0OiAyNDsgfVxcblxcbi5tLXktMjQge1xcbiAgbWFyZ2luLXRvcDogMjQ7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLTI1IHtcXG4gIG1hcmdpbjogMjU7IH1cXG5cXG4ubS10LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1OyB9XFxuXFxuLm0tci0yNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1OyB9XFxuXFxuLm0tYi0yNSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNTsgfVxcblxcbi5tLWwtMjUge1xcbiAgbWFyZ2luLWxlZnQ6IDI1OyB9XFxuXFxuLm0teC0yNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1O1xcbiAgbWFyZ2luLWxlZnQ6IDI1OyB9XFxuXFxuLm0teS0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNTtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tMjgge1xcbiAgbWFyZ2luOiAyODsgfVxcblxcbi5tLXQtMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7IH1cXG5cXG4ubS1yLTI4IHtcXG4gIG1hcmdpbi1yaWdodDogMjg7IH1cXG5cXG4ubS1iLTI4IHtcXG4gIG1hcmdpbi1ib3R0b206IDI4OyB9XFxuXFxuLm0tbC0yOCB7XFxuICBtYXJnaW4tbGVmdDogMjg7IH1cXG5cXG4ubS14LTI4IHtcXG4gIG1hcmdpbi1yaWdodDogMjg7XFxuICBtYXJnaW4tbGVmdDogMjg7IH1cXG5cXG4ubS15LTI4IHtcXG4gIG1hcmdpbi10b3A6IDI4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS0zMCB7XFxuICBtYXJnaW46IDMwOyB9XFxuXFxuLm0tdC0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDsgfVxcblxcbi5tLXItMzAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDsgfVxcblxcbi5tLWItMzAge1xcbiAgbWFyZ2luLWJvdHRvbTogMzA7IH1cXG5cXG4ubS1sLTMwIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMDsgfVxcblxcbi5tLXgtMzAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gIG1hcmdpbi1sZWZ0OiAzMDsgfVxcblxcbi5tLXktMzAge1xcbiAgbWFyZ2luLXRvcDogMzA7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5wLTAge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5wLXQtMCB7XFxuICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbi5wLXItMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuLnAtYi0wIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuXFxuLnAtbC0wIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLXgtMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteS0wIHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC0yIHtcXG4gIHBhZGRpbmc6IDI7IH1cXG5cXG4ucC10LTIge1xcbiAgcGFkZGluZy10b3A6IDI7IH1cXG5cXG4ucC1yLTIge1xcbiAgcGFkZGluZy1yaWdodDogMjsgfVxcblxcbi5wLWItMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjsgfVxcblxcbi5wLWwtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDI7IH1cXG5cXG4ucC14LTIge1xcbiAgcGFkZGluZy1yaWdodDogMjtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXktMiB7XFxuICBwYWRkaW5nLXRvcDogMjtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtNCB7XFxuICBwYWRkaW5nOiA0OyB9XFxuXFxuLnAtdC00IHtcXG4gIHBhZGRpbmctdG9wOiA0OyB9XFxuXFxuLnAtci00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ7IH1cXG5cXG4ucC1iLTQge1xcbiAgcGFkZGluZy1ib3R0b206IDQ7IH1cXG5cXG4ucC1sLTQge1xcbiAgcGFkZGluZy1sZWZ0OiA0OyB9XFxuXFxuLnAteC00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC15LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLTUge1xcbiAgcGFkZGluZzogNTsgfVxcblxcbi5wLXQtNSB7XFxuICBwYWRkaW5nLXRvcDogNTsgfVxcblxcbi5wLXItNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1OyB9XFxuXFxuLnAtYi01IHtcXG4gIHBhZGRpbmctYm90dG9tOiA1OyB9XFxuXFxuLnAtbC01IHtcXG4gIHBhZGRpbmctbGVmdDogNTsgfVxcblxcbi5wLXgtNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1O1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteS01IHtcXG4gIHBhZGRpbmctdG9wOiA1O1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC04IHtcXG4gIHBhZGRpbmc6IDg7IH1cXG5cXG4ucC10LTgge1xcbiAgcGFkZGluZy10b3A6IDg7IH1cXG5cXG4ucC1yLTgge1xcbiAgcGFkZGluZy1yaWdodDogODsgfVxcblxcbi5wLWItOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogODsgfVxcblxcbi5wLWwtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDg7IH1cXG5cXG4ucC14LTgge1xcbiAgcGFkZGluZy1yaWdodDogODtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXktOCB7XFxuICBwYWRkaW5nLXRvcDogODtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtMTAge1xcbiAgcGFkZGluZzogMTA7IH1cXG5cXG4ucC10LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDsgfVxcblxcbi5wLXItMTAge1xcbiAgcGFkZGluZy1yaWdodDogMTA7IH1cXG5cXG4ucC1iLTEwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLWwtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDsgfVxcblxcbi5wLXgtMTAge1xcbiAgcGFkZGluZy1yaWdodDogMTA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteS0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTA7IH1cXG5cXG4ucC0xMiB7XFxuICBwYWRkaW5nOiAxMjsgfVxcblxcbi5wLXQtMTIge1xcbiAgcGFkZGluZy10b3A6IDEyOyB9XFxuXFxuLnAtci0xMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMjsgfVxcblxcbi5wLWItMTIge1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtbC0xMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDEyOyB9XFxuXFxuLnAteC0xMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMjtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC15LTEyIHtcXG4gIHBhZGRpbmctdG9wOiAxMjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMjsgfVxcblxcbi5wLTE1IHtcXG4gIHBhZGRpbmc6IDE1OyB9XFxuXFxuLnAtdC0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7IH1cXG5cXG4ucC1yLTE1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1OyB9XFxuXFxuLnAtYi0xNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC1sLTE1IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4ucC14LTE1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1O1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXktMTUge1xcbiAgcGFkZGluZy10b3A6IDE1O1xcbiAgcGFkZGluZy1ib3R0b206IDE1OyB9XFxuXFxuLnAtMTYge1xcbiAgcGFkZGluZzogMTY7IH1cXG5cXG4ucC10LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjsgfVxcblxcbi5wLXItMTYge1xcbiAgcGFkZGluZy1yaWdodDogMTY7IH1cXG5cXG4ucC1iLTE2IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLWwtMTYge1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5wLXgtMTYge1xcbiAgcGFkZGluZy1yaWdodDogMTY7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteS0xNiB7XFxuICBwYWRkaW5nLXRvcDogMTY7XFxuICBwYWRkaW5nLWJvdHRvbTogMTY7IH1cXG5cXG4ucC0yMCB7XFxuICBwYWRkaW5nOiAyMDsgfVxcblxcbi5wLXQtMjAge1xcbiAgcGFkZGluZy10b3A6IDIwOyB9XFxuXFxuLnAtci0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMDsgfVxcblxcbi5wLWItMjAge1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtbC0yMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwOyB9XFxuXFxuLnAteC0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMDtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC15LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDsgfVxcblxcbi5wLTI0IHtcXG4gIHBhZGRpbmc6IDI0OyB9XFxuXFxuLnAtdC0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7IH1cXG5cXG4ucC1yLTI0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0OyB9XFxuXFxuLnAtYi0yNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC1sLTI0IHtcXG4gIHBhZGRpbmctbGVmdDogMjQ7IH1cXG5cXG4ucC14LTI0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0O1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXktMjQge1xcbiAgcGFkZGluZy10b3A6IDI0O1xcbiAgcGFkZGluZy1ib3R0b206IDI0OyB9XFxuXFxuLnAtMjUge1xcbiAgcGFkZGluZzogMjU7IH1cXG5cXG4ucC10LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTsgfVxcblxcbi5wLXItMjUge1xcbiAgcGFkZGluZy1yaWdodDogMjU7IH1cXG5cXG4ucC1iLTI1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLWwtMjUge1xcbiAgcGFkZGluZy1sZWZ0OiAyNTsgfVxcblxcbi5wLXgtMjUge1xcbiAgcGFkZGluZy1yaWdodDogMjU7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteS0yNSB7XFxuICBwYWRkaW5nLXRvcDogMjU7XFxuICBwYWRkaW5nLWJvdHRvbTogMjU7IH1cXG5cXG4ucC0yOCB7XFxuICBwYWRkaW5nOiAyODsgfVxcblxcbi5wLXQtMjgge1xcbiAgcGFkZGluZy10b3A6IDI4OyB9XFxuXFxuLnAtci0yOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyODsgfVxcblxcbi5wLWItMjgge1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtbC0yOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI4OyB9XFxuXFxuLnAteC0yOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyODtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC15LTI4IHtcXG4gIHBhZGRpbmctdG9wOiAyODtcXG4gIHBhZGRpbmctYm90dG9tOiAyODsgfVxcblxcbi5wLTMwIHtcXG4gIHBhZGRpbmc6IDMwOyB9XFxuXFxuLnAtdC0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7IH1cXG5cXG4ucC1yLTMwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwOyB9XFxuXFxuLnAtYi0zMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4ucC1sLTMwIHtcXG4gIHBhZGRpbmctbGVmdDogMzA7IH1cXG5cXG4ucC14LTMwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwO1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXktMzAge1xcbiAgcGFkZGluZy10b3A6IDMwO1xcbiAgcGFkZGluZy1ib3R0b206IDMwOyB9XFxuXFxuLyogRGl2aWRlcnMgKi9cXG4uaHItbGlnaHQge1xcbiAgaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmhyLWRhcmsge1xcbiAgaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLyogQWxpZ25tZW50ICovXFxuLnRleHQtbGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLnRleHQtcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtbG93ZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7IH1cXG5cXG4udGV4dC11cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi50ZXh0LWNhcGl0YWxpemUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG5cXG4uZm9udC13ZWlnaHQtbm9ybWFsIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uZm9udC13ZWlnaHQtYm9sZCB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5mb250LWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4vKipcXHJcXG4gKiBGb250IHNpemVcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC50LTEwe2ZvbnQtc2l6ZToxMH1cXHJcXG4gKiBGcm9tIDEwLCAxMiwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBcXHJcXG4qKi9cXG4udC0xMCB7XFxuICBmb250LXNpemU6IDEwOyB9XFxuXFxuLnQtMTIge1xcbiAgZm9udC1zaXplOiAxMjsgfVxcblxcbi50LTE0IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4udC0xNSB7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLnQtMTYge1xcbiAgZm9udC1zaXplOiAxNjsgfVxcblxcbi50LTE3IHtcXG4gIGZvbnQtc2l6ZTogMTc7IH1cXG5cXG4udC0xOCB7XFxuICBmb250LXNpemU6IDE4OyB9XFxuXFxuLnQtMTkge1xcbiAgZm9udC1zaXplOiAxOTsgfVxcblxcbi50LTIwIHtcXG4gIGZvbnQtc2l6ZTogMjA7IH1cXG5cXG4udC0yNSB7XFxuICBmb250LXNpemU6IDI1OyB9XFxuXFxuLnQtMzAge1xcbiAgZm9udC1zaXplOiAzMDsgfVxcblxcbi5pbWctcm91bmRlZCB7XFxuICBib3JkZXItcmFkaXVzOiA1OyB9XFxuXFxuLmltZy1jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogMjA7IH1cXG5cXG4uaW1nLXRodW1ibmFpbCB7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuXFxuLmludmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTsgfVxcblxcbi5wdWxsLWxlZnQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDsgfVxcblxcbi5wdWxsLXJpZ2h0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLm0teC1hdXRvIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5tLXktYXV0byB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtcHJpbWFyeSB7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi50ZXh0LWRhbmdlciB7XFxuICBjb2xvcjogI0VENDczRjsgfVxcblxcbi50ZXh0LW11dGVkIHtcXG4gIGNvbG9yOiAjOWU5ZTllOyB9XFxuXFxuLmJnLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmJnLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUQ0NzNGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYWN0aW9uLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5hY3Rpb24tYmFyIC5hY3Rpb24tYmFyLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTc7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5hY3Rpb24tYmFyIC5hY3Rpb24taXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgd2lkdGg6IDMwO1xcbiAgaGVpZ2h0OiAzMDsgfVxcblxcbi5idG4ge1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1pbi1oZWlnaHQ6IDM2O1xcbiAgbWluLXdpZHRoOiA2NDtcXG4gIHBhZGRpbmc6IDEwIDEwIDEwIDEwO1xcbiAgZm9udC1zaXplOiAxODtcXG4gIG1hcmdpbjogOCAxNiA4IDE2OyB9XFxuICAuYnRuLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkODBmZjsgfVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgYm9yZGVyLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MjZmZjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDcyNmZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWFxdWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWJsdWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1YWZlOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWJyb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1mb3Jlc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWdyZXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2ODdjOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWxlbW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWEwMDtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGltZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZWU0MDY7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLW9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTdjMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tcHVycGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxMzBmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ydWJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1za3kge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5idG4tb3V0bGluZS5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkODBmZjsgfVxcblxcbi5idG5baXNFbmFibGVkPWZhbHNlXSB7XFxuICBjb2xvcjogI2E0YTRhNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBib3JkZXItY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lLCBmb250YXdlc29tZS13ZWJmb250OyB9XFxuXFxuLmZvcm0gLmlucHV0IHtcXG4gIHBhZGRpbmc6IDE2IDggMTYgODtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAuZm9ybSAuaW5wdXQuaW5wdXQtYm9yZGVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI7XFxuICAgIHBhZGRpbmc6IDE2OyB9XFxuICAuZm9ybSAuaW5wdXQuaW5wdXQtcm91bmRlZCB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyODtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dFtpc0VuYWJsZWQ9J2ZhbHNlJ10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XFxuXFxuLmZvcm0gLmlucHV0LWZpZWxkIHtcXG4gIG1hcmdpbjogODsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTI7XFxuICAgIGNvbG9yOiAjYmFiYWJhOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmlucHV0IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwIDAgOCAwOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmhyLWxpZ2h0LmFjdGl2ZSxcXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItZGFyay5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQuaW5wdXQtc2lkZXMgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgbWFyZ2luOiAwIDAgOCAwOyB9XFxuXFxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XFxuICBtYXJnaW4tYm90dG9tOiA0O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLmJvZHksXFxuLmJvZHkyLFxcbi5mb290bm90ZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uaDEge1xcbiAgZm9udC1zaXplOiAzMjsgfVxcblxcbi5oMiB7XFxuICBmb250LXNpemU6IDIyOyB9XFxuXFxuLmgzIHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uaDQge1xcbiAgZm9udC1zaXplOiAxMjsgfVxcblxcbi5oNSB7XFxuICBmb250LXNpemU6IDExOyB9XFxuXFxuLmg2IHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4uYm9keSB7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLmJvZHkyIHtcXG4gIGZvbnQtc2l6ZTogMTc7IH1cXG5cXG4uZm9vdG5vdGUge1xcbiAgZm9udC1zaXplOiAxMzsgfVxcblxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBmb250LXNpemU6IDE2O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTY7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gTGFiZWwge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC50aHVtYiB7XFxuICAgIHN0cmV0Y2g6IGZpbGw7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XFxuICAgIGNvbG9yOiAjMDIyNzM0O1xcbiAgICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbi5wcm9ncmVzcyB7XFxuICBjb2xvcjogIzNBNTNGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uc2VnbWVudGVkLWJhciB7XFxuICBmb250LXNpemU6IDEzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQsIC5zaWRlZHJhd2VyLWNlbnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBoZWlnaHQ6IDE0ODtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgcGFkZGluZzogMTYgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgcGFkZGluZzogMjAgMTUgMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA2NDtcXG4gIHdpZHRoOiA2NDtcXG4gIGJvcmRlci1yYWRpdXM6IDMyO1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IDM2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDc0O1xcbiAgd2lkdGg6IDc0O1xcbiAgYm9yZGVyLXJhZGl1czogMzc7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBjb2xvcjogIzczNzM3MzsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gIGhlaWdodDogNDg7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcmllbnRhdGlvbjogaG9yaXpvbnRhbDsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gICAgd2lkdGg6IDI0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGhlaWdodDogNDg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUge1xcbiAgICBjb2xvcjogIzNBNTNGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODsgfVxcbiAgICAuc2lkZWRyYXdlci1saXN0LWl0ZW0uYWN0aXZlIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gICAgICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDE2IDAgMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDAgMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiAwLjE7XFxuICB3aWR0aDogODAlO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuICAuc2xpZGVyW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uc3dpdGNoW2NoZWNrZWQ9dHJ1ZV1baXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnRhYi12aWV3IHtcXG4gIC8qY29sb3I6ICRzZWNvbmRhcnk7Ki9cXG4gIHNlbGVjdGVkLWNvbG9yOiAjMzBiY2ZmO1xcbiAgdGFicy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAudGFiLXZpZXcgLnRhYi12aWV3LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4jbG9naW4tYmFja2dyb3VuZCB7XFxuICBtYXJnaW4tdG9wOiAtMjA7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXAge1xcbiAgcGFkZGluZzogMCA0MDsgfVxcblxcbi5sb2dvLXdyYXAge1xcbiAgbWFyZ2luOiA2MCAwIDEwIDA7XFxuICBwYWRkaW5nOiAyMCAwOyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuOTsgfVxcbiAgLmxvZ28td3JhcCAubG9naW4tbG9nby1zdWIge1xcbiAgICBjb2xvcjogIzIxMjEyMTtcXG4gICAgb3BhY2l0eTogLjg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5sb2dpbi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDM7IH1cXG4gIC5sb2dpbi13cmFwcGVyIFRleHRGaWVsZCB7XFxuICAgIHBhZGRpbmc6IDEwIDEwO1xcbiAgICBtYXJnaW46IDEwIDAgMCAwOyB9XFxuXFxuLmdvLWJhY2sge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4vKipcXHJcXG4gKiBJbXBvcnQgYWxsIHBsYXRmb3JtIHNwZWNpZmljIGZpbGVzIGhlcmVcXHJcXG4gKi9cXG4uYnRuIHtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGZvbnQtZmFtaWx5OiAnU0YgVUkgVGV4dCBNZWRpdW0nO1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5idG4tb3V0bGluZSB7XFxuICBib3JkZXItd2lkdGg6IDE7IH1cXG5cXG4uYnRuLXJvdW5kZWQtc20ge1xcbiAgYm9yZGVyLXJhZGl1czogNDsgfVxcblxcbi5idG4tcm91bmRlZC1sZyB7XFxuICBib3JkZXItcmFkaXVzOiAxOTsgfVxcblxcbi5mb3JtIHtcXG4gIGZvbnQtZmFtaWx5OiAnU0YgVUkgVGV4dCBSZWd1bGFyJzsgfVxcbiAgLmZvcm0gLmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNTsgfVxcbiAgICAuZm9ybSAuaW5wdXQuaW5wdXQtcm91bmRlZCB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjc7IH1cXG5cXG4vKiBUaGlzIGlzIGhlcmUgdGVtcG9yYXJpbHkgYmVjYXVzZSBfaW5kZXguaW9zLnNjc3MgY2Fubm90IGJlIGVtcHR5ICovXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogMzI7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIG1hcmdpbjogMTAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiwgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLnN3aXRjaCB7XFxuICBtYXJnaW46IDggMTU7IH1cXG5cXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIHtcXG4gIHBhZGRpbmc6IDE2IDE1IDE2IDE1OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC50aHVtYiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTU7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIG1hcmdpbjogMCAxNTtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLmZhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udEF3ZXNvbWVcXFwiOyB9XFxuXCIsIFwiXCJdKTtcblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5zY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9hcHAuc2Nzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgJ3JlYWN0LWhvdC1sb2FkZXInOyAvLyBNdXN0IGJlIGltcG9ydGVkIGJlZm9yZSBSZWFjdCBhbmQgUmVhY3ROYXRpdmVTY3JpcHQuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyogQ29udHJvbHMgcmVhY3QtbmF0aXZlc2NyaXB0IGxvZyB2ZXJib3NpdHkuIHRydWU6IGFsbCBsb2dzOyBmYWxzZTogb25seSBlcnJvciBsb2dzLiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCwgJ19fREVWX18nLCB7IHZhbHVlOiBmYWxzZSB9KTtcbmltcG9ydCAqIGFzIFJlYWN0TmF0aXZlU2NyaXB0IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBDb250YWluZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJvb3RSZWY6IFJlYWN0LlJlZk9iamVjdDxhbnk+ID0gUmVhY3QuY3JlYXRlUmVmPGFueT4oKTtcblxuUmVhY3ROYXRpdmVTY3JpcHQuc3RhcnQoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQXBwQ29udGFpbmVyLFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3J3YXJkZWRSZWY6IHJvb3RSZWZcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbFxuICAgICksXG4gICAgLyogVGhpcyByZWYgTVVTVCBtYXRjaCB0aGUgcmVmIHRoYXQgeW91IHBhc3MgaW50byB0aGUgYmFzZSBjb21wb25lbnQgb2YgeW91ciBhcHAgY29udGFpbmVyLiAqL1xuICAgIHJvb3RSZWZcbik7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxuKiovXFxuLmZhIHtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLmluZm8ge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblwiLCBcIlwiXSk7XG5cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IGhvdCB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXIvcm9vdCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7ICRQYWdlLCAkTGFiZWwsICRBY3Rpb25CYXIsICRHcmlkTGF5b3V0LCAkRm9ybWF0dGVkU3RyaW5nLCAkU3BhbiwgJFN3aXRjaCwgJEZyYW1lLCAkQnV0dG9uLCAkU3RhY2tMYXlvdXQsICREYXRlUGlja2VyLCAkVGV4dEZpZWxkLCAkU2VnbWVudGVkQmFySXRlbSwgJFNsaWRlciwgJEFjdGlvbkl0ZW0gfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBJdGVtU3BlYyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dC9ncmlkLWxheW91dCc7XG5pbXBvcnQgeyBGcmFtZSwgUGFnZSwgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcbmltcG9ydCB7IFJlYWN0aWZpZWQgfSBmcm9tICd+L1JlYWN0aWZpZWQvUmVhY3RpZmllZCc7XG5cbmltcG9ydCB7IF9MYWJlbCBhcyBMYWJlbENvbXBvbmVudCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jb21wb25lbnRzL0xhYmVsXCI7XG5pbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBEYXRlUGlja2VyLFxuICAgIEVkaXRhYmxlVGV4dEJhc2UsXG4gICAgVGV4dEZpZWxkLFxuICAgIEh0bWxWaWV3LFxuICAgIExhYmVsLFxuICAgIExpc3RQaWNrZXIsXG4gICAgUGxhY2Vob2xkZXIsXG4gICAgU2Nyb2xsVmlldyxcbiAgICBTZWFyY2hCYXIsXG4gICAgU2VnbWVudGVkQmFyLFxuICAgIFNsaWRlcixcbiAgICBTd2l0Y2gsXG4gICAgQWN0aW9uSXRlbVxufSBmcm9tICdyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5Jztcbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uL2J1dHRvbic7XG5cbmNsYXNzIE15RmFuY3lCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuXG59XG5cblxuLy8gY29uc3QgTXlCdXR0b24gPSBSZWFjdGlmaWVkKG5ldyBCdXR0b24oKSwgXCJidXR0b25cIik7XG5cbmNvbnN0IE15Q29tcG9uZW50ID0gUmVhY3RpZmllZChuZXcgU3dpdGNoKCkpOyBcbmludGVyZmFjZSBQcm9wcyB7XG4gICAgZm9yd2FyZGVkUmVmOiBSZWFjdC5SZWZPYmplY3Q8RnJhbWU+LFxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuXG59XG5cbmNsYXNzIEFwcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhZ2VSZWY6IFJlYWN0LlJlZk9iamVjdDxQYWdlPiA9IFJlYWN0LmNyZWF0ZVJlZjxQYWdlPigpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbXlGYW5jeUJ1dHRvblJlZjogUmVhY3QuUmVmT2JqZWN0PE15RmFuY3lCdXR0b24+ID0gUmVhY3QuY3JlYXRlUmVmPE15RmFuY3lCdXR0b24+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBteURhdGVQaWNrZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWY8RGF0ZVBpY2tlcj4oKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG15RWRpdGFibGVUZXh0QmFzZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxFZGl0YWJsZVRleHRCYXNlPigpOyAvLyAod29uJ3Qgc2hvdylcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuXG5cbiAgICAgICAgY29uc3QgZnJhbWU6IEZyYW1lID0gdGhpcy5wcm9wcy5mb3J3YXJkZWRSZWYuY3VycmVudCE7XG4gICAgICAgIGZyYW1lLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSB0aGlzLnBhZ2VSZWYuY3VycmVudCE7XG4gICAgICAgICAgICAgICAgcGFnZS5hZGRDc3NGaWxlKFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCIpOyAvLyBQYXRoIGlzIHJlbGF0aXZlIHRvIHRoZSAnYXBwJyBmb2xkZXI7IG5vdCByZWxhdGl2ZSB0byB0aGlzIGZpbGUhXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBjb25zdCBteUZhbmN5QnV0dG9uID0gdGhpcy5teUZhbmN5QnV0dG9uUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBteUZhbmN5QnV0dG9uLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcInNpbHZlclwiKTtcbiAgICAgICAgICAgIG15RmFuY3lCdXR0b24ub24oXCJ0YXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YXBcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBjb25zdCBteURhdGVQaWNrZXIgPSB0aGlzLm15RGF0ZVBpY2tlclJlZi5jdXJyZW50O1xuICAgICAgICAgICAgbXlEYXRlUGlja2VyLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcImdyZWVuXCIpO1xuICAgICAgICAgICAgbXlEYXRlUGlja2VyLm9uKFwidGFwXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFhYXAhXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwyMDAwKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IGZvcndhcmRlZFJlZiB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPCRGcmFtZSByZWY9e2ZvcndhcmRlZFJlZn0+XG4gICAgICAgICAgICAgICAgPCRQYWdlIHJlZj17dGhpcy5wYWdlUmVmfSBjbGFzc05hbWU9XCJwYWdlXCIgYWN0aW9uQmFySGlkZGVuPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIDwkQWN0aW9uQmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCRBY3Rpb25JdGVtIHRleHQ9e1wiQ2hlY2sgdGhpcyBvdXRcIn0gb25UYXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC8kQWN0aW9uQmFyPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwkU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TXlDb21wb25lbnQgb25UYXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwkU3dpdGNoIG9uVG9nZ2xlPXsoY2hlY2tlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tlZDogXCIgKyBjaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvblRhcD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvJFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvJFBhZ2U+XG4gICAgICAgICAgICA8LyRGcmFtZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG4vLyBleHBvcnQgZGVmYXVsdCBBcHBDb250YWluZXI7XG5leHBvcnQgZGVmYXVsdCBob3QoQXBwQ29udGFpbmVyKTsgLy8gUmVwbGFjZSB0aGlzIGxpbmUgd2l0aCB0aGUgYWJvdmUgbGluZSBpZiB5b3Ugd2FudCB0byByZW1vdmUgaG90IGxvYWRpbmcuIl0sInNvdXJjZVJvb3QiOiIifQ==