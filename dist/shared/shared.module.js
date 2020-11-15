"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const country_model_1 = require("./models/country.model");
const state_model_1 = require("./models/state.model");
const notification_model_1 = require("./models/notification.model");
const attachments_model_1 = require("./models/attachments.model");
const users_module_1 = require("./../users/users.module");
const services_model_1 = require("./models/services.model");
const language_model_1 = require("./../doctor/models/language.model");
const address_model_1 = require("./../users/models/address.model");
const shared_controller_1 = require("./controllers/shared.controller");
const shared_service_1 = require("./services/shared.service");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const medical_problems_model_1 = require("./models/medical-problems.model");
const provider_type_model_1 = require("./models/provider-type.model");
const specalist_model_1 = require("./models/specalist.model");
const subscription_model_1 = require("./models/subscription.model");
const symptom_model_1 = require("./models/symptom.model");
const payment_model_1 = require("./models/payment.model");
const appointment_model_1 = require("./models/appointment.model");
const appointment_payment_model_1 = require("./models/appointment-payment.model");
const appointment_details_model_1 = require("./models/appointment-details.model");
const call_notifications_model_1 = require("./models/call-notifications.model");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                medical_problems_model_1.MedicalProblems,
                provider_type_model_1.ProviderType,
                specalist_model_1.Specalist,
                symptom_model_1.Symptom,
                subscription_model_1.Subscription,
                address_model_1.Address,
                state_model_1.State,
                country_model_1.Country,
                language_model_1.Language,
                services_model_1.Service,
                payment_model_1.Payment,
                appointment_model_1.Appointment,
                attachments_model_1.Attachments,
                appointment_payment_model_1.AppointmentPayment,
                appointment_details_model_1.AppointmentDetails,
                notification_model_1.Notification,
                call_notifications_model_1.CallNotification
            ]),
            users_module_1.UsersModule
        ],
        providers: [shared_service_1.SharedService],
        controllers: [shared_controller_1.SharedController],
        exports: [shared_service_1.SharedService],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map