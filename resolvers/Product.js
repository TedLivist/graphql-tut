const { categories } = require("../db")

/*
  query {
    products {
      name
      category {
        name
          products {
            description
            name
            quantity
          }
      }
    }
  }
*/
exports.Product = {
  category: (parent, args, context) => {
    const {categoryId} = parent
    return categories.find((category) => category.id === categoryId)
  }
}