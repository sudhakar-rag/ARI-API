import { Role } from '../models/role.model';
import { UserRole } from '../models/user-role.model';
import { CreateRoleDto } from '../dto/roles.dto';
export declare class RolesService {
    private readonly rolesModel;
    private readonly userRolesModel;
    constructor(rolesModel: typeof Role, userRolesModel: typeof UserRole);
    getRoles(): Promise<any>;
    findRoles(queryParams: any): Promise<{
        rows: Role[];
        count: number;
    }>;
    saveRole(roleData: CreateRoleDto): Promise<any>;
    deleteRole(id: number): Promise<any>;
}
