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
exports.ProviderRegistration = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let ProviderRegistration = class ProviderRegistration extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderRegistration.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('MD', 'DO')),
    __metadata("design:type", String)
], ProviderRegistration.prototype, "providerCredential", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderRegistration.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderRegistration.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderRegistration.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderRegistration.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('M', 'F', 'T')),
    __metadata("design:type", String)
], ProviderRegistration.prototype, "gender", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderRegistration.prototype, "yearsInPractice", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderRegistration.prototype, "boardCertifiedSpecialty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderRegistration.prototype, "statesOfLicensure", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderRegistration.prototype, "howLearnAboutTeladocHealth", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderRegistration.prototype, "otherTeladocHealth", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProviderRegistration.prototype, "currentlyEnrolledIn", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProviderRegistration.prototype, "verified", void 0);
ProviderRegistration = __decorate([
    sequelize_typescript_1.Table
], ProviderRegistration);
exports.ProviderRegistration = ProviderRegistration;
//# sourceMappingURL=provider-registratioin.model.js.map