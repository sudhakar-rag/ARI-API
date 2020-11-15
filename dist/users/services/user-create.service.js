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
exports.UserCreateService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../models/user.model");
const user_role_model_1 = require("../models/user-role.model");
const role_model_1 = require("../models/role.model");
const md5 = require("md5");
const user_address_model_1 = require("../models/user-address.model");
const address_model_1 = require("../models/address.model");
let UserCreateService = class UserCreateService {
    constructor(userModel, userAddressModel, addressModel, userRoleModel, sequelize) {
        this.userModel = userModel;
        this.userAddressModel = userAddressModel;
        this.addressModel = addressModel;
        this.userRoleModel = userRoleModel;
        this.sequelize = sequelize;
    }
    setLoggedinUserData(user) {
        this.loggedinUserData = user;
    }
    getLoggedinUserData() {
        return this.loggedinUserData;
    }
    getUser(userId) {
        return this.userModel.findOne({
            where: { id: userId },
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: user_role_model_1.UserRole,
                    include: [role_model_1.Role]
                }
            ]
        });
    }
    async saveVendor(createVendorData) {
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            let action = 'C';
            if (createVendorData.user.id) {
                action = 'E';
            }
            const user = await this.saveUser(createVendorData.user, action, transaction);
            if (createVendorData.user && createVendorData.user.password) {
                await this.userModel.update({ password: md5(createVendorData.user.password) }, { where: { id: user.id }, transaction });
            }
            if (createVendorData.contactAddress) {
                createVendorData.contactAddress.userId = user.id;
                await this.saveUserAddress(createVendorData.contactAddress, transaction);
            }
            await this.userRoleModel.create({ userId: user.id, roleId: 3 }, { transaction });
            await transaction.commit();
            return user;
        }
        catch (error) {
            console.log(error);
            if (transaction)
                await transaction.rollback();
            return null;
        }
    }
    async saveUser(createUserData, action = "C", transaction, userRole = null) {
        const userData = {
            firstName: createUserData.firstName,
            lastName: createUserData.lastName,
            userName: createUserData.email,
            email: createUserData.email,
            password: '123456',
            phone: createUserData.phone,
            picture: createUserData.picture,
            status: createUserData.status,
        };
        let user;
        if (action == 'C') {
            user = await this.userModel.create(userData, { transaction });
            if (userRole) {
                await this.userRoleModel.create({ userId: user.id, roleId: userRole }, { transaction });
            }
        }
        if (action == 'E') {
            await this.userModel.update(userData, { where: { id: createUserData.id }, transaction });
            user = await this.userModel.findOne({ where: { id: createUserData.id }, transaction });
        }
        return user;
    }
    async saveUserAddress(addressData, transaction) {
        const addressDeatilsData = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            state: addressData.state,
            country: addressData.country,
            zip: addressData.zip,
            phone: addressData.phone,
        };
        if (!addressData.id) {
            const address = await this.addressModel.create(addressDeatilsData, { transaction });
            addressData.id = address.id;
        }
        else {
            await this.addressModel.update(addressDeatilsData, { where: { id: addressData.id }, transaction });
        }
        await this.userAddressModel.destroy({
            where: { addressId: addressData.id, userId: addressData.userId },
            transaction
        });
        await this.userAddressModel.create({ addressId: addressData.id, userId: addressData.userId }, { transaction });
    }
};
UserCreateService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(user_model_1.User)),
    __param(1, sequelize_1.InjectModel(user_address_model_1.UserAddress)),
    __param(2, sequelize_1.InjectModel(address_model_1.Address)),
    __param(3, sequelize_1.InjectModel(user_role_model_1.UserRole)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, sequelize_typescript_1.Sequelize])
], UserCreateService);
exports.UserCreateService = UserCreateService;
//# sourceMappingURL=user-create.service.js.map