import { FastifyReply, FastifyRequest } from "fastify";
import { TransactionsRepository } from "../../infra/prisma/repositories/TransactionsRepository";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";
import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { AppError } from "../../../../shared/AppError";

export class CreateTransactionController {
    async handle(request: FastifyRequest<{ Body: ICreateTransactionDTO }>, reply: FastifyReply){
        const { value, description, method, card_number, card_owner, validity, verification_code } = request.body

        if(!value || !description || !method || !card_number || !card_owner || !validity || !verification_code){
            throw new AppError("Missing required fields", 400)
        }

        const repository = new TransactionsRepository()
        const createTransactionUseCase = new CreateTransactionUseCase(repository)

        const newTransaction = await createTransactionUseCase.execute({
            value,
            description,
            method,
            card_number,
            card_owner,
            validity,
            verification_code
        })

        return reply.status(201).send(newTransaction)
    }
}