import type { Command } from "./types";
declare class Argv<Cmd extends Command> {
    #private;
    node: string;
    file: string;
    command: Cmd["name"];
    args: string[];
    options: {
        [key in Cmd["options"][number]["name"]]?: string[];
    };
    constructor(commands?: readonly Cmd[]);
}
/**
 * Parses `process.argv`.
 * @param commands If there is only one command, naming it `"default"` will
 * remove the need to use a sub-command in the CLI (e.g. `file arg1 arg2
 * --option1`, instead of, `file cmd arg1 arg2 --option1`).
 */
export default function argv<Cmd extends Command>(commands?: readonly Cmd[]): Argv<Cmd>;
export { Command } from "./types";
