"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const sequelize_2 = require("@nestjs/sequelize");
const role_model_1 = require("../models/role.model");
const user_role_model_1 = require("../models/user-role.model");
let RolesService = class RolesService {
    constructor(rolesModel, userRolesModel) {
        this.rolesModel = rolesModel;
        this.userRolesModel = userRolesModel;
    }
    async getRoles() {
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
                [sequelize_1.Op.or]: [
                    {
                        id: searchText
                    },
                    {
                        name: { [sequelize_1.Op.like]: '%' + searchText + '%' }
                    }
                ]
            },
            offset: offset,
            limit: limit,
            order: [[sortField, sortOrder]]
        });
        return users;
    }
    async saveRole(roleData) {
        let data = {
            name: roleData.name,
            permissions: roleData.permissions
        };
        let role;
        if (roleData.id) {
            await this.rolesModel.update(data, { where: { id: roleData.id } });
            role = await this.rolesModel.findOne({ where: { id: roleData.id } });
        }
        else {
            role = await this.rolesModel.create(data);
        }
        return role;
    }
    async deleteRole(id) {
        let result = await this.rolesModel.destroy({ where: { id: id } });
        return result;
    }
};
RolesService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_2.InjectModel(role_model_1.Role)),
    __param(1, sequelize_2.InjectModel(user_role_model_1.UserRole)),
    __metadata("design:paramtypes", [Object, Object])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map