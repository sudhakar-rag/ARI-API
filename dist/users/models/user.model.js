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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const provider_model_1 = require("./../../doctor/models/provider.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_role_model_1 = require("./user-role.model");
const user_address_model_1 = require("./user-address.model");
const role_model_1 = require("./role.model");
const user_card_detail_1 = require("./user-card-detail");
const patient_model_1 = require("../../patient/models/patient.model");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "picture", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => user_role_model_1.UserRole),
    __metadata("design:type", Array)
], User.prototype, "userRoles", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => user_card_detail_1.UserCardDetail),
    __metadata("design:type", Array)
], User.prototype, "userBankDetails", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => user_address_model_1.UserAddress),
    __metadata("design:type", Array)
], User.prototype, "UserAddresses", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => role_model_1.Role, () => user_role_model_1.UserRole),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => provider_model_1.Provider),
    __metadata("design:type", provider_model_1.Provider)
], User.prototype, "provider", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => patient_model_1.Patient),
    __metadata("design:type", patient_model_1.Patient)
], User.prototype, "patient", void 0);
User = __decorate([
    sequelize_typescript_1.Table
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map