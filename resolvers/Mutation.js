const { v4: uuid } = require('uuid')

exports.Mutation = {
  addCategory: (parent, {input}, {db}) => {
    const {name} = input
    
    const newCategory = {
      id: uuid(),
      name
    }

    db.categories.push(newCategory)

    return newCategory

  },

  addProduct: (parent, {input}, {db}) => {
    const {name, description, price, quantity, image, onSale, categoryId} = input
    const newProduct = {
      id: uuid(),
      name, description, price, quantity, image, onSale, categoryId
    }

    db.products.push(newProduct)
    return newProduct
  },

  addReview: (parent, {input}, {db}) => {
    const {title, comment, date, rating, productId} = input
    const newReview = {
      id: uuid(),
      title, comment, date, rating, productId
    }

    db.reviews.push(newReview)
    return newReview
  },

  deleteCategory: (parent, {id}, {db}) => {
    db.categories = db.categories.filter((category) => category.id !== id)
    db.products = db.products.map((product) => {
      console.log(product)
      if (product.categoryId === id) return {
        ...product,
        categoryId: null
      }
      else return product
    })
    return true
  }


}