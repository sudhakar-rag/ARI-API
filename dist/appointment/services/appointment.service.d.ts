import { NotificationService } from './../../notification/services/notification.service';
import { CreateAttachmentDto } from './../dto/create-attachment.dto';
import { Sequelize } from 'sequelize-typescript';
import { CreateAppointmentDto } from '../../appointment/dto/create-appointment.dto';
import { Appointment } from '@app/src/shared/models/appointment.model';
import { AppointmentDetails } from '@app/src/shared/models/appointment-details.model';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
import { ProviderAvailabilitySlot } from '@app/src/doctor/models/provider-availability-slot.model';
import { UsersService } from '@app/src/users/services/users.service';
import { ZoomService } from '@app/src/zoom/services/zoom.service';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { Attachments } from '@app/src/shared/models/attachments.model';
export declare class AppointmentService {
    private readonly appointmentModel;
    private readonly appointmentDetailsModel;
    private readonly attachmentsModel;
    private readonly providerAvailabilitySlotModel;
    private readonly sequelize;
    private usersService;
    private zoomService;
    private notificationService;
    constructor(appointmentModel: typeof Appointment, appointmentDetailsModel: typeof AppointmentDetails, attachmentsModel: typeof Attachments, providerAvailabilitySlotModel: typeof ProviderAvailabilitySlot, sequelize: Sequelize, usersService: UsersService, zoomService: ZoomService, notificationService: NotificationService);
    getAppointmentDeatils(appId: string): Promise<Appointment>;
    saveAppointment(appointmentData: CreateAppointmentDto): Promise<any>;
    addAttachments(attachmentData: CreateAttachmentDto): Promise<any>;
    getAttachments(queryParams: ListQueryParamsDto): Promise<any>;
    getAppointments(queryParams: ListQueryParamsDto): Promise<any>;
    updateAppointmentStatus(data: UpdateAppointmentDto): Promise<any>;
}
