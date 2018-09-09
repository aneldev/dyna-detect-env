(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("platform"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-detect-env", ["platform"], factory);
	else if(typeof exports === 'object')
		exports["dyna-detect-env"] = factory(require("platform"));
	else
		root["dyna-detect-env"] = factory(root["platform"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ESystem;
(function (ESystem) {
    ESystem["osx"] = "system_OSX";
    ESystem["ios"] = "system_IOS";
    ESystem["android"] = "system_ANDROID";
    ESystem["windows"] = "system_WINDOWS";
    ESystem["linux"] = "system_LINUX";
    ESystem["unknown"] = "system_UNKNOWN";
})(ESystem = exports.ESystem || (exports.ESystem = {}));
var EBrowser;
(function (EBrowser) {
    EBrowser["ie"] = "browser_IE";
    EBrowser["edge"] = "browser_EDGE";
    EBrowser["firefox"] = "browser_FIREFOX";
    EBrowser["chrome"] = "browser_CHROME";
    EBrowser["opera"] = "browser_OPERA";
    EBrowser["operaMini"] = "browser_OPERA_MINI";
    EBrowser["seaMonkey"] = "browser_SEA_MONKEY";
    EBrowser["silk"] = "browser_SILK";
    EBrowser["safari"] = "browser_SAFARI";
    EBrowser["electron"] = "browser_ELECTRON";
    EBrowser["phantomJs"] = "browser_PHANTOM_JS";
    EBrowser["unknown"] = "browser_UNKNOWN";
})(EBrowser = exports.EBrowser || (exports.EBrowser = {}));
var EBrowserEngine;
(function (EBrowserEngine) {
    EBrowserEngine["blink"] = "browser_engine_BLINK";
    EBrowserEngine["edgeHtml"] = "browser_engine_EDGE_HTML";
    EBrowserEngine["gecko"] = "browser_engine_GECKO";
    EBrowserEngine["trident"] = "browser_engine_TRIDENT";
    EBrowserEngine["webKit"] = "browser_engine_WEBKIT";
    EBrowserEngine["unknown"] = "browser_engine_UNKNOWN";
})(EBrowserEngine = exports.EBrowserEngine || (exports.EBrowserEngine = {}));
var EDeviceCategory;
(function (EDeviceCategory) {
    EDeviceCategory["desktop"] = "device_category_DESKTOP";
    EDeviceCategory["tablet"] = "device_category_TABLET";
    EDeviceCategory["phone"] = "device_category_PHONE";
})(EDeviceCategory = exports.EDeviceCategory || (exports.EDeviceCategory = {}));
var EDeviceType;
(function (EDeviceType) {
    EDeviceType["iPod"] = "device_type_IPOD";
    EDeviceType["iPad"] = "device_type_IPAD";
    EDeviceType["iPhone"] = "device_type_IPHONE";
    EDeviceType["androidTablet"] = "device_type_ANDROID_TABLET";
    EDeviceType["androidPhone"] = "device_type_ANDROID_PHONE";
    EDeviceType["desktop"] = "device_type_DESKTOP";
    EDeviceType["unknown"] = "device_type_UNKNOWN";
})(EDeviceType = exports.EDeviceType || (exports.EDeviceType = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var detectEnv_1 = __webpack_require__(2);
exports.detectEnv = detectEnv_1.detectEnv;
exports.hasEnv = detectEnv_1.hasEnv;
exports._debug_platform = detectEnv_1._debug_platform;
var enums_1 = __webpack_require__(0);
exports.ESystem = enums_1.ESystem;
exports.EBrowser = enums_1.EBrowser;
exports.EBrowserEngine = enums_1.EBrowserEngine;
exports.EDeviceCategory = enums_1.EDeviceCategory;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform = __webpack_require__(3);
var enums_1 = __webpack_require__(0);
// help: https://github.com/bestiejs/platform.js/blob/master/doc/README.md
var getSystem = function () {
    var family = platform.os.family.toLowerCase();
    if (family.includes("windows"))
        return enums_1.ESystem.windows;
    if (family === "os x")
        return enums_1.ESystem.osx;
    if (family === "ios")
        return enums_1.ESystem.ios;
    if (family === "android")
        return enums_1.ESystem.android;
    if (["Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE"]
        .map(function (n) { return n.toLowerCase(); })
        .includes(family.toLowerCase()))
        return enums_1.ESystem.linux;
    else
        return enums_1.ESystem.unknown;
};
var getBrowser = function () {
    // all browsers might are the mobile version
    var pName = platform.name.toLowerCase();
    if (pName.includes("chrome"))
        return enums_1.EBrowser.chrome;
    if (pName.includes("electron"))
        return enums_1.EBrowser.electron;
    if (pName.includes("firefox"))
        return enums_1.EBrowser.firefox;
    if (pName.includes("microsoft edge"))
        return enums_1.EBrowser.edge;
    if (pName.includes("phantomjs"))
        return enums_1.EBrowser.phantomJs;
    if (pName.includes("safari"))
        return enums_1.EBrowser.safari;
    if (pName.includes("seamonkey"))
        return enums_1.EBrowser.seaMonkey;
    if (pName.includes("silk"))
        return enums_1.EBrowser.silk;
    if (pName === "ie")
        return enums_1.EBrowser.ie;
    if (pName === "opera mini")
        return enums_1.EBrowser.operaMini;
    if (pName.includes("opera")) // opera mobile goes here
        return enums_1.EBrowser.opera;
    else
        return enums_1.EBrowser.unknown;
};
var getBrowserEngine = function () {
    switch (platform.layout) {
        case "Blink":
            return enums_1.EBrowserEngine.blink;
        case "EdgeHTML":
            return enums_1.EBrowserEngine.edgeHtml;
        case "Gecko":
            return enums_1.EBrowserEngine.gecko;
        case "Trident":
            return enums_1.EBrowserEngine.trident;
        case "WebKit":
            return enums_1.EBrowserEngine.webKit;
        default:
            return enums_1.EBrowserEngine.unknown;
    }
};
var getDeviceCategory = function () {
    if ([
        "iPod",
        "iPad",
        "Kindle", "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad", "Transformer",
    ].includes(platform.product))
        return enums_1.EDeviceCategory.tablet;
    var family = platform.os.family.toLowerCase();
    if (family.includes('windows') && !family.includes('windows')) {
        return enums_1.EDeviceCategory.desktop;
    }
    if ([enums_1.ESystem.osx, enums_1.ESystem.linux].includes(getSystem())) {
        return enums_1.EDeviceCategory.desktop;
    }
    // for any other cases, return phone, not so accurate but it is cheap
    return enums_1.EDeviceCategory.phone;
};
var getDeviceType = function () {
    var deviceCategory = getDeviceCategory();
    var system = getSystem();
    if (deviceCategory === enums_1.EDeviceCategory.desktop)
        return enums_1.EDeviceType.desktop;
    if (deviceCategory === enums_1.EDeviceCategory.tablet) {
        if (system === enums_1.ESystem.android)
            return enums_1.EDeviceType.androidTablet;
        if (!platform.product)
            return enums_1.EDeviceType.unknown;
        if (platform.product.toLowerCase() === "ipod")
            return enums_1.EDeviceType.iPod;
        if (platform.product.toLowerCase() === "ipad")
            return enums_1.EDeviceType.iPad;
        return enums_1.EDeviceType.unknown;
    }
    if (deviceCategory === enums_1.EDeviceCategory.phone) {
        if (system === enums_1.ESystem.android)
            return enums_1.EDeviceType.androidPhone;
        if (!platform.product)
            return enums_1.EDeviceType.unknown;
        if (platform.product.toLowerCase() === "iphone")
            return enums_1.EDeviceType.iPhone;
        return enums_1.EDeviceType.unknown;
    }
    return enums_1.EDeviceType.unknown;
};
exports.detectEnv = {
    system: getSystem(),
    browser: getBrowser(),
    browserEngine: getBrowserEngine(),
    deviceCategory: getDeviceCategory(),
    deviceType: getDeviceType(),
};
exports.hasEnv = function (properties, all) {
    if (all === void 0) { all = true; }
    var mathcing = 0;
    var _properties = Array.isArray(properties) ? properties : [properties];
    Object.keys(exports.detectEnv)
        .map(function (key) { return exports.detectEnv[key]; })
        .reduce(function (acc, prop) {
        if (!acc.includes(prop))
            acc.push(prop);
        return acc;
    }, [])
        .forEach(function (detectedProperty) {
        if (_properties.includes(detectedProperty))
            mathcing++;
    });
    if (all)
        return mathcing === _properties.length;
    else
        return mathcing > 0;
};
exports._debug_platform = platform;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("platform");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});