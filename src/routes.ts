import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { CreateCustomerController } from './controllers/CreateCustomerControllers'
import { DeleteCustomerController } from './controllers/DeleteCustomerController'
import { ListCustomersController } from './controllers/ListCustomersControllers'
import { UpdateCustomerController } from './controllers/UpdateCustomerControllers'

const message = 'Service Rodando'

export async function routes(fastify: FastifyInstance) {
  fastify.get('/', async () => {
    return message
  })
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
  fastify.put(
    '/customer/:id',
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { id } = request.params as { id: string }
      return new UpdateCustomerController().handle(request, reply)
    },
  )
}
