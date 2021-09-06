declare type NonFunctional<T> = T extends Function ? never : T;
/**
 * Create an array from an enum
 * @param enumeration The enum to convert
 * @returns An array containing enum values
 */
export declare function enumToArray<T>(enumeration: T): NonFunctional<T[keyof T]>[];
export {};
