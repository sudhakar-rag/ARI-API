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
exports.UpdateAppointmentDto = exports.AppointmentStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["PENDING"] = "PENDING";
    AppointmentStatus["ACCEPTED"] = "ACCEPTED";
    AppointmentStatus["CANCELLED"] = "CANCELLED";
    AppointmentStatus["COMPLETED"] = "COMPLETED";
})(AppointmentStatus = exports.AppointmentStatus || (exports.AppointmentStatus = {}));
class UpdateAppointmentDto {
}
__decorate([
    swagger_1.ApiProperty({ type: Number, default: 11 }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], UpdateAppointmentDto.prototype, "appointmentId", void 0);
__decorate([
    swagger_1.ApiProperty({ enum: AppointmentStatus, enumName: 'appointmentStatus' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateAppointmentDto.prototype, "status", void 0);
exports.UpdateAppointmentDto = UpdateAppointmentDto;
//# sourceMappingURL=update-appointment.dto.js.map