import type { Command } from "../../../lib/argv";
export declare const syncTypes: Command;
export declare function executeSyncTypes(args: string[], options: {
    config?: string[];
}): Promise<void>;
