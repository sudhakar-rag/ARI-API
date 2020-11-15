"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseData = void 0;
class ResponseData {
    constructor() {
        this.status = true;
        this.data = {};
        this.message = '';
    }
    reset() {
        this.status = true;
        this.message = '';
        this.data = {};
    }
}
exports.ResponseData = ResponseData;
//# sourceMappingURL=response-data.js.map