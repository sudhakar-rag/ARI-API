import { PatientService } from './../services/patient.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Get('')
  async list() {
    return await this.patientsService.getPatients();
  }

  @Post('createPatient')
  async createPatient(@Body() patientInfo: PatientDto): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      let userData: CreateUserDto = {
        id: patientInfo.userId || null,
        userName: patientInfo.firstName,
        password: '',
        firstName: patientInfo.firstName,
        lastName: patientInfo.lastName,
        email: '',
        phone: '',
        picture: patientInfo.picture,
        status: 1,
      }
      // let user = await this.usersService.create(userData);
      // if (!patientInfo.userId) {
      //   patientInfo.userId = user.id;
      // }
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
