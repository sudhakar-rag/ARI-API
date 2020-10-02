import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { IsString, IsNumberString, IsOptional, IsNumber, IsArray, IsNotEmptyObject, ValidateNested, IsDate } from "class-validator";
import { ConfigService } from '@nestjs/config';

export class RoleData {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  samplePost(@Body() data: RoleData) {
    const dbUser = this.configService.get<string>('app.env') || 'll5';
    return { dbUser };
  }
}


