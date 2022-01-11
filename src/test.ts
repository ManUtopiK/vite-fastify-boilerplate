import { beforeAll, afterAll } from 'vitest'
import buildFastify from './app'

const fastify = buildFastify()

beforeAll(async () => {
  // called once before all tests run
  await fastify.ready()
})
afterAll(async () => {
  // called once after all tests run
  await fastify.close()
})

export default fastify
