import { CreateAttachmentDto } from './../dto/create-attachment.dto';
import { ResponseData } from '@app/src/core/common/response-data';
import { CreateAppointmentDto } from '@app/src/appointment/dto/create-appointment.dto';
import { AppointmentService } from '../services/appointment.service';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { FcmService } from '@app/src/fcm/fcm.service';
export declare class AppointmentController {
    private appointmentService;
    private fcmService;
    constructor(appointmentService: AppointmentService, fcmService: FcmService);
    getTodaysAppointmentList(date: string): Promise<ResponseData>;
    getAppointmentDetails(appointmentId: string): Promise<ResponseData>;
    getAppointments(queryParams: ListQueryParamsDto): Promise<ResponseData>;
    getAppointmentsByDate(data: any): Promise<ResponseData>;
    createAppointment(appointmentData: CreateAppointmentDto): Promise<ResponseData>;
    rescheduleAppointment(appointmentData: CreateAppointmentDto): Promise<ResponseData>;
    updateStatus(appointmentData: UpdateAppointmentDto): Promise<ResponseData>;
    addAttachment(attachmentData: CreateAttachmentDto): Promise<ResponseData>;
    getAttachments(queryParams: ListQueryParamsDto): Promise<ResponseData>;
    deleteFile(fileId: string): Promise<ResponseData>;
    getAppointmentsCount(status: string): Promise<{
        data: any;
    }>;
}
