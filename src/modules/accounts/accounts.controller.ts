import { Controller, Post, Body } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post('/transaction')
  recordTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    return this.accountsService.processTransaction(createTransactionDto);
  }
}