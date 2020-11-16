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
exports.ProviderReference = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const provider_model_1 = require("./provider.model");
let ProviderReference = class ProviderReference extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => provider_model_1.Provider),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProviderReference.prototype, "providerId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderReference.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderReference.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderReference.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderReference.prototype, "degree", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderReference.prototype, "hospital", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderReference.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderReference.prototype, "phone", void 0);
ProviderReference = __decorate([
    sequelize_typescript_1.Table
], ProviderReference);
exports.ProviderReference = ProviderReference;
//# sourceMappingURL=provider-reference.model.js.map