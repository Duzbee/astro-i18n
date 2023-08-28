import type { AstroI18nConfig, RouteTranslationMap, TranslationMap } from "../../types/config";
import type { PageInfo } from "../../types/app";
export declare function isTypescriptProject(projectRoot: string): boolean;
export declare function getGeneratedDtsRootRelativePath(): string;
export declare function getPagesDirectoryRootRelativePath(): string;
export declare function getEnvDtsRootRelativePath(): string;
/**
 * Reads the astro pages directory and their metadata.
 */
export declare function getPagesMetadata(root: string, astroI18nConfig: AstroI18nConfig): {
    directory: string;
    pages: PageInfo[];
    translations: TranslationMap;
    routeTranslations: RouteTranslationMap;
};
