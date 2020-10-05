import { IsBoolean, IsDate } from 'class-validator';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class DoctorDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsNumber()
  userId: number;

  @IsString()
  businessName: string;

  @IsNumber()
  isPublic: number;

  @IsNumber()
  specialityId: number;

  @IsNumber()
  areaOfInterest: number;

  @IsNumber()
  serviceType: number;

  @IsString()
  religion: string;

  @IsString()
  specialBackground: string;

  @IsString()
  limitation: string;

  @IsString()
  addiction: string;

  @IsString()
  crime: string;

  @IsString()
  malpractice: string;

  @IsString()
  timezone: string;

  @IsBoolean()
  isVerified: boolean;

  @IsNumber()
  zoomId: number;

  @IsString()
  zoomUrl: string;

  @IsNumber()
  rating: number;

  @IsString()
  zoomStatus: string;

  @IsString()
  userStatus: string;

  @IsBoolean()
  isAvailable: boolean;
}
