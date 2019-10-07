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
    Object(react_nativescript_dist_client_EventHandling__WEBPACK_IMPORTED_MODULE_1__["updateListener"])(node, "selectedIndexChanged", instance.props.onSelectedIndexChanged, nextProps.onSelectedIndexChanged);
  } else {
    var method = (attach ? node.on : node.off).bind(node);
    if (instance.props.onSelectedIndexChanged) method("selectedIndexChanged", instance.props.onSelectedIndexChanged);
  }
};

var tabViewImpl = function (instance, node, attach, nextProps) {
  if (!(Reflect.get(instance, "getCurrentRef")() instanceof react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_0__["TabView"])) return;
  console.log("tabViewImpl");

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
// const MyComponent = Reactified(new TabView()); 


var MyLabel = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_3__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__["Label"]());
var MyTabView = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_3__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__["TabView"]());
var MyTabViewItem = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_3__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__["TabViewItem"]());
var MyButton = Object(_Reactified_Reactified__WEBPACK_IMPORTED_MODULE_3__["Reactified"])(new react_nativescript_dist_client_ElementRegistry__WEBPACK_IMPORTED_MODULE_4__["Button"]());

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
    })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$StackLayout"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_nativescript__WEBPACK_IMPORTED_MODULE_2__["$Switch"], {
      onToggle: function (checked) {
        console.log("checked: " + checked);
      },
      onTap: function () {
        console.log("tap");
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnREaWRNb3VudEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnRXaWxsVW5tb3VudEltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9yZW5kZXJJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3Qvc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1R5cGVzLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uRGF0YUNoYW5nZUltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25TZWxlY3RlZEluZGV4Q2hhbmdlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblRleHRDaGFuZ2VJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVG9nZ2xlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblZhbHVlQ2hhbmdlSW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsLnRzIiwid2VicGFjazovLy8uL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50cyIsIndlYnBhY2s6Ly8vLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHMiLCJ3ZWJwYWNrOi8vLy4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIOzs7Ozs7O0FDNklBO0FBQ0E7Ozs7Ozs7OztBQzFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVPLElBQU0saUNBQWlDLEdBQUcsVUFBdUIsUUFBdkIsRUFBNkMsTUFBN0MsRUFBd0QsS0FBeEQsRUFBc0Y7QUFDbkksU0FBTywrREFBYyxDQUFDLENBQUMsWUFBRCxDQUFELEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLEVBQW1DLEtBQW5DLENBQXJCO0FBQ0gsQ0FGTTs7QUFJUCxJQUFNLFlBQVksR0FBRyxVQUFxQixRQUFyQixFQUE0QyxNQUE1QyxFQUF1RCxLQUF2RCxFQUFxRjtBQUV0RyxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHVGQUF0RCxDQUFILEVBQW9FOztBQUVwRSxNQUFHLE1BQU0sWUFBWSx1RkFBckIsRUFBK0I7QUFDM0IsUUFBSSxLQUFLLFlBQVksc0ZBQXJCLEVBQXNDO0FBQ2xDLFlBQU0sQ0FBQyxhQUFQLEdBQXVCLEtBQXZCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDSixHQVRxRyxDQVV0Rzs7O0FBQ0EsU0FBTyxLQUFQO0FBQ0gsQ0FaRDs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFHTyxJQUFNLGtDQUFrQyxHQUFHLFVBQzlDLFFBRDhDLEVBRTlDLE1BRjhDLEVBRzlDLEtBSDhDLEVBSTlDLFdBSjhDLEVBSVY7QUFFcEMsU0FBTywrREFBYyxDQUFDLENBQUMsWUFBRCxDQUFELEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLEVBQW1DLEtBQW5DLEVBQTBDLFdBQTFDLENBQXJCO0FBQ0gsQ0FQTTs7QUFRUCxJQUFNLFlBQVksR0FBRyxVQUNqQixRQURpQixFQUVqQixNQUZpQixFQUdqQixLQUhpQixFQUlqQixXQUppQixFQUltQjtBQUdwQyxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHVGQUF0RCxDQUFILEVBQW9FOztBQUVwRSxNQUFHLE1BQU0sWUFBWSx1RkFBckIsRUFBK0I7QUFDM0IsUUFBSSxLQUFLLFlBQVksc0ZBQXJCLEVBQXNDO0FBQ2xDLFlBQU0sQ0FBQyxhQUFQLEdBQXVCLEtBQXZCO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7QUFDSixHQVZtQyxDQVlwQzs7O0FBQ0EsU0FBTyxLQUFQO0FBQ0gsQ0FsQkQ7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRU8sSUFBTSxpQ0FBaUMsR0FBRyxVQUF1QixRQUF2QixFQUE4QyxNQUE5QyxFQUF5RCxLQUF6RCxFQUF1RjtBQUNwSSxTQUFPLCtEQUFjLENBQUMsQ0FBQyxZQUFELENBQUQsRUFBaUIsUUFBakIsRUFBMkIsTUFBM0IsRUFBbUMsS0FBbkMsQ0FBckI7QUFDSCxDQUZNOztBQUlQLElBQU0sWUFBWSxHQUFHLFVBQXFCLFFBQXJCLEVBQTRDLE1BQTVDLEVBQXVELEtBQXZELEVBQXFGO0FBRXRHLE1BQUcsRUFBRSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsZUFBb0QsdUZBQXRELENBQUgsRUFBb0U7O0FBRXBFLE1BQUcsTUFBTSxZQUFZLHVGQUFyQixFQUErQjtBQUMzQixRQUFJLEtBQUssWUFBWSxzRkFBckIsRUFBc0M7QUFDbEMsWUFBTSxDQUFDLGFBQVAsR0FBdUIsSUFBdkI7QUFDQSxhQUFPLElBQVA7QUFDSCxLQUowQixDQU0zQjs7O0FBQ0EsV0FBTyxLQUFQO0FBQ0g7QUFDSixDQWJEOzs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdNLFNBQVUsTUFBVixDQUFpQixNQUFqQixFQUErQjtBQUNqQyxTQUFPLE1BQU0sQ0FBQyxXQUFQLENBQW1CLElBQTFCO0FBQ0g7QUFDSyxTQUFVLG9CQUFWLENBQStCLElBQS9CLEVBQTJDO0FBQzdDLFNBQU8sSUFBSSxDQUFDLE1BQUwsQ0FBWSxDQUFaLEVBQWUsV0FBZixLQUErQixJQUFJLENBQUMsS0FBTCxDQUFXLENBQVgsQ0FBdEM7QUFDSDtBQUVELElBQU0sa0JBQWtCLEdBQWEsRUFBckM7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLGtDQUFaOztBQUNBLEtBQUksSUFBSSxXQUFSLElBQXVCLHlGQUF2QixFQUFtQztBQUMvQixvQkFBa0IsQ0FBQyxJQUFuQixDQUF3QixXQUFXLEdBQUcsTUFBdEM7QUFDSDs7QUFHTSxJQUFNLGNBQWMsR0FBRyxVQUFDLFdBQUQsRUFBMEI7QUFBRTs7T0FBQSxVLEVBQUEscUIsRUFBQSxJLEVBQVk7QUFBWjs7O0FBQ3RELE1BQUksV0FBVyxHQUFTLFNBQXhCO0FBQ0EsTUFBSSxHQUFHLEdBQUcsU0FBVjtBQUVBLEtBQUcsR0FBRyxXQUFXLENBQUMsSUFBWixDQUFpQixVQUFDLE1BQUQsRUFBTztBQUFLLGlCQUFNLENBQUMsSUFBUDtBQUE2QixHQUExRCxDQUFOOztBQUNBLE1BQUcsR0FBSCxFQUFRO0FBQ0osUUFBTSxLQUFLLEdBQUcsR0FBRyxNQUFILENBQUcsTUFBSCxFQUFPLElBQVAsQ0FBZDs7QUFDQSxRQUFHLEtBQUgsRUFBVTtBQUNOLGlCQUFXLEdBQUcsS0FBZDtBQUNIOztBQUNELE9BQUcsR0FBRyxTQUFOO0FBQ0g7O0FBRUQsS0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFaLENBQWlCLFVBQUMsTUFBRCxFQUFPO0FBQUssaUJBQU0sQ0FBQyxJQUFQO0FBQWdDLEdBQTdELENBQU47O0FBQ0EsTUFBRyxHQUFILEVBQVE7QUFDSixRQUFNLEtBQUssR0FBRyxHQUFHLE1BQUgsQ0FBRyxNQUFILEVBQU8sSUFBUCxDQUFkOztBQUNBLFFBQUcsS0FBSCxFQUFVO0FBQ04saUJBQVcsR0FBRyxLQUFkO0FBQ0g7O0FBQ0QsT0FBRyxHQUFHLFNBQU47QUFDSDs7QUFFRCxLQUFHLEdBQUcsV0FBVyxDQUFDLElBQVosQ0FBaUIsVUFBQyxNQUFELEVBQU87QUFBSyxpQkFBTSxDQUFDLElBQVA7QUFBOEIsR0FBM0QsQ0FBTixDQXRCb0QsQ0FzQmdCOztBQUVwRSxNQUFHLEdBQUgsRUFBUTtBQUNKLFFBQU0sS0FBSyxHQUFHLEdBQUcsTUFBSCxDQUFHLE1BQUgsRUFBTyxJQUFQLENBQWQ7O0FBQ0EsUUFBRyxLQUFILEVBQVU7QUFDTixpQkFBVyxHQUFHLEtBQWQ7QUFDSDs7QUFDRCxPQUFHLEdBQUcsU0FBTjtBQUNIOztBQUVELEtBQUcsR0FBRyxXQUFXLENBQUMsSUFBWixDQUFpQixVQUFDLE1BQUQsRUFBTztBQUFLLGlCQUFNLENBQUMsSUFBUDtBQUEwQixHQUF2RCxDQUFOLENBaENvRCxDQWdDWTs7QUFDaEUsTUFBRyxHQUFILEVBQVE7QUFDSixRQUFNLEtBQUssR0FBRyxHQUFHLE1BQUgsQ0FBRyxNQUFILEVBQU8sSUFBUCxDQUFkOztBQUNBLFFBQUcsS0FBSCxFQUFVO0FBQ04saUJBQVcsR0FBRyxLQUFkO0FBQ0g7O0FBQ0QsT0FBRyxHQUFHLFNBQU47QUFDSDs7QUFFRCxLQUFHLEdBQUcsV0FBVyxDQUFDLElBQVosQ0FBaUIsVUFBQyxNQUFELEVBQU87QUFBSyxpQkFBTSxDQUFDLElBQVA7QUFBZ0MsR0FBN0QsQ0FBTjs7QUFDQSxNQUFHLEdBQUgsRUFBUTtBQUNKLFFBQU0sS0FBSyxHQUFHLEdBQUcsTUFBSCxDQUFHLE1BQUgsRUFBTyxJQUFQLENBQWQ7O0FBQ0EsUUFBRyxLQUFILEVBQVU7QUFDTixpQkFBVyxHQUFHLEtBQWQ7QUFDSDs7QUFDRCxPQUFHLEdBQUcsU0FBTjtBQUNIOztBQUVELEtBQUcsR0FBRyxXQUFXLENBQUMsSUFBWixDQUFpQixVQUFDLE1BQUQsRUFBTztBQUFLLGlCQUFNLENBQUMsSUFBUDtBQUFpQyxHQUE5RCxDQUFOOztBQUNBLE1BQUcsR0FBSCxFQUFRO0FBQ0osUUFBTSxLQUFLLEdBQUcsR0FBRyxNQUFILENBQUcsTUFBSCxFQUFPLElBQVAsQ0FBZDs7QUFDQSxRQUFHLEtBQUgsRUFBVTtBQUNOLGlCQUFXLEdBQUcsS0FBZDtBQUNIOztBQUNELE9BQUcsR0FBRyxTQUFOO0FBQ0g7O0FBRUQsS0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFaLENBQWlCLFVBQUMsTUFBRCxFQUFPO0FBQUssaUJBQU0sQ0FBQyxJQUFQO0FBQTBCLEdBQXZELENBQU4sQ0EzRG9ELENBMkRXOztBQUMvRCxNQUFHLEdBQUgsRUFBUTtBQUNKLFFBQU0sS0FBSyxHQUFHLEdBQUcsTUFBSCxDQUFHLE1BQUgsRUFBTyxJQUFQLENBQWQ7O0FBQ0EsUUFBRyxLQUFILEVBQVU7QUFDTixpQkFBVyxHQUFHLEtBQWQ7QUFDSDs7QUFDRCxPQUFHLEdBQUcsU0FBTjtBQUNIOztBQUVELEtBQUcsR0FBRyxXQUFXLENBQUMsSUFBWixDQUFpQixVQUFDLE1BQUQsRUFBTztBQUFLLGlCQUFNLENBQUMsSUFBUDtBQUE4QixHQUEzRCxDQUFOOztBQUNBLE1BQUcsR0FBSCxFQUFRO0FBQ0osUUFBTSxLQUFLLEdBQUcsR0FBRyxNQUFILENBQUcsTUFBSCxFQUFPLElBQVAsQ0FBZDs7QUFDQSxRQUFHLEtBQUgsRUFBVTtBQUNOLGlCQUFXLEdBQUcsS0FBZDtBQUNIOztBQUNELE9BQUcsR0FBRyxTQUFOO0FBQ0g7O0FBRUQsS0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFaLENBQWlCLFVBQUMsTUFBRCxFQUFPO0FBQUssaUJBQU0sQ0FBQyxJQUFQO0FBQWdDLEdBQTdELENBQU47O0FBQ0EsTUFBRyxHQUFILEVBQVE7QUFDSixRQUFNLEtBQUssR0FBRyxHQUFHLE1BQUgsQ0FBRyxNQUFILEVBQU8sSUFBUCxDQUFkOztBQUNBLFFBQUcsS0FBSCxFQUFVO0FBQ04saUJBQVcsR0FBRyxLQUFkO0FBQ0g7O0FBQ0QsT0FBRyxHQUFHLFNBQU47QUFDSDs7QUFFRCxLQUFHLEdBQUcsV0FBVyxDQUFDLElBQVosQ0FBaUIsVUFBQyxNQUFELEVBQU87QUFBSyxpQkFBTSxDQUFDLElBQVA7QUFBMkIsR0FBeEQsQ0FBTjs7QUFDQSxNQUFHLEdBQUgsRUFBUTtBQUNKLFFBQU0sS0FBSyxHQUFHLEdBQUcsTUFBSCxDQUFHLE1BQUgsRUFBTyxJQUFQLENBQWQ7O0FBQ0EsUUFBRyxLQUFILEVBQVU7QUFDTixpQkFBVyxHQUFHLEtBQWQ7QUFDSDs7QUFDRCxPQUFHLEdBQUcsU0FBTjtBQUNIOztBQUVELEtBQUcsR0FBRyxXQUFXLENBQUMsSUFBWixDQUFpQixVQUFDLE1BQUQsRUFBTztBQUFLLGlCQUFNLENBQUMsSUFBUDtBQUE4QixHQUEzRCxDQUFOOztBQUNBLE1BQUcsR0FBSCxFQUFRO0FBQ0osUUFBTSxLQUFLLEdBQUcsR0FBRyxNQUFILENBQUcsTUFBSCxFQUFPLElBQVAsQ0FBZDs7QUFDQSxRQUFHLEtBQUgsRUFBVTtBQUNOLGlCQUFXLEdBQUcsS0FBZDtBQUNIOztBQUNELE9BQUcsR0FBRyxTQUFOO0FBQ0g7O0FBRUQsS0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFaLENBQWlCLFVBQUMsTUFBRCxFQUFPO0FBQUssaUJBQU0sQ0FBQyxJQUFQO0FBQWdDLEdBQTdELENBQU47O0FBQ0EsTUFBRyxHQUFILEVBQVE7QUFDSixRQUFNLEtBQUssR0FBRyxHQUFHLE1BQUgsQ0FBRyxNQUFILEVBQU8sSUFBUCxDQUFkOztBQUNBLFFBQUcsS0FBSCxFQUFVO0FBQ04saUJBQVcsR0FBRyxLQUFkO0FBQ0g7O0FBQ0QsT0FBRyxHQUFHLFNBQU47QUFDSDs7QUFFRCxLQUFHLEdBQUcsV0FBVyxDQUFDLElBQVosQ0FBaUIsVUFBQyxNQUFELEVBQU87QUFBSyxpQkFBTSxDQUFDLElBQVA7QUFBaUMsR0FBOUQsQ0FBTjs7QUFDQSxNQUFHLEdBQUgsRUFBUTtBQUNKLFFBQU0sS0FBSyxHQUFHLEdBQUcsTUFBSCxDQUFHLE1BQUgsRUFBTyxJQUFQLENBQWQ7O0FBQ0EsUUFBRyxLQUFILEVBQVU7QUFDTixpQkFBVyxHQUFHLEtBQWQ7QUFDSDs7QUFDRCxPQUFHLEdBQUcsU0FBTjtBQUNIOztBQUVELEtBQUcsR0FBRyxXQUFXLENBQUMsSUFBWixDQUFpQixVQUFDLE1BQUQsRUFBTztBQUFLLGlCQUFNLENBQUMsSUFBUDtBQUErQixHQUE1RCxDQUFOOztBQUNBLE1BQUcsR0FBSCxFQUFRO0FBQ0osUUFBTSxLQUFLLEdBQUcsR0FBRyxNQUFILENBQUcsTUFBSCxFQUFPLElBQVAsQ0FBZDs7QUFDQSxRQUFHLEtBQUgsRUFBVTtBQUNOLGlCQUFXLEdBQUcsS0FBZDtBQUNIOztBQUNELE9BQUcsR0FBRyxTQUFOO0FBQ0g7O0FBRUQsS0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFaLENBQWlCLFVBQUMsTUFBRCxFQUFPO0FBQUssaUJBQU0sQ0FBQyxJQUFQO0FBQWtDLEdBQS9ELENBQU47O0FBQ0EsTUFBRyxHQUFILEVBQVE7QUFDSixRQUFNLEtBQUssR0FBRyxHQUFHLE1BQUgsQ0FBRyxNQUFILEVBQU8sSUFBUCxDQUFkOztBQUNBLFFBQUcsS0FBSCxFQUFVO0FBQ04saUJBQVcsR0FBRyxLQUFkO0FBQ0g7O0FBQ0QsT0FBRyxHQUFHLFNBQU47QUFDSDs7QUFFRCxLQUFHLEdBQUcsV0FBVyxDQUFDLElBQVosQ0FBaUIsVUFBQyxNQUFELEVBQU87QUFBSyxpQkFBTSxDQUFDLElBQVA7QUFBNEIsR0FBekQsQ0FBTjs7QUFDQSxNQUFHLEdBQUgsRUFBUTtBQUNKLFFBQU0sS0FBSyxHQUFHLEdBQUcsTUFBSCxDQUFHLE1BQUgsRUFBTyxJQUFQLENBQWQ7O0FBQ0EsUUFBRyxLQUFILEVBQVU7QUFDTixpQkFBVyxHQUFHLEtBQWQ7QUFDSDs7QUFDRCxPQUFHLEdBQUcsU0FBTjtBQUNIOztBQUVELEtBQUcsR0FBRyxXQUFXLENBQUMsSUFBWixDQUFpQixVQUFDLE1BQUQsRUFBTztBQUFLLGlCQUFNLENBQUMsSUFBUDtBQUE0QixHQUF6RCxDQUFOOztBQUNBLE1BQUcsR0FBSCxFQUFRO0FBQ0osUUFBTSxLQUFLLEdBQUcsR0FBRyxNQUFILENBQUcsTUFBSCxFQUFPLElBQVAsQ0FBZDs7QUFDQSxRQUFHLEtBQUgsRUFBVTtBQUNOLGlCQUFXLEdBQUcsS0FBZDtBQUNIOztBQUNELE9BQUcsR0FBRyxTQUFOO0FBQ0g7O0FBRUQsS0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFaLENBQWlCLFVBQUMsTUFBRCxFQUFPO0FBQUssaUJBQU0sQ0FBQyxJQUFQO0FBQTZCLEdBQTFELENBQU47O0FBQ0EsTUFBRyxHQUFILEVBQVE7QUFDSixRQUFNLEtBQUssR0FBRyxHQUFHLE1BQUgsQ0FBRyxNQUFILEVBQU8sSUFBUCxDQUFkOztBQUNBLFFBQUcsS0FBSCxFQUFVO0FBQ04saUJBQVcsR0FBRyxLQUFkO0FBQ0g7O0FBQ0QsT0FBRyxHQUFHLFNBQU47QUFDSDs7QUFFRCxLQUFHLEdBQUcsV0FBVyxDQUFDLElBQVosQ0FBaUIsVUFBQyxNQUFELEVBQU87QUFBSyxpQkFBTSxDQUFDLElBQVA7QUFBaUMsR0FBOUQsQ0FBTjs7QUFDQSxNQUFHLEdBQUgsRUFBUTtBQUNKLFFBQU0sS0FBSyxHQUFHLEdBQUcsTUFBSCxDQUFHLE1BQUgsRUFBTyxJQUFQLENBQWQ7O0FBQ0EsUUFBRyxLQUFILEVBQVU7QUFDTixpQkFBVyxHQUFHLEtBQWQ7QUFDSDs7QUFDRCxPQUFHLEdBQUcsU0FBTjtBQUNIOztBQUVELEtBQUcsR0FBRyxXQUFXLENBQUMsSUFBWixDQUFpQixVQUFDLE1BQUQsRUFBTztBQUFLLGlCQUFNLENBQUMsSUFBUDtBQUFnQyxHQUE3RCxDQUFOLENBaExvRCxDQWdMa0I7O0FBQ3RFLE1BQUcsR0FBSCxFQUFRO0FBQ0osUUFBTSxLQUFLLEdBQUcsR0FBRyxNQUFILENBQUcsTUFBSCxFQUFPLElBQVAsQ0FBZDs7QUFDQSxRQUFHLEtBQUgsRUFBVTtBQUNOLGlCQUFXLEdBQUcsS0FBZDtBQUNIOztBQUNELE9BQUcsR0FBRyxTQUFOO0FBQ0g7O0FBRUQsS0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFaLENBQWlCLFVBQUMsTUFBRCxFQUFPO0FBQUssaUJBQU0sQ0FBQyxJQUFQO0FBQTRCLEdBQXpELENBQU4sQ0F6TG9ELENBeUxjOztBQUNsRSxNQUFHLEdBQUgsRUFBUTtBQUNKLFFBQU0sS0FBSyxHQUFHLEdBQUcsTUFBSCxDQUFHLE1BQUgsRUFBTyxJQUFQLENBQWQ7O0FBQ0EsUUFBRyxLQUFILEVBQVU7QUFDTixpQkFBVyxHQUFHLEtBQWQ7QUFDSDs7QUFDRCxPQUFHLEdBQUcsU0FBTjtBQUNIOztBQUVELEtBQUcsR0FBRyxXQUFXLENBQUMsSUFBWixDQUFpQixVQUFDLE1BQUQsRUFBTztBQUFLLGlCQUFNLENBQUMsSUFBUDtBQUEyQixHQUF4RCxDQUFOOztBQUNBLE1BQUcsR0FBSCxFQUFRO0FBQ0osUUFBTSxLQUFLLEdBQUcsR0FBRyxNQUFILENBQUcsTUFBSCxFQUFPLElBQVAsQ0FBZDs7QUFDQSxRQUFHLEtBQUgsRUFBVTtBQUNOLGlCQUFXLEdBQUcsS0FBZDtBQUNIOztBQUNELE9BQUcsR0FBRyxTQUFOO0FBQ0g7O0FBRUQsS0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFaLENBQWlCLFVBQUMsTUFBRCxFQUFPO0FBQUssaUJBQU0sQ0FBQyxJQUFQO0FBQXNDLEdBQW5FLENBQU47O0FBQ0EsTUFBRyxHQUFILEVBQVE7QUFDSixRQUFNLEtBQUssR0FBRyxHQUFHLE1BQUgsQ0FBRyxNQUFILEVBQU8sSUFBUCxDQUFkOztBQUNBLFFBQUcsS0FBSCxFQUFVO0FBQ04saUJBQVcsR0FBRyxLQUFkO0FBQ0g7O0FBQ0QsT0FBRyxHQUFHLFNBQU47QUFDSDs7QUFFRCxLQUFHLEdBQUcsV0FBVyxDQUFDLElBQVosQ0FBaUIsVUFBQyxNQUFELEVBQU87QUFBSyxpQkFBTSxDQUFDLElBQVA7QUFBK0IsR0FBNUQsQ0FBTixDQXBOb0QsQ0FvTmlCOztBQUNyRSxNQUFHLEdBQUgsRUFBUTtBQUNKLFFBQU0sS0FBSyxHQUFHLEdBQUcsTUFBSCxDQUFHLE1BQUgsRUFBTyxJQUFQLENBQWQ7O0FBQ0EsUUFBRyxLQUFILEVBQVU7QUFDTixpQkFBVyxHQUFHLEtBQWQ7QUFDSDs7QUFDRCxPQUFHLEdBQUcsU0FBTjtBQUNIOztBQUVELFNBQU8sV0FBUDtBQUNILENBOU5NO0FBZ09QLElBQU0sWUFBWSxHQUEyQjtBQUN6QyxvQkFBbUIsWUFEc0I7QUFFekMsZUFBYyxNQUYyQjtBQUd6QyxnQkFBZSxVQUgwQjtBQUl6Qyx1QkFBc0I7QUFKbUIsQ0FBN0M7Ozs7Ozs7OztBQ3hQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdPLElBQU0scUJBQXFCLEdBQUcsVUFBdUIsUUFBdkIsRUFBNEM7QUFDN0UsaUVBQWMsQ0FDVixDQUFDLGNBQUQsRUFDQSxjQURBLEVBRUEsY0FGQSxFQUdBLGFBSEEsRUFJQSxVQUpBLEVBS0EsVUFMQSxDQURVLEVBT1YsUUFQVSxDQUFkO0FBU0gsQ0FWTTs7QUFZUCxJQUFNLGNBQWMsR0FBRyxVQUF1QixRQUF2QixFQUE0QztBQUUvRDtBQUVBLFNBQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQix1QkFBdEIsRUFBK0MsSUFBL0M7QUFDSCxDQUxEOztBQU1BLElBQU0sY0FBYyxHQUFHLFVBQXVCLFFBQXZCLEVBQTRDO0FBRS9ELE1BQUcsRUFBRSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsZUFBb0QseUZBQXRELENBQUgsRUFBc0U7QUFFdEUsTUFBTSxJQUFJLEdBQWEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLEdBQXZCOztBQUNJLE1BQUksQ0FBQyxJQUFMLEVBQVc7QUFDUCxXQUFPLENBQUMsSUFBUixDQUFhLDJFQUFiO0FBQ0E7QUFDSDs7QUFDRCxNQUFJLENBQUMsRUFBTCxDQUFRLFlBQVIsRUFBc0IsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGNBQXRCLENBQXRCO0FBQ1AsQ0FWRDs7QUFXQSxJQUFNLGNBQWMsR0FBRyxVQUF1QixRQUF2QixFQUE0QztBQUUvRCxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHlGQUF0RCxDQUFILEVBQXNFO0FBRXRFLE1BQU0sSUFBSSxHQUFhLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixlQUF0QixHQUF2Qjs7QUFDSSxNQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1AsV0FBTyxDQUFDLElBQVIsQ0FBYSwyRUFBYjtBQUNBO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDLEVBQUwsQ0FBUSxxQkFBUixFQUErQixPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsdUJBQXRCLENBQS9CO0FBQ1AsQ0FWRDs7QUFZQSxJQUFNLGFBQWEsR0FBRyxVQUFzQixRQUF0QixFQUEyQztBQUU3RCxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHdGQUF0RCxDQUFILEVBQXFFO0FBRXJFLE1BQU0sSUFBSSxHQUFhLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixlQUF0QixHQUF2Qjs7QUFDSSxNQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1AsV0FBTyxDQUFDLElBQVIsQ0FBYSwyRUFBYjtBQUNBO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDLEVBQUwsQ0FBUSxZQUFSLEVBQXNCLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixjQUF0QixDQUF0QjtBQUNQLENBVkQ7O0FBWUEsSUFBTSxVQUFVLEdBQUcsVUFBbUIsUUFBbkIsRUFBd0M7QUFFdkQsTUFBRyxFQUFFLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixlQUF0QixlQUFvRCxxRkFBdEQsQ0FBSCxFQUFrRTtBQUVsRSxNQUFNLElBQUksR0FBYSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsR0FBdkI7O0FBQ0ksTUFBSSxDQUFDLElBQUwsRUFBVztBQUNQLFdBQU8sQ0FBQyxJQUFSLENBQWEsMkVBQWI7QUFDQTtBQUNIOztBQUNELE1BQUksQ0FBQyxFQUFMLENBQVEsYUFBUixFQUF1QixPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsQ0FBdkI7QUFDUCxDQVZEOztBQVdBLElBQU0sVUFBVSxHQUFHLFVBQW1CLFFBQW5CLEVBQXdDO0FBRXZELE1BQUcsRUFBRSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsZUFBb0QscUZBQXRELENBQUgsRUFBa0U7QUFFbEUsTUFBTSxJQUFJLEdBQWEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLEdBQXZCOztBQUNJLE1BQUksQ0FBQyxJQUFMLEVBQVc7QUFDUCxXQUFPLENBQUMsSUFBUixDQUFhLDJFQUFiO0FBQ0E7QUFDSDs7QUFDRCxNQUFJLENBQUMsRUFBTCxDQUFRLGVBQVIsRUFBeUIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLFVBQXRCLENBQXpCO0FBQ1AsQ0FWRDs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBS08sSUFBTSx3QkFBd0IsR0FBRyxVQUF1QixRQUF2QixFQUE0QztBQUNoRixpRUFBYyxDQUNWLENBQUMsY0FBRCxFQUNBLGNBREEsRUFFQSxjQUZBLEVBR0EsYUFIQSxFQUlBLFVBSkEsRUFLQSxVQUxBLENBRFUsRUFPVixRQVBVLENBQWQ7QUFRSCxDQVRNOztBQVdQLElBQU0sY0FBYyxHQUFHLFVBQXVCLFFBQXZCLEVBQTRDO0FBRS9EO0FBRUEsU0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLHVCQUF0QixFQUErQyxLQUEvQztBQUNILENBTEQ7O0FBTUEsSUFBTSxjQUFjLEdBQUcsVUFBdUIsUUFBdkIsRUFBNEM7QUFFL0QsTUFBRyxFQUFFLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixlQUF0QixlQUFvRCx5RkFBdEQsQ0FBSCxFQUFzRTtBQUV0RSxNQUFNLElBQUksR0FBYSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsR0FBdkI7O0FBQ0EsTUFBSSxDQUFDLElBQUwsRUFBVztBQUNQLFdBQU8sQ0FBQyxJQUFSLENBQWEsMkVBQWI7QUFDQTtBQUNIOztBQUNELE1BQUksQ0FBQyxHQUFMLENBQVMsWUFBVCxFQUF1QixPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsY0FBdEIsQ0FBdkI7QUFDSCxDQVZEOztBQVdBLElBQU0sY0FBYyxHQUFHLFVBQXVCLFFBQXZCLEVBQTRDO0FBRS9ELE1BQUcsRUFBRSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsZUFBb0QseUZBQXRELENBQUgsRUFBc0U7O0FBRXRFLE1BQU0sSUFBSSxHQUFhLEtBQUksQ0FBQyxhQUFMLEVBQXZCOztBQUNJLE1BQUksQ0FBQyxJQUFMLEVBQVc7QUFDUCxXQUFPLENBQUMsSUFBUixDQUFhLDJFQUFiO0FBQ0E7QUFDSDs7QUFDRCxNQUFJLENBQUMsR0FBTCxDQUFTLHFCQUFULEVBQWdDLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQix1QkFBdEIsQ0FBaEM7QUFDUCxDQVZEOztBQVdBLElBQU0sYUFBYSxHQUFHLFVBQXNCLFFBQXRCLEVBQTJDO0FBRTdELE1BQUcsRUFBRSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsZUFBb0Qsd0ZBQXRELENBQUgsRUFBcUU7QUFFckUsTUFBTSxJQUFJLEdBQWEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLEdBQXZCOztBQUNJLE1BQUksQ0FBQyxJQUFMLEVBQVc7QUFDUCxXQUFPLENBQUMsSUFBUixDQUFhLDJFQUFiO0FBQ0E7QUFDSDs7QUFDRCxNQUFJLENBQUMsR0FBTCxDQUFTLFlBQVQsRUFBdUIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGNBQXRCLENBQXZCO0FBQ1AsQ0FWRDtBQVlBOzs7QUFDQSxJQUFNLFVBQVUsR0FBRyxVQUFtQixRQUFuQixFQUF3QztBQUV2RCxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHFGQUF0RCxDQUFILEVBQWtFO0FBRWxFLE1BQU0sSUFBSSxHQUFhLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixlQUF0QixHQUF2Qjs7QUFDSSxNQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1AsUUFBSSxDQUFDLEdBQUwsQ0FBUyxhQUFULEVBQXdCLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixlQUF0QixDQUF4QjtBQUNBO0FBQ0g7O0FBQ0QsU0FBTyxDQUFDLElBQVIsQ0FBYSwyRUFBYjtBQUNQLENBVkQ7O0FBV0EsSUFBTSxVQUFVLEdBQUcsVUFBbUIsUUFBbkIsRUFBd0M7QUFFdkQsTUFBRyxFQUFFLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixlQUF0QixlQUFvRCxxRkFBdEQsQ0FBSCxFQUFrRTtBQUVsRSxNQUFNLElBQUksR0FBYSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsR0FBdkI7O0FBQ0ksTUFBSSxDQUFDLElBQUwsRUFBVztBQUNQLFdBQU8sQ0FBQyxJQUFSLENBQWEsMkVBQWI7QUFDQTtBQUNIOztBQUNELE1BQUksQ0FBQyxHQUFMLENBQVMsZUFBVCxFQUEwQixPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsVUFBdEIsQ0FBMUI7QUFDUCxDQVZEOzs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHTyxJQUFNLFVBQVUsR0FBRyxVQUF1QixJQUF2QixFQUFxQyxRQUFyQyxFQUE0RCxVQUE1RCxFQUF5RTtBQUMvRixTQUFPLCtEQUFjLENBQ2pCLENBQUMsV0FBRCxFQUNBLFVBREEsRUFFQSxhQUZBLEVBR0EsWUFIQSxFQUlBLFNBSkEsRUFLQSxlQUxBLENBRGlCLEVBT2pCLElBUGlCLEVBT1gsUUFQVyxFQU9ELFVBUEMsQ0FBckI7QUFRSCxDQVRNOztBQVVQLElBQU0sV0FBVyxHQUFHLFVBQXVCLElBQXZCLEVBQXFDLFFBQXJDLEVBQTRELFVBQTVELEVBQXlFO0FBQ3pGLFNBQU8sQ0FBQyxHQUFSLENBQVksZ0JBQVo7O0FBQ0EsTUFBTSxtQkFBTjtBQUFBLE1BQVEsOEJBQVI7QUFBQSxNQUFzQixzQkFBdEI7QUFBQSxNQUFnQywrQ0FBaEM7O0FBQ0EsU0FBTyxvREFDSCxJQURHLEVBQ0MsYUFFRCxJQUZDLEVBRUc7QUFDUCxPQUFHLEVBQUUsWUFBWSxJQUFJLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixPQUF0QjtBQURkLEdBRkgsQ0FERCxFQU1ILFFBTkcsQ0FBUDtBQVFILENBWEQ7O0FBYUEsSUFBTSxVQUFVLEdBQUcsVUFBbUIsSUFBbkIsRUFBaUMsUUFBakMsRUFBd0QsVUFBeEQsRUFBcUU7OztBQUVwRixNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHFGQUF0RCxDQUFILEVBQWtFLE9BQU8sU0FBUDs7QUFDOUQsTUFBTSxtQkFBTjtBQUFBLE1BQ0ksOEJBREo7QUFBQSxNQUVJLGNBRko7QUFBQSxNQUdJLGdDQUhKO0FBQUEsTUFJSSxzQkFKSjtBQUFBLE1BS0ksd0VBTEo7O0FBUUEsTUFBSSxJQUFJLElBQUksYUFBWixFQUEyQjtBQUN2QixXQUFPLENBQUMsSUFBUixDQUFhLGdFQUFiO0FBQ0g7O0FBRUQsTUFBTSxXQUFXLGFBQ2IsR0FBQyxhQUFhLEdBQUcsZUFBSCxHQUFxQixNQUFuQyxJQUE0QyxhQUFhLElBQUksSUFEaEQsRUFFaEIsRUFGZ0IsQ0FBakI7QUFJQSxTQUFPLG9EQUNILElBREcsRUFDQztBQUVBLGFBQVMsRUFBRTtBQUZYLEtBR0csSUFISCxFQUlHLFdBSkgsRUFJYztBQUNkLE9BQUcsRUFBRSxZQUFZLElBQUksT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLE9BQXRCO0FBRFAsR0FKZCxDQURELEVBUUgsUUFSRyxDQVFNO0FBUk4sR0FBUDtBQVVQLENBN0JEOztBQStCQSxJQUFNLGFBQWEsR0FBRyxVQUFzQixJQUF0QixFQUFvQyxRQUFwQyxFQUEyRCxVQUEzRCxFQUF3RTs7O0FBRTFGLE1BQUcsRUFBRSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsZUFBb0Qsd0ZBQXRELENBQUgsRUFBcUUsT0FBTyxTQUFQOztBQUVyRSxNQUFNLG1CQUFOO0FBQUEsTUFDSSw4QkFESjtBQUFBLE1BSUksY0FKSjtBQUFBLE1BS0ksZ0NBTEo7QUFBQSxNQU1JLHNCQU5KO0FBQUEsTUFPSSx3RUFQSjs7QUFVQSxNQUFJLElBQUksSUFBSSxhQUFaLEVBQTJCO0FBQ3ZCLFdBQU8sQ0FBQyxJQUFSLENBQWEsZ0VBQWI7QUFDSDs7QUFFRCxNQUFNLFdBQVcsYUFDYixHQUFDLGFBQWEsR0FBRyxlQUFILEdBQXFCLE1BQW5DLElBQTRDLGFBQWEsSUFBSSxJQURoRCxFQUVoQixFQUZnQixDQUFqQjtBQUlBLFNBQU8sb0RBQ0gsSUFERyxFQUNDLGFBRUcsSUFGSCxFQUdHLFdBSEgsRUFHYztBQUNkLE9BQUcsRUFBRSxZQUFZLElBQUksT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLE9BQXRCO0FBRFAsR0FIZCxDQURELEVBT0gsUUFQRyxDQU9NO0FBUE4sR0FBUDtBQVNILENBL0JEOztBQWlDQSxJQUFNLFlBQVksR0FBRyxVQUFxQixJQUFyQixFQUFtQyxRQUFuQyxFQUEwRCxVQUExRCxFQUF1RTtBQUV4RixNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHVGQUF0RCxDQUFILEVBQW9FLE9BQU8sU0FBUDs7QUFFcEUsTUFBTSxtQkFBTjtBQUFBLE1BQ0ksOEJBREo7QUFBQSxNQUVJLHNCQUZKO0FBQUEsTUFJSSwrQ0FKSjs7QUFPQSxNQUFJLFFBQUosRUFBYztBQUNWLFdBQU8sQ0FBQyxJQUFSLENBQWEscURBQWI7QUFDSDs7QUFFRCxTQUFPLG9EQUNILElBREcsRUFDQyxhQUVHLElBRkgsRUFFTztBQUNQLE9BQUcsRUFBRSxZQUFZLElBQUksT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLE9BQXRCO0FBRGQsR0FGUCxDQURELEVBTUgsSUFORyxDQUFQO0FBUUgsQ0F2QkQ7O0FBeUJBLElBQU0sU0FBUyxHQUFHLFVBQWtCLElBQWxCLEVBQWdDLFFBQWhDLEVBQXVELFVBQXZELEVBQW9FOzs7QUFFbEYsTUFBRyxFQUFFLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixlQUF0QixlQUFvRCxvRkFBdEQsQ0FBSCxFQUFpRSxPQUFPLFNBQVA7QUFFakUsU0FBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaOztBQUNJLE1BQU0sbUJBQU47QUFBQSxNQUNJLDhCQURKO0FBQUEsTUFHSSxjQUhKO0FBQUEsTUFJSSxnQ0FKSjtBQUFBLE1BS0ksc0JBTEo7QUFBQSxNQU1JLHdFQU5KOztBQVNBLE1BQUksSUFBSSxJQUFJLGFBQVosRUFBMkI7QUFDdkIsV0FBTyxDQUFDLElBQVIsQ0FBYSxnRUFBYjtBQUNIOztBQUVELE1BQU0sV0FBVyxhQUNiLEdBQUMsYUFBYSxHQUFHLGVBQUgsR0FBcUIsTUFBbkMsSUFBNEMsYUFBYSxJQUFJLElBRGhELEVBRWhCLEVBRmdCLENBQWpCO0FBSUEsU0FBTyxvREFDSCxJQURHLEVBQ0MsYUFFRyxJQUZILEVBR0csV0FISCxFQUdjO0FBQ2QsT0FBRyxFQUFFLFlBQVksSUFBSSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsT0FBdEI7QUFEUCxHQUhkLENBREQsRUFPSCxRQVBHLENBT007QUFQTixHQUFQO0FBU1AsQ0EvQkQ7O0FBaUNBLElBQU0sZUFBZSxHQUFHLFVBQXdCLElBQXhCLEVBQXNDLFFBQXRDLEVBQTZELFVBQTdELEVBQTBFO0FBRTlGLE1BQUcsRUFBRSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsZUFBb0QsMEZBQXRELENBQUgsRUFBdUUsT0FBTyxTQUFQOztBQUV2RSxNQUFNLG1CQUFOO0FBQUEsTUFDSSw4QkFESjtBQUFBLE1BR0ksc0JBSEo7QUFBQSxNQUlJO0FBQ0EsaURBTEo7O0FBUUEsTUFBSSwrQ0FBZSxLQUFmLENBQXFCLFFBQXJCLElBQWlDLENBQWpDLElBQXNDLE9BQU8sUUFBUCxLQUFvQixRQUExRCxJQUFzRSxPQUFPLFFBQVAsS0FBb0IsUUFBOUYsRUFBd0c7QUFDcEcsV0FBTyxDQUFDLEdBQVIsQ0FBWSxZQUFZLCtDQUFlLEtBQWYsQ0FBcUIsUUFBckIsQ0FBeEI7QUFDQSxVQUFNLElBQUksS0FBSixDQUNGLCtHQURFLENBQU47QUFHSDs7QUFFRCxTQUFPLG9EQUNILElBREcsRUFDQyxhQUVHLElBRkgsRUFFTztBQUNQLE9BQUcsRUFBRSxZQUFZLElBQUksT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLE9BQXRCO0FBRGQsR0FGUCxDQURELEVBTUgsUUFORyxDQUFQO0FBUUgsQ0EzQkQ7Ozs7Ozs7OztBQ3ZKQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBSU8sSUFBTSx5QkFBeUIsR0FBRyxVQUF1QixRQUF2QixFQUE4QyxTQUE5QyxFQUE0RSxTQUE1RSxFQUEwRjtBQUMvSCxTQUFPLGNBQWMsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixTQUF0QixDQUFyQjtBQUNILENBRk07O0FBR1AsSUFBTSxjQUFjLEdBQUcsVUFBdUIsUUFBdkIsRUFBOEMsU0FBOUMsRUFBNEUsU0FBNUUsRUFBMEY7QUFFN0c7QUFFQTtBQUNBLE1BQU0sWUFBWSxHQUFZLENBQUMsZ0dBQVksQ0FBQyxLQUFJLENBQUMsS0FBTixFQUFhLFNBQWIsQ0FBYixJQUF3QyxDQUFDLGdHQUFZLENBQUMsS0FBSSxDQUFDLEtBQU4sRUFBYSxTQUFiLENBQW5GLENBTDZHLENBTTdHOztBQUNBLFNBQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQix1QkFBdEIsRUFBK0MsSUFBL0MsRUFBcUQsU0FBckQsRUFQNkcsQ0FRN0c7O0FBQ0EsU0FBTyxZQUFQO0FBQ0gsQ0FWRDs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7OztBQVVBOztBQUNBOzs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUdBO0FBQ08sSUFBTSxPQUFPLEdBQUcsVUFBSSxTQUFKLEVBQWtCO0FBQ3JDLFNBQU8sU0FBUDtBQUNILENBRk07Ozs7Ozs7OztBQzVDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdPLElBQU0sZ0JBQWdCLEdBQUcsVUFBdUIsUUFBdkIsRUFBOEMsSUFBOUMsRUFBNkQ7QUFDekYsaUVBQWMsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxFQUFtQixRQUFuQixFQUE2QixJQUE3QixDQUFkO0FBQ0gsQ0FGTTs7QUFJUCxJQUFNLGNBQWMsR0FBRyxVQUF1QixRQUF2QixFQUE4QyxJQUE5QyxFQUE2RDtBQUVoRixNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHlGQUF0RCxDQUFILEVBQXNFO0FBRXRFLE1BQU0sSUFBSSxHQUFzQixJQUFJLENBQUMsTUFBTCxDQUFhLElBQTdDO0FBQ0EsVUFBUSxDQUFDLEtBQVQsQ0FBZSxZQUFmLElBQStCLFFBQVEsQ0FBQyxLQUFULENBQWUsWUFBZixDQUE0QixJQUE1QixDQUEvQjtBQUNILENBTkQ7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRU8sSUFBTSx1QkFBdUIsR0FBRyxVQUF1QixRQUF2QixFQUE4QyxJQUE5QyxFQUE2RDtBQUNoRyxpRUFBYyxDQUFDLENBQUMsY0FBRCxDQUFELEVBQW1CLFFBQW5CLEVBQTZCLElBQTdCLENBQWQ7QUFDSCxDQUZNOztBQUdQLElBQU0sY0FBYyxHQUFHLFVBQXVCLFFBQXZCLEVBQThDLElBQTlDLEVBQTZEO0FBRWhGLE1BQUcsRUFBRSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsZUFBb0QseUZBQXRELENBQUgsRUFBc0U7QUFFdEUsTUFBTSxhQUFhLEdBQXdCLElBQUksQ0FBQyxNQUFMLENBQWEsYUFBeEQ7QUFDQSxVQUFRLENBQUMsS0FBVCxDQUFlLHFCQUFmLElBQXdDLFFBQVEsQ0FBQyxLQUFULENBQWUscUJBQWYsQ0FBcUMsYUFBckMsQ0FBeEM7QUFDSCxDQU5EOzs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVPLElBQU0sZ0JBQWdCLEdBQUcsVUFBdUIsUUFBdkIsRUFBOEMsSUFBOUMsRUFBNkQ7QUFDekYsaUVBQWMsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxFQUFrQixRQUFsQixFQUE0QixJQUE1QixDQUFkO0FBQ0gsQ0FGTTs7QUFHUCxJQUFNLGFBQWEsR0FBRyxVQUFzQixRQUF0QixFQUE2QyxJQUE3QyxFQUE0RDtBQUU5RSxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHdGQUF0RCxDQUFILEVBQXFFO0FBRXJFLE1BQU0sSUFBSSxHQUF1QixJQUFJLENBQUMsTUFBTCxDQUFhLElBQTlDO0FBQ0EsVUFBUSxDQUFDLEtBQVQsQ0FBZSxZQUFmLElBQStCLFFBQVEsQ0FBQyxLQUFULENBQWUsWUFBZixDQUE0QixJQUE1QixDQUEvQjtBQUNILENBTkQ7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR08sSUFBTSxZQUFZLEdBQUcsVUFBdUIsUUFBdkIsRUFBOEMsSUFBOUMsRUFBNkQ7QUFDckYsaUVBQWMsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxFQUFlLFFBQWYsRUFBeUIsSUFBekIsQ0FBZDtBQUNILENBRk07O0FBSVAsSUFBTSxVQUFVLEdBQUcsVUFBbUIsUUFBbkIsRUFBMEMsSUFBMUMsRUFBeUQ7QUFFeEUsTUFBRyxFQUFFLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixlQUF0QixlQUFvRCxxRkFBdEQsQ0FBSCxFQUFrRTtBQUVsRSxNQUFNLE9BQU8sR0FBcUIsSUFBSSxDQUFDLE1BQUwsQ0FBYSxPQUEvQztBQUVJLFVBQVEsQ0FBQyxLQUFULENBQWUsUUFBZixJQUEyQixRQUFRLENBQUMsS0FBVCxDQUFlLFFBQWYsQ0FBd0IsT0FBeEIsQ0FBM0I7QUFDUCxDQVBEOzs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdPLElBQU0saUJBQWlCLEdBQUcsVUFBdUIsUUFBdkIsRUFBOEMsSUFBOUMsRUFBNkQ7QUFDMUYsaUVBQWMsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxFQUFlLFFBQWYsRUFBeUIsSUFBekIsQ0FBZDtBQUNILENBRk07QUFHUDs7QUFDQSxJQUFNLFVBQVUsR0FBRyxVQUFtQixRQUFuQixFQUEwQyxJQUExQyxFQUF5RDtBQUV4RSxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHFGQUF0RCxDQUFILEVBQWtFO0FBRWxFLE1BQU0sV0FBVyxHQUFvQixJQUFJLENBQUMsTUFBTCxDQUFhLEtBQWxEO0FBRUksVUFBUSxDQUFDLEtBQVQsQ0FBZSxhQUFmLElBQWdDLFFBQVEsQ0FBQyxLQUFULENBQWUsYUFBZixDQUE2QixXQUE3QixDQUFoQztBQUNQLENBUEQ7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBTSxTQUFVLGlCQUFWLENBQW1ELFFBQW5ELEVBQXdFO0FBQzFFLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQVQsQ0FBZSxZQUFmLElBQStCLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixPQUF0QixDQUFoQyxFQUFnRSxPQUE1RTtBQUNBLFNBQU8sQ0FBQyxHQUFSLENBQVksd0JBQXdCLEdBQXBDO0FBQ0EsU0FBTyxHQUFQO0FBQ0g7Ozs7Ozs7OztBQ1BEO0FBQUE7QUFBQTs7QUFFQTs7Ozs7QUFLTyxJQUFNLHlCQUF5QixHQUFHLFVBQXVCLFFBQXZCLEVBQThDLE1BQTlDLEVBQXNFLFNBQXRFLEVBQW1HO0FBQ3hJLGdCQUFjLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsU0FBbkIsQ0FBZDtBQUNILENBRk07O0FBSVAsSUFBTSxjQUFjLEdBQUcsVUFBdUIsUUFBdkIsRUFBOEMsTUFBOUMsRUFBc0UsU0FBdEUsRUFBbUc7QUFFdEg7QUFFQSxNQUFNLElBQUksR0FBYSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsR0FBdkI7O0FBQ0ksTUFBSSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNuQjtBQUNJO0FBQ0g7O0FBQ0QsU0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGlCQUF0QixFQUF5QyxJQUF6QyxFQUErQyxNQUEvQyxFQUF1RCxTQUF2RDtBQUNQLENBVkQ7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBZUE7QUFDQTtBQUVBO0FBRU8sSUFBTSxtQkFBbUIsR0FBRyxVQUF1QixRQUF2QixFQUE4QyxJQUE5QyxFQUF1RCxNQUF2RCxFQUErRSxTQUEvRSxFQUFtRztBQUVsSTtBQUNBLGlFQUFjLENBQ1YsQ0FBQyxRQUFELEVBQ0EsUUFEQSxFQUVBLGNBRkEsRUFHQSxjQUhBLEVBSUEsb0JBSkEsRUFLQSxTQUxBLEVBTUEsZUFOQSxFQU9BLGNBUEEsRUFRQSxhQVJBLEVBU0EsZ0JBVEEsRUFVQSxXQVZBLENBRFUsRUFhZCxRQWJjLEVBYUosSUFiSSxFQWFFLE1BYkYsQ0FBZDtBQWNILENBakJNOztBQWtCUCxJQUFNLGNBQWMsR0FBRyxVQUF1QixRQUF2QixFQUF1RCxJQUF2RCxFQUFnRSxNQUFoRSxFQUF3RixTQUF4RixFQUFxSDtBQUN4SSxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHlGQUF0RCxDQUFILEVBQXNFO0FBRXRFLFNBQU8sQ0FBQyxHQUFSLENBQVksZ0JBQVo7O0FBQ0EsTUFBSSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQix1R0FBYyxDQUFDLElBQUQsRUFBTyxnQkFBUCxFQUF5QixRQUFRLENBQUMsS0FBVCxDQUFlLGdCQUF4QyxFQUEwRCxTQUFTLENBQUMsZ0JBQXBFLENBQWQ7QUFDSCxHQUZELE1BRU87QUFDSCxRQUFNLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBUixHQUFhLElBQUksQ0FBQyxHQUF6QixFQUE4QixJQUE5QixDQUFtQyxJQUFuQyxDQUFmO0FBQ0EsUUFBSSxRQUFRLENBQUMsS0FBVCxDQUFlLGdCQUFuQixFQUFxQyxNQUFNLENBQUMsZ0JBQUQsRUFBbUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxnQkFBbEMsQ0FBTjtBQUN4QztBQUVKLENBWEQsQyxDQWFBOzs7QUFDQSxJQUFNLFFBQVEsR0FBRyxVQUFpQixRQUFqQixFQUF3QyxJQUF4QyxFQUFpRCxNQUFqRCxFQUF5RSxTQUF6RSxFQUFzRztBQUVuSCxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELG1GQUF0RCxDQUFILEVBQWdFO0FBRWhFLFNBQU8sQ0FBQyxHQUFSLENBQVksV0FBWjs7QUFDQSxNQUFJLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ2pCLHVHQUFjLENBQUMsSUFBRCxFQUFPLFFBQVAsRUFBaUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxRQUFoQyxFQUEwQyxTQUFTLENBQUMsUUFBcEQsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLFVBQVAsRUFBbUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxVQUFsQyxFQUE4QyxTQUFTLENBQUMsVUFBeEQsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLG9CQUFQLEVBQTZCLFFBQVEsQ0FBQyxLQUFULENBQWUsb0JBQTVDLEVBQWtFLFNBQVMsQ0FBQyxvQkFBNUUsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLGdCQUFQLEVBQXlCLFFBQVEsQ0FBQyxLQUFULENBQWUsZ0JBQXhDLEVBQTBELFNBQVMsQ0FBQyxnQkFBcEUsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLGNBQVAsRUFBdUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxjQUF0QyxFQUFzRCxTQUFTLENBQUMsY0FBaEUsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLGtGQUFZLENBQUMsR0FBcEIsRUFBeUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxLQUF4QyxFQUErQyxTQUFTLENBQUMsS0FBekQsRUFBZ0UsS0FBaEUsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLGtGQUFZLENBQUMsU0FBcEIsRUFBK0IsUUFBUSxDQUFDLEtBQVQsQ0FBZSxXQUE5QyxFQUEyRCxTQUFTLENBQUMsV0FBckUsRUFBa0YsV0FBbEYsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLGtGQUFZLENBQUMsS0FBcEIsRUFBMkIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUExQyxFQUFtRCxTQUFTLENBQUMsT0FBN0QsRUFBc0UsT0FBdEUsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLGtGQUFZLENBQUMsR0FBcEIsRUFBeUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxLQUF4QyxFQUErQyxTQUFTLENBQUMsS0FBekQsRUFBZ0UsS0FBaEUsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLGtGQUFZLENBQUMsS0FBcEIsRUFBMkIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUExQyxFQUFtRCxTQUFTLENBQUMsT0FBN0QsRUFBc0UsT0FBdEUsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLGtGQUFZLENBQUMsUUFBcEIsRUFBOEIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxVQUE3QyxFQUF5RCxTQUFTLENBQUMsVUFBbkUsRUFBK0UsVUFBL0UsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLGtGQUFZLENBQUMsU0FBcEIsRUFBK0IsUUFBUSxDQUFDLEtBQVQsQ0FBZSxXQUE5QyxFQUEyRCxTQUFTLENBQUMsV0FBckUsRUFBa0YsV0FBbEYsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLGtGQUFZLENBQUMsS0FBcEIsRUFBMkIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUExQyxFQUFtRCxTQUFTLENBQUMsT0FBN0QsRUFBc0UsT0FBdEUsQ0FBZDtBQUNILEdBZEQsTUFjTztBQUNILFFBQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFSLEdBQWEsSUFBSSxDQUFDLEdBQXpCLEVBQThCLElBQTlCLENBQW1DLElBQW5DLENBQWY7QUFDQSxRQUFJLFFBQVEsQ0FBQyxLQUFULENBQWUsUUFBbkIsRUFBNkIsTUFBTSxDQUFDLFFBQUQsRUFBVyxRQUFRLENBQUMsS0FBVCxDQUFlLFFBQTFCLENBQU47QUFDN0IsUUFBSSxRQUFRLENBQUMsS0FBVCxDQUFlLFVBQW5CLEVBQStCLE1BQU0sQ0FBQyxVQUFELEVBQWEsUUFBUSxDQUFDLEtBQVQsQ0FBZSxVQUE1QixDQUFOO0FBQy9CLFFBQUksUUFBUSxDQUFDLEtBQVQsQ0FBZSxvQkFBbkIsRUFBeUMsTUFBTSxDQUFDLG9CQUFELEVBQXVCLFFBQVEsQ0FBQyxLQUFULENBQWUsb0JBQXRDLENBQU47QUFDekMsUUFBSSxRQUFRLENBQUMsS0FBVCxDQUFlLGdCQUFuQixFQUFxQyxNQUFNLENBQUMsZ0JBQUQsRUFBbUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxnQkFBbEMsQ0FBTjtBQUNyQyxRQUFJLFFBQVEsQ0FBQyxLQUFULENBQWUsY0FBbkIsRUFBbUMsTUFBTSxDQUFDLGNBQUQsRUFBaUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxjQUFoQyxDQUFOO0FBQ25DLFFBQUksUUFBUSxDQUFDLEtBQVQsQ0FBZSxLQUFuQixFQUEwQixNQUFNLENBQUMsa0ZBQVksQ0FBQyxHQUFkLEVBQW1CLFFBQVEsQ0FBQyxLQUFULENBQWUsS0FBbEMsQ0FBTjtBQUMxQixRQUFJLFFBQVEsQ0FBQyxLQUFULENBQWUsV0FBbkIsRUFBZ0MsTUFBTSxDQUFDLGtGQUFZLENBQUMsU0FBZCxFQUF5QixRQUFRLENBQUMsS0FBVCxDQUFlLFdBQXhDLENBQU47QUFDaEMsUUFBSSxRQUFRLENBQUMsS0FBVCxDQUFlLE9BQW5CLEVBQTRCLE1BQU0sQ0FBQyxrRkFBWSxDQUFDLEtBQWQsRUFBcUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUFwQyxDQUFOO0FBQzVCLFFBQUksUUFBUSxDQUFDLEtBQVQsQ0FBZSxLQUFuQixFQUEwQixNQUFNLENBQUMsa0ZBQVksQ0FBQyxHQUFkLEVBQW1CLFFBQVEsQ0FBQyxLQUFULENBQWUsS0FBbEMsQ0FBTjtBQUMxQixRQUFJLFFBQVEsQ0FBQyxLQUFULENBQWUsT0FBbkIsRUFBNEIsTUFBTSxDQUFDLGtGQUFZLENBQUMsS0FBZCxFQUFxQixRQUFRLENBQUMsS0FBVCxDQUFlLE9BQXBDLENBQU47QUFDNUIsUUFBSSxRQUFRLENBQUMsS0FBVCxDQUFlLFVBQW5CLEVBQStCLE1BQU0sQ0FBQyxrRkFBWSxDQUFDLFFBQWQsRUFBd0IsUUFBUSxDQUFDLEtBQVQsQ0FBZSxVQUF2QyxDQUFOO0FBQy9CLFFBQUksUUFBUSxDQUFDLEtBQVQsQ0FBZSxXQUFuQixFQUFnQyxNQUFNLENBQUMsa0ZBQVksQ0FBQyxTQUFkLEVBQXlCLFFBQVEsQ0FBQyxLQUFULENBQWUsV0FBeEMsQ0FBTjtBQUNoQyxRQUFJLFFBQVEsQ0FBQyxLQUFULENBQWUsT0FBbkIsRUFBNEIsTUFBTSxDQUFDLGtGQUFZLENBQUMsS0FBZCxFQUFxQixRQUFRLENBQUMsS0FBVCxDQUFlLE9BQXBDLENBQU47QUFDL0I7QUFDSixDQW5DRDs7QUFxQ0EsSUFBTSxjQUFjLEdBQUcsVUFBdUIsUUFBdkIsRUFBOEMsSUFBOUMsRUFBdUQsTUFBdkQsRUFBK0UsU0FBL0UsRUFBNEc7QUFDL0g7O0FBQ0E7QUFFQSxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHlGQUF0RCxDQUFILEVBQXNFO0FBRXRFLFNBQU8sQ0FBQyxHQUFSLENBQVksZ0JBQVo7O0FBQ0EsTUFBSSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQix1R0FBYyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsUUFBUSxDQUFDLEtBQVQsQ0FBZSxLQUE3QixFQUFvQyxTQUFTLENBQUMsS0FBOUMsQ0FBZDtBQUNILEdBRkQsTUFFTztBQUNILFFBQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFSLEdBQWEsSUFBSSxDQUFDLEdBQXpCLEVBQThCLElBQTlCLENBQW1DLElBQW5DLENBQWY7QUFDQSxRQUFJLFFBQVEsQ0FBQyxLQUFULENBQWUsS0FBbkIsRUFBMEIsTUFBTSxDQUFDLEtBQUQsRUFBUSxRQUFRLENBQUMsS0FBVCxDQUFlLEtBQXZCLENBQU47QUFDN0I7QUFFSixDQWREOztBQWVBLElBQU0sUUFBUSxHQUFHLFVBQWlCLFFBQWpCLEVBQXdDLElBQXhDLEVBQWlELE1BQWpELEVBQXlFLFNBQXpFLEVBQXNHO0FBRW5ILE1BQUcsRUFBRSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsZUFBb0QsbUZBQXRELENBQUgsRUFBZ0U7QUFFaEUsU0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaOztBQUNBLE1BQUksTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDakIsdUdBQWMsQ0FBQyxJQUFELEVBQU8sZUFBUCxFQUF3QixRQUFRLENBQUMsS0FBVCxDQUFlLGVBQXZDLEVBQXdELFNBQVMsQ0FBQyxlQUFsRSxDQUFkO0FBQ0EsdUdBQWMsQ0FBQyxJQUFELEVBQU8sYUFBUCxFQUFzQixRQUFRLENBQUMsS0FBVCxDQUFlLGFBQXJDLEVBQW9ELFNBQVMsQ0FBQyxhQUE5RCxDQUFkO0FBQ0EsdUdBQWMsQ0FBQyxJQUFELEVBQU8sZ0JBQVAsRUFBeUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxnQkFBeEMsRUFBMEQsU0FBUyxDQUFDLGdCQUFwRSxDQUFkO0FBQ0EsdUdBQWMsQ0FBQyxJQUFELEVBQU8sY0FBUCxFQUF1QixRQUFRLENBQUMsS0FBVCxDQUFlLGNBQXRDLEVBQXNELFNBQVMsQ0FBQyxjQUFoRSxDQUFkO0FBQ0gsR0FMRCxNQUtPO0FBQ0gsUUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQVIsR0FBYSxJQUFJLENBQUMsR0FBekIsRUFBOEIsSUFBOUIsQ0FBbUMsSUFBbkMsQ0FBZjtBQUVBLFFBQUksUUFBUSxDQUFDLEtBQVQsQ0FBZSxlQUFuQixFQUFvQyxNQUFNLENBQUMsZUFBRCxFQUFrQixRQUFRLENBQUMsS0FBVCxDQUFlLGVBQWpDLENBQU47QUFDcEMsUUFBSSxRQUFRLENBQUMsS0FBVCxDQUFlLGFBQW5CLEVBQWtDLE1BQU0sQ0FBQyxhQUFELEVBQWdCLFFBQVEsQ0FBQyxLQUFULENBQWUsYUFBL0IsQ0FBTjtBQUNsQyxRQUFJLFFBQVEsQ0FBQyxLQUFULENBQWUsZ0JBQW5CLEVBQXFDLE1BQU0sQ0FBQyxnQkFBRCxFQUFtQixRQUFRLENBQUMsS0FBVCxDQUFlLGdCQUFsQyxDQUFOO0FBQ3JDLFFBQUksUUFBUSxDQUFDLEtBQVQsQ0FBZSxjQUFuQixFQUFtQyxNQUFNLENBQUMsY0FBRCxFQUFpQixRQUFRLENBQUMsS0FBVCxDQUFlLGNBQWhDLENBQU47QUFDdEM7QUFDSixDQWxCRDs7QUFvQkEsSUFBTSxvQkFBb0IsR0FBRyxVQUE2QixRQUE3QixFQUFvRCxJQUFwRCxFQUE2RCxNQUE3RCxFQUFxRixTQUFyRixFQUFrSDtBQUUzSSxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHlGQUF0RCxDQUFILEVBQXNFO0FBRXRFLFNBQU8sQ0FBQyxHQUFSLENBQVksc0JBQVo7O0FBQ0EsTUFBSSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQix1R0FBYyxDQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsUUFBUSxDQUFDLEtBQVQsQ0FBZSxNQUE5QixFQUFzQyxTQUFTLENBQUMsTUFBaEQsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUEvQixFQUF3QyxTQUFTLENBQUMsT0FBbEQsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLFlBQVAsRUFBcUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxZQUFwQyxFQUFrRCxTQUFTLENBQUMsWUFBNUQsQ0FBZDtBQUNILEdBSkQsTUFJTztBQUNILFFBQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFSLEdBQWEsSUFBSSxDQUFDLEdBQXpCLEVBQThCLElBQTlCLENBQW1DLElBQW5DLENBQWY7QUFDQSxRQUFJLFFBQVEsQ0FBQyxLQUFULENBQWUsTUFBbkIsRUFBMkIsTUFBTSxDQUFDLE1BQUQsRUFBUyxRQUFRLENBQUMsS0FBVCxDQUFlLE1BQXhCLENBQU47QUFDM0IsUUFBSSxRQUFRLENBQUMsS0FBVCxDQUFlLE9BQW5CLEVBQTRCLE1BQU0sQ0FBQyxPQUFELEVBQVUsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUF6QixDQUFOO0FBQzVCLFFBQUksUUFBUSxDQUFDLEtBQVQsQ0FBZSxZQUFuQixFQUFpQyxNQUFNLENBQUMsWUFBRCxFQUFlLFFBQVEsQ0FBQyxLQUFULENBQWUsWUFBOUIsQ0FBTjtBQUNwQztBQUNKLENBZkQ7O0FBZ0JBLElBQU0sU0FBUyxHQUFHLFVBQWtCLFFBQWxCLEVBQXlDLElBQXpDLEVBQWtELE1BQWxELEVBQTBFLFNBQTFFLEVBQXVHO0FBRXJILE1BQUcsRUFBRSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsZUFBb0Qsb0ZBQXRELENBQUgsRUFBaUU7QUFFakUsU0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaOztBQUNBLE1BQUksTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDakIsdUdBQWMsQ0FBQyxJQUFELEVBQU8sZ0JBQVAsRUFBeUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxnQkFBeEMsRUFBMEQsU0FBUyxDQUFDLGdCQUFwRSxDQUFkO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsUUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQVIsR0FBYSxJQUFJLENBQUMsR0FBekIsRUFBOEIsSUFBOUIsQ0FBbUMsSUFBbkMsQ0FBZjtBQUVBLFFBQUksUUFBUSxDQUFDLEtBQVQsQ0FBZSxnQkFBbkIsRUFBcUMsTUFBTSxDQUFDLGdCQUFELEVBQW1CLFFBQVEsQ0FBQyxLQUFULENBQWUsZ0JBQWxDLENBQU47QUFDeEM7QUFDSixDQVpEOztBQWFBLElBQU0sZUFBZSxHQUFHLFVBQXdCLFFBQXhCLEVBQStDLElBQS9DLEVBQXdELE1BQXhELEVBQWdGLFNBQWhGLEVBQTZHO0FBRWpJLE1BQUcsRUFBRSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsZUFBb0QsMEZBQXRELENBQUgsRUFBdUU7QUFFdkUsU0FBTyxDQUFDLEdBQVIsQ0FBWSxpQkFBWjs7QUFDQSxNQUFJLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ2pCLHVHQUFjLENBQUMsSUFBRCxFQUFPLGNBQVAsRUFBdUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxjQUF0QyxFQUFzRCxTQUFTLENBQUMsY0FBaEUsQ0FBZDtBQUNILEdBRkQsTUFFTztBQUNILFFBQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFSLEdBQWEsSUFBSSxDQUFDLEdBQXpCLEVBQThCLElBQTlCLENBQW1DLElBQW5DLENBQWY7QUFDQSxRQUFJLFFBQVEsQ0FBQyxLQUFULENBQWUsY0FBbkIsRUFBbUMsTUFBTSxDQUFDLGNBQUQsRUFBaUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxjQUFoQyxDQUFOO0FBQ3RDO0FBQ0osQ0FYRDs7QUFZQSxJQUFNLGNBQWMsR0FBRyxVQUF1QixRQUF2QixFQUE4QyxJQUE5QyxFQUF1RCxNQUF2RCxFQUErRSxTQUEvRSxFQUE0RztBQUUvSCxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHlGQUF0RCxDQUFILEVBQXNFO0FBRXRFLFNBQU8sQ0FBQyxHQUFSLENBQVksZ0JBQVo7O0FBQ0EsTUFBSSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQix1R0FBYyxDQUFDLElBQUQsRUFBTyxRQUFQLEVBQWlCLEtBQUksQ0FBQyxLQUFMLENBQVcsUUFBNUIsRUFBc0MsU0FBUyxDQUFDLFFBQWhELENBQWQ7QUFDSCxHQUZELE1BRU87QUFDSCxRQUFNLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBUixHQUFhLElBQUksQ0FBQyxHQUF6QixFQUE4QixJQUE5QixDQUFtQyxJQUFuQyxDQUFmO0FBRUEsUUFBSSxRQUFRLENBQUMsS0FBVCxDQUFlLFFBQW5CLEVBQTZCLE1BQU0sQ0FBQyxRQUFELEVBQVcsUUFBUSxDQUFDLEtBQVQsQ0FBZSxRQUExQixDQUFOO0FBQ2hDO0FBQ0osQ0FaRDs7QUFhQSxJQUFNLGFBQWEsR0FBRyxVQUFzQixRQUF0QixFQUE2QyxJQUE3QyxFQUFzRCxNQUF0RCxFQUE4RSxTQUE5RSxFQUEyRztBQUU3SCxNQUFHLEVBQUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLGVBQXRCLGVBQW9ELHdGQUF0RCxDQUFILEVBQXFFO0FBRXJFLFNBQU8sQ0FBQyxHQUFSLENBQVksZUFBWjs7QUFDQSxNQUFJLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ2pCLHVHQUFjLENBQUMsSUFBRCxFQUFPLFFBQVAsRUFBaUIsUUFBUSxDQUFDLEtBQVQsQ0FBZSxRQUFoQyxFQUEwQyxTQUFTLENBQUMsUUFBcEQsQ0FBZDtBQUNBLHVHQUFjLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUEvQixFQUF3QyxTQUFTLENBQUMsT0FBbEQsQ0FBZDtBQUNILEdBSEQsTUFHTztBQUNILFFBQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFSLEdBQWEsSUFBSSxDQUFDLEdBQXpCLEVBQThCLElBQTlCLENBQW1DLElBQW5DLENBQWY7QUFFQSxRQUFJLFFBQVEsQ0FBQyxLQUFULENBQWUsUUFBbkIsRUFBNkIsTUFBTSxDQUFDLFFBQUQsRUFBVyxRQUFRLENBQUMsS0FBVCxDQUFlLFFBQTFCLENBQU47QUFDN0IsUUFBSSxRQUFRLENBQUMsS0FBVCxDQUFlLE9BQW5CLEVBQTRCLE1BQU0sQ0FBQyxPQUFELEVBQVUsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUF6QixDQUFOO0FBQy9CO0FBQ0osQ0FkRDs7QUFlQSxJQUFNLGdCQUFnQixHQUFHLFVBQXlCLFFBQXpCLEVBQWdELElBQWhELEVBQXlELE1BQXpELEVBQWlGLFNBQWpGLEVBQThHO0FBRW5JLE1BQUcsRUFBRSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsZUFBdEIsZUFBb0QsMkZBQXRELENBQUgsRUFBd0U7QUFFeEUsU0FBTyxDQUFDLEdBQVIsQ0FBWSxrQkFBWjs7QUFDQSxNQUFJLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ2pCLHVHQUFjLENBQ1YsSUFEVSxFQUVWLHNCQUZVLEVBR1YsUUFBUSxDQUFDLEtBQVQsQ0FBZSxzQkFITCxFQUlWLFNBQVMsQ0FBQyxzQkFKQSxDQUFkO0FBTUgsR0FQRCxNQU9PO0FBQ0gsUUFBTSxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQVIsR0FBYSxJQUFJLENBQUMsR0FBekIsRUFBOEIsSUFBOUIsQ0FBbUMsSUFBbkMsQ0FBZjtBQUVBLFFBQUksUUFBUSxDQUFDLEtBQVQsQ0FBZSxzQkFBbkIsRUFBMkMsTUFBTSxDQUFDLHNCQUFELEVBQXlCLFFBQVEsQ0FBQyxLQUFULENBQWUsc0JBQXhDLENBQU47QUFDOUM7QUFDSixDQWpCRDs7QUFrQkEsSUFBTSxXQUFXLEdBQUcsVUFBeUIsUUFBekIsRUFBZ0QsSUFBaEQsRUFBeUQsTUFBekQsRUFBaUYsU0FBakYsRUFBOEc7QUFFOUgsTUFBRyxFQUFFLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQUFzQixlQUF0QixlQUFvRCxzRkFBdEQsQ0FBSCxFQUFtRTtBQUVuRSxTQUFPLENBQUMsR0FBUixDQUFZLGFBQVo7O0FBQ0EsTUFBSSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQix1R0FBYyxDQUNWLElBRFUsRUFFVixzQkFGVSxFQUdWLFFBQVEsQ0FBQyxLQUFULENBQWUsc0JBSEwsRUFJVixTQUFTLENBQUMsc0JBSkEsQ0FBZDtBQU1ILEdBUEQsTUFPTztBQUNILFFBQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFSLEdBQWEsSUFBSSxDQUFDLEdBQXpCLEVBQThCLElBQTlCLENBQW1DLElBQW5DLENBQWY7QUFFQSxRQUFJLFFBQVEsQ0FBQyxLQUFULENBQWUsc0JBQW5CLEVBQTJDLE1BQU0sQ0FBQyxzQkFBRCxFQUF5QixRQUFRLENBQUMsS0FBVCxDQUFlLHNCQUF4QyxDQUFOO0FBQzlDO0FBQ0osQ0FqQkQ7Ozs7Ozs7OztBQ3JOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSU0sU0FBVSxVQUFWLENBQTJDLFVBQTNDLEVBQTBELElBQTFELEVBQXVFO0FBRXpFLE1BQUcsQ0FBQyxJQUFKLEVBQVU7QUFDTixRQUFJLEdBQUcsb0ZBQW9CLENBQUMsc0VBQU0sQ0FBQyxVQUFELENBQVAsQ0FBM0I7QUFDSDs7QUFDRCxTQUFPLENBQUMsR0FBUixDQUFZLGlCQUFpQixJQUE3QjtBQUNBLGlHQUFRLENBQUMsSUFBRCxFQUFPO0FBQ1osV0FBTyxVQUFQO0FBQ0YsR0FGTyxDQUFSLENBTnlFLENBU3pFOztBQUNBO0FBQUE7QUFBQTtBQUF1Qjs7QUFBdkI7QUFBQSw0RUFFSTs7QUFDQTs7Ozs7Ozs7O0FBT21CLG9CQUE0QixpREFBNUI7O0FBQ1QsNEJBQWdCO0FBQ3RCLGVBQU8sQ0FBQyxLQUFJLENBQUMsS0FBTCxDQUFXLFlBQVgsSUFBMkIsS0FBSSxDQUFDLEtBQWpDLEVBQXdDLE9BQS9DO0FBQ0gsT0FGUztBQUdWOzs7Ozs7QUFJVSxvQ0FBd0IsVUFBQyxNQUFELEVBQXlCLFNBQXpCLEVBQXNEO0FBQ3BGLG9IQUF5QixDQUFDLEtBQUQsRUFBTyxNQUFQLEVBQWUsU0FBZixDQUF6QjtBQUNILE9BRlM7QUFHVjs7Ozs7O0FBS1UsOEJBQWtCLFVBQUMsSUFBRCxFQUFVLE1BQVYsRUFBa0MsU0FBbEMsRUFBK0Q7QUFDdkYsdUdBQW1CLENBQUMsS0FBRCxFQUFPLElBQVAsRUFBYSxNQUFiLEVBQXFCLFNBQXJCLENBQW5CO0FBQ0gsT0FGUzs7QUFHVixnQ0FBb0I7QUFDaEIsaUhBQXFCLENBQUMsS0FBRCxDQUFyQjtBQUNILE9BRkQ7QUFHQTs7Ozs7OztBQUtBLG9DQUF3QixVQUFDLFNBQUQsRUFBK0IsU0FBL0IsRUFBNkM7QUFDakUsZUFBTyxpSEFBeUIsQ0FBQyxLQUFELEVBQU8sU0FBUCxFQUFrQixTQUFsQixDQUFoQztBQUNILE9BRkQ7O0FBR0EsbUNBQXVCO0FBQ25CO0FBQ0EsdUhBQXdCLENBQUMsS0FBRCxDQUF4QjtBQUNILE9BSEQ7O0FBS0EscUJBQVM7QUFDTCxlQUFPLG1GQUFVLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYSxVQUFiLENBQWpCO0FBQ0gsT0FGRDs7QUFLQSw0Q0FBaUMsVUFBQyxjQUFELEVBQW9CLEtBQXBCLEVBQWtHO0FBQy9ILGVBQU8sb0pBQWlDLENBQUMsS0FBRCxFQUFPLGNBQVAsRUFBdUIsS0FBdkIsQ0FBeEM7QUFDSCxPQUZEOztBQUdBLDRDQUFpQyxVQUFDLGNBQUQsRUFBb0IsS0FBcEIsRUFBa0c7QUFDL0gsZUFBTyxvSkFBaUMsQ0FBQyxLQUFELEVBQU8sY0FBUCxFQUF1QixLQUF2QixDQUF4QztBQUNILE9BRkQ7O0FBR0EsNkNBQWlDLFVBQUMsY0FBRCxFQUFvQixLQUFwQixFQUFvRyxXQUFwRyxFQUF3TDtBQUNyTixlQUFPLHVKQUFrQyxDQUFDLEtBQUQsRUFBTyxjQUFQLEVBQXVCLEtBQXZCLEVBQThCLFdBQTlCLENBQXpDO0FBQ0gsT0FGRDtBQUlBOzs7QUFDaUIsMkJBQWUsVUFBQyxJQUFELEVBQWdCO0FBQzVDLHlHQUFnQixDQUFDLEtBQUQsRUFBTyxJQUFQLENBQWhCO0FBQ0gsT0FGZ0I7O0FBR0Esb0NBQXdCLFVBQUMsSUFBRCxFQUFnQjtBQUNyRCx5SEFBdUIsQ0FBQyxLQUFELEVBQU8sSUFBUCxDQUF2QjtBQUNILE9BRmdCOztBQUdBLDJCQUFlLFVBQUMsSUFBRCxFQUFnQjtBQUM1Qyx5R0FBZ0IsQ0FBQyxLQUFELEVBQU8sSUFBUCxDQUFoQjtBQUNILE9BRmdCOztBQUdBLDRCQUFnQixVQUFDLElBQUQsRUFBZ0I7QUFDN0MsMkdBQWlCLENBQUMsS0FBRCxFQUFPLElBQVAsQ0FBakI7QUFDSCxPQUZnQjs7QUFHQSx1QkFBVyxVQUFDLElBQUQsRUFBZ0I7QUFDeEMsaUdBQVksQ0FBQyxLQUFELEVBQU8sSUFBUCxDQUFaO0FBQ0gsT0FGZ0I7OztBQUlwQjs7QUE1RVUsZ0NBQW1CLENBQW5CO0FBNEVYO0FBQUMsR0E3RUQsQ0FBdUIsK0NBQXZCOztBQThFQSxTQUFPLFFBQVAsQ0F4RnlFLENBeUZ4RTtBQUNKLEMsQ0FHRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDL0lBLDJCQUEyQixtQkFBTyxDQUFDLGdEQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUywwUkFBMFIsY0FBYyxXQUFXLHlCQUF5QixtQkFBbUIsZ0JBQWdCLEVBQUUsaUJBQWlCLDJCQUEyQixFQUFFLGNBQWMsZ0JBQWdCLEVBQUUsaUJBQWlCLDJCQUEyQixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLGlCQUFpQixtQkFBbUIsRUFBRSxvQkFBb0IsOEJBQThCLEVBQUUsY0FBYyxtQkFBbUIsRUFBRSxpQkFBaUIsOEJBQThCLEVBQUUsZUFBZSxtQkFBbUIsRUFBRSxrQkFBa0IsOEJBQThCLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxnQkFBZ0IsOEJBQThCLEVBQUUsbUJBQW1CLG1CQUFtQixFQUFFLHNCQUFzQiw4QkFBOEIsRUFBRSxrQkFBa0IsbUJBQW1CLEVBQUUscUJBQXFCLDhCQUE4QixFQUFFLGVBQWUsbUJBQW1CLEVBQUUsa0JBQWtCLDhCQUE4QixFQUFFLGNBQWMsbUJBQW1CLEVBQUUsaUJBQWlCLDhCQUE4QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLGVBQWUsbUJBQW1CLEVBQUUsa0JBQWtCLDhCQUE4QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLFlBQVksbUJBQW1CLEVBQUUsZUFBZSw4QkFBOEIsRUFBRSxpQ0FBaUMsZ0JBQWdCLEVBQUUsWUFBWSxlQUFlLEVBQUUsYUFBYSxpQkFBaUIsRUFBRSxZQUFZLGdCQUFnQixFQUFFLHNGQUFzRixTQUFTLE9BQU8sYUFBYSxPQUFPLGVBQWUsT0FBTyxnQkFBZ0IsT0FBTyxjQUFjLE9BQU8sZUFBZSxjQUFjLE9BQU8sYUFBYSxnQkFBZ0IsMEdBQTBHLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIs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LEtBQWY7QUFPQSxjQUFVLENBQUM7QUFDUDs7Ozs7Ozs7QUFPQTs7Ozs7OztBQVFILEtBaEJTLEVBZ0JSLElBaEJRLENBQVY7QUFpQkgsR0E1QkQ7O0FBOEJBO0FBQ1k7QUFFUixXQUNJLG9EQUFDLHlEQUFELEVBQU87QUFBQyxTQUFHLEVBQUU7QUFBTixLQUFQLEVBQ0ksb0RBQUMsd0RBQUQsRUFBTTtBQUFDLFNBQUcsRUFBRSxLQUFLLE9BQVg7QUFBb0IsZUFBUyxFQUFDLE1BQTlCO0FBQXFDLHFCQUFlLEVBQUU7QUFBdEQsS0FBTixFQUNJLG9EQUFDLDZEQUFELEVBQVcsSUFBWCxFQUNJLG9EQUFDLDhEQUFELEVBQVk7QUFBQyxVQUFJLEVBQUUsZ0JBQVA7QUFBeUIsV0FBSyxFQUFFO0FBQ3hDLGVBQU8sQ0FBQyxHQUFSLENBQVksS0FBWjtBQUNIO0FBRlcsS0FBWixDQURKLENBREosRUFPSSxvREFBQywrREFBRCxFQUFhLElBQWIsRUFHSSxvREFBQywwREFBRCxFQUFRO0FBQUMsY0FBUSxFQUFFLFVBQUMsT0FBRCxFQUFRO0FBQ3ZCLGVBQU8sQ0FBQyxHQUFSLENBQVksY0FBYyxPQUExQjtBQUNILE9BRk87QUFHUixXQUFLLEVBQUU7QUFDSCxlQUFPLENBQUMsR0FBUixDQUFZLEtBQVo7QUFDSDtBQUxPLEtBQVIsQ0FISixDQVBKLENBREosQ0FESjtBQXVCSCxHQTFCRDs7QUEyQko7QUFBQyxDQTlERCxDQUEyQiwrQ0FBM0I7QUFnRUE7Ozs7Ozs7Ozs7O0FBYUE7OztBQUNlLGdJQUFHLENBQUMsWUFBRCxDQUFsQixFLENBQWtDLDJFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vUmVhY3RpZmllZC9FeHRyYVByb3BzLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0V4dHJhUHJvcHMudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkSW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmVJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ0luc2VydEJlZm9yZUltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnUmVtb3ZlQ2hpbGRJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0N1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyL19fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9IZWxwZXJzLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL0hlbHBlcnMudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50RGlkTW91bnRJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudERpZE1vdW50SW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9jb21wb25lbnRXaWxsVW5tb3VudEltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3QvY29tcG9uZW50V2lsbFVubW91bnRJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L3JlbmRlckltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vUmVhY3QvcmVuZGVySW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9SZWFjdC9zaG91bGRDb21wb25lbnRVcGRhdGVJbXBsLnRzXCI6IFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1JlYWN0L3Nob3VsZENvbXBvbmVudFVwZGF0ZUltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVHlwZXMudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVHlwZXMudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uRGF0YUNoYW5nZUltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uRGF0YUNoYW5nZUltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uU2VsZWN0ZWRJbmRleENoYW5nZUltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uU2VsZWN0ZWRJbmRleENoYW5nZUltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVGV4dENoYW5nZUltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVGV4dENoYW5nZUltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVG9nZ2xlSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25Ub2dnbGVJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblZhbHVlQ2hhbmdlSW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25WYWx1ZUNoYW5nZUltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vZ2V0Q3VycmVudFJlZkltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vZ2V0Q3VycmVudFJlZkltcGwudHNcIixcblx0XCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSGVscGVySW1wbC50c1wiOiBcIi4vUmVhY3RpZmllZC9JbXBsZW1lbnRhdGlvbi91cGRhdGVMaXN0ZW5lcnNIZWxwZXJJbXBsLnRzXCIsXG5cdFwiLi9SZWFjdGlmaWVkL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGwudHNcIjogXCIuL1JlYWN0aWZpZWQvSW1wbGVtZW50YXRpb24vdXBkYXRlTGlzdGVuZXJzSW1wbC50c1wiLFxuXHRcIi4vUmVhY3RpZmllZC9SZWFjdGlmaWVkLnRzXCI6IFwiLi9SZWFjdGlmaWVkL1JlYWN0aWZpZWQudHNcIixcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAudHNcIixcblx0XCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIjogXCIuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLnNjc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKilcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiXG5pbXBvcnQgeyBFdmVudERhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBEb2NrIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9kb2NrLWxheW91dC9kb2NrLWxheW91dFwiO1xuaW1wb3J0IHsgU2hvd25Nb2RhbGx5RGF0YX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3L3ZpZXdcIjtcbmltcG9ydCB7XG4gICAgR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBHZXN0dXJlVHlwZXMsXG4gICAgVG91Y2hHZXN0dXJlRXZlbnREYXRhLFxuICAgIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSxcbiAgICBSb3RhdGlvbkdlc3R1cmVFdmVudERhdGEsXG4gICAgUGluY2hHZXN0dXJlRXZlbnREYXRhLFxuICAgIFBhbkdlc3R1cmVFdmVudERhdGEsXG59IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzXCI7XG5cbmltcG9ydCB7IFxuICAgIE9ic2VydmFibGUsXG4gICAgVmlld0Jhc2UsXG4gICAgVmlldyxcbiAgICBQYWdlLFxuICAgIEFjdGlvbkl0ZW0sXG4gICAgRGF0ZVBpY2tlcixcbiAgICBFZGl0YWJsZVRleHRCYXNlLFxuICAgIEZyYW1lLFxuICAgIEdyaWRMYXlvdXQsXG4gICAgSHRtbFZpZXcsXG4gICAgTGlzdFBpY2tlcixcbiAgICBTd2l0Y2gsXG4gICAgU2Nyb2xsVmlldyxcbiAgICBTZWFyY2hCYXIsXG4gICAgU2VnbWVudGVkQmFyLFxuICAgIFNsaWRlcixcbiAgICBUYWJWaWV3XG59IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHsgSXRlbVNwZWMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0L2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBJdGVtc1NvdXJjZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBDcmVhdGVWaWV3RXZlbnREYXRhLCBQbGFjZWhvbGRlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyXCI7XG5pbXBvcnQgeyBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlldy9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyL3NlZ21lbnRlZC1iYXJcIjtcblxuXG4vLyBleHBvcnQgdHlwZSBFeHRyYVByb3BzPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiA9IE9ic2VydmFibGVQcm9wczxUPiAmIFZpZXdCYXNlUHJvcHM8VD4gJiBWaWV3UHJvcHM8VD4gJiBQYWdlUHJvcHM8VD4gJiBBY3Rpb25JdGVtUHJvcHM8VD47XG5leHBvcnQgdHlwZSBFeHRyYVByb3BzPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPiA9IE9ic2VydmFibGVQcm9wczxUPiAmIFZpZXdCYXNlUHJvcHM8VD4gJiBWaWV3UHJvcHM8VD5cbiAmIFBhZ2VQcm9wczxUPiAmIEFjdGlvbkl0ZW1Qcm9wczxUPiAmIERhdGVQaWNrZXJQcm9wczxUPiAmIEVkaXRhYmxlVGV4dEJhc2VQcm9wczxUPiAmIEZyYW1lUHJvcHM8VD5cbiAmIEdyaWRMYXlvdXRQcm9wczxUPiAmIEh0bWxWaWV3UHJvcHM8VD4gJiBMaXN0UGlja2VyUHJvcHM8VD4gJiBQbGFjZWhvbGRlclByb3BzPFQ+ICYgU2Nyb2xsVmlld1Byb3BzPFQ+XG4gJiBTZWFyY2hCYXJQcm9wczxUPiAmIFNlZ21lbnRlZEJhclByb3BzPFQ+ICYgU2xpZGVyUHJvcHM8VD4gJiBTd2l0Y2hQcm9wczxUPiAmIFRhYlZpZXdQcm9wczxUPjtcblxuLy8gdXNpbmcgY29uZGl0aW9uYWwgc28gdGhhdCBSTlNCdXR0b24gZG9uJ3QgZ2V0IG5hdmlnYXRlZFRvIChQYWdlUHJvcHMpIFxuXG5cbi8qIFxuIFNob3VsZCBnZXQgT2JzZXJ2YWJsZVByb3BzXG4gd2l0aCBnZXR0ZXIvb25kaXRpb25hbCB0eXBpbmcgLSBzaW5jZSB0aGUgbnMgY29tcG9uZW50XG4gbXVzdCBiZSBvZiB0eXBlIE9ic2VydmFibGUuIHVzaW5nIGJlbG93IGNvbmlkdGlvbmFsIHR5cGVcbiBhbHNvIGNhdXNlIGFuIHR5cGUgZXJyb3IgaW4gZ2V0Q3VycmVudFJlZkltcGxcbiAqL1xuLy8gdHlwZSBPYnNlcnZhYmxlUHJvcHM8VCBleHRlbmRzIE9ic2VydmFibGU+ID0gVCBleHRlbmRzIE9ic2VydmFibGUgPyBJT2JzZXJ2YWJsZTxUPiA6IEVtcHR5XG5cbmludGVyZmFjZSBPYnNlcnZhYmxlUHJvcHM8VCBleHRlbmRzIE9ic2VydmFibGU+IHtcbiAgICBlbGVtZW50S2V5Pzogc3RyaW5nIC8vIGFkZGVkXG4gICAgZm9yd2FyZGVkUmVmPzogUmVhY3QuUmVmT2JqZWN0PFQ+O1xuICAgIG9uUHJvcGVydHlDaGFuZ2U/OiAoZGF0YTogRXZlbnREYXRhKSA9PiB2b2lkO1xufVxuXG4vKiByZXN0IGlzIHVzaW5nIGNvbmRpdGlvbmFsIHR5cGUgXCJnZXR0ZXJzXCIgc28gdGhhdCBidXR0b24gZG9uJ3QgYWNjZXNzIGdldCBwYWdlJ3MgcHJvcHMgZXRjKi9cblxudHlwZSBWaWV3QmFzZVByb3BzPFQ+ID0gVCBleHRlbmRzIFZpZXdCYXNlID8gSVZpZXdCYXNlIDogRW1wdHlcbmludGVyZmFjZSBJVmlld0Jhc2Uge1xuICAgIF9fcm5zX19ub2RlVHJlZVJvbGU/OiBzdHJpbmc7XG4gICAgZG9jaz86IERvY2s7XG59XG5cbnR5cGUgVmlld1Byb3BzPFQ+ID0gVCBleHRlbmRzIFZpZXcgPyBJVmlldyA6IEVtcHR5O1xuaW50ZXJmYWNlIElWaWV3IHtcbiAgICAvKiBGcm9tIFZpZXcuICovXG4gICAgb25Mb2FkZWQ/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uVW5sb2FkZWQ/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uQW5kcm9pZEJhY2tQcmVzc2VkPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblNob3dpbmdNb2RhbGx5PzogKGFyZ3M6IFNob3duTW9kYWxseURhdGEpID0+IHZvaWQ7XG4gICAgb25TaG93bk1vZGFsbHk/OiAoYXJnczogU2hvd25Nb2RhbGx5RGF0YSkgPT4gdm9pZDtcblxuICAgIC8qIFRoZSBnZXN0dXJlIGhhbmRsZXJzLiAqL1xuICAgIG9uVGFwPzogKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Eb3VibGVUYXA/OiAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblBpbmNoPzogKGFyZ3M6IFBpbmNoR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbiAgICBvblBhbj86IChhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uU3dpcGU/OiAoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uUm90YXRpb24/OiAoYXJnczogUm90YXRpb25HZXN0dXJlRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uTG9uZ1ByZXNzPzogKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Ub3VjaD86IChhcmdzOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IHZvaWQ7XG5cbiAgICAvKiBUaGVzZSBhcmUgdG8gYmUgb3ZlcnJpZGRlbiBpbiBzdWJjbGFzc2VzIG9mIFZpZXcsIHNvIHVubGlrZWx5IHRvIGJlIGFwcHJvcHJpYXRlLiAqL1xuICAgIC8vIG9uTGF5b3V0PzogKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIC8vIG9uTWVhc3VyZT86ICh3aWR0aE1lYXN1cmVTcGVjOiBudW1iZXIsIGhlaWdodE1lYXN1cmVTcGVjOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbnR5cGUgUGFnZVByb3BzPFQ+ID0gVCBleHRlbmRzIFBhZ2UgPyBJUGFnZSA6IEVtcHR5XG5pbnRlcmZhY2UgSVBhZ2Uge1xuICAgIG9uTmF2aWdhdGluZ1RvPzogUGFnZU5hdmlnYXRpb25FdmVudEhhbmRsZXI7XG4gICAgb25OYXZpZ2F0ZWRUbz86IFBhZ2VOYXZpZ2F0aW9uRXZlbnRIYW5kbGVyO1xuICAgIG9uTmF2aWdhdGluZ0Zyb20/OiBQYWdlTmF2aWdhdGlvbkV2ZW50SGFuZGxlcjtcbiAgICBvbk5hdmlnYXRlZEZyb20/OiBQYWdlTmF2aWdhdGlvbkV2ZW50SGFuZGxlcjtcbn1cblxudHlwZSBBY3Rpb25JdGVtUHJvcHM8VD4gPSBUIGV4dGVuZHMgQWN0aW9uSXRlbSA/IElBY3Rpb25JdGVtIDogRW1wdHlcbmludGVyZmFjZSBJQWN0aW9uSXRlbSB7XG4gICAgb25UYXA/OiAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkgPT4gdm9pZDtcbn1cblxudHlwZSBEYXRlUGlja2VyUHJvcHM8VD4gPSBUIGV4dGVuZHMgRGF0ZVBpY2tlciA/IElEYXRlUGlja2VyIDogRW1wdHlcbmludGVyZmFjZSBJRGF0ZVBpY2tlciB7XG4gICAgb25EYXRlQ2hhbmdlPzogKGRhdGU6IERhdGUpID0+IHZvaWQ7XG59XG50eXBlIEVkaXRhYmxlVGV4dEJhc2VQcm9wczxUPj0gVCBleHRlbmRzIEVkaXRhYmxlVGV4dEJhc2UgPyBJRWRpdGFibGVUZXh0QmFzZSA6IEVtcHR5XG5pbnRlcmZhY2UgSUVkaXRhYmxlVGV4dEJhc2Uge1xuICAgIG9uQmx1cj86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25Gb2N1cz86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG4gICAgb25UZXh0Q2hhbmdlPzogKGFyZ3M6IEV2ZW50RGF0YSkgPT4gdm9pZDtcbn1cbnR5cGUgRnJhbWVQcm9wczxUPiA9IFQgZXh0ZW5kcyBGcmFtZSA/IElGcmFtZSA6IEVtcHR5O1xuaW50ZXJmYWNlIElGcmFtZSB7XG4gICAgb25PcHRpb25TZWxlY3RlZD86IChhcmdzOiBFdmVudERhdGEpID0+IHZvaWQ7XG59XG50eXBlIEdyaWRMYXlvdXRQcm9wczxUPiA9IFQgZXh0ZW5kcyBHcmlkTGF5b3V0ID8gSUdyaWRMYXlvdXQgOiBFbXB0eTtcbmludGVyZmFjZSBJR3JpZExheW91dCB7XG4gICAgLyogRWFjaCBjb25zdGl0dWVudCB2aWV3IHBhc3NlZCBpbiBtdXN0IGJlYXIgXCJyb3dcIiBhbmQgXCJjb2xcIiBQcm9wcy4gKi9cbiAgICAgICAgLyogcm93cyBhbmQgY29sdW1ucyB3aWxsIGJlIGFkZGVkIGluIG9yZGVyIHNwZWNpZmllZC4gKi9cbiAgICByb3dzPzogSXRlbVNwZWNbXTtcbiAgICBjb2x1bW5zPzogSXRlbVNwZWNbXTtcbn1cblxudHlwZSBIdG1sVmlld1Byb3BzPFQ+ID0gVCBleHRlbmRzIEh0bWxWaWV3ID8gSUh0bWxWaWV3IDogRW1wdHlcbmludGVyZmFjZSBJSHRtbFZpZXcge1xuICAgIGh0bWw6IHN0cmluZztcbn1cblxudHlwZSBMaXN0UGlja2VyUHJvcHM8VD4gPSBUIGV4dGVuZHMgTGlzdFBpY2tlciA/IElMaXN0UGlja2VyIDogRW1wdHk7XG5pbnRlcmZhY2UgSUxpc3RQaWNrZXIge1xuICAgIGl0ZW1zOiBhbnlbXSB8IEl0ZW1zU291cmNlO1xuICAgIG9uU2VsZWN0ZWRJbmRleENoYW5nZT86IChzZWxlY3RlZEluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbnR5cGUgUGxhY2Vob2xkZXJQcm9wczxUPiA9IFQgZXh0ZW5kcyBQbGFjZWhvbGRlciA/IElQbGFjZWhvbGRlciA6IEVtcHR5XG5pbnRlcmZhY2UgSVBsYWNlaG9sZGVyIHtcbiAgICBvbkNyZWF0aW5nVmlldz8oYXJnczogQ3JlYXRlVmlld0V2ZW50RGF0YSk6IHZvaWQ7XG59XG5cbnR5cGUgU2Nyb2xsVmlld1Byb3BzPFQ+ID0gVCBleHRlbmRzIFNjcm9sbFZpZXcgPyBJU2Nyb2xsVmlldyA6IEVtcHR5O1xuaW50ZXJmYWNlIElTY3JvbGxWaWV3IHtcbiAgICBvblNjcm9sbD86IChhcmdzOiBTY3JvbGxFdmVudERhdGEpID0+IHZvaWQ7XG59XG5cbnR5cGUgU2VhcmNoQmFyUHJvcHM8VD4gPSBUIGV4dGVuZHMgU2VhcmNoQmFyID8gSVNlYXJjaEJhciA6IEVtcHR5O1xuaW50ZXJmYWNlIElTZWFyY2hCYXIge1xuICAgIG9uVGV4dENoYW5nZT86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25TdWJtaXQ/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xuICAgIG9uQ2xvc2U/OiAoYXJnczogRXZlbnREYXRhKSA9PiB2b2lkO1xufVxuXG50eXBlIFNlZ21lbnRlZEJhclByb3BzPFQ+ID0gVCBleHRlbmRzIFNlZ21lbnRlZEJhciA/IElTZWdtZW50ZWRCYXIgOiBFbXB0eVxuaW50ZXJmYWNlIElTZWdtZW50ZWRCYXIge1xuICAgIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQ/OiAoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpID0+IHZvaWQ7XG59XG5cbnR5cGUgU2xpZGVyUHJvcHM8VD4gPSBUIGV4dGVuZHMgU2xpZGVyID8gSVNsaWRlciA6IEVtcHR5O1xuaW50ZXJmYWNlIElTbGlkZXIge1xuICAgIG9uVmFsdWVDaGFuZ2U/OiAoYXJnczogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG50eXBlIFN3aXRjaFByb3BzPFQ+ID0gVCBleHRlbmRzIFN3aXRjaCA/IElTd2l0Y2ggOiBFbXB0eTtcbmludGVyZmFjZSBJU3dpdGNoIHtcbiAgICBvblRvZ2dsZT86IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG50eXBlIFRhYlZpZXdQcm9wczxUPiA9IFQgZXh0ZW5kcyBUYWJWaWV3ID8gSVRhYlZpZXcgOiBFbXB0eTtcbmludGVyZmFjZSBJVGFiVmlldyB7XG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZD8oYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpOiB2b2lkO1xufVxuXG4vKiBjb3VsZCBiZSB1c2VkIHNldCBwcm9wcyBmb3IgZXZlcnkgc2luZ2xlIFJOUyBDb21wb25lbnQqL1xuaW50ZXJmYWNlIEVtcHR5IHtcblxufVxuXG4vLyBpbnNpZGUgaHR0cHM6Ly9naXRodWIuY29tL3NoaXJha2FiYS9yZWFjdC1uYXRpdmVzY3JpcHQvYmxvYi9tYXN0ZXIvcmVhY3QtbmF0aXZlc2NyaXB0L3NyYy9jb21wb25lbnRzL1N3aXRjaC50c1xuLy8gY2FuIGxpc3RlbmVyIGJlIGF0dGFjaGVkIHRvIHRoaXM6UFJPUFMub25Ub2dnbGUgPyIsImltcG9ydCB7IFRleHRCYXNlLCBPYnNlcnZhYmxlfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgSW5zdGFuY2UsIFRleHRJbnN0YW5jZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9zaGFyZWQvSG9zdENvbmZpZ1R5cGVzXCI7XG5pbXBvcnQgeyBGb3JtYXR0ZWRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIlxuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IF9fY3VzdG9tSG9zdENvbmZpZ0FwcGVuZENoaWxkSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LHBhcmVudDogVCwgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGV4ZWN1dGVJbk9yZGVyKFt0ZXh0QmFzZUltcGxdLCBpbnN0YW5jZSwgcGFyZW50LCBjaGlsZCk7XG59XG5cbmNvbnN0IHRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgVGV4dEJhc2U+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgcGFyZW50OiBULCBjaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UpID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFRleHRCYXNlKSkgcmV0dXJuO1xuXG4gICAgaWYocGFyZW50IGluc3RhbmNlb2YgVGV4dEJhc2UpIHtcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgRm9ybWF0dGVkU3RyaW5nKSB7XG4gICAgICAgICAgICBwYXJlbnQuZm9ybWF0dGVkVGV4dCA9IGNoaWxkO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaS5lLiBkZWZlciB0byBIb3N0IENvbmZpZy5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHsgVGV4dEJhc2UsIE9ic2VydmFibGV9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBJbnN0YW5jZSwgVGV4dEluc3RhbmNlIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L3NoYXJlZC9Ib3N0Q29uZmlnVHlwZXNcIjtcbmltcG9ydCB7IEZvcm1hdHRlZFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiXG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuXG5cbmV4cG9ydCBjb25zdCBfX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihcbiAgICBpbnN0YW5jZTogUmVhY3RpZnk8VD4sXG4gICAgcGFyZW50OiBULFxuICAgIGNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZSxcbiAgICBiZWZvcmVDaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2Vcbik6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBleGVjdXRlSW5PcmRlcihbdGV4dEJhc2VJbXBsXSwgaW5zdGFuY2UsIHBhcmVudCwgY2hpbGQsIGJlZm9yZUNoaWxkKTtcbn1cbmNvbnN0IHRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgVGV4dEJhc2U+KFxuICAgIGluc3RhbmNlOiBSZWFjdGlmeTxUPixcbiAgICBwYXJlbnQ6IFQsXG4gICAgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlLFxuICAgIGJlZm9yZUNoaWxkOiBJbnN0YW5jZSB8IFRleHRJbnN0YW5jZVxuKSA6IGJvb2xlYW4gPT4ge1xuXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBUZXh0QmFzZSkpIHJldHVybjtcblxuICAgIGlmKHBhcmVudCBpbnN0YW5jZW9mIFRleHRCYXNlKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEZvcm1hdHRlZFN0cmluZykge1xuICAgICAgICAgICAgcGFyZW50LmZvcm1hdHRlZFRleHQgPSBjaGlsZDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaS5lLiBkZWZlciB0byBIb3N0IENvbmZpZy5cbiAgICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHsgVGV4dEJhc2UsIE9ic2VydmFibGV9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBJbnN0YW5jZSwgVGV4dEluc3RhbmNlIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L3NoYXJlZC9Ib3N0Q29uZmlnVHlwZXNcIjtcbmltcG9ydCB7IEZvcm1hdHRlZFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiXG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuXG5leHBvcnQgY29uc3QgX19jdXN0b21Ib3N0Q29uZmlnUmVtb3ZlQ2hpbGRJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4gLHBhcmVudDogVCwgY2hpbGQ6IEluc3RhbmNlIHwgVGV4dEluc3RhbmNlKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGV4ZWN1dGVJbk9yZGVyKFt0ZXh0QmFzZUltcGxdLCBpbnN0YW5jZSwgcGFyZW50LCBjaGlsZCk7XG59XG5cbmNvbnN0IHRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgVGV4dEJhc2U+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgcGFyZW50OiBULCBjaGlsZDogSW5zdGFuY2UgfCBUZXh0SW5zdGFuY2UpOiBib29sZWFuID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFRleHRCYXNlKSkgcmV0dXJuO1xuICAgIFxuICAgIGlmKHBhcmVudCBpbnN0YW5jZW9mIFRleHRCYXNlKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEZvcm1hdHRlZFN0cmluZykge1xuICAgICAgICAgICAgcGFyZW50LmZvcm1hdHRlZFRleHQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGkuZS4gZGVmZXIgdG8gSG9zdCBDb25maWcuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IFxuICAgIGVsZW1lbnRNYXAsXG4gICAgQWJzb2x1dGVMYXlvdXQsXG4gICAgQWN0aW9uQmFyLFxuICAgIEFjdGlvbkl0ZW0sXG4gICAgQWN0aXZpdHlJbmRpY2F0b3IsXG4gICAgQW5pbWF0aW9uLFxuICAgIE9ic2VydmFibGVcbn1mcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lT2Yob2JqZWN0OiBPYmplY3QpOiBzdHJpbmcge1xuICAgIHJldHVybiBvYmplY3QuY29uc3RydWN0b3IubmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExldHRlckxvd2VyY2FzZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG59XG5cbmNvbnN0IGltcGxNZXRob2RSZWdpc3RyeTogc3RyaW5nW10gPSBbXTsgXG5jb25zb2xlLmxvZyhcImFsbCBlbGVtZW50cyBpbiBlbGVtZW50IHJlZ2lzdHJ5XCIpXG5mb3IobGV0IGVsZW1lbnROYW1lIGluIGVsZW1lbnRNYXApIHtcbiAgICBpbXBsTWV0aG9kUmVnaXN0cnkucHVzaChlbGVtZW50TmFtZSArIFwiSW1wbFwiKTtcbn1cblxudHlwZSBJbXBsTWV0aG9kID0gKC4uLmFyZ3M6IGFueSkgPT4gYW55XG5leHBvcnQgY29uc3QgZXhlY3V0ZUluT3JkZXIgPSAoaW1wbE1ldGhvZHM6IEltcGxNZXRob2RbXSwgLi4uYXJnczogYW55KSA9PiB7IFxuICAgIGxldCByZXR1cm5WYWx1ZSA6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBsZXQgcnVuID0gdW5kZWZpbmVkO1xuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJnZW5lcmljSW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcIm9ic2VydmFibGVJbXBsXCIpO1xuICAgIGlmKHJ1bikgeyBcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInZpZXdCYXNlSW1wbFwiKTsgLy8gZXh0ZW5kcyBPYnNlcnZhYmxlLi4uXG4gICAgXG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInZpZXdJbXBsXCIpOyAvLyBleHRlbmRzIFZpZXdCYXNlLi4uXG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImFjdGlvbkl0ZW1JbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwidGFiVmlld0l0ZW1JbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwicGFnZUltcGxcIikgLy8gZXh0ZW5kcyBWaWV3Li4uXG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJ0ZXh0QmFzZUltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJkYXRlUGlja2VySW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImZyYW1lSW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImh0bWxWaWV3SW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImxpc3RQaWNrZXJJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwicGxhY2Vob2xkZXJJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwic2VhcmNoQmFySW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInNlZ21lbnRlZEJhckltcGxcIik7XG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcnVuID0gaW1wbE1ldGhvZHMuZmluZCgobWV0aG9kKSA9PiBtZXRob2QubmFtZSA9PT0gXCJzbGlkZXJJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwic3dpdGNoSW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcInRhYlZpZXdJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwiY29udGVudFZpZXdJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwic2Nyb2xsVmlld0ltcGxcIik7IC8vIGV4dGVuZHMgQ29udGVudFZpZXcuLi5cbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImJ1dHRvbkltcGxcIik7IC8vIGV4dGVuZHMgVGV4dEJhc2UuLi5cbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImxhYmVsSW1wbFwiKTtcbiAgICBpZihydW4pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydW4oLi4uYXJncyk7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJ1biA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBydW4gPSBpbXBsTWV0aG9kcy5maW5kKChtZXRob2QpID0+IG1ldGhvZC5uYW1lID09PSBcImVkaXRhYmxlVGV4dEJhc2VJbXBsXCIpO1xuICAgIGlmKHJ1bikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1biguLi5hcmdzKTtcbiAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcnVuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJ1biA9IGltcGxNZXRob2RzLmZpbmQoKG1ldGhvZCkgPT4gbWV0aG9kLm5hbWUgPT09IFwidGV4dEZpZWxkSW1wbFwiKTsgLy8gZXh0ZW5kcyBFZGl0YWJsZVRleHRCYXNlLi4uXG4gICAgaWYocnVuKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVuKC4uLmFyZ3MpO1xuICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBydW4gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xufVxuXG5jb25zdCBoaWVyYXJjaHlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgXCJBYnNvbHV0ZUxheW91dFwiIDogXCJMYXlvdXRCYXNlXCIsXG4gICAgXCJBY3Rpb25CYXJcIiA6IFwiVmlld1wiLFxuICAgIFwiQWN0aW9uSXRlbVwiIDogXCJWaWV3QmFzZVwiLFxuICAgIFwiQWN0aXZpdHlJbmRpY2F0b3JcIiA6IFwiVmlld0Jhc2VcIixcbn07IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBEYXRlUGlja2VyLCBMaXN0UGlja2VyLCBTZWFyY2hCYXIsIFNsaWRlciwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnREaWRNb3VudEltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIGV4ZWN1dGVJbk9yZGVyKFxuICAgICAgICBbb2JzZXJ2YWJsZUltcGwsXG4gICAgICAgIGRhdGVQaWNrZXJJbXBsLFxuICAgICAgICBsaXN0UGlja2VySW1wbCxcbiAgICAgICAgc2VhcmNoQmFySW1wbCxcbiAgICAgICAgc2xpZGVySW1wbCxcbiAgICAgICAgc3dpdGNoSW1wbF0sXG4gICAgICAgIGluc3RhbmNlKTtcbiAgICBcbn1cblxuY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIFxuICAgIC8vIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHJldHVybjtcblxuICAgIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcInVwZGF0ZUxpc3RlbmVyc0hlbHBlclwiKSh0cnVlKTtcbn1cbmNvbnN0IGRhdGVQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBEYXRlUGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIERhdGVQaWNrZXIpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5vbihcImRhdGVDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25EYXRlQ2hhbmdlXCIpKTtcbn1cbmNvbnN0IGxpc3RQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBMaXN0UGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIExpc3RQaWNrZXIpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWFjdCByZWYgdG8gTmF0aXZlU2NyaXB0IFZpZXcgbG9zdCwgc28gdW5hYmxlIHRvIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5vbihcInNlbGVjdGVkSW5kZXhDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25TZWxlY3RlZEluZGV4Q2hhbmdlXCIpKTtcbn1cblxuY29uc3Qgc2VhcmNoQmFySW1wbCA9IDxUIGV4dGVuZHMgU2VhcmNoQmFyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFNlYXJjaEJhcikpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9uKFwidGV4dENoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblRleHRDaGFuZ2VcIikpO1xufVxuXG5jb25zdCBzbGlkZXJJbXBsID0gPFQgZXh0ZW5kcyBTbGlkZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgU2xpZGVyKSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IG5vZGU6IFQgfCBudWxsID0gUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUub24oXCJ2YWx1ZUNoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblZhbHVlQ2hhbmdlXCIpKTtcbn1cbmNvbnN0IHN3aXRjaEltcGwgPSA8VCBleHRlbmRzIFN3aXRjaD4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KSA9PiB7XG4gICAgXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBTbGlkZXIpKSByZXR1cm47XG5cbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9uKFwiY2hlY2tlZENoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblRvZ2dsZVwiKSk7XG59XG5cbiIsImltcG9ydCB7IE9ic2VydmFibGUsIERhdGVQaWNrZXIsIExpc3RQaWNrZXIsIFNlYXJjaEJhciwgU2xpZGVyLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgZXhlY3V0ZUluT3JkZXIgfSBmcm9tIFwiLi4vSGVscGVyc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRXaWxsVW5tb3VudEltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIGV4ZWN1dGVJbk9yZGVyKFxuICAgICAgICBbb2JzZXJ2YWJsZUltcGwsXG4gICAgICAgIGRhdGVQaWNrZXJJbXBsLFxuICAgICAgICBsaXN0UGlja2VySW1wbCxcbiAgICAgICAgc2VhcmNoQmFySW1wbCxcbiAgICAgICAgc2xpZGVySW1wbCxcbiAgICAgICAgc3dpdGNoSW1wbF0sIFxuICAgICAgICBpbnN0YW5jZSk7XG59XG5cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICAvLyBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSByZXR1cm47XG4gICAgXG4gICAgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwidXBkYXRlTGlzdGVuZXJzSGVscGVyXCIpKGZhbHNlKTtcbn1cbmNvbnN0IGRhdGVQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBEYXRlUGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIERhdGVQaWNrZXIpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG5vZGUub2ZmKFwiZGF0ZUNoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvbkRhdGVDaGFuZ2VcIikpO1xufVxuY29uc3QgbGlzdFBpY2tlckltcGwgPSA8VCBleHRlbmRzIExpc3RQaWNrZXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPikgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgTGlzdFBpY2tlcikpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IHRoaXMuZ2V0Q3VycmVudFJlZigpO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUub2ZmKFwic2VsZWN0ZWRJbmRleENoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblNlbGVjdGVkSW5kZXhDaGFuZ2VcIikpO1xufVxuY29uc3Qgc2VhcmNoQmFySW1wbCA9IDxUIGV4dGVuZHMgU2VhcmNoQmFyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFNlYXJjaEJhcikpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9mZihcInRleHRDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25UZXh0Q2hhbmdlXCIpKTtcbn1cblxuLyogKHRoaXMgc2xpZGVyIGltcGwgbm90IHRoZSBzYW1lIGFzIHRoZSBvdGhlcnMuIElzIHByb2JhYmx5IGFuIGVycm9yKSAqL1xuY29uc3Qgc2xpZGVySW1wbCA9IDxUIGV4dGVuZHMgU2xpZGVyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcblxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgU2xpZGVyKSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgbm9kZS5vZmYoXCJ2YWx1ZUNoYW5nZVwiLCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJvblZhbHVlQ2hhbmdlXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKVxufVxuY29uc3Qgc3dpdGNoSW1wbCA9IDxUIGV4dGVuZHMgU3dpdGNoPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFN3aXRjaCkpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBub2RlOiBUIHwgbnVsbCA9IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlYWN0IHJlZiB0byBOYXRpdmVTY3JpcHQgVmlldyBsb3N0LCBzbyB1bmFibGUgdG8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycy5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBub2RlLm9mZihcImNoZWNrZWRDaGFuZ2VcIiwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwib25Ub2dnbGVcIikpO1xufSIsIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCdXR0b24sIFRleHRGaWVsZCwgSHRtbFZpZXcsIExhYmVsLCBUYWJWaWV3LCBUYWJWaWV3SXRlbSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuXG5leHBvcnQgY29uc3QgcmVuZGVySW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4obmFtZTogc3RyaW5nLCBpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG9ic2VydmFibGU6IFQpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICAgIHJldHVybiBleGVjdXRlSW5PcmRlcihcbiAgICAgICAgW2dlbmVyaWNJbXBsLFxuICAgICAgICBidXR0b25JbXBsLFxuICAgICAgICB0ZXh0RmllbGRJbXBsLFxuICAgICAgICBodG1sVmlld0ltcGwsXG4gICAgICAgIGxhYmVsSW1wbCxcbiAgICAgICAgdGFiVmlld0l0ZW1JbXBsXSxcbiAgICAgICAgbmFtZSwgaW5zdGFuY2UsIG9ic2VydmFibGUpO1xufVxuY29uc3QgZ2VuZXJpY0ltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KG5hbWU6IHN0cmluZywgaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBvYnNlcnZhYmxlOiBUKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJnZW5lcmljIHJlbmRlclwiKTtcbiAgICBjb25zdCB7IGZvcndhcmRlZFJlZiwgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IGluc3RhbmNlLnByb3BzXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHtcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuXG4gICAgKTtcbn1cblxuY29uc3QgYnV0dG9uSW1wbCA9IDxUIGV4dGVuZHMgQnV0dG9uPihuYW1lOiBzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgb2JzZXJ2YWJsZTogVCkgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgQnV0dG9uKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZm9yd2FyZGVkUmVmLFxuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIGZvcm1hdHRlZFRleHQsXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIC4uLnJlc3RcbiAgICAgICAgfSA9IGluc3RhbmNlLnByb3BzO1xuICAgIFxuICAgICAgICBpZiAodGV4dCAmJiBmb3JtYXR0ZWRUZXh0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEJvdGggdGV4dCBhbmQgZm9ybWF0dGVkVGV4dCBwcm92aWRlZDsgc2hhbGwgdXNlIGZvcm1hdHRlZFRleHQuYCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSB7XG4gICAgICAgICAgICBbZm9ybWF0dGVkVGV4dCA/IFwiZm9ybWF0dGVkVGV4dFwiIDogXCJ0ZXh0XCJdOiBmb3JtYXR0ZWRUZXh0IHx8IHRleHQsXG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1hY3RpdmVcIiwgLy8gTmF0aXZlU2NyaXB0IGRlZmF1bHRzIGZyb20gZG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgLi4udGV4dENvbnRlbnQsXG4gICAgICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW4gLy8gV2VpcmQgdGhhdCBhIGJ1dHRvbiBtYXkgY29udGFpbiBjaGlsZHJlbiwgYnV0IHdoYXQgZG8gSSBrbm93LlxuICAgICAgICApO1xufVxuXG5jb25zdCB0ZXh0RmllbGRJbXBsID0gPFQgZXh0ZW5kcyBUZXh0RmllbGQ+KG5hbWU6IHN0cmluZywgaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBvYnNlcnZhYmxlOiBUKSA9PiB7XG4gICAgXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBUZXh0RmllbGQpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIFxuICAgIGNvbnN0IHtcbiAgICAgICAgZm9yd2FyZGVkUmVmLFxuXG5cbiAgICAgICAgdGV4dCxcbiAgICAgICAgZm9ybWF0dGVkVGV4dCxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIC4uLnJlc3RcbiAgICB9ID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBpZiAodGV4dCAmJiBmb3JtYXR0ZWRUZXh0KSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgQm90aCB0ZXh0IGFuZCBmb3JtYXR0ZWRUZXh0IHByb3ZpZGVkOyBzaGFsbCB1c2UgZm9ybWF0dGVkVGV4dC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IHtcbiAgICAgICAgW2Zvcm1hdHRlZFRleHQgPyBcImZvcm1hdHRlZFRleHRcIiA6IFwidGV4dFwiXTogZm9ybWF0dGVkVGV4dCB8fCB0ZXh0LFxuICAgIH07XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgbmFtZSxcbiAgICAgICAge1xuICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgIC4uLnRleHRDb250ZW50LFxuICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIiksXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuIC8vIFdlaXJkIHRoYXQgYSBUZXh0RmllbGQgbWF5IGNvbnRhaW4gY2hpbGRyZW4sIGJ1dCB3aGF0IGRvIEkga25vdy5cbiAgICApO1xufVxuXG5jb25zdCBodG1sVmlld0ltcGwgPSA8VCBleHRlbmRzIEh0bWxWaWV3PihuYW1lOiBzdHJpbmcsIGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgb2JzZXJ2YWJsZTogVCkgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgSHRtbFZpZXcpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIFxuICAgIGNvbnN0IHtcbiAgICAgICAgZm9yd2FyZGVkUmVmLFxuICAgICAgICBjaGlsZHJlbixcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIklnbm9yaW5nICdjaGlsZHJlbicgcHJvcCBvbiBIdG1sVmlldzsgbm90IHBlcm1pdHRlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgbmFtZSxcbiAgICAgICAge1xuICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgIHJlZjogZm9yd2FyZGVkUmVmIHx8IFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcIm15UmVmXCIpLFxuICAgICAgICB9LFxuICAgICAgICBudWxsXG4gICAgKTtcbn1cblxuY29uc3QgbGFiZWxJbXBsID0gPFQgZXh0ZW5kcyBMYWJlbD4obmFtZTogc3RyaW5nLCBpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG9ic2VydmFibGU6IFQpID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIExhYmVsKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImxhYmVsIGltcGxcIik7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZixcbiAgICBcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBmb3JtYXR0ZWRUZXh0LFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgIH0gPSBpbnN0YW5jZS5wcm9wcztcbiAgICBcbiAgICAgICAgaWYgKHRleHQgJiYgZm9ybWF0dGVkVGV4dCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBCb3RoIHRleHQgYW5kIGZvcm1hdHRlZFRleHQgcHJvdmlkZWQ7IHNoYWxsIHVzZSBmb3JtYXR0ZWRUZXh0LmApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0ge1xuICAgICAgICAgICAgW2Zvcm1hdHRlZFRleHQgPyBcImZvcm1hdHRlZFRleHRcIiA6IFwidGV4dFwiXTogZm9ybWF0dGVkVGV4dCB8fCB0ZXh0LFxuICAgICAgICB9O1xuICAgIFxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgICAgICAuLi50ZXh0Q29udGVudCxcbiAgICAgICAgICAgICAgICByZWY6IGZvcndhcmRlZFJlZiB8fCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJteVJlZlwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbiAvLyBXZWlyZCB0aGF0IGEgTGFiZWwgbWF5IGNvbnRhaW4gY2hpbGRyZW4sIGJ1dCB3aGF0IGRvIEkga25vdy5cbiAgICAgICAgKTtcbn1cblxuY29uc3QgdGFiVmlld0l0ZW1JbXBsID0gPFQgZXh0ZW5kcyBUYWJWaWV3SXRlbT4obmFtZTogc3RyaW5nLCBpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG9ic2VydmFibGU6IFQpID0+IHsgXG4gICAgXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBUYWJWaWV3SXRlbSkpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgXG4gICAgY29uc3Qge1xuICAgICAgICBmb3J3YXJkZWRSZWYsXG4gICAgXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAvLyB2aWV3LCAvKiBXZSBkaXNhbGxvdyB0aGlzIGF0IHRoZSB0eXBpbmdzIGxldmVsLiAqL1xuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IGluc3RhbmNlLnByb3BzO1xuICAgIFxuICAgIGlmIChSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPiAxIHx8IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY2hpbGRyZW4gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb3VudDogXCIgKyBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgJ2NoaWxkcmVuJyBwcm9wZXJ0eSBwYXNzZWQgaW50byBUYWJWaWV3SXRlbSBtdXN0IGJlIGEgc2luZ2xlIGNoaWxkIG5vZGUsIHdoaWNoIG11c3Qgbm90IGJlIGEgbnVtYmVyIG9yIHN0cmluZ2BcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHtcbiAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICByZWY6IGZvcndhcmRlZFJlZiB8fCBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJteVJlZlwiKSxcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICApO1xufVxuXG5cbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuXG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIn4vUmVhY3RpZmllZC9FeHRyYVByb3BzXCI7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWwgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L3NoYWxsb3dFcXVhbFwiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcblxuXG5leHBvcnQgY29uc3Qgc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBuZXh0UHJvcHM6IFQgJiBFeHRyYVByb3BzPFQ+LCBuZXh0U3RhdGU6IGFueSk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlSW1wbChpbnN0YW5jZSwgbmV4dFByb3BzLCBuZXh0U3RhdGUpO1xufVxuY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbmV4dFByb3BzOiBUICYgRXh0cmFQcm9wczxUPiwgbmV4dFN0YXRlOiBhbnkpID0+IHtcbiAgICBcbiAgICAvLyBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSByZXR1cm47XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coYE9ic2VydmFibGUncyBzaG91bGRDb21wb25lbnRVcGRhdGVgKTtcbiAgICBjb25zdCBzaG91bGRVcGRhdGU6IGJvb2xlYW4gPSAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBbc2hvdWxkQ29tcG9uZW50VXBkYXRlXSBzaG91bGRVcGRhdGU6ICR7c2hvdWxkVXBkYXRlfS5gKTtcbiAgICBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJ1cGRhdGVMaXN0ZW5lcnNIZWxwZXJcIikobnVsbCwgbmV4dFByb3BzKTtcbiAgICAvLyBodHRwczovL2x1Y3liYWluLmNvbS9ibG9nLzIwMTgvcmVhY3QtanMtcHVyZS1jb21wb25lbnQvXG4gICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBWaWV3QmFzZSwgVmlldywgUGFnZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4uL0V4dHJhUHJvcHNcIjtcblxuZXhwb3J0IHR5cGUgUmVhY3RpZnk8VCBleHRlbmRzIE9ic2VydmFibGU+ID0gUmVhY3QuQ29tcG9uZW50PFQgJiBFeHRyYVByb3BzPFQ+LCBhbnk+O1xuXG5leHBvcnQgdHlwZSBQcm9wczxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4gPSBUICYgRXh0cmFQcm9wczxUPjtcblxuXG4vKlxuZXhwb3J0IHR5cGUgT2JzZXJ2YWJsZTxUPiA9IFQgZXh0ZW5kcyBPYnNlcnZhYmxlID8gUmVhY3RpZnk8T2JzZXJ2YWJsZT4gOiBFbXB0eVxuXG5leHBvcnQgdHlwZSBWaWV3QmFzZTxUPiA9IFQgZXh0ZW5kcyBWaWV3QmFzZSA/IFJlYWN0aWZ5PFZpZXdCYXNlPiA6IEVtcHR5O1xuXG5leHBvcnQgdHlwZSBWaWV3PFQ+ID0gVCBleHRlbmRzIFZpZXcgPyBSZWFjdGlmeTxWaWV3PiA6IEVtcHR5O1xuXG5pbnRlcmZhY2UgRW1wdHkge1xuXG59XG4qL1xuLypcbmV4cG9ydCBjb25zdCB0cnlDYXN0ID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4pID0+IHtcbiAgICBpZigoaW5zdGFuY2UucHJvcHMpIGFzIFByb3BzPFQ+KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2FzIGluc3RhbmNlXCIpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiV2FzIG5vdCBpbnN0YW5jZVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cbiovXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzM5MjM0OS9ob3ctY2FuLWktY2hlY2staWYtZWxlbWVudC1pcy1hbi1pbnN0YW5jZW9mLXVcbi8qXG5leHBvcnQgZnVuY3Rpb24gdHJ5Q2FzdDxUPihpbnN0YW5jZTogYW55KSB7XG4gICAgaWYoaW5zdGFuY2UgaW5zdGFuY2VvZiBUKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2FzXCIpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwid2FzIG5vdFwiKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cbiovXG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzNTMzMzc0L2NvbXBhcmUtdHlwZXMtaW4tZ2VuZXJpYy1mdW5jdGlvbi11c2luZy10eXBlc2NyaXB0XG4vLyBoZWxwZXIgbWV0aG9kIHRvIGJlIGFibGUgdG8gY2FzdCBSZWFjdGlmeTxPYnNlcnZhYmxlPiB0byBSZWFjdGlmeTxWaWV3PiAgZXRjXG5cblxuLy8gaGVscGVyIG1ldGhvZCB0byBiZSBhYmxlIHRvIGNhc3QgUmVhY3RpZnk8T2JzZXJ2YWJsZT4gdG8gUmVhY3RpZnk8Vmlldz4gIGV0YyBcbmV4cG9ydCBjb25zdCB0cnlDYXN0ID0gPFQ+KHBhcmFtZXRlcjogYW55KSA9PiB7XG4gICAgcmV0dXJuIHBhcmFtZXRlciBhcyBUO1xufVxuIiwiXG5pbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgb25EYXRhQ2hhbmdlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEgKSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoW2RhdGVQaWNrZXJJbXBsXSwgaW5zdGFuY2UsIGFyZ3MpO1xufVxuXG5jb25zdCBkYXRlUGlja2VySW1wbCA9IDxUIGV4dGVuZHMgRGF0ZVBpY2tlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIERhdGVQaWNrZXIpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgZGF0ZTogRGF0ZSA9ICg8RGF0ZVBpY2tlcj5hcmdzLm9iamVjdCkuZGF0ZTtcbiAgICBpbnN0YW5jZS5wcm9wcy5vbkRhdGVDaGFuZ2UgJiYgaW5zdGFuY2UucHJvcHMub25EYXRlQ2hhbmdlKGRhdGUpO1xufVxuIiwiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIExpc3RQaWNrZXIgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi4vVHlwZXNcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IG9uU2VsZWN0SW5kZXhDaGFuZ2VJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIGV4ZWN1dGVJbk9yZGVyKFtsaXN0UGlja2VySW1wbF0sIGluc3RhbmNlLCBhcmdzKTtcbn1cbmNvbnN0IGxpc3RQaWNrZXJJbXBsID0gPFQgZXh0ZW5kcyBMaXN0UGlja2VyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgTGlzdFBpY2tlcikpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAoPExpc3RQaWNrZXI+YXJncy5vYmplY3QpLnNlbGVjdGVkSW5kZXg7XG4gICAgaW5zdGFuY2UucHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlICYmIGluc3RhbmNlLnByb3BzLm9uU2VsZWN0ZWRJbmRleENoYW5nZShzZWxlY3RlZEluZGV4KTtcbn0iLCJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU2VhcmNoQmFyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBvblRleHRDaGFuZ2VJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIGV4ZWN1dGVJbk9yZGVyKFtzZWFyY2hCYXJJbXBsXSwgaW5zdGFuY2UsIGFyZ3MpO1xufVxuY29uc3Qgc2VhcmNoQmFySW1wbCA9IDxUIGV4dGVuZHMgU2VhcmNoQmFyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgU2VhcmNoQmFyKSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IHRleHQ6IHN0cmluZyA9ICg8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0KS50ZXh0O1xuICAgIGluc3RhbmNlLnByb3BzLm9uVGV4dENoYW5nZSAmJiBpbnN0YW5jZS5wcm9wcy5vblRleHRDaGFuZ2UodGV4dCk7XG59IiwiaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRWxlbWVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuLi9IZWxwZXJzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuLi9UeXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgb25Ub2dnbGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSApID0+IHtcbiAgICBleGVjdXRlSW5PcmRlcihbc3dpdGNoSW1wbF0sIGluc3RhbmNlLCBhcmdzKTtcbn1cblxuY29uc3Qgc3dpdGNoSW1wbCA9IDxUIGV4dGVuZHMgU3dpdGNoPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgU3dpdGNoKSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IGNoZWNrZWQ6IGJvb2xlYW4gPSAoPFN3aXRjaD5hcmdzLm9iamVjdCkuY2hlY2tlZDtcblxuICAgICAgICBpbnN0YW5jZS5wcm9wcy5vblRvZ2dsZSAmJiBpbnN0YW5jZS5wcm9wcy5vblRvZ2dsZShjaGVja2VkKTtcbn0iLCJpbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7IGV4ZWN1dGVJbk9yZGVyIH0gZnJvbSBcIi4uL0hlbHBlcnNcIjtcbmltcG9ydCB7IFJlYWN0aWZ5IH0gZnJvbSBcIi4uL1R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBvblZhbHVlQ2hhbmdlSW1wbCA9IDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEgKSA9PiB7XG4gICAgZXhlY3V0ZUluT3JkZXIoW3NsaWRlckltcGxdLCBpbnN0YW5jZSwgYXJncyk7XG59XG4vKiB0eXBvIGZvdW5kIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9zaGlyYWthYmEvcmVhY3QtbmF0aXZlc2NyaXB0L2Jsb2IvbWFzdGVyL3JlYWN0LW5hdGl2ZXNjcmlwdC9zcmMvY29tcG9uZW50cy9TbGlkZXIudHMgKi9cbmNvbnN0IHNsaWRlckltcGwgPSA8VCBleHRlbmRzIFNsaWRlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFNsaWRlcikpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBzbGlkZXJWYWx1ZTogbnVtYmVyID0gKDxTbGlkZXI+YXJncy5vYmplY3QpLnZhbHVlO1xuXG4gICAgICAgIGluc3RhbmNlLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgaW5zdGFuY2UucHJvcHMub25WYWx1ZUNoYW5nZShzbGlkZXJWYWx1ZSk7XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuLy8gaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi9UeXBlc1wiO1xuaW1wb3J0IHsgRXh0cmFQcm9wcyB9IGZyb20gXCIuLi9FeHRyYVByb3BzXCI7XG5pbXBvcnQgeyBSZWFjdGlmeSB9IGZyb20gXCIuL1R5cGVzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRSZWZJbXBsIDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+KTogVCB8IG51bGwge1xuICAgIGNvbnN0IHJlZiA9IChpbnN0YW5jZS5wcm9wcy5mb3J3YXJkZWRSZWYgfHwgUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwibXlSZWZcIikpLmN1cnJlbnQ7XG4gICAgY29uc29sZS5sb2coXCJnZXRDdXJyZW50UmVmSW1wbDogXCIgKyByZWYpO1xuICAgIHJldHVybiByZWY7XG59XG5cblxuXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IEV4dHJhUHJvcHMgfSBmcm9tIFwiLi4vRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi9UeXBlc1wiO1xuLy8gaW1wb3J0IHsgUmVhY3RpZnkgfSBmcm9tIFwiLi9UeXBlc1wiO1xuXG4vKlxuZXhwb3J0IGNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3QuQ29tcG9uZW50PFQgJiBFeHRyYVByb3BzPFQ+PiwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogUCkgPT4ge1xuICAgIFxufVxuKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVMaXN0ZW5lcnNIZWxwZXJJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgb2JzZXJ2YWJsZUltcGwoaW5zdGFuY2UsIGF0dGFjaCwgbmV4dFByb3BzKTtcbn1cblxuY29uc3Qgb2JzZXJ2YWJsZUltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBcbiAgICAvLyBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3Qgbm9kZTogVCB8IG51bGwgPSBSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCk7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihgUmVhY3QgcmVmIHRvIE5hdGl2ZVNjcmlwdCBWaWV3IGxvc3QsIHNvIHVuYWJsZSB0byB1cGRhdGUgZXZlbnQgbGlzdGVuZXJzLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcInVwZGF0ZUxpc3RlbmVyc1wiKShub2RlLCBhdHRhY2gsIG5leHRQcm9wcyk7XG59IiwiXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtcbiAgICBPYnNlcnZhYmxlLFxuICAgIFZpZXcsXG4gICAgUGFnZSxcbiAgICBBY3Rpb25JdGVtLFxuICAgIEVkaXRhYmxlVGV4dEJhc2UsXG4gICAgRnJhbWUsXG4gICAgUGxhY2Vob2xkZXIsXG4gICAgU2Nyb2xsVmlldyxcbiAgICBTZWFyY2hCYXIsXG4gICAgU2VnbWVudGVkQmFyLFxuICAgIFRhYlZpZXdcbn0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnlcIjtcblxuaW1wb3J0IHsgRXh0cmFQcm9wcyB9IGZyb20gXCIuLi9FeHRyYVByb3BzXCI7XG5pbXBvcnQgeyB1cGRhdGVMaXN0ZW5lciB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jbGllbnQvRXZlbnRIYW5kbGluZ1wiO1xuaW1wb3J0IHsgR2VzdHVyZVR5cGVzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IHRyeUNhc3QsIFByb3BzLCBSZWFjdGlmeSB9IGZyb20gXCIuL1R5cGVzXCI7XG5pbXBvcnQgeyBleGVjdXRlSW5PcmRlciB9IGZyb20gXCIuL0hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxpc3RlbmVyc0ltcGwgPSA8VCBleHRlbmRzIE9ic2VydmFibGU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiAsbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogUHJvcHM8VD4pID0+IHtcbiAgICBcbiAgICAvKiBpbXBsZW1lbnRhdGlvbiBmb3IgYW55IHJucyBjb21wb25lbnQgaGVyZSAtIG9yIG9uIHJlYWN0aWZ5IGNsYXNzIGJvZHkqL1xuICAgIGV4ZWN1dGVJbk9yZGVyKFxuICAgICAgICBbcGFnZUltcGwsXG4gICAgICAgIHZpZXdJbXBsLFxuICAgICAgICBvYnNlcnZhYmxlSW1wbCxcbiAgICAgICAgYWN0aW9uSXRlbUltcGwsXG4gICAgICAgIGVkaXRhYmxlVGV4dEJhc2VJbXBsLFxuICAgICAgICBmcmFtZUltcGwsXG4gICAgICAgIHBsYWNlaG9sZGVySW1wbCxcbiAgICAgICAgc2Nyb2xsVmlld0ltcGwsXG4gICAgICAgIHNlYXJjaEJhckltcGwsXG4gICAgICAgIHNlZ21lbnRlZEJhckltcGwsXG4gICAgICAgIHRhYlZpZXdJbXBsXG4gICAgXSxcbiAgICBpbnN0YW5jZSwgbm9kZSwgYXR0YWNoKTtcbn1cbmNvbnN0IG9ic2VydmFibGVJbXBsID0gPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPihpbnN0YW5jZTogUmVhY3RpZnk8T2JzZXJ2YWJsZT4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7XG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSkgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coXCJvYnNlcnZhYmxlSW1wbFwiKTtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwicHJvcGVydHlDaGFuZ2VcIiwgaW5zdGFuY2UucHJvcHMub25Qcm9wZXJ0eUNoYW5nZSwgbmV4dFByb3BzLm9uUHJvcGVydHlDaGFuZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblByb3BlcnR5Q2hhbmdlKSBtZXRob2QoXCJwcm9wZXJ0eUNoYW5nZVwiLCBpbnN0YW5jZS5wcm9wcy5vblByb3BlcnR5Q2hhbmdlKTtcbiAgICB9XG4gICAgXG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaGlyYWthYmEvcmVhY3QtbmF0aXZlc2NyaXB0L2Jsb2IvbWFzdGVyL3JlYWN0LW5hdGl2ZXNjcmlwdC9zcmMvY29tcG9uZW50cy9WaWV3LnRzXG5jb25zdCB2aWV3SW1wbCA9IDxUIGV4dGVuZHMgVmlldz4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgVmlldykpIHJldHVybjtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcInZpZXcgaW1wbFwiKTtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibG9hZGVkXCIsIGluc3RhbmNlLnByb3BzLm9uTG9hZGVkLCBuZXh0UHJvcHMub25Mb2FkZWQpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInVubG9hZGVkXCIsIGluc3RhbmNlLnByb3BzLm9uVW5sb2FkZWQsIG5leHRQcm9wcy5vblVubG9hZGVkKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJhbmRyb2lkQmFja1ByZXNzZWRcIiwgaW5zdGFuY2UucHJvcHMub25BbmRyb2lkQmFja1ByZXNzZWQsIG5leHRQcm9wcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwic2hvd2luZ01vZGFsbHlcIiwgaW5zdGFuY2UucHJvcHMub25TaG93aW5nTW9kYWxseSwgbmV4dFByb3BzLm9uU2hvd2luZ01vZGFsbHkpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInNob3duTW9kYWxseVwiLCBpbnN0YW5jZS5wcm9wcy5vblNob3duTW9kYWxseSwgbmV4dFByb3BzLm9uU2hvd25Nb2RhbGx5KTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLnRhcCwgaW5zdGFuY2UucHJvcHMub25UYXAsIG5leHRQcm9wcy5vblRhcCwgXCJ0YXBcIik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy5kb3VibGVUYXAsIGluc3RhbmNlLnByb3BzLm9uRG91YmxlVGFwLCBuZXh0UHJvcHMub25Eb3VibGVUYXAsIFwiZG91YmxlVGFwXCIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMucGluY2gsIGluc3RhbmNlLnByb3BzLm9uUGluY2gsIG5leHRQcm9wcy5vblBpbmNoLCBcInBpbmNoXCIpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBHZXN0dXJlVHlwZXMucGFuLCBpbnN0YW5jZS5wcm9wcy5vblBhbiwgbmV4dFByb3BzLm9uUGFuLCBcInBhblwiKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLnN3aXBlLCBpbnN0YW5jZS5wcm9wcy5vblN3aXBlLCBuZXh0UHJvcHMub25Td2lwZSwgXCJzd2lwZVwiKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLnJvdGF0aW9uLCBpbnN0YW5jZS5wcm9wcy5vblJvdGF0aW9uLCBuZXh0UHJvcHMub25Sb3RhdGlvbiwgXCJyb3RhdGlvblwiKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgR2VzdHVyZVR5cGVzLmxvbmdQcmVzcywgaW5zdGFuY2UucHJvcHMub25Mb25nUHJlc3MsIG5leHRQcm9wcy5vbkxvbmdQcmVzcywgXCJsb25nUHJlc3NcIik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIEdlc3R1cmVUeXBlcy50b3VjaCwgaW5zdGFuY2UucHJvcHMub25Ub3VjaCwgbmV4dFByb3BzLm9uVG91Y2gsIFwidG91Y2hcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uTG9hZGVkKSBtZXRob2QoXCJsb2FkZWRcIiwgaW5zdGFuY2UucHJvcHMub25Mb2FkZWQpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25VbmxvYWRlZCkgbWV0aG9kKFwidW5sb2FkZWRcIiwgaW5zdGFuY2UucHJvcHMub25VbmxvYWRlZCk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkFuZHJvaWRCYWNrUHJlc3NlZCkgbWV0aG9kKFwiYW5kcm9pZEJhY2tQcmVzc2VkXCIsIGluc3RhbmNlLnByb3BzLm9uQW5kcm9pZEJhY2tQcmVzc2VkKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uU2hvd2luZ01vZGFsbHkpIG1ldGhvZChcInNob3dpbmdNb2RhbGx5XCIsIGluc3RhbmNlLnByb3BzLm9uU2hvd2luZ01vZGFsbHkpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TaG93bk1vZGFsbHkpIG1ldGhvZChcInNob3duTW9kYWxseVwiLCBpbnN0YW5jZS5wcm9wcy5vblNob3duTW9kYWxseSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblRhcCkgbWV0aG9kKEdlc3R1cmVUeXBlcy50YXAsIGluc3RhbmNlLnByb3BzLm9uVGFwKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uRG91YmxlVGFwKSBtZXRob2QoR2VzdHVyZVR5cGVzLmRvdWJsZVRhcCwgaW5zdGFuY2UucHJvcHMub25Eb3VibGVUYXApO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25QaW5jaCkgbWV0aG9kKEdlc3R1cmVUeXBlcy5waW5jaCwgaW5zdGFuY2UucHJvcHMub25QaW5jaCk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblBhbikgbWV0aG9kKEdlc3R1cmVUeXBlcy5wYW4sIGluc3RhbmNlLnByb3BzLm9uUGFuKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uU3dpcGUpIG1ldGhvZChHZXN0dXJlVHlwZXMuc3dpcGUsIGluc3RhbmNlLnByb3BzLm9uU3dpcGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25Sb3RhdGlvbikgbWV0aG9kKEdlc3R1cmVUeXBlcy5yb3RhdGlvbiwgaW5zdGFuY2UucHJvcHMub25Sb3RhdGlvbik7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkxvbmdQcmVzcykgbWV0aG9kKEdlc3R1cmVUeXBlcy5sb25nUHJlc3MsIGluc3RhbmNlLnByb3BzLm9uTG9uZ1ByZXNzKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uVG91Y2gpIG1ldGhvZChHZXN0dXJlVHlwZXMudG91Y2gsIGluc3RhbmNlLnByb3BzLm9uVG91Y2gpO1xuICAgIH1cbn1cblxuY29uc3QgYWN0aW9uSXRlbUltcGwgPSA8VCBleHRlbmRzIEFjdGlvbkl0ZW0+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICAvKiB0YXAgYXNzaWduaW5nIHRhcCBvbiBhY3Rpb25pdGVtIGNyYXNoZXMgKi9cbiAgICAvKiBzaG91bGQgYmUgY29uZGl0aW9uYWxseSByYW4gc28gdGhhdCB0d28gdGFwIGdlc3R1cmUgcmVjb2duaXplcnMgYXJlbid0IGFkZGVkKi9cbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIEFjdGlvbkl0ZW0pKSByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZyhcImFjdGlvbkl0ZW1JbXBsXCIpXG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInRhcFwiLCBpbnN0YW5jZS5wcm9wcy5vblRhcCwgbmV4dFByb3BzLm9uVGFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25UYXApIG1ldGhvZChcInRhcFwiLCBpbnN0YW5jZS5wcm9wcy5vblRhcCk7XG4gICAgfVxuICAgIFxufVxuY29uc3QgcGFnZUltcGwgPSA8VCBleHRlbmRzIFBhZ2U+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFBhZ2UpKSByZXR1cm47XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJwYWdlSW1wbFwiKTtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibmF2aWdhdGVkRnJvbVwiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZEZyb20sIG5leHRQcm9wcy5vbk5hdmlnYXRlZEZyb20pO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcIm5hdmlnYXRlZFRvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkVG8sIG5leHRQcm9wcy5vbk5hdmlnYXRlZFRvKTtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJuYXZpZ2F0aW5nRnJvbVwiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdGcm9tLCBuZXh0UHJvcHMub25OYXZpZ2F0aW5nRnJvbSk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwibmF2aWdhdGluZ1RvXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ1RvLCBuZXh0UHJvcHMub25OYXZpZ2F0aW5nVG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0ZWRGcm9tKSBtZXRob2QoXCJuYXZpZ2F0ZWRGcm9tXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGVkRnJvbSk7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZFRvKSBtZXRob2QoXCJuYXZpZ2F0ZWRUb1wiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRlZFRvKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ0Zyb20pIG1ldGhvZChcIm5hdmlnYXRpbmdGcm9tXCIsIGluc3RhbmNlLnByb3BzLm9uTmF2aWdhdGluZ0Zyb20pO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25OYXZpZ2F0aW5nVG8pIG1ldGhvZChcIm5hdmlnYXRpbmdUb1wiLCBpbnN0YW5jZS5wcm9wcy5vbk5hdmlnYXRpbmdUbyk7XG4gICAgfVxufVxuXG5jb25zdCBlZGl0YWJsZVRleHRCYXNlSW1wbCA9IDxUIGV4dGVuZHMgRWRpdGFibGVUZXh0QmFzZT4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4ge1xuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgQWN0aW9uSXRlbSkpIHJldHVybjtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImVkaXRhYmxlVGV4dEJhc2VJbXBsXCIpO1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJibHVyXCIsIGluc3RhbmNlLnByb3BzLm9uQmx1ciwgbmV4dFByb3BzLm9uQmx1cik7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwiZm9jdXNcIiwgaW5zdGFuY2UucHJvcHMub25Gb2N1cywgbmV4dFByb3BzLm9uRm9jdXMpO1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInRleHRDaGFuZ2VcIiwgaW5zdGFuY2UucHJvcHMub25UZXh0Q2hhbmdlLCBuZXh0UHJvcHMub25UZXh0Q2hhbmdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25CbHVyKSBtZXRob2QoXCJibHVyXCIsIGluc3RhbmNlLnByb3BzLm9uQmx1cik7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkZvY3VzKSBtZXRob2QoXCJmb2N1c1wiLCBpbnN0YW5jZS5wcm9wcy5vbkZvY3VzKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uVGV4dENoYW5nZSkgbWV0aG9kKFwidGV4dENoYW5nZVwiLCBpbnN0YW5jZS5wcm9wcy5vblRleHRDaGFuZ2UpO1xuICAgIH1cbn1cbmNvbnN0IGZyYW1lSW1wbCA9IDxUIGV4dGVuZHMgRnJhbWU+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHtcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIEZyYW1lKSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiZnJhbWVJbXBsXCIpO1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJvcHRpb25TZWxlY3RlZFwiLCBpbnN0YW5jZS5wcm9wcy5vbk9wdGlvblNlbGVjdGVkLCBuZXh0UHJvcHMub25PcHRpb25TZWxlY3RlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25PcHRpb25TZWxlY3RlZCkgbWV0aG9kKFwib3B0aW9uU2VsZWN0ZWRcIiwgaW5zdGFuY2UucHJvcHMub25PcHRpb25TZWxlY3RlZCk7XG4gICAgfVxufVxuY29uc3QgcGxhY2Vob2xkZXJJbXBsID0gPFQgZXh0ZW5kcyBQbGFjZWhvbGRlcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4geyBcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFBsYWNlaG9sZGVyKSkgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coXCJwbGFjZWhvbGRlckltcGxcIik7XG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcImNyZWF0aW5nVmlld1wiLCBpbnN0YW5jZS5wcm9wcy5vbkNyZWF0aW5nVmlldywgbmV4dFByb3BzLm9uQ3JlYXRpbmdWaWV3KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRob2QgPSAoYXR0YWNoID8gbm9kZS5vbiA6IG5vZGUub2ZmKS5iaW5kKG5vZGUpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25DcmVhdGluZ1ZpZXcpIG1ldGhvZChcImNyZWF0aW5nVmlld1wiLCBpbnN0YW5jZS5wcm9wcy5vbkNyZWF0aW5nVmlldyk7XG4gICAgfVxufVxuY29uc3Qgc2Nyb2xsVmlld0ltcGwgPSA8VCBleHRlbmRzIFNjcm9sbFZpZXc+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHsgXG4gICAgXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBTY3JvbGxWaWV3KSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsVmlld0ltcGxcIik7XG4gICAgaWYgKGF0dGFjaCA9PT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVMaXN0ZW5lcihub2RlLCBcInNjcm9sbFwiLCB0aGlzLnByb3BzLm9uU2Nyb2xsLCBuZXh0UHJvcHMub25TY3JvbGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgXG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNjcm9sbCkgbWV0aG9kKFwic2Nyb2xsXCIsIGluc3RhbmNlLnByb3BzLm9uU2Nyb2xsKTtcbiAgICB9XG59XG5jb25zdCBzZWFyY2hCYXJJbXBsID0gPFQgZXh0ZW5kcyBTZWFyY2hCYXI+KGluc3RhbmNlOiBSZWFjdGlmeTxUPiwgbm9kZTogVCwgYXR0YWNoOiBib29sZWFuIHwgbnVsbCwgbmV4dFByb3BzPzogVCAmIEV4dHJhUHJvcHM8VD4pID0+IHsgXG4gICAgXG4gICAgaWYoIShSZWZsZWN0LmdldChpbnN0YW5jZSwgXCJnZXRDdXJyZW50UmVmXCIpKCkgaW5zdGFuY2VvZiBTZWFyY2hCYXIpKSByZXR1cm47XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJzZWFyY2hCYXJJbXBsXCIpO1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIobm9kZSwgXCJzdWJtaXRcIiwgaW5zdGFuY2UucHJvcHMub25TdWJtaXQsIG5leHRQcm9wcy5vblN1Ym1pdCk7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKG5vZGUsIFwiY2xvc2VcIiwgaW5zdGFuY2UucHJvcHMub25DbG9zZSwgbmV4dFByb3BzLm9uQ2xvc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLm9uU3VibWl0KSBtZXRob2QoXCJzdWJtaXRcIiwgaW5zdGFuY2UucHJvcHMub25TdWJtaXQpO1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25DbG9zZSkgbWV0aG9kKFwiY2xvc2VcIiwgaW5zdGFuY2UucHJvcHMub25DbG9zZSk7XG4gICAgfVxufVxuY29uc3Qgc2VnbWVudGVkQmFySW1wbCA9IDxUIGV4dGVuZHMgU2VnbWVudGVkQmFyPihpbnN0YW5jZTogUmVhY3RpZnk8VD4sIG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KSA9PiB7IFxuICAgIFxuICAgIGlmKCEoUmVmbGVjdC5nZXQoaW5zdGFuY2UsIFwiZ2V0Q3VycmVudFJlZlwiKSgpIGluc3RhbmNlb2YgU2VnbWVudGVkQmFyKSkgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coXCJzZWdtZW50ZWRCYXJJbXBsXCIpO1xuICAgIGlmIChhdHRhY2ggPT09IG51bGwpIHtcbiAgICAgICAgdXBkYXRlTGlzdGVuZXIoXG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgXCJzZWxlY3RlZEluZGV4Q2hhbmdlZFwiLFxuICAgICAgICAgICAgaW5zdGFuY2UucHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlZCxcbiAgICAgICAgICAgIG5leHRQcm9wcy5vblNlbGVjdGVkSW5kZXhDaGFuZ2VkXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gKGF0dGFjaCA/IG5vZGUub24gOiBub2RlLm9mZikuYmluZChub2RlKTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlZCkgbWV0aG9kKFwic2VsZWN0ZWRJbmRleENoYW5nZWRcIiwgaW5zdGFuY2UucHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlZCk7XG4gICAgfVxufVxuY29uc3QgdGFiVmlld0ltcGwgPSA8VCBleHRlbmRzIFNlZ21lbnRlZEJhcj4oaW5zdGFuY2U6IFJlYWN0aWZ5PFQ+LCBub2RlOiBULCBhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPikgPT4geyBcbiAgICBcbiAgICBpZighKFJlZmxlY3QuZ2V0KGluc3RhbmNlLCBcImdldEN1cnJlbnRSZWZcIikoKSBpbnN0YW5jZW9mIFRhYlZpZXcpKSByZXR1cm47XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJ0YWJWaWV3SW1wbFwiKTtcbiAgICBpZiAoYXR0YWNoID09PSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZUxpc3RlbmVyKFxuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIFwic2VsZWN0ZWRJbmRleENoYW5nZWRcIixcbiAgICAgICAgICAgIGluc3RhbmNlLnByb3BzLm9uU2VsZWN0ZWRJbmRleENoYW5nZWQsXG4gICAgICAgICAgICBuZXh0UHJvcHMub25TZWxlY3RlZEluZGV4Q2hhbmdlZFxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IChhdHRhY2ggPyBub2RlLm9uIDogbm9kZS5vZmYpLmJpbmQobm9kZSk7XG4gICAgXG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNlbGVjdGVkSW5kZXhDaGFuZ2VkKSBtZXRob2QoXCJzZWxlY3RlZEluZGV4Q2hhbmdlZFwiLCBpbnN0YW5jZS5wcm9wcy5vblNlbGVjdGVkSW5kZXhDaGFuZ2VkKTtcbiAgICB9XG59XG5cblxuXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCByZWdpc3RlciwgQ29udGVudFZpZXcgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0L2Rpc3QvY2xpZW50L0VsZW1lbnRSZWdpc3RyeVwiO1xuaW1wb3J0IHsgbmFtZU9mLCBmaXJzdExldHRlckxvd2VyY2FzZSB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL0hlbHBlcnNcIjtcbmltcG9ydCB7IHJlbmRlckltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9SZWFjdC9yZW5kZXJJbXBsXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50UmVmSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL2dldEN1cnJlbnRSZWZJbXBsXCI7XG5pbXBvcnQgeyBFeHRyYVByb3BzIH0gZnJvbSBcIi4vRXh0cmFQcm9wc1wiO1xuaW1wb3J0IHsgdXBkYXRlTGlzdGVuZXJzSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL3VwZGF0ZUxpc3RlbmVyc0ltcGxcIjtcbmltcG9ydCB7IGNvbXBvbmVudERpZE1vdW50SW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudERpZE1vdW50SW1wbFwiO1xuaW1wb3J0IHsgc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1JlYWN0L3Nob3VsZENvbXBvbmVudFVwZGF0ZUltcGxcIjtcbmltcG9ydCB7IGNvbXBvbmVudFdpbGxVbm1vdW50SW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1JlYWN0L2NvbXBvbmVudFdpbGxVbm1vdW50SW1wbFwiO1xuaW1wb3J0IHsgX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vQ3VzdG9tTm9kZUhpZXJhcmNoeU1hbmFnZXIvX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsXCI7XG5pbXBvcnQgeyBfX2N1c3RvbUhvc3RDb25maWdSZW1vdmVDaGlsZEltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdSZW1vdmVDaGlsZEltcGxcIjtcbmltcG9ydCB7IF9fY3VzdG9tSG9zdENvbmZpZ0luc2VydEJlZm9yZUltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9DdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlci9fX2N1c3RvbUhvc3RDb25maWdJbnNlcnRCZWZvcmVJbXBsXCI7XG5pbXBvcnQgeyBvbkRhdGFDaGFuZ2VJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vVW5pcXVlL29uRGF0YUNoYW5nZUltcGxcIjtcbmltcG9ydCB7IEN1c3RvbU5vZGVIaWVyYXJjaHlNYW5hZ2VyIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L3NoYXJlZC9Ib3N0Q29uZmlnVHlwZXNcIjtcbmltcG9ydCB7IHVwZGF0ZUxpc3RlbmVyc0hlbHBlckltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi91cGRhdGVMaXN0ZW5lcnNIZWxwZXJJbXBsXCI7XG5pbXBvcnQgeyBvblNlbGVjdEluZGV4Q2hhbmdlSW1wbCB9IGZyb20gXCIuL0ltcGxlbWVudGF0aW9uL1VuaXF1ZS9vblNlbGVjdGVkSW5kZXhDaGFuZ2VJbXBsXCI7XG5pbXBvcnQgeyBvblRleHRDaGFuZ2VJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVGV4dENoYW5nZUltcGxcIjtcbmltcG9ydCB7IG9uVmFsdWVDaGFuZ2VJbXBsIH0gZnJvbSBcIi4vSW1wbGVtZW50YXRpb24vVW5pcXVlL29uVmFsdWVDaGFuZ2VJbXBsXCI7XG5pbXBvcnQgeyBvblRvZ2dsZUltcGwgfSBmcm9tIFwiLi9JbXBsZW1lbnRhdGlvbi9VbmlxdWUvb25Ub2dnbGVJbXBsXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gUmVhY3RpZmllZDxUIGV4dGVuZHMgT2JzZXJ2YWJsZT4ob2JzZXJ2YWJsZTogVCwgbmFtZT86IHN0cmluZykgeyBcblxuICAgIGlmKCFuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBmaXJzdExldHRlckxvd2VyY2FzZShuYW1lT2Yob2JzZXJ2YWJsZSkpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyaW5nIFwiICsgbmFtZSk7XG4gICAgcmVnaXN0ZXIobmFtZSwgKCkgPT4ge1xuICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH0pO1xuICAgIC8vIGxldCBzZWxmOiBSZWFjdGlmeSA9IG51bGw7XG4gICAgY2xhc3MgUmVhY3RpZnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VCAmIEV4dHJhUHJvcHM8VD4sIGFueT4gaW1wbGVtZW50cyBDdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlcjxUPiB7XG4gICAgICAgIHN0YXRpYyBjb3VudE9mSW5zdGFuY2VzID0gMDtcbiAgICAgICAgLy8gc3RhdGljIGRlZmF1bHRQcm9wcyA9IHsuLi4gb2JzZXJ2YWJsZSB9IFxuICAgICAgICAvKlxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wczogVCAmIEV4dHJhUHJvcHM8VD4pIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgIFJlYWN0aWZ5LmNvdW50T2ZJbnN0YW5jZXMgKys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdGluZyBpbnN0YW5jZSBcIiArIFJlYWN0aWZ5LmNvdW50T2ZJbnN0YW5jZXMpO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCByZWFkb25seSBteVJlZjogUmVhY3QuUmVmT2JqZWN0PFQ+ID0gUmVhY3QuY3JlYXRlUmVmPFQ+KCk7XG4gICAgICAgIHByb3RlY3RlZCBnZXRDdXJyZW50UmVmID0gKCk6IFQgfCBudWxsID0+IHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5mb3J3YXJkZWRSZWYgfHwgdGhpcy5teVJlZikuY3VycmVudDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciB1cGRhdGVMaXN0ZW5lcnM6IHNpbXBseSBnZXRzIHRoZSBjdXJyZW50IHJlZiB0byBwYXNzIG9uIHRvIGl0LlxuICAgICAgICAqIEBwYXJhbSBhdHRhY2ggdHJ1ZTogYXR0YWNoOyBmYWxzZTogZGV0YWNoOyBudWxsOiB1cGRhdGVcbiAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUxpc3RlbmVyc0hlbHBlciA9IChhdHRhY2g6IGJvb2xlYW4gfCBudWxsLCBuZXh0UHJvcHM/OiBUICYgRXh0cmFQcm9wczxUPik6IHZvaWQgID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZUxpc3RlbmVyc0hlbHBlckltcGwodGhpcywgYXR0YWNoLCBuZXh0UHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAqXG4gICAgICAgICogQHBhcmFtIGF0dGFjaCB0cnVlOiBhdHRhY2g7IGZhbHNlOiBkZXRhY2g7IG51bGw6IHVwZGF0ZVxuICAgICAgICAqL1xuICAgIFxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlTGlzdGVuZXJzID0gKG5vZGU6IFQsIGF0dGFjaDogYm9vbGVhbiB8IG51bGwsIG5leHRQcm9wcz86IFQgJiBFeHRyYVByb3BzPFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVMaXN0ZW5lcnNJbXBsKHRoaXMsIG5vZGUsIGF0dGFjaCwgbmV4dFByb3BzKTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50RGlkTW91bnRJbXBsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAqIFB1cmVDb21wb25lbnQncyBzaG91bGRDb21wb25lbnRVcGRhdGUoKSBtZXRob2QgaXMgaWdub3JlZCBhbmQgcmVwbGFjZWQgd2l0aCBhIHNoYWxsb3dFcXVhbCgpXG4gICAgICAgICogY29tcGFyaXNvbiBvZiBwcm9wcyBhbmQgc3RhdGUuIFdlJ2xsIGltcGxlbWVudCBvdXIgQ29tcG9uZW50J3Mgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkgdG9cbiAgICAgICAgKiBtYXRjaCB0aGUgd2F5IFB1cmVDb21wb25lbnQgaXMgaGFuZGxlZC5cbiAgICAgICAgKi9cbiAgICAgICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKG5leHRQcm9wczogVCAmIEV4dHJhUHJvcHM8VD4sIG5leHRTdGF0ZTogYW55KTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2hvdWxkQ29tcG9uZW50VXBkYXRlSW1wbCh0aGlzLCBuZXh0UHJvcHMsIG5leHRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZUxpc3RlbmVyc0hlbHBlcihmYWxzZSk7XG4gICAgICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudEltcGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlbmRlciA9ICgpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlckltcGwobmFtZSwgdGhpcywgb2JzZXJ2YWJsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBfX0ltcGxlbWVudHNDdXN0b21Ob2RlSGllcmFyY2h5TWFuYWdlcl9fOiB0cnVlO1xuICAgICAgICBfX2N1c3RvbUhvc3RDb25maWdBcHBlbmRDaGlsZD8gPSAocGFyZW50SW5zdGFuY2U6IFQsIGNoaWxkOiBPYnNlcnZhYmxlIHwgaW1wb3J0KFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWJhc2UvdGV4dC1iYXNlXCIpLlRleHRCYXNlKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gX19jdXN0b21Ib3N0Q29uZmlnQXBwZW5kQ2hpbGRJbXBsKHRoaXMsIHBhcmVudEluc3RhbmNlLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgX19jdXN0b21Ib3N0Q29uZmlnUmVtb3ZlQ2hpbGQ/ID0gKHBhcmVudEluc3RhbmNlOiBULCBjaGlsZDogT2JzZXJ2YWJsZSB8IGltcG9ydChcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1iYXNlL3RleHQtYmFzZVwiKS5UZXh0QmFzZSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIF9fY3VzdG9tSG9zdENvbmZpZ1JlbW92ZUNoaWxkSW1wbCh0aGlzLCBwYXJlbnRJbnN0YW5jZSwgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIF9fY3VzdG9tSG9zdENvbmZpZ0luc2VydEJlZm9yZT89IChwYXJlbnRJbnN0YW5jZTogVCwgY2hpbGQ6IE9ic2VydmFibGUgfCBpbXBvcnQoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtYmFzZS90ZXh0LWJhc2VcIikuVGV4dEJhc2UsIGJlZm9yZUNoaWxkOiBPYnNlcnZhYmxlIHwgaW1wb3J0KFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWJhc2UvdGV4dC1iYXNlXCIpLlRleHRCYXNlKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gX19jdXN0b21Ib3N0Q29uZmlnSW5zZXJ0QmVmb3JlSW1wbCh0aGlzLCBwYXJlbnRJbnN0YW5jZSwgY2hpbGQsIGJlZm9yZUNoaWxkKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvKiB1bmlxdWUvIGNvbXBsZXRlbHkgY3VzdG9tIHN0dWZmLi4uICovXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgb25EYXRlQ2hhbmdlID0gKGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgb25EYXRhQ2hhbmdlSW1wbCh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBvblNlbGVjdGVkSW5kZXhDaGFuZ2UgPSAoYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICBvblNlbGVjdEluZGV4Q2hhbmdlSW1wbCh0aGlzLCBhcmdzKVxuICAgICAgICB9O1xuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG9uVGV4dENoYW5nZSA9IChhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIG9uVGV4dENoYW5nZUltcGwodGhpcywgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgb25WYWx1ZUNoYW5nZSA9IChhcmdzOiBFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2VJbXBsKHRoaXMsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IG9uVG9nZ2xlID0gKGFyZ3M6IEV2ZW50RGF0YSkgPT4geyBcbiAgICAgICAgICAgIG9uVG9nZ2xlSW1wbCh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiBSZWFjdGlmeTtcbiAgICAgLy8gaGF2ZSB0byBkZWNsYXJlIGNsYXNzIG5hbWUgdG8gbWFrZSBkZWNvcmF0b3JzIHdvcmsgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvNzM0MlxufVxuXG5cbi8vIFJlYWN0LkNvbXBvbmVudDxUICYgRXh0cmFQcm9wczxUPlxuXG4vKiBcbi8vIEFyZSBub3QgYWN0dWFsbHkgbmVlZGVkID8hXG5mdW5jdGlvbiBKU1g8VCBleHRlbmRzIE9ic2VydmFibGU+KG9ic2VydmFibGU6IG5ldyguLi5hcmdzOiBhbnlbXSkgPT4gUmVhY3QuQ29tcG9uZW50PFQgJiBFeHRyYVByb3BzPFQ+Pikge1xuICAgIHJldHVybiBSZWFjdC5mb3J3YXJkUmVmPFQsIFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxUICYgRXh0cmFQcm9wczxUPj4+KFxuICAgICAgICAocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxUICYgRXh0cmFQcm9wczxUPj4+LCByZWY6IFJlYWN0LlJlZk9iamVjdDxUPikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlXG4gICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgICAgICAgICAgZm9yd2FyZGVkUmVmOiByZWYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIClcbn1cbiovXG5cblxuXG4vLyBleHBvcnQgY29uc3QgTXlPYnNlcnZhYmxlOiBSZWFjdC5Db21wb25lbnRUeXBlPFByb3BzV2l0aG91dEZvcndhcmRlZFJlZjxPYnNlcnZhYmxlPiAmIEV4dHJhUHJvcHM8T2JzZXJ2YWJsZT4+ICYgUmVhY3QuQ2xhc3NBdHRyaWJ1dGVzPE9ic2VydmFibGU+ID0gSlNYKG5ldyBPYnNlcnZhYmxlKCkpO1xuLy8gZXhwb3J0IGNvbnN0IE15QnV0dG9uID0gSlNYKG5ldyBCdXR0b24oKSk7XG4vLyBleHBvcnQgY29uc3QgTXlDb250ZW50VmlldzogUmVhY3QuQ29tcG9uZW50VHlwZTxQcm9wc1dpdGhvdXRGb3J3YXJkZWRSZWY8Q29udGVudFZpZXcgJiBFeHRyYVByb3BzPENvbnRlbnRWaWV3Pj4+ICYgUmVhY3QuQ2xhc3NBdHRyaWJ1dGVzPENvbnRlbnRWaWV3PiA9IEpTWChuZXcgQ29udGVudFZpZXcoKSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXG4qKi9cXG4vKipcXHJcXG4gKiBDb2xvciBjbGFzc2VzXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAuYy1ncmV5e2NvbG9yOiNlMGUwZTB9LmMtYmctZ3JleXtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTB9XFxyXFxuKiovXFxuLmMtd2hpdGUge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1iZy13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLmMtYmxhY2sge1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1iZy1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XFxuXFxuLmMtYXF1YSB7XFxuICBjb2xvcjogIzAwY2FhYjsgfVxcblxcbi5jLWJnLWFxdWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2FhYjsgfVxcblxcbi5jLWJsdWUge1xcbiAgY29sb3I6ICMzZDVhZmU7IH1cXG5cXG4uYy1iZy1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG5cXG4uYy1jaGFyY29hbCB7XFxuICBjb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJnLWNoYXJjb2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7IH1cXG5cXG4uYy1icm93biB7XFxuICBjb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWJnLWJyb3duIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7IH1cXG5cXG4uYy1mb3Jlc3Qge1xcbiAgY29sb3I6ICMwMDY5Njg7IH1cXG5cXG4uYy1iZy1mb3Jlc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWdyZXkge1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uYy1iZy1ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uYy1ncmV5LWxpZ2h0IHtcXG4gIGNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLmMtYmctZ3JleS1saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLmMtZ3JleS1kYXJrIHtcXG4gIGNvbG9yOiAjNWM2ODdjOyB9XFxuXFxuLmMtYmctZ3JleS1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1wdXJwbGUge1xcbiAgY29sb3I6ICM4MTMwZmY7IH1cXG5cXG4uYy1iZy1wdXJwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWxlbW9uIHtcXG4gIGNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtYmctbGVtb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWEwMDsgfVxcblxcbi5jLWxpbWUge1xcbiAgY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uYy1iZy1saW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uYy1vcmFuZ2Uge1xcbiAgY29sb3I6ICNmNTdjMDA7IH1cXG5cXG4uYy1iZy1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLXJ1Ynkge1xcbiAgY29sb3I6ICNmZjE3NDQ7IH1cXG5cXG4uYy1iZy1ydWJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDQ7IH1cXG5cXG4uYy1za3kge1xcbiAgY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYy1iZy1za3kge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcblxcbi8qIFdpZHRoL0hlaWdodCAqL1xcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMDsgfVxcblxcbi5oLWZ1bGwge1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmgtMTAwIHtcXG4gIGhlaWdodDogMTAwOyB9XFxuXFxuLyoqXFxyXFxuICogTWFyZ2luIGFuZCBQYWRkaW5nXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAubS0we21hcmdpbjowfS5tLXQtMHttYXJnaW4tdG9wOjB9Lm0tci0we21hcmdpbi1yaWdodDowfS5tLWItMHttYXJnaW4tYm90dG9tOjB9Lm0tbC0we21hcmdpbi1sZWZ0OjB9Lm0teC0we21hcmdpbi1yaWdodDowO21hcmdpbi1sZWZ0OjB9Lm0teS0we21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxyXFxuICogU2FtZSBmb3IgUGFkZGluZyAodXNpbmcgdGhlICdwJyBhYmJyZXZpYXRpb24pXFxyXFxuICogRnJvbSAwLCAyLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzBcXHJcXG4qKi9cXG4ubS0wIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5tLXQtMCB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLm0tci0wIHtcXG4gIG1hcmdpbi1yaWdodDogMDsgfVxcblxcbi5tLWItMCB7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm0tbC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0teC0wIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0teS0wIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm0tMiB7XFxuICBtYXJnaW46IDI7IH1cXG5cXG4ubS10LTIge1xcbiAgbWFyZ2luLXRvcDogMjsgfVxcblxcbi5tLXItMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI7IH1cXG5cXG4ubS1iLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjsgfVxcblxcbi5tLWwtMiB7XFxuICBtYXJnaW4tbGVmdDogMjsgfVxcblxcbi5tLXgtMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI7XFxuICBtYXJnaW4tbGVmdDogMjsgfVxcblxcbi5tLXktMiB7XFxuICBtYXJnaW4tdG9wOiAyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjsgfVxcblxcbi5tLTQge1xcbiAgbWFyZ2luOiA0OyB9XFxuXFxuLm0tdC00IHtcXG4gIG1hcmdpbi10b3A6IDQ7IH1cXG5cXG4ubS1yLTQge1xcbiAgbWFyZ2luLXJpZ2h0OiA0OyB9XFxuXFxuLm0tYi00IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7IH1cXG5cXG4ubS1sLTQge1xcbiAgbWFyZ2luLWxlZnQ6IDQ7IH1cXG5cXG4ubS14LTQge1xcbiAgbWFyZ2luLXJpZ2h0OiA0O1xcbiAgbWFyZ2luLWxlZnQ6IDQ7IH1cXG5cXG4ubS15LTQge1xcbiAgbWFyZ2luLXRvcDogNDtcXG4gIG1hcmdpbi1ib3R0b206IDQ7IH1cXG5cXG4ubS01IHtcXG4gIG1hcmdpbjogNTsgfVxcblxcbi5tLXQtNSB7XFxuICBtYXJnaW4tdG9wOiA1OyB9XFxuXFxuLm0tci01IHtcXG4gIG1hcmdpbi1yaWdodDogNTsgfVxcblxcbi5tLWItNSB7XFxuICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLm0tbC01IHtcXG4gIG1hcmdpbi1sZWZ0OiA1OyB9XFxuXFxuLm0teC01IHtcXG4gIG1hcmdpbi1yaWdodDogNTtcXG4gIG1hcmdpbi1sZWZ0OiA1OyB9XFxuXFxuLm0teS01IHtcXG4gIG1hcmdpbi10b3A6IDU7XFxuICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLm0tOCB7XFxuICBtYXJnaW46IDg7IH1cXG5cXG4ubS10LTgge1xcbiAgbWFyZ2luLXRvcDogODsgfVxcblxcbi5tLXItOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDg7IH1cXG5cXG4ubS1iLTgge1xcbiAgbWFyZ2luLWJvdHRvbTogODsgfVxcblxcbi5tLWwtOCB7XFxuICBtYXJnaW4tbGVmdDogODsgfVxcblxcbi5tLXgtOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDg7XFxuICBtYXJnaW4tbGVmdDogODsgfVxcblxcbi5tLXktOCB7XFxuICBtYXJnaW4tdG9wOiA4O1xcbiAgbWFyZ2luLWJvdHRvbTogODsgfVxcblxcbi5tLTEwIHtcXG4gIG1hcmdpbjogMTA7IH1cXG5cXG4ubS10LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwOyB9XFxuXFxuLm0tci0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwOyB9XFxuXFxuLm0tYi0xMCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDsgfVxcblxcbi5tLWwtMTAge1xcbiAgbWFyZ2luLWxlZnQ6IDEwOyB9XFxuXFxuLm0teC0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwOyB9XFxuXFxuLm0teS0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tMTIge1xcbiAgbWFyZ2luOiAxMjsgfVxcblxcbi5tLXQtMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7IH1cXG5cXG4ubS1yLTEyIHtcXG4gIG1hcmdpbi1yaWdodDogMTI7IH1cXG5cXG4ubS1iLTEyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEyOyB9XFxuXFxuLm0tbC0xMiB7XFxuICBtYXJnaW4tbGVmdDogMTI7IH1cXG5cXG4ubS14LTEyIHtcXG4gIG1hcmdpbi1yaWdodDogMTI7XFxuICBtYXJnaW4tbGVmdDogMTI7IH1cXG5cXG4ubS15LTEyIHtcXG4gIG1hcmdpbi10b3A6IDEyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS0xNSB7XFxuICBtYXJnaW46IDE1OyB9XFxuXFxuLm0tdC0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTsgfVxcblxcbi5tLXItMTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTsgfVxcblxcbi5tLWItMTUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7IH1cXG5cXG4ubS1sLTE1IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNTsgfVxcblxcbi5tLXgtMTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gIG1hcmdpbi1sZWZ0OiAxNTsgfVxcblxcbi5tLXktMTUge1xcbiAgbWFyZ2luLXRvcDogMTU7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLTE2IHtcXG4gIG1hcmdpbjogMTY7IH1cXG5cXG4ubS10LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2OyB9XFxuXFxuLm0tci0xNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuXFxuLm0tYi0xNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNjsgfVxcblxcbi5tLWwtMTYge1xcbiAgbWFyZ2luLWxlZnQ6IDE2OyB9XFxuXFxuLm0teC0xNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgbWFyZ2luLWxlZnQ6IDE2OyB9XFxuXFxuLm0teS0xNiB7XFxuICBtYXJnaW4tdG9wOiAxNjtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tMjAge1xcbiAgbWFyZ2luOiAyMDsgfVxcblxcbi5tLXQtMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7IH1cXG5cXG4ubS1yLTIwIHtcXG4gIG1hcmdpbi1yaWdodDogMjA7IH1cXG5cXG4ubS1iLTIwIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwOyB9XFxuXFxuLm0tbC0yMCB7XFxuICBtYXJnaW4tbGVmdDogMjA7IH1cXG5cXG4ubS14LTIwIHtcXG4gIG1hcmdpbi1yaWdodDogMjA7XFxuICBtYXJnaW4tbGVmdDogMjA7IH1cXG5cXG4ubS15LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS0yNCB7XFxuICBtYXJnaW46IDI0OyB9XFxuXFxuLm0tdC0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDsgfVxcblxcbi5tLXItMjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNDsgfVxcblxcbi5tLWItMjQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4ubS1sLTI0IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNDsgfVxcblxcbi5tLXgtMjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNDtcXG4gIG1hcmdpbi1sZWZ0OiAyNDsgfVxcblxcbi5tLXktMjQge1xcbiAgbWFyZ2luLXRvcDogMjQ7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLTI1IHtcXG4gIG1hcmdpbjogMjU7IH1cXG5cXG4ubS10LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1OyB9XFxuXFxuLm0tci0yNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1OyB9XFxuXFxuLm0tYi0yNSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNTsgfVxcblxcbi5tLWwtMjUge1xcbiAgbWFyZ2luLWxlZnQ6IDI1OyB9XFxuXFxuLm0teC0yNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1O1xcbiAgbWFyZ2luLWxlZnQ6IDI1OyB9XFxuXFxuLm0teS0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNTtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tMjgge1xcbiAgbWFyZ2luOiAyODsgfVxcblxcbi5tLXQtMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7IH1cXG5cXG4ubS1yLTI4IHtcXG4gIG1hcmdpbi1yaWdodDogMjg7IH1cXG5cXG4ubS1iLTI4IHtcXG4gIG1hcmdpbi1ib3R0b206IDI4OyB9XFxuXFxuLm0tbC0yOCB7XFxuICBtYXJnaW4tbGVmdDogMjg7IH1cXG5cXG4ubS14LTI4IHtcXG4gIG1hcmdpbi1yaWdodDogMjg7XFxuICBtYXJnaW4tbGVmdDogMjg7IH1cXG5cXG4ubS15LTI4IHtcXG4gIG1hcmdpbi10b3A6IDI4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS0zMCB7XFxuICBtYXJnaW46IDMwOyB9XFxuXFxuLm0tdC0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDsgfVxcblxcbi5tLXItMzAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDsgfVxcblxcbi5tLWItMzAge1xcbiAgbWFyZ2luLWJvdHRvbTogMzA7IH1cXG5cXG4ubS1sLTMwIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMDsgfVxcblxcbi5tLXgtMzAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gIG1hcmdpbi1sZWZ0OiAzMDsgfVxcblxcbi5tLXktMzAge1xcbiAgbWFyZ2luLXRvcDogMzA7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5wLTAge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5wLXQtMCB7XFxuICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbi5wLXItMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuLnAtYi0wIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuXFxuLnAtbC0wIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLXgtMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteS0wIHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC0yIHtcXG4gIHBhZGRpbmc6IDI7IH1cXG5cXG4ucC10LTIge1xcbiAgcGFkZGluZy10b3A6IDI7IH1cXG5cXG4ucC1yLTIge1xcbiAgcGFkZGluZy1yaWdodDogMjsgfVxcblxcbi5wLWItMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjsgfVxcblxcbi5wLWwtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDI7IH1cXG5cXG4ucC14LTIge1xcbiAgcGFkZGluZy1yaWdodDogMjtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXktMiB7XFxuICBwYWRkaW5nLXRvcDogMjtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtNCB7XFxuICBwYWRkaW5nOiA0OyB9XFxuXFxuLnAtdC00IHtcXG4gIHBhZGRpbmctdG9wOiA0OyB9XFxuXFxuLnAtci00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ7IH1cXG5cXG4ucC1iLTQge1xcbiAgcGFkZGluZy1ib3R0b206IDQ7IH1cXG5cXG4ucC1sLTQge1xcbiAgcGFkZGluZy1sZWZ0OiA0OyB9XFxuXFxuLnAteC00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC15LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLTUge1xcbiAgcGFkZGluZzogNTsgfVxcblxcbi5wLXQtNSB7XFxuICBwYWRkaW5nLXRvcDogNTsgfVxcblxcbi5wLXItNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1OyB9XFxuXFxuLnAtYi01IHtcXG4gIHBhZGRpbmctYm90dG9tOiA1OyB9XFxuXFxuLnAtbC01IHtcXG4gIHBhZGRpbmctbGVmdDogNTsgfVxcblxcbi5wLXgtNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1O1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteS01IHtcXG4gIHBhZGRpbmctdG9wOiA1O1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC04IHtcXG4gIHBhZGRpbmc6IDg7IH1cXG5cXG4ucC10LTgge1xcbiAgcGFkZGluZy10b3A6IDg7IH1cXG5cXG4ucC1yLTgge1xcbiAgcGFkZGluZy1yaWdodDogODsgfVxcblxcbi5wLWItOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogODsgfVxcblxcbi5wLWwtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDg7IH1cXG5cXG4ucC14LTgge1xcbiAgcGFkZGluZy1yaWdodDogODtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXktOCB7XFxuICBwYWRkaW5nLXRvcDogODtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtMTAge1xcbiAgcGFkZGluZzogMTA7IH1cXG5cXG4ucC10LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDsgfVxcblxcbi5wLXItMTAge1xcbiAgcGFkZGluZy1yaWdodDogMTA7IH1cXG5cXG4ucC1iLTEwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLWwtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDsgfVxcblxcbi5wLXgtMTAge1xcbiAgcGFkZGluZy1yaWdodDogMTA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteS0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTA7IH1cXG5cXG4ucC0xMiB7XFxuICBwYWRkaW5nOiAxMjsgfVxcblxcbi5wLXQtMTIge1xcbiAgcGFkZGluZy10b3A6IDEyOyB9XFxuXFxuLnAtci0xMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMjsgfVxcblxcbi5wLWItMTIge1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtbC0xMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDEyOyB9XFxuXFxuLnAteC0xMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMjtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC15LTEyIHtcXG4gIHBhZGRpbmctdG9wOiAxMjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMjsgfVxcblxcbi5wLTE1IHtcXG4gIHBhZGRpbmc6IDE1OyB9XFxuXFxuLnAtdC0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7IH1cXG5cXG4ucC1yLTE1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1OyB9XFxuXFxuLnAtYi0xNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC1sLTE1IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4ucC14LTE1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1O1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXktMTUge1xcbiAgcGFkZGluZy10b3A6IDE1O1xcbiAgcGFkZGluZy1ib3R0b206IDE1OyB9XFxuXFxuLnAtMTYge1xcbiAgcGFkZGluZzogMTY7IH1cXG5cXG4ucC10LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjsgfVxcblxcbi5wLXItMTYge1xcbiAgcGFkZGluZy1yaWdodDogMTY7IH1cXG5cXG4ucC1iLTE2IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLWwtMTYge1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5wLXgtMTYge1xcbiAgcGFkZGluZy1yaWdodDogMTY7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteS0xNiB7XFxuICBwYWRkaW5nLXRvcDogMTY7XFxuICBwYWRkaW5nLWJvdHRvbTogMTY7IH1cXG5cXG4ucC0yMCB7XFxuICBwYWRkaW5nOiAyMDsgfVxcblxcbi5wLXQtMjAge1xcbiAgcGFkZGluZy10b3A6IDIwOyB9XFxuXFxuLnAtci0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMDsgfVxcblxcbi5wLWItMjAge1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtbC0yMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwOyB9XFxuXFxuLnAteC0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMDtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC15LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDsgfVxcblxcbi5wLTI0IHtcXG4gIHBhZGRpbmc6IDI0OyB9XFxuXFxuLnAtdC0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7IH1cXG5cXG4ucC1yLTI0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0OyB9XFxuXFxuLnAtYi0yNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC1sLTI0IHtcXG4gIHBhZGRpbmctbGVmdDogMjQ7IH1cXG5cXG4ucC14LTI0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0O1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXktMjQge1xcbiAgcGFkZGluZy10b3A6IDI0O1xcbiAgcGFkZGluZy1ib3R0b206IDI0OyB9XFxuXFxuLnAtMjUge1xcbiAgcGFkZGluZzogMjU7IH1cXG5cXG4ucC10LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTsgfVxcblxcbi5wLXItMjUge1xcbiAgcGFkZGluZy1yaWdodDogMjU7IH1cXG5cXG4ucC1iLTI1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLWwtMjUge1xcbiAgcGFkZGluZy1sZWZ0OiAyNTsgfVxcblxcbi5wLXgtMjUge1xcbiAgcGFkZGluZy1yaWdodDogMjU7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteS0yNSB7XFxuICBwYWRkaW5nLXRvcDogMjU7XFxuICBwYWRkaW5nLWJvdHRvbTogMjU7IH1cXG5cXG4ucC0yOCB7XFxuICBwYWRkaW5nOiAyODsgfVxcblxcbi5wLXQtMjgge1xcbiAgcGFkZGluZy10b3A6IDI4OyB9XFxuXFxuLnAtci0yOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyODsgfVxcblxcbi5wLWItMjgge1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtbC0yOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI4OyB9XFxuXFxuLnAteC0yOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyODtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC15LTI4IHtcXG4gIHBhZGRpbmctdG9wOiAyODtcXG4gIHBhZGRpbmctYm90dG9tOiAyODsgfVxcblxcbi5wLTMwIHtcXG4gIHBhZGRpbmc6IDMwOyB9XFxuXFxuLnAtdC0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7IH1cXG5cXG4ucC1yLTMwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwOyB9XFxuXFxuLnAtYi0zMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4ucC1sLTMwIHtcXG4gIHBhZGRpbmctbGVmdDogMzA7IH1cXG5cXG4ucC14LTMwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwO1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXktMzAge1xcbiAgcGFkZGluZy10b3A6IDMwO1xcbiAgcGFkZGluZy1ib3R0b206IDMwOyB9XFxuXFxuLyogRGl2aWRlcnMgKi9cXG4uaHItbGlnaHQge1xcbiAgaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmhyLWRhcmsge1xcbiAgaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLyogQWxpZ25tZW50ICovXFxuLnRleHQtbGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLnRleHQtcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtbG93ZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7IH1cXG5cXG4udGV4dC11cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi50ZXh0LWNhcGl0YWxpemUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG5cXG4uZm9udC13ZWlnaHQtbm9ybWFsIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uZm9udC13ZWlnaHQtYm9sZCB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5mb250LWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4vKipcXHJcXG4gKiBGb250IHNpemVcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC50LTEwe2ZvbnQtc2l6ZToxMH1cXHJcXG4gKiBGcm9tIDEwLCAxMiwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBcXHJcXG4qKi9cXG4udC0xMCB7XFxuICBmb250LXNpemU6IDEwOyB9XFxuXFxuLnQtMTIge1xcbiAgZm9udC1zaXplOiAxMjsgfVxcblxcbi50LTE0IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4udC0xNSB7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLnQtMTYge1xcbiAgZm9udC1zaXplOiAxNjsgfVxcblxcbi50LTE3IHtcXG4gIGZvbnQtc2l6ZTogMTc7IH1cXG5cXG4udC0xOCB7XFxuICBmb250LXNpemU6IDE4OyB9XFxuXFxuLnQtMTkge1xcbiAgZm9udC1zaXplOiAxOTsgfVxcblxcbi50LTIwIHtcXG4gIGZvbnQtc2l6ZTogMjA7IH1cXG5cXG4udC0yNSB7XFxuICBmb250LXNpemU6IDI1OyB9XFxuXFxuLnQtMzAge1xcbiAgZm9udC1zaXplOiAzMDsgfVxcblxcbi5pbWctcm91bmRlZCB7XFxuICBib3JkZXItcmFkaXVzOiA1OyB9XFxuXFxuLmltZy1jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogMjA7IH1cXG5cXG4uaW1nLXRodW1ibmFpbCB7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuXFxuLmludmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTsgfVxcblxcbi5wdWxsLWxlZnQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDsgfVxcblxcbi5wdWxsLXJpZ2h0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLm0teC1hdXRvIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5tLXktYXV0byB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtcHJpbWFyeSB7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi50ZXh0LWRhbmdlciB7XFxuICBjb2xvcjogI0VENDczRjsgfVxcblxcbi50ZXh0LW11dGVkIHtcXG4gIGNvbG9yOiAjOWU5ZTllOyB9XFxuXFxuLmJnLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmJnLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUQ0NzNGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYWN0aW9uLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5hY3Rpb24tYmFyIC5hY3Rpb24tYmFyLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTc7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5hY3Rpb24tYmFyIC5hY3Rpb24taXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgd2lkdGg6IDMwO1xcbiAgaGVpZ2h0OiAzMDsgfVxcblxcbi5idG4ge1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1pbi1oZWlnaHQ6IDM2O1xcbiAgbWluLXdpZHRoOiA2NDtcXG4gIHBhZGRpbmc6IDEwIDEwIDEwIDEwO1xcbiAgZm9udC1zaXplOiAxODtcXG4gIG1hcmdpbjogOCAxNiA4IDE2OyB9XFxuICAuYnRuLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkODBmZjsgfVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgYm9yZGVyLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MjZmZjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDcyNmZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWFxdWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWJsdWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1YWZlOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWJyb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1mb3Jlc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWdyZXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2ODdjOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWxlbW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWEwMDtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGltZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZWU0MDY7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLW9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTdjMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tcHVycGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxMzBmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ydWJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1za3kge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5idG4tb3V0bGluZS5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkODBmZjsgfVxcblxcbi5idG5baXNFbmFibGVkPWZhbHNlXSB7XFxuICBjb2xvcjogI2E0YTRhNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBib3JkZXItY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lLCBmb250YXdlc29tZS13ZWJmb250OyB9XFxuXFxuLmZvcm0gLmlucHV0IHtcXG4gIHBhZGRpbmc6IDE2IDggMTYgODtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAuZm9ybSAuaW5wdXQuaW5wdXQtYm9yZGVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI7XFxuICAgIHBhZGRpbmc6IDE2OyB9XFxuICAuZm9ybSAuaW5wdXQuaW5wdXQtcm91bmRlZCB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyODtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dFtpc0VuYWJsZWQ9J2ZhbHNlJ10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XFxuXFxuLmZvcm0gLmlucHV0LWZpZWxkIHtcXG4gIG1hcmdpbjogODsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTI7XFxuICAgIGNvbG9yOiAjYmFiYWJhOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmlucHV0IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwIDAgOCAwOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmhyLWxpZ2h0LmFjdGl2ZSxcXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItZGFyay5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQuaW5wdXQtc2lkZXMgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgbWFyZ2luOiAwIDAgOCAwOyB9XFxuXFxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XFxuICBtYXJnaW4tYm90dG9tOiA0O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLmJvZHksXFxuLmJvZHkyLFxcbi5mb290bm90ZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uaDEge1xcbiAgZm9udC1zaXplOiAzMjsgfVxcblxcbi5oMiB7XFxuICBmb250LXNpemU6IDIyOyB9XFxuXFxuLmgzIHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uaDQge1xcbiAgZm9udC1zaXplOiAxMjsgfVxcblxcbi5oNSB7XFxuICBmb250LXNpemU6IDExOyB9XFxuXFxuLmg2IHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4uYm9keSB7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLmJvZHkyIHtcXG4gIGZvbnQtc2l6ZTogMTc7IH1cXG5cXG4uZm9vdG5vdGUge1xcbiAgZm9udC1zaXplOiAxMzsgfVxcblxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBmb250LXNpemU6IDE2O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTY7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gTGFiZWwge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC50aHVtYiB7XFxuICAgIHN0cmV0Y2g6IGZpbGw7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XFxuICAgIGNvbG9yOiAjMDIyNzM0O1xcbiAgICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbi5wcm9ncmVzcyB7XFxuICBjb2xvcjogIzNBNTNGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uc2VnbWVudGVkLWJhciB7XFxuICBmb250LXNpemU6IDEzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQsIC5zaWRlZHJhd2VyLWNlbnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBoZWlnaHQ6IDE0ODtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgcGFkZGluZzogMTYgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgcGFkZGluZzogMjAgMTUgMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA2NDtcXG4gIHdpZHRoOiA2NDtcXG4gIGJvcmRlci1yYWRpdXM6IDMyO1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IDM2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDc0O1xcbiAgd2lkdGg6IDc0O1xcbiAgYm9yZGVyLXJhZGl1czogMzc7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBjb2xvcjogIzczNzM3MzsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gIGhlaWdodDogNDg7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcmllbnRhdGlvbjogaG9yaXpvbnRhbDsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gICAgd2lkdGg6IDI0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGhlaWdodDogNDg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUge1xcbiAgICBjb2xvcjogIzNBNTNGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODsgfVxcbiAgICAuc2lkZWRyYXdlci1saXN0LWl0ZW0uYWN0aXZlIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gICAgICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDE2IDAgMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDAgMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiAwLjE7XFxuICB3aWR0aDogODAlO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuICAuc2xpZGVyW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uc3dpdGNoW2NoZWNrZWQ9dHJ1ZV1baXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnRhYi12aWV3IHtcXG4gIC8qY29sb3I6ICRzZWNvbmRhcnk7Ki9cXG4gIHNlbGVjdGVkLWNvbG9yOiAjMzBiY2ZmO1xcbiAgdGFicy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAudGFiLXZpZXcgLnRhYi12aWV3LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4jbG9naW4tYmFja2dyb3VuZCB7XFxuICBtYXJnaW4tdG9wOiAtMjA7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXAge1xcbiAgcGFkZGluZzogMCA0MDsgfVxcblxcbi5sb2dvLXdyYXAge1xcbiAgbWFyZ2luOiA2MCAwIDEwIDA7XFxuICBwYWRkaW5nOiAyMCAwOyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuOTsgfVxcbiAgLmxvZ28td3JhcCAubG9naW4tbG9nby1zdWIge1xcbiAgICBjb2xvcjogIzIxMjEyMTtcXG4gICAgb3BhY2l0eTogLjg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5sb2dpbi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDM7IH1cXG4gIC5sb2dpbi13cmFwcGVyIFRleHRGaWVsZCB7XFxuICAgIHBhZGRpbmc6IDEwIDEwO1xcbiAgICBtYXJnaW46IDEwIDAgMCAwOyB9XFxuXFxuLmdvLWJhY2sge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4vKipcXHJcXG4gKiBJbXBvcnQgYWxsIHBsYXRmb3JtIHNwZWNpZmljIGZpbGVzIGhlcmVcXHJcXG4gKi9cXG4uYnRuIHtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGZvbnQtZmFtaWx5OiAnU0YgVUkgVGV4dCBNZWRpdW0nO1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5idG4tb3V0bGluZSB7XFxuICBib3JkZXItd2lkdGg6IDE7IH1cXG5cXG4uYnRuLXJvdW5kZWQtc20ge1xcbiAgYm9yZGVyLXJhZGl1czogNDsgfVxcblxcbi5idG4tcm91bmRlZC1sZyB7XFxuICBib3JkZXItcmFkaXVzOiAxOTsgfVxcblxcbi5mb3JtIHtcXG4gIGZvbnQtZmFtaWx5OiAnU0YgVUkgVGV4dCBSZWd1bGFyJzsgfVxcbiAgLmZvcm0gLmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNTsgfVxcbiAgICAuZm9ybSAuaW5wdXQuaW5wdXQtcm91bmRlZCB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjc7IH1cXG5cXG4vKiBUaGlzIGlzIGhlcmUgdGVtcG9yYXJpbHkgYmVjYXVzZSBfaW5kZXguaW9zLnNjc3MgY2Fubm90IGJlIGVtcHR5ICovXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogMzI7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIG1hcmdpbjogMTAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiwgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLnN3aXRjaCB7XFxuICBtYXJnaW46IDggMTU7IH1cXG5cXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIHtcXG4gIHBhZGRpbmc6IDE2IDE1IDE2IDE1OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC50aHVtYiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTU7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIG1hcmdpbjogMCAxNTtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLmZhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udEF3ZXNvbWVcXFwiOyB9XFxuXCIsIFwiXCJdKTtcblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5zY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9hcHAuc2Nzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgJ3JlYWN0LWhvdC1sb2FkZXInOyAvLyBNdXN0IGJlIGltcG9ydGVkIGJlZm9yZSBSZWFjdCBhbmQgUmVhY3ROYXRpdmVTY3JpcHQuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyogQ29udHJvbHMgcmVhY3QtbmF0aXZlc2NyaXB0IGxvZyB2ZXJib3NpdHkuIHRydWU6IGFsbCBsb2dzOyBmYWxzZTogb25seSBlcnJvciBsb2dzLiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCwgJ19fREVWX18nLCB7IHZhbHVlOiBmYWxzZSB9KTtcbmltcG9ydCAqIGFzIFJlYWN0TmF0aXZlU2NyaXB0IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBDb250YWluZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJvb3RSZWY6IFJlYWN0LlJlZk9iamVjdDxhbnk+ID0gUmVhY3QuY3JlYXRlUmVmPGFueT4oKTtcblxuUmVhY3ROYXRpdmVTY3JpcHQuc3RhcnQoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQXBwQ29udGFpbmVyLFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3J3YXJkZWRSZWY6IHJvb3RSZWZcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbFxuICAgICksXG4gICAgLyogVGhpcyByZWYgTVVTVCBtYXRjaCB0aGUgcmVmIHRoYXQgeW91IHBhc3MgaW50byB0aGUgYmFzZSBjb21wb25lbnQgb2YgeW91ciBhcHAgY29udGFpbmVyLiAqL1xuICAgIHJvb3RSZWZcbik7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxuKiovXFxuLmZhIHtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLmluZm8ge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblwiLCBcIlwiXSk7XG5cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IGhvdCB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXIvcm9vdCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7ICRQYWdlLCAkTGFiZWwsICRBY3Rpb25CYXIsICRHcmlkTGF5b3V0LCAkRm9ybWF0dGVkU3RyaW5nLCAkU3BhbiwgJFN3aXRjaCwgJEZyYW1lLCAkQnV0dG9uLCAkU3RhY2tMYXlvdXQsICREYXRlUGlja2VyLCAkVGV4dEZpZWxkLCAkU2VnbWVudGVkQmFySXRlbSwgJFNsaWRlciwgJEFjdGlvbkl0ZW0gfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBJdGVtU3BlYyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dC9ncmlkLWxheW91dCc7XG5pbXBvcnQgeyBGcmFtZSwgUGFnZSwgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcbmltcG9ydCB7IFJlYWN0aWZpZWQgfSBmcm9tICd+L1JlYWN0aWZpZWQvUmVhY3RpZmllZCc7XG5cbmltcG9ydCB7IF9MYWJlbCBhcyBMYWJlbENvbXBvbmVudCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQvZGlzdC9jb21wb25lbnRzL0xhYmVsXCI7XG5pbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBEYXRlUGlja2VyLFxuICAgIEVkaXRhYmxlVGV4dEJhc2UsXG4gICAgVGV4dEZpZWxkLFxuICAgIEh0bWxWaWV3LFxuICAgIExhYmVsLFxuICAgIExpc3RQaWNrZXIsXG4gICAgUGxhY2Vob2xkZXIsXG4gICAgU2Nyb2xsVmlldyxcbiAgICBTZWFyY2hCYXIsXG4gICAgU2VnbWVudGVkQmFyLFxuICAgIFNsaWRlcixcbiAgICBTd2l0Y2gsXG4gICAgQWN0aW9uSXRlbSxcbiAgICBUYWJWaWV3LFxuICAgIFRhYlZpZXdJdGVtXG59IGZyb20gJ3JlYWN0LW5hdGl2ZXNjcmlwdC9kaXN0L2NsaWVudC9FbGVtZW50UmVnaXN0cnknO1xuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b24vYnV0dG9uJztcblxuY2xhc3MgTXlGYW5jeUJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG5cbn1cblxuXG4vLyBjb25zdCBNeUJ1dHRvbiA9IFJlYWN0aWZpZWQobmV3IEJ1dHRvbigpLCBcImJ1dHRvblwiKTtcblxuLy8gY29uc3QgTXlDb21wb25lbnQgPSBSZWFjdGlmaWVkKG5ldyBUYWJWaWV3KCkpOyBcbmNvbnN0IE15TGFiZWwgPSBSZWFjdGlmaWVkKG5ldyBMYWJlbCgpKTtcbmNvbnN0IE15VGFiVmlldyA9IFJlYWN0aWZpZWQobmV3IFRhYlZpZXcoKSk7IFxuY29uc3QgTXlUYWJWaWV3SXRlbSA9IFJlYWN0aWZpZWQobmV3IFRhYlZpZXdJdGVtKCkpO1xuY29uc3QgTXlCdXR0b24gPSBSZWFjdGlmaWVkKG5ldyBCdXR0b24oKSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgZm9yd2FyZGVkUmVmOiBSZWFjdC5SZWZPYmplY3Q8RnJhbWU+LFxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuXG59XG5cbmNsYXNzIEFwcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhZ2VSZWY6IFJlYWN0LlJlZk9iamVjdDxQYWdlPiA9IFJlYWN0LmNyZWF0ZVJlZjxQYWdlPigpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbXlGYW5jeUJ1dHRvblJlZjogUmVhY3QuUmVmT2JqZWN0PE15RmFuY3lCdXR0b24+ID0gUmVhY3QuY3JlYXRlUmVmPE15RmFuY3lCdXR0b24+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBteURhdGVQaWNrZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWY8RGF0ZVBpY2tlcj4oKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG15RWRpdGFibGVUZXh0QmFzZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxFZGl0YWJsZVRleHRCYXNlPigpOyAvLyAod29uJ3Qgc2hvdylcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuXG5cbiAgICAgICAgY29uc3QgZnJhbWU6IEZyYW1lID0gdGhpcy5wcm9wcy5mb3J3YXJkZWRSZWYuY3VycmVudCE7XG4gICAgICAgIGZyYW1lLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSB0aGlzLnBhZ2VSZWYuY3VycmVudCE7XG4gICAgICAgICAgICAgICAgcGFnZS5hZGRDc3NGaWxlKFwiLi9jb21wb25lbnRzL0FwcENvbnRhaW5lci5zY3NzXCIpOyAvLyBQYXRoIGlzIHJlbGF0aXZlIHRvIHRoZSAnYXBwJyBmb2xkZXI7IG5vdCByZWxhdGl2ZSB0byB0aGlzIGZpbGUhXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBjb25zdCBteUZhbmN5QnV0dG9uID0gdGhpcy5teUZhbmN5QnV0dG9uUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBteUZhbmN5QnV0dG9uLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcInNpbHZlclwiKTtcbiAgICAgICAgICAgIG15RmFuY3lCdXR0b24ub24oXCJ0YXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YXBcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBjb25zdCBteURhdGVQaWNrZXIgPSB0aGlzLm15RGF0ZVBpY2tlclJlZi5jdXJyZW50O1xuICAgICAgICAgICAgbXlEYXRlUGlja2VyLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcImdyZWVuXCIpO1xuICAgICAgICAgICAgbXlEYXRlUGlja2VyLm9uKFwidGFwXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFhYXAhXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwyMDAwKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IGZvcndhcmRlZFJlZiB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPCRGcmFtZSByZWY9e2ZvcndhcmRlZFJlZn0+XG4gICAgICAgICAgICAgICAgPCRQYWdlIHJlZj17dGhpcy5wYWdlUmVmfSBjbGFzc05hbWU9XCJwYWdlXCIgYWN0aW9uQmFySGlkZGVuPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIDwkQWN0aW9uQmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCRBY3Rpb25JdGVtIHRleHQ9e1wiQ2hlY2sgdGhpcyBvdXRcIn0gb25UYXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC8kQWN0aW9uQmFyPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwkU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPCRTd2l0Y2ggb25Ub2dnbGU9eyhjaGVja2VkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2VkOiBcIiArIGNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFwPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC8kU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC8kUGFnZT5cbiAgICAgICAgICAgIDwvJEZyYW1lPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuLypcbjxNeVRhYlZpZXdJdGVtIHRpdGxlPXtcImxlZnRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNeUxhYmVsIHRleHQ9e1wic29tZSBjb250ZW50XCJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L015VGFiVmlld0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15VGFiVmlld0l0ZW0gdGl0bGU9e1wibWlkZGxlXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlMYWJlbCB0ZXh0PXtcInNvbWUgY29udGVudFwifS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NeVRhYlZpZXdJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNeVRhYlZpZXdJdGVtIHRpdGxlPXtcInJpZ2h0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlMYWJlbCB0ZXh0PXtcInNvbWUgY29udGVudFwifS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NeVRhYlZpZXdJdGVtPlxuKi9cblxuXG4vLyBleHBvcnQgZGVmYXVsdCBBcHBDb250YWluZXI7XG5leHBvcnQgZGVmYXVsdCBob3QoQXBwQ29udGFpbmVyKTsgLy8gUmVwbGFjZSB0aGlzIGxpbmUgd2l0aCB0aGUgYWJvdmUgbGluZSBpZiB5b3Ugd2FudCB0byByZW1vdmUgaG90IGxvYWRpbmcuIl0sInNvdXJjZVJvb3QiOiIifQ==