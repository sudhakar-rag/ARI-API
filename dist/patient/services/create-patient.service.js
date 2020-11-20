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
exports.CreatePatientService = void 0;
const patient_subscription_model_1 = require("./../models/patient-subscription.model");
const patient_model_1 = require("./../models/patient.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_create_service_1 = require("../../users/services/user-create.service");
const patient_medical_problems_model_1 = require("../models/patient-medical-problems.model");
const patient_provider_type_model_1 = require("../models/patient-provider-type.model");
const patient_specalist_model_1 = require("../models/patient-specalist.model");
const patient_symptom_model_1 = require("../models/patient-symptom.model");
const address_model_1 = require("./../../users/models/address.model");
const user_model_1 = require("../../users/models/user.model");
const patient_address_model_1 = require("../models/patient-address.model");
let CreatePatientService = class CreatePatientService {
    constructor(userModel, patientModel, patientSpecalistModel, patientSymptomModel, patientMedicalProblemModel, patientProviderTypeModel, addressModel, patientAddressModel, patientSubscriptionModel, userCreateService, sequelize) {
        this.userModel = userModel;
        this.patientModel = patientModel;
        this.patientSpecalistModel = patientSpecalistModel;
        this.patientSymptomModel = patientSymptomModel;
        this.patientMedicalProblemModel = patientMedicalProblemModel;
        this.patientProviderTypeModel = patientProviderTypeModel;
        this.addressModel = addressModel;
        this.patientAddressModel = patientAddressModel;
        this.patientSubscriptionModel = patientSubscriptionModel;
        this.userCreateService = userCreateService;
        this.sequelize = sequelize;
    }
    async createPatient(patientData) {
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            let action = 'C';
            if (patientData.id) {
                action = 'E';
            }
            const userData = {
                userName: patientData.email,
                password: '123456',
                firstName: patientData.firstName,
                lastName: patientData.lastName,
                email: patientData.email,
                phone: patientData.phone,
                picture: patientData.picture,
                status: patientData.status
            };
            const user = await this.userCreateService.saveUser(userData, action, transaction, 3);
            patientData.id = user.id;
            const patient = await this.savePatientInfo(patientData, action, transaction);
            await this.savePatientSubscription(patient.id, transaction);
            await this.savePatientAddress(patientData.address, transaction, patient.id);
            await this.saveSpecalists({ patientId: patient.id, specalists: patientData.specalists }, transaction);
            await this.saveProviderTypes({ patientId: patient.id, providerTypes: patientData.providerTypes }, transaction);
            await this.saveMedicalProblems({ patientId: patient.id, problems: patientData.medicalProblems }, transaction);
            await this.saveSymptoms({ patientId: patient.id, symptoms: patientData.symptoms }, transaction);
            await transaction.commit();
            return user;
        }
        catch (error) {
            console.log(error);
            if (transaction)
                await transaction.rollback();
            return null;
        }
    }
    async savePatientAddress(addressData, transaction, patientId = null) {
        const addressDeatilsData = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            state: addressData.state,
            country: addressData.country,
            zip: addressData.zip,
            phone: addressData.phone
        };
        if (!addressData.id) {
            const address = await this.addressModel.create(addressDeatilsData, { transaction });
            addressData.id = address.id;
        }
        else {
            await this.addressModel.update(addressDeatilsData, { where: { id: addressData.id }, transaction });
        }
        await this.patientAddressModel.create({ addressId: addressData.id, patientId: patientId }, { transaction });
    }
    async savePatientInfo(createUserData, action = "C", transaction) {
        const patientData = {
            userId: createUserData.id,
            firstName: createUserData.firstName,
            lastName: createUserData.lastName,
            dateOfBirth: createUserData.dateOfBirth,
            ethnicity: createUserData.ethnicity,
            gender: createUserData.gender,
            profilePicture: createUserData.picture,
            subscriptionId: createUserData.subscriptionId,
            medications: createUserData.medications,
            otherMedicalProblems: createUserData.otherMedicalProblems,
            otherSymptoms: createUserData.otherSymptoms,
            otherSpecialist: createUserData.otherSpecialist,
            vitamins: createUserData.vitamins,
            restrictions: createUserData.restrictions,
            allergies: createUserData.allergies,
            socialHistory: createUserData.socialHistory,
            surgeryHistory: createUserData.surgeryHistory,
            familyHistory: createUserData.familyHistory,
            vaccinationHistory: createUserData.vaccinationHistory,
            travelHistory: createUserData.travelHistory,
            hospitalizationHistory: createUserData.hospitalizationHistory
        };
        let patient;
        if (action == 'C') {
            patient = await this.patientModel.create(patientData, { transaction });
        }
        if (action == 'E') {
            await this.patientModel.update(patientData, { where: { userId: createUserData.id }, transaction });
            patient = await this.patientModel.findOne({ where: { userId: createUserData.id }, transaction });
        }
        return patient;
    }
    async savePatientSubscription(patientId, transaction) {
        const patientData = {
            patientId: patientId,
            subscriptionId: 1,
            lastSubscriptionAt: new Date()
        };
        const result = await this.patientSubscriptionModel.create(patientData, { transaction });
        return result;
    }
    async saveSpecalists(data, transaction) {
        await this.patientSpecalistModel.destroy({
            where: { patientId: data.patientId },
            transaction
        });
        const specalists = [];
        for (const specalist of data.specalists) {
            specalists.push({ patientId: data.patientId, specalistId: specalist });
        }
        await this.patientSpecalistModel.bulkCreate(specalists, { transaction: transaction });
        return data;
    }
    async saveSymptoms(data, transaction) {
        await this.patientSymptomModel.destroy({
            where: { patientId: data.patientId },
            transaction
        });
        const specalists = [];
        for (const symptom of data.symptoms) {
            specalists.push({ patientId: data.patientId, symptomId: symptom });
        }
        await this.patientSymptomModel.bulkCreate(specalists, { transaction: transaction });
        return data;
    }
    async saveMedicalProblems(data, transaction) {
        await this.patientMedicalProblemModel.destroy({
            where: { patientId: data.patientId },
            transaction
        });
        const medicalProblems = [];
        for (const problem of data.problems) {
            medicalProblems.push({ patientId: data.patientId, MedicalProblemId: problem });
        }
        await this.patientMedicalProblemModel.bulkCreate(medicalProblems, { transaction: transaction });
        return data;
    }
    async saveProviderTypes(data, transaction) {
        await this.patientProviderTypeModel.destroy({
            where: { patientId: data.patientId },
            transaction
        });
        const types = [];
        for (const providerType of data.providerTypes) {
            types.push({ patientId: data.patientId, providerTypeId: providerType });
        }
        await this.patientProviderTypeModel.bulkCreate(types, { transaction: transaction });
        return data;
    }
    async updateBasicInfo(data) {
        const patientData = {
            ethnicity: data.ethnicity,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender
        };
        const userData = {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone
        };
        const addressData = {
            address1: data.address1,
            address2: data.address2,
            city: data.city,
            state: data.state,
            country: data.country,
            zip: data.zip
        };
        await this.userModel.update(userData, { where: { id: data.userId } });
        await this.addressModel.update(addressData, { where: { id: data.addressId } });
        const result = await this.patientModel.update(patientData, { where: { userId: data.userId } });
        return result;
    }
    async updateSubscription(data) {
        await this.patientSubscriptionModel.destroy({
            where: { patientId: data.patientId,
                subscriptionId: data.subscriptionId }
        });
        const subData = {
            patientId: data.patientId,
            subscriptionId: data.subscriptionId,
            lastSubscriptionAt: new Date()
        };
        const result = await this.patientSubscriptionModel.create(subData);
        return result;
    }
    async updateHistory(data) {
        const historyData = {
            familyHistory: data.familyHistory,
            socialHistory: data.socialHistory,
            surgeryHistory: data.surgeryHistory,
            vaccinationHistory: data.vaccinationHistory,
            travelHistory: data.travelHistory,
            hospitalizationHistory: data.hospitalizationHistory,
        };
        const result = await this.patientModel.update(historyData, { where: { userId: data.userId } });
        return result;
    }
    async updateHealth(data) {
        const healthData = {
            allergies: data.allergies,
            medications: data.medications,
            restrictions: data.restrictions,
            vitamins: data.vitamins,
        };
        const result = await this.patientModel.update(healthData, { where: { userId: data.userId } });
        return result;
    }
    async updateSymptoms(data) {
        let patientData = {
            otherSymptoms: data.otherSymptoms
        };
        await this.patientSymptomModel.destroy({
            where: { patientId: data.patientId }
        });
        const symptoms = [];
        for (const symptom of data.symptoms) {
            symptoms.push({ patientId: data.patientId, symptomId: symptom });
        }
        await this.patientSymptomModel.bulkCreate(symptoms);
        const result = await this.patientModel.update(patientData, { where: { userId: data.userId } });
        return result;
    }
    async updateMedProblems(data) {
        let patientData = {
            otherMedicalProblems: data.otherMedProblem
        };
        await this.patientMedicalProblemModel.destroy({
            where: { patientId: data.patientId }
        });
        const medicalProblems = [];
        for (const problem of data.patMedProblems) {
            medicalProblems.push({ patientId: data.patientId, MedicalProblemId: problem });
        }
        await this.patientMedicalProblemModel.bulkCreate(medicalProblems);
        const result = await this.patientModel.update(patientData, { where: { userId: data.userId } });
        return result;
    }
    async updateProvider(data) {
        await this.patientProviderTypeModel.destroy({
            where: { patientId: data.patientId }
        });
        const types = [];
        for (const providerType of data.priProviders) {
            types.push({ patientId: data.patientId, providerTypeId: providerType });
        }
        await this.patientProviderTypeModel.bulkCreate(types);
        let patientData = {
            otherSpecialist: data.otherSpecialist
        };
        await this.patientModel.update(patientData, { where: { userId: data.userId } });
        await this.patientSpecalistModel.destroy({
            where: { patientId: data.patientId }
        });
        const specalists = [];
        for (const specalist of data.specalists) {
            specalists.push({ patientId: data.patientId, specalistId: specalist });
        }
        const result = await this.patientSpecalistModel.bulkCreate(specalists);
        return result;
    }
    async deletePatient(id) {
        return await this.patientModel.destroy({ where: { id: id } });
    }
};
CreatePatientService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(user_model_1.User)),
    __param(1, sequelize_1.InjectModel(patient_model_1.Patient)),
    __param(2, sequelize_1.InjectModel(patient_specalist_model_1.PatientSpecalist)),
    __param(3, sequelize_1.InjectModel(patient_symptom_model_1.PatientSymptom)),
    __param(4, sequelize_1.InjectModel(patient_medical_problems_model_1.PatientMedicalProblem)),
    __param(5, sequelize_1.InjectModel(patient_provider_type_model_1.PatientProviderType)),
    __param(6, sequelize_1.InjectModel(address_model_1.Address)),
    __param(7, sequelize_1.InjectModel(patient_address_model_1.PatientAddress)),
    __param(8, sequelize_1.InjectModel(patient_subscription_model_1.PatientSubscription)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, user_create_service_1.UserCreateService,
        sequelize_typescript_1.Sequelize])
], CreatePatientService);
exports.CreatePatientService = CreatePatientService;
//# sourceMappingURL=create-patient.service.js.map