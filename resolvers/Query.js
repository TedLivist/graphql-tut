exports.Query = {
  hello: () => {
    return null
  },
  products: () => {
    return products
  },
  product: (parent, {id}, {products}) => {
    return products.find((product) => product.id == id)
  },

  categories: () => categories,

  category: (parent, {id}, {categories}) => {
    return categories.find((category) => category.id == id )
  }
}