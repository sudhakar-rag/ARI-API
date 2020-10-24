import { Module } from '@nestjs/common';
import { AppointmentController } from './controllers/appointment.controller';

@Module({
  controllers: [AppointmentController]
})
export class AppointmentModule {}
