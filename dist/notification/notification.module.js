"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationModule = void 0;
const notification_controller_1 = require("./controllers/notification.controller");
const notification_service_1 = require("./services/notification.service");
const notification_model_1 = require("./../shared/models/notification.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const appointment_model_1 = require("../shared/models/appointment.model");
const users_module_1 = require("../users/users.module");
let NotificationModule = class NotificationModule {
};
NotificationModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                notification_model_1.Notification,
                appointment_model_1.Appointment
            ]),
            users_module_1.UsersModule,
        ],
        controllers: [notification_controller_1.NotificationController],
        providers: [notification_service_1.NotificationService],
        exports: [notification_service_1.NotificationService],
    })
], NotificationModule);
exports.NotificationModule = NotificationModule;
//# sourceMappingURL=notification.module.js.map