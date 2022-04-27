const { ApolloServer } = require('apollo-server')
const { Category } = require('./resolvers/Category')
const { Product } = require('./resolvers/Product')
const { Query } = require('./resolvers/Query')
const { typeDefs } = require('./schema')
const {categories, products, reviews} = require('./db')

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    categories,
    products,
    reviews
  }
})

server.listen().then(({url}) => {
  console.log('Server is ready at ', url)
})