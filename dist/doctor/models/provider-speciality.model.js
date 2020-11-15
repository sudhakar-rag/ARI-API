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
exports.ProviderSpecality = void 0;
const specalist_model_1 = require("../../shared/models/specalist.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const provider_model_1 = require("./provider.model");
let ProviderSpecality = class ProviderSpecality extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => provider_model_1.Provider),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProviderSpecality.prototype, "providerId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => specalist_model_1.Specalist),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProviderSpecality.prototype, "specalityId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => specalist_model_1.Specalist),
    __metadata("design:type", specalist_model_1.Specalist)
], ProviderSpecality.prototype, "specalist", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => provider_model_1.Provider),
    __metadata("design:type", provider_model_1.Provider)
], ProviderSpecality.prototype, "provider", void 0);
ProviderSpecality = __decorate([
    sequelize_typescript_1.Table
], ProviderSpecality);
exports.ProviderSpecality = ProviderSpecality;
//# sourceMappingURL=provider-speciality.model.js.map