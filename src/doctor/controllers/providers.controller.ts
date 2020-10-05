import { ProviderService } from './../services/provider.service';
import {
  Controller,
  Get,
  UseGuards,
  Post,
  Req,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ResponseData } from '@app/src/core/common/response-data';
import { DoctorDto } from '../dto/doctor.dto';

@Controller('role')
// @UseGuards(JwtAuthGuard)
export class ProvidersController {
  constructor(private providerService: ProviderService) {}

  @Get('')
  async getDoctors() {
    let output = new ResponseData();

    try {
      output.data = await this.providerService.getProviders();
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Post()
  async saveDoctors(@Body() doctorData: DoctorDto) {
    let output = new ResponseData();

    try {
      output.data = await this.providerService.saveProvider(doctorData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Delete(':id')
  async deleteDoctor(@Param() params) {
    let output = new ResponseData();

    try {
      output.data = await this.providerService.deleteProvider(params.id);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }
}
