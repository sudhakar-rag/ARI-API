import { DoctorDto } from './../dto/doctor.dto';
import { Doctor } from './../models/doctor.model';

import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectModel(Doctor)
    private readonly doctorModel: typeof Doctor,
  ) {}

  async getDoctors(): Promise<any> {
    return await this.doctorModel.findAll();
  }

  async saveDoctor(doctorData: DoctorDto): Promise<any> {
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

    let doctor: Doctor;
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

  async deleteDoctor(id: number): Promise<any> {
    let result = await this.doctorModel.destroy({ where: { id: id } });
    return result;
  }
}
