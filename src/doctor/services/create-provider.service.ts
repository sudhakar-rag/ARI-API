/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { EmailService } from './../../email/email.service';
import { RatingHistory } from './../models/rating-history';
import { User } from './../../users/models/user.model';
import { ProviderServices } from './../models/provider-services.model';
import { Sequelize } from 'sequelize-typescript';

import { Injectable } from '@nestjs/common';
import { Transaction } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { UserCreateService } from '@app/src/users/services/user-create.service';
import { Provider } from '../models/provider.model';
import { ProviderDto, ProviderEducationDto, ProviderHospitalDto, ProviderReferenceDto } from '../dto/provider.dto';
import { AddressDto } from '@app/src/patient/dto/address.dto';
import { Address } from '@app/src/users/models/address.model';
import { ProviderAddress } from '../models/provider-address.model';
import { ProviderLanguage } from '../models/provider-language.model';
import { ProviderAffilation } from '../models/provider-affilation.model';
import { ProviderEducation } from '../models/provider-education.model';
import { ProviderHospital } from '../models/provider-hospital.model';
import { ProviderReference } from '../models/provider-reference.model';
import { ProviderHistory } from '../models/provider-history.model';
import sequelize from 'sequelize';
import { ProviderSpecality } from '../models/provider-speciality.model';

