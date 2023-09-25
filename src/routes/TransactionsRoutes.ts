import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { ListAllTransactionsController } from "../modules/transactions/UseCases/ListAllTransactions/ListAllTransactionsController";
import { CreateTransactionController } from "../modules/transactions/UseCases/CreateTransaction/CreateTransactionController";

const listAllTransactionsController = new ListAllTransactionsController()
const createTransactionController = new CreateTransactionController()

export const TransactionsRoutes = async (app: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    app.get("/transactions", listAllTransactionsController.handle)
    app.post("/transactions", createTransactionController.handle)

    done()
}