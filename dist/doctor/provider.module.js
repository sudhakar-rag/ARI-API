"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderModule = void 0;
const email_module_1 = require("./../email/email.module");
const rating_history_1 = require("./models/rating-history");
const provider_services_model_1 = require("./models/provider-services.model");
const user_model_1 = require("./../users/models/user.model");
const users_module_1 = require("./../users/users.module");
const provider_language_model_1 = require("./models/provider-language.model");
const provider_reference_model_1 = require("./models/provider-reference.model");
const provider_hospital_model_1 = require("./models/provider-hospital.model");
const provider_education_model_1 = require("./models/provider-education.model");
const provider_affilation_model_1 = require("./models/provider-affilation.model");
const speciality_model_1 = require("./models/speciality.model");
const language_model_1 = require("./models/language.model");
const provider_service_1 = require("./services/provider.service");
const provider_model_1 = require("./models/provider.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const providers_controller_1 = require("./controllers/providers.controller");
const address_model_1 = require("../users/models/address.model");
const create_provider_service_1 = require("./services/create-provider.service");
const provider_address_model_1 = require("./models/provider-address.model");
const provider_history_model_1 = require("./models/provider-history.model");
const provider_availability_model_1 = require("./models/provider-availability.model");
const provider_availability_slot_model_1 = require("./models/provider-availability-slot.model");
const provider_settings_model_1 = require("./models/provider-settings.model");
const appointment_model_1 = require("../shared/models/appointment.model");
const provider_speciality_model_1 = require("./models/provider-speciality.model");
let ProviderModule = class ProviderModule {
};
ProviderModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                user_model_1.User,
                provider_model_1.Provider,
                provider_speciality_model_1.ProviderSpecality,
                speciality_model_1.Speciality,
                language_model_1.Language,
                provider_language_model_1.ProviderLanguage,
                provider_affilation_model_1.ProviderAffilation,
                provider_education_model_1.ProviderEducation,
                provider_hospital_model_1.ProviderHospital,
                provider_reference_model_1.ProviderReference,
                address_model_1.Address,
                provider_address_model_1.ProviderAddress,
                provider_history_model_1.ProviderHistory,
                provider_services_model_1.ProviderServices,
                provider_availability_model_1.ProviderAvailability,
                provider_availability_slot_model_1.ProviderAvailabilitySlot,
                provider_settings_model_1.ProviderSetting,
                rating_history_1.RatingHistory,
                appointment_model_1.Appointment
            ]),
            users_module_1.UsersModule,
            email_module_1.EmailModule
        ],
        providers: [provider_service_1.ProviderService, create_provider_service_1.CreateProviderService],
        controllers: [providers_controller_1.ProvidersController],
        exports: [provider_service_1.ProviderService, create_provider_service_1.CreateProviderService],
    })
], ProviderModule);
exports.ProviderModule = ProviderModule;
//# sourceMappingURL=provider.module.js.map