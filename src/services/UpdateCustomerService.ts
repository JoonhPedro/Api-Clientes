import prismaClient from '../prisma'

interface UpdateCustomerServiceProps {
  id: string
  name: string
  email: string
  phone: string
  document: string
}

class UpdateCustomerService {
  async execute({
    id,
    name,
    email,
    phone,
    document,
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
        },
      })

      return updatedCustomer
    } catch (err) {
      return err
    }
  }
}

export { UpdateCustomerService }
