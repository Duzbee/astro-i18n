export declare function noAstroRoot(): Error;
export declare function astroRootNotFound(path: string): Error;
export declare function commandNotFound(commands: Record<string, (...args: any[]) => any>): void;
