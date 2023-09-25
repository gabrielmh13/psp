import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify"

export const StatusRoute = async (app: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    app.get('/status', async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.send({ status: 'OK' })
    })

    done()
}