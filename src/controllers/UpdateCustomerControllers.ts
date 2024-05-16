import { FastifyReply, FastifyRequest } from 'fastify'
import { UpdateCustomerService } from '../services/UpdateCustomerService'

class UpdateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const id = request.params.id
      const { name, email, phone, document, status } = request.body as {
        name: string
        email: string
        phone: string
        document: string
        status: boolean
      }
      if (!name || !email || !phone || !document) {
        throw new Error('Todos os campos devem ser preenchidos')
      }
      const updateCustomerService = new UpdateCustomerService()
      const updatedCustomer = await updateCustomerService.execute({
        id,
        name,
        email,
        phone,
        document,
        status,
      })

      reply.send(updatedCustomer)
    } catch (err) {
      return err
    }
  }
}

export { UpdateCustomerController }
