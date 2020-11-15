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
exports.PatientSymptom = void 0;
const symptom_model_1 = require("../../shared/models/symptom.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const patient_model_1 = require("./patient.model");
let PatientSymptom = class PatientSymptom extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => patient_model_1.Patient),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PatientSymptom.prototype, "patientId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => symptom_model_1.Symptom),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PatientSymptom.prototype, "symptomId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => symptom_model_1.Symptom),
    __metadata("design:type", symptom_model_1.Symptom)
], PatientSymptom.prototype, "symptom", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => patient_model_1.Patient),
    __metadata("design:type", patient_model_1.Patient)
], PatientSymptom.prototype, "patient", void 0);
PatientSymptom = __decorate([
    sequelize_typescript_1.Table
], PatientSymptom);
exports.PatientSymptom = PatientSymptom;
//# sourceMappingURL=patient-symptom.model.js.map