import type { FileSystemFlag, ParsedJson } from "./types";
/**
 * @returns undefined if the file could not be found or if the JSON was invalid,
 * else it will return the parsed JSON.
 */
export declare function importJson<Out extends ParsedJson = ParsedJson>(path: string): Out | undefined;
/**
 * Will call `callback` for every directory including `directoryPath` and
 * provide `itemNames`, an array of the directory's file names and directory
 * names and `path`, the path to the directory.
 * @param directoryPath if not a directory `callback` will never be called.
 */
export declare function forEachDirectory(directoryPath: string, callback: (itemNames: string[], path: string) => any, ignoredPathPatterns?: RegExp[]): void;
/**
 * @default verifyExistance = true
 * @throws {SystemError} if `verifyExistance` is false and `path` does not exist
 * else it just returns false.
 */
export declare function isDirectory(path: string, verifyExistance?: boolean): boolean;
/**
 * @default verifyExistance = true
 * @throws {SystemError} if `verifyExistance` is false and `path` does not exist
 * else it just returns false.
 */
export declare function isFile(path: string, verifyExistance?: boolean): boolean;
/**
 * Joins the paths and check if the result exists.
 * @throws {ReferenceError} if the resulting path doesn't exist.
 */
export declare function joinExists(...paths: string[]): string;
export declare function removeTrailingSep(path: string): string;
export declare function removeLeadingSep(path: string): string;
export declare function getLastPathSegment(path: string): string | undefined;
export declare function writeNestedFile(path: string, data: string, flag?: FileSystemFlag): void;
/**
 * Splits the given `fileName` into `["name", "extension"]`.
 */
export declare function splitFileName(fileName: string): string[];
/**
 * @returns The lowercase extension (e.g. `"json"`) or an empty string if no
 * extension was found.
 */
export declare function getFileExtension(file: string): string;
/**
 * @returns The name of the file without the extension, if there is no extension
 * it will return `file`.
 */
export declare function getFileName(file: string): string;
/**
 * @returns An array `[fileName, fileExtension]`.
 */
export declare function getFileNameAndExtension(file: string): [string, string];
