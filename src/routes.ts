import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { CreateCustomerController } from './controllers/CreateCustomerControllers'
import { ListCustomersController } from './controllers/ListCustomersControllers'
import { DeleteCustomerController } from './controllers/DeleteCustomerController'

export async function routes(fastify: FastifyInstance) {
  fastify.post(
    '/customer',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply)
    },
  )

  fastify.get(
    '/customers',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomersController().handle(request, reply)
    },
  )

  fastify.delete(
    '/customer',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply)
    },
  )
}
