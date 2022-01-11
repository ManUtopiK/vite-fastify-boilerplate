import { fastify as Fastify, FastifyServerOptions } from 'fastify'

export default (opts?: FastifyServerOptions) => {
  const fastify = Fastify(opts)

  /* Your code here. Hello world example: */

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  return fastify
}
