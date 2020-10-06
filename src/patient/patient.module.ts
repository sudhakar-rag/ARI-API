import { MedicalProblems } from './models/medical-problems.model';
import { PatientMedicalProblem } from './models/patient-medical-problems.model';
import { PatientService } from './services/patient.service';
import { PatientsController } from './controllers/patient.controller';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './models/patient.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Patient,
      PatientMedicalProblem,
      MedicalProblems,
    ]),
  ],
  providers: [PatientService],
  controllers: [PatientsController],
  exports: [PatientService],
})
export class PatientsModule {}
