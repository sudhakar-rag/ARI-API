import { CreateNotificationDto } from './../dto/create-notification.dto';
import { Appointment } from '@app/src/shared/models/appointment.model';
import { Sequelize } from 'sequelize-typescript';
import { Notification } from './../../shared/models/notification.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';


@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification)
    private readonly notificationModel: typeof Notification,
    private readonly sequelize: Sequelize,
  ) { }

  async getNotifications(): Promise<any> {
    return await this.notificationModel.findAll({
      include: [
        Appointment
      ]
    });
  }

  async saveNotifications(notificationData: CreateNotificationDto, transaction): Promise<any> {

    const result = 
        await this.notificationModel.create({
            appointmentId: notificationData.appointmentId,
            userId: notificationData.userId,
            status: notificationData.status,
        }, { transaction: transaction });
     return result;   

   }


   async updateNotifications(notificationData: CreateNotificationDto[]): Promise<any> {

    for(const notification of notificationData){

        const result = await this.notificationModel.findOne({
            where: {
              id: notification.notificationId
            }
          })

          if (result) {
            await this.notificationModel.update({
              status: notification.status
            }, {
              where: { id: notification.notificationId, userId: notification.userId }
            });
          }
        }

        return notificationData;

    }




   }


