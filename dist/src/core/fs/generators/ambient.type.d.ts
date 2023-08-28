import type { AstroI18nConfig } from "../../../types/config";
import type { PagesMetadata } from "../../../types/app";
export declare function generateAmbientType(root: string, preloaded?: {
    astroI18nConfig: AstroI18nConfig;
    pagesMetadata: PagesMetadata;
    routes: string[];
}, pathToConfig?: string): Promise<void>;
export declare function generateDefaultAmbientType(root: string, override?: boolean): void;
export declare function getAmbientType(astroI18nConfig: AstroI18nConfig, uniqueRoutes: string[]): string;
