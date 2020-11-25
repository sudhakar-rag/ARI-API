import { EmailModule } from './../email/email.module';
import { PatientSubscription } from './models/patient-subscription.model';
import { ProviderModule } from './../doctor/provider.module';
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
import { User } from '../users/models/user.model';
import { CreatePatientService } from './services/create-patient.service';
import { PatientAddress } from './models/patient-address.model';
import { Address } from '../users/models/address.model';
import { Appointment } from '../shared/models/appointment.model';
import { AppointmentDetails } from '../shared/models/appointment-details.model';
import { Provider } from '../doctor/models/provider.model';
import { ProviderAvailabilitySlot } from '../doctor/models/provider-availability-slot.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      User,
      Address,
      Patient,
      PatientSymptom,
      PatientSpecalist,
      PatientSubscription,
      PatientProviderType,
      PatientMedicalProblem,
      PatientAddress,
      Appointment,
      AppointmentDetails,
      Provider,
      ProviderAvailabilitySlot
    ]),
    UsersModule,
    ProviderModule,
    EmailModule
  ],
  providers: [PatientService, CreatePatientService],
  controllers: [PatientsController],
  exports: [PatientService],
})
export class PatientsModule { }
