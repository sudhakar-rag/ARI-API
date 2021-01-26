import { CreateNotificationDto } from './../dto/create-notification.dto';
import { NotificationService } from './../services/notification.service';
import { ResponseData } from './../../core/common/response-data';
import { FcmService } from './../../fcm/fcm.service';
export declare class NotificationController {
    private notificationService;
    private fcmService;
    constructor(notificationService: NotificationService, fcmService: FcmService);
    getNotifications(userId: number): Promise<ResponseData>;
    saveNotification(notificationData: CreateNotificationDto, transaction?: string): Promise<ResponseData>;
    getOnDemandNotifications(params: any): Promise<ResponseData>;
    updateNotification(notificationData: any): Promise<ResponseData>;
}
