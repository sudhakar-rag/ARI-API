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
exports.PatientDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
const address_dto_1 = require("./address.dto");
class PatientDto {
}
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsNumber(),
    __metadata("design:type", Number)
], PatientDto.prototype, "id", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "firstName", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "lastName", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "email", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "phone", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "password", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "picture", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "dateOfBirth", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "ethnicity", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "gender", void 0);
__decorate([
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => address_dto_1.AddressDto),
    __metadata("design:type", address_dto_1.AddressDto)
], PatientDto.prototype, "address", void 0);
__decorate([
    class_validator_2.IsNumber(),
    __metadata("design:type", Number)
], PatientDto.prototype, "subscriptionId", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], PatientDto.prototype, "specalists", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], PatientDto.prototype, "symptoms", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], PatientDto.prototype, "providerTypes", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], PatientDto.prototype, "medicalProblems", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "medications", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "otherMedicalProblems", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "otherSymptoms", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "otherSpecialist", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "vitamins", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "restrictions", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "allergies", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "socialHistory", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "surgeryHistory", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "familyHistory", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "vaccinationHistory", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "travelHistory", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], PatientDto.prototype, "hospitalizationHistory", void 0);
__decorate([
    class_validator_2.IsNumber(),
    __metadata("design:type", Number)
], PatientDto.prototype, "status", void 0);
exports.PatientDto = PatientDto;
//# sourceMappingURL=patient.dto.js.map