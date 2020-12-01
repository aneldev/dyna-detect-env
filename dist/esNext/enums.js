export var ESystem;
(function (ESystem) {
    ESystem["osx"] = "system_OSX";
    ESystem["ios"] = "system_IOS";
    ESystem["android"] = "system_ANDROID";
    ESystem["windows"] = "system_WINDOWS";
    ESystem["linux"] = "system_LINUX";
    ESystem["unknown"] = "system_UNKNOWN";
})(ESystem || (ESystem = {}));
export var EBrowser;
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
})(EBrowser || (EBrowser = {}));
export var EBrowserEngine;
(function (EBrowserEngine) {
    EBrowserEngine["blink"] = "browser_engine_BLINK";
    EBrowserEngine["edgeHtml"] = "browser_engine_EDGE_HTML";
    EBrowserEngine["gecko"] = "browser_engine_GECKO";
    EBrowserEngine["trident"] = "browser_engine_TRIDENT";
    EBrowserEngine["webKit"] = "browser_engine_WEBKIT";
    EBrowserEngine["unknown"] = "browser_engine_UNKNOWN";
})(EBrowserEngine || (EBrowserEngine = {}));
export var EDeviceCategory;
(function (EDeviceCategory) {
    EDeviceCategory["desktop"] = "device_category_DESKTOP";
    EDeviceCategory["tablet"] = "device_category_TABLET";
    EDeviceCategory["phone"] = "device_category_PHONE";
})(EDeviceCategory || (EDeviceCategory = {}));
export var EDeviceType;
(function (EDeviceType) {
    EDeviceType["iPod"] = "device_type_IPOD";
    EDeviceType["iPad"] = "device_type_IPAD";
    EDeviceType["iPhone"] = "device_type_IPHONE";
    EDeviceType["androidTablet"] = "device_type_ANDROID_TABLET";
    EDeviceType["androidPhone"] = "device_type_ANDROID_PHONE";
    EDeviceType["desktop"] = "device_type_DESKTOP";
    EDeviceType["unknown"] = "device_type_UNKNOWN";
})(EDeviceType || (EDeviceType = {}));
//# sourceMappingURL=enums.js.map