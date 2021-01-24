/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Service } from './../../shared/models/services.model';
import { RatingHistory } from './../models/rating-history';
import { ProviderServices } from './../models/provider-services.model';
import { User } from '@app/src/users/models/user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProviderAddress } from '../models/provider-address.model';
import { ProviderAffilation } from '../models/provider-affilation.model';
import { ProviderEducation } from '../models/provider-education.model';
import { ProviderHistory } from '../models/provider-history.model';
import { ProviderHospital } from '../models/provider-hospital.model';
import { ProviderLanguage } from '../models/provider-language.model';
import { ProviderReference } from '../models/provider-reference.model';
import { Provider } from '../models/provider.model';
import { AppointmentAvailabilityDto, ProviderSettingsDto } from '../dto/appointment-availability.dto';
import { ProviderAvailability } from '../models/provider-availability.model';
import { ProviderAvailabilitySlot } from '../models/provider-availability-slot.model';
import { Sequelize } from 'sequelize-typescript';
import { ProviderSetting } from '../models/provider-settings.model';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
import { Op } from 'sequelize';
import { Appointment } from '../../shared/models/appointment.model';
import { Patient } from '../../patient/models/patient.model';
import { Address } from '@app/src/users/models/address.model';
import { ProviderSpecality } from '../models/provider-speciality.model';
import { Specalist } from '@app/src/shared/models/specalist.model';
import { ProviderExceptionalDays } from '../models/provider-exceptional-days.model';
import { ProviderRegistration } from '../models/provider-registratioin.model';

@Injectable()
export class ProviderService {
  constructor(
    @InjectModel(Provider)
    private readonly providerModel: typeof Provider,
    @InjectModel(ProviderAvailability)
    private readonly providerAvailabilityModel: typeof ProviderAvailability,
    @InjectModel(ProviderAvailabilitySlot)
    private readonly providerAvailabilitySlotModel: typeof ProviderAvailabilitySlot,
    @InjectModel(ProviderSetting)
    private readonly providerSettingModel: typeof ProviderSetting,
    @InjectModel(RatingHistory)
    private readonly ratingHistoryModel: typeof RatingHistory,
    @InjectModel(Appointment)
    private readonly appointmentModel: typeof Appointment,
    @InjectModel(ProviderExceptionalDays)
    private readonly providerExceptionalDaysModel: typeof ProviderExceptionalDays,
    @InjectModel(ProviderRegistration)
    private readonly providerRegistrationModel: typeof ProviderRegistration,
    private readonly sequelize: Sequelize,
  ) { }

