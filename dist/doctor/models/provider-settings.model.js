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
exports.ProviderSetting = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const provider_model_1 = require("./provider.model");
let ProviderSetting = class ProviderSetting extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => provider_model_1.Provider),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProviderSetting.prototype, "providerId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderSetting.prototype, "label", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderSetting.prototype, "value", void 0);
ProviderSetting = __decorate([
    sequelize_typescript_1.Table
], ProviderSetting);
exports.ProviderSetting = ProviderSetting;
//# sourceMappingURL=provider-settings.model.js.map