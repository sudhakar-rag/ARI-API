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
        private userCreateService: UserCreateService,
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

            // const addressData = {
            //     userId: user.id,
            //     name: patientData.address.name,
            //     address1: patientData.address.address2,
            //     address2: patientData.address.address2,
            //     city: patientData.address.city,
            //     state: patientData.address.state,
            //     country: patientData.address.country,
            //     zip: patientData.address.zip,
            //     phone: patientData.address.phone
            // };

            // await this.userCreateService.saveUserAddress(addressData, transaction);

            const patient = await this.savePatientInfo(patientData, action, transaction);

            await this.saveSpecalists({ patientId: patient.id, specalists: patientData.specalists }, transaction);

            await this.saveProviderTypes({ patientId: patient.id, providerTypes: patientData.providerTypes }, transaction);

            await this.saveMedicalProblems({ patientId: patient.id, problems: patientData.medicalProblems }, transaction);

            await this.saveSymptoms({ patientId: patient.id, symptoms: patientData.symptoms }, transaction);

            await transaction.commit();

            return user;
        } catch (error) {
            console.log(error);
            if (transaction) await transaction.rollback();

            return null;
        }
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

    async deletePatient(id: number): Promise<any> {
        return await this.patientModel.destroy({ where: { id: id } });
    }
}
