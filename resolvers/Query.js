const { categories, products } = require("../db")

exports.Query = {
  hello: () => {
    return null
  },
  products: () => {
    return products
  },
  product: (parent, args, context) => {
    return products.find((product) => product.id == args.id)
  },

  categories: () => categories,

  category: (parent, args, context) => {
    return categories.find((category) => category.id == args.id )
  }
}