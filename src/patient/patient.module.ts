import { PatientService } from './services/patient.service';
import { PatientsController } from './controllers/patient.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './models/patient.model';
import { UsersModule } from '../users/users.module';
import { PatientSymptom } from './models/patient-symptom.model';
import { PatientSpecalist } from './models/patient-specalist.model';
import { PatientProviderType } from './models/patient-provider-type.model';
import { PatientMedicalProblem } from './models/patient-medical-problems.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Patient,
      PatientSymptom,
      PatientSpecalist,
      PatientProviderType,
      PatientMedicalProblem
    ]),
    UsersModule,
  ],
  providers: [PatientService],
  controllers: [PatientsController],
  exports: [PatientService],
})
export class PatientsModule { }
