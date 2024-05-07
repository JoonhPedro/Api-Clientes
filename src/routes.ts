import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerControllers";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return {status: true}
  })

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(request, reply)
    // return {status: true}
  })
}