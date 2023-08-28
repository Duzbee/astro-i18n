import type { ObjectEntry } from "../types/internal";
export declare function objectEntries<Obj extends Record<PropertyKey, unknown>>(object: Obj): ObjectEntry<Obj, Required<Obj>>[];
/**
 * @returns The typescript `variable` type as a string. e.g. `["foo", 1]`
 * => `"(string | number)[]"`
 */
export declare function tsTypeof(variable: unknown): string;
