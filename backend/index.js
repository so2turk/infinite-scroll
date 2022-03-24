import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hi there!',
  },
}
const app = express()

const server = new ApolloServer({ typeDefs, resolvers })
await server.start()
server.applyMiddleware({ app })

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}${server.graphqlPath}`)
})
