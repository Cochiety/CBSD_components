import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class AccountsService {
  // Provided Service: Processes business transactions and tax
  async processTransaction(createTransactionDto: CreateTransactionDto) {
    const { amount, category } = createTransactionDto;

    // Logic: Calculate a 15% estimated tax for the transaction
    const taxRate = 0.15;
    const estimatedTax = amount * taxRate;
    const netAmount = amount - estimatedTax;

    return {
      status: 'Processed',
      category: category,
      grossAmount: amount,
      taxDeduction: estimatedTax,
      netToBusiness: netAmount,
      timestamp: new Date().toISOString(),
    };
  }
}