import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteCustomerService } from '../services/DeleteCustomerService'

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.query as { id: string }
      const DeleteCustomer = new DeleteCustomerService()
      const customer = await DeleteCustomer.execute({ id })

      reply.send(customer)
    } catch (err) {
      return err
    }
  }
}

export { DeleteCustomerController }
