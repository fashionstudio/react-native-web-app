// https://stackoverflow.com/a/65285392/12624093
/**
 * Create an array from an enum
 * @param enumeration The enum to convert
 * @returns An array containing enum values
 */
export function enumToArray(enumeration) {
    return Object.keys(enumeration)
        .filter((key) => Number.isNaN(Number(key)))
        .map((key) => 
    // @ts-expect-error
    enumeration[key])
        .filter((val) => typeof val === "number" || typeof val === "string");
}
