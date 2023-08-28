import type { Command } from "../../../lib/argv";
export declare const sync: Command;
export declare function executeSync(args: string[], options: {
    config?: string[];
}): Promise<void>;
