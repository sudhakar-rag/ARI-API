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
exports.Appointment = void 0;
const notification_model_1 = require("./notification.model");
const attachments_model_1 = require("./attachments.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const provider_availability_slot_model_1 = require("../../doctor/models/provider-availability-slot.model");
const sequelize_typescript_2 = require("sequelize-typescript");
const provider_model_1 = require("./../../doctor/models/provider.model");
const patient_model_1 = require("./../../patient/models/patient.model");
const appointment_details_model_1 = require("./appointment-details.model");
const appointment_payment_model_1 = require("./appointment-payment.model");
const payment_model_1 = require("./payment.model");
let Appointment = class Appointment extends sequelize_typescript_2.Model {
};
__decorate([
    sequelize_typescript_2.ForeignKey(() => provider_model_1.Provider),
    sequelize_typescript_2.Column,
    __metadata("design:type", Number)
], Appointment.prototype, "providerId", void 0);
__decorate([
    sequelize_typescript_2.ForeignKey(() => patient_model_1.Patient),
    sequelize_typescript_2.Column,
    __metadata("design:type", Number)
], Appointment.prototype, "patientId", void 0);
__decorate([
    sequelize_typescript_2.Column(sequelize_typescript_2.DataType.DATEONLY),
    __metadata("design:type", String)
], Appointment.prototype, "date", void 0);
__decorate([
    sequelize_typescript_2.ForeignKey(() => provider_availability_slot_model_1.ProviderAvailabilitySlot),
    sequelize_typescript_2.Column,
    __metadata("design:type", Number)
], Appointment.prototype, "slotId", void 0);
__decorate([
    sequelize_typescript_2.Column(sequelize_typescript_2.DataType.ENUM('I', 'G')),
    __metadata("design:type", String)
], Appointment.prototype, "type", void 0);
__decorate([
    sequelize_typescript_2.Column,
    __metadata("design:type", String)
], Appointment.prototype, "meetingId", void 0);
__decorate([
    sequelize_typescript_2.Column(sequelize_typescript_2.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Appointment.prototype, "joinUrl", void 0);
__decorate([
    sequelize_typescript_2.Column(sequelize_typescript_2.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Appointment.prototype, "startUrl", void 0);
__decorate([
    sequelize_typescript_2.Column(sequelize_typescript_2.DataType.ENUM('PENDING', 'COMPLETED')),
    __metadata("design:type", String)
], Appointment.prototype, "status", void 0);
__decorate([
    sequelize_typescript_2.BelongsTo(() => provider_model_1.Provider),
    __metadata("design:type", provider_model_1.Provider)
], Appointment.prototype, "provider", void 0);
__decorate([
    sequelize_typescript_2.BelongsTo(() => patient_model_1.Patient),
    __metadata("design:type", patient_model_1.Patient)
], Appointment.prototype, "patient", void 0);
__decorate([
    sequelize_typescript_2.BelongsTo(() => provider_availability_slot_model_1.ProviderAvailabilitySlot),
    __metadata("design:type", provider_availability_slot_model_1.ProviderAvailabilitySlot)
], Appointment.prototype, "slot", void 0);
__decorate([
    sequelize_typescript_2.BelongsToMany(() => payment_model_1.Payment, () => appointment_payment_model_1.AppointmentPayment),
    __metadata("design:type", Array)
], Appointment.prototype, "payments", void 0);
__decorate([
    sequelize_typescript_2.HasOne(() => appointment_details_model_1.AppointmentDetails),
    __metadata("design:type", appointment_details_model_1.AppointmentDetails)
], Appointment.prototype, "details", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => attachments_model_1.Attachments),
    __metadata("design:type", Array)
], Appointment.prototype, "attachments", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => notification_model_1.Notification),
    __metadata("design:type", Array)
], Appointment.prototype, "notifications", void 0);
Appointment = __decorate([
    sequelize_typescript_2.Table
], Appointment);
exports.Appointment = Appointment;
//# sourceMappingURL=appointment.model.js.map