import { DoctorsService } from './services/doctors.service';
import { Doctor } from './models/doctor.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DoctorsController } from './controllers/doctors.controller';

@Module({
  imports: [SequelizeModule.forFeature([Doctor])],
  providers: [DoctorsService],
  controllers: [DoctorsController],
  exports: [DoctorsService],
})
export class DoctorsModule {}
