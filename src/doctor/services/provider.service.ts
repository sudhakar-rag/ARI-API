import { ProviderEducation } from './../models/provider-education.model';
import { ProviderEducationDto } from './../dto/provider.dto';
import { ProviderBasicDto } from '../dto/provider.dto';
import { Provider } from '../models/provider.model';

import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProviderService {
  constructor(
    @InjectModel(Provider)
    private readonly providerBasicModel: typeof Provider,
    @InjectModel(ProviderEducation)
    private readonly providerEducationModel: typeof ProviderEducation,
  ) {}

  async getProviders(): Promise<any> {
    return await this.providerBasicModel.findAll();
  }

  async saveProviderBasic(providerBasicData: ProviderBasicDto): Promise<any> {
    let data = {
      userId: providerBasicData.userId,
      businessName: providerBasicData.businessName,
      isPublic: providerBasicData.isPublic,
      specialityId: providerBasicData.specialityId,
      areaOfInterest: providerBasicData.areaOfInterest,
      serviceType: providerBasicData.serviceType,
      religion: providerBasicData.religion,
      specialBackground: providerBasicData.specialBackground,
      limitation: providerBasicData.limitation,
      addiction: providerBasicData.addiction,
      crime: providerBasicData.crime,
      malpractice: providerBasicData.malpractice,
      timezone: providerBasicData.timezone,
      isVerified: providerBasicData.isVerified,
      zoomId: providerBasicData.zoomId,
      zoomUrl: providerBasicData.zoomUrl,
      rating: providerBasicData.rating,
      zoomStatus: providerBasicData.zoomStatus,
      userStatus: providerBasicData.userStatus,
      isAvailable: providerBasicData.isAvailable,
    };

    let providerBasic: Provider;
    if (providerBasicData.id) {
      await this.providerBasicModel.update(data, {
        where: { id: providerBasicData.id },
      });
      providerBasic = await this.providerBasicModel.findOne({
        where: { id: providerBasicData.id },
      });
    } else {
      providerBasic = await this.providerBasicModel.create(data);
    }

    return providerBasic;
  }

  async saveProviderEducation(
    providerEducationData: ProviderEducationDto,
    action = 'C',
    transaction,
  ): Promise<any> {
    let providerEducation = {
      userId: providerEducationData.userId,
      school: providerEducationData.school,
      degree: providerEducationData.degree,
      fromYear: providerEducationData.fromYear,
      toYear: providerEducationData.toYear,
    };

    if (!providerEducationData.id) {
      let education = await this.providerEducationModel.create(
        providerEducation,
        {
          transaction,
        },
      );
      providerEducationData.id = education.id;
    } else {
      await this.providerEducationModel.update(providerEducationData, {
        where: { id: providerEducationData.id },
        transaction,
      });
    }

    await this.providerEducationModel.destroy({
      where: {
        id: providerEducationData.id,
        userId: providerEducationData.userId,
      },
      transaction,
    });

    await this.providerEducationModel.create(
      {
        id: providerEducationData.id,
        userId: providerEducationData.userId,
      },
      { transaction },
    );
  }
}
