export declare enum ErrorCodes {
    ONLY_PHYSICAL_DEVICES_ALLOWED = "ONLY_PHYSICAL_DEVICES_ALLOWED"
}
export declare class StructureError extends Error {
    code: ErrorCodes;
    constructor(message: string, code: ErrorCodes);
}
