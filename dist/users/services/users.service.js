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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../models/user.model");
const user_role_model_1 = require("../models/user-role.model");
const role_model_1 = require("../models/role.model");
const user_address_model_1 = require("../models/user-address.model");
const address_model_1 = require("../models/address.model");
const helpers_1 = require("../../core/common/helpers");
const provider_model_1 = require("../../doctor/models/provider.model");
const patient_model_1 = require("../../patient/models/patient.model");
let UsersService = class UsersService {
    constructor(userModel, providerModel, userAddressModel, addressModel, sequelize) {
        this.userModel = userModel;
        this.providerModel = providerModel;
        this.userAddressModel = userAddressModel;
        this.addressModel = addressModel;
        this.sequelize = sequelize;
    }
    setLoggedinUserData(rawData) {
        const user = {
            id: rawData.id,
            userName: rawData.userName,
            firstName: rawData.firstName,
            lastName: rawData.lastName,
            email: rawData.email,
            phone: rawData.phone,
            picture: rawData.picture,
            status: rawData.status,
            provider: rawData.provider || null,
            patient: rawData.patient || null,
            roles: []
        };
        if (rawData.userRoles) {
            for (const userRole of rawData.userRoles) {
                user.roles.push({
                    roleId: userRole.roleId,
                    permissions: helpers_1.convertToJSONObject(userRole.role.permissions)
                });
            }
        }
        this.loggedinUserData = user;
    }
    getLoggedinUserData() {
        return this.loggedinUserData;
    }
    getLoggedinUserName() {
        let userName = '';
        if (this.loggedinUserData) {
            userName = [this.loggedinUserData.firstName, this.loggedinUserData.lastName].join(' ');
        }
        return userName;
    }
    isAdmin() {
        let flag = false;
        if (this.loggedinUserData && this.loggedinUserData.roles) {
            for (const role of this.loggedinUserData.roles) {
                if ([1].indexOf(role.roleId) !== -1) {
                    flag = true;
                }
            }
        }
        return flag;
    }
    isProvider() {
        let flag = false;
        if (this.loggedinUserData && this.loggedinUserData.roles) {
            for (const role of this.loggedinUserData.roles) {
                if ([2].indexOf(role.roleId) !== -1) {
                    flag = true;
                }
            }
        }
        return flag;
    }
    isPatient() {
        let flag = false;
        if (this.loggedinUserData && this.loggedinUserData.roles) {
            for (const role of this.loggedinUserData.roles) {
                if ([3].indexOf(role.roleId) !== -1) {
                    flag = true;
                }
            }
        }
        return flag;
    }
    getLoggedinUserId() {
        return (this.loggedinUserData && this.loggedinUserData.id) || 0;
    }
    getLoggedinPatientId() {
        return (this.loggedinUserData && this.loggedinUserData.patient && this.loggedinUserData.patient.id) || 0;
    }
    getLoggedinProviderId() {
        return (this.loggedinUserData && this.loggedinUserData.provider && this.loggedinUserData.provider.id) || 0;
    }
    getUser(userId) {
        return this.userModel.findOne({
            where: { id: userId },
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: user_role_model_1.UserRole,
                    include: [role_model_1.Role]
                },
                {
                    model: provider_model_1.Provider
                },
                {
                    model: patient_model_1.Patient
                }
            ]
        });
    }
    async listVendors(queryParams) {
        let searchText = queryParams.queryString || '';
        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        let offset = parseInt(queryParams.pageNumber) * parseInt(queryParams.pageSize);
        let limit = parseInt(queryParams.pageSize);
        let sortField = queryParams.sortField || 'id';
        let sortOrder = queryParams.sortOrder || 'desc';
        return await this.userModel.findAndCountAll({
            include: [
                {
                    model: user_role_model_1.UserRole,
                    where: { roleId: 2 }
                }
            ],
            offset: offset,
            limit: limit,
            order: [[sortField, sortOrder]]
        });
    }
    create(createUserDto) {
        const user = new user_model_1.User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        return user.save();
    }
    async findAll() {
        try {
            await this.sequelize.transaction(async (t) => {
                const transactionHost = { transaction: t };
                await this.userModel.create({ firstName: 'Abraham', lastName: 'Lincoln' }, transactionHost);
                await this.userModel.create({ firstName: 'John', lastName: 'Boothe' }, transactionHost);
            });
        }
        catch (err) {
        }
        return this.userModel.findAll();
    }
    findOne(where) {
        return this.userModel.findOne({
            where: where,
        });
    }
    async deleteUser(id) {
        return await this.userModel.destroy({ where: { id: id } });
    }
    async verifyUser(data) {
        const userData = await this.userModel.findOne({
            where: { id: data.userId }
        });
        if (userData.password == data.oldPassword) {
            return true;
        }
        else {
            return false;
        }
    }
    async updatePassword(data) {
        let userData = {
            password: data.password
        };
        const result = await this.userModel.update(userData, { where: { id: data.userId } });
        return result;
    }
    async updateProfilePicture(data) {
        let userData = {
            picture: data.picture
        };
        const result = await this.userModel.update(userData, { where: { id: data.userId } });
        return result;
    }
    async finProvider(where) {
        return this.providerModel.findOne({
            where: where
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(user_model_1.User)),
    __param(1, sequelize_1.InjectModel(provider_model_1.Provider)),
    __param(2, sequelize_1.InjectModel(user_address_model_1.UserAddress)),
    __param(3, sequelize_1.InjectModel(address_model_1.Address)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, sequelize_typescript_1.Sequelize])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map