@Injectable()
export class CreateProviderService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
        @InjectModel(Provider)
        private readonly providerModel: typeof Provider,
        @InjectModel(ProviderHistory)
        private readonly providerHistoryModel: typeof ProviderHistory,
        @InjectModel(Address)
        private readonly addressModel: typeof Address,
        @InjectModel(ProviderAddress)
        private readonly providerAddressModel: typeof ProviderAddress,
        @InjectModel(ProviderLanguage)
        private readonly providerLanguageModel: typeof ProviderLanguage,
        @InjectModel(ProviderAffilation)
        private readonly providerAffilationModel: typeof ProviderAffilation,
        @InjectModel(ProviderHospital)
        private readonly providerHospitalModel: typeof ProviderHospital,
        @InjectModel(ProviderEducation)
        private readonly providerEducationModel: typeof ProviderEducation,
        @InjectModel(ProviderReference)
        private readonly providerReferenceModel: typeof ProviderReference,
        @InjectModel(ProviderServices)
        private readonly providerServicesModel: typeof ProviderServices,
        @InjectModel(RatingHistory)
        private readonly ratingHistoryModel: typeof RatingHistory,
        @InjectModel(ProviderSpecality)
        private readonly providerSpecalityModel: typeof ProviderSpecality,
        private userCreateService: UserCreateService,
        private emailService: EmailService,
        private readonly sequelize: Sequelize,
    ) { }



    async createProvider(providerData: ProviderDto): Promise<any> {
        let transaction;

        try {
            transaction = await this.sequelize.transaction();

            let action = 'C';
            if (providerData.id) {
                action = 'E';
            }

            // create user
            const userData = {
                userName: providerData.email,
                password: '123456',
                firstName: providerData.firstName,
                lastName: providerData.lastName,
                email: providerData.email,
                phone: providerData.phone,
                picture: providerData.picture,
                status: 0
            }

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

            const welcomeData = {
                email: userData.email,
                name: userData.firstName + ' ' + userData.lastName,
                userName: userData.userName,
                password: userData.password
            };

            await this.emailService.sendWeclcomeMail(welcomeData);

            return user;
        } catch (error) {
            console.log(error);
            if (transaction) await transaction.rollback();

            return null;
        }
    }

    async saveProviderAddress(addressData: AddressDto, transaction: Transaction, patientId = null): Promise<any> {

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
        } else {
            await this.addressModel.update(addressDeatilsData, { where: { id: addressData.id }, transaction });
        }

        // await this.patientAddressModel.destroy({
        //     where: { addressId: addressData.id, patientId: patientId },
        //     transaction
        // });

        await this.providerAddressModel.create({ addressId: addressData.id, providerId: patientId }, { transaction });

    }

    async saveProviderHistoryInfo(providerData: ProviderDto, action = "C", transaction: Transaction, providerId = null): Promise<ProviderHistory> {

        const data = {
            providerId: providerId,
            religoiusAffiliations: providerData.religiousAffiliaions,
            specialBackground: providerData.specialBackground,
            limitations: providerData.limitation,
            drugAddiction: providerData.addiction,
            crimianalRecord: providerData.crime,
            malpractice: providerData.malpractice
        };

        let patient: ProviderHistory;
        if (action == 'C') {
            patient = await this.providerHistoryModel.create(data, { transaction });
        }

        if (action == 'E') {
            await this.providerModel.update(data, { where: { providerId: providerId }, transaction });
            patient = await this.providerHistoryModel.findOne({ where: { providerId: providerId }, transaction });
        }

        return patient;
    }

    async saveProviderInfo(providerData: ProviderDto, action = "C", transaction: Transaction): Promise<Provider> {

        const data = {
            userId: providerData.id,
            dateOfBirth: providerData.dateOfBirth,
            ethnicity: providerData.ethnicity,
            gender: providerData.gender,
            areaOfInterest: providerData.areaOfInterest,
            otherLang: providerData.otherLang,
            speciality: providerData.medicalSpeciality,
            hasDrugAddiction: providerData.hasDrugAddiction,
            hasCriminalRecord: providerData.hasCriminalRecord,
            hasMalpractice: providerData.hasMalpractice
        };

        let patient: Provider;
        if (action == 'C') {
            patient = await this.providerModel.create(data, { transaction });
        }

        if (action == 'E') {
            await this.providerModel.update(data, { where: { userId: providerData.id }, transaction });
            patient = await this.providerModel.findOne({ where: { userId: providerData.id }, transaction });
        }

        return patient;
    }

    async saveSpeciality(data: { providerId: string, specialities: Array<number> }, transaction: Transaction): Promise<any> {

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

    async saveLanguages(data: { providerId: string, languages: Array<number> }, transaction: Transaction): Promise<any> {

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

    async saveAffiliations(data: { providerId: string, hospitals: Array<string> }, transaction: Transaction): Promise<any> {

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

    async saveEducations(data: { providerId: string, educations: Array<ProviderEducationDto> }, transaction: Transaction): Promise<any> {

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

    async saveHospitals(data: { providerId: string, hospitals: Array<ProviderHospitalDto> }, transaction: Transaction): Promise<any> {

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

    async saveReferences(data: { providerId: string, references: Array<ProviderReferenceDto> }, transaction: Transaction): Promise<any> {

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

    async saveServices(data: { providerId: string, services: Array<number> }, transaction: Transaction): Promise<any> {

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

    async updateBasicInfo(data: any): Promise<any> {

        const ProviderData = {
            ethnicity: data.ethnicity,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender,
            // medicalSpeciality: data.medicalSpeciality,
            areaOfInterest: data.areaOfInterest,
            otherLang: data.otherLang,
        };

        const userData = {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone
        }

        const addressData = {
            address1: data.address1,
            address2: data.address2,
            city: data.city,
            state: data.state,
            country: data.country,
            zip: data.zip
        }

        // user Info
        await this.userModel.update(userData, { where: { id: data.userId } });

        // Address Info
        await this.addressModel.update(addressData, { where: { id: data.addressId } });

        // services 
        await this.providerServicesModel.destroy({
            where: { providerId: data.providerId }
        })

        const services = [];
        for (const service of data.services) {
            services.push({ providerId: data.providerId, serviceId: service });
        }

        await this.providerServicesModel.bulkCreate(services);

        await this.providerSpecalityModel.destroy({
            where: { providerId: data.providerId }
        })

        const specialities = [];
        for (const specalityId of data.medicalSpeciality) {
            specialities.push({ providerId: data.providerId, specalityId: specalityId });
        }

        await this.providerSpecalityModel.bulkCreate(specialities);


        // provider
        const result = await this.providerModel.update(ProviderData, { where: { userId: data.userId } });

        return result;
    }


    async updateTraining(data: any): Promise<any> {

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

        //Hospital
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

    async updateReferences(data: any): Promise<any> {

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

    async updateBackground(data: any): Promise<any> {

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
        }

        // History Info
        await this.providerHistoryModel.update(historyData, { where: { providerId: data.providerId } });

        // provider
        const result = await this.providerModel.update(ProviderData, { where: { userId: data.userId } });

        return result;
    }

    async updateCulturalBackground(data: any): Promise<any> {

        await this.providerLanguageModel.destroy({
            where: { providerId: data.providerId }
        });

        const languages = [];
        for (const lng of data.languages) {
            languages.push({ providerId: data.providerId, langId: lng });
        }

        await this.providerLanguageModel.bulkCreate(languages);

        const historyData = {
            religoiusAffiliations: data.religoiusAffiliations,
            specialBackground: data.specialBackground,
        }

        const result = await this.providerHistoryModel.update(historyData, { where: { providerId: data.providerId } });


        return result;

    }


    async updateAffilations(data: any): Promise<any> {

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

    async updateStatus(data: any): Promise<any> {

        const StatusData = {
            isAvailable: data.isAvailable
        }

        const result = await this.providerModel.update(StatusData, { where: { id: data.providerId } });

        return result;

    }

    async saveRating(data: any): Promise<any> {

        const ratingData = {
            patientId: data.patientId,
            providerId: data.providerId,
            rating: data.rating,
            review: data.review
        }

        await this.ratingHistoryModel.create(ratingData);

        const ratingCount: any = await this.ratingHistoryModel.findOne({
            where: { providerId: data.providerId },
            attributes: [
                [sequelize.fn('sum', sequelize.col('rating')), 'totalRating'],
                [sequelize.fn('count', sequelize.col('id')), 'count'],
            ],
            raw: true,
        });

        console.log(ratingCount);

        const average = Math.round(ratingCount.totalRating / ratingCount.count);

        const ProviderData = {
            rating: average
        };

        // provider
        const result = await this.providerModel.update(ProviderData, { where: { userId: data.providerId } });

        return result;
    }

}
