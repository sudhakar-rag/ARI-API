"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const payment_module_1 = require("./payment/payment.module");
const notification_module_1 = require("./notification/notification.module");
const patient_module_1 = require("./patient/patient.module");
const provider_module_1 = require("./doctor/provider.module");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_module_1 = require("./core/config/config.module");
const database_module_1 = require("./core/database/database.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const settings_module_1 = require("./settings/settings.module");
const sms_module_1 = require("./sms/sms.module");
const email_module_1 = require("./email/email.module");
const shared_module_1 = require("./shared/shared.module");
const appointment_module_1 = require("./appointment/appointment.module");
const zoom_module_1 = require("./zoom/zoom.module");
const aws_module_1 = require("./core/aws/aws.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_module_1.ConfigModule.register({ folder: './config' }),
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            provider_module_1.ProviderModule,
            patient_module_1.PatientsModule,
            auth_module_1.AuthModule,
            settings_module_1.SettingsModule,
            sms_module_1.SmsModule,
            email_module_1.EmailModule,
            shared_module_1.SharedModule,
            appointment_module_1.AppointmentModule,
            zoom_module_1.ZoomModule,
            aws_module_1.AwsModule,
            notification_module_1.NotificationModule,
            payment_module_1.PaymentModule,
            email_module_1.EmailModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map