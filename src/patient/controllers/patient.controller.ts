import { PatientService } from './../services/patient.service';
import {
  Controller,
  // Get,
  // UseGuards,
  // Post,
  // Req,
  // Body,
  // Put,
  // Delete,
  // Param,
} from '@nestjs/common';
// import { ResponseData } from '@app/src/core/common/response-data';
// import { PatientDto } from '../dto/patient.dto';

@Controller('patient')
// @UseGuards(JwtAuthGuard)
export class PatientsController {
  constructor(private patientsService: PatientService) { }

  // @Get('')
  // async getPatients() {
  //   let output = new ResponseData();

  //   try {
  //     output.data = await this.patientsService.getPatients();
  //   } catch (error) {
  //     console.log(error);
  //     output.status = false;
  //     output.message = typeof error == 'string' ? error : '';
  //   }

  //   return output;
  // }

  // @Post()
  // async saveRoles(@Body() patientData: PatientDto) {
  //   let output = new ResponseData();

  //   try {
  //     output.data = await this.patientsService.savePatient(patientData);
  //   } catch (error) {
  //     console.log(error);
  //     output.status = false;
  //     output.message = typeof error == 'string' ? error : '';
  //   }

  //   return output;
  // }

  // @Delete(':id')
  // async deletePatient(@Param() params) {
  //   let output = new ResponseData();

  //   try {
  //     output.data = await this.patientsService.deletePatient(params.id);
  //   } catch (error) {
  //     console.log(error);
  //     output.status = false;
  //     output.message = typeof error == 'string' ? error : '';
  //   }

  //   return output;
  // }
}
