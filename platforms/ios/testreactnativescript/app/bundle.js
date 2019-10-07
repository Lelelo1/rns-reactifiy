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
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");



var __customHostConfigAppendChildImpl = function (instance, parent, child) {
  return Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["executeInOrder"])([textBaseImpl], instance, parent, child);
};

var textBaseImpl = function (instance, parent, child) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["TextBase"])) return;

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
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");



var __customHostConfigInsertBeforeImpl = function (instance, parent, child, beforeChild) {
  return Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["executeInOrder"])([textBaseImpl], instance, parent, child, beforeChild);
};

var textBaseImpl = function (instance, parent, child, beforeChild) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["TextBase"])) return;

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
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");



var __customHostConfigRemoveChildImpl = function (instance, parent, child) {
  return Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["executeInOrder"])([textBaseImpl], instance, parent, child);
};

var textBaseImpl = function (instance, parent, child) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["TextBase"])) return;

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
    return method.name === "tabViewItemImpl";
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
    return method.name === "tabViewImpl";
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
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");


var componentDidMountImpl = function (instance) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["executeInOrder"])([observableImpl, datePickerImpl, listPickerImpl, searchBarImpl, sliderImpl, switchImpl], instance);
};

var observableImpl = function (instance) {
  // if(!(Reflect.get(instance, "getCurrentRef")() instanceof Observable)) return;
  Reflect.get(instance, "updateListenersHelper")(true);
};

var datePickerImpl = function (instance) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["DatePicker"])) return;
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("dateChange", Reflect.get(instance, "onDateChange"));
};

var listPickerImpl = function (instance) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["ListPicker"])) return;
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("selectedIndexChange", Reflect.get(instance, "onSelectedIndexChange"));
};

var searchBarImpl = function (instance) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["SearchBar"])) return;
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("textChange", Reflect.get(instance, "onTextChange"));
};

var sliderImpl = function (instance) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["Slider"])) return;
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.on("valueChange", Reflect.get(instance, "onValueChange"));
};

var switchImpl = function (instance) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["Slider"])) return;
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
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");
var _this = undefined;



var componentWillUnmountImpl = function (instance) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["executeInOrder"])([observableImpl, datePickerImpl, listPickerImpl, searchBarImpl, sliderImpl, switchImpl], instance);
};

var observableImpl = function (instance) {
  // if(!(Reflect.get(instance, "getCurrentRef")() instanceof Observable)) return;
  Reflect.get(instance, "updateListenersHelper")(false);
};

var datePickerImpl = function (instance) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["DatePicker"])) return;
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.off("dateChange", Reflect.get(instance, "onDateChange"));
};

var listPickerImpl = function (instance) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["ListPicker"])) return;

  var node = _this.getCurrentRef();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.off("selectedIndexChange", Reflect.get(instance, "onSelectedIndexChange"));
};

var searchBarImpl = function (instance) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["SearchBar"])) return;
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
    return;
  }

  node.off("textChange", Reflect.get(instance, "onTextChange"));
};
/* (this slider impl not the same as the others. Is probably an error) */


var sliderImpl = function (instance) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["Slider"])) return;
  var node = Reflect.get(instance, "getCurrentRef")();

  if (!node) {
    node.off("valueChange", Reflect.get(instance, "onValueChange"));
    return;
  }

  console.warn("React ref to NativeScript View lost, so unable to update event listeners.");
};

var switchImpl = function (instance) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["Switch"])) return;
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
  return Object(_Helpers__WEBPACK_IMPORTED_MODULE_2__["executeInOrder"])([genericImpl, buttonImpl, textFieldImpl, htmlViewImpl, labelImpl, tabViewItemImpl], name, instance, observable);
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

  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["Button"])) return undefined;

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
};

var textFieldImpl = function (name, instance, observable) {
  var _a;

  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["TextField"])) return undefined;

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
};

var htmlViewImpl = function (name, instance, observable) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["HtmlView"])) return undefined;

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
};

var labelImpl = function (name, instance, observable) {
  var _a;

  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["Label"])) return undefined;
  console.log("label impl");

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
  }), children // Weird that a Label may contain children, but what do I know.
  );
};

var tabViewItemImpl = function (name, instance, observable) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_1__["TabViewItem"])) return undefined;

  var _a = instance.props,
      forwardedRef = _a.forwardedRef,
      children = _a.children,
      // view, /* We disallow this at the typings level. */
  rest = __rest(_a, ["forwardedRef", "children"]);

  if (react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children) > 1 || typeof children === "string" || typeof children === "number") {
    console.log("count: " + react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children));
    throw new Error("'children' property passed into TabViewItem must be a single child node, which must not be a number or string");
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({}, rest, {
    ref: forwardedRef || Reflect.get(instance, "myRef")
  }), children);
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
  // if(!(Reflect.get(instance, "getCurrentRef")() instanceof Observable)) return;
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
// export type Props<T extends Observable> = T & ExtraProps<T>;

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
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");


var onDataChangeImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["executeInOrder"])([datePickerImpl], instance, args);
};

var datePickerImpl = function (instance, args) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["DatePicker"])) return;
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
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");


var onSelectIndexChangeImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["executeInOrder"])([listPickerImpl], instance, args);
};

var listPickerImpl = function (instance, args) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["ListPicker"])) return;
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
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");


var onTextChangeImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["executeInOrder"])([searchBarImpl], instance, args);
};

var searchBarImpl = function (instance, args) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["SearchBar"])) return;
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
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");


var onToggleImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["executeInOrder"])([switchImpl], instance, args);
};

var switchImpl = function (instance, args) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["Switch"])) return;
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
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./Reactified/Implementation/Helpers.ts");


var onValueChangeImpl = function (instance, args) {
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_1__["executeInOrder"])([sliderImpl], instance, args);
};
/* typo found in https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/Slider.ts */

var sliderImpl = function (instance, args) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["Slider"])) return;
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
  // if(!(Reflect.get(instance, "getCurrentRef")() instanceof Observable)) return;
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
  Object(_Helpers__WEBPACK_IMPORTED_MODULE_3__["executeInOrder"])([pageImpl, viewImpl, observableImpl, actionItemImpl, editableTextBaseImpl, frameImpl, placeholderImpl, scrollViewImpl, searchBarImpl, segmentedBarImpl, tabViewImpl], instance, node, attach);
};

var observableImpl = function (instance, node, attach, nextProps) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["Observable"])) return;
  console.log("observableImpl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "propertyChange", instance.props.onPropertyChange, nextProps.onPropertyChange);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onPropertyChange) method("propertyChange", instance.props.onPropertyChange);
  }
}; // https://github.com/shirakaba/react-nativescript/blob/master/react-nativescript/src/components/View.ts


var viewImpl = function (instance, node, attach, nextProps) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["View"])) return;
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
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["ActionItem"])) return;
  console.log("actionItemImpl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "tap", instance.props.onTap, nextProps.onTap);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onTap) method("tap", instance.props.onTap);
  }
};

var pageImpl = function (instance, node, attach, nextProps) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["Page"])) return;
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
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["ActionItem"])) return;
  console.log("editableTextBaseImpl");

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
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["Frame"])) return;
  console.log("frameImpl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "optionSelected", instance.props.onOptionSelected, nextProps.onOptionSelected);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onOptionSelected) method("optionSelected", instance.props.onOptionSelected);
  }
};

var placeholderImpl = function (instance, node, attach, nextProps) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["Placeholder"])) return;
  console.log("placeholderImpl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "creatingView", instance.props.onCreatingView, nextProps.onCreatingView);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onCreatingView) method("creatingView", instance.props.onCreatingView);
  }
};

var scrollViewImpl = function (instance, node, attach, nextProps) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["ScrollView"])) return;
  console.log("scrollViewImpl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "scroll", _this.props.onScroll, nextProps.onScroll);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onScroll) method("scroll", instance.props.onScroll);
  }
};

var searchBarImpl = function (instance, node, attach, nextProps) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["SearchBar"])) return;
  console.log("searchBarImpl");

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
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["SegmentedBar"])) return;
  console.log("segmentedBarImpl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "selectedIndexChange", instance.props.onSelectedIndexChange, nextProps.onSelectedIndexChange);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onSelectedIndexChange) method("selectedIndexChange", instance.props.onSelectedIndexChange);
  }
};

var tabViewImpl = function (instance, node, attach, nextProps) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["TabView"])) return;
  console.log("tabViewImpl");

  if (attach === null) {
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "selectedIndexChange", instance.props.onSelectedIndexChange, nextProps.onSelectedIndexChange);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onSelectedIndexChange) method("selectedIndexChange", instance.props.onSelectedIndexChange);
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
      var _this = _super !== null && _super.apply(this, arguments) || this;
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
        return Object(_Implementation_CustomNodeHierarchyManager_customHostConfigAppendChildImpl__WEBPACK_IMPORTED_MODULE_8__["__customHostConfigAppendChildImpl"])(_this, parentInstance, child);
      };

      _this.__customHostConfigRemoveChild = function (parentInstance, child) {
        return Object(_Implementation_CustomNodeHierarchyManager_customHostConfigRemoveChildImpl__WEBPACK_IMPORTED_MODULE_9__["__customHostConfigRemoveChildImpl"])(_this, parentInstance, child);
      };

      _this.__customHostConfigInsertBefore = function (parentInstance, child, beforeChild) {
        return Object(_Implementation_CustomNodeHierarchyManager_customHostConfigInsertBeforeImpl__WEBPACK_IMPORTED_MODULE_10__["__customHostConfigInsertBeforeImpl"])(_this, parentInstance, child, beforeChild);
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
    Reactify.defaultProps = __assign({}, observable);
    return Reactify;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign({}, props, {
      forwardedRef: ref
    }), props.children);
  }); // have to declare class name to make decorators work  // https://github.com/microsoft/TypeScript/issues/7342
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
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/react-nativescript/dist/client/ElementRegistry.js");
/* harmony import */ var react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_5__);





 // import { Button } from 'tns-core-modules/ui/button/button';

var MyFancyButton =
/** @class */
function (_super) {
  __extends(MyFancyButton, _super);

  function MyFancyButton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return MyFancyButton;
}(react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_5__["Button"]); // const MyButton = Reactified(new Button(), "button");
// const MyComponent = Reactified(new TabView()); 


var MyLabel = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_4__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_5__["Label"]());
var MyTabView = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_4__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_5__["TabView"]());
var MyTabViewItem = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_4__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_5__["TabViewItem"]());
var MyButton = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_4__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_5__["Button"]());
var MySegmentedBar = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_4__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_5__["SegmentedBar"]());
var MyStackLayout = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_4__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_5__["StackLayout"]());

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
    })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyStackLayout, null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyButton, {
      text: "yooo"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyLabel, {
      text: "yeaaaaaaaa!",
      backgroundColor: new tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_3__["Color"]("orange")
    }))));
  };

  return AppContainer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/*
<MyTabViewItem title={"left"}>
                                <MyLabel text={"some content"}/>
                            </MyTabViewItem>
                            <MyTabViewItem title={"middle"}>
                                <MyLabel text={"some content"}/>
                            </MyTabViewItem>
                            <MyTabViewItem title={"right"}>
                                <MyLabel text={"some content"}/>
                            </MyTabViewItem>
*/
// export default AppContainer;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__["hot"])(AppContainer)); // Replace this line with the above line if you want to remove hot loading.

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc","markingMode":"none"},"devDependencies":{"@types/react-mixin":"^2.0.32"}};

