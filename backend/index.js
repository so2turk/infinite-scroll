import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    hello: String,
    hifive: Int,
    hi4: String,
    user: [User!]!
  }
  type User {
    name: String!,
    email: String!,
    age: Int!,
    happy: Boolean!
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hi there!',
    hifive: () => 5,
    hi4: () => 'four',
    user: () => {
      return [{
        name: 'Lol',
        email: 'l@l.com',
        age: 32,
        happy: true
      }]
    }
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
