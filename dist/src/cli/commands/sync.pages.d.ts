import type { Command } from "../../../lib/argv";
export declare const syncPages: Command;
export declare function executeSyncPages(args: string[], options: {
    config?: string[];
}): Promise<void>;
