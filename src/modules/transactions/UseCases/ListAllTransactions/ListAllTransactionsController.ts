import { FastifyReply, FastifyRequest } from "fastify";
import { ListAllTransactionsUseCase } from "./ListAllTransactionsUseCase";
import { TransactionsRepository } from "../../infra/prisma/repositories/TransactionsRepository";

export class ListAllTransactionsController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const repository = new TransactionsRepository()
        const listAllTransactionsUseCase = new ListAllTransactionsUseCase(repository)

        const transactions = await listAllTransactionsUseCase.execute()

        return reply.send(transactions)
    }
}