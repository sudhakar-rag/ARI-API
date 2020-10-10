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

  @Get()
  async getProviders(): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = [];//await this.providerService.getProviders();
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
      output.data = providerData;//await this.createProviderService.createProvider(providerData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }
}
