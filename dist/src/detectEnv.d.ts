import { IDetectedEnv } from "./interfaces";
import { EBrowser, EBrowserEngine, EDeviceCategory, EDeviceType, EEnvProperty, ESystem } from "./enums";
export declare const detectEnv: IDetectedEnv;
export declare const hasEnv: (properties: ESystem | EBrowser | EBrowserEngine | EDeviceCategory | EDeviceType | EEnvProperty[], all?: boolean) => boolean;
export declare const _debug_platform: any;
