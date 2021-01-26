import { IsOptional, IsNumber, IsString } from "class-validator";

export class CreateFCMDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsNumber()
    userId: number;

    @IsString()
    token: string;

    @IsString()
    type: 'D' | 'A' | 'I';
}