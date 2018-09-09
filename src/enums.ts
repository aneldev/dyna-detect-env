export type EEnvProperty = ESystem | EBrowser | EBrowserEngine | EDeviceCategory | EDeviceType;

export enum ESystem {
	osx = "system_OSX",
	ios = "system_IOS",
	android = "system_ANDROID",
	windows = "system_WINDOWS",
	linux = "system_LINUX",
	unknown = "system_UNKNOWN",
}

export enum EBrowser {
	ie = "browser_IE",
	edge = "browser_EDGE",
	firefox = "browser_FIREFOX",
	chrome = "browser_CHROME",
	opera = "browser_OPERA",
	operaMini = "browser_OPERA_MINI", // its completely different browser!
	seaMonkey = "browser_SEA_MONKEY",
	silk = "browser_SILK",
	safari = "browser_SAFARI",
	electron = "browser_ELECTRON",
	phantomJs = "browser_PHANTOM_JS",
	unknown = "browser_UNKNOWN",
}

export enum EBrowserEngine {
	blink = "browser_engine_BLINK",
	edgeHtml = "browser_engine_EDGE_HTML",
	gecko = "browser_engine_GECKO",
	trident = "browser_engine_TRIDENT",
	webKit = "browser_engine_WEBKIT",
	unknown = "browser_engine_UNKNOWN",
}

export enum EDeviceCategory {
	desktop = "device_category_DESKTOP",
	tablet = "device_category_TABLET",
	phone = "device_category_PHONE",
}

export enum EDeviceType {
	iPod = "device_type_IPOD",
	iPad = "device_type_IPAD",
	iPhone = "device_type_IPHONE",
	androidTablet = "device_type_ANDROID_TABLET",
	androidPhone = "device_type_ANDROID_PHONE",
	desktop = "device_type_DESKTOP",
	unknown = "device_type_UNKNOWN",
}