import { Provider } from './../../doctor/models/provider.model';
import { User } from './../../users/models/user.model';
import { CreateNotificationDto } from './../dto/create-notification.dto';
import { Appointment } from '@app/src/shared/models/appointment.model';
import { Sequelize } from 'sequelize-typescript';
import { Notification } from './../../shared/models/notification.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Patient } from '@app/src/patient/models/patient.model';


@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification)
    private readonly notificationModel: typeof Notification,
    private readonly sequelize: Sequelize,
  ) { }

  async getNotifications(userId): Promise<any> {
    return await this.notificationModel.findAll({
      include: [
        {
          model: Appointment,
          include: [{
            model: Patient,
            include: [{
              model: User
            }]
          },
          {
            model: Provider,
            include: [{
              model: User
            }]
          }
        ]
        }
      ],
      where: { userId: userId, status: false }
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


   async updateNotifications(notificationData: any): Promise<any> {

    for(const notification of notificationData){

        const result = await this.notificationModel.findOne({
            where: {
              id: notification.id
            }
          })

          if (result) {
            await this.notificationModel.update({
              status: true
            }, {
              where: { id: notification.id, userId: notification.userId }
            });
          }
        }

        return notificationData;

    }




   }