  async getProviders(queryParams: ListQueryParamsDto): Promise<any> {

    const searchText = queryParams.queryString || '';

    queryParams.pageNumber = queryParams.pageNumber || 0;
    queryParams.pageSize = queryParams.pageSize || 10;
    const offset = queryParams.pageNumber * queryParams.pageSize;
    const limit = queryParams.pageSize;
    const sortField = queryParams.sortField || 'id';
    const sortOrder = queryParams.sortOrder || 'desc';

    const where = {};
    const serviceWhere: any = {};
    const specialitiesWhere: any = {};
    if (queryParams.filter) {
      if (queryParams.filter.gender) {
        where['gender'] = queryParams.filter.gender;
      }

      if (typeof queryParams.filter.isAvailable == 'boolean') {
        where['isAvailable'] = queryParams.filter.isAvailable ? 1 : 0;
      }


      if (queryParams.filter.services) {
        serviceWhere['serviceId'] = { [Op.in]: queryParams.filter.services };
      }

      if (queryParams.filter.specialities) {
        specialitiesWhere['specalityId'] = { [Op.in]: queryParams.filter.specialities };
      }

    }


    let orderBy: any = [['id', 'desc']];
    if (sortField == 'id') {
      orderBy = [[sortField, sortOrder]];
    } else if (sortField == 'rating') {
      orderBy = [[sortField, 'DESC']];
    } else if (queryParams.sortField == 'name') {
      orderBy = [[Sequelize.literal('`user.firstName`'), sortOrder]]
    }

    return await this.providerModel.findAndCountAll({
      distinct: true,
      include: [
        {
          model: User,
          as: 'user',
          where: {
            [Op.or]: [
              Sequelize.where(Sequelize.fn('concat', Sequelize.col('firstName'), ' ', Sequelize.col('lastName')),
                {
                  [Op.like]: '%' + searchText + '%'
                })
              // ,
              // {
              //   firstName: { [Op.like]: '%' + searchText + '%' }
              // },
              // {
              //   lastName: { [Op.like]: '%' + searchText + '%' }
              // }
            ]
          },
        },
        {
          model: ProviderAddress,
          include: [Address]
        },
        ProviderLanguage,
        {
          model: ProviderServices,
          required: typeof serviceWhere.serviceId != 'undefined',
          where: serviceWhere
        },
        {
          model: ProviderSpecality,
          include: [Specalist],
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

  async getAppointments(queryParams: ListQueryParamsDto): Promise<any> {

    const searchText = queryParams.queryString || '';

    queryParams.pageNumber = queryParams.pageNumber || 0;
    queryParams.pageSize = queryParams.pageSize || 10;
    const offset = queryParams.pageNumber * queryParams.pageSize;
    const limit = queryParams.pageSize;
    const sortField = queryParams.sortField || 'id';
    const sortOrder = queryParams.sortOrder || 'desc';

    let providerId = '0';
    if (queryParams.filter && queryParams.filter.providerId) {
      providerId = queryParams.filter.providerId
    }
    console.log('providerId', providerId, queryParams);

    return await this.appointmentModel.findAndCountAll({
      include: [
        {
          model: Provider,
          include: [User]
        },
        {
          model: Patient,
          include: [User]
        },
        ProviderAvailabilitySlot
      ],
      where: { providerId: providerId },
      offset: offset,
      limit: limit,
      order: [[sortField, sortOrder]]
    });
  }

  async getProviderById(providerId: any): Promise<any> {
    return await this.providerModel.findOne({
      where: { id: providerId },
      include: [
        User,
        ProviderHistory,
        {
          model: ProviderAddress,
          include: [Address],
          required: false
        },
        ProviderAffilation,
        ProviderEducation,
        ProviderHospital,
        ProviderLanguage,
        ProviderReference,
        {
          model: ProviderServices,
          include: [{
            model: Service
          }]
        },
        {
          model: ProviderSpecality,
          include: [Specalist],
          required: false,
        },
        ProviderSetting
      ]
    });
  }


  async getProviderRatingById(userId: string): Promise<any> {
    return await this.ratingHistoryModel.findAndCountAll({
      where: { providerId: userId }
    });
  }


  async getAvailability(providerId: string): Promise<any> {
    return await this.providerAvailabilityModel.findAll({
      where: { providerId: providerId },
      include: [
        ProviderAvailabilitySlot,
      ]
    });
  }


  async getAvailabilityByDay(params): Promise<any> {
    return await this.providerAvailabilityModel.findAll({
      where: {
        providerId: params.providerId,
        value: params.day
      },
      include: [ProviderAvailabilitySlot]
    });
  }

  async saveAvailability(availabilityData: AppointmentAvailabilityDto): Promise<any> {
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
        })

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
    } catch (error) {

      if (transaction) await transaction.rollback();

      return null;
    }
  }


  async saveSettings(providerSettings: ProviderSettingsDto): Promise<any> {

    let transaction;

    try {
      transaction = await this.sequelize.transaction();

      for (const setting of providerSettings.settings) {

        const result = await this.providerSettingModel.findOne({
          where: {
            providerId: providerSettings.providerId,
            label: setting.label
          }
        })

        if (!result) {
          await this.providerSettingModel.create({
            providerId: providerSettings.providerId,
            label: setting.label,
            value: setting.value
          });
        } else {
          await this.providerSettingModel.update({
            value: setting.value
          }, {
            where: { providerId: providerSettings.providerId, label: setting.label }
          });
        }
      }


      await transaction.commit();

      return providerSettings;
    } catch (error) {

      if (transaction) await transaction.rollback();

      return null;
    }
  }

  async getProviderSettings(providerId: string): Promise<any> {
    return await this.providerSettingModel.findAll({
      where: { providerId: providerId }
    });
  }

  async getExceptionalDays(providerId: string): Promise<any> {
    return await this.providerExceptionalDaysModel.findAll({
      where: { providerId: providerId }
    });
  }

  async setExceptionalDays(data: any): Promise<any> {
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
    } catch (error) {
      return null;
    }
  }


  async getProvidersLeads(queryParams: ListQueryParamsDto): Promise<any> {

    const searchText = queryParams.queryString || '';

    queryParams.pageNumber = queryParams.pageNumber || 0;
    queryParams.pageSize = queryParams.pageSize || 10;
    const offset = queryParams.pageNumber * queryParams.pageSize;
    const limit = queryParams.pageSize;
    const sortField = queryParams.sortField || 'id';
    const sortOrder = queryParams.sortOrder || 'desc';

    const where = {};

    if (queryParams.filter) {
      if (queryParams.filter.firstName) {
        where['firstName'] = queryParams.filter.firstName;
      }

      if (queryParams.filter.lastName) {
        where['lastName'] = queryParams.filter.lastName;
      }

    }


    let orderBy: any = [['id', 'desc']];
    if (sortField == 'id') {
      orderBy = [[sortField, sortOrder]];
    } else if (queryParams.sortField == 'name') {
      orderBy = [[Sequelize.literal('`providerRegistrationModel.firstName`'), sortOrder]]
    }

    return await this.providerRegistrationModel.findAndCountAll({
      distinct: true,
      where: where,
      offset: offset,
      limit: limit,
      order: orderBy
    });
  }


  async getProviderLeadById(providerId: any): Promise<any> {
    return await this.providerRegistrationModel.findOne({
      where: { id: providerId }
    });
  }


  async getVerifiedProviders(): Promise<any> {
    return await this.providerModel.count();
  }



  async getleadProvidersByStatus(status): Promise<any> {
    return await this.providerRegistrationModel.count({ where: { verified: status } });
  }

}

