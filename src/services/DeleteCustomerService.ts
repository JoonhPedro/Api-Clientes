import prismaClient from '../prisma'

interface DeleteCustomerServiceProps {
  id: string
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerServiceProps) {
    try {
      if (!id) {
        throw new Error('Solicitação Invalida')
      }

      const findCustomer = await prismaClient.customer.findFirst({
        where: {
          id,
        },
      })

      if (!findCustomer) {
        throw new Error('Cliente não existe')
      }

      await prismaClient.customer.delete({
        where: {
          id: findCustomer.id,
        },
      })

      return { message: 'Deletado com sucesso' }
    } catch (err) {
      return err
    }
  }
}

export { DeleteCustomerService }
