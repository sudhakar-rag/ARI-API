"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRolesJSON = exports.convertToJSONObject = void 0;
function convertToJSONObject(jsonStr, defaultValue = null) {
    let jsonObj;
    try {
        jsonObj = JSON.parse(jsonStr);
    }
    catch (error) {
        jsonObj = defaultValue || [];
    }
    return jsonObj;
}
exports.convertToJSONObject = convertToJSONObject;
function getRolesJSON() {
    let permissons = {
        role1: {
            users: { view: true, edit: false, delete: false },
            orders: { view: true, edit: false, delete: false },
        },
        role2: {
            users: { view: true, edit: false, delete: false },
            orders: { view: true, edit: false, delete: false },
        }
    };
    return permissons;
}
exports.getRolesJSON = getRolesJSON;
//# sourceMappingURL=helpers.js.map