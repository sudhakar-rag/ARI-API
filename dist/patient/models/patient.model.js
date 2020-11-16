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
exports.Patient = void 0;
const patient_subscription_model_1 = require("./patient-subscription.model");
const rating_history_1 = require("./../../doctor/models/rating-history");
const user_model_1 = require("./../../users/models/user.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const subscription_model_1 = require("./../../shared/models/subscription.model");
const patient_medical_problems_model_1 = require("./patient-medical-problems.model");
const patient_symptom_model_1 = require("./patient-symptom.model");
const patient_specalist_model_1 = require("./patient-specalist.model");
const patient_provider_type_model_1 = require("./patient-provider-type.model");
const patient_address_model_1 = require("./patient-address.model");
let Patient = class Patient extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Patient.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Patient.prototype, "dateOfBirth", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Patient.prototype, "ethnicity", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('M', 'F', 'T')),
    __metadata("design:type", String)
], Patient.prototype, "gender", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => subscription_model_1.Subscription),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Patient.prototype, "subscriptionId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "otherMedicalProblems", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "otherSymptoms", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "otherSpecialist", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "medications", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "vitamins", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "restrictions", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "allergies", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "socialHistory", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "surgeryHistory", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "familyHistory", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "vaccinationHistory", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "travelHistory", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Patient.prototype, "hospitalizationHistory", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => patient_address_model_1.PatientAddress),
    __metadata("design:type", patient_address_model_1.PatientAddress)
], Patient.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => subscription_model_1.Subscription),
    __metadata("design:type", subscription_model_1.Subscription)
], Patient.prototype, "subscription", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => patient_medical_problems_model_1.PatientMedicalProblem),
    __metadata("design:type", Array)
], Patient.prototype, "problems", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => rating_history_1.RatingHistory),
    __metadata("design:type", Array)
], Patient.prototype, "ratings", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => patient_symptom_model_1.PatientSymptom),
    __metadata("design:type", Array)
], Patient.prototype, "symptoms", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => patient_specalist_model_1.PatientSpecalist),
    __metadata("design:type", Array)
], Patient.prototype, "specalists", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => patient_provider_type_model_1.PatientProviderType),
    __metadata("design:type", Array)
], Patient.prototype, "providerTypes", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => patient_subscription_model_1.PatientSubscription),
    __metadata("design:type", Array)
], Patient.prototype, "patientSubscriptions", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Patient.prototype, "user", void 0);
Patient = __decorate([
    sequelize_typescript_1.Table
], Patient);
exports.Patient = Patient;
//# sourceMappingURL=patient.model.js.map