import { ResponseData } from '@app/src/core/common/response-data';
import { CreateAppointmentDto } from '@app/src/patient/dto/create-appointment.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

@Controller('appointment')
export class AppointmentController {

    @Get()
    test(): any {
        return { 1: 1 };
    }

    @ApiOperation({ summary: 'create appointment' })
    @ApiBody({ type: CreateAppointmentDto })
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: CreateAppointmentDto,
    })
    @Post('appointment')
    async createAppointment(@Body() appointmentData: CreateAppointmentDto): Promise<ResponseData> {
        const output = new ResponseData();

        try {
            output.data = {};//await this.patientsService.saveAppointment(appointmentData);
            output.status = true;

        } catch (error) {
            console.log(error);
            output.status = false;
            output.message = typeof error == 'string' ? error : '';
        }

        return output;

    }

}
