import { NotificationController } from './controllers/notification.controller';
import { NotificationService } from './services/notification.service';
import { Notification } from './../shared/models/notification.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Appointment } from '../shared/models/appointment.model';
import { UsersModule } from '../users/users.module';
import { FcmModule } from '../fcm/fcm.module';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Notification,
      Appointment
    ]),
    UsersModule,
    FcmModule
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule { }
