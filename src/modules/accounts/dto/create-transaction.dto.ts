import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsString()
  tripId: string;

  @IsNumber()
  amount: number;

  @IsString()
  category: string; // e.g., "Fuel", "Tax", "Maintenance"
}