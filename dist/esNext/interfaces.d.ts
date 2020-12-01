import { EBrowser, EBrowserEngine, EDeviceCategory, EDeviceType, ESystem } from "./enums";
export interface IDetectedEnv {
    system: ESystem;
    browser: EBrowser;
    deviceCategory: EDeviceCategory;
    browserEngine: EBrowserEngine;
    deviceType: EDeviceType;
}
