/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { JwtAuthGuard } from './../../auth/guards/jwt-auth.guard';
import { CreateNotificationDto } from './../dto/create-notification.dto';
import { NotificationService } from './../services/notification.service';
import {
  Controller,
  Get,
  UseGuards,
  Post,
  Req,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ResponseData } from './../../core/common/response-data';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
import { FcmService } from './../../fcm/fcm.service';

@ApiTags('notification')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('notification')
export class NotificationController {
  constructor(
    private notificationService: NotificationService,
    private fcmService: FcmService
  ) {

  }


  @Get(':id')
  async getNotifications(@Param('id') userId: number) {
    const output = new ResponseData();

    try {
      output.data = await this.notificationService.getNotifications(userId);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }





  @Post()
  async saveNotification(@Body() notificationData: CreateNotificationDto, transaction = ''): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.notificationService.saveNotifications(notificationData, transaction);

      await this.fcmService.sendMessage({
        title: 'New Message from ARI',
        body: notificationData.message,
        userId: notificationData.userId,
        appointmentId: notificationData.appointmentId,
        url: 'providers/appointments/view/' + notificationData.appointmentId
      });

    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Post('byType')
  async getOnDemandNotifications(@Body() params: any) {
    const output = new ResponseData();

    try {
      output.data = await this.notificationService.getNotificationsByType(params);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Put('reset')
  async updateNotification(@Body() notificationData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.notificationService.updateNotifications(notificationData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }


}
