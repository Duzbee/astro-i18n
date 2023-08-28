import type { ReplaceProperties } from "../../../lib/typescript-helpers";
export declare type UninitializedAstroI18nConfig = {
    defaultLangCode: string;
    supportedLangCodes: string[];
    showDefaultLangCode: boolean;
    trailingSlash: "always" | "never";
    translations: UninitializedTranslationMap;
    routeTranslations: UninitializedRouteTranslationMap;
};
export declare type AstroI18nConfig = ReplaceProperties<UninitializedAstroI18nConfig, {
    translations: TranslationMap;
    routeTranslations: RouteTranslationMap;
}>;
export declare type UninitializedTranslationMap = {
    [langCode: string]: string | Record<string, Translation>;
};
export declare type TranslationMap = {
    [langCode: string]: Record<string, Translation>;
};
export declare type UninitializedRouteTranslationMap = {
    [langCode: string]: string | Record<string, string>;
};
export declare type RouteTranslationMap = {
    [langCode: string]: Record<string, string>;
};
export declare type Translation = string | {
    [translationKey: string]: string | Translation;
};
