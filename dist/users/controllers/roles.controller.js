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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../services/users.service");
const roles_service_1 = require("../../users/services/roles.service");
const roles_dto_1 = require("../dto/roles.dto");
const response_data_1 = require("../../core/common/response-data");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
let RolesController = class RolesController {
    constructor(usersService, rolesService) {
        this.usersService = usersService;
        this.rolesService = rolesService;
    }
    async getRoles() {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.rolesService.getRoles();
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async findRoles(params) {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.rolesService.findRoles(params);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async saveRoles(roleData) {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.rolesService.saveRole(roleData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async deleteRole(params) {
        let output = new response_data_1.ResponseData();
        try {
            output.data = await this.rolesService.deleteRole(params.id);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
};
__decorate([
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getRoles", null);
__decorate([
    common_1.Post('list'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findRoles", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [roles_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "saveRoles", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "deleteRole", null);
RolesController = __decorate([
    common_1.Controller('role'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        roles_service_1.RolesService])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map