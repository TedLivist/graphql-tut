exports.Query = {
  hello: () => {
    return null
  },
  products: (parent, {filter}, {products}) => {
    let filteredProducts = products
    if (filter) {
      if(filter.onSale === true) {
        filteredProducts = filteredProducts.filter((filteredProduct) => filteredProduct.onSale)
      }
    }
    
    return filteredProducts
  },
  product: (parent, {id}, {products}) => {
    return products.find((product) => product.id == id)
  },

  categories: () => categories,

  category: (parent, {id}, {categories}) => {
    return categories.find((category) => category.id == id )
  }
}