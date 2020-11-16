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
exports.PatientSpecalist = void 0;
const specalist_model_1 = require("../../shared/models/specalist.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const patient_model_1 = require("./patient.model");
let PatientSpecalist = class PatientSpecalist extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => patient_model_1.Patient),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PatientSpecalist.prototype, "patientId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => specalist_model_1.Specalist),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PatientSpecalist.prototype, "specalistId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => specalist_model_1.Specalist),
    __metadata("design:type", specalist_model_1.Specalist)
], PatientSpecalist.prototype, "specalist", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => patient_model_1.Patient),
    __metadata("design:type", patient_model_1.Patient)
], PatientSpecalist.prototype, "patient", void 0);
PatientSpecalist = __decorate([
    sequelize_typescript_1.Table
], PatientSpecalist);
exports.PatientSpecalist = PatientSpecalist;
//# sourceMappingURL=patient-specalist.model.js.map