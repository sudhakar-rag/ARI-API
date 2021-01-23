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
exports.ProviderService = void 0;
const services_model_1 = require("./../../shared/models/services.model");
const rating_history_1 = require("./../models/rating-history");
const provider_services_model_1 = require("./../models/provider-services.model");
const user_model_1 = require("../../users/models/user.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const provider_address_model_1 = require("../models/provider-address.model");
const provider_affilation_model_1 = require("../models/provider-affilation.model");
const provider_education_model_1 = require("../models/provider-education.model");
const provider_history_model_1 = require("../models/provider-history.model");
const provider_hospital_model_1 = require("../models/provider-hospital.model");
const provider_language_model_1 = require("../models/provider-language.model");
const provider_reference_model_1 = require("../models/provider-reference.model");
const provider_model_1 = require("../models/provider.model");
const provider_availability_model_1 = require("../models/provider-availability.model");
const provider_availability_slot_model_1 = require("../models/provider-availability-slot.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const provider_settings_model_1 = require("../models/provider-settings.model");
const list_query_params_dto_1 = require("../../core/common/list-query-params.dto");
const sequelize_2 = require("sequelize");
const appointment_model_1 = require("../../shared/models/appointment.model");
const patient_model_1 = require("../../patient/models/patient.model");
const address_model_1 = require("../../users/models/address.model");
const provider_speciality_model_1 = require("../models/provider-speciality.model");
const specalist_model_1 = require("../../shared/models/specalist.model");
const provider_exceptional_days_model_1 = require("../models/provider-exceptional-days.model");
let ProviderService = class ProviderService {
    constructor(providerModel, providerAvailabilityModel, providerAvailabilitySlotModel, providerSettingModel, ratingHistoryModel, appointmentModel, providerExceptionalDaysModel, sequelize) {
        this.providerModel = providerModel;
        this.providerAvailabilityModel = providerAvailabilityModel;
        this.providerAvailabilitySlotModel = providerAvailabilitySlotModel;
        this.providerSettingModel = providerSettingModel;
        this.ratingHistoryModel = ratingHistoryModel;
        this.appointmentModel = appointmentModel;
        this.providerExceptionalDaysModel = providerExceptionalDaysModel;
        this.sequelize = sequelize;
    }
    async getProviders(queryParams) {
        const searchText = queryParams.queryString || '';
        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        const offset = queryParams.pageNumber * queryParams.pageSize;
        const limit = queryParams.pageSize;
        const sortField = queryParams.sortField || 'id';
        const sortOrder = queryParams.sortOrder || 'desc';
        const where = {};
        const serviceWhere = {};
        const specialitiesWhere = {};
        if (queryParams.filter) {
            if (queryParams.filter.gender) {
                where['gender'] = queryParams.filter.gender;
            }
            if (typeof queryParams.filter.isAvailable == 'boolean') {
                where['isAvailable'] = queryParams.filter.isAvailable ? 1 : 0;
            }
            if (queryParams.filter.services) {
                serviceWhere['serviceId'] = { [sequelize_2.Op.in]: queryParams.filter.services };
            }
            if (queryParams.filter.specialities) {
                specialitiesWhere['specalityId'] = { [sequelize_2.Op.in]: queryParams.filter.specialities };
            }
        }
        let orderBy = [['id', 'desc']];
        if (sortField == 'id') {
            orderBy = [[sortField, sortOrder]];
        }
        else if (sortField == 'rating') {
            orderBy = [[sortField, 'DESC']];
        }
        else if (queryParams.sortField == 'name') {
            orderBy = [[sequelize_typescript_1.Sequelize.literal('`user.firstName`'), sortOrder]];
        }
        return await this.providerModel.findAndCountAll({
            distinct: true,
            include: [
                {
                    model: user_model_1.User,
                    as: 'user',
                    where: {
                        [sequelize_2.Op.or]: [
                            sequelize_typescript_1.Sequelize.where(sequelize_typescript_1.Sequelize.fn('concat', sequelize_typescript_1.Sequelize.col('firstName'), ' ', sequelize_typescript_1.Sequelize.col('lastName')), {
                                [sequelize_2.Op.like]: '%' + searchText + '%'
                            })
                        ]
                    },
                },
                {
                    model: provider_address_model_1.ProviderAddress,
                    include: [address_model_1.Address]
                },
                provider_language_model_1.ProviderLanguage,
                {
                    model: provider_services_model_1.ProviderServices,
                    required: typeof serviceWhere.serviceId != 'undefined',
                    where: serviceWhere
                },
                {
                    model: provider_speciality_model_1.ProviderSpecality,
                    include: [specalist_model_1.Specalist],
                    required: typeof specialitiesWhere.specalityId != 'undefined',
                    where: specialitiesWhere,
                }
            ],
            where: where,
            offset: offset,
            limit: limit,
            order: orderBy
        });
    }
    async getAppointments(queryParams) {
        const searchText = queryParams.queryString || '';
        queryParams.pageNumber = queryParams.pageNumber || 0;
        queryParams.pageSize = queryParams.pageSize || 10;
        const offset = queryParams.pageNumber * queryParams.pageSize;
        const limit = queryParams.pageSize;
        const sortField = queryParams.sortField || 'id';
        const sortOrder = queryParams.sortOrder || 'desc';
        let providerId = '0';
        if (queryParams.filter && queryParams.filter.providerId) {
            providerId = queryParams.filter.providerId;
        }
        console.log('providerId', providerId, queryParams);
        return await this.appointmentModel.findAndCountAll({
            include: [
                {
                    model: provider_model_1.Provider,
                    include: [user_model_1.User]
                },
                {
                    model: patient_model_1.Patient,
                    include: [user_model_1.User]
                },
                provider_availability_slot_model_1.ProviderAvailabilitySlot
            ],
            where: { providerId: providerId },
            offset: offset,
            limit: limit,
            order: [[sortField, sortOrder]]
        });
    }
    async getProviderById(providerId) {
        return await this.providerModel.findOne({
            where: { id: providerId },
            include: [
                user_model_1.User,
                provider_history_model_1.ProviderHistory,
                {
                    model: provider_address_model_1.ProviderAddress,
                    include: [address_model_1.Address],
                    required: false
                },
                provider_affilation_model_1.ProviderAffilation,
                provider_education_model_1.ProviderEducation,
                provider_hospital_model_1.ProviderHospital,
                provider_language_model_1.ProviderLanguage,
                provider_reference_model_1.ProviderReference,
                {
                    model: provider_services_model_1.ProviderServices,
                    include: [{
                            model: services_model_1.Service
                        }]
                },
                {
                    model: provider_speciality_model_1.ProviderSpecality,
                    include: [specalist_model_1.Specalist],
                    required: false,
                },
                provider_settings_model_1.ProviderSetting
            ]
        });
    }
    async getProviderRatingById(userId) {
        return await this.ratingHistoryModel.findAndCountAll({
            where: { providerId: userId }
        });
    }
    async getAvailability(providerId) {
        return await this.providerAvailabilityModel.findAll({
            where: { providerId: providerId },
            include: [
                provider_availability_slot_model_1.ProviderAvailabilitySlot,
            ]
        });
    }
    async getAvailabilityByDay(params) {
        return await this.providerAvailabilityModel.findAll({
            where: {
                providerId: params.providerId,
                value: params.day
            },
            include: [provider_availability_slot_model_1.ProviderAvailabilitySlot]
        });
    }
    async saveAvailability(availabilityData) {
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            for (const slot of availabilityData.slots) {
                let providerAvailability = await this.providerAvailabilityModel.findOne({
                    where: {
                        providerId: availabilityData.providerId,
                        type: slot.type,
                        value: slot.value
                    }
                });
                if (!providerAvailability) {
                    providerAvailability = await this.providerAvailabilityModel.create({
                        providerId: availabilityData.providerId,
                        type: slot.type,
                        value: slot.value
                    });
                }
                await this.providerAvailabilitySlotModel.destroy({
                    where: { providerAvailabilityId: providerAvailability.id }
                });
                const intervals = [];
                for (const interval of slot.intervals) {
                    intervals.push({
                        providerAvailabilityId: providerAvailability.id,
                        startTime: interval.start,
                        endTime: interval.end
                    });
                }
                await this.providerAvailabilitySlotModel.bulkCreate(intervals);
            }
            await transaction.commit();
            return availabilityData;
        }
        catch (error) {
            if (transaction)
                await transaction.rollback();
            return null;
        }
    }
    async saveSettings(providerSettings) {
        let transaction;
        try {
            transaction = await this.sequelize.transaction();
            for (const setting of providerSettings.settings) {
                const result = await this.providerSettingModel.findOne({
                    where: {
                        providerId: providerSettings.providerId,
                        label: setting.label
                    }
                });
                if (!result) {
                    await this.providerSettingModel.create({
                        providerId: providerSettings.providerId,
                        label: setting.label,
                        value: setting.value
                    });
                }
                else {
                    await this.providerSettingModel.update({
                        value: setting.value
                    }, {
                        where: { providerId: providerSettings.providerId, label: setting.label }
                    });
                }
            }
            await transaction.commit();
            return providerSettings;
        }
        catch (error) {
            if (transaction)
                await transaction.rollback();
            return null;
        }
    }
    async getProviderSettings(providerId) {
        return await this.providerSettingModel.findAll({
            where: { providerId: providerId }
        });
    }
    async getExceptionalDays(providerId) {
        return await this.providerExceptionalDaysModel.findAll({
            where: { providerId: providerId }
        });
    }
    async setExceptionalDays(data) {
        try {
            await this.providerExceptionalDaysModel.destroy({
                where: { providerId: data.providerId }
            });
            const days = [];
            for (const day of data.days) {
                days.push({
                    providerId: data.providerId,
                    date: day
                });
            }
            await this.providerExceptionalDaysModel.bulkCreate(days);
            return data;
        }
        catch (error) {
            return null;
        }
    }
};
ProviderService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(provider_model_1.Provider)),
    __param(1, sequelize_1.InjectModel(provider_availability_model_1.ProviderAvailability)),
    __param(2, sequelize_1.InjectModel(provider_availability_slot_model_1.ProviderAvailabilitySlot)),
    __param(3, sequelize_1.InjectModel(provider_settings_model_1.ProviderSetting)),
    __param(4, sequelize_1.InjectModel(rating_history_1.RatingHistory)),
    __param(5, sequelize_1.InjectModel(appointment_model_1.Appointment)),
    __param(6, sequelize_1.InjectModel(provider_exceptional_days_model_1.ProviderExceptionalDays)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, sequelize_typescript_1.Sequelize])
], ProviderService);
exports.ProviderService = ProviderService;
//# sourceMappingURL=provider.service.js.map