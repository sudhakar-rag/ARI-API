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
exports.ProviderSettingsDto = exports.ProviderSettingItemDto = exports.AppointmentAvailabilityDto = exports.AppointmentSlotDto = exports.AppointmentIntervalDto = exports.AppointmentSlotType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
var AppointmentSlotType;
(function (AppointmentSlotType) {
    AppointmentSlotType["DAY"] = "DAY";
    AppointmentSlotType["DATE"] = "DATE";
})(AppointmentSlotType = exports.AppointmentSlotType || (exports.AppointmentSlotType = {}));
class AppointmentIntervalDto {
}
__decorate([
    swagger_1.ApiProperty({ type: String, default: '11:15' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AppointmentIntervalDto.prototype, "start", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, default: '13:45' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AppointmentIntervalDto.prototype, "end", void 0);
exports.AppointmentIntervalDto = AppointmentIntervalDto;
class AppointmentSlotDto {
}
__decorate([
    swagger_1.ApiProperty({ enum: AppointmentSlotType, enumName: 'slotType' }),
    class_validator_1.IsEnum(['DAY', 'DATE']),
    __metadata("design:type", String)
], AppointmentSlotDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, default: 'tuesday' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AppointmentSlotDto.prototype, "value", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [AppointmentIntervalDto] }),
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested({ each: true }),
    class_validator_1.ArrayMinSize(1),
    class_transformer_1.Type(() => AppointmentIntervalDto),
    __metadata("design:type", Array)
], AppointmentSlotDto.prototype, "intervals", void 0);
exports.AppointmentSlotDto = AppointmentSlotDto;
class AppointmentAvailabilityDto {
}
__decorate([
    swagger_1.ApiProperty({ type: Number, default: 11 }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], AppointmentAvailabilityDto.prototype, "providerId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [AppointmentSlotDto] }),
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested({ each: true }),
    class_validator_1.ArrayMinSize(1),
    class_transformer_1.Type(() => AppointmentSlotDto),
    __metadata("design:type", Array)
], AppointmentAvailabilityDto.prototype, "slots", void 0);
exports.AppointmentAvailabilityDto = AppointmentAvailabilityDto;
class ProviderSettingItemDto {
}
__decorate([
    swagger_1.ApiProperty({ type: String, default: '' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], ProviderSettingItemDto.prototype, "label", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, default: '' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], ProviderSettingItemDto.prototype, "value", void 0);
exports.ProviderSettingItemDto = ProviderSettingItemDto;
class ProviderSettingsDto {
}
__decorate([
    swagger_1.ApiProperty({ type: Number, default: 11 }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], ProviderSettingsDto.prototype, "providerId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [ProviderSettingItemDto] }),
    class_validator_1.IsArray(),
    class_validator_1.ValidateNested({ each: true }),
    class_validator_1.ArrayMinSize(1),
    class_transformer_1.Type(() => ProviderSettingItemDto),
    __metadata("design:type", Array)
], ProviderSettingsDto.prototype, "settings", void 0);
exports.ProviderSettingsDto = ProviderSettingsDto;
//# sourceMappingURL=appointment-availability.dto.js.map