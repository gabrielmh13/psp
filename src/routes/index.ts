import { FastifyInstance } from "fastify"
import { StatusRoute } from "./Status"
import { TransactionsRoutes } from "./TransactionsRoutes"

export const routes = async (app: FastifyInstance) => {
    app.register(StatusRoute)
    app.register(TransactionsRoutes)
}