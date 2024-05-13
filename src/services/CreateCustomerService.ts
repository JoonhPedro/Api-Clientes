import prismaClient from '../prisma'

interface CreateCustomerServiceProps {
  name: string
  email: string
  phone: string
  document: string
}

class CreateCustomerService {
  async execute({ name, email, phone, document }: CreateCustomerServiceProps) {
    if (!name || !email || !phone || !document) {
      throw new Error('Preencha todos os campos')
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        phone,
        document,
        status: true,
      },
    })

    return customer
  }
}

export { CreateCustomerService }

