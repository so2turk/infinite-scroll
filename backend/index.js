import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './models/schemaRU.js'
import resolvers from './models/resolverRU.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const server = new ApolloServer({
  typeDefs,
  resolvers
})

await server.start()
server.applyMiddleware({ app, path: '/api' })

app.get('/', (req, res) => res.send('Server is up and running'))
app.use((req, res, next) => {
  res.status(404).send('not found');
})

const port = process.env.PORT || 5050
app.listen(port, () => {
  console.log(`Listening on port ${port}${server.graphqlPath}`)
})
