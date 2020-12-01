// @ts-ignore
import * as platform from "platform";
import { EBrowser, EBrowserEngine, EDeviceCategory, EDeviceType, ESystem } from "./enums";
// help: https://github.com/bestiejs/platform.js/blob/master/doc/README.md
var getSystem = function () {
    var family = platform.os.family.toLowerCase();
    if (family.includes("windows"))
        return ESystem.windows;
    if (family === "os x")
        return ESystem.osx;
    if (family === "ios")
        return ESystem.ios;
    if (family === "android")
        return ESystem.android;
    if (["Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE"]
        .map(function (n) { return n.toLowerCase(); })
        .includes(family.toLowerCase()))
        return ESystem.linux;
    else
        return ESystem.unknown;
};
var getBrowser = function () {
    // all browsers might are the mobile version
    var pName = platform.name.toLowerCase();
    if (pName.includes("chrome"))
        return EBrowser.chrome;
    if (pName.includes("electron"))
        return EBrowser.electron;
    if (pName.includes("firefox"))
        return EBrowser.firefox;
    if (pName.includes("microsoft edge"))
        return EBrowser.edge;
    if (pName.includes("phantomjs"))
        return EBrowser.phantomJs;
    if (pName.includes("safari"))
        return EBrowser.safari;
    if (pName.includes("seamonkey"))
        return EBrowser.seaMonkey;
    if (pName.includes("silk"))
        return EBrowser.silk;
    if (pName === "ie")
        return EBrowser.ie;
    if (pName === "opera mini")
        return EBrowser.operaMini;
    if (pName.includes("opera")) // opera mobile goes here
        return EBrowser.opera;
    else
        return EBrowser.unknown;
};
var getBrowserEngine = function () {
    switch (platform.layout) {
        case "Blink":
            return EBrowserEngine.blink;
        case "EdgeHTML":
            return EBrowserEngine.edgeHtml;
        case "Gecko":
            return EBrowserEngine.gecko;
        case "Trident":
            return EBrowserEngine.trident;
        case "WebKit":
            return EBrowserEngine.webKit;
        default:
            return EBrowserEngine.unknown;
    }
};
var getDeviceCategory = function () {
    if ([
        "iPod",
        "iPad",
        "Kindle", "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad", "Transformer",
    ].includes(platform.product))
        return EDeviceCategory.tablet;
    var family = platform.os.family.toLowerCase();
    if (family.includes('windows')) {
        return EDeviceCategory.desktop;
    }
    if ([ESystem.osx, ESystem.linux].includes(getSystem())) {
        return EDeviceCategory.desktop;
    }
    // for any other cases, return phone, not so accurate but it is cheap
    return EDeviceCategory.phone;
};
var getDeviceType = function () {
    var deviceCategory = getDeviceCategory();
    var system = getSystem();
    if (deviceCategory === EDeviceCategory.desktop)
        return EDeviceType.desktop;
    if (deviceCategory === EDeviceCategory.tablet) {
        if (system === ESystem.android)
            return EDeviceType.androidTablet;
        if (!platform.product)
            return EDeviceType.unknown;
        if (platform.product.toLowerCase() === "ipod")
            return EDeviceType.iPod;
        if (platform.product.toLowerCase() === "ipad")
            return EDeviceType.iPad;
        return EDeviceType.unknown;
    }
    if (deviceCategory === EDeviceCategory.phone) {
        if (system === ESystem.android)
            return EDeviceType.androidPhone;
        if (!platform.product)
            return EDeviceType.unknown;
        if (platform.product.toLowerCase() === "iphone")
            return EDeviceType.iPhone;
        return EDeviceType.unknown;
    }
    return EDeviceType.unknown;
};
export var detectEnv = {
    system: getSystem(),
    browser: getBrowser(),
    browserEngine: getBrowserEngine(),
    deviceCategory: getDeviceCategory(),
    deviceType: getDeviceType(),
};
export var hasEnv = function (properties, all) {
    if (all === void 0) { all = true; }
    var mathcing = 0;
    var _properties = Array.isArray(properties) ? properties : [properties];
    Object.keys(detectEnv)
        .map(function (key) { return detectEnv[key]; })
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
export var _debug_platform = platform;
//# sourceMappingURL=detectEnv.js.map