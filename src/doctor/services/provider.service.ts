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

    return await this.providerModel.findAndCountAll({
      include: [
        {
          model: User,
          where: {
            [Op.or]: [
              {
                firstName: { [Op.like]: '%' + searchText + '%' }
              },
              {
                lastName: { [Op.like]: '%' + searchText + '%' }
              }
            ]
          },
        },
        ProviderAddress,
        ProviderLanguage,
        ProviderServices,
      ],
      offset: offset,
      limit: limit,
      order: [[sortField, sortOrder]]
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

  async getProviderById(userId: string): Promise<any> {
    return await this.providerModel.findOne({
      where: { userId: userId },
      include: [
        User,
        ProviderHistory,
        ProviderAddress,
        ProviderAffilation,
        ProviderEducation,
        ProviderHospital,
        ProviderLanguage,
        ProviderReference,
        ProviderServices
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
            label: setting.label,
            value: setting.value
          }, {
            where: { providerId: providerSettings.providerId }
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

}

