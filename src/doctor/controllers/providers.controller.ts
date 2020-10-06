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
import { ResponseData } from '@app/src/core/common/response-data';
import { ProviderBasicDto } from '../dto/provider.dto';

@Controller('provider')
// @UseGuards(JwtAuthGuard)
export class ProvidersController {
  constructor(private providerService: ProviderService) {}

  @Get('')
  async getProviders() {
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
  async create(@Body() providerData: ProviderDto): Promise<ResponseData> {
    let output = new ResponseData();

    try {
      output.data = await this.providerService.create(providerData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }
}
