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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("../dto/create-user.dto");
const users_service_1 = require("../services/users.service");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const response_data_1 = require("../../core/common/response-data");
const user_create_service_1 = require("../services/user-create.service");
const fcm_dto_1 = require("../dto/fcm.dto");
let UsersController = class UsersController {
    constructor(usersService, userCreateService) {
        this.usersService = usersService;
        this.userCreateService = userCreateService;
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    async createVendor(createVendorData) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.userCreateService.saveVendor(createVendorData);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async listProducts(queryParams) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.usersService.listVendors(queryParams);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    async saveFCM(params) {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.usersService.createFCM(params);
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    findAll() {
        return this.usersService.findAll();
    }
    async getLoggedInUserData() {
        const output = new response_data_1.ResponseData();
        try {
            output.data = await this.usersService.getLoggedinUserData();
        }
        catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }
        return output;
    }
    findOne(id) {
        return this.usersService.findOne({ id: id });
    }
    remove(id) {
        return this.usersService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Post('createVendor'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateVendorDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createVendor", null);
__decorate([
    common_1.Post('listVendors'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "listProducts", null);
__decorate([
    common_1.Post('fcm'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fcm_dto_1.CreateFCMDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "saveFCM", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get('loggedinUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getLoggedInUserData", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
UsersController = __decorate([
    common_1.Controller('users'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        user_create_service_1.UserCreateService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map