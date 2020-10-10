import { SharedService } from './../services/shared.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResponseData } from '@app/src/core/common/response-data';
// import { UsersService } from '@app/src/users/services/users.service';

@Controller('shared')
// @UseGuards(JwtAuthGuard)
export class SharedController {
  constructor(
    private sharedService: SharedService,
    // private usersService: UsersService
  ) { }


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

}
