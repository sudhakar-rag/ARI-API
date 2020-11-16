import { CreateNotificationDto } from './../dto/create-notification.dto';
import { Sequelize } from 'sequelize-typescript';
import { Notification } from './../../shared/models/notification.model';
export declare class NotificationService {
    private readonly notificationModel;
    private readonly sequelize;
    constructor(notificationModel: typeof Notification, sequelize: Sequelize);
    getNotifications(userId: any): Promise<any>;
    saveNotifications(notificationData: CreateNotificationDto, transaction: any): Promise<any>;
    updateNotifications(notificationData: any): Promise<any>;
}
