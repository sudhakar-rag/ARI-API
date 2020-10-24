import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ListFilterDto {
    [key: string]: string;
}

export class ListQueryParamsDto {
    @ApiProperty({ type: String, default: '' })
    @IsOptional()
    @IsString()
    queryString?: string;

    @ApiProperty({ type: Number, default: 1 })
    @IsOptional()
    @IsNumber()
    pageNumber?: number;

    @ApiProperty({ type: Number, default: 100 })
    @IsOptional()
    @IsNumber()
    pageSize?: number;

    @ApiProperty({ type: String, default: '' })
    @IsOptional()
    @IsString()
    sortField?: string;

    @ApiProperty({ type: String, default: '' })
    @IsOptional()
    @IsString()
    sortOrder?: string;

    @ApiProperty()
    @IsOptional()
    // @Type(() => ListFilterDto)    
    filter?: any;

}

