import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'; // The "Security Guard"
import { AccountsService } from './accounts.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('accounts')
@UseGuards(AuthGuard('jwt')) // This locks all endpoints in this controller
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post('/transaction')
  async recordTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    // This will only execute if the request has a valid JWT in the header
    return await this.accountsService.processTransaction(createTransactionDto);
  }
}