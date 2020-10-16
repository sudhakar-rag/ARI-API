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
