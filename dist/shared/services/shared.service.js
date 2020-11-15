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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedService = void 0;
const payment_model_1 = require("./../models/payment.model");
const country_model_1 = require("./../models/country.model");
const state_model_1 = require("./../models/state.model");
const provider_type_model_1 = require("./../models/provider-type.model");
const appointment_details_model_1 = require("./../models/appointment-details.model");
const services_model_1 = require("./../models/services.model");
const language_model_1 = require("./../../doctor/models/language.model");
const address_model_1 = require("./../../users/models/address.model");
const symptom_model_1 = require("./../models/symptom.model");
const medical_problems_model_1 = require("./../models/medical-problems.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_create_service_1 = require("../../users/services/user-create.service");
const specalist_model_1 = require("../models/specalist.model");
let SharedService = class SharedService {
    constructor(medicalProblemsModel, symptomModel, specialistModel, languageModel, addressModel, serviceModel, stateModel, countryModel, providerTypeModel, appointmentDetailsModel, paymentModel, sequelize) {
        this.medicalProblemsModel = medicalProblemsModel;
        this.symptomModel = symptomModel;
        this.specialistModel = specialistModel;
        this.languageModel = languageModel;
        this.addressModel = addressModel;
        this.serviceModel = serviceModel;
        this.stateModel = stateModel;
        this.countryModel = countryModel;
        this.providerTypeModel = providerTypeModel;
        this.appointmentDetailsModel = appointmentDetailsModel;
        this.paymentModel = paymentModel;
        this.sequelize = sequelize;
    }
    async getMedicalProblems() {
        return await this.medicalProblemsModel.findAll();
    }
    async getSymptoms() {
        return await this.symptomModel.findAll();
    }
    async getSpecialists() {
        return await this.specialistModel.findAll();
    }
    async getProviderTypes() {
        return await this.providerTypeModel.findAll();
    }
    async getLanguages() {
        return await this.languageModel.findAll();
    }
    async getServices() {
        return await this.serviceModel.findAll();
    }
    async getStates() {
        return await this.stateModel.findAll();
    }
    async getCountries() {
        return await this.countryModel.findAll();
    }
    async getAddressById(addressId) {
        return await this.addressModel.findOne({
            where: { id: addressId }
        });
    }
    async getAppointmenteDetailsById(appointmentId) {
        return await this.appointmentDetailsModel.findOne({
            where: { appointmentId: appointmentId }
        });
    }
    async updateAppointmentSession(data) {
        const sessionData = {
            session: data.session
        };
        const result = await this.appointmentDetailsModel.update(sessionData, { where: { appointmentId: data.appointmentId } });
        return result;
    }
};
SharedService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(medical_problems_model_1.MedicalProblems)),
    __param(1, sequelize_1.InjectModel(symptom_model_1.Symptom)),
    __param(2, sequelize_1.InjectModel(specalist_model_1.Specalist)),
    __param(3, sequelize_1.InjectModel(language_model_1.Language)),
    __param(4, sequelize_1.InjectModel(address_model_1.Address)),
    __param(5, sequelize_1.InjectModel(services_model_1.Service)),
    __param(6, sequelize_1.InjectModel(state_model_1.State)),
    __param(7, sequelize_1.InjectModel(country_model_1.Country)),
    __param(8, sequelize_1.InjectModel(provider_type_model_1.ProviderType)),
    __param(9, sequelize_1.InjectModel(appointment_details_model_1.AppointmentDetails)),
    __param(10, sequelize_1.InjectModel(payment_model_1.Payment)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, sequelize_typescript_1.Sequelize])
], SharedService);
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map