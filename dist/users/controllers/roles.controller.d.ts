import { UsersService } from '../services/users.service';
import { RolesService } from '../../users/services/roles.service';
import { CreateRoleDto } from '../dto/roles.dto';
import { ResponseData } from '@app/src/core/common/response-data';
export declare class RolesController {
    private usersService;
    private rolesService;
    constructor(usersService: UsersService, rolesService: RolesService);
    getRoles(): Promise<ResponseData>;
    findRoles(params: any): Promise<ResponseData>;
    saveRoles(roleData: CreateRoleDto): Promise<ResponseData>;
    deleteRole(params: any): Promise<ResponseData>;
}
