import { IsOptional, IsNumber, IsBoolean, IsString } from "class-validator";

export class SaveTaxDto {
    @IsOptional()
    @IsNumber()
    stateId?: number;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsString()
    type?: 'F' | 'P';

    @IsBoolean()
    status?: boolean;
}