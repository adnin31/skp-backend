import express from 'express'
import { ApolloServer, gql } from 'apollo-server'
import { DataSource } from "typeorm"
import "reflect-metadata"

import typeDefs from './schema'
import resolvers from './services'

const AppDataSource = new DataSource({
  type: "postgres",
  host: 'skp-data',
  port: 6001,
  username: "api",
  password: "dev",
  database: "skp-data",
  entities: [],
  synchronize: true,
  logging: false,
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log('Ini dia')
        const app = express()
        const port = 5001

        app.get('/', (req, res) => {
          res.send('Hello from the other side')
        })

        const server = new ApolloServer({
          typeDefs,
          resolvers,
          csrfPrevention: true,
          cache: 'bounded',
        });

        server.listen({ port}).then(({ url }) => {
          console.log(`🚀  Server ready at ${url}`);
        });
    })
    .catch(async (error) => {
      console.log('error neh', error)
    })

// The `listen` method launches a web server.
