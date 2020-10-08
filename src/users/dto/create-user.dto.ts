import { IsString, IsOptional, IsNumber, ValidateNested, IsNotEmptyObject } from "class-validator";
import { Type } from "class-transformer";


export class CreateAddressDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsNumber()
  userId: number;

  @IsString()
  name: string;

  @IsString()
  address1: string;

  @IsString()
  address2: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsString()
  zip: string;

  @IsString()
  phone: string;
}

export class CreateBankDetailsDto {
  @IsOptional()
  @IsNumber()
  userId: number;

  @IsString()
  name: string;

  @IsString()
  bankName: string;

  @IsString()
  accountNumber: string;

  @IsString()
  branch: string;

  @IsString()
  ifsc: string;

  @IsString()
  pan: string;
}

export class CreateUserDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  userName: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  picture?: string;

  @IsOptional()
  @IsNumber()
  status: number;
}

export class CreateVendorDto {
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateUserDto)
  user: CreateUserDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateBankDetailsDto)
  bankDetails?: CreateBankDetailsDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  contactAddress?: CreateAddressDto;
}
