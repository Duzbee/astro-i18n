import type { ParsedInterpolation, TranslationKey, TranslationVariant } from "../../types/app";
import type { Translation, TranslationMap } from "../../types/config";
export declare function t(path: string, options?: Record<string, unknown>, langCode?: string): string;
/**
 * @returns All the translation variants in `translations`.
 */
export declare function getTranslationVariants(translations: TranslationMap): Record<string, TranslationVariant[]>;
/**
 * Calls `callback` once for every translation in `translations` (skips the root
 * properties which should be lang codes).
 */
export declare function forEachTranslation(translations: TranslationMap | Record<string, Translation>, callback: (path: string, key: TranslationKey, interpolations: ParsedInterpolation[]) => void, cache?: {
    path: string;
    first: boolean;
}): void;
