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
exports.UserRole = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const role_model_1 = require("./role.model");
const user_model_1 = require("./user.model");
let UserRole = class UserRole extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserRole.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => role_model_1.Role),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserRole.prototype, "roleId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], UserRole.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => role_model_1.Role),
    __metadata("design:type", role_model_1.Role)
], UserRole.prototype, "role", void 0);
UserRole = __decorate([
    sequelize_typescript_1.Table
], UserRole);
exports.UserRole = UserRole;
//# sourceMappingURL=user-role.model.js.map