import { DoctorDto } from '../dto/doctor.dto';
import { Provider } from '../models/provider.model';

import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProviderService {
  constructor(
    @InjectModel(Provider)
    private readonly doctorModel: typeof Provider,
  ) {}

  async getProviders(): Promise<any> {
    return await this.doctorModel.findAll();
  }

  async saveProvider(doctorData: DoctorDto): Promise<any> {
    let data = {
      userId: doctorData.userId,
      businessName: doctorData.businessName,
      isPublic: doctorData.isPublic,
      specialityId: doctorData.specialityId,
      areaOfInterest: doctorData.areaOfInterest,
      serviceType: doctorData.serviceType,
      religion: doctorData.religion,
      specialBackground: doctorData.specialBackground,
      limitation: doctorData.limitation,
      addiction: doctorData.addiction,
      crime: doctorData.crime,
      malpractice: doctorData.malpractice,
      timezone: doctorData.timezone,
      isVerified: doctorData.isVerified,
      zoomId: doctorData.zoomId,
      zoomUrl: doctorData.zoomUrl,
      rating: doctorData.rating,
      zoomStatus: doctorData.zoomStatus,
      userStatus: doctorData.userStatus,
      isAvailable: doctorData.isAvailable,
    };

    let doctor: Provider;
    if (doctorData.id) {
      await this.doctorModel.update(data, { where: { id: doctorData.id } });
      doctor = await this.doctorModel.findOne({
        where: { id: doctorData.id },
      });
    } else {
      doctor = await this.doctorModel.create(data);
    }

    return doctor;
  }

  async deleteProvider(id: number): Promise<any> {
    let result = await this.doctorModel.destroy({ where: { id: id } });
    return result;
  }
}
