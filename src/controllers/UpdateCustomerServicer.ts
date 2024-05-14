import { FastifyReply, FastifyRequest } from 'fastify'
import { UpdateCustomerService } from '../services/UpdateCustomerService'

class UpdateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const id = request.params.id // Acessando o ID diretamente dos parâmetros da URL
    const { name, email, phone, document } = request.body as {
      name: string
      email: string
      phone: string
      document: string
    }

    if (!id || !name || !email || !phone || !document) {
      throw new Error('Todos os campos devem ser preenchidos')
    }

    const updateCustomerService = new UpdateCustomerService()
    const updatedCustomer = await updateCustomerService.execute({
      id,
      name,
      email,
      phone,
      document,
    })

    reply.send(updatedCustomer)
  }
}

export { UpdateCustomerController }
