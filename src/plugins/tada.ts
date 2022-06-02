export default function (fastify, opts, next) {
  fastify.get('/tada', (request, reply) => {
    reply.send({ something: 'else' })
  })

  next()
}
