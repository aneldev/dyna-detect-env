# About

`dyna-detect-env` is a wrapper of other detection libraries providing a simpler api.

It detects the running device, browser etc.

It is written in TypeScript with enums but is works in native JavaScript as well.

`dyna-detect-env` follows the [SemVer](http://semver.org/) standard for versioning.

# Demo

`npm run debug-dev-browser`

Then open the browser at [localhost:8027](http://localhost:8027/)

You can open this address from other devices (if your firewall allows it) and you will see in the screen the detected properties.

# detectEnv

Is an object that has the detected info.

```
import {detectEnv} from "dyna-detect-env";

console.log(JSON.stringify(detectEnv, null, 4));

```

This consoles something like this:

```
{
    "system": "OSX",
    "browser": "CHROME",
    "browserEngine": "BLINK",
    "deviceCategory": "DESKTOP",
    "deviceType": "DESKTOP"
}
```

# interfaces

If you write in TypeScript the this is the interface of `detectEnv`:

```
interface IDetectedEnv {
	system: ESystem;
	browser: EBrowser;
	deviceCategory: EDeviceType;
	browserEngine: EBrowserEngine;
	deviceCategory: EDeviceCategory;
	deviceType: EDeviceType;
}
```

and these are the enums:

> JavaScript developers you can use the `enums` too, they are simple objects with properties and values.

```
enum EDeviceType {
	iPod = "IPOD",
	iPad = "IPAD",
	iPhone = "IPHONE",
	androidTablet = "ANDROID_TABLET",
	androidPhone = "ANDROID_PHONE",
	desktop = "DESKTOP",
	unknown = "UNKNOWN",
}

enum ESystem {
	osx = "OSX",
	ios = "IOS",
	android = "ANDROID",
	windows = "WINDOWS",
	linux = "LINUX",
	unknown = "UNKNOWN",
}

enum EBrowser {
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

enum EBrowserEngine {
	blink = "BLINK",
	edgeHtml = "EDGE_HTML",
	gecko = "GEGKO",
	trident = "TRIDENT",
	webKit = "WEBKIT",
	unknown = "UNKNOWN",
}

enum EDeviceType {
	desktop = "DESKTOP",
	tablet = "TABLET",
	phone = "PHONE",   // everything not detected as desktop or tablet
}
```

# method: `hasEnv`

Returns boolean, if the environment has one or more properties.

Import it with this:

`import {detectEnv} from "dyna-detect-env";`

The signature of the method is this:

`hasEnv = (properties: EEnvProperty | EEnvProperty[], all: boolean = true): boolean`

Don't panic, have a look the examples:

## check for one property, if the browser is Chrome

```
hasEnv(EBrowser.chrome);    // return true or false 
```

## check for two or more properties, if the browser is Chrome and is in Desktop

```
hasEnv([EBrowser.chrome, EDeviceType.desktop]);    // return true or false 
```

> Note that it is one argument, one array, you can pass as many enums (properties) you want.


## check for two or more properties, if the browser is Chrome OR is in Desktop

```
hasEnv([EBrowser.chrome, EDeviceType.desktop], false);    // return true or false 
```

> Note the 2nd argument, is a boolean, the default value is `true` but we set it `false` now.

This will return true only if at least one property found in the environment.

In this case it will return `true` if the app runs on Desktop or on Chrome. 

**More meaningful examples**

## detect if it is iPhone

`hasEnv(EDeviceType.iPhone);`

## detect if it is iPhone or iPad or iPod

`hasEnv([EDeviceType.iPhone, EDeviceType.iPad, EDeviceType.iPod], false); // false for to return if one of two is true` 

or _simpler_,

`hasEnv([ESystem.ios, EDeviceCategory.tablet]);` 
