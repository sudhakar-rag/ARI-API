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
exports.Notification = void 0;
const user_model_1 = require("./../../users/models/user.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_typescript_2 = require("sequelize-typescript");
const appointment_model_1 = require("./appointment.model");
let Notification = class Notification extends sequelize_typescript_2.Model {
};
__decorate([
    sequelize_typescript_2.ForeignKey(() => appointment_model_1.Appointment),
    sequelize_typescript_2.Column,
    __metadata("design:type", Number)
], Notification.prototype, "appointmentId", void 0);
__decorate([
    sequelize_typescript_2.ForeignKey(() => user_model_1.User),
    sequelize_typescript_2.Column,
    __metadata("design:type", Number)
], Notification.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_2.Column(sequelize_typescript_1.DataType.TEXT({ length: 'medium' })),
    __metadata("design:type", String)
], Notification.prototype, "message", void 0);
__decorate([
    sequelize_typescript_2.Column,
    __metadata("design:type", Boolean)
], Notification.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => appointment_model_1.Appointment),
    __metadata("design:type", appointment_model_1.Appointment)
], Notification.prototype, "Appointment", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Notification.prototype, "user", void 0);
Notification = __decorate([
    sequelize_typescript_2.Table
], Notification);
exports.Notification = Notification;
//# sourceMappingURL=notification.model.js.map