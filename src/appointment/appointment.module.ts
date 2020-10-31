import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProviderAvailabilitySlot } from '../doctor/models/provider-availability-slot.model';
import { AppointmentDetails } from '../shared/models/appointment-details.model';
import { Appointment } from '../shared/models/appointment.model';
import { UsersModule } from '../users/users.module';
import { ZoomModule } from '../zoom/zoom.module';
import { AppointmentController } from './controllers/appointment.controller';
import { AppointmentService } from './services/appointment.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Appointment,
      AppointmentDetails,
      ProviderAvailabilitySlot
    ]),
    UsersModule,
    ZoomModule
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule { }
