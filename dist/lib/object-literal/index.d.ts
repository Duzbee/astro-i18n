/**
 * Nests a `value` in `object` following the `path` (array of keys).
 * - If a key doesn't exist it will be created as an object literal.
 * - If a key already exist and is not an object literal the function will stop
 * - If a value already exist for the given `keys` it will be replaced
 */
export declare function addNestedProperty(object: Record<string, unknown>, path: string[], value: unknown): void;
/**
 * Merges `object` into `base`.
 * @param options Properties :
 * - `mode`, `"fill"` will only merge when the property doesn't exist in `base`,
 * `"replace"` will replace it. Default = `"replace"`.
 * - `modifyBase`, if set to true it will merge by reference else it will deep
 * clone `base` first. Default = `true`.
 * @returns The new merged object.
 */
export declare function merge(base: Record<string, unknown>, object: Record<string, unknown>, options?: Partial<{
    mode: "fill" | "replace";
    modifyBase: boolean;
}>): Record<string, unknown>;
/**
 * @returns A deep cloned `object`, works with any value.
 */
export declare function clone<T>(object: T): T;
/**
 * Determines whether an `object` has a property with the specified `name`.
 */
export declare function hasOwnProperty(object: object, name: string): boolean;
