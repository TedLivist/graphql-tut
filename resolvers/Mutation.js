const { v4: uuid } = require('uuid')

exports.Mutation = {
  addCategory: (parent, {input}, {categories}) => {
    const {name} = input
    
    const newCategory = {
      id: uuid(),
      name
    }

    categories.push(newCategory)

    return newCategory

  },

  addProduct: (parent, {input}, {products}) => {
    const {name, description, price, quantity, image, onSale, categoryId} = input
    const newProduct = {
      id: uuid(),
      name, description, price, quantity, image, onSale, categoryId
    }

    products.push(newProduct)
    return newProduct
  },

  addReview: (parent, {input}, {reviews}) => {
    const {title, comment, date, rating, productId} = input
    const newReview = {
      id: uuid(),
      title, comment, date, rating, productId
    }

    reviews.push(newReview)
    return newReview
  }
}