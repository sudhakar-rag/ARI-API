import { PatientService } from './../services/patient.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResponseData } from '@app/src/core/common/response-data';
import { PatientDto } from '../dto/patient.dto';
// import { UsersService } from '@app/src/users/services/users.service';
import { CreateUserDto } from '@app/src/users/dto/create-user.dto';

@Controller('patient')
// @UseGuards(JwtAuthGuard)
export class PatientsController {
  constructor(
    private patientsService: PatientService,
    // private usersService: UsersService
  ) { }


  @Get('getPatients')
  async getPatients() {
    let output = new ResponseData();

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
