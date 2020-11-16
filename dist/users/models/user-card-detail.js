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
exports.UserCardDetail = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./user.model");
let UserCardDetail = class UserCardDetail extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], UserCardDetail.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserCardDetail.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserCardDetail.prototype, "cardNo", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserCardDetail.prototype, "expiry", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], UserCardDetail.prototype, "cvv", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], UserCardDetail.prototype, "user", void 0);
UserCardDetail = __decorate([
    sequelize_typescript_1.Table
], UserCardDetail);
exports.UserCardDetail = UserCardDetail;
//# sourceMappingURL=user-card-detail.js.map