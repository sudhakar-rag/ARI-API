import { Country } from './models/country.model';
import { State } from './models/state.model';
import { Notification } from './models/notification.model';
import { Attachments } from './models/attachments.model';
import { UsersModule } from './../users/users.module';
import { Service } from './models/services.model';
import { Language } from './../doctor/models/language.model';
import { Address } from './../users/models/address.model';
import { SharedController } from './controllers/shared.controller';
import { SharedService } from './services/shared.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MedicalProblems } from './models/medical-problems.model';
import { ProviderType } from './models/provider-type.model';
import { Specalist } from './models/specalist.model';
import { Subscription } from './models/subscription.model';
import { Symptom } from './models/symptom.model';
import { Payment } from './models/payment.model';
import { Appointment } from './models/appointment.model';
import { AppointmentPayment } from './models/appointment-payment.model';
import { AppointmentDetails } from './models/appointment-details.model';
import { CallNotification } from './models/call-notifications.model';

@Module({
    imports: [
        SequelizeModule.forFeature([
            MedicalProblems,
            ProviderType,
            Specalist,
            Symptom,
            Subscription,
            Address,
            State,
            Country,
            Language,
            Service,
            Payment,
            Appointment,
            Attachments,
            AppointmentPayment,
            AppointmentDetails,
            Notification,
            CallNotification
        ]),
        UsersModule
    ],
    providers: [SharedService],
    controllers: [SharedController],
    exports: [SharedService],
})
export class SharedModule { }
