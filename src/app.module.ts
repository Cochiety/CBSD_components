import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { FleetModule } from './modules/fleet/fleet.module';
import { AccountsModule } from './modules/accounts/accounts.module';


@Module({
  imports: [
    AuthModule,     // Identity Component
    FleetModule,    // Asset Management Component
    AccountsModule  // Financial/Bookkeeping Component
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

