/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CreateAttachmentDto } from './../dto/create-attachment.dto';
import { ResponseData } from '@app/src/core/common/response-data';
import { CreateAppointmentDto, getAppointmentsCountDto } from '@app/src/appointment/dto/create-appointment.dto';
import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppointmentService } from '../services/appointment.service';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
import { JwtAuthGuard } from '@app/src/auth/guards/jwt-auth.guard';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { FcmService } from '@app/src/fcm/fcm.service';

@ApiTags('appointment')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('appointment')
export class AppointmentController {

    constructor(
        private appointmentService: AppointmentService,
        private fcmService: FcmService
    ) { }

    @ApiOperation({ summary: "Get appointment list by date" })
    @Get('byDate/:date')
    async getTodaysAppointmentList(@Param('date') date: string): Promise<ResponseData> {
        const output = new ResponseData();

        try {
            const appData = await this.appointmentService.getAppointmentsListByDate(date);

            if (!appData) {
                throw 'Invalid Input.';
            }

            output.data = appData;
            output.status = true;

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;
    }

    @ApiOperation({ summary: 'Get appointment details' })
    @Get(':id')
    async getAppointmentDetails(@Param('id') appointmentId: string): Promise<ResponseData> {
        const output = new ResponseData();

        try {
            const appData = await this.appointmentService.getAppointmentDeatils(appointmentId);

            if (!appData) {
                throw 'Invalid Input.';
            }

            output.data = appData;
            output.status = true;

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;
    }

    @ApiOperation({ summary: 'returns appointments list' })
    @ApiBody({ type: ListQueryParamsDto })
    @ApiCreatedResponse({
        description: 'provider list.',
        type: ResponseData,
    })
    @Post('list')
    async getAppointmentsList(@Body() queryParams: ListQueryParamsDto): Promise<ResponseData> {
        const output = new ResponseData();
        try {
            output.data = await this.appointmentService.getAppointments(queryParams);
        } catch (error) {
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;
    }

    @Post('between')
    async getAppointmentsCountBetween(@Body() data: getAppointmentsCountDto): Promise<ResponseData> {
        const output = new ResponseData();
        try {
            output.data = { count: await this.appointmentService.getAppointmentsCountBetween(data) };
        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;
    }


    @ApiOperation({ summary: 'create appointment' })
    @ApiBody({ type: CreateAppointmentDto })
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: CreateAppointmentDto,
    })
    @Post()
    async createAppointment(@Body() appointmentData: CreateAppointmentDto): Promise<ResponseData> {
        const output = new ResponseData();

        try {
            output.data = await this.appointmentService.saveAppointment(appointmentData);
            output.status = true;

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;

    }


    @ApiOperation({ summary: 'reschedule appointment' })
    @ApiBody({ type: CreateAppointmentDto })
    @ApiCreatedResponse({
        description: 'The record has been successfully rescheduled.',
        type: CreateAppointmentDto,
    })
    @Post('reschedule')
    async rescheduleAppointment(@Body() appointmentData: CreateAppointmentDto): Promise<ResponseData> {
        const output = new ResponseData();

        try {
            output.data = await this.appointmentService.rescheduleAppointment(appointmentData);
            output.status = true;

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;

    }

    @ApiOperation({ summary: 'update appointment' })
    @ApiBody({ type: UpdateAppointmentDto })
    @ApiCreatedResponse({
        description: 'The record has been successfully updated.',
        type: ResponseData,
    })
    @Post('update')
    async updateStatus(@Body() appointmentData: UpdateAppointmentDto): Promise<ResponseData> {
        const output = new ResponseData();

        try {
            output.data = await this.appointmentService.updateAppointmentStatus(appointmentData);
            output.status = true;

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;

    }

    @ApiOperation({ summary: 'add attachment' })
    @ApiBody({ type: CreateAttachmentDto })
    @ApiCreatedResponse({
        description: 'The file has been successfully uploaded.',
        type: ResponseData,
    })
    @Post('attachment')
    async addAttachment(@Body() attachmentData: CreateAttachmentDto): Promise<ResponseData> {
        const output = new ResponseData();

        try {
            output.data = await this.appointmentService.addAttachments(attachmentData);
            output.status = true;

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;

    }

    @ApiOperation({ summary: 'Get Attachments of user' })
    @Post('attachments/list')
    async getAttachments(@Body() queryParams: ListQueryParamsDto): Promise<ResponseData> {
        const output = new ResponseData();

        try {
            const appData = await this.appointmentService.getAttachments(queryParams);

            if (!appData) {
                throw 'Invalid Input.';
            }

            output.data = appData;
            output.status = true;

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;
    }


    @Delete('delete-file/:fileId')
    async deleteFile(@Param('fileId') fileId: string): Promise<ResponseData> {
        const output = new ResponseData();

        try {
            output.data = await this.appointmentService.deleteFile(fileId);
        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;
    }


    @Get('appointmentsCount/:status')
    async getAppointmentsCount(@Param('status') status: string) {
        const result = await this.appointmentService.getAppointmentCountByStatus(status);
        return {
            data: result
        };
    }


    @Get('refundRequest/:appointmentId')
    async refundRequest(@Param('appointmentId') appointmentId): Promise<any> {
        const data = await this.appointmentService.refundRequest(appointmentId);
        return {
            data: data
        };
    }


    @Get('refund/:appointmentId')
    async refundPayment(@Param('appointmentId') appointmentId): Promise<any> {
        const data = await this.appointmentService.refundPayment(appointmentId);
        return {
            data: data
        };
    }

}
