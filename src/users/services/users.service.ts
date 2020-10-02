import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateUserDto, CreateVendorDto, CreateBankDetailsDto, CreateAddressDto } from '../dto/create-user.dto';
import { User } from '../models/user.model';
import { UserRole } from '../models/user-role.model';
import { Role } from '../models/role.model';
import * as md5 from "md5";
import { UserBankDetail } from '../models/user-bank-detail';
import { UserAddress } from '../models/user-address.model';
import { Address } from '../models/address.model';
import { convertToJSONObject } from '@app/src/core/common/helpers';

@Injectable()
export class UsersService {
  private loggedinUserData: any;
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    @InjectModel(UserBankDetail)
    private readonly userBankDetailModel: typeof UserBankDetail,
    @InjectModel(UserAddress)
    private readonly userAddressModel: typeof UserAddress,
    @InjectModel(Address)
    private readonly addressModel: typeof Address,
    private readonly sequelize: Sequelize,
  ) { }

  setLoggedinUserData(rawData: User) {

    let user = {
      id: rawData.id,
      userName: rawData.userName,
      firstName: rawData.firstName,
      lastName: rawData.lastName,
      email: rawData.email,
      phone: rawData.phone,
      picture: rawData.picture,
      status: rawData.status,
      roles: []
    };

    if (rawData.userRoles) {
      for (const userRole of rawData.userRoles) {
        user.roles.push({
          roleId: userRole.roleId,
          permissions: convertToJSONObject(userRole.role.permissions)
        });
      }
    }

    this.loggedinUserData = user;
  }

  getLoggedinUserData() {
    return this.loggedinUserData;
  }

  /**
   * isAdmin
   */
  public isAdmin(): boolean {
    let flag = false;
    if (this.loggedinUserData && this.loggedinUserData.roles) {
      for (const role of this.loggedinUserData.roles) {
        if ([1].indexOf(role.roleId) !== -1) {
          flag = true;
        }
      }
    }
    return flag;
  }

  /**
   * getLoggedinUserId
   */
  public getLoggedinUserId() {
    return (this.loggedinUserData && this.loggedinUserData.id) || 0;
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

  async listVendors(queryParams: any): Promise<any> {
    let searchText = queryParams.queryString || '';

    queryParams.pageNumber = queryParams.pageNumber || 0;
    queryParams.pageSize = queryParams.pageSize || 10;
    let offset = parseInt(queryParams.pageNumber) * parseInt(queryParams.pageSize);
    let limit = parseInt(queryParams.pageSize);
    let sortField = queryParams.sortField || 'id';
    let sortOrder = queryParams.sortOrder || 'desc';

    return await this.userModel.findAndCountAll({
      include: [
        {
          model: UserRole,
          where: { roleId: 2 }
        }
      ],
      offset: offset,
      limit: limit,
      order: [[sortField, sortOrder]]
    });

  }



  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;

    return user.save();
  }

  async findAll(): Promise<User[]> {
    try {
      await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };

        await this.userModel.create(
          { firstName: 'Abraham', lastName: 'Lincoln' },
          transactionHost,
        );
        await this.userModel.create(
          { firstName: 'John', lastName: 'Boothe' },
          transactionHost,
        );
      });
    } catch (err) {
      // Transaction has been rolled back
      // err is whatever rejected the promise chain returned to the transaction callback
    }
    return this.userModel.findAll();
  }

  findOne(where: any): Promise<User> {
    return this.userModel.findOne({
      where: where,
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
