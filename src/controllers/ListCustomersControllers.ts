import { FastifyRequest, FastifyReply } from 'fastify'
import { ListCustomersService } from '../services/ListCustomersService'

class ListCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const listCustomersService = new ListCustomersService()
      const customers = await listCustomersService.execute()
      reply.send(customers)
    } catch (err) {
      return err
    }
  }
}

export { ListCustomersController }
