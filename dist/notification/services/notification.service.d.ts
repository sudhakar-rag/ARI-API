import { CreateNotificationDto } from './../dto/create-notification.dto';
import { Sequelize } from 'sequelize-typescript';
import { Notification } from './../../shared/models/notification.model';
import { UsersService } from '@app/src/users/services/users.service';
export declare class NotificationService {
    private readonly notificationModel;
    private readonly sequelize;
    private usersService;
    constructor(notificationModel: typeof Notification, sequelize: Sequelize, usersService: UsersService);
    getNotifications(userId: any): Promise<any>;
    getNotificationsByType(params: any): Promise<any>;
    saveNotifications(notificationData: CreateNotificationDto, transaction: any): Promise<any>;
    updateNotifications(notificationData: any): Promise<any>;
}
