"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const provider_model_1 = require("./../../doctor/models/provider.model");
const user_model_1 = require("./../../users/models/user.model");
const appointment_model_1 = require("../../shared/models/appointment.model");
const sequelize_typescript_1 = require("sequelize-typescript");
const notification_model_1 = require("./../../shared/models/notification.model");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const patient_model_1 = require("../../patient/models/patient.model");
let NotificationService = class NotificationService {
    constructor(notificationModel, sequelize) {
        this.notificationModel = notificationModel;
        this.sequelize = sequelize;
    }
    async getNotifications(userId) {
        const count = await this.notificationModel.count({
            include: [
                {
                    model: appointment_model_1.Appointment,
                    include: [{
                            model: patient_model_1.Patient,
                            include: [{
                                    model: user_model_1.User
                                }]
                        },
                        {
                            model: provider_model_1.Provider,
                            include: [{
                                    model: user_model_1.User
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
                    model: appointment_model_1.Appointment,
                    include: [{
                            model: patient_model_1.Patient,
                            include: [{
                                    model: user_model_1.User
                                }]
                        },
                        {
                            model: provider_model_1.Provider,
                            include: [{
                                    model: user_model_1.User
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
    async saveNotifications(notificationData, transaction) {
        const result = await this.notificationModel.create({
            appointmentId: notificationData.appointmentId,
            userId: notificationData.userId,
            status: notificationData.status,
        }, { transaction: transaction });
        return result;
    }
    async updateNotifications(notificationData) {
        for (const notification of notificationData) {
            const result = await this.notificationModel.findOne({
                where: {
                    id: notification.id
                }
            });
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
};
NotificationService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(notification_model_1.Notification)),
    __metadata("design:paramtypes", [Object, sequelize_typescript_1.Sequelize])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map