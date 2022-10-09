// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const cors = require("@fastify/cors")

// Declare a route
fastify.get('/home', async (request, reply) => {
  return { hello: "sachin elone musk " }
})

fastify.register(cors,{
    origin : "*"
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT||{ port: 8000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start() 
