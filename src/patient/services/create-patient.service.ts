import { EmailService } from './../../email/email.service';
import { PatientSubscription } from './../models/patient-subscription.model';
import { PatientDto } from './../dto/patient.dto';
import { Patient } from './../models/patient.model';
import { Sequelize } from 'sequelize-typescript';

import { Injectable, Inject } from '@nestjs/common';
import { Op, Transaction } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { UserCreateService } from '@app/src/users/services/user-create.service';
import { PatientMedicalProblem } from '../models/patient-medical-problems.model';
import { PatientProviderType } from '../models/patient-provider-type.model';
import { PatientSpecalist } from '../models/patient-specalist.model';
import { PatientSymptom } from '../models/patient-symptom.model';
import { Address } from './../../users/models/address.model';
import { Subscription } from './../../shared/models/subscription.model';
import { User } from '@app/src/users/models/user.model';
import { AddressDto } from '../dto/address.dto';
import { PatientAddress } from '../models/patient-address.model';

@Injectable()
export class CreatePatientService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
        @InjectModel(Patient)
        private readonly patientModel: typeof Patient,
        @InjectModel(PatientSpecalist)
        private readonly patientSpecalistModel: typeof PatientSpecalist,
        @InjectModel(PatientSymptom)
        private readonly patientSymptomModel: typeof PatientSymptom,
        @InjectModel(PatientMedicalProblem)
        private readonly patientMedicalProblemModel: typeof PatientMedicalProblem,
        @InjectModel(PatientProviderType)
        private readonly patientProviderTypeModel: typeof PatientProviderType,
        @InjectModel(Address)
        private readonly addressModel: typeof Address,
        @InjectModel(PatientAddress)
        private readonly patientAddressModel: typeof PatientAddress,
        @InjectModel(PatientSubscription)
        private readonly patientSubscriptionModel: typeof PatientSubscription,
        private userCreateService: UserCreateService,
        private emailService: EmailService,
        private readonly sequelize: Sequelize,
    ) { }



    async createPatient(patientData: PatientDto): Promise<any> {
        let transaction;

        try {
            transaction = await this.sequelize.transaction();

            let action = 'C';
            if (patientData.id) {
                action = 'E';
            }

            // create user
            const userData = {
                userName: patientData.email,
                password: '123456',
                firstName: patientData.firstName,
                lastName: patientData.lastName,
                email: patientData.email,
                phone: patientData.phone,
                picture: patientData.picture,
                status: patientData.status
            }

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

    async savePatientAddress(addressData: AddressDto, transaction: Transaction, patientId = null): Promise<any> {

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

        await this.patientAddressModel.create({ addressId: addressData.id, patientId: patientId }, { transaction });

    }

    async savePatientInfo(createUserData: PatientDto, action = "C", transaction: Transaction): Promise<Patient> {

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

        let patient: Patient;
        if (action == 'C') {
            patient = await this.patientModel.create(patientData, { transaction });
        }

        if (action == 'E') {
            await this.patientModel.update(patientData, { where: { userId: createUserData.id }, transaction });
            patient = await this.patientModel.findOne({ where: { userId: createUserData.id }, transaction });
        }

        return patient;
    }

    async savePatientSubscription(patientId: number , transaction: Transaction): Promise<any> {

        const patientData = {

            patientId: patientId,
            subscriptionId: 1,
            lastSubscriptionAt: new Date()

        };

        const result = await this.patientSubscriptionModel.create(patientData, { transaction });

        return result;
    }

    async saveSpecalists(data: { patientId: string, specalists: Array<number> }, transaction: Transaction): Promise<any> {

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

    async saveSymptoms(data: { patientId: string, symptoms: Array<number> }, transaction: Transaction): Promise<any> {

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

    async saveMedicalProblems(data: { patientId: string, problems: Array<number> }, transaction: Transaction): Promise<any> {

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

    async saveProviderTypes(data: { patientId: string, providerTypes: Array<number> }, transaction: Transaction): Promise<any> {

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

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async updateBasicInfo(data: any): Promise<any> {

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
        }

        const addressData = {
            address1: data.address1,
            address2: data.address2,
            city: data.city,
            state: data.state,
            country: data.country,
            zip: data.zip
        }

        // Address Info
        await this.userModel.update(userData, { where: { id: data.userId } });

        // Address Info
        await this.addressModel.update(addressData, { where: { id: data.addressId } });

        // Patient
        const result = await this.patientModel.update(patientData, { where: { userId: data.userId } });

        return result;
    }


    async updateSubscription(data: { patientId: number, subscriptionId: number }): Promise<any> {

        await this.patientSubscriptionModel.destroy({
            where: { patientId: data.patientId,
                     subscriptionId: data.subscriptionId}
        });

        const subData = {
            patientId: data.patientId,
            subscriptionId: data.subscriptionId,
            lastSubscriptionAt: new Date()
        };

        const result = await this.patientSubscriptionModel.create(subData);

        return result;
    }

    async updateHistory(data: any): Promise<any> {

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

    async updateHealth(data: any): Promise<any> {

        const healthData = {
            allergies: data.allergies,
            medications: data.medications,
            restrictions: data.restrictions,
            vitamins: data.vitamins,
        };

        const result = await this.patientModel.update(healthData, { where: { userId: data.userId } });

        return result;
    }

    async updateSymptoms(data: any): Promise<any> {

        let patientData = {
            otherSymptoms: data.otherSymptoms
        }

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


    async updateMedProblems(data: any): Promise<any> {

        let patientData = {
            otherMedicalProblems: data.otherMedProblem
        }

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

    async updateProvider(data: any): Promise<any> {

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
        }

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

    async deletePatient(id: number): Promise<any> {
        return await this.patientModel.destroy({ where: { id: id } });
    }
}
