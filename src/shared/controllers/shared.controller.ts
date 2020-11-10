import { SharedService } from './../services/shared.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ResponseData } from '@app/src/core/common/response-data';
import { UsersService } from '@app/src/users/services/users.service';

@Controller('shared')
// @UseGuards(JwtAuthGuard)
export class SharedController {
  constructor(
    private sharedService: SharedService,
    private usersService: UsersService
  ) { }


  @Get('payments/:id')
  async getPayments(@Param('id') userId: number): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.sharedService.getPaymentsById(userId);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get('getMedicalProblems')
  async getMedicalProblems() {
    let output = new ResponseData();

    try {
      output.data = await this.sharedService.getMedicalProblems();
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get('getSymptoms')
  async getSymptoms() {
    let output = new ResponseData();

    try {
      output.data = await this.sharedService.getSymptoms();
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get('getSpecialists')
  async getSpecialists() {
    let output = new ResponseData();

    try {
      output.data = await this.sharedService.getSpecialists();
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get('languages')
  async getLanaguages() {
    let output = new ResponseData();

    try {
      output.data = await this.sharedService.getLanguages();
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get('services')
  async getServices() {
    let output = new ResponseData();

    try {
      output.data = await this.sharedService.getServices();
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get('providerTypes')
  async getProviderTypes() {
    let output = new ResponseData();

    try {
      output.data = await this.sharedService.getProviderTypes();
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get('states')
  async getStates() {
    let output = new ResponseData();

    try {
      output.data = await this.sharedService.getStates();
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get('countries')
  async getCountries() {
    let output = new ResponseData();

    try {
      output.data = await this.sharedService.getCountries();
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get('address/:id')
  async getAddress(@Param('id') addressId: string) {
    let output = new ResponseData();

    try {
      output.data = await this.sharedService.getAddressById(addressId);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Post('appointmentDetails')
  async updateAppointmentDetails(@Body() appointmentData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.sharedService.updateAppointmentSession(appointmentData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }


  @Get('appointmentDetails/:id')
  async getAppointmentDetails(@Param('id') appointmentId: number) {
    let output = new ResponseData();

    try {
      output.data = await this.sharedService.getAppointmenteDetailsById(appointmentId);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Put('picture')
  async updatePicture(@Body() userData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.usersService.updateProfilePicture(userData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

}
