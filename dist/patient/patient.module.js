"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientsModule = void 0;
const patient_subscription_model_1 = require("./models/patient-subscription.model");
const provider_module_1 = require("./../doctor/provider.module");
const patient_service_1 = require("./services/patient.service");
const patient_controller_1 = require("./controllers/patient.controller");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const patient_model_1 = require("./models/patient.model");
const users_module_1 = require("../users/users.module");
const patient_symptom_model_1 = require("./models/patient-symptom.model");
const patient_specalist_model_1 = require("./models/patient-specalist.model");
const patient_provider_type_model_1 = require("./models/patient-provider-type.model");
const patient_medical_problems_model_1 = require("./models/patient-medical-problems.model");
const user_model_1 = require("../users/models/user.model");
const create_patient_service_1 = require("./services/create-patient.service");
const patient_address_model_1 = require("./models/patient-address.model");
const address_model_1 = require("../users/models/address.model");
const appointment_model_1 = require("../shared/models/appointment.model");
const appointment_details_model_1 = require("../shared/models/appointment-details.model");
const provider_model_1 = require("../doctor/models/provider.model");
const provider_availability_slot_model_1 = require("../doctor/models/provider-availability-slot.model");
let PatientsModule = class PatientsModule {
};
PatientsModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                user_model_1.User,
                address_model_1.Address,
                patient_model_1.Patient,
                patient_symptom_model_1.PatientSymptom,
                patient_specalist_model_1.PatientSpecalist,
                patient_subscription_model_1.PatientSubscription,
                patient_provider_type_model_1.PatientProviderType,
                patient_medical_problems_model_1.PatientMedicalProblem,
                patient_address_model_1.PatientAddress,
                appointment_model_1.Appointment,
                appointment_details_model_1.AppointmentDetails,
                provider_model_1.Provider,
                provider_availability_slot_model_1.ProviderAvailabilitySlot
            ]),
            users_module_1.UsersModule,
            provider_module_1.ProviderModule
        ],
        providers: [patient_service_1.PatientService, create_patient_service_1.CreatePatientService],
        controllers: [patient_controller_1.PatientsController],
        exports: [patient_service_1.PatientService],
    })
], PatientsModule);
exports.PatientsModule = PatientsModule;
//# sourceMappingURL=patient.module.js.map