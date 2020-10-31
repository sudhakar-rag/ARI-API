import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppointmentDetails } from '../shared/models/appointment-details.model';
import { Appointment } from '../shared/models/appointment.model';
import { UsersModule } from '../users/users.module';
import { AppointmentController } from './controllers/appointment.controller';
import { AppointmentService } from './services/appointment.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Appointment,
      AppointmentDetails,
    ]),
    UsersModule,
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule { }
