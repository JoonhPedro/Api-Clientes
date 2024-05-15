import prismaClient from '../prisma'

class ListCustomersService {
  async execute() {
    try {
      const customers = await prismaClient.customer.findMany()
      return customers
    } catch (err) {
      return err
    }
  }
}

export { ListCustomersService }
