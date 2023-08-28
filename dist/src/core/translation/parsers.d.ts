import type { ParsedInterpolation, TranslationKey } from "../../types/app";
export declare const variantPattern: RegExp;
/**
 * Parses a translation key.
 */
export declare function parseTranslationKey(string: string): TranslationKey;
/**
 * @returns An array of all the interpolations in `string` from the last to the
 * first.
 */
export declare function parseInterpolations(string: string): ParsedInterpolation[];
