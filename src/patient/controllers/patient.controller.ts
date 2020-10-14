import { PatientService } from './../services/patient.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResponseData } from '@app/src/core/common/response-data';
import { PatientDto } from '../dto/patient.dto';
import { CreatePatientService } from '../services/create-patient.service';

@Controller('patient')
// @UseGuards(JwtAuthGuard)
export class PatientsController {
  constructor(
    private patientsService: PatientService,
    private createPatientService: CreatePatientService
  ) { }


  @Get('getPatients')
  async getPatients(): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.patientsService.getPatients();
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

  @Post('basicInfo')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async saveBasicInfo(@Body() basicInfo: any): Promise<ResponseData> {
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
}
