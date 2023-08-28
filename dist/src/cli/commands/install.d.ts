import type { Command } from "../../../lib/argv";
export declare const install: Command;
export declare function executeInstall(args: string[], options: {
    config?: string[];
}): Promise<void>;
