import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateCustomerService } from '../services/CreateCustomerService'

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, email, phone, document } = request.body as {
        name: string
        email: string
        phone: string
        document: string
      }
      if (!name || !email || !phone || !document) {
        throw new Error('falta preencher o nome ou email')
      }
      const customerService = new CreateCustomerService()
      const customer = await customerService.execute({
        name,
        email,
        phone,
        document,
      })

      reply.send(customer)
    } catch (err) {
      return err
    }
  }
}

export { CreateCustomerController }
