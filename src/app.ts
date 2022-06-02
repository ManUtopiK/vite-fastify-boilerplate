import { fastify as Fastify, FastifyServerOptions } from 'fastify'
import autoLoad from '@fastify/autoload'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default (opts?: FastifyServerOptions) => {
  const fastify = Fastify(opts)

  fastify.register(autoLoad, {
    dir: join(__dirname, 'plugins'),
    forceESM: true
  })

  /* Your code here. Hello world example: */

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  return fastify
}
