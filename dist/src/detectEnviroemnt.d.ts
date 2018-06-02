import { IDetectedEnvironment } from "./interfaces";
import { EBrowser, EBrowserEngine, EDeviceType, EEnvironmentProperty, ESystem } from "./enums";
export declare const detectEnvironment: IDetectedEnvironment;
export declare const hasEnvironment: (properties: ESystem | EBrowser | EBrowserEngine | EDeviceType | EEnvironmentProperty[], all?: boolean) => boolean;
export declare const _debug_platform: any;
