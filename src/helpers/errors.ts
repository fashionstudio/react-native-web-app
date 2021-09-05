export enum ErrorCodes {
	ONLY_PHYSICAL_DEVICES_ALLOWED = "ONLY_PHYSICAL_DEVICES_ALLOWED",
}

export class StructureError extends Error {
    code: ErrorCodes;

    constructor(message: string, code: ErrorCodes) {
    	super(message);
    	this.name = "StrucutreError";

    	this.message = message;
    	this.code = code;
    }
}

StructureError.prototype.name = "StrucutreError";
