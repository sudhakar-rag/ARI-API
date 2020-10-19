import { PatientBasicDto } from './../dto/patient-basic.dto';
import { PatientService } from './../services/patient.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ResponseData } from '@app/src/core/common/response-data';
import { PatientDto } from '../dto/patient.dto';
import { CreatePatientService } from '../services/create-patient.service';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('patient')
@ApiBearerAuth()
@Controller('patient')
// @UseGuards(JwtAuthGuard)
export class PatientsController {
  constructor(
    private patientsService: PatientService,
    private createPatientService: CreatePatientService
  ) { }

  @Post()
  async getPatients(@Body() queryParams): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.patientsService.getPatients(queryParams);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get(':id')
  async getPatientInfo(@Param('id') userId: string): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.patientsService.getPatientById(userId);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }


  @Post('createPatient')
  async createPatient(@Body() patientInfo: PatientDto): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createPatientService.createPatient(patientInfo);
      output.status = true;

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
  @Post('appointment')
  async createAppointment(@Body() appointmentData: CreateAppointmentDto): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.patientsService.saveAppointment(appointmentData);
      output.status = true;

    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;

  }

  @Put('basicInfo')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async updateBasicInfo(@Body() basicInfo: PatientBasicDto): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createPatientService.updateBasicInfo(basicInfo);
      output.status = true;

    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;

  }

  @Put('history')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async updateHistory(@Body() historyData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createPatientService.updateHistory(historyData);
      output.status = true;

    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;

  }

  @Put('health')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async updateHealth(@Body() healthData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createPatientService.updateHealth(healthData);
      output.status = true;

    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;

  }

  @Put('symptoms')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async updateSymptoms(@Body() symptData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createPatientService.updateSymptoms(symptData);
      output.status = true;

    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;

  }

  @Put('medProblems')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async updateMedProblems(@Body() medProbData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createPatientService.updateMedProblems(medProbData);
      output.status = true;

    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;

  }

  @Put('provider')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async updateProvider(@Body() proData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createPatientService.updateProvider(proData);
      output.status = true;

    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;

  }

}
