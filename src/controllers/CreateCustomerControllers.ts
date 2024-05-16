import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateCustomerService } from '../services/CreateCustomerService'

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { name, email, phone, document, status } = request.body as {
        name: string
        email: string
        phone: string
        document: string
        status: boolean
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
        status,
      })

      reply.send(customer)
    } catch (err) {
      return err
    }
  }
}

export { CreateCustomerController }
