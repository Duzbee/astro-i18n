import type { FullRouteTranslationMap } from "../../types/app";
import type { AstroI18nConfig } from "../../types/config";
export declare function l(route: string, params?: Record<string, string>, targetLangCode?: string, routeLangCode?: string): string;
export declare function appendQueryString(url: string, query: Record<string, string>): string;
/**
 * Old translation function, refactor this to specialize in file path
 * translations.
 */
export declare function translatePath(route: string, langCode: string, { defaultLangCode, supportedLangCodes, showDefaultLangCode, routeTranslations, }: AstroI18nConfig, separator?: string, base?: string): string;
export declare function createFullRouteTranslations({ defaultLangCode, routeTranslations, }: AstroI18nConfig): FullRouteTranslationMap;
