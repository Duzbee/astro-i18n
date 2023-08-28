export declare function isObjectLiteral(subject: unknown): subject is Record<PropertyKey, unknown>;
export declare function isStringArray(subject: unknown): subject is string[];
export declare function isStringStringRecord(subject: unknown): subject is Record<string, string>;
export declare function assertIsStringStringRecord(subject: unknown): asserts subject is Record<string, string>;
export declare function assertIsInArray<T>(array: T[], subject: unknown): asserts subject is T;
