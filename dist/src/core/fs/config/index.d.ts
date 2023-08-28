import type { RouteTranslationMap, TranslationMap, UninitializedAstroI18nConfig } from "../../../types/config";
export declare function getDefaultConfig(): {
    defaultLangCode: string;
    supportedLangCodes: string[];
    showDefaultLangCode: boolean;
    trailingSlash: "always" | "never";
    translations: TranslationMap;
    routeTranslations: RouteTranslationMap;
};
/**
 * Autocomplete helper to create the astro-i18n config.
 */
export declare function defineAstroI18nConfig(astroI18nConfig: Partial<UninitializedAstroI18nConfig>): Partial<UninitializedAstroI18nConfig>;
/**
 * Loads the astro-i18n config from the filesystem and returns it.
 * @param pathToConfig If provided this absolute path will override the
 * astro-i18n config search location.
 */
export declare function loadAstroI18nConfig(root: string, pathToConfig?: string): Promise<{
    defaultLangCode: string;
    supportedLangCodes: string[];
    showDefaultLangCode: boolean;
    trailingSlash: "always" | "never";
    translations: TranslationMap;
    routeTranslations: RouteTranslationMap;
}>;
