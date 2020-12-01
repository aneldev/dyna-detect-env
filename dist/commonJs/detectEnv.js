"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._debug_platform = exports.hasEnv = exports.detectEnv = void 0;
// @ts-ignore
var platform = require("platform");
var enums_1 = require("./enums");
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
    if (family.includes('windows')) {
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
var hasEnv = function (properties, all) {
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
exports.hasEnv = hasEnv;
exports._debug_platform = platform;
//# sourceMappingURL=detectEnv.js.map