import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteCustomerService } from '../services/DeleteCustomerService'

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string }
    const DeleteCustomer = new DeleteCustomerService()

    const customer = await DeleteCustomer.execute({ id })

    reply.send(customer)
  }
}

export { DeleteCustomerController }
