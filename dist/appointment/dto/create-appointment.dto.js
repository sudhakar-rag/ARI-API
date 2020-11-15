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
exports.CreateAppointmentDto = exports.AppointmentStatus = exports.AppointmentType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var AppointmentType;
(function (AppointmentType) {
    AppointmentType["I"] = "I";
    AppointmentType["G"] = "G";
})(AppointmentType = exports.AppointmentType || (exports.AppointmentType = {}));
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["PENDING"] = "PENDING";
    AppointmentStatus["ACCEPTED"] = "ACCEPTED";
    AppointmentStatus["CANCELLED"] = "CANCELLED";
    AppointmentStatus["COMPLETED"] = "COMPLETED";
})(AppointmentStatus = exports.AppointmentStatus || (exports.AppointmentStatus = {}));
class CreateAppointmentDto {
}
__decorate([
    swagger_1.ApiProperty({ type: Number, default: 11 }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "providerId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number, default: 1 }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "patientId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number, default: 1 }),
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "appointmentId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number, default: 1 }),
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "date", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number, default: 5 }),
    class_validator_1.IsNumber(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "slotId", void 0);
__decorate([
    swagger_1.ApiProperty({ enum: AppointmentType, enumName: 'appointmentType' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "meetingId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "joinUrl", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "startUrl", void 0);
__decorate([
    swagger_1.ApiProperty({ enum: AppointmentStatus, enumName: 'appointmentStatus' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, default: 'Fever' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "appointmentType", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, default: 'subject text' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "subject", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, default: 'message text' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "message", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "fileType", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "fileName", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "uploadedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, default: 'assets/image/user.png' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "files", void 0);
exports.CreateAppointmentDto = CreateAppointmentDto;
//# sourceMappingURL=create-appointment.dto.js.map