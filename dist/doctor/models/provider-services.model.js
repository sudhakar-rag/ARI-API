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
exports.ProviderServices = void 0;
const services_model_1 = require("./../../shared/models/services.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const provider_model_1 = require("./provider.model");
let ProviderServices = class ProviderServices extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => provider_model_1.Provider),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProviderServices.prototype, "providerId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => services_model_1.Service),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProviderServices.prototype, "serviceId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => provider_model_1.Provider),
    __metadata("design:type", provider_model_1.Provider)
], ProviderServices.prototype, "provider", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => services_model_1.Service),
    __metadata("design:type", services_model_1.Service)
], ProviderServices.prototype, "service", void 0);
ProviderServices = __decorate([
    sequelize_typescript_1.Table
], ProviderServices);
exports.ProviderServices = ProviderServices;
//# sourceMappingURL=provider-services.model.js.map