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
exports.PatientAddress = void 0;
const address_model_1 = require("../../users/models/address.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const patient_model_1 = require("./patient.model");
let PatientAddress = class PatientAddress extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => patient_model_1.Patient),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], PatientAddress.prototype, "patientId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PatientAddress.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => address_model_1.Address),
    __metadata("design:type", Number)
], PatientAddress.prototype, "addressId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => patient_model_1.Patient),
    __metadata("design:type", patient_model_1.Patient)
], PatientAddress.prototype, "patient", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => address_model_1.Address),
    __metadata("design:type", address_model_1.Address)
], PatientAddress.prototype, "address", void 0);
PatientAddress = __decorate([
    sequelize_typescript_1.Table
], PatientAddress);
exports.PatientAddress = PatientAddress;
//# sourceMappingURL=patient-address.model.js.map