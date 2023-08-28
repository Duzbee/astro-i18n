import type { getPagesMetadata } from "../../core/fs";
import type { Primitive } from "../javascript";
export declare type PageInfo = {
    name: string;
    route: string;
    path: string;
    hasGetStaticPaths: boolean;
    hasPrerender: boolean;
};
export declare type PagesMetadata = ReturnType<typeof getPagesMetadata>;
export declare type ParsedInterpolation = {
    name: string;
    default: Primitive | undefined;
    formatters: ParsedFormatter[];
    range: [number, number];
};
export declare type ParsedFormatter = {
    name: string;
    arguments: InterpolationArgument[];
};
export declare type InterpolationFormatter = (value: unknown, ...args: ReturnType<InterpolationArgument["getter"]>[]) => string;
export declare type InterpolationArgument = {
    getter: (options: Record<string, unknown>) => unknown;
    name?: string;
};
export declare type TranslationKey = {
    name: string;
    variant: TranslationVariant;
};
export declare type TranslationVariant = {
    name: string;
    properties: VariantProperty[];
};
export declare type VariantProperty = {
    name: string;
    value: number | string;
};
export declare type Imports = {
    [source: string]: {
        [namedImport: string]: string;
        default?: string;
    };
};
export declare type FullRouteTranslationMap = {
    [langCode: string]: {
        [untranslated: string]: {
            [otherLangCode: string]: string;
        };
    };
};
export declare type CodeFormat = "ESM" | "CJS";
