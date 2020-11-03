import { CreateAttachmentDto } from './../dto/create-attachment.dto';
import { ResponseData } from '@app/src/core/common/response-data';
import { CreateAppointmentDto } from '@app/src/appointment/dto/create-appointment.dto';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppointmentService } from '../services/appointment.service';
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
import { JwtAuthGuard } from '@app/src/auth/guards/jwt-auth.guard';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { any } from 'sequelize/types/lib/operators';

@ApiTags('appointment')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('appointment')
export class AppointmentController {

    constructor(
        private appointmentService: AppointmentService,
    ) { }

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
    async getAppointments(@Body() queryParams: ListQueryParamsDto): Promise<ResponseData> {
        const output = new ResponseData();
        try {
            output.data = await this.appointmentService.getAppointments(queryParams);
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
    @Get('attachments/:id')
    async getAttachments(@Param('id') userId: number): Promise<ResponseData> {
        const output = new ResponseData();

        try {
            const appData = await this.appointmentService.getAttachmentsById(userId);

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

}
