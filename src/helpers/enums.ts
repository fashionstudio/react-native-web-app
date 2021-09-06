// https://stackoverflow.com/a/65285392/12624093

type NonFunctional<T> = T extends Function ? never : T;

/**
 * Create an array from an enum
 * @param enumeration The enum to convert
 * @returns An array containing enum values
 */
export function enumToArray<T>(enumeration: T): NonFunctional<T[keyof T]>[] {
	return Object.keys(enumeration)
		.filter((key) =>
			Number.isNaN(Number(key)))
		.map((key) =>
	        // @ts-expect-error
			enumeration[key])
		.filter((val) =>
			typeof val === "number" || typeof val === "string");
}
