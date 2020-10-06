import { PatientService } from './../services/patient.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResponseData } from '@app/src/core/common/response-data';
import { PatientDto } from '../dto/patient.dto';

@Controller('patient')
// @UseGuards(JwtAuthGuard)
export class PatientsController {
  constructor(private patientsService: PatientService) { }

  @Get('')
  async list() {
    return await this.patientsService.getPatients();
  }

  @Post('createPatient')
  async createPatient(@Body() patientInfo: PatientDto): Promise<ResponseData> {
    const output = new ResponseData();

    try {

      output.data = await this.patientsService.createPatient(patientInfo);
      output.status = true;

    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;

  }
}
