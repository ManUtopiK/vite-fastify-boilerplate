import { describe, it, expect } from 'vitest'
import fastify from '@/test'

describe('Test server health', () => {
  it('serve GET /', async () => {
    const res = await fastify.inject('/')
    expect(res.json()).toEqual({ hello: 'world' })
  })
})
