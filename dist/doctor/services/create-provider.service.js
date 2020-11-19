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
exports.CreateProviderService = void 0;
const rating_history_1 = require("./../models/rating-history");
const user_model_1 = require("./../../users/models/user.model");
const provider_services_model_1 = require("./../models/provider-services.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_create_service_1 = require("../../users/services/user-create.service");
const provider_model_1 = require("../models/provider.model");
const address_dto_1 = require("../../patient/dto/address.dto");
const address_model_1 = require("../../users/models/address.model");
const provider_address_model_1 = require("../models/provider-address.model");
const provider_language_model_1 = require("../models/provider-language.model");
const provider_affilation_model_1 = require("../models/provider-affilation.model");
const provider_education_model_1 = require("../models/provider-education.model");
const provider_hospital_model_1 = require("../models/provider-hospital.model");
const provider_reference_model_1 = require("../models/provider-reference.model");
const provider_history_model_1 = require("../models/provider-history.model");
const sequelize_2 = require("sequelize");
const provider_speciality_model_1 = require("../models/provider-speciality.model");
let CreateProviderService = class CreateProviderService {
    constructor(userModel, providerModel, providerHistoryModel, addressModel, providerAddressModel, providerLanguageModel, providerAffilationModel, providerHospitalModel, providerEducationModel, providerReferenceModel, providerServicesModel, ratingHistoryModel, providerSpecalityModel, userCreateService, sequelize) {
        this.userModel = userModel;
        this.providerModel = providerModel;
        this.providerHistoryModel = providerHistoryModel;
        this.addressModel = addressModel;
        this.providerAddressModel = providerAddressModel;
        this.providerLanguageModel = providerLanguageModel;
        this.providerAffilationModel = providerAffilationModel;
        this.providerHospitalModel = providerHospitalModel;
        this.providerEducationModel = providerEducationModel;
        this.providerReferenceModel = providerReferenceModel;
        this.providerServicesModel = providerServicesModel;
        this.ratingHistoryModel = ratingHistoryModel;
        this.providerSpecalityModel = providerSpecalityModel;
        this.userCreateService = userCreateService;
        this.sequelize = sequelize;
    }
    async createProvider(providerData) {
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            let action = 'C';
            if (providerData.id) {
                action = 'E';
            }
            const userData = {
                userName: providerData.email,
                password: '123456',
                firstName: providerData.firstName,
                lastName: providerData.lastName,
                email: providerData.email,
                phone: providerData.phone,
                picture: providerData.picture,
                status: 0
            };
            const user = await this.userCreateService.saveUser(userData, action, transaction, 2);
            providerData.id = user.id;
            const provider = await this.saveProviderInfo(providerData, action, transaction);
            await this.saveProviderHistoryInfo(providerData, action, transaction, provider.id);
            await this.saveProviderAddress(providerData.address, transaction, provider.id);
            await this.saveSpeciality({ providerId: provider.id, specialities: [providerData.medicalSpeciality] }, transaction);
            await this.saveLanguages({ providerId: provider.id, languages: providerData.languages }, transaction);
            await this.saveAffiliations({ providerId: provider.id, hospitals: providerData.affiliations }, transaction);
            await this.saveEducations({ providerId: provider.id, educations: providerData.educations }, transaction);
            await this.saveHospitals({ providerId: provider.id, hospitals: providerData.hospitals }, transaction);
            await this.saveReferences({ providerId: provider.id, references: providerData.references }, transaction);
            await this.saveServices({ providerId: provider.id, services: providerData.services }, transaction);
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
    async saveProviderAddress(addressData, transaction, patientId = null) {
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
        await this.providerAddressModel.create({ addressId: addressData.id, providerId: patientId }, { transaction });
    }
    async saveProviderHistoryInfo(providerData, action = "C", transaction, providerId = null) {
        const data = {
            providerId: providerId,
            religoiusAffiliations: providerData.religiousAffiliaions,
            specialBackground: providerData.specialBackground,
            limitations: providerData.limitation,
            drugAddiction: providerData.addiction,
            crimianalRecord: providerData.crime,
            malpractice: providerData.malpractice
        };
        let patient;
        if (action == 'C') {
            patient = await this.providerHistoryModel.create(data, { transaction });
        }
        if (action == 'E') {
            await this.providerModel.update(data, { where: { providerId: providerId }, transaction });
            patient = await this.providerHistoryModel.findOne({ where: { providerId: providerId }, transaction });
        }
        return patient;
    }
    async saveProviderInfo(providerData, action = "C", transaction) {
        const data = {
            userId: providerData.id,
            dateOfBirth: providerData.dateOfBirth,
            ethnicity: providerData.ethnicity,
            isVerified: 0,
            gender: providerData.gender,
            areaOfInterest: providerData.areaOfInterest,
            speciality: providerData.medicalSpeciality,
            hasDrugAddiction: providerData.hasDrugAddiction,
            hasCriminalRecord: providerData.hasCriminalRecord,
            hasMalpractice: providerData.hasMalpractice
        };
        let patient;
        if (action == 'C') {
            patient = await this.providerModel.create(data, { transaction });
        }
        if (action == 'E') {
            await this.providerModel.update(data, { where: { userId: providerData.id }, transaction });
            patient = await this.providerModel.findOne({ where: { userId: providerData.id }, transaction });
        }
        return patient;
    }
    async saveSpeciality(data, transaction) {
        await this.providerSpecalityModel.destroy({
            where: { providerId: data.providerId },
            transaction
        });
        const specialities = [];
        for (const specality of data.specialities) {
            specialities.push({ providerId: data.providerId, specalityId: specality });
        }
        await this.providerLanguageModel.bulkCreate(specialities, { transaction: transaction });
        return data;
    }
    async saveLanguages(data, transaction) {
        await this.providerLanguageModel.destroy({
            where: { providerId: data.providerId },
            transaction
        });
        const languages = [];
        for (const lng of data.languages) {
            languages.push({ providerId: data.providerId, langId: lng });
        }
        await this.providerLanguageModel.bulkCreate(languages, { transaction: transaction });
        return data;
    }
    async saveAffiliations(data, transaction) {
        await this.providerAffilationModel.destroy({
            where: { providerId: data.providerId },
            transaction
        });
        const hospitals = [];
        for (const hospital of data.hospitals) {
            hospitals.push({ providerId: data.providerId, name: hospital });
        }
        await this.providerAffilationModel.bulkCreate(hospitals, { transaction: transaction });
        return data;
    }
    async saveEducations(data, transaction) {
        await this.providerEducationModel.destroy({
            where: { providerId: data.providerId },
            transaction
        });
        const educations = [];
        for (const hospital of data.educations) {
            educations.push({
                providerId: data.providerId,
                school: hospital.school,
                degree: hospital.degree,
                fromYear: hospital.fromYear,
                toYear: hospital.toYear
            });
        }
        await this.providerEducationModel.bulkCreate(educations, { transaction: transaction });
        return data;
    }
    async saveHospitals(data, transaction) {
        await this.providerHospitalModel.destroy({
            where: { providerId: data.providerId },
            transaction
        });
        const hospitals = [];
        for (const hospital of data.hospitals) {
            hospitals.push({
                providerId: data.providerId,
                hospital: hospital.hospital,
                location: hospital.location,
                state: hospital.state,
                fromYear: hospital.fromYear,
                toYear: hospital.toYear
            });
        }
        await this.providerHospitalModel.bulkCreate(hospitals, { transaction: transaction });
        return data;
    }
    async saveReferences(data, transaction) {
        await this.providerReferenceModel.destroy({
            where: { providerId: data.providerId },
            transaction
        });
        const references = [];
        for (const reference of data.references) {
            references.push({
                providerId: data.providerId,
                title: reference.title,
                firstName: reference.firstName,
                lastName: reference.lastName,
                degree: reference.degree,
                hospital: reference.hospital,
                email: reference.email,
                phone: reference.phone
            });
        }
        await this.providerReferenceModel.bulkCreate(references, { transaction: transaction });
        return data;
    }
    async saveServices(data, transaction) {
        await this.providerServicesModel.destroy({
            where: { providerId: data.providerId },
            transaction
        });
        const services = [];
        for (const service of data.services) {
            services.push({ providerId: data.providerId, serviceId: service });
        }
        await this.providerServicesModel.bulkCreate(services, { transaction: transaction });
        return data;
    }
    async updateBasicInfo(data) {
        const ProviderData = {
            ethnicity: data.ethnicity,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender,
            areaOfInterest: data.areaOfInterest,
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
        await this.providerServicesModel.destroy({
            where: { providerId: data.providerId }
        });
        const services = [];
        for (const service of data.services) {
            services.push({ providerId: data.providerId, serviceId: service });
        }
        await this.providerServicesModel.bulkCreate(services);
        await this.providerSpecalityModel.destroy({
            where: { providerId: data.providerId }
        });
        const specialities = [];
        for (const specalityId of data.medicalSpeciality) {
            specialities.push({ providerId: data.providerId, specalityId: specalityId });
        }
        await this.providerSpecalityModel.bulkCreate(specialities);
        const result = await this.providerModel.update(ProviderData, { where: { userId: data.userId } });
        return result;
    }
    async updateTraining(data) {
        await this.providerEducationModel.destroy({
            where: { providerId: data.providerId }
        });
        const educations = [];
        for (const hospital of data.educations) {
            educations.push({
                providerId: data.providerId,
                school: hospital.school,
                degree: hospital.degree,
                fromYear: hospital.fromYear,
                toYear: hospital.toYear
            });
        }
        await this.providerEducationModel.bulkCreate(educations);
        await this.providerHospitalModel.destroy({
            where: { providerId: data.providerId }
        });
        const hospitals = [];
        for (const hospital of data.hospitals) {
            hospitals.push({
                providerId: data.providerId,
                hospital: hospital.hospital,
                location: hospital.location,
                state: hospital.state,
                fromYear: hospital.fromYear,
                toYear: hospital.toYear
            });
        }
        const result = await this.providerHospitalModel.bulkCreate(hospitals);
        return result;
    }
    async updateReferences(data) {
        await this.providerReferenceModel.destroy({
            where: { providerId: data.providerId }
        });
        const references = [];
        for (const reference of data.references) {
            references.push({
                providerId: data.providerId,
                title: reference.title,
                firstName: reference.firstName,
                lastName: reference.lastName,
                degree: reference.degree,
                hospital: reference.hospital,
                email: reference.email,
                phone: reference.phone
            });
        }
        const result = await this.providerReferenceModel.bulkCreate(references);
        return result;
    }
    async updateBackground(data) {
        const ProviderData = {
            hasDrugAddiction: data.hasDrugAddiction,
            hasCriminalRecord: data.hasCriminalRecord,
            hasMalpractice: data.hasMalpractice,
        };
        const historyData = {
            limitations: data.limitations,
            drugAddiction: data.drugAddiction,
            crimianalRecord: data.crimianalRecord,
            malpractice: data.malpractice
        };
        await this.providerHistoryModel.update(historyData, { where: { providerId: data.providerId } });
        const result = await this.providerModel.update(ProviderData, { where: { userId: data.userId } });
        return result;
    }
    async updateCulturalBackground(data) {
        await this.providerLanguageModel.destroy({
            where: { providerId: data.providerId }
        });
        const languages = [];
        for (const lng of data.languages) {
            languages.push({ providerId: data.providerId, langId: lng });
        }
        await this.providerLanguageModel.bulkCreate(languages);
        let historyData = {
            religoiusAffiliations: data.religoiusAffiliations,
            specialBackground: data.specialBackground,
        };
        const result = await this.providerHistoryModel.update(historyData, { where: { providerId: data.providerId } });
        return result;
    }
    async updateAffilations(data) {
        await this.providerAffilationModel.destroy({
            where: { providerId: data.providerId }
        });
        const affilations = [];
        for (const hospital of data.affilations) {
            affilations.push({ providerId: data.providerId, name: hospital });
        }
        const result = await this.providerAffilationModel.bulkCreate(affilations);
        return result;
    }
    async updateStatus(data) {
        const StatusData = {
            isAvailable: data.isAvailable
        };
        const result = await this.providerModel.update(StatusData, { where: { id: data.providerId } });
        return result;
    }
    async saveRating(data) {
        const ratingData = {
            patientId: data.patientId,
            providerId: data.providerId,
            rating: data.rating,
            review: data.review
        };
        await this.ratingHistoryModel.create(ratingData);
        const ratingCount = await this.ratingHistoryModel.findOne({
            where: { providerId: data.providerId },
            attributes: [
                [sequelize_2.default.fn('sum', sequelize_2.default.col('rating')), 'totalRating'],
                [sequelize_2.default.fn('count', sequelize_2.default.col('id')), 'count'],
            ],
            raw: true,
        });
        console.log(ratingCount);
        let average = Math.round(ratingCount.totalRating / ratingCount.count);
        const ProviderData = {
            rating: average
        };
        const result = await this.providerModel.update(ProviderData, { where: { userId: data.providerId } });
        return result;
    }
};
CreateProviderService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(user_model_1.User)),
    __param(1, sequelize_1.InjectModel(provider_model_1.Provider)),
    __param(2, sequelize_1.InjectModel(provider_history_model_1.ProviderHistory)),
    __param(3, sequelize_1.InjectModel(address_model_1.Address)),
    __param(4, sequelize_1.InjectModel(provider_address_model_1.ProviderAddress)),
    __param(5, sequelize_1.InjectModel(provider_language_model_1.ProviderLanguage)),
    __param(6, sequelize_1.InjectModel(provider_affilation_model_1.ProviderAffilation)),
    __param(7, sequelize_1.InjectModel(provider_hospital_model_1.ProviderHospital)),
    __param(8, sequelize_1.InjectModel(provider_education_model_1.ProviderEducation)),
    __param(9, sequelize_1.InjectModel(provider_reference_model_1.ProviderReference)),
    __param(10, sequelize_1.InjectModel(provider_services_model_1.ProviderServices)),
    __param(11, sequelize_1.InjectModel(rating_history_1.RatingHistory)),
    __param(12, sequelize_1.InjectModel(provider_speciality_model_1.ProviderSpecality)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, user_create_service_1.UserCreateService,
        sequelize_typescript_1.Sequelize])
], CreateProviderService);
exports.CreateProviderService = CreateProviderService;
//# sourceMappingURL=create-provider.service.js.map