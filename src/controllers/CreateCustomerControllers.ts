import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateCustomerService } from '../services/CreateCustomerService'

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string }
    if (!name || !email) {
      throw new Error('falta preencher o nome ou email')
    }
    const customerService = new CreateCustomerService()
    const customer = await customerService.execute({ name, email })

    reply.send(customer)
  }
}

export { CreateCustomerController }
