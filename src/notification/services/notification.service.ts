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
    const count = await this.notificationModel.count({
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
    const result = await this.notificationModel.findAll({
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
      where: { userId: userId },
      limit: 6,
      order: [['id', 'desc']]
    });
    return {
      count: count,
      data: result,
    };

  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async saveNotifications(notificationData: CreateNotificationDto, transaction: any): Promise<any> {

    let result: any;
    if (transaction) {
      result =
        await this.notificationModel.create({
          appointmentId: notificationData.appointmentId,
          userId: notificationData.userId,
          status: notificationData.status,
        }, { transaction: transaction });
    } else {
      result =
        await this.notificationModel.create({
          appointmentId: notificationData.appointmentId,
          userId: notificationData.userId,
          status: notificationData.status,
        });
    }


    return result;

  }


  async updateNotifications(notificationData: any): Promise<any> {

    for (const notification of notificationData) {

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


