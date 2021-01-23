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
exports.ProviderRegistrationDto = exports.ProviderReferenceDto = exports.ProviderHospitalDto = exports.ProviderEducationDto = exports.ProviderDto = void 0;
const address_dto_1 = require("./../../patient/dto/address.dto");
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ProviderDto {
}
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsNumber(),
    __metadata("design:type", Number)
], ProviderDto.prototype, "id", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "firstName", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "lastName", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "email", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "phone", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "password", void 0);
__decorate([
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => address_dto_1.AddressDto),
    __metadata("design:type", address_dto_1.AddressDto)
], ProviderDto.prototype, "address", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "picture", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "dateOfBirth", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "ethnicity", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "gender", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", Number)
], ProviderDto.prototype, "medicalSpeciality", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "areaOfInterest", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], ProviderDto.prototype, "services", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], ProviderDto.prototype, "educations", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], ProviderDto.prototype, "hospitals", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], ProviderDto.prototype, "affiliations", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], ProviderDto.prototype, "languages", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "otherLang", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], ProviderDto.prototype, "references", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "religiousAffiliaions", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "specialBackground", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "limitation", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], ProviderDto.prototype, "hasDrugAddiction", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "addiction", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], ProviderDto.prototype, "hasCriminalRecord", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "crime", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], ProviderDto.prototype, "hasMalpractice", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderDto.prototype, "malpractice", void 0);
exports.ProviderDto = ProviderDto;
class ProviderEducationDto {
}
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsNumber(),
    __metadata("design:type", Number)
], ProviderEducationDto.prototype, "id", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsNumber(),
    __metadata("design:type", Number)
], ProviderEducationDto.prototype, "providerId", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderEducationDto.prototype, "school", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderEducationDto.prototype, "degree", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderEducationDto.prototype, "fromYear", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderEducationDto.prototype, "toYear", void 0);
exports.ProviderEducationDto = ProviderEducationDto;
class ProviderHospitalDto {
}
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsNumber(),
    __metadata("design:type", Number)
], ProviderHospitalDto.prototype, "id", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsNumber(),
    __metadata("design:type", Number)
], ProviderHospitalDto.prototype, "providerId", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderHospitalDto.prototype, "hospital", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderHospitalDto.prototype, "location", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderHospitalDto.prototype, "state", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderHospitalDto.prototype, "fromYear", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderHospitalDto.prototype, "toYear", void 0);
exports.ProviderHospitalDto = ProviderHospitalDto;
class ProviderReferenceDto {
}
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsNumber(),
    __metadata("design:type", Number)
], ProviderReferenceDto.prototype, "id", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsNumber(),
    __metadata("design:type", Number)
], ProviderReferenceDto.prototype, "providerId", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderReferenceDto.prototype, "title", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderReferenceDto.prototype, "firstName", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderReferenceDto.prototype, "lastName", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderReferenceDto.prototype, "degree", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderReferenceDto.prototype, "hospital", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderReferenceDto.prototype, "email", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderReferenceDto.prototype, "phone", void 0);
exports.ProviderReferenceDto = ProviderReferenceDto;
class ProviderRegistrationDto {
}
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsNumber(),
    __metadata("design:type", Number)
], ProviderRegistrationDto.prototype, "id", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderRegistrationDto.prototype, "title", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderRegistrationDto.prototype, "providerCredential", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderRegistrationDto.prototype, "firstName", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderRegistrationDto.prototype, "lastName", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderRegistrationDto.prototype, "email", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderRegistrationDto.prototype, "phone", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderRegistrationDto.prototype, "yearsInPractice", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderRegistrationDto.prototype, "boardCertifiedSpecialty", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderRegistrationDto.prototype, "howLearnAboutTeladocHealth", void 0);
__decorate([
    class_validator_2.IsOptional(),
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderRegistrationDto.prototype, "otherTeladocHealth", void 0);
__decorate([
    class_validator_2.IsString(),
    __metadata("design:type", String)
], ProviderRegistrationDto.prototype, "currentlyEnrolledIn", void 0);
exports.ProviderRegistrationDto = ProviderRegistrationDto;
//# sourceMappingURL=provider.dto.js.map