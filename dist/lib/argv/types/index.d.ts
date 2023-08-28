export declare type Command = {
    name: string;
    options: readonly Option[];
};
declare type Option = {
    name: string;
    shortcut?: string;
};
export {};
