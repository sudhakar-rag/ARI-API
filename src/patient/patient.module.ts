import { PatientService } from './services/patient.service';
import { PatientsController } from './controllers/patient.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './models/patient.model';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Patient
    ]),
    UsersModule,
  ],
  providers: [PatientService],
  controllers: [PatientsController],
  exports: [PatientService],
})
export class PatientsModule { }
