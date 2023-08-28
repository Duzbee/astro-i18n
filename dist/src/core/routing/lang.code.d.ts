import type { AstroI18nConfig } from "../../types/config";
/**
 * Removes the lang code from a route.
 * **WARNING** the route needs to start with the lang code: `"en"` or
 * `"/en"`.
 */
export declare function removeRouteLangCode(route: string, { defaultLangCode, supportedLangCodes }: AstroI18nConfig): string;
export declare function extractRouteLangCode(route: string, langCodes: string[]): string | undefined;
