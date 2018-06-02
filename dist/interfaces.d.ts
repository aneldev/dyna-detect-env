import { EBrowser, EBrowserEngine, EDeviceCategory, ESystem } from "./enums";
export interface IDetectedEnvironment {
    system: ESystem;
    browser: EBrowser;
    deviceCategory: EDeviceCategory;
    browserEngine: EBrowserEngine;
}
