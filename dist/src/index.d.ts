import type { AstroIntegration } from "astro";
import type { AstroContent, AstroGlobal, GetStaticPathsProps } from "./types/astro";
/**
 * @param astroI18nConfigFile The path to `astro.i18n.config` relative to the
 * root directory, or the `astro.i18n.config` object.
 */
export default function i18n(astroI18nConfigFile?: string): AstroIntegration;
export declare function extractRouteLangCode(route: string): string | undefined;
export declare function createStaticPaths(callback: (props: GetStaticPathsProps & {
    langCode: string | undefined;
}) => any, importMetaUrl: string): (props: GetStaticPathsProps & {
    langCode: string | undefined;
}) => Promise<any>;
export declare function renderContent(Astro: AstroGlobal, { body }: AstroContent): Promise<{
    headings: {
        depth: number;
        slug: string;
        text: string;
    }[];
    html: string;
}>;
export { defineAstroI18nConfig } from "./core/fs/config";
export { default as astroI18n } from "./core/state";
export { l, appendQueryString } from "./core/routing";
export { t } from "./core/translation";
