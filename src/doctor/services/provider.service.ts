import { UserCreateService } from './../../users/services/user-create.service';
import { Sequelize } from 'sequelize-typescript';
import { ProviderEducation } from './../models/provider-education.model';
import { ProviderDto } from './../dto/provider.dto';
import { Provider } from '../models/provider.model';

import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProviderService {
  constructor(
    @InjectModel(Provider) private readonly providerBasicModel: typeof Provider,
    @InjectModel(ProviderEducation)
    private readonly providerEducationModel: typeof ProviderEducation,
    // @InjectModel(User) private readonly userModel: typeof User,
    private readonly sequelize: Sequelize,
    private usersService: UserCreateService,
  ) {}

  async getProviders(): Promise<any> {
    return await this.providerBasicModel.findAll();
  }

  async create(providerData: ProviderDto): Promise<any> {
    let transaction;
    try {
      transaction = await this.sequelize.transaction();

      let user;
      let action = 'C';

      let userData = {
        firstName: providerData.firstName,
        lastName: providerData.lastName,
        userName: providerData.email,
        email: providerData.email,
        phone: providerData.phone,
        status: 1,
      };

      user = await this.usersService.saveUser(
        userData,
        (action = 'C'),
        transaction,
      );

      providerData.id = user.id;

      // if (providerData.id) {
      //   user = await this.userModel.update(
      //     {
      //       firstName: providerData.firstName,
      //       lastName: providerData.lastName,
      //       email: providerData.email,
      //       phone: providerData.phone,
      //       status: 1,
      //     },
      //     { where: { id: providerData.id }, transaction },
      //   );
      //   action = 'E';
      // } else {
      //   user = await this.userModel.create(
      //     {
      //       firstName: providerData.firstName,
      //       lastName: providerData.lastName,
      //       email: providerData.email,
      //       phone: providerData.phone,
      //       password: 123456,
      //       status: 1,
      //     },
      //     { transaction },
      //   );
      //   providerData.id = user.id;
      // }

      // product details
      await this.saveEducation(providerData, action, transaction);

      await transaction.commit();

      return user;
    } catch (error) {
      // Rollback transaction only if the transaction object is defined
      console.log(error);
      if (transaction) await transaction.rollback();

      return null;
    }
  }

  async saveEducation(
    providerData: ProviderDto,
    action = 'C',
    transaction,
  ): Promise<any> {
    await this.providerEducationModel.destroy({
      where: { userId: providerData.id },
      transaction,
    });

    if (providerData.education && providerData.education.length) {
      let schools = [];
      for (const school of providerData.education) {
        schools.push({
          userId: providerData.id,
          school: school.school,
          degree: school.degree,
          fromYear: school.fromYear,
          toYear: school.toYear,
        });
      }
      await this.providerEducationModel.bulkCreate(schools, { transaction });
    }
  }
}
