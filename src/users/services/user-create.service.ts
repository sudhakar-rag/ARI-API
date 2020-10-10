import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto, CreateVendorDto, CreateBankDetailsDto, CreateAddressDto } from '../dto/create-user.dto';
import { User } from '../models/user.model';
import { UserRole } from '../models/user-role.model';
import { Role } from '../models/role.model';
import * as md5 from "md5";
import { UserAddress } from '../models/user-address.model';
import { Address } from '../models/address.model';
import { Transaction } from 'sequelize/types';

@Injectable()
export class UserCreateService {
    private loggedinUserData: User;
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
        @InjectModel(UserAddress)
        private readonly userAddressModel: typeof UserAddress,
        @InjectModel(Address)
        private readonly addressModel: typeof Address,
        @InjectModel(UserRole)
        private readonly userRoleModel: typeof UserRole,
        private readonly sequelize: Sequelize,
    ) { }

    setLoggedinUserData(user: User) {
        this.loggedinUserData = user;
    }

    getLoggedinUserData() {
        return this.loggedinUserData;
    }

    getUser(userId) {
        return this.userModel.findOne({
            where: { id: userId },
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: UserRole,
                    include: [Role]
                }
            ]
        })
    }


    async saveVendor(createVendorData: CreateVendorDto) {
        let transaction;
        try {
            transaction = await this.sequelize.transaction();

            let action = 'C';
            if (createVendorData.user.id) {
                action = 'E';
            }

            const user = await this.saveUser(createVendorData.user, action, transaction);

            if (createVendorData.user && createVendorData.user.password) {
                await this.userModel.update({ password: md5(createVendorData.user.password) }, { where: { id: user.id }, transaction });
            }

            // if (createVendorData.bankDetails) {
            //     createVendorData.bankDetails.userId = user.id;
            //     await this.saveUserBankDetails(createVendorData.bankDetails, action, transaction);
            // }


            if (createVendorData.contactAddress) {
                createVendorData.contactAddress.userId = user.id;
                await this.saveUserAddress(createVendorData.contactAddress, transaction);
            }

            await this.userRoleModel.create({ userId: user.id, roleId: 2 }, { transaction });

            await transaction.commit();

            return user;

        } catch (error) {
            // Rollback transaction only if the transaction object is defined
            console.log(error);
            if (transaction) await transaction.rollback();

            return null;
        }
    }


    async saveUser(createUserData: CreateUserDto, action = "C", transaction: Transaction, userRole = null): Promise<User> {

        const userData = {
            firstName: createUserData.firstName,
            lastName: createUserData.lastName,
            userName: createUserData.email,
            email: createUserData.email,
            password: '123456',
            phone: createUserData.phone,
            picture: createUserData.picture,
            status: createUserData.status,
        };

        let user: User;
        if (action == 'C') {
            user = await this.userModel.create(userData, { transaction });

            if (userRole) {
                await this.userRoleModel.create({ userId: user.id, roleId: userRole }, { transaction });
            }
        }

        if (action == 'E') {
            await this.userModel.update(userData, { where: { id: createUserData.id }, transaction });
            user = await this.userModel.findOne({ where: { id: createUserData.id }, transaction });
        }

        return user;
    }

    // async saveUserBankDetails(BankDeatils: CreateBankDetailsDto, action = "C", transaction): Promise<UserBankDetail> {
    //     let BankDeatilsData = {
    //         userId: BankDeatils.userId,
    //         name: BankDeatils.name,
    //         bankName: BankDeatils.bankName,
    //         accountNumber: BankDeatils.accountNumber,
    //         branch: BankDeatils.branch,
    //         ifsc: BankDeatils.ifsc,
    //         pan: BankDeatils.pan
    //     };

    //     let ubd = await this.userBankDetailModel.findOne({
    //         where: { userId: BankDeatilsData.userId },
    //         transaction
    //     });

    //     if (!ubd) {
    //         ubd = await this.userBankDetailModel.create(BankDeatilsData, { transaction });
    //     } else {
    //         await this.userBankDetailModel.update(BankDeatilsData, { where: { id: ubd.id }, transaction });
    //     }

    //     return ubd;
    // }

    async saveUserAddress(addressData: CreateAddressDto, transaction: Transaction): Promise<any> {

        const addressDeatilsData = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            state: addressData.state,
            country: addressData.country,
            zip: addressData.zip,
            phone: addressData.phone,
        };

        if (!addressData.id) {
            const address = await this.addressModel.create(addressDeatilsData, { transaction });
            addressData.id = address.id;
        } else {
            await this.addressModel.update(addressDeatilsData, { where: { id: addressData.id }, transaction });
        }

        await this.userAddressModel.destroy({
            where: { addressId: addressData.id, userId: addressData.userId },
            transaction
        });

        await this.userAddressModel.create({ addressId: addressData.id, userId: addressData.userId }, { transaction });

    }
}
