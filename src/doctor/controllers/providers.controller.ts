import { ProviderDto } from './../dto/provider.dto';
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
import { ResponseData } from './../../core/common/response-data';
import { CreateProviderService } from '../services/create-provider.service';
import { AppointmentAvailabilityDto, ProviderSettingsDto } from '../dto/appointment-availability.dto';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('provider')
@ApiBearerAuth()
@Controller('provider')
// @UseGuards(JwtAuthGuard)
export class ProvidersController {
  constructor(
    private providerService: ProviderService,
    private createProviderService: CreateProviderService
  ) { }



  @Get(':id')
  async getProviderById(@Param('id') userId: string): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.providerService.getProviderById(userId);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Post()
  async getProviders(@Body() queryParams): Promise<ResponseData> {
    const output = new ResponseData();
    try {
      output.data = await this.providerService.getProviders(queryParams);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Post('create')
  async create(@Body() providerData: ProviderDto): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createProviderService.createProvider(providerData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @ApiOperation({ summary: 'sets the appointment availability settings of a provider' })
  @ApiBody({ type: AppointmentAvailabilityDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: AppointmentAvailabilityDto,
  })
  @Post('set-availability')
  async setAvailability(@Body() availabilityData: AppointmentAvailabilityDto): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.providerService.saveAvailability(availabilityData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @ApiOperation({ summary: 'updates provider settings' })
  @ApiBody({ type: ProviderSettingsDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ProviderSettingsDto,
  })
  @Post('settings')
  async setSettings(@Body() settingsData: ProviderSettingsDto): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.providerService.saveSettings(settingsData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Put('basicInfo')
  async updateBasicInfo(@Body() providerData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createProviderService.updateBasicInfo(providerData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }



}
