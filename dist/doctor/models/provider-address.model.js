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
exports.ProviderAddress = void 0;
const address_model_1 = require("../../users/models/address.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const provider_model_1 = require("./provider.model");
let ProviderAddress = class ProviderAddress extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => provider_model_1.Provider),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProviderAddress.prototype, "providerId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderAddress.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => address_model_1.Address),
    __metadata("design:type", Number)
], ProviderAddress.prototype, "addressId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => provider_model_1.Provider),
    __metadata("design:type", provider_model_1.Provider)
], ProviderAddress.prototype, "provider", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => address_model_1.Address),
    __metadata("design:type", address_model_1.Address)
], ProviderAddress.prototype, "address", void 0);
ProviderAddress = __decorate([
    sequelize_typescript_1.Table
], ProviderAddress);
exports.ProviderAddress = ProviderAddress;
//# sourceMappingURL=provider-address.model.js.map