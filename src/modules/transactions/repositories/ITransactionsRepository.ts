import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO";
import { IReturnTransactionDTO } from "../dtos/IReturnTransactionDTO";

export interface ITransationsRepository {
    createTransaction(transaction: ICreateTransactionDTO): Promise<IReturnTransactionDTO>
    findAll(): Promise<IReturnTransactionDTO[]>
}