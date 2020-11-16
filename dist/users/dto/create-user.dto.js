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
exports.CreateVendorDto = exports.CreateUserDto = exports.CreateBankDetailsDto = exports.CreateAddressDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateAddressDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateAddressDto.prototype, "id", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateAddressDto.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "address1", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "address2", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "city", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "state", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "country", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "zip", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAddressDto.prototype, "phone", void 0);
exports.CreateAddressDto = CreateAddressDto;
class CreateBankDetailsDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateBankDetailsDto.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBankDetailsDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBankDetailsDto.prototype, "bankName", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBankDetailsDto.prototype, "accountNumber", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBankDetailsDto.prototype, "branch", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBankDetailsDto.prototype, "ifsc", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBankDetailsDto.prototype, "pan", void 0);
exports.CreateBankDetailsDto = CreateBankDetailsDto;
class CreateUserDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "id", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "picture", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "status", void 0);
exports.CreateUserDto = CreateUserDto;
class CreateVendorDto {
}
__decorate([
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => CreateUserDto),
    __metadata("design:type", CreateUserDto)
], CreateVendorDto.prototype, "user", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => CreateBankDetailsDto),
    __metadata("design:type", CreateBankDetailsDto)
], CreateVendorDto.prototype, "bankDetails", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => CreateAddressDto),
    __metadata("design:type", CreateAddressDto)
], CreateVendorDto.prototype, "contactAddress", void 0);
exports.CreateVendorDto = CreateVendorDto;
//# sourceMappingURL=create-user.dto.js.map