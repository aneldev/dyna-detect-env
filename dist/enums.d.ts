export declare type EEnvProperty = ESystem | EBrowser | EBrowserEngine | EDeviceCategory | EDeviceType;
export declare enum ESystem {
    osx = "system_OSX",
    ios = "system_IOS",
    android = "system_ANDROID",
    windows = "system_WINDOWS",
    linux = "system_LINUX",
    unknown = "system_UNKNOWN"
}
export declare enum EBrowser {
    ie = "browser_IE",
    edge = "browser_EDGE",
    firefox = "browser_FIREFOX",
    chrome = "browser_CHROME",
    opera = "browser_OPERA",
    operaMini = "browser_OPERA_MINI",
    seaMonkey = "browser_SEA_MONKEY",
    silk = "browser_SILK",
    safari = "browser_SAFARI",
    electron = "browser_ELECTRON",
    phantomJs = "browser_PHANTOM_JS",
    unknown = "browser_UNKNOWN"
}
export declare enum EBrowserEngine {
    blink = "browser_BLINK",
    edgeHtml = "browser_EDGE_HTML",
    gecko = "browser_GECKO",
    trident = "browser_TRIDENT",
    webKit = "browser_WEBKIT",
    unknown = "browser_UNKNOWN"
}
export declare enum EDeviceCategory {
    desktop = "browser_DESKTOP",
    tablet = "browser_TABLET",
    phone = "browser_PHONE"
}
export declare enum EDeviceType {
    iPod = "browser_IPOD",
    iPad = "browser_IPAD",
    iPhone = "browser_IPHONE",
    androidTablet = "browser_ANDROID_TABLET",
    androidPhone = "browser_ANDROID_PHONE",
    desktop = "browser_DESKTOP",
    unknown = "browser_UNKNOWN"
}
