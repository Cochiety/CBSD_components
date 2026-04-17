import { Controller, Post, Body } from '@nestjs/common';
import { FleetService } from './fleet.service';
import { VehicleDto } from './dto/vehicle.dto';

@Controller('fleet')
export class FleetController {
  constructor(private fleetService: FleetService) {}

  @Post('/register')
  register(@Body() vehicleDto: VehicleDto) {
    return this.fleetService.registerVehicle(vehicleDto);
  }
}