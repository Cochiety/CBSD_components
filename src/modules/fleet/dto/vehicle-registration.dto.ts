import { IsString, IsNotEmpty } from 'class-validator';

export class VehicleRegistrationDto {
  @IsString()
  @IsNotEmpty()
  plateNumber: string;

  @IsString()
  model: string;

  @IsString()
  ownerId: string;
}