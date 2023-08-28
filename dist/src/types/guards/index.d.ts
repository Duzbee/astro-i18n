import type { Translation, UninitializedAstroI18nConfig } from "../config";
export declare function assertIsPartialUninitializedAstroI18nConfig(subject: unknown): asserts subject is Partial<UninitializedAstroI18nConfig>;
export declare function isTranslation(subject: unknown): subject is Translation;
export declare function assertIsTranslation(subject: unknown): asserts subject is Translation;
