// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const cors = require("@fastify/cors")

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: "sachin elone musk " }
})

fastify.register(cors,{
    origin : "*"
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start() 
