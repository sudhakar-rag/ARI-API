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
exports.Payment = void 0;
const user_model_1 = require("./../../users/models/user.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const appointment_model_1 = require("./appointment.model");
const subscription_model_1 = require("./subscription.model");
let Payment = class Payment extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Payment.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('S', 'P')),
    __metadata("design:type", String)
], Payment.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('S', 'A')),
    __metadata("design:type", String)
], Payment.prototype, "paymentType", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => appointment_model_1.Appointment),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Payment.prototype, "appointmentId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => subscription_model_1.Subscription),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Payment.prototype, "subscriptionId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DECIMAL(10, 2)),
    __metadata("design:type", Number)
], Payment.prototype, "amount", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Payment.prototype, "txnId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('APPROVED', 'PENDING', 'CANCELLED', 'REFUNDED')),
    __metadata("design:type", String)
], Payment.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => subscription_model_1.Subscription, {
        onDelete: "SET NULL"
    }),
    __metadata("design:type", subscription_model_1.Subscription)
], Payment.prototype, "subscription", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => appointment_model_1.Appointment, {
        onDelete: "SET NULL"
    }),
    __metadata("design:type", appointment_model_1.Appointment)
], Payment.prototype, "appointment", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User, {
        onDelete: "SET NULL"
    }),
    __metadata("design:type", user_model_1.User)
], Payment.prototype, "user", void 0);
Payment = __decorate([
    sequelize_typescript_1.Table
], Payment);
exports.Payment = Payment;
//# sourceMappingURL=payment.model.js.map