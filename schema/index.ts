import { gql } from 'apollo-server'

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type User {
    token: String
    userEmail: String
  }

  type Mutation {
    login(email: String): User
  }

  type Query {
    books: [Book]
  }
`

export default typeDefs