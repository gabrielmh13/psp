import "dotenv/config";
import fastify from 'fastify'
import { routes } from './routes'

const app = fastify()

export function createServer() {
    app.register(routes)

    app.listen({ port: 9000 }, (err, address) => {
        if (err) {
          console.error(err)
          process.exit(1)
        }
        console.log(`Server listening at ${address}`)
      })
}

createServer()