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
exports.AppointmentPayment = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const appointment_model_1 = require("./appointment.model");
const payment_model_1 = require("./payment.model");
let AppointmentPayment = class AppointmentPayment extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => appointment_model_1.Appointment),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], AppointmentPayment.prototype, "appointmentId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => payment_model_1.Payment),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], AppointmentPayment.prototype, "paymentId", void 0);
AppointmentPayment = __decorate([
    sequelize_typescript_1.Table
], AppointmentPayment);
exports.AppointmentPayment = AppointmentPayment;
//# sourceMappingURL=appointment-payment.model.js.map