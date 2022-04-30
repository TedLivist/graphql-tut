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
  category: ({categoryId}, args, {db}) => {
    return db.categories.find((category) => category.id === categoryId)
  },

  reviews: ({id}, args, {db}) => {
    return db.reviews.filter((review) => review.productId === id)
  }
}