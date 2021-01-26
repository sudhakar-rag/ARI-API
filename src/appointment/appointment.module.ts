import { ProviderModule } from './../doctor/provider.module';
import { EmailModule } from './../email/email.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProviderAvailabilitySlot } from '../doctor/models/provider-availability-slot.model';
import { NotificationModule } from '../notification/notification.module';
import { AppointmentDetails } from '../shared/models/appointment-details.model';
import { Appointment } from '../shared/models/appointment.model';
import { Attachments } from '../shared/models/attachments.model';
import { UsersModule } from '../users/users.module';
import { ZoomModule } from '../zoom/zoom.module';
import { AppointmentController } from './controllers/appointment.controller';
import { AppointmentService } from './services/appointment.service';
import { FcmModule } from '../fcm/fcm.module';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Appointment,
      AppointmentDetails,
      ProviderAvailabilitySlot,
      Attachments
    ]),
    UsersModule,
    ZoomModule,
    NotificationModule,
    FcmModule,
    EmailModule,
    ProviderModule
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule { }
