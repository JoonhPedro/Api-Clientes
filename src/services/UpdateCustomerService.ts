import prismaClient from '../prisma'

interface UpdateCustomerServiceProps {
  id: string
  name: string
  email: string
  phone: string
  document: string
  status: boolean
}

class UpdateCustomerService {
  async execute({
    id,
    name,
    email,
    phone,
    document,
    status,
  }: UpdateCustomerServiceProps) {
    try {
      if (!id || !name || !email || !phone || !document) {
        throw new Error('Preencha todos os campos')
      }

      const updatedCustomer = await prismaClient.customer.update({
        where: { id },
        data: {
          name,
          email,
          phone,
          document,
          status,
        },
      })

      return updatedCustomer
    } catch (err) {
      return err
    }
  }
}

export { UpdateCustomerService }
