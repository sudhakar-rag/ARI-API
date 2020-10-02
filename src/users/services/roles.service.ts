

import { Injectable, Inject } from '@nestjs/common';
import { Op } from "sequelize";
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '../models/role.model';
import { UserRole } from '../models/user-role.model';
import { CreateRoleDto } from '../dto/roles.dto';

@Injectable()
export class RolesService {
    constructor(
        @InjectModel(Role)
        private readonly rolesModel: typeof Role,
        @InjectModel(UserRole)
        private readonly userRolesModel: typeof UserRole,
    ) {

    }

    async getRoles(): Promise<any> {
        return await this.rolesModel.findAll();
    }

    async findRoles(queryParams) {
        let searchText = queryParams.queryString || '';

        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        let offset = parseInt(queryParams.pageNumber) * parseInt(queryParams.pageSize);
        let limit = parseInt(queryParams.pageSize);
        let sortField = queryParams.sortField || 'id';
        let sortOrder = queryParams.sortOrder || 'desc';

        let users = await this.rolesModel.findAndCountAll({
            where: {
                [Op.or]: [
                    {
                        id: searchText
                    },
                    {
                        name: { [Op.like]: '%' + searchText + '%' }
                    }
                ]
            },
            offset: offset,
            limit: limit,
            order: [[sortField, sortOrder]]
        });
        return users;
    }

    async saveRole(roleData: CreateRoleDto): Promise<any> {

        let data = {
            name: roleData.name,
            permissions: roleData.permissions
        };

        let role: Role;
        if (roleData.id) {
            await this.rolesModel.update(data, { where: { id: roleData.id } });
            role = await this.rolesModel.findOne({ where: { id: roleData.id } });
        } else {
            role = await this.rolesModel.create(data);
        }

        return role;
    }

    async deleteRole(id: number): Promise<any> {
        let result = await this.rolesModel.destroy({ where: { id: id } })
        return result;
    }
}