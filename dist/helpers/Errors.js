export var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes["ONLY_PHYSICAL_DEVICES_ALLOWED"] = "ONLY_PHYSICAL_DEVICES_ALLOWED";
})(ErrorCodes || (ErrorCodes = {}));
export class StructureError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.name = "StrucutreError";
        this.message = message;
        this.code = code;
    }
}
StructureError.prototype.name = "StrucutreError";
