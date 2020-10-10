import { Sequelize } from 'sequelize-typescript';

import { Injectable } from '@nestjs/common';
import { Transaction } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { UserCreateService } from '@app/src/users/services/user-create.service';
import { Provider } from '../models/provider.model';
import { ProviderDto } from '../dto/provider.dto';
import { AddressDto } from '@app/src/patient/dto/address.dto';
import { Address } from '@app/src/users/models/address.model';
import { ProviderAddress } from '../models/provider-address.model';

@Injectable()
export class CreateProviderService {
    constructor(
        @InjectModel(Provider)
        private readonly providerModel: typeof Provider,
        @InjectModel(Address)
        private readonly addressModel: typeof Address,
        @InjectModel(ProviderAddress)
        private readonly providerAddressModel: typeof ProviderAddress,
        private userCreateService: UserCreateService,
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

            const user = await this.userCreateService.saveUser(userData, action, transaction, 3);

            providerData.id = user.id;

            // const patient = await this.savePatientInfo(patientData, action, transaction);

            // await this.savePatientAddress(patientData.address, transaction, patient.id);

            await transaction.commit();

            return user;
        } catch (error) {
            console.log(error);
            if (transaction) await transaction.rollback();

            return null;
        }
    }

    async savePatientAddress(addressData: AddressDto, transaction: Transaction, patientId = null): Promise<any> {

        // const addressDeatilsData = {
        //     name: addressData.name,
        //     address1: addressData.address1,
        //     address2: addressData.address2,
        //     city: addressData.city,
        //     state: addressData.state,
        //     country: addressData.country,
        //     zip: addressData.zip,
        //     phone: addressData.phone
        // };



        // if (!addressData.id) {
        //     const address = await this.addressModel.create(addressDeatilsData, { transaction });
        //     addressData.id = address.id;
        // } else {
        //     await this.addressModel.update(addressDeatilsData, { where: { id: addressData.id }, transaction });
        // }

        // // await this.patientAddressModel.destroy({
        // //     where: { addressId: addressData.id, patientId: patientId },
        // //     transaction
        // // });

        // await this.patientAddressModel.create({ addressId: addressData.id, patientId: patientId }, { transaction });

    }

    // async savePatientInfo(createUserData: ProviderDto, action = "C", transaction: Transaction): Promise<Provider> {

    //     const patientData = {
    //         userId: createUserData.id,
    //         firstName: createUserData.firstName,
    //         lastName: createUserData.lastName,
    //         dateOfBirth: createUserData.dateOfBirth,
    //         ethnicity: createUserData.ethnicity,
    //         gender: createUserData.gender,
    //         profilePicture: createUserData.picture
    //     };

    //     let patient: Provider;
    //     if (action == 'C') {
    //         patient = await this.providerModel.create(patientData, { transaction });
    //     }

    //     if (action == 'E') {
    //         await this.providerModel.update(patientData, { where: { userId: createUserData.id }, transaction });
    //         patient = await this.providerModel.findOne({ where: { userId: createUserData.id }, transaction });
    //     }

    //     return patient;
    // }
}
