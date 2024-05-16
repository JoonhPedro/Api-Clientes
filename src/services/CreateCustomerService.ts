import prismaClient from '../prisma'

interface CreateCustomerServiceProps {
  name: string
  email: string
  phone: string
  document: string
  status: boolean
}

class CreateCustomerService {
  async execute({
    name,
    email,
    phone,
    document,
    status,
  }: CreateCustomerServiceProps) {
    try {
      if (!name || !email || !phone || !document) {
        throw new Error('Preencha todos os campos')
      }

      const customer = await prismaClient.customer.create({
        data: {
          name,
          email,
          phone,
          document,
          status,
        },
      })

      return customer
    } catch (err) {
      return err
    }
  }
}

export { CreateCustomerService }
