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
exports.Provider = void 0;
const rating_history_1 = require("./rating-history");
const provider_services_model_1 = require("./provider-services.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./../../users/models/user.model");
const sequelize_typescript_2 = require("sequelize-typescript");
const provider_reference_model_1 = require("./provider-reference.model");
const provider_language_model_1 = require("./provider-language.model");
const provider_affilation_model_1 = require("./provider-affilation.model");
const provider_address_model_1 = require("./provider-address.model");
const provider_education_model_1 = require("./provider-education.model");
const provider_history_model_1 = require("./provider-history.model");
const provider_hospital_model_1 = require("./provider-hospital.model");
const provider_availability_model_1 = require("./provider-availability.model");
const provider_settings_model_1 = require("./provider-settings.model");
const provider_speciality_model_1 = require("./provider-speciality.model");
let Provider = class Provider extends sequelize_typescript_2.Model {
};
__decorate([
    sequelize_typescript_2.ForeignKey(() => user_model_1.User),
    sequelize_typescript_2.Column,
    __metadata("design:type", Number)
], Provider.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_2.Column,
    __metadata("design:type", String)
], Provider.prototype, "dateOfBirth", void 0);
__decorate([
    sequelize_typescript_2.Column,
    __metadata("design:type", String)
], Provider.prototype, "ethnicity", void 0);
__decorate([
    sequelize_typescript_2.Column(sequelize_typescript_2.DataType.ENUM('M', 'F', 'T')),
    __metadata("design:type", String)
], Provider.prototype, "gender", void 0);
__decorate([
    sequelize_typescript_2.Column,
    __metadata("design:type", String)
], Provider.prototype, "areaOfInterest", void 0);
__decorate([
    sequelize_typescript_2.Column,
    __metadata("design:type", String)
], Provider.prototype, "speciality", void 0);
__decorate([
    sequelize_typescript_2.Column,
    __metadata("design:type", Boolean)
], Provider.prototype, "hasDrugAddiction", void 0);
__decorate([
    sequelize_typescript_2.Column,
    __metadata("design:type", Boolean)
], Provider.prototype, "hasCriminalRecord", void 0);
__decorate([
    sequelize_typescript_2.Column,
    __metadata("design:type", Boolean)
], Provider.prototype, "hasMalpractice", void 0);
__decorate([
    sequelize_typescript_2.Column,
    __metadata("design:type", Boolean)
], Provider.prototype, "isAvailable", void 0);
__decorate([
    sequelize_typescript_2.Column,
    __metadata("design:type", Number)
], Provider.prototype, "rating", void 0);
__decorate([
    sequelize_typescript_2.HasOne(() => provider_history_model_1.ProviderHistory),
    __metadata("design:type", provider_history_model_1.ProviderHistory)
], Provider.prototype, "history", void 0);
__decorate([
    sequelize_typescript_2.HasOne(() => provider_address_model_1.ProviderAddress),
    __metadata("design:type", provider_address_model_1.ProviderAddress)
], Provider.prototype, "address", void 0);
__decorate([
    sequelize_typescript_2.HasMany(() => provider_services_model_1.ProviderServices),
    __metadata("design:type", Array)
], Provider.prototype, "services", void 0);
__decorate([
    sequelize_typescript_2.HasMany(() => rating_history_1.RatingHistory),
    __metadata("design:type", Array)
], Provider.prototype, "ratings", void 0);
__decorate([
    sequelize_typescript_2.HasMany(() => provider_affilation_model_1.ProviderAffilation),
    __metadata("design:type", Array)
], Provider.prototype, "affilations", void 0);
__decorate([
    sequelize_typescript_2.HasMany(() => provider_education_model_1.ProviderEducation),
    __metadata("design:type", Array)
], Provider.prototype, "educations", void 0);
__decorate([
    sequelize_typescript_2.HasMany(() => provider_hospital_model_1.ProviderHospital),
    __metadata("design:type", Array)
], Provider.prototype, "hospitals", void 0);
__decorate([
    sequelize_typescript_2.HasMany(() => provider_language_model_1.ProviderLanguage),
    __metadata("design:type", Array)
], Provider.prototype, "languages", void 0);
__decorate([
    sequelize_typescript_2.HasMany(() => provider_reference_model_1.ProviderReference),
    __metadata("design:type", Array)
], Provider.prototype, "references", void 0);
__decorate([
    sequelize_typescript_2.HasMany(() => provider_availability_model_1.ProviderAvailability),
    __metadata("design:type", Array)
], Provider.prototype, "availabilities", void 0);
__decorate([
    sequelize_typescript_2.HasMany(() => provider_settings_model_1.ProviderSetting),
    __metadata("design:type", Array)
], Provider.prototype, "settings", void 0);
__decorate([
    sequelize_typescript_2.HasMany(() => provider_speciality_model_1.ProviderSpecality),
    __metadata("design:type", Array)
], Provider.prototype, "specialities", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Provider.prototype, "user", void 0);
Provider = __decorate([
    sequelize_typescript_2.Table
], Provider);
exports.Provider = Provider;
//# sourceMappingURL=provider.model.js.map