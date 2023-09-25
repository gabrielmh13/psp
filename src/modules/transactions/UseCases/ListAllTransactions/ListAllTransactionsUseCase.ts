import { ITransationsRepository } from "../../repositories/ITransactionsRepository";

export class ListAllTransactionsUseCase {
    constructor(
        private transactionsRepository: ITransationsRepository
    ){}

    async execute(){
        const transactions = await this.transactionsRepository.findAll()

        return transactions
    }
}