"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const provider_availability_slot_model_1 = require("../doctor/models/provider-availability-slot.model");
const notification_module_1 = require("../notification/notification.module");
const appointment_details_model_1 = require("../shared/models/appointment-details.model");
const appointment_model_1 = require("../shared/models/appointment.model");
const attachments_model_1 = require("../shared/models/attachments.model");
const users_module_1 = require("../users/users.module");
const zoom_module_1 = require("../zoom/zoom.module");
const appointment_controller_1 = require("./controllers/appointment.controller");
const appointment_service_1 = require("./services/appointment.service");
let AppointmentModule = class AppointmentModule {
};
AppointmentModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                appointment_model_1.Appointment,
                appointment_details_model_1.AppointmentDetails,
                provider_availability_slot_model_1.ProviderAvailabilitySlot,
                attachments_model_1.Attachments
            ]),
            users_module_1.UsersModule,
            zoom_module_1.ZoomModule,
            notification_module_1.NotificationModule
        ],
        controllers: [appointment_controller_1.AppointmentController],
        providers: [appointment_service_1.AppointmentService],
    })
], AppointmentModule);
exports.AppointmentModule = AppointmentModule;
//# sourceMappingURL=appointment.module.js.map