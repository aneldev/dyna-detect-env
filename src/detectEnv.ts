import * as platform from "platform";
import {IDetectedEnv} from "./interfaces";
import {EBrowser, EBrowserEngine, EDeviceCategory, EDeviceType, EEnvProperty, ESystem} from "./enums";

// help: https://github.com/bestiejs/platform.js/blob/master/doc/README.md

const getSystem = (): ESystem => {
	const family: string = platform.os.family.toLowerCase();
	if (family.includes("windows"))
		return ESystem.windows;
	if (family === "os x")
		return ESystem.osx;
	if (family === "ios")
		return ESystem.ios;
	if (family === "android")
		return ESystem.android;
	if (
		["Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE"]
			.map(n => n.toLowerCase())
			.includes(family.toLowerCase())
	)
		return ESystem.linux;
	else
		return ESystem.unknown;
};

const getBrowser = (): EBrowser => {
	// all browsers might are the mobile version
	const pName: string = platform.name.toLowerCase();

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
		return EBrowser.unknown
};

const getBrowserEngine = (): EBrowserEngine => {
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
		default  :
			return EBrowserEngine.unknown;
	}
};

const getDeviceCategory = (): EDeviceCategory => {
	if ([
		"iPod", // yeah... not really tablet
		"iPad",
		"Kindle", "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad", "Transformer",
	].includes(platform.product)) return EDeviceCategory.tablet;

	const family: string = platform.os.family.toLowerCase();
	if (family.includes('windows') && !family.includes('windows')) {
		return EDeviceCategory.desktop;
	}
	if ([ESystem.osx, ESystem.linux].includes(getSystem())) {
		return EDeviceCategory.desktop;
	}

	// for any other cases, return phone, not so accurate but it is cheap
	return EDeviceCategory.phone;
};

const getDeviceType = (): EDeviceType => {
	const deviceCategory: EDeviceCategory = getDeviceCategory();
	const system: ESystem = getSystem();

	if (deviceCategory === EDeviceCategory.desktop) return EDeviceType.desktop;

	if (deviceCategory === EDeviceCategory.tablet) {
		if (system === ESystem.android) return EDeviceType.androidTablet;
		if (!platform.product) return EDeviceType.unknown;
		if (platform.product.toLowerCase() === "ipod") return EDeviceType.iPod;
		if (platform.product.toLowerCase() === "ipad") return EDeviceType.iPad;
		return EDeviceType.unknown;
	}

	if (deviceCategory === EDeviceCategory.phone) {
		if (system === ESystem.android) return EDeviceType.androidPhone;
		if (!platform.product) return EDeviceType.unknown;
		if (platform.product.toLowerCase() === "iphone") return EDeviceType.iPhone;
		return EDeviceType.unknown;
	}

	return EDeviceType.unknown;
};

export const detectEnv: IDetectedEnv = {
	system: getSystem(),
	browser: getBrowser(),
	browserEngine: getBrowserEngine(),
	deviceCategory: getDeviceCategory(),
	deviceType: getDeviceType(),
};

export const hasEnv = (properties: EEnvProperty | EEnvProperty[], all: boolean = true): boolean => {
	let mathcing: number = 0;
	const _properties: EEnvProperty[] = Array.isArray(properties) ? properties : [properties];
	Object.keys(detectEnv)
		.map((key: string) => detectEnv[key])
		.reduce((acc: EEnvProperty[], prop: EEnvProperty) => {
			if (!acc.includes(prop)) acc.push(prop);
			return acc;
		}, [])
		.forEach((detectedProperty: EEnvProperty) => {
			if (_properties.includes(detectedProperty)) mathcing++;
		});
	if (all)
		return mathcing === _properties.length;
	else
		return mathcing > 0;
};

export const _debug_platform: any = platform;
