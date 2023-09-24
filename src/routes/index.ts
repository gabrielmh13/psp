import { FastifyInstance } from "fastify"
import { ping } from "./ping"

export const routes = async (app: FastifyInstance) => {
    app.register(ping)
}