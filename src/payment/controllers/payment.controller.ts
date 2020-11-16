import { PaymentService } from './../services/payment.service';
import { JwtAuthGuard } from './../../auth/guards/jwt-auth.guard';
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
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('payment')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('payment')
export class PaymentController {
  constructor( private paymentService: PaymentService,
  ) { 

  }


  @Get(':id')
  async getPayments(@Param('id') userId: number): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.paymentService.getPaymentsById(userId);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }

  @Post()
  async savePayment(@Body() paymentData: any): Promise<ResponseData> {
    const output = new ResponseData();

    try {
      output.data = await this.paymentService.savePayment(paymentData);
    } catch (error) {
      console.log(error);
      output.status = false;
      output.message = typeof error == 'string' ? error : '';
    }

    return output;
  }


}
