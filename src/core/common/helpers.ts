export function convertToJSONObject(jsonStr: string, defaultValue = null) {
    let jsonObj;
    try {
        jsonObj = JSON.parse(jsonStr);
    } catch (error) {
        jsonObj = defaultValue || [];
    }
    return jsonObj;
}


export function getRolesJSON() {

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