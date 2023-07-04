export default class CustomError extends Error {

    statusCode: number;

    constructor(code: number, message: string, callstack?: any) {

        super();

        this.name = "CustomError";
        this.statusCode = code;
        this.message = message;

        if (callstack) this.stack = callstack;
    }
}