export declare type EEnvProperty = ESystem | EBrowser | EBrowserEngine | EDeviceCategory | EDeviceType;
export declare enum ESystem {
    osx = "OSX",
    ios = "IOS",
    android = "ANDROID",
    windows = "WINDOWS",
    linux = "LINUX",
    unknown = "UNKNOWN"
}
export declare enum EBrowser {
    ie = "IE",
    edge = "EDGE",
    firefox = "FIREFOX",
    chrome = "CHROME",
    opera = "OPERA",
    operaMini = "OPERA_MINI",
    seaMonkey = "SEA_MONKEY",
    silk = "SILK",
    safari = "SAFARI",
    electron = "ELECTRON",
    phantomJs = "PHANTOM_JS",
    unknown = "UNKNOWN"
}
export declare enum EBrowserEngine {
    blink = "BLINK",
    edgeHtml = "EDGE_HTML",
    gecko = "GEGKO",
    trident = "TRIDENT",
    webKit = "WEBKIT",
    unknown = "UNKNOWN"
}
export declare enum EDeviceCategory {
    desktop = "DESKTOP",
    tablet = "TABLET",
    phone = "PHONE"
}
export declare enum EDeviceType {
    iPod = "IPOD",
    iPad = "IPAD",
    iPhone = "IPHONE",
    androidTablet = "ANDROID_TABLET",
    androidPhone = "ANDROID_PHONE",
    desktop = "DESKTOP",
    unknown = "UNKNOWN"
}
