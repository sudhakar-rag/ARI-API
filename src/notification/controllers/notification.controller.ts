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

@ApiTags('notification')
@ApiBearerAuth()
@Controller('notification')
// @UseGuards(JwtAuthGuard)
export class NotificationController {
  constructor( private notificationService: NotificationService,
  ) { 

  }


  @Get()
  async getLanaguages() {
    let output = new ResponseData();

    try {
      output.data = await this.notificationService.getNotifications();
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Post()
  async saveNotification(@Body() notificationData: CreateNotificationDto): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.notificationService.saveNotifications(notificationData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Put()
  async updateNotification(@Body() notificationData: CreateNotificationDto[]): Promise<ResponseData> {
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
