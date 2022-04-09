import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
      getUser (gender: String!): [User!]!
      getUsers (numOfUsers: String!, gender: String!): [User!]!
    }
    
    type User {
      gender: String!
      name: Name!
      location: Location!
      email: String!
      login: Login!
      picture: Picture!
      dob: Dob!
      registered: Registered!
      phone: String!
      cell: String!
      id: id!
      nat: String!
    }

    type Name {
      title: String!
      first: String!
      last: String!
    }

    type Location {
      street: String!
      city: String!
      state: String!
      postcode: String!
      coordinates: Coordinates!
      timezone: Timezone!
      country: String!
    }

    type Coordinates {
      latitude: String!
      longitude: String!
    }

    type Timezone {
      offset: String!
      description: String!
    }

    type Login {
      uuid: ID!
      username: String!
      password: String!
      salt: String!
      md5: String!
      sha1: String!
      sha256: String!
    }

    type Dob {
      date: String!
      age: Int!
    }

    type Registered {
      date: String!
      age: Int!
    }

    type id {
      name: String
      value: String
    }

    type Picture {
      large: String!
      medium: String!
      thumbnail: String!
    }
`

export default typeDefs