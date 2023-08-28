/**
 * @returns The rest of the `string` after `searchString`.
 */
export declare function getStringAfter(string: string, searchString: string): string;
/**
 * Splits the given `string` in two.
 */
export declare function splitAt(string: string, index: number, deleteIndex?: boolean): [string, string];
/**
 * If `searchString` is found in `string`, splits `string` in two at the end of
 * `searchString`, else returns `["", string]`.
 */
export declare function splitAfter(string: string, searchString: string): [string, string];
/**
 * Concatenates `string1` and `string2` with `glue` in the middle, if `string1`
 * ends with `glue` it gets removed, the same goes for the beginning of `string2`.
 */
export declare function glue(string1: string, glue: string, string2: string): string;
/**
 * Removes `searchString` from `string` if it starts at the first index, else
 * returns `string`.
 */
export declare function removeFromStart(string: string, searchString: string): string;
/**
 * Removes `searchString` from `string` if it ends at the last index, else
 * returns `string`.
 */
export declare function removeFromEnd(string: string, searchString: string): string;
/**
 * Removes `searchString` from `string` from the beginning and end.
 */
export declare function trimString(string: string, searchString: string): string;
/**
 * Adds `start` at the start of the `string` if it doesn't already start with
 * `start`.
 */
export declare function makeStartWith(string: string, start: string): string;
/**
 * Adds `end` at the end of the `string` if it doesn't already end with
 * `end`.
 */
export declare function makeEndWith(string: string, end: string): string;
export declare function execOnce(regex: RegExp, string: string): {
    range: number[];
    match: string[];
} | null;
export declare function replaceRange(string: string, start: number, end: number, value: string): string;
/**
 * @returns The results of running `regex.exec` on `string`.
 */
export declare function getExecs(regex: RegExp, string: string): {
    range: [number, number];
    match: string[];
}[];
export declare function latinize(string: string): string;
export declare function slugify(string: string): string;
