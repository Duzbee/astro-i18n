import type { AstroI18nConfig } from "../../types/config";
import type { FullRouteTranslationMap, InterpolationFormatter, TranslationVariant } from "../../types/app";
declare class AstroI18n implements AstroI18nConfig {
    #private;
    defaultLangCode: AstroI18nConfig["defaultLangCode"];
    supportedLangCodes: AstroI18nConfig["supportedLangCodes"];
    showDefaultLangCode: AstroI18nConfig["showDefaultLangCode"];
    trailingSlash: AstroI18nConfig["trailingSlash"];
    translations: AstroI18nConfig["translations"];
    routeTranslations: AstroI18nConfig["routeTranslations"];
    constructor();
    get langCodes(): string[];
    get langCode(): string;
    set langCode(langCode: string);
    get formatters(): Record<string, InterpolationFormatter>;
    internals(): {
        init: (astroI18nConfig: {
            defaultLangCode: string;
            supportedLangCodes: string[];
            showDefaultLangCode: boolean;
            trailingSlash: "always" | "never";
            translations: import("../../types/config").TranslationMap;
            routeTranslations: import("../../types/config").RouteTranslationMap;
        }, variants?: Record<string, TranslationVariant[]>, fullRouteTranslations?: FullRouteTranslationMap) => void;
        translationVariants: Record<string, TranslationVariant[]>;
        fullRouteTranslations: FullRouteTranslationMap;
    };
    addTranslations(translations: AstroI18nConfig["translations"]): void;
    addRouteTranslations(routeTranslations: AstroI18nConfig["routeTranslations"]): void;
    getFormatter(name: string): InterpolationFormatter | undefined;
    setFormatter(name: string, formatter: InterpolationFormatter): void;
    deleteFormatter(name: string): void;
    init(Astro: {
        url: URL;
    }, formatters?: Record<string, InterpolationFormatter>): void;
}
declare const astroI18n: AstroI18n;
export default astroI18n;
