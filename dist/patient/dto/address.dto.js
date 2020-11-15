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
exports.AddressDto = void 0;
const class_validator_1 = require("class-validator");
class AddressDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], AddressDto.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddressDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddressDto.prototype, "phone", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddressDto.prototype, "address1", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddressDto.prototype, "address2", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddressDto.prototype, "city", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddressDto.prototype, "state", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddressDto.prototype, "country", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AddressDto.prototype, "zip", void 0);
exports.AddressDto = AddressDto;
//# sourceMappingURL=address.dto.js.map