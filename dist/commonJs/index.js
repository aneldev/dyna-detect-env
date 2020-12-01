"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EDeviceCategory = exports.EBrowserEngine = exports.EBrowser = exports.ESystem = exports._debug_platform = exports.hasEnv = exports.detectEnv = void 0;
var detectEnv_1 = require("./detectEnv");
Object.defineProperty(exports, "detectEnv", { enumerable: true, get: function () { return detectEnv_1.detectEnv; } });
Object.defineProperty(exports, "hasEnv", { enumerable: true, get: function () { return detectEnv_1.hasEnv; } });
Object.defineProperty(exports, "_debug_platform", { enumerable: true, get: function () { return detectEnv_1._debug_platform; } });
var enums_1 = require("./enums");
Object.defineProperty(exports, "ESystem", { enumerable: true, get: function () { return enums_1.ESystem; } });
Object.defineProperty(exports, "EBrowser", { enumerable: true, get: function () { return enums_1.EBrowser; } });
Object.defineProperty(exports, "EBrowserEngine", { enumerable: true, get: function () { return enums_1.EBrowserEngine; } });
Object.defineProperty(exports, "EDeviceCategory", { enumerable: true, get: function () { return enums_1.EDeviceCategory; } });
//# sourceMappingURL=index.js.map