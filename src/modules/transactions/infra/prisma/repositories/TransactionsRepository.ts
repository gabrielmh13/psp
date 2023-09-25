import { PrismaClient } from "@prisma/client";
import { IReturnTransactionDTO } from "../../../dtos/IReturnTransactionDTO";
import { ITransationsRepository } from "../../../repositories/ITransactionsRepository";
import { client } from "../../../../../prisma/client";
import { PrismaTransactionsMapper } from "../mappers/PrismaTransactionsMapper";
import { ICreateTransactionDTO } from "../../../dtos/ICreateTransactionDTO";

export class TransactionsRepository implements ITransationsRepository{
    private repository: PrismaClient

    constructor(){
        this.repository = client
    }
    async createTransaction(transaction: ICreateTransactionDTO): Promise<IReturnTransactionDTO> {
        const rawTransaction = await this.repository.transactions.create({
            data: {
                value: transaction.value,
                description: transaction.description,
                method: transaction.method,
                card_number: transaction.card_number,
                card_owner: transaction.card_owner,
                validity: new Date(transaction.validity),
                verification_code: transaction.verification_code
            }
        })

        const newTransaction = PrismaTransactionsMapper.toDomain(rawTransaction)

        return newTransaction
    }

    async findAll(): Promise<IReturnTransactionDTO[]> {
        const rawTransactions = await this.repository.transactions.findMany()

        const transactions = rawTransactions.map(transaction => {
            return PrismaTransactionsMapper.toDomain(transaction)
        })

        return transactions
    }
}