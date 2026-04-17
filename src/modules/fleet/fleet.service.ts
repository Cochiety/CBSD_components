import { Injectable, BadRequestException } from '@nestjs/common';
import { VehicleDto } from './dto/vehicle.dto';

@Injectable()
export class FleetService {
  // Provided Service: Manages vehicle metadata and verification
  async registerVehicle(vehicleDto: VehicleDto) {
    const { plateNumber, model } = vehicleDto;

    // Logic: Ensure the plate number is valid for regional tracking
    if (!plateNumber || plateNumber.length < 5) {
      throw new BadRequestException('Invalid Plate Number: Must be at least 5 characters.');
    }

    return {
      message: `Vehicle ${plateNumber} (${model}) registered successfully.`,
      status: 'Verification Pending',
      timestamp: new Date().toISOString()
    };
  }
}