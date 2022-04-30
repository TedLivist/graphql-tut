const { ApolloServer } = require('apollo-server')
const { Category } = require('./resolvers/Category')
const { Product } = require('./resolvers/Product')
const { Query } = require('./resolvers/Query')
const { typeDefs } = require('./schema')
const {db} = require('./db')
const { Mutation } = require('./resolvers/Mutation')
db

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Mutation
  },
  context: {
    db,
  }
})

server.listen().then(({url}) => {
  console.log('Server is ready at ', url)
})