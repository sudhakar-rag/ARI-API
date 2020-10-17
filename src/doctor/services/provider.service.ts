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
    private readonly sequelize: Sequelize,
  ) { }

  async getProviders(queryParams: any): Promise<any> {

    return await this.providerModel.findAndCountAll({
      include: [
        User,
        ProviderAddress,
        ProviderLanguage,
        ProviderServices
      ]
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

