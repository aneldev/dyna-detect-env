export type EEnvProperty = ESystem | EBrowser | EBrowserEngine | EDeviceCategory | EDeviceType;

export enum ESystem {
	osx = "OSX",
	ios = "IOS",
	android = "ANDROID",
	windows = "WINDOWS",
	linux = "LINUX",
	unknown = "UNKNOWN",
}

export enum EBrowser {
	ie = "IE",
	edge = "EDGE",
	firefox = "FIREFOX",
	chrome = "CHROME",
	opera = "OPERA",
	operaMini = "OPERA_MINI", // its completely different browser!
	seaMonkey = "SEA_MONKEY",
	silk = "SILK",
	safari = "SAFARI",
	electron = "ELECTRON",
	phantomJs = "PHANTOM_JS",
	unknown = "UNKNOWN",
}

export enum EBrowserEngine {
	blink = "BLINK",
	edgeHtml = "EDGE_HTML",
	gecko = "GEGKO",
	trident = "TRIDENT",
	webKit = "WEBKIT",
	unknown = "UNKNOWN",
}

export enum EDeviceCategory {
	desktop = "DESKTOP",
	tablet = "TABLET",
	phone = "PHONE",
}

export enum EDeviceType {
	iPod = "IPOD",
	iPad = "IPAD",
	iPhone = "IPHONE",
	androidTablet = "ANDROID_TABLET",
	androidPhone = "ANDROID_PHONE",
	desktop = "DESKTOP",
	unknown = "UNKNOWN",
}