/***/ })

},[["./app.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnREaWRNb3VudEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnRXaWxsVW5tb3VudEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9yZW5kZXJJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3Qvc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uRGF0YUNoYW5nZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25TZWxlY3RlZEluZGV4Q2hhbmdlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRleHRDaGFuZ2VJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVG9nZ2xlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblZhbHVlQ2hhbmdlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFh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MkIsK0NBQTNCO0FBeURBOzs7Ozs7Ozs7OztBQWFBOzs7QUFDZSxnSUFBRyxDQUFDLFlBQUQsQ0FBbEIsRSxDQUFrQywyRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL1JlYWN0aWZpZWQvRXh0cmFQcm9wcy50c1wiOiBcIi4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdBcHBlbmRDaGlsZEltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmVJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdSZW1vdmVDaGlsZEltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vSGVscGVycy50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9IZWxwZXJzLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudERpZE1vdW50SW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnREaWRNb3VudEltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50V2lsbFVubW91bnRJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudFdpbGxVbm1vdW50SW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9yZW5kZXJJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L3JlbmRlckltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3Qvc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9zaG91bGRDb21wb25lbnRVcGRhdGVJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vbkRhdGFDaGFuZ2VJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vbkRhdGFDaGFuZ2VJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblNlbGVjdGVkSW5kZXhDaGFuZ2VJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblNlbGVjdGVkSW5kZXhDaGFuZ2VJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRleHRDaGFuZ2VJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRleHRDaGFuZ2VJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRvZ2dsZUltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVG9nZ2xlSW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25WYWx1ZUNoYW5nZUltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVmFsdWVDaGFuZ2VJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0hlbHBlckltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi91cGRhdGVMaXN0ZW5lcnNJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvUmVhY3RpZmllZC50c1wiOiBcIi4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzXCIsXG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwLnRzXCIsXG5cdFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCI6IFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIlxuaW1wb3J0IHsgRXZlbnREYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgRG9jayB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZG9jay1sYXlvdXQvZG9jay1sYXlvdXRcIjtcbmltcG9ydCB7IFNob3duTW9kYWxseURhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldy92aWV3XCI7XG5pbXBvcnQge1xuICAgIEdlc3R1cmVFdmVudERhdGEsXG4gICAgR2VzdHVyZVR5cGVzLFxuICAgIFRvdWNoR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBTd2lwZUdlc3R1cmVFdmVudERhdGEsXG4gICAgUm90YXRpb25HZXN0dXJlRXZlbnREYXRhLFxuICAgIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBQYW5HZXN0dXJlRXZlbnREYXRhLFxufSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlc1wiO1xuXG5pbXBvcnQgeyBcbiAgICBPYnNlcnZhYmxlLFxuICAgIFZpZXdCYXNlLFxuICAgIFZpZXcsXG4gICAgUGFnZSxcbiAgICBBY3Rpb25JdGVtLFxuICAgIERhdGVQaWNrZXIsXG4gICAgRWRpdGFibGVUZXh0QmFzZSxcbiAgICBGcmFtZSxcbiAgICBHcmlkTGF5b3V0LFxuICAgIEh0bWxWaWV3LFxuICAgIExpc3RQaWNrZXIsXG4gICAgU3dpdGNoLFxuICAgIFNjcm9sbFZpZXcsXG4gICAgU2VhcmNoQmFyLFxuICAgIFNlZ21lbnRlZEJhcixcbiAgICBTbGlkZXIsXG4gICAgVGFiVmlld1xufSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuXG5pbXBvcnQgeyBQYWdlTmF2aWdhdGlvbkV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCB7IEl0ZW1TcGVjIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dC9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgSXRlbXNTb3VyY2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlci9saXN0LXBpY2tlclwiO1xuaW1wb3J0IHsgQ3JlYXRlVmlld0V2ZW50RGF0YSwgUGxhY2Vob2xkZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wbGFjZWhvbGRlci9wbGFjZWhvbGRlclwiO1xuaW1wb3J0IHsgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcvc2Nyb2xsLXZpZXdcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIGFzIFNlZ21lbnRlZEJhclNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VnbWVudGVkLWJhci9zZWdtZW50ZWQtYmFyXCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSBhcyBUYWJWaWV3U2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3L3RhYi12aWV3JztcblxuLy8gZXhwb3J0IHR5cGUgRXh0cmFQcm9wczxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4gPSBPYnNlcnZhYmxlUHJvcHM8VD4gJiBWaWV3QmFzZVByb3BzPFQ+ICYgVmlld1Byb3BzPFQ+ICYgUGFnZVByb3BzPFQ+ICYgQWN0aW9uSXRlbVByb3BzPFQ+O1xuZXhwb3J0IHR5cGUgRXh0cmFQcm9wczxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4gPSBPYnNlcnZhYmxlUHJvcHM8VD4gJiBWaWV3QmFzZVByb3BzPFQ+ICYgVmlld1Byb3BzPFQ+XG4gJiBQYWdlUHJvcHM8VD4gJiBBY3Rpb25JdGVtUHJvcHM8VD4gJiBEYXRlUGlja2VyUHJvcHM8VD4gJiBFZGl0YWJsZVRleHRCYXNlUHJvcHM8VD4gJiBGcmFtZVByb3BzPFQ+XG4gJiBHcmlkTGF5b3V0UHJvcHM8VD4gJiBIdG1sVmlld1Byb3BzPFQ+ICYgTGlzdFBpY2tlclByb3BzPFQ+ICYgUGxhY2Vob2xkZXJQcm9wczxUPiAmIFNjcm9sbFZpZXdQcm9wczxUPlxuICYgU2VhcmNoQmFyUHJvcHM8VD4gJiBTZWdtZW50ZWRCYXJQcm9wczxUPiAmIFNsaWRlclByb3BzPFQ+ICYgU3dpdGNoUHJvcHM8VD4gJiBUYWJWaWV3UHJvcHM8VD47XG5cbi8vIHVzaW5nIGNvbmRpdGlvbmFsIHNvIHRoYXQgUk5TQnV0dG9uIGRvbid0IGdldCBuYXZpZ2F0ZWRUbyAoUGFnZVByb3BzKSBcblxuXG4vKiBcbiBTaG91bGQgZ2V0IE9ic2VydmFibGVQcm9wc1xuIHdpdGggZ2V0dGVyL29uZGl0aW9uYWwgdHlwaW5nIC0gc2luY2UgdGhlIG5zIGNvbXBvbmVudFxuIG11c3QgYmUgb2YgdHlwZSBPYnNlcnZhYmxlLiB1c2luZyBiZWxvdyBjb25pZHRpb25hbCB0eXBlXG4gYWxzbyBjYXVzZSBhbiB0eXBlIGVycm9yIGluIGdldEN1cnJlbnRSZWZJbXBsXG4gKi9cbi8vIHR5cGUgT2JzZXJ2YWJsZVByb3BzPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiA9IFQgZXh0ZW5kcyBPYnNlcnZhYmxlID8gSU9ic2VydmFibGU8VD4gOiBFbXB0eVxuXG5pbnRlcmZhY2UgT2JzZXJ2YWJsZVByb3BzPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiB7XG4gICAgZWxlbWVudEtleT86IHN0cmluZyAvLyBhZGRlZFxuICAgIGZvcndhcmRlZFJlZj86IFJlYWN0LlJlZk9iamVjdDxUPjtcbiAgICBvblByb3BlcnR5Q2hhbmdlPzogKGRhdGE6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbn1cblxuLyogcmVzdCBpcyB1c2luZyBjb25kaXRpb25hbCB0eXBlIFwiZ2V0dGVyc1wiIHNvIHRoYXQgYnV0dG9uIGRvbid0IGFjY2VzcyBnZXQgcGFnZSdzIHByb3BzIGV0YyovXG5cbnR5cGUgVmlld0Jhc2VQcm9wczxUPiA9IFQgZXh0ZW5kcyBWaWV3QmFzZSA/IElWaWV3QmFzZSA6IEVtcHR5XG5pbnRlcmZhY2UgSVZpZXdCYXNlIHtcbiAgICBfX3Juc19fbm9kZVRyZWVSb2xlPzogc3RyaW5nO1xuICAgIGRvY2s/OiBEb2NrO1xufVxuXG50eXBlIFZpZXdQcm9wczxUPiA9IFQgZXh0ZW5kcyBWaWV3ID8gSVZpZXcgOiBFbXB0eTtcbmludGVyZmFjZSBJVmlldyB7XG4gICAgLyogRnJvbSBWaWV3LiAqL1xuICAgIG9uTG9hZGVkPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblVubG9hZGVkPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvbkFuZHJvaWRCYWNrUHJlc3NlZD86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25TaG93aW5nTW9kYWxseT86IChhcmdzOiBTaG93bk1vZGFsbHlEYXRhKSA9PiB2b2lkO1xuICAgIG9uU2hvd25Nb2RhbGx5PzogKGFyZ3M6IFNob3duTW9kYWxseURhdGEpID0+IHZvaWQ7XG5cbiAgICAvKiBUaGUgZ2VzdHVyZSBoYW5kbGVycy4gKi9cbiAgICBvblRhcD86IChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uRG91YmxlVGFwPzogKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25QaW5jaD86IChhcmdzOiBQaW5jaEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25QYW4/OiAoYXJnczogUGFuR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblN3aXBlPzogKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblJvdGF0aW9uPzogKGFyZ3M6IFJvdGF0aW9uR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvbkxvbmdQcmVzcz86IChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uVG91Y2g/OiAoYXJnczogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuXG4gICAgLyogVGhlc2UgYXJlIHRvIGJlIG92ZXJyaWRkZW4gaW4gc3ViY2xhc3NlcyBvZiBWaWV3LCBzbyB1bmxpa2VseSB0byBiZSBhcHByb3ByaWF0ZS4gKi9cbiAgICAvLyBvbkxheW91dD86IChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlcikgPT4gdm9pZDtcbiAgICAvLyBvbk1lYXN1cmU/OiAod2lkdGhNZWFzdXJlU3BlYzogbnVtYmVyLCBoZWlnaHRNZWFzdXJlU3BlYzogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG50eXBlIFBhZ2VQcm9wczxUPiA9IFQgZXh0ZW5kcyBQYWdlID8gSVBhZ2UgOiBFbXB0eVxuaW50ZXJmYWNlIElQYWdlIHtcbiAgICBvbk5hdmlnYXRpbmdUbz86IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyO1xuICAgIG9uTmF2aWdhdGVkVG8/OiBQYWdlTmF2aWdhdGlvbkV2ZW50SGFuZGxlcjtcbiAgICBvbk5hdmlnYXRpbmdGcm9tPzogUGFnZU5hdmlnYXRpb25FdmVudEhhbmRsZXI7XG4gICAgb25OYXZpZ2F0ZWRGcm9tPzogUGFnZU5hdmlnYXRpb25FdmVudEhhbmRsZXI7XG59XG5cbnR5cGUgQWN0aW9uSXRlbVByb3BzPFQ+ID0gVCBleHRlbmRzIEFjdGlvbkl0ZW0gPyBJQWN0aW9uSXRlbSA6IEVtcHR5XG5pbnRlcmZhY2UgSUFjdGlvbkl0ZW0ge1xuICAgIG9uVGFwPzogKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG59XG5cbnR5cGUgRGF0ZVBpY2tlclByb3BzPFQ+ID0gVCBleHRlbmRzIERhdGVQaWNrZXIgPyBJRGF0ZVBpY2tlciA6IEVtcHR5XG5pbnRlcmZhY2UgSURhdGVQaWNrZXIge1xuICAgIG9uRGF0ZUNoYW5nZT86IChkYXRlOiBEYXRlKSA9PiB2b2lkO1xufVxudHlwZSBFZGl0YWJsZVRleHRCYXNlUHJvcHM8VD49IFQgZXh0ZW5kcyBFZGl0YWJsZVRleHRCYXNlID8gSUVkaXRhYmxlVGV4dEJhc2UgOiBFbXB0eVxuaW50ZXJmYWNlIElFZGl0YWJsZVRleHRCYXNlIHtcbiAgICBvbkJsdXI/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uRm9jdXM/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uVGV4dENoYW5nZT86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG59XG50eXBlIEZyYW1lUHJvcHM8VD4gPSBUIGV4dGVuZHMgRnJhbWUgPyBJRnJhbWUgOiBFbXB0eTtcbmludGVyZmFjZSBJRnJhbWUge1xuICAgIG9uT3B0aW9uU2VsZWN0ZWQ/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xufVxudHlwZSBHcmlkTGF5b3V0UHJvcHM8VD4gPSBUIGV4dGVuZHMgR3JpZExheW91dCA/IElHcmlkTGF5b3V0IDogRW1wdHk7XG5pbnRlcmZhY2UgSUdyaWRMYXlvdXQge1xuICAgIC8qIEVhY2ggY29uc3RpdHVlbnQgdmlldyBwYXNzZWQgaW4gbXVzdCBiZWFyIFwicm93XCIgYW5kIFwiY29sXCIgUHJvcHMuICovXG4gICAgICAgIC8qIHJvd3MgYW5kIGNvbHVtbnMgd2lsbCBiZSBhZGRlZCBpbiBvcmRlciBzcGVjaWZpZWQuICovXG4gICAgcm93cz86IEl0ZW1TcGVjW107XG4gICAgY29sdW1ucz86IEl0ZW1TcGVjW107XG59XG5cbnR5cGUgSHRtbFZpZXdQcm9wczxUPiA9IFQgZXh0ZW5kcyBIdG1sVmlldyA/IElIdG1sVmlldyA6IEVtcHR5XG5pbnRlcmZhY2UgSUh0bWxWaWV3IHtcbiAgICBodG1sOiBzdHJpbmc7XG59XG5cbnR5cGUgTGlzdFBpY2tlclByb3BzPFQ+ID0gVCBleHRlbmRzIExpc3RQaWNrZXIgPyBJTGlzdFBpY2tlciA6IEVtcHR5O1xuaW50ZXJmYWNlIElMaXN0UGlja2VyIHtcbiAgICBpdGVtczogYW55W10gfCBJdGVtc1NvdXJjZTtcbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2U/OiAoc2VsZWN0ZWRJbmRleDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG50eXBlIFBsYWNlaG9sZGVyUHJvcHM8VD4gPSBUIGV4dGVuZHMgUGxhY2Vob2xkZXIgPyBJUGxhY2Vob2xkZXIgOiBFbXB0eVxuaW50ZXJmYWNlIElQbGFjZWhvbGRlciB7XG4gICAgb25DcmVhdGluZ1ZpZXc/KGFyZ3M6IENyZWF0ZVZpZXdFdmVudERhdGEpOiB2b2lkO1xufVxuXG50eXBlIFNjcm9sbFZpZXdQcm9wczxUPiA9IFQgZXh0ZW5kcyBTY3JvbGxWaWV3ID8gSVNjcm9sbFZpZXcgOiBFbXB0eTtcbmludGVyZmFjZSBJU2Nyb2xsVmlldyB7XG4gICAgb25TY3JvbGw/OiAoYXJnczogU2Nyb2xsRXZlbnREYXRhKSA9PiB2b2lkO1xufVxuXG50eXBlIFNlYXJjaEJhclByb3BzPFQ+ID0gVCBleHRlbmRzIFNlYXJjaEJhciA/IElTZWFyY2hCYXIgOiBFbXB0eTtcbmludGVyZmFjZSBJU2VhcmNoQmFyIHtcbiAgICBvblRleHRDaGFuZ2U/OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uU3VibWl0PzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvbkNsb3NlPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbn1cblxudHlwZSBTZWdtZW50ZWRCYXJQcm9wczxUPiA9IFQgZXh0ZW5kcyBTZWdtZW50ZWRCYXIgPyBJU2VnbWVudGVkQmFyIDogRW1wdHlcbmludGVyZmFjZSBJU2VnbWVudGVkQmFyIHtcbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2U/OiAoYXJnczogU2VnbWVudGVkQmFyU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpID0+IHZvaWQ7XG59XG5cbnR5cGUgU2xpZGVyUHJvcHM8VD4gPSBUIGV4dGVuZHMgU2xpZGVyID8gSVNsaWRlciA6IEVtcHR5O1xuaW50ZXJmYWNlIElTbGlkZXIge1xuICAgIG9uVmFsdWVDaGFuZ2U/OiAoYXJnczogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG50eXBlIFN3aXRjaFByb3BzPFQ+ID0gVCBleHRlbmRzIFN3aXRjaCA/IElTd2l0Y2ggOiBFbXB0eTtcbmludGVyZmFjZSBJU3dpdGNoIHtcbiAgICBvblRvZ2dsZT86IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG50eXBlIFRhYlZpZXdQcm9wczxUPiA9IFQgZXh0ZW5kcyBUYWJWaWV3ID8gSVRhYlZpZXcgOiBFbXB0eTtcbmludGVyZmFjZSBJVGFiVmlldyB7XG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlPyhhcmdzOiBUYWJWaWV3U2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpOiB2b2lkO1xufVxuXG4vKiBjb3VsZCBiZSB1c2VkIHNldCBwcm9wcyBmb3IgZXZlcnkgc2luZ2xlIFJOUyBDb21wb25lbnQqL1xuaW50ZXJmYWNlIEVtcHR5IHtcblxufVxuXG4vLyBpbnNpZGUgaHR0cHM6Ly9naXRodWIuY29tL3NoaXJha2FiYS9yZWFjdC1uYXRpdmVzY3JpcHQvYmxvYi9tYXN0ZXIvcmVhY3QtbmF0aXZlc2NyaXB0L3NyYy9jb21wb25lbnRzL1N3aXRjaC50c1xuLy8gY2FuIGxpc3RlbmVyIGJlIGF0dGFjaGVkIHRvIHRoaXM6UFJPUFMub25Ub2dnbGUgPyIsImltcG9ydCB7IFRleHRCYXNlLCBPYnNlcnZhYmxlfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgSW5zdGFuY2UsIFRleHRJbnN0YW5jZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9zaGFyZWQvSG9zdENvbmZpZ1R5cGVzXCI7XG5pbXBvcnQgeyBGb3JtYXR0ZWRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIlxuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IF9fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LHBhcmVudDogVCwgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGV4ZWN1dGVJbk9yZGVyKFt0ZXh0QmFzZUltcGxdLCBpbnN0YW5jZSwgcGFyZW50LCBjaGlsZCk7XG59XG5cbmNvbnN0IHRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgVGV4dEJhc2U+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgcGFyZW50OiBULCBjaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UpID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFRleHRCYXNlKSkgcmV0dXJuO1xuXG4gICAgaWYocGFyZW50IGluc3RhbmNlb2YgVGV4dEJhc2UpIHtcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgRm9ybWF0dGVkU3RyaW5nKSB7XG4gICAgICAgICAgICBwYXJlbnQuZm9ybWF0dGVkVGV4dCA9IGNoaWxkO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaS5lLiBkZWZlciB0byBIb3N0IENvbmZpZy5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHsgVGV4dEJhc2UsIE9ic2VydmFibGV9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBJbnN0YW5jZSwgVGV4dEluc3RhbmNlIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L3NoYXJlZC9Ib3N0Q29uZmlnVHlwZXNcIjtcbmltcG9ydCB7IEZvcm1hdHRlZFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiXG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuXG5cbmV4cG9ydCBjb25zdCBfX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihcbiAgICBpbnN0YW5jZTogUmVhY3RpZnk8VD4sXG4gICAgcGFyZW50OiBULFxuICAgIGNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZSxcbiAgICBiZWZvcmVDaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2Vcbik6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBleGVjdXRlSW5PcmRlcihbdGV4dEJhc2VJbXBsXSwgaW5zdGFuY2UsIHBhcmVudCwgY2hpbGQsIGJlZm9yZUNoaWxkKTtcbn1cbmNvbnN0IHRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgVGV4dEJhc2U+KFxuICAgIGluc3RhbmNlOiBSZWFjdGlmeTxUPixcbiAgICBwYXJlbnQ6IFQsXG4gICAgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlLFxuICAgIGJlZm9yZUNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZVxuKSA6IGJvb2xlYW4gPT4ge1xuXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBUZXh0QmFzZSkpIHJldHVybjtcblxuICAgIGlmKHBhcmVudCBpbnN0YW5jZW9mIFRleHRCYXNlKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEZvcm1hdHRlZFN0cmluZykge1xuICAgICAgICAgICAgcGFyZW50LmZvcm1hdHRlZFRleHQgPSBjaGlsZDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaS5lLiBkZWZlciB0byBIb3N0IENvbmZpZy5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHsgVGV4dEJhc2UsIE9ic2VydmFibGV9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBJbnN0YW5jZSwgVGV4dEluc3RhbmNlIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L3NoYXJlZC9Ib3N0Q29uZmlnVHlwZXNcIjtcbmltcG9ydCB7IEZvcm1hdHRlZFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiXG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3QgX19jdXN0b21Ib3N0Q29uZmlnUmVtb3ZlQ2hpbGRJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4gLHBhcmVudDogVCwgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGV4ZWN1dGVJbk9yZGVyKFt0ZXh0QmFzZUltcGxdLCBpbnN0YW5jZSwgcGFyZW50LCBjaGlsZCk7XG59XG5cbmNvbnN0IHRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgVGV4dEJhc2U+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgcGFyZW50OiBULCBjaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UpOiBib29sZWFuID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFRleHRCYXNlKSkgcmV0dXJuO1xuICAgIFxuICAgIGlmKHBhcmVudCBpbnN0YW5jZW9mIFRleHRCYXNlKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEZvcm1hdHRlZFN0cmluZykge1xuICAgICAgICAgICAgcGFyZW50LmZvcm1hdHRlZFRleHQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGkuZS4gZGVmZXIgdG8gSG9zdCBDb25maWcuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IFxuICAgIGVsZW1lbnRNYXAsXG4gICAgQWJzb2x1dGVMYXlvdXQsXG4gICAgQWN0aW9uQmFyLFxuICAgIEFjdGlvbkl0ZW0sXG4gICAgQWN0aXZpdHlJbmRpY2F0b3IsXG4gICAgQW5pbWF0aW9uLFxuICAgIE9ic2VydmFibGVcbn1mcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lT2Yob2JqZWN0OiBPYmplY3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBvYmplY3QuY29uc3RydWN0b3IubmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExldHRlckxvd2VyY2FzZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG59XG5cbmNvbnN0IGltcGxNZXRob2RSZWdpc3RyeTogc3RyaW5nW10gPSBbXTsgXG5jb25zb2xlLmxvZyhcImFsbCBlbGVtZW50cyBpbiBlbGVtZW50IHJlZ2lzdHJ5XCIpXG5mb3IobGV0IGVsZW1lbnROYW1lIGluIGVsZW1lbnRNYXApIHtcbiAgICBpbXBsTWV0aG9kUmVnaXN0cnkucHVzaChlbGVtZW50TmFtZSArIFwiSW1wbFwiKTtcbn1cblxudHlwZSBJbXBsTWV0aG9kID0gKC4uLmFyZ3M6IGFueSkgPT4gYW55XG5leHBvcnQgY29uc3QgZXhlY3V0ZUluT3JkZXIgPSAoaW1wbE1ldGhvZHM6IEltcGxNZXRob2RbXSwgLi4uYXJnczogYW55KSA9PiB7IFxuICAgIGxldCByZXR1cm5WYWx1ZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBsZXQgcnVuID0gdW5kZWZpbmVkO1xuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJnZW5lcmljSW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcIm9ic2VydmFibGVJbXBsXCIpO1xuICAgIGlmKHJ1bikgeyBcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInZpZXdCYXNlSW1wbFwiKTsgLy8gZXh0ZW5kcyBPYnNlcnZhYmxlLi4uXG4gICAgXG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInZpZXdJbXBsXCIpOyAvLyBleHRlbmRzIFZpZXdCYXNlLi4uXG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImFjdGlvbkl0ZW1JbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwidGFiVmlld0l0ZW1JbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwicGFnZUltcGxcIikgLy8gZXh0ZW5kcyBWaWV3Li4uXG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJ0ZXh0QmFzZUltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJkYXRlUGlja2VySW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImZyYW1lSW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImh0bWxWaWV3SW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImxpc3RQaWNrZXJJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwicGxhY2Vob2xkZXJJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwic2VhcmNoQmFySW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInNlZ21lbnRlZEJhckltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJzbGlkZXJJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwic3dpdGNoSW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInRhYlZpZXdJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiY29udGVudFZpZXdJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwic2Nyb2xsVmlld0ltcGxcIik7IC8vIGV4dGVuZHMgQ29udGVudFZpZXcuLi5cbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImJ1dHRvbkltcGxcIik7IC8vIGV4dGVuZHMgVGV4dEJhc2UuLi5cbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImxhYmVsSW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImVkaXRhYmxlVGV4dEJhc2VJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwidGV4dEZpZWxkSW1wbFwiKTsgLy8gZXh0ZW5kcyBFZGl0YWJsZVRleHRCYXNlLi4uXG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xufVxuXG5jb25zdCBoaWVyYXJjaHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgXCJBYnNvbHV0ZUxheW91dFwiIDogXCJMYXlvdXRCYXNlXCIsXG4gICAgXCJBY3Rpb25CYXJcIiA6IFwiVmlld1wiLFxuICAgIFwiQWN0aW9uSXRlbVwiIDogXCJWaWV3QmFzZVwiLFxuICAgIFwiQWN0aXZpdHlJbmRpY2F0b3JcIiA6IFwiVmlld0Jhc2VcIixcbn07IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBEYXRlUGlja2VyLCBMaXN0UGlja2VyLCBTZWFyY2hCYXIsIFNsaWRlciwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnREaWRNb3VudEltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIGV4ZWN1dGVJbk9yZGVyKFxuICAgICAgICBbb2JzZXJ2YWJsZUltcGwsXG4gICAgICAgIGRhdGVQaWNrZXJJbXBsLFxuICAgICAgICBsaXN0UGlja2VySW1wbCxcbiAgICAgICAgc2VhcmNoQmFySW1wbCxcbiAgICAgICAgc2xpZGVySW1wbCxcbiAgICAgICAgc3dpdGNoSW1wbF0sXG4gICAgICAgIGluc3RhbmNlKTtcbiAgICBcbn1cblxuY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIFxuICAgIC8vIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHJldHVybjtcblxuICAgIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcInVwZGF0ZUxpc3RlbmVyc0hlbHBlclwiKSh0cnVlKTtcbn1cbmNvbnN0IGRhdGVQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBEYXRlUGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIERhdGVQaWNrZXIpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5vbihcImRhdGVDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25EYXRlQ2hhbmdlXCIpKTtcbn1cbmNvbnN0IGxpc3RQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBMaXN0UGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIExpc3RQaWNrZXIpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5vbihcInNlbGVjdGVkSW5kZXhDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25TZWxlY3RlZEluZGV4Q2hhbmdlXCIpKTtcbn1cblxuY29uc3Qgc2VhcmNoQmFySW1wbCA9IDxUIGV4dGVuZHMgU2VhcmNoQmFyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFNlYXJjaEJhcikpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9uKFwidGV4dENoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblRleHRDaGFuZ2VcIikpO1xufVxuXG5jb25zdCBzbGlkZXJJbXBsID0gPFQgZXh0ZW5kcyBTbGlkZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgU2xpZGVyKSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IG5vZGU6IFQgfCBudWxsID0gUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUub24oXCJ2YWx1ZUNoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblZhbHVlQ2hhbmdlXCIpKTtcbn1cbmNvbnN0IHN3aXRjaEltcGwgPSA8VCBleHRlbmRzIFN3aXRjaD4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBTbGlkZXIpKSByZXR1cm47XG5cbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9uKFwiY2hlY2tlZENoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblRvZ2dsZVwiKSk7XG59XG5cbiIsImltcG9ydCB7IE9ic2VydmFibGUsIERhdGVQaWNrZXIsIExpc3RQaWNrZXIsIFNlYXJjaEJhciwgU2xpZGVyLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRXaWxsVW5tb3VudEltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIGV4ZWN1dGVJbk9yZGVyKFxuICAgICAgICBbb2JzZXJ2YWJsZUltcGwsXG4gICAgICAgIGRhdGVQaWNrZXJJbXBsLFxuICAgICAgICBsaXN0UGlja2VySW1wbCxcbiAgICAgICAgc2VhcmNoQmFySW1wbCxcbiAgICAgICAgc2xpZGVySW1wbCxcbiAgICAgICAgc3dpdGNoSW1wbF0sIFxuICAgICAgICBpbnN0YW5jZSk7XG59XG5cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICAvLyBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSByZXR1cm47XG4gICAgXG4gICAgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwidXBkYXRlTGlzdGVuZXJzSGVscGVyXCIpKGZhbHNlKTtcbn1cbmNvbnN0IGRhdGVQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBEYXRlUGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIERhdGVQaWNrZXIpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG5vZGUub2ZmKFwiZGF0ZUNoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvbkRhdGVDaGFuZ2VcIikpO1xufVxuY29uc3QgbGlzdFBpY2tlckltcGwgPSA8VCBleHRlbmRzIExpc3RQaWNrZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgTGlzdFBpY2tlcikpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IHRoaXMuZ2V0Q3VycmVudFJlZigpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUub2ZmKFwic2VsZWN0ZWRJbmRleENoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblNlbGVjdGVkSW5kZXhDaGFuZ2VcIikpO1xufVxuY29uc3Qgc2VhcmNoQmFySW1wbCA9IDxUIGV4dGVuZHMgU2VhcmNoQmFyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFNlYXJjaEJhcikpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9mZihcInRleHRDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25UZXh0Q2hhbmdlXCIpKTtcbn1cblxuLyogKHRoaXMgc2xpZGVyIGltcGwgbm90IHRoZSBzYW1lIGFzIHRoZSBvdGhlcnMuIElzIHByb2JhYmx5IGFuIGVycm9yKSAqL1xuY29uc3Qgc2xpZGVySW1wbCA9IDxUIGV4dGVuZHMgU2xpZGVyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcblxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgU2xpZGVyKSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgbm9kZS5vZmYoXCJ2YWx1ZUNoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblZhbHVlQ2hhbmdlXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKVxufVxuY29uc3Qgc3dpdGNoSW1wbCA9IDxUIGV4dGVuZHMgU3dpdGNoPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFN3aXRjaCkpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9mZihcImNoZWNrZWRDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25Ub2dnbGVcIikpO1xufSIsIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCdXR0b24sIFRleHRGaWVsZCwgSHRtbFZpZXcsIExhYmVsLCBUYWJWaWV3LCBUYWJWaWV3SXRlbSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuXG5leHBvcnQgY29uc3QgcmVuZGVySW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4obmFtZTogc3RyaW5nLCBpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG9ic2VydmFibGU6IFQpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICAgIHJldHVybiBleGVjdXRlSW5PcmRlcihcbiAgICAgICAgW2dlbmVyaWNJbXBsLFxuICAgICAgICBidXR0b25JbXBsLFxuICAgICAgICB0ZXh0RmllbGRJbXBsLFxuICAgICAgICBodG1sVmlld0ltcGwsXG4gICAgICAgIGxhYmVsSW1wbCxcbiAgICAgICAgdGFiVmlld0l0ZW1JbXBsXSxcbiAgICAgICAgbmFtZSwgaW5zdGFuY2UsIG9ic2VydmFibGUpO1xufVxuY29uc3QgZ2VuZXJpY0ltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KG5hbWU6IHN0cmluZywgaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBvYnNlcnZhYmxlOiBUKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJnZW5lcmljIHJlbmRlclwiKTtcbiAgICBjb25zdCB7IGZvcndhcmRlZFJlZiwgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IGluc3RhbmNlLnByb3BzXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHtcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuXG4gICAgKTtcbn1cblxuY29uc3QgYnV0dG9uSW1wbCA9IDxUIGV4dGVuZHMgQnV0dG9uPihuYW1lOiBzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgb2JzZXJ2YWJsZTogVCkgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgQnV0dG9uKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZm9yd2FyZGVkUmVmLFxuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIGZvcm1hdHRlZFRleHQsXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgfSA9IGluc3RhbmNlLnByb3BzO1xuICAgIFxuICAgICAgICBpZiAodGV4dCAmJiBmb3JtYXR0ZWRUZXh0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEJvdGggdGV4dCBhbmQgZm9ybWF0dGVkVGV4dCBwcm92aWRlZDsgc2hhbGwgdXNlIGZvcm1hdHRlZFRleHQuYCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSB7XG4gICAgICAgICAgICBbZm9ybWF0dGVkVGV4dCA/IFwiZm9ybWF0dGVkVGV4dFwiIDogXCJ0ZXh0XCJdOiBmb3JtYXR0ZWRUZXh0IHx8IHRleHQsXG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmVcIiwgLy8gTmF0aXZlU2NyaXB0IGRlZmF1bHRzIGZyb20gZG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgLi4udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW4gLy8gV2VpcmQgdGhhdCBhIGJ1dHRvbiBtYXkgY29udGFpbiBjaGlsZHJlbiwgYnV0IHdoYXQgZG8gSSBrbm93LlxuICAgICAgICApO1xufVxuXG5jb25zdCB0ZXh0RmllbGRJbXBsID0gPFQgZXh0ZW5kcyBUZXh0RmllbGQ+KG5hbWU6IHN0cmluZywgaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBvYnNlcnZhYmxlOiBUKSA9PiB7XG4gICAgXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBUZXh0RmllbGQpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIFxuICAgIGNvbnN0IHtcbiAgICAgICAgZm9yd2FyZGVkUmVmLFxuXG5cbiAgICAgICAgdGV4dCxcbiAgICAgICAgZm9ybWF0dGVkVGV4dCxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIC4uLnJlc3RcbiAgICB9ID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBpZiAodGV4dCAmJiBmb3JtYXR0ZWRUZXh0KSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgQm90aCB0ZXh0IGFuZCBmb3JtYXR0ZWRUZXh0IHByb3ZpZGVkOyBzaGFsbCB1c2UgZm9ybWF0dGVkVGV4dC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IHtcbiAgICAgICAgW2Zvcm1hdHRlZFRleHQgPyBcImZvcm1hdHRlZFRleHRcIiA6IFwidGV4dFwiXTogZm9ybWF0dGVkVGV4dCB8fCB0ZXh0LFxuICAgIH07XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgbmFtZSxcbiAgICAgICAge1xuICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgIC4uLnRleHRDb250ZW50LFxuICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuIC8vIFdlaXJkIHRoYXQgYSBUZXh0RmllbGQgbWF5IGNvbnRhaW4gY2hpbGRyZW4sIGJ1dCB3aGF0IGRvIEkga25vdy5cbiAgICApO1xufVxuXG5jb25zdCBodG1sVmlld0ltcGwgPSA8VCBleHRlbmRzIEh0bWxWaWV3PihuYW1lOiBzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgb2JzZXJ2YWJsZTogVCkgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgSHRtbFZpZXcpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIFxuICAgIGNvbnN0IHtcbiAgICAgICAgZm9yd2FyZGVkUmVmLFxuICAgICAgICBjaGlsZHJlbixcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIklnbm9yaW5nICdjaGlsZHJlbicgcHJvcCBvbiBIdG1sVmlldzsgbm90IHBlcm1pdHRlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgbmFtZSxcbiAgICAgICAge1xuICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgIHJlZjogZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpLFxuICAgICAgICB9LFxuICAgICAgICBudWxsXG4gICAgKTtcbn1cblxuY29uc3QgbGFiZWxJbXBsID0gPFQgZXh0ZW5kcyBMYWJlbD4obmFtZTogc3RyaW5nLCBpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG9ic2VydmFibGU6IFQpID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIExhYmVsKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImxhYmVsIGltcGxcIik7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZixcbiAgICBcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBmb3JtYXR0ZWRUZXh0LFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgIH0gPSBpbnN0YW5jZS5wcm9wcztcbiAgICBcbiAgICAgICAgaWYgKHRleHQgJiYgZm9ybWF0dGVkVGV4dCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBCb3RoIHRleHQgYW5kIGZvcm1hdHRlZFRleHQgcHJvdmlkZWQ7IHNoYWxsIHVzZSBmb3JtYXR0ZWRUZXh0LmApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0ge1xuICAgICAgICAgICAgW2Zvcm1hdHRlZFRleHQgPyBcImZvcm1hdHRlZFRleHRcIiA6IFwidGV4dFwiXTogZm9ybWF0dGVkVGV4dCB8fCB0ZXh0LFxuICAgICAgICB9O1xuICAgIFxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgICAgICAuLi50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICByZWY6IGZvcndhcmRlZFJlZiB8fCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJteVJlZlwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbiAvLyBXZWlyZCB0aGF0IGEgTGFiZWwgbWF5IGNvbnRhaW4gY2hpbGRyZW4sIGJ1dCB3aGF0IGRvIEkga25vdy5cbiAgICAgICAgKTtcbn1cblxuY29uc3QgdGFiVmlld0l0ZW1JbXBsID0gPFQgZXh0ZW5kcyBUYWJWaWV3SXRlbT4obmFtZTogc3RyaW5nLCBpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG9ic2VydmFibGU6IFQpID0+IHsgXG4gICAgXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBUYWJWaWV3SXRlbSkpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgXG4gICAgY29uc3Qge1xuICAgICAgICBmb3J3YXJkZWRSZWYsXG4gICAgXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAvLyB2aWV3LCAvKiBXZSBkaXNhbGxvdyB0aGlzIGF0IHRoZSB0eXBpbmdzIGxldmVsLiAqL1xuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IGluc3RhbmNlLnByb3BzO1xuICAgIFxuICAgIGlmIChSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPiAxIHx8IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY2hpbGRyZW4gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb3VudDogXCIgKyBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgJ2NoaWxkcmVuJyBwcm9wZXJ0eSBwYXNzZWQgaW50byBUYWJWaWV3SXRlbSBtdXN0IGJlIGEgc2luZ2xlIGNoaWxkIG5vZGUsIHdoaWNoIG11c3Qgbm90IGJlIGEgbnVtYmVyIG9yIHN0cmluZ2BcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHtcbiAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICByZWY6IGZvcndhcmRlZFJlZiB8fCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJteVJlZlwiKSxcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICApO1xufVxuXG5cbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuXG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIn4vUmVhY3RpZmllZC9FeHRyYVByb3BzXCI7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWwgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L3NoYWxsb3dFcXVhbFwiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcblxuXG5leHBvcnQgY29uc3Qgc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBuZXh0UHJvcHM6IFQgJiBFeHRyYVByb3BzPFQ+LCBuZXh0U3RhdGU6IGFueSk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlSW1wbChpbnN0YW5jZSwgbmV4dFByb3BzLCBuZXh0U3RhdGUpO1xufVxuY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbmV4dFByb3BzOiBUICYgRXh0cmFQcm9wczxUPiwgbmV4dFN0YXRlOiBhbnkpID0+IHtcbiAgICBcbiAgICAvLyBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSByZXR1cm47XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coYE9ic2VydmFibGUncyBzaG91bGRDb21wb25lbnRVcGRhdGVgKTtcbiAgICBjb25zdCBzaG91bGRVcGRhdGU6IGJvb2xlYW4gPSAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBbc2hvdWxkQ29tcG9uZW50VXBkYXRlXSBzaG91bGRVcGRhdGU6ICR7c2hvdWxkVXBkYXRlfS5gKTtcbiAgICBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJ1cGRhdGVMaXN0ZW5lcnNIZWxwZXJcIikobnVsbCwgbmV4dFByb3BzKTtcbiAgICAvLyBodHRwczovL2x1Y3liYWluLmNvbS9ibG9nLzIwMTgvcmVhY3QtanMtcHVyZS1jb21wb25lbnQvXG4gICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBWaWV3QmFzZSwgVmlldywgUGFnZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcblxuZXhwb3J0IHR5cGUgUmVhY3RpZnk8VCBleHRlbmRzIE9ic2VydmFibGU+ID0gUmVhY3QuQ29tcG9uZW50PFBhcnRpYWw8VD4gJiBQYXJ0aWFsPEV4dHJhUHJvcHM8VD4+LCBhbnk+O1xuXG4vLyBleHBvcnQgdHlwZSBQcm9wczxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4gPSBUICYgRXh0cmFQcm9wczxUPjtcblxuXG4vKlxuZXhwb3J0IHR5cGUgT2JzZXJ2YWJsZTxUPiA9IFQgZXh0ZW5kcyBPYnNlcnZhYmxlID8gUmVhY3RpZnk8T2JzZXJ2YWJsZT4gOiBFbXB0eVxuXG5leHBvcnQgdHlwZSBWaWV3QmFzZTxUPiA9IFQgZXh0ZW5kcyBWaWV3QmFzZSA/IFJlYWN0aWZ5PFZpZXdCYXNlPiA6IEVtcHR5O1xuXG5leHBvcnQgdHlwZSBWaWV3PFQ+ID0gVCBleHRlbmRzIFZpZXcgPyBSZWFjdGlmeTxWaWV3PiA6IEVtcHR5O1xuXG5pbnRlcmZhY2UgRW1wdHkge1xuXG59XG4qL1xuLypcbmV4cG9ydCBjb25zdCB0cnlDYXN0ID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBpZigoaW5zdGFuY2UucHJvcHMpIGFzIFByb3BzPFQ+KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2FzIGluc3RhbmNlXCIpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiV2FzIG5vdCBpbnN0YW5jZVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cbiovXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzM5MjM0OS9ob3ctY2FuLWktY2hlY2staWYtZWxlbWVudC1pcy1hbi1pbnN0YW5jZW9mLXVcbi8qXG5leHBvcnQgZnVuY3Rpb24gdHJ5Q2FzdDxUPihpbnN0YW5jZTogYW55KSB7XG4gICAgaWYoaW5zdGFuY2UgaW5zdGFuY2VvZiBUKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FzXCIpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwid2FzIG5vdFwiKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cbiovXG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzNTMzMzc0L2NvbXBhcmUtdHlwZXMtaW4tZ2VuZXJpYy1mdW5jdGlvbi11c2luZy10eXBlc2NyaXB0XG4vLyBoZWxwZXIgbWV0aG9kIHRvIGJlIGFibGUgdG8gY2FzdCBSZWFjdGlmeTxPYnNlcnZhYmxlPiB0byBSZWFjdGlmeTxWaWV3PiAgZXRjXG5cblxuLy8gaGVscGVyIG1ldGhvZCB0byBiZSBhYmxlIHRvIGNhc3QgUmVhY3RpZnk8T2JzZXJ2YWJsZT4gdG8gUmVhY3RpZnk8Vmlldz4gIGV0YyBcbmV4cG9ydCBjb25zdCB0cnlDYXN0ID0gPFQ+KHBhcmFtZXRlcjogYW55KSA9PiB7XG4gICAgcmV0dXJuIHBhcmFtZXRlciBhcyBUO1xufVxuIiwiXG5pbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgb25EYXRhQ2hhbmdlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEgKSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoW2RhdGVQaWNrZXJJbXBsXSwgaW5zdGFuY2UsIGFyZ3MpO1xufVxuXG5jb25zdCBkYXRlUGlja2VySW1wbCA9IDxUIGV4dGVuZHMgRGF0ZVBpY2tlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIERhdGVQaWNrZXIpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgZGF0ZTogRGF0ZSA9ICg8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdCkuZGF0ZTtcbiAgICBpbnN0YW5jZS5wcm9wcy5vbkRhdGVDaGFuZ2UgJiYgaW5zdGFuY2UucHJvcHMub25EYXRlQ2hhbmdlKGRhdGUpO1xufVxuIiwiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIExpc3RQaWNrZXIgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IG9uU2VsZWN0SW5kZXhDaGFuZ2VJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIGV4ZWN1dGVJbk9yZGVyKFtsaXN0UGlja2VySW1wbF0sIGluc3RhbmNlLCBhcmdzKTtcbn1cbmNvbnN0IGxpc3RQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBMaXN0UGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgTGlzdFBpY2tlcikpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAoPExpc3RQaWNrZXI+YXJncy5vYmplY3QpLnNlbGVjdGVkSW5kZXg7XG4gICAgaW5zdGFuY2UucHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlICYmIGluc3RhbmNlLnByb3BzLm9uU2VsZWN0ZWRJbmRleENoYW5nZShzZWxlY3RlZEluZGV4KTtcbn0iLCJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU2VhcmNoQmFyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBvblRleHRDaGFuZ2VJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIGV4ZWN1dGVJbk9yZGVyKFtzZWFyY2hCYXJJbXBsXSwgaW5zdGFuY2UsIGFyZ3MpO1xufVxuY29uc3Qgc2VhcmNoQmFySW1wbCA9IDxUIGV4dGVuZHMgU2VhcmNoQmFyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgU2VhcmNoQmFyKSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IHRleHQ6IHN0cmluZyA9ICg8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0KS50ZXh0O1xuICAgIGluc3RhbmNlLnByb3BzLm9uVGV4dENoYW5nZSAmJiBpbnN0YW5jZS5wcm9wcy5vblRleHRDaGFuZ2UodGV4dCk7XG59IiwiaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgb25Ub2dnbGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSApID0+IHtcbiAgICBleGVjdXRlSW5PcmRlcihbc3dpdGNoSW1wbF0sIGluc3RhbmNlLCBhcmdzKTtcbn1cblxuY29uc3Qgc3dpdGNoSW1wbCA9IDxUIGV4dGVuZHMgU3dpdGNoPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgU3dpdGNoKSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IGNoZWNrZWQ6IGJvb2xlYW4gPSAoPFN3aXRjaD5hcmdzLm9iamVjdCkuY2hlY2tlZDtcblxuICAgICAgICBpbnN0YW5jZS5wcm9wcy5vblRvZ2dsZSAmJiBpbnN0YW5jZS5wcm9wcy5vblRvZ2dsZShjaGVja2VkKTtcbn0iLCJpbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBvblZhbHVlQ2hhbmdlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEgKSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoW3NsaWRlckltcGxdLCBpbnN0YW5jZSwgYXJncyk7XG59XG4vKiB0eXBvIGZvdW5kIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9zaGlyYWthYmEvcmVhY3QtbmF0aXZlc2NyaXB0L2Jsb2IvbWFzdGVyL3JlYWN0LW5hdGl2ZXNjcmlwdC9zcmMvY29tcG9uZW50cy9TbGlkZXIudHMgKi9cbmNvbnN0IHNsaWRlckltcGwgPSA8VCBleHRlbmRzIFNsaWRlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFNsaWRlcikpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBzbGlkZXJWYWx1ZTogbnVtYmVyID0gKDxTbGlkZXI+YXJncy5vYmplY3QpLnZhbHVlO1xuXG4gICAgICAgIGluc3RhbmNlLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgaW5zdGFuY2UucHJvcHMub25WYWx1ZUNoYW5nZShzbGlkZXJWYWx1ZSk7XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuLy8gaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi9UeXBlc1wiO1xuaW1wb3J0IHsgRXh0cmFQcm9wcyB9IGZyb20gXCIuLi9FeHRyYVByb3BzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuL1R5cGVzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRSZWZJbXBsIDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KTogVCB8IG51bGwge1xuICAgIGNvbnN0IHJlZiA9IChpbnN0YW5jZS5wcm9wcy5mb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIikpLmN1cnJlbnQ7XG4gICAgY29uc29sZS5sb2coXCJnZXRDdXJyZW50UmVmSW1wbDogXCIgKyByZWYpO1xuICAgIHJldHVybiByZWY7XG59XG5cblxuXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwiLi4vRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi9UeXBlc1wiO1xuLy8gaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi9UeXBlc1wiO1xuXG4vKlxuZXhwb3J0IGNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3QuQ29tcG9uZW50PFQgJiBFeHRyYVByb3BzPFQ+PiwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogUCkgPT4ge1xuICAgIFxufVxuKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVMaXN0ZW5lcnNIZWxwZXJJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgb2JzZXJ2YWJsZUltcGwoaW5zdGFuY2UsIGF0dGFjaCwgbmV4dFByb3BzKTtcbn1cblxuY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBcbiAgICAvLyBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcInVwZGF0ZUxpc3RlbmVyc1wiKShub2RlLCBhdHRhY2gsIG5leHRQcm9wcyk7XG59IiwiXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtcbiAgICBPYnNlcnZhYmxlLFxuICAgIFZpZXcsXG4gICAgUGFnZSxcbiAgICBBY3Rpb25JdGVtLFxuICAgIEVkaXRhYmxlVGV4dEJhc2UsXG4gICAgRnJhbWUsXG4gICAgUGxhY2Vob2xkZXIsXG4gICAgU2Nyb2xsVmlldyxcbiAgICBTZWFyY2hCYXIsXG4gICAgU2VnbWVudGVkQmFyLFxuICAgIFRhYlZpZXdcbn0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcblxuaW1wb3J0IHsgRXh0cmFQcm9wcyB9IGZyb20gXCIuLi9FeHRyYVByb3BzXCI7XG5pbXBvcnQgeyB1cGRhdGVMaXN0ZW5lciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRXZlbnRIYW5kbGluZ1wiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IHRyeUNhc3QsIFByb3BzLCBSZWFjdGlmeSB9IGZyb20gXCIuL1R5cGVzXCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuL0hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxpc3RlbmVyc0ltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiAsbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogUHJvcHM8VD4pID0+IHtcbiAgICBcbiAgICAvKiBpbXBsZW1lbnRhdGlvbiBmb3IgYW55IHJucyBjb21wb25lbnQgaGVyZSAtIG9yIG9uIHJlYWN0aWZ5IGNsYXNzIGJvZHkqL1xuICAgIGV4ZWN1dGVJbk9yZGVyKFxuICAgICAgICBbcGFnZUltcGwsXG4gICAgICAgIHZpZXdJbXBsLFxuICAgICAgICBvYnNlcnZhYmxlSW1wbCxcbiAgICAgICAgYWN0aW9uSXRlbUltcGwsXG4gICAgICAgIGVkaXRhYmxlVGV4dEJhc2VJbXBsLFxuICAgICAgICBmcmFtZUltcGwsXG4gICAgICAgIHBsYWNlaG9sZGVySW1wbCxcbiAgICAgICAgc2Nyb2xsVmlld0ltcGwsXG4gICAgICAgIHNlYXJjaEJhckltcGwsXG4gICAgICAgIHNlZ21lbnRlZEJhckltcGwsXG4gICAgICAgIHRhYlZpZXdJbXBsXG4gICAgXSxcbiAgICBpbnN0YW5jZSwgbm9kZSwgYXR0YWNoKTtcbn1cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8T2JzZXJ2YWJsZT4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coXCJvYnNlcnZhYmxlSW1wbFwiKTtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwicHJvcGVydHlDaGFuZ2VcIiwgaW5zdGFuY2UucHJvcHMub25Qcm9wZXJ0eUNoYW5nZSwgbmV4dFByb3BzLm9uUHJvcGVydHlDaGFuZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblByb3BlcnR5Q2hhbmdlKSBtZXRob2QoXCJwcm9wZXJ0eUNoYW5nZVwiLCBpbnN0YW5jZS5wcm9wcy5vblByb3BlcnR5Q2hhbmdlKTtcbiAgICB9XG4gICAgXG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaGlyYWthYmEvcmVhY3QtbmF0aXZlc2NyaXB0L2Jsb2IvbWFzdGVyL3JlYWN0LW5hdGl2ZXNjcmlwdC9zcmMvY29tcG9uZW50cy9WaWV3LnRzXG5jb25zdCB2aWV3SW1wbCA9IDxUIGV4dGVuZHMgVmlldz4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgVmlldykpIHJldHVybjtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcInZpZXcgaW1wbFwiKTtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibG9hZGVkXCIsIGluc3RhbmNlLnByb3BzLm9uTG9hZGVkLCBuZXh0UHJvcHMub25Mb2FkZWQpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInVubG9hZGVkXCIsIGluc3RhbmNlLnByb3BzLm9uVW5sb2FkZWQsIG5leHRQcm9wcy5vblVubG9hZGVkKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJhbmRyb2lkQmFja1ByZXNzZWRcIiwgaW5zdGFuY2UucHJvcHMub25BbmRyb2lkQmFja1ByZXNzZWQsIG5leHRQcm9wcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwic2hvd2luZ01vZGFsbHlcIiwgaW5zdGFuY2UucHJvcHMub25TaG93aW5nTW9kYWxseSwgbmV4dFByb3BzLm9uU2hvd2luZ01vZGFsbHkpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInNob3duTW9kYWxseVwiLCBpbnN0YW5jZS5wcm9wcy5vblNob3duTW9kYWxseSwgbmV4dFByb3BzLm9uU2hvd25Nb2RhbGx5KTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLnRhcCwgaW5zdGFuY2UucHJvcHMub25UYXAsIG5leHRQcm9wcy5vblRhcCwgXCJ0YXBcIik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5kb3VibGVUYXAsIGluc3RhbmNlLnByb3BzLm9uRG91YmxlVGFwLCBuZXh0UHJvcHMub25Eb3VibGVUYXAsIFwiZG91YmxlVGFwXCIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMucGluY2gsIGluc3RhbmNlLnByb3BzLm9uUGluY2gsIG5leHRQcm9wcy5vblBpbmNoLCBcInBpbmNoXCIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMucGFuLCBpbnN0YW5jZS5wcm9wcy5vblBhbiwgbmV4dFByb3BzLm9uUGFuLCBcInBhblwiKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLnN3aXBlLCBpbnN0YW5jZS5wcm9wcy5vblN3aXBlLCBuZXh0UHJvcHMub25Td2lwZSwgXCJzd2lwZVwiKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLnJvdGF0aW9uLCBpbnN0YW5jZS5wcm9wcy5vblJvdGF0aW9uLCBuZXh0UHJvcHMub25Sb3RhdGlvbiwgXCJyb3RhdGlvblwiKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLmxvbmdQcmVzcywgaW5zdGFuY2UucHJvcHMub25Mb25nUHJlc3MsIG5leHRQcm9wcy5vbkxvbmdQcmVzcywgXCJsb25nUHJlc3NcIik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy50b3VjaCwgaW5zdGFuY2UucHJvcHMub25Ub3VjaCwgbmV4dFByb3BzLm9uVG91Y2gsIFwidG91Y2hcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uTG9hZGVkKSBtZXRob2QoXCJsb2FkZWRcIiwgaW5zdGFuY2UucHJvcHMub25Mb2FkZWQpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25VbmxvYWRlZCkgbWV0aG9kKFwidW5sb2FkZWRcIiwgaW5zdGFuY2UucHJvcHMub25VbmxvYWRlZCk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCkgbWV0aG9kKFwiYW5kcm9pZEJhY2tQcmVzc2VkXCIsIGluc3RhbmNlLnByb3BzLm9uQW5kcm9pZEJhY2tQcmVzc2VkKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uU2hvd2luZ01vZGFsbHkpIG1ldGhvZChcInNob3dpbmdNb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd2luZ01vZGFsbHkpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TaG93bk1vZGFsbHkpIG1ldGhvZChcInNob3duTW9kYWxseVwiLCBpbnN0YW5jZS5wcm9wcy5vblNob3duTW9kYWxseSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblRhcCkgbWV0aG9kKEdlc3R1cmVUeXBlcy50YXAsIGluc3RhbmNlLnByb3BzLm9uVGFwKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uRG91YmxlVGFwKSBtZXRob2QoR2VzdHVyZVR5cGVzLmRvdWJsZVRhcCwgaW5zdGFuY2UucHJvcHMub25Eb3VibGVUYXApO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25QaW5jaCkgbWV0aG9kKEdlc3R1cmVUeXBlcy5waW5jaCwgaW5zdGFuY2UucHJvcHMub25QaW5jaCk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblBhbikgbWV0aG9kKEdlc3R1cmVUeXBlcy5wYW4sIGluc3RhbmNlLnByb3BzLm9uUGFuKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uU3dpcGUpIG1ldGhvZChHZXN0dXJlVHlwZXMuc3dpcGUsIGluc3RhbmNlLnByb3BzLm9uU3dpcGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25Sb3RhdGlvbikgbWV0aG9kKEdlc3R1cmVUeXBlcy5yb3RhdGlvbiwgaW5zdGFuY2UucHJvcHMub25Sb3RhdGlvbik7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkxvbmdQcmVzcykgbWV0aG9kKEdlc3R1cmVUeXBlcy5sb25nUHJlc3MsIGluc3RhbmNlLnByb3BzLm9uTG9uZ1ByZXNzKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uVG91Y2gpIG1ldGhvZChHZXN0dXJlVHlwZXMudG91Y2gsIGluc3RhbmNlLnByb3BzLm9uVG91Y2gpO1xuICAgIH1cbn1cblxuY29uc3QgYWN0aW9uSXRlbUltcGwgPSA8VCBleHRlbmRzIEFjdGlvbkl0ZW0+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICAvKiB0YXAgYXNzaWduaW5nIHRhcCBvbiBhY3Rpb25pdGVtIGNyYXNoZXMgKi9cbiAgICAvKiBzaG91bGQgYmUgY29uZGl0aW9uYWxseSByYW4gc28gdGhhdCB0d28gdGFwIGdlc3R1cmUgcmVjb2duaXplcnMgYXJlbid0IGFkZGVkKi9cbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIEFjdGlvbkl0ZW0pKSByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZyhcImFjdGlvbkl0ZW1JbXBsXCIpXG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInRhcFwiLCBpbnN0YW5jZS5wcm9wcy5vblRhcCwgbmV4dFByb3BzLm9uVGFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25UYXApIG1ldGhvZChcInRhcFwiLCBpbnN0YW5jZS5wcm9wcy5vblRhcCk7XG4gICAgfVxuICAgIFxufVxuY29uc3QgcGFnZUltcGwgPSA8VCBleHRlbmRzIFBhZ2U+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFBhZ2UpKSByZXR1cm47XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJwYWdlSW1wbFwiKTtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibmF2aWdhdGVkRnJvbVwiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZEZyb20sIG5leHRQcm9wcy5vbk5hdmlnYXRlZEZyb20pO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcIm5hdmlnYXRlZFRvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkVG8sIG5leHRQcm9wcy5vbk5hdmlnYXRlZFRvKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJuYXZpZ2F0aW5nRnJvbVwiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdGcm9tLCBuZXh0UHJvcHMub25OYXZpZ2F0aW5nRnJvbSk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibmF2aWdhdGluZ1RvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ1RvLCBuZXh0UHJvcHMub25OYXZpZ2F0aW5nVG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0ZWRGcm9tKSBtZXRob2QoXCJuYXZpZ2F0ZWRGcm9tXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkRnJvbSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZFRvKSBtZXRob2QoXCJuYXZpZ2F0ZWRUb1wiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZFRvKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ0Zyb20pIG1ldGhvZChcIm5hdmlnYXRpbmdGcm9tXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ0Zyb20pO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nVG8pIG1ldGhvZChcIm5hdmlnYXRpbmdUb1wiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdUbyk7XG4gICAgfVxufVxuXG5jb25zdCBlZGl0YWJsZVRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgRWRpdGFibGVUZXh0QmFzZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgQWN0aW9uSXRlbSkpIHJldHVybjtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImVkaXRhYmxlVGV4dEJhc2VJbXBsXCIpO1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJibHVyXCIsIGluc3RhbmNlLnByb3BzLm9uQmx1ciwgbmV4dFByb3BzLm9uQmx1cik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwiZm9jdXNcIiwgaW5zdGFuY2UucHJvcHMub25Gb2N1cywgbmV4dFByb3BzLm9uRm9jdXMpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInRleHRDaGFuZ2VcIiwgaW5zdGFuY2UucHJvcHMub25UZXh0Q2hhbmdlLCBuZXh0UHJvcHMub25UZXh0Q2hhbmdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25CbHVyKSBtZXRob2QoXCJibHVyXCIsIGluc3RhbmNlLnByb3BzLm9uQmx1cik7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkZvY3VzKSBtZXRob2QoXCJmb2N1c1wiLCBpbnN0YW5jZS5wcm9wcy5vbkZvY3VzKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uVGV4dENoYW5nZSkgbWV0aG9kKFwidGV4dENoYW5nZVwiLCBpbnN0YW5jZS5wcm9wcy5vblRleHRDaGFuZ2UpO1xuICAgIH1cbn1cbmNvbnN0IGZyYW1lSW1wbCA9IDxUIGV4dGVuZHMgRnJhbWU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIEZyYW1lKSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiZnJhbWVJbXBsXCIpO1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJvcHRpb25TZWxlY3RlZFwiLCBpbnN0YW5jZS5wcm9wcy5vbk9wdGlvblNlbGVjdGVkLCBuZXh0UHJvcHMub25PcHRpb25TZWxlY3RlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25PcHRpb25TZWxlY3RlZCkgbWV0aG9kKFwib3B0aW9uU2VsZWN0ZWRcIiwgaW5zdGFuY2UucHJvcHMub25PcHRpb25TZWxlY3RlZCk7XG4gICAgfVxufVxuY29uc3QgcGxhY2Vob2xkZXJJbXBsID0gPFQgZXh0ZW5kcyBQbGFjZWhvbGRlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4geyBcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFBsYWNlaG9sZGVyKSkgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coXCJwbGFjZWhvbGRlckltcGxcIik7XG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcImNyZWF0aW5nVmlld1wiLCBpbnN0YW5jZS5wcm9wcy5vbkNyZWF0aW5nVmlldywgbmV4dFByb3BzLm9uQ3JlYXRpbmdWaWV3KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25DcmVhdGluZ1ZpZXcpIG1ldGhvZChcImNyZWF0aW5nVmlld1wiLCBpbnN0YW5jZS5wcm9wcy5vbkNyZWF0aW5nVmlldyk7XG4gICAgfVxufVxuY29uc3Qgc2Nyb2xsVmlld0ltcGwgPSA8VCBleHRlbmRzIFNjcm9sbFZpZXc+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHsgXG4gICAgXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBTY3JvbGxWaWV3KSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsVmlld0ltcGxcIik7XG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInNjcm9sbFwiLCB0aGlzLnByb3BzLm9uU2Nyb2xsLCBuZXh0UHJvcHMub25TY3JvbGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgXG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNjcm9sbCkgbWV0aG9kKFwic2Nyb2xsXCIsIGluc3RhbmNlLnByb3BzLm9uU2Nyb2xsKTtcbiAgICB9XG59XG5jb25zdCBzZWFyY2hCYXJJbXBsID0gPFQgZXh0ZW5kcyBTZWFyY2hCYXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHsgXG4gICAgXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBTZWFyY2hCYXIpKSByZXR1cm47XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJzZWFyY2hCYXJJbXBsXCIpO1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJzdWJtaXRcIiwgaW5zdGFuY2UucHJvcHMub25TdWJtaXQsIG5leHRQcm9wcy5vblN1Ym1pdCk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwiY2xvc2VcIiwgaW5zdGFuY2UucHJvcHMub25DbG9zZSwgbmV4dFByb3BzLm9uQ2xvc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uU3VibWl0KSBtZXRob2QoXCJzdWJtaXRcIiwgaW5zdGFuY2UucHJvcHMub25TdWJtaXQpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25DbG9zZSkgbWV0aG9kKFwiY2xvc2VcIiwgaW5zdGFuY2UucHJvcHMub25DbG9zZSk7XG4gICAgfVxufVxuY29uc3Qgc2VnbWVudGVkQmFySW1wbCA9IDxUIGV4dGVuZHMgU2VnbWVudGVkQmFyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7IFxuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgU2VnbWVudGVkQmFyKSkgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coXCJzZWdtZW50ZWRCYXJJbXBsXCIpO1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIoXG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgXCJzZWxlY3RlZEluZGV4Q2hhbmdlXCIsXG4gICAgICAgICAgICBpbnN0YW5jZS5wcm9wcy5vblNlbGVjdGVkSW5kZXhDaGFuZ2UsXG4gICAgICAgICAgICBuZXh0UHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlKSBtZXRob2QoXCJzZWxlY3RlZEluZGV4Q2hhbmdlXCIsIGluc3RhbmNlLnByb3BzLm9uU2VsZWN0ZWRJbmRleENoYW5nZSk7XG4gICAgfVxufVxuY29uc3QgdGFiVmlld0ltcGwgPSA8VCBleHRlbmRzIFRhYlZpZXc+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHsgXG4gICAgXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBUYWJWaWV3KSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwidGFiVmlld0ltcGxcIik7XG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBcInNlbGVjdGVkSW5kZXhDaGFuZ2VcIixcbiAgICAgICAgICAgIGluc3RhbmNlLnByb3BzLm9uU2VsZWN0ZWRJbmRleENoYW5nZSxcbiAgICAgICAgICAgIG5leHRQcm9wcy5vblNlbGVjdGVkSW5kZXhDaGFuZ2VcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgIFxuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlKSBtZXRob2QoXCJzZWxlY3RlZEluZGV4Q2hhbmdlXCIsIGluc3RhbmNlLnByb3BzLm9uU2VsZWN0ZWRJbmRleENoYW5nZSk7XG4gICAgfVxufVxuXG5cblxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgcmVnaXN0ZXIsIENvbnRlbnRWaWV3IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IG5hbWVPZiwgZmlyc3RMZXR0ZXJMb3dlcmNhc2UgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9IZWxwZXJzXCI7XG5pbXBvcnQgeyByZW5kZXJJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vUmVhY3QvcmVuZGVySW1wbFwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFJlZkltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9nZXRDdXJyZW50UmVmSW1wbFwiO1xuaW1wb3J0IHsgRXh0cmFQcm9wcyB9IGZyb20gXCIuL0V4dHJhUHJvcHNcIjtcbmltcG9ydCB7IHVwZGF0ZUxpc3RlbmVyc0ltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi91cGRhdGVMaXN0ZW5lcnNJbXBsXCI7XG5pbXBvcnQgeyBjb21wb25lbnREaWRNb3VudEltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnREaWRNb3VudEltcGxcIjtcbmltcG9ydCB7IHNob3VsZENvbXBvbmVudFVwZGF0ZUltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9SZWFjdC9zaG91bGRDb21wb25lbnRVcGRhdGVJbXBsXCI7XG5pbXBvcnQgeyBjb21wb25lbnRXaWxsVW5tb3VudEltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnRXaWxsVW5tb3VudEltcGxcIjtcbmltcG9ydCB7IF9fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkSW1wbFwiO1xuaW1wb3J0IHsgX19jdXN0b21Ib3N0Q29uZmlnUmVtb3ZlQ2hpbGRJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnUmVtb3ZlQ2hpbGRJbXBsXCI7XG5pbXBvcnQgeyBfX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmVJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbFwiO1xuaW1wb3J0IHsgb25EYXRhQ2hhbmdlSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vbkRhdGFDaGFuZ2VJbXBsXCI7XG5pbXBvcnQgeyBDdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9zaGFyZWQvSG9zdENvbmZpZ1R5cGVzXCI7XG5pbXBvcnQgeyB1cGRhdGVMaXN0ZW5lcnNIZWxwZXJJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbFwiO1xuaW1wb3J0IHsgb25TZWxlY3RJbmRleENoYW5nZUltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25TZWxlY3RlZEluZGV4Q2hhbmdlSW1wbFwiO1xuaW1wb3J0IHsgb25UZXh0Q2hhbmdlSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRleHRDaGFuZ2VJbXBsXCI7XG5pbXBvcnQgeyBvblZhbHVlQ2hhbmdlSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblZhbHVlQ2hhbmdlSW1wbFwiO1xuaW1wb3J0IHsgb25Ub2dnbGVJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVG9nZ2xlSW1wbFwiO1xuaW1wb3J0IHsgUHJvcHNXaXRob3V0Rm9yd2FyZGVkUmVmIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L3NoYXJlZC9OYXRpdmVTY3JpcHRDb21wb25lbnRUeXBpbmdzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFJlYWN0aWZpZWQ8VCBleHRlbmRzIE9ic2VydmFibGU+KG9ic2VydmFibGU6IFQsIG5hbWU/OiBzdHJpbmcpIHsgXG5cbiAgICBpZighbmFtZSkge1xuICAgICAgICBuYW1lID0gZmlyc3RMZXR0ZXJMb3dlcmNhc2UobmFtZU9mKG9ic2VydmFibGUpKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJyZWdpc3RlcmluZyBcIiArIG5hbWUpO1xuICAgIHJlZ2lzdGVyKG5hbWUsICgpID0+IHtcbiAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9KTtcbiAgICAvLyBsZXQgc2VsZjogUmVhY3RpZnkgPSBudWxsO1xuICAgIGNsYXNzIFJlYWN0aWZ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFBhcnRpYWw8VD4gJiBQYXJ0aWFsPEV4dHJhUHJvcHM8VD4+LCBhbnk+IGltcGxlbWVudHMgQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXI8VD4ge1xuICAgICAgICBzdGF0aWMgY291bnRPZkluc3RhbmNlcyA9IDA7XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7Li4uIG9ic2VydmFibGUgfSBcbiAgICAgICAgLypcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHM6IFQgJiBFeHRyYVByb3BzPFQ+KSB7XG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgICBSZWFjdGlmeS5jb3VudE9mSW5zdGFuY2VzICsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25zdHJ1Y3RpbmcgaW5zdGFuY2UgXCIgKyBSZWFjdGlmeS5jb3VudE9mSW5zdGFuY2VzKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbXlSZWY6IFJlYWN0LlJlZk9iamVjdDxUPiA9IFJlYWN0LmNyZWF0ZVJlZjxUPigpO1xuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q3VycmVudFJlZiA9ICgpOiBUIHwgbnVsbCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucHJvcHMuZm9yd2FyZGVkUmVmIHx8IHRoaXMubXlSZWYpLmN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICogSGVscGVyIG1ldGhvZCBmb3IgdXBkYXRlTGlzdGVuZXJzOiBzaW1wbHkgZ2V0cyB0aGUgY3VycmVudCByZWYgdG8gcGFzcyBvbiB0byBpdC5cbiAgICAgICAgKiBAcGFyYW0gYXR0YWNoIHRydWU6IGF0dGFjaDsgZmFsc2U6IGRldGFjaDsgbnVsbDogdXBkYXRlXG4gICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVMaXN0ZW5lcnNIZWxwZXIgPSAoYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pOiB2b2lkICA9PiB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcnNIZWxwZXJJbXBsKHRoaXMsIGF0dGFjaCwgbmV4dFByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgKlxuICAgICAgICAqIEBwYXJhbSBhdHRhY2ggdHJ1ZTogYXR0YWNoOyBmYWxzZTogZGV0YWNoOyBudWxsOiB1cGRhdGVcbiAgICAgICAgKi9cbiAgICBcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUxpc3RlbmVycyA9IChub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdXBkYXRlTGlzdGVuZXJzSW1wbCh0aGlzLCBub2RlLCBhdHRhY2gsIG5leHRQcm9wcyk7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudERpZE1vdW50SW1wbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgKiBQdXJlQ29tcG9uZW50J3Mgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkgbWV0aG9kIGlzIGlnbm9yZWQgYW5kIHJlcGxhY2VkIHdpdGggYSBzaGFsbG93RXF1YWwoKVxuICAgICAgICAqIGNvbXBhcmlzb24gb2YgcHJvcHMgYW5kIHN0YXRlLiBXZSdsbCBpbXBsZW1lbnQgb3VyIENvbXBvbmVudCdzIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHRvXG4gICAgICAgICogbWF0Y2ggdGhlIHdheSBQdXJlQ29tcG9uZW50IGlzIGhhbmRsZWQuXG4gICAgICAgICovXG4gICAgICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChuZXh0UHJvcHM6IFQgJiBFeHRyYVByb3BzPFQ+LCBuZXh0U3RhdGU6IGFueSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNob3VsZENvbXBvbmVudFVwZGF0ZUltcGwodGhpcywgbmV4dFByb3BzLCBuZXh0U3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVMaXN0ZW5lcnNIZWxwZXIoZmFsc2UpO1xuICAgICAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnRJbXBsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZW5kZXIgPSAoKTogUmVhY3QuUmVhY3ROb2RlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJJbXBsKG5hbWUsIHRoaXMsIG9ic2VydmFibGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgX19JbXBsZW1lbnRzQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXJfXzogdHJ1ZTtcbiAgICAgICAgX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGQ/ID0gKHBhcmVudEluc3RhbmNlOiBULCBjaGlsZDogT2JzZXJ2YWJsZSB8IGltcG9ydChcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1iYXNlL3RleHQtYmFzZVwiKS5UZXh0QmFzZSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIF9fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkSW1wbCh0aGlzLCBwYXJlbnRJbnN0YW5jZSwgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIF9fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkPyA9IChwYXJlbnRJbnN0YW5jZTogVCwgY2hpbGQ6IE9ic2VydmFibGUgfCBpbXBvcnQoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtYmFzZS90ZXh0LWJhc2VcIikuVGV4dEJhc2UpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBfX2N1c3RvbUhvc3RDb25maWdSZW1vdmVDaGlsZEltcGwodGhpcywgcGFyZW50SW5zdGFuY2UsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBfX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmU/PSAocGFyZW50SW5zdGFuY2U6IFQsIGNoaWxkOiBPYnNlcnZhYmxlIHwgaW1wb3J0KFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWJhc2UvdGV4dC1iYXNlXCIpLlRleHRCYXNlLCBiZWZvcmVDaGlsZDogT2JzZXJ2YWJsZSB8IGltcG9ydChcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1iYXNlL3RleHQtYmFzZVwiKS5UZXh0QmFzZSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIF9fY3VzdG9tSG9zdENvbmZpZ0luc2VydEJlZm9yZUltcGwodGhpcywgcGFyZW50SW5zdGFuY2UsIGNoaWxkLCBiZWZvcmVDaGlsZCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLyogdW5pcXVlLyBjb21wbGV0ZWx5IGN1c3RvbSBzdHVmZi4uLiAqL1xuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG9uRGF0ZUNoYW5nZSA9IChhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIG9uRGF0YUNoYW5nZUltcGwodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgb25TZWxlY3RlZEluZGV4Q2hhbmdlID0gKGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgb25TZWxlY3RJbmRleENoYW5nZUltcGwodGhpcywgYXJncylcbiAgICAgICAgfTtcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBvblRleHRDaGFuZ2UgPSAoYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICBvblRleHRDaGFuZ2VJbXBsKHRoaXMsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG9uVmFsdWVDaGFuZ2UgPSAoYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICBvblZhbHVlQ2hhbmdlSW1wbCh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBvblRvZ2dsZSA9IChhcmdzOiBFdmVudERhdGEpID0+IHsgXG4gICAgICAgICAgICBvblRvZ2dsZUltcGwodGhpcywgYXJncyk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUmVhY3QuZm9yd2FyZFJlZjxULCBQYXJ0aWFsPFQ+ICYgRXh0cmFQcm9wczxUPj4oKHByb3BzLCByZWYpID0+IHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobmFtZSwgey4uLnByb3BzLCBmb3J3YXJkZWRSZWY6IHJlZn0sIHByb3BzLmNoaWxkcmVuKTtcbiAgICB9KTtcblxuICAgICAvLyBoYXZlIHRvIGRlY2xhcmUgY2xhc3MgbmFtZSB0byBtYWtlIGRlY29yYXRvcnMgd29yayAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy83MzQyXG59XG5cblxuLy8gUmVhY3QuQ29tcG9uZW50PFQgJiBFeHRyYVByb3BzPFQ+XG5cbi8qIFxuLy8gQXJlIG5vdCBhY3R1YWxseSBuZWVkZWQgPyFcbmZ1bmN0aW9uIEpTWDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ob2JzZXJ2YWJsZTogbmV3KC4uLmFyZ3M6IGFueVtdKSA9PiBSZWFjdC5Db21wb25lbnQ8VCAmIEV4dHJhUHJvcHM8VD4+KSB7XG4gICAgcmV0dXJuIFJlYWN0LmZvcndhcmRSZWY8VCwgUHJvcHNXaXRob3V0Rm9yd2FyZGVkUmVmPFQgJiBFeHRyYVByb3BzPFQ+Pj4oXG4gICAgICAgIChwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHNXaXRob3V0Rm9yd2FyZGVkUmVmPFQgJiBFeHRyYVByb3BzPFQ+Pj4sIHJlZjogUmVhY3QuUmVmT2JqZWN0PFQ+KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIG9ic2VydmFibGVcbiAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICAgICAgICAgICAgICBmb3J3YXJkZWRSZWY6IHJlZixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgKVxufVxuKi9cblxuXG5cbi8vIGV4cG9ydCBjb25zdCBNeU9ic2VydmFibGU6IFJlYWN0LkNvbXBvbmVudFR5cGU8UHJvcHNXaXRob3V0Rm9yd2FyZGVkUmVmPE9ic2VydmFibGU+ICYgRXh0cmFQcm9wczxPYnNlcnZhYmxlPj4gJiBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8T2JzZXJ2YWJsZT4gPSBKU1gobmV3IE9ic2VydmFibGUoKSk7XG4vLyBleHBvcnQgY29uc3QgTXlCdXR0b24gPSBKU1gobmV3IEJ1dHRvbigpKTtcbi8vIGV4cG9ydCBjb25zdCBNeUNvbnRlbnRWaWV3OiBSZWFjdC5Db21wb25lbnRUeXBlPFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxDb250ZW50VmlldyAmIEV4dHJhUHJvcHM8Q29udGVudFZpZXc+Pj4gJiBSZWFjdC5DbGFzc0F0dHJpYnV0ZXM8Q29udGVudFZpZXc+ID0gSlNYKG5ldyBDb250ZW50VmlldygpKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxuICogVGhlbWUgdmFyaWFibGVzIG92ZXJyaWRlc1xcbioqL1xcbi8qKlxcclxcbiAqIENvbG9yIGNsYXNzZXNcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5jLWdyZXl7Y29sb3I6I2UwZTBlMH0uYy1iZy1ncmV5e2JhY2tncm91bmQtY29sb3I6I2UwZTBlMH1cXHJcXG4qKi9cXG4uYy13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1ibGFjayB7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbi5jLWJnLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1hcXVhIHtcXG4gIGNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmctYXF1YSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmx1ZSB7XFxuICBjb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWJnLWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWNoYXJjb2FsIHtcXG4gIGNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYmctY2hhcmNvYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJyb3duIHtcXG4gIGNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtYmctYnJvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWZvcmVzdCB7XFxuICBjb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWJnLWZvcmVzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtZ3JleSB7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWJnLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWdyZXktbGlnaHQge1xcbiAgY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1iZy1ncmV5LWxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1ncmV5LWRhcmsge1xcbiAgY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1iZy1ncmV5LWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLXB1cnBsZSB7XFxuICBjb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWJnLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtbGVtb24ge1xcbiAgY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1iZy1sZW1vbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtbGltZSB7XFxuICBjb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLWJnLWxpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLW9yYW5nZSB7XFxuICBjb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLWJnLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtcnVieSB7XFxuICBjb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLWJnLXJ1Ynkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLXNreSB7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcblxcbi5jLWJnLXNreSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLyogV2lkdGgvSGVpZ2h0ICovXFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwOyB9XFxuXFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uaC0xMDAge1xcbiAgaGVpZ2h0OiAxMDA7IH1cXG5cXG4vKipcXHJcXG4gKiBNYXJnaW4gYW5kIFBhZGRpbmdcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5tLTB7bWFyZ2luOjB9Lm0tdC0we21hcmdpbi10b3A6MH0ubS1yLTB7bWFyZ2luLXJpZ2h0OjB9Lm0tYi0we21hcmdpbi1ib3R0b206MH0ubS1sLTB7bWFyZ2luLWxlZnQ6MH0ubS14LTB7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MH0ubS15LTB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXHJcXG4gKiBTYW1lIGZvciBQYWRkaW5nICh1c2luZyB0aGUgJ3AnIGFiYnJldmlhdGlvbilcXHJcXG4gKiBGcm9tIDAsIDIsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMFxcclxcbioqL1xcbi5tLTAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLm0tdC0wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ubS1yLTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLm0tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS1sLTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS14LTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS15LTAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS0yIHtcXG4gIG1hcmdpbjogMjsgfVxcblxcbi5tLXQtMiB7XFxuICBtYXJnaW4tdG9wOiAyOyB9XFxuXFxuLm0tci0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjsgfVxcblxcbi5tLWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tbC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teC0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teS0yIHtcXG4gIG1hcmdpbi10b3A6IDI7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tNCB7XFxuICBtYXJnaW46IDQ7IH1cXG5cXG4ubS10LTQge1xcbiAgbWFyZ2luLXRvcDogNDsgfVxcblxcbi5tLXItNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7IH1cXG5cXG4ubS1iLTQge1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLWwtNCB7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXgtNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXktNCB7XFxuICBtYXJnaW4tdG9wOiA0O1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLTUge1xcbiAgbWFyZ2luOiA1OyB9XFxuXFxuLm0tdC01IHtcXG4gIG1hcmdpbi10b3A6IDU7IH1cXG5cXG4ubS1yLTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1OyB9XFxuXFxuLm0tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS1sLTUge1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS14LTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1O1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS15LTUge1xcbiAgbWFyZ2luLXRvcDogNTtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS04IHtcXG4gIG1hcmdpbjogODsgfVxcblxcbi5tLXQtOCB7XFxuICBtYXJnaW4tdG9wOiA4OyB9XFxuXFxuLm0tci04IHtcXG4gIG1hcmdpbi1yaWdodDogODsgfVxcblxcbi5tLWItOCB7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tbC04IHtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teC04IHtcXG4gIG1hcmdpbi1yaWdodDogODtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teS04IHtcXG4gIG1hcmdpbi10b3A6IDg7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tMTAge1xcbiAgbWFyZ2luOiAxMDsgfVxcblxcbi5tLXQtMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4ubS1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7IH1cXG5cXG4ubS1iLTEwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tbC0xMCB7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS14LTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS15LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS0xMiB7XFxuICBtYXJnaW46IDEyOyB9XFxuXFxuLm0tdC0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjsgfVxcblxcbi5tLXItMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjsgfVxcblxcbi5tLWItMTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS1sLTEyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXgtMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXktMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLTE1IHtcXG4gIG1hcmdpbjogMTU7IH1cXG5cXG4ubS10LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1OyB9XFxuXFxuLm0tci0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1OyB9XFxuXFxuLm0tYi0xNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLWwtMTUge1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teC0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teS0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tMTYge1xcbiAgbWFyZ2luOiAxNjsgfVxcblxcbi5tLXQtMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7IH1cXG5cXG4ubS1yLTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7IH1cXG5cXG4ubS1iLTE2IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tbC0xNiB7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS14LTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS15LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS0yMCB7XFxuICBtYXJnaW46IDIwOyB9XFxuXFxuLm0tdC0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDsgfVxcblxcbi5tLXItMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDsgfVxcblxcbi5tLWItMjAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS1sLTIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXgtMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXktMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLTI0IHtcXG4gIG1hcmdpbjogMjQ7IH1cXG5cXG4ubS10LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0OyB9XFxuXFxuLm0tci0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0OyB9XFxuXFxuLm0tYi0yNCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLWwtMjQge1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teC0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0O1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teS0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tMjUge1xcbiAgbWFyZ2luOiAyNTsgfVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7IH1cXG5cXG4ubS1yLTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7IH1cXG5cXG4ubS1iLTI1IHtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tbC0yNSB7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS14LTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS15LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1O1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS0yOCB7XFxuICBtYXJnaW46IDI4OyB9XFxuXFxuLm0tdC0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODsgfVxcblxcbi5tLXItMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODsgfVxcblxcbi5tLWItMjgge1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS1sLTI4IHtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXgtMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXktMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLTMwIHtcXG4gIG1hcmdpbjogMzA7IH1cXG5cXG4ubS10LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwOyB9XFxuXFxuLm0tci0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwOyB9XFxuXFxuLm0tYi0zMCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5tLWwtMzAge1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teC0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teS0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLnAtMCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnAtdC0wIHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLnAtci0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG4ucC1iLTAge1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC1sLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteC0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC15LTAge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLTIge1xcbiAgcGFkZGluZzogMjsgfVxcblxcbi5wLXQtMiB7XFxuICBwYWRkaW5nLXRvcDogMjsgfVxcblxcbi5wLXItMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyOyB9XFxuXFxuLnAtYi0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXgtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyO1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteS0yIHtcXG4gIHBhZGRpbmctdG9wOiAyO1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDQ7IH1cXG5cXG4ucC10LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7IH1cXG5cXG4ucC1yLTQge1xcbiAgcGFkZGluZy1yaWdodDogNDsgfVxcblxcbi5wLWItNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLWwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC14LTQge1xcbiAgcGFkZGluZy1yaWdodDogNDtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXktNCB7XFxuICBwYWRkaW5nLXRvcDogNDtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtNSB7XFxuICBwYWRkaW5nOiA1OyB9XFxuXFxuLnAtdC01IHtcXG4gIHBhZGRpbmctdG9wOiA1OyB9XFxuXFxuLnAtci01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7IH1cXG5cXG4ucC1iLTUge1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC1sLTUge1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteC01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDU7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLTgge1xcbiAgcGFkZGluZzogODsgfVxcblxcbi5wLXQtOCB7XFxuICBwYWRkaW5nLXRvcDogODsgfVxcblxcbi5wLXItOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4OyB9XFxuXFxuLnAtYi04IHtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtbC04IHtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXgtOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4O1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteS04IHtcXG4gIHBhZGRpbmctdG9wOiA4O1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMDsgfVxcblxcbi5wLXQtMTAge1xcbiAgcGFkZGluZy10b3A6IDEwOyB9XFxuXFxuLnAtci0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDsgfVxcblxcbi5wLWItMTAge1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtbC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLTEyIHtcXG4gIHBhZGRpbmc6IDEyOyB9XFxuXFxuLnAtdC0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7IH1cXG5cXG4ucC1yLTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyOyB9XFxuXFxuLnAtYi0xMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC1sLTEyIHtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC14LTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXktMTIge1xcbiAgcGFkZGluZy10b3A6IDEyO1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtMTUge1xcbiAgcGFkZGluZzogMTU7IH1cXG5cXG4ucC10LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTsgfVxcblxcbi5wLXItMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7IH1cXG5cXG4ucC1iLTE1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLWwtMTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXgtMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteS0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC0xNiB7XFxuICBwYWRkaW5nOiAxNjsgfVxcblxcbi5wLXQtMTYge1xcbiAgcGFkZGluZy10b3A6IDE2OyB9XFxuXFxuLnAtci0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjsgfVxcblxcbi5wLWItMTYge1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtbC0xNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteC0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC15LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLTIwIHtcXG4gIHBhZGRpbmc6IDIwOyB9XFxuXFxuLnAtdC0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7IH1cXG5cXG4ucC1yLTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwOyB9XFxuXFxuLnAtYi0yMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC1sLTIwIHtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC14LTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXktMjAge1xcbiAgcGFkZGluZy10b3A6IDIwO1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtMjQge1xcbiAgcGFkZGluZzogMjQ7IH1cXG5cXG4ucC10LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDsgfVxcblxcbi5wLXItMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7IH1cXG5cXG4ucC1iLTI0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLWwtMjQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXgtMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteS0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC0yNSB7XFxuICBwYWRkaW5nOiAyNTsgfVxcblxcbi5wLXQtMjUge1xcbiAgcGFkZGluZy10b3A6IDI1OyB9XFxuXFxuLnAtci0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTsgfVxcblxcbi5wLWItMjUge1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtbC0yNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteC0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC15LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLTI4IHtcXG4gIHBhZGRpbmc6IDI4OyB9XFxuXFxuLnAtdC0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7IH1cXG5cXG4ucC1yLTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4OyB9XFxuXFxuLnAtYi0yOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC1sLTI4IHtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC14LTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4O1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXktMjgge1xcbiAgcGFkZGluZy10b3A6IDI4O1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtMzAge1xcbiAgcGFkZGluZzogMzA7IH1cXG5cXG4ucC10LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDsgfVxcblxcbi5wLXItMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7IH1cXG5cXG4ucC1iLTMwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi5wLWwtMzAge1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXgtMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteS0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4vKiBEaXZpZGVycyAqL1xcbi5oci1saWdodCB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uaHItZGFyayB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4vKiBBbGlnbm1lbnQgKi9cXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1sb3dlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTsgfVxcblxcbi50ZXh0LXVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLnRleHQtY2FwaXRhbGl6ZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcblxcbi5mb250LXdlaWdodC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5mb250LXdlaWdodC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmZvbnQtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi8qKlxcclxcbiAqIEZvbnQgc2l6ZVxcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLnQtMTB7Zm9udC1zaXplOjEwfVxcclxcbiAqIEZyb20gMTAsIDEyLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMFxcclxcbioqL1xcbi50LTEwIHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4udC0xMiB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLnQtMTQge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi50LTE1IHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4udC0xNiB7XFxuICBmb250LXNpemU6IDE2OyB9XFxuXFxuLnQtMTcge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi50LTE4IHtcXG4gIGZvbnQtc2l6ZTogMTg7IH1cXG5cXG4udC0xOSB7XFxuICBmb250LXNpemU6IDE5OyB9XFxuXFxuLnQtMjAge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi50LTI1IHtcXG4gIGZvbnQtc2l6ZTogMjU7IH1cXG5cXG4udC0zMCB7XFxuICBmb250LXNpemU6IDMwOyB9XFxuXFxuLmltZy1yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDU7IH1cXG5cXG4uaW1nLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiAyMDsgfVxcblxcbi5pbWctdGh1bWJuYWlsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlOyB9XFxuXFxuLnB1bGwtbGVmdCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0OyB9XFxuXFxuLnB1bGwtcmlnaHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4ubS14LWF1dG8ge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm0teS1hdXRvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnRleHQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjRUQ0NzNGOyB9XFxuXFxuLnRleHQtbXV0ZWQge1xcbiAgY29sb3I6ICM5ZTllOWU7IH1cXG5cXG4uYmctcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYmctZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRDQ3M0Y7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24tYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNztcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICB3aWR0aDogMzA7XFxuICBoZWlnaHQ6IDMwOyB9XFxuXFxuLmJ0biB7XFxuICBjb2xvcjogIzNBNTNGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWluLWhlaWdodDogMzY7XFxuICBtaW4td2lkdGg6IDY0O1xcbiAgcGFkZGluZzogMTAgMTAgMTAgMTA7XFxuICBmb250LXNpemU6IDE4O1xcbiAgbWFyZ2luOiA4IDE2IDggMTY7IH1cXG4gIC5idG4uYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MGZmOyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBib3JkZXItY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcyNmZmO1xcbiAgICBib3JkZXItY29sb3I6ICMwNzI2ZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYXF1YSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYnJvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWZvcmVzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZ3JleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGVtb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwO1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1saW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1wdXJwbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXJ1Ynkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXNreSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYnRuLW91dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcbiAgLmJ0bi1vdXRsaW5lLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQ4MGZmOyB9XFxuXFxuLmJ0bltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGNvbG9yOiAjYTRhNGE0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWUsIGZvbnRhd2Vzb21lLXdlYmZvbnQ7IH1cXG5cXG4uZm9ybSAuaW5wdXQge1xcbiAgcGFkZGluZzogMTYgOCAxNiA4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1ib3JkZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI4O1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0W2lzRW5hYmxlZD0nZmFsc2UnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cXG5cXG4uZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luOiA4OyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgY29sb3I6ICNiYWJhYmE7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItbGlnaHQuYWN0aXZlLFxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1kYXJrLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZC5pbnB1dC1zaWRlcyAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG5cXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uYm9keSxcXG4uYm9keTIsXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDMyOyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjI7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5oNCB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLmg1IHtcXG4gIGZvbnQtc2l6ZTogMTE7IH1cXG5cXG4uaDYge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi5mb290bm90ZSB7XFxuICBmb250LXNpemU6IDEzOyB9XFxuXFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSBMYWJlbCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgc3RyZXRjaDogZmlsbDtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6ICMwMjI3MzQ7XFxuICAgIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4ucGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLnByb2dyZXNzIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIGZvbnQtc2l6ZTogMTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCwgLnNpZGVkcmF3ZXItY2VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGhlaWdodDogMTQ4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxNiAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAyMCAxNSAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDY0O1xcbiAgd2lkdGg6IDY0O1xcbiAgYm9yZGVyLXJhZGl1czogMzI7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMzY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNzQ7XFxuICB3aWR0aDogNzQ7XFxuICBib3JkZXItcmFkaXVzOiAzNztcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGNvbG9yOiAjNzM3MzczOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgaGVpZ2h0OiA0ODtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9yaWVudGF0aW9uOiBob3Jpem9udGFsOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0gLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICB3aWR0aDogMjQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgaGVpZ2h0OiA0ODtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjM0E1M0ZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4OyB9XFxuICAgIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICAgIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMCAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDAuMTtcXG4gIHdpZHRoOiA4MCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5zbGlkZXJbaXNFbmFibGVkPWZhbHNlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXVtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4udGFiLXZpZXcge1xcbiAgLypjb2xvcjogJHNlY29uZGFyeTsqL1xcbiAgc2VsZWN0ZWQtY29sb3I6ICMzMGJjZmY7XFxuICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIC50YWItdmlldyAudGFiLXZpZXctaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbiNsb2dpbi1iYWNrZ3JvdW5kIHtcXG4gIG1hcmdpbi10b3A6IC0yMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcCB7XFxuICBwYWRkaW5nOiAwIDQwOyB9XFxuXFxuLmxvZ28td3JhcCB7XFxuICBtYXJnaW46IDYwIDAgMTAgMDtcXG4gIHBhZGRpbmc6IDIwIDA7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvLXN1YiB7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMzsgfVxcbiAgLmxvZ2luLXdyYXBwZXIgVGV4dEZpZWxkIHtcXG4gICAgcGFkZGluZzogMTAgMTA7XFxuICAgIG1hcmdpbjogMTAgMCAwIDA7IH1cXG5cXG4uZ28tYmFjayB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi8qKlxcclxcbiAqIEltcG9ydCBhbGwgcGxhdGZvcm0gc3BlY2lmaWMgZmlsZXMgaGVyZVxcclxcbiAqL1xcbi5idG4ge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdTRiBVSSBUZXh0IE1lZGl1bSc7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGJvcmRlci13aWR0aDogMTsgfVxcblxcbi5idG4tcm91bmRlZC1zbSB7XFxuICBib3JkZXItcmFkaXVzOiA0OyB9XFxuXFxuLmJ0bi1yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE5OyB9XFxuXFxuLmZvcm0ge1xcbiAgZm9udC1mYW1pbHk6ICdTRiBVSSBUZXh0IFJlZ3VsYXInOyB9XFxuICAuZm9ybSAuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE1OyB9XFxuICAgIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyNzsgfVxcblxcbi8qIFRoaXMgaXMgaGVyZSB0ZW1wb3JhcmlseSBiZWNhdXNlIF9pbmRleC5pb3Muc2NzcyBjYW5ub3QgYmUgZW1wdHkgKi9cXG4uaDEge1xcbiAgZm9udC1zaXplOiAzMjsgfVxcblxcbi5zbGlkZXIge1xcbiAgbWFyZ2luOiAxMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uLCAuc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uc3dpdGNoIHtcXG4gIG1hcmdpbjogOCAxNTsgfVxcblxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xcbiAgcGFkZGluZzogMTYgMTUgMTYgMTU7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLnNlZ21lbnRlZC1iYXIge1xcbiAgbWFyZ2luOiAwIDE1O1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250QXdlc29tZVxcXCI7IH1cXG5cIiwgXCJcIl0pO1xuXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLnNjc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5zY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCAncmVhY3QtaG90LWxvYWRlcic7IC8vIE11c3QgYmUgaW1wb3J0ZWQgYmVmb3JlIFJlYWN0IGFuZCBSZWFjdE5hdGl2ZVNjcmlwdC5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKiBDb250cm9scyByZWFjdC1uYXRpdmVzY3JpcHQgbG9nIHZlcmJvc2l0eS4gdHJ1ZTogYWxsIGxvZ3M7IGZhbHNlOiBvbmx5IGVycm9yIGxvZ3MuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCAnX19ERVZfXycsIHsgdmFsdWU6IGZhbHNlIH0pO1xuaW1wb3J0ICogYXMgUmVhY3ROYXRpdmVTY3JpcHQgZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdFwiO1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lclwiO1xuXG5leHBvcnQgY29uc3Qgcm9vdFJlZjogUmVhY3QuUmVmT2JqZWN0PGFueT4gPSBSZWFjdC5jcmVhdGVSZWY8YW55PigpO1xuXG5SZWFjdE5hdGl2ZVNjcmlwdC5zdGFydChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBBcHBDb250YWluZXIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZjogcm9vdFJlZlxuICAgICAgICB9LFxuICAgICAgICBudWxsXG4gICAgKSxcbiAgICAvKiBUaGlzIHJlZiBNVVNUIG1hdGNoIHRoZSByZWYgdGhhdCB5b3UgcGFzcyBpbnRvIHRoZSBiYXNlIGNvbXBvbmVudCBvZiB5b3VyIGFwcCBjb250YWluZXIuICovXG4gICAgcm9vdFJlZlxuKTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXG4qKi9cXG4uZmEge1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uaW5mbyB7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXCIsIFwiXCJdKTtcblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlci9yb290JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgJFBhZ2UsICRMYWJlbCwgJEFjdGlvbkJhciwgJEdyaWRMYXlvdXQsICRGb3JtYXR0ZWRTdHJpbmcsICRTcGFuLCAkU3dpdGNoLCAkRnJhbWUsICRCdXR0b24sICRTdGFja0xheW91dCwgJERhdGVQaWNrZXIsICRUZXh0RmllbGQsICRTZWdtZW50ZWRCYXJJdGVtLCAkU2xpZGVyLCAkQWN0aW9uSXRlbSwgJFRhYlZpZXcsICRUYWJWaWV3SXRlbSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCB7IEl0ZW1TcGVjIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0L2dyaWQtbGF5b3V0JztcbmltcG9ydCB7IEZyYW1lLCBQYWdlLCBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWUnO1xuaW1wb3J0IHsgUmVhY3RpZmllZCB9IGZyb20gJ34vUmVhY3RpZmllZC9SZWFjdGlmaWVkJztcblxuaW1wb3J0IHsgX0xhYmVsIGFzIExhYmVsQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NvbXBvbmVudHMvTGFiZWxcIjtcbmltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIERhdGVQaWNrZXIsXG4gICAgRWRpdGFibGVUZXh0QmFzZSxcbiAgICBUZXh0RmllbGQsXG4gICAgSHRtbFZpZXcsXG4gICAgTGFiZWwsXG4gICAgTGlzdFBpY2tlcixcbiAgICBQbGFjZWhvbGRlcixcbiAgICBTY3JvbGxWaWV3LFxuICAgIFNlYXJjaEJhcixcbiAgICBTZWdtZW50ZWRCYXIsXG4gICAgU2xpZGVyLFxuICAgIFN3aXRjaCxcbiAgICBBY3Rpb25JdGVtLFxuICAgIFRhYlZpZXcsXG4gICAgVGFiVmlld0l0ZW0sXG4gICAgU3RhY2tMYXlvdXRcbn0gZnJvbSAncmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeSc7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXcvdGFiLXZpZXcnO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2VnbWVudGVkLWJhci9zZWdtZW50ZWQtYmFyJztcbi8vIGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uL2J1dHRvbic7XG5cbmNsYXNzIE15RmFuY3lCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuXG59XG5cblxuLy8gY29uc3QgTXlCdXR0b24gPSBSZWFjdGlmaWVkKG5ldyBCdXR0b24oKSwgXCJidXR0b25cIik7XG5cbi8vIGNvbnN0IE15Q29tcG9uZW50ID0gUmVhY3RpZmllZChuZXcgVGFiVmlldygpKTsgXG5jb25zdCBNeUxhYmVsID0gUmVhY3RpZmllZChuZXcgTGFiZWwoKSk7XG5jb25zdCBNeVRhYlZpZXcgPSBSZWFjdGlmaWVkPFRhYlZpZXc+KG5ldyBUYWJWaWV3KCkpOyBcbmNvbnN0IE15VGFiVmlld0l0ZW0gPSBSZWFjdGlmaWVkKG5ldyBUYWJWaWV3SXRlbSgpKTtcbmNvbnN0IE15QnV0dG9uID0gUmVhY3RpZmllZChuZXcgQnV0dG9uKCkpO1xuY29uc3QgTXlTZWdtZW50ZWRCYXIgPSBSZWFjdGlmaWVkKG5ldyBTZWdtZW50ZWRCYXIoKSk7XG5jb25zdCBNeVN0YWNrTGF5b3V0ID0gUmVhY3RpZmllZChuZXcgU3RhY2tMYXlvdXQoKSk7XG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGZvcndhcmRlZFJlZjogUmVhY3QuUmVmT2JqZWN0PEZyYW1lPixcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcblxufVxuXG5jbGFzcyBBcHBDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwYWdlUmVmOiBSZWFjdC5SZWZPYmplY3Q8UGFnZT4gPSBSZWFjdC5jcmVhdGVSZWY8UGFnZT4oKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG15RmFuY3lCdXR0b25SZWY6IFJlYWN0LlJlZk9iamVjdDxNeUZhbmN5QnV0dG9uPiA9IFJlYWN0LmNyZWF0ZVJlZjxNeUZhbmN5QnV0dG9uPigpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbXlEYXRlUGlja2VyUmVmID0gUmVhY3QuY3JlYXRlUmVmPERhdGVQaWNrZXI+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBteUVkaXRhYmxlVGV4dEJhc2VSZWYgPSBSZWFjdC5jcmVhdGVSZWY8RWRpdGFibGVUZXh0QmFzZT4oKTsgLy8gKHdvbid0IHNob3cpXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuXG4gICAgICAgIGNvbnN0IGZyYW1lOiBGcmFtZSA9IHRoaXMucHJvcHMuZm9yd2FyZGVkUmVmLmN1cnJlbnQhO1xuICAgICAgICBmcmFtZS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBjcmVhdGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlOiBQYWdlID0gdGhpcy5wYWdlUmVmLmN1cnJlbnQhO1xuICAgICAgICAgICAgICAgIHBhZ2UuYWRkQ3NzRmlsZShcIi4vY29tcG9uZW50cy9BcHBDb250YWluZXIuc2Nzc1wiKTsgLy8gUGF0aCBpcyByZWxhdGl2ZSB0byB0aGUgJ2FwcCcgZm9sZGVyOyBub3QgcmVsYXRpdmUgdG8gdGhpcyBmaWxlIVxuICAgICAgICAgICAgICAgIHJldHVybiBwYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgY29uc3QgbXlGYW5jeUJ1dHRvbiA9IHRoaXMubXlGYW5jeUJ1dHRvblJlZi5jdXJyZW50O1xuICAgICAgICAgICAgbXlGYW5jeUJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoXCJzaWx2ZXJcIik7XG4gICAgICAgICAgICBteUZhbmN5QnV0dG9uLm9uKFwidGFwXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFwXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgY29uc3QgbXlEYXRlUGlja2VyID0gdGhpcy5teURhdGVQaWNrZXJSZWYuY3VycmVudDtcbiAgICAgICAgICAgIG15RGF0ZVBpY2tlci5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoXCJncmVlblwiKTtcbiAgICAgICAgICAgIG15RGF0ZVBpY2tlci5vbihcInRhcFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhYWFwIVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sMjAwMClcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgeyBmb3J3YXJkZWRSZWYgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDwkRnJhbWUgcmVmPXtmb3J3YXJkZWRSZWZ9PlxuICAgICAgICAgICAgICAgIDwkUGFnZSByZWY9e3RoaXMucGFnZVJlZn0gY2xhc3NOYW1lPVwicGFnZVwiIGFjdGlvbkJhckhpZGRlbj17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICA8JEFjdGlvbkJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwkQWN0aW9uSXRlbSB0ZXh0PXtcIkNoZWNrIHRoaXMgb3V0XCJ9IG9uVGFwPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvJEFjdGlvbkJhcj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8TXlTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNeUJ1dHRvbiB0ZXh0PXtcInlvb29cIn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE15TGFiZWwgdGV4dD17XCJ5ZWFhYWFhYWFhIVwifSBiYWNrZ3JvdW5kQ29sb3I9e25ldyBDb2xvcihcIm9yYW5nZVwiKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L015U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC8kUGFnZT5cbiAgICAgICAgICAgIDwvJEZyYW1lPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuLypcbjxNeVRhYlZpZXdJdGVtIHRpdGxlPXtcImxlZnRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNeUxhYmVsIHRleHQ9e1wic29tZSBjb250ZW50XCJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L015VGFiVmlld0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15VGFiVmlld0l0ZW0gdGl0bGU9e1wibWlkZGxlXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlMYWJlbCB0ZXh0PXtcInNvbWUgY29udGVudFwifS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NeVRhYlZpZXdJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNeVRhYlZpZXdJdGVtIHRpdGxlPXtcInJpZ2h0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlMYWJlbCB0ZXh0PXtcInNvbWUgY29udGVudFwifS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NeVRhYlZpZXdJdGVtPlxuKi9cblxuXG4vLyBleHBvcnQgZGVmYXVsdCBBcHBDb250YWluZXI7XG5leHBvcnQgZGVmYXVsdCBob3QoQXBwQ29udGFpbmVyKTsgLy8gUmVwbGFjZSB0aGlzIGxpbmUgd2l0aCB0aGUgYWJvdmUgbGluZSBpZiB5b3Ugd2FudCB0byByZW1vdmUgaG90IGxvYWRpbmcuIl0sInNvdXJjZVJvb3QiOiIifQ==