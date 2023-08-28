import type { AstroHooks } from "../types/astro";
export default function configSetup({ config: astroConfig, injectScript, }: Parameters<AstroHooks["config:setup"]>[0], customPathToConfig?: string): Promise<void>;
