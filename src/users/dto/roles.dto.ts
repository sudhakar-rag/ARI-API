import { IsOptional, IsNumber, IsString } from "class-validator";

export class CreateRoleDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    permissions: string;
}