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
exports.PatientMedicalProblem = void 0;
const medical_problems_model_1 = require("../../shared/models/medical-problems.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const patient_model_1 = require("./patient.model");
let PatientMedicalProblem = class PatientMedicalProblem extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => patient_model_1.Patient),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PatientMedicalProblem.prototype, "patientId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => medical_problems_model_1.MedicalProblems),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PatientMedicalProblem.prototype, "MedicalProblemId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => medical_problems_model_1.MedicalProblems),
    __metadata("design:type", medical_problems_model_1.MedicalProblems)
], PatientMedicalProblem.prototype, "medicalProblem", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => patient_model_1.Patient),
    __metadata("design:type", patient_model_1.Patient)
], PatientMedicalProblem.prototype, "patient", void 0);
PatientMedicalProblem = __decorate([
    sequelize_typescript_1.Table
], PatientMedicalProblem);
exports.PatientMedicalProblem = PatientMedicalProblem;
//# sourceMappingURL=patient-medical-problems.model.js.map