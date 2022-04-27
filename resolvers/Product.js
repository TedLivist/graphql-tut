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
  category: ({categoryId}, args, {categories}) => {
    return categories.find((category) => category.id === categoryId)
  }
}