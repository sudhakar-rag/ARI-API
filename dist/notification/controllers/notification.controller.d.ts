import { CreateNotificationDto } from './../dto/create-notification.dto';
import { NotificationService } from './../services/notification.service';
import { ResponseData } from './../../core/common/response-data';
export declare class NotificationController {
    private notificationService;
    constructor(notificationService: NotificationService);
    getNotifications(userId: number): Promise<ResponseData>;
    saveNotification(notificationData: CreateNotificationDto, transaction?: string): Promise<ResponseData>;
    getOnDemandNotifications(params: any): Promise<ResponseData>;
    updateNotification(notificationData: any): Promise<ResponseData>;
}
