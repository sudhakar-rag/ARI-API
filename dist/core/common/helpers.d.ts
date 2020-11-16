export declare function convertToJSONObject(jsonStr: string, defaultValue?: any): any;
export declare function getRolesJSON(): {
    role1: {
        users: {
            view: boolean;
            edit: boolean;
            delete: boolean;
        };
        orders: {
            view: boolean;
            edit: boolean;
            delete: boolean;
        };
    };
    role2: {
        users: {
            view: boolean;
            edit: boolean;
            delete: boolean;
        };
        orders: {
            view: boolean;
            edit: boolean;
            delete: boolean;
        };
    };
};
