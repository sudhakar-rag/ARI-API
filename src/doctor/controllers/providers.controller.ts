/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ProviderDto, ProviderRegistrationDto } from './../dto/provider.dto';
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
import { ListQueryParamsDto } from '@app/src/core/common/list-query-params.dto';
import { ProviderRegistration } from '../models/provider-registratioin.model';
import { InjectModel } from '@nestjs/sequelize';

@ApiTags('provider')
@ApiBearerAuth()
@Controller('provider')
// @UseGuards(JwtAuthGuard)
export class ProvidersController {
  constructor(
    private providerService: ProviderService,
    private createProviderService: CreateProviderService,
    @InjectModel(ProviderRegistration)
    private readonly providerRegistrationModel: typeof ProviderRegistration,
  ) { }


  @ApiOperation({ summary: 'list provider settings' })
  @ApiBody({})
  @ApiCreatedResponse({
    type: ResponseData,
  })
  @Get('settings/:providerId')
  async getSettings(@Param('providerId') providerId: string): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.providerService.getProviderSettings(providerId);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }


  @Get('exceptional-days/:providerId')
  async getExceptionalDays(@Param('providerId') providerId: string): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.providerService.getExceptionalDays(providerId);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

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

  @Get('rating/:id')
  async getProviderRatingById(@Param('id') userId: string): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.providerService.getProviderRatingById(userId);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @ApiOperation({ summary: 'returns providers list' })
  @ApiBody({ type: ListQueryParamsDto })
  @ApiCreatedResponse({
    description: 'provider list.',
    type: ResponseData,
  })
  @Post()
  async getProviders(@Body() queryParams: ListQueryParamsDto): Promise<ResponseData> {
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

  @ApiOperation({ summary: 'returns appointments list' })
  @ApiBody({ type: ListQueryParamsDto })
  @ApiCreatedResponse({
    description: 'provider list.',
    type: ResponseData,
  })
  @Post('appointment-list')
  async getAppointments(@Body() queryParams: ListQueryParamsDto): Promise<ResponseData> {
    const output = new ResponseData();
    try {
      output.data = await this.providerService.getAppointments(queryParams);
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

  @Put('training')
  async updateTraining(@Body() providerData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createProviderService.updateTraining(providerData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Put('references')
  async updateReferences(@Body() providerData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createProviderService.updateReferences(providerData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Put('background')
  async updateBackground(@Body() providerData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createProviderService.updateBackground(providerData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Put('culturalBackground')
  async updateCulturalBackground(@Body() providerData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createProviderService.updateCulturalBackground(providerData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Put('affilations')
  async updateAffilations(@Body() providerData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createProviderService.updateAffilations(providerData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }


  @Put('status')
  async updateStatus(@Body() providerData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createProviderService.updateStatus(providerData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Put('verifyStatus')
  async updateVerifyStatus(@Body() providerData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createProviderService.updateVerifyStatus(providerData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }


  @Get('get-availability/:providerId')
  async getAvailability(@Param('providerId') providerId: string): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.providerService.getAvailability(providerId);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }



  @Post('availability-by-day')
  async getAvailabilityByDay(@Body() params: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.providerService.getAvailabilityByDay(params);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Post('exceptional-days/:providerId')
  async setAvailabilityByDay(@Param('providerId') providerId: string, @Body() params: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.providerService.setExceptionalDays({ providerId: providerId, days: params.days });
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }


  @Post('registration')
  async providerRegistration(@Body() registrationData: ProviderRegistrationDto): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createProviderService.providerRegistration(registrationData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Post('providerLeads')
  async getProvidersLead(@Body() queryParams: ListQueryParamsDto): Promise<ResponseData> {
    const output = new ResponseData();
    try {
      output.data = await this.providerService.getProvidersLeads(queryParams);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Get('providerLead/:providerId')
  async dasdasd(@Param('providerId') providerId: string): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.providerService.getProviderLeadById(providerId);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }


  @Put('updateLeadStatus')
  async updateLeadStatus(@Body() providerData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.createProviderService.updateLeadStatus(providerData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Delete(':providerId')
  async removeLeadProvider(@Param('providerId') providerId: string): Promise<any> {
    const provider = await this.providerRegistrationModel.findOne({ where: { id: providerId } });
    return await provider.destroy();
  }



  @Get('verifiedProviders')
  async getVerifiedProvidersCount() {
    let result = await this.providerService.getVerifiedProviders();
    return {
      data: result
    };
  }

  @Get('leadProvidersCount/:status')
  async getLeadProvidersCount(@Param('status') status: string) {
    let result = await this.providerService.getleadProvidersByStatus(status);
    return {
      data: result
    };
  }



}
