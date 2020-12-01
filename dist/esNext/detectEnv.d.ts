import { IDetectedEnv } from "./interfaces";
import { EEnvProperty } from "./enums";
export declare const detectEnv: IDetectedEnv;
export declare const hasEnv: (properties: EEnvProperty | EEnvProperty[], all?: boolean) => boolean;
export declare const _debug_platform: any;
