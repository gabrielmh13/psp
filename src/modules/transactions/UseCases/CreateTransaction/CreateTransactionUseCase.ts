import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { ITransationsRepository } from "../../repositories/ITransactionsRepository";

export class CreateTransactionUseCase {
    constructor(
        private transactionsRepository: ITransationsRepository
    ){}

    async execute(transaction: ICreateTransactionDTO){
        const newTransaction = await this.transactionsRepository.createTransaction(transaction)
        
        return newTransaction
    }
}