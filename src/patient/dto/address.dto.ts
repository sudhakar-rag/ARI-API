import { IsOptional, IsNumber, IsString } from 'class-validator';

export class AddressDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    phone: string;

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
}
