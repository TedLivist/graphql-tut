/*
query {
  category(id: "d914aec0-25b2-4103-9ed8-225d39018d1d") {
    name
    products {
      name
      description
      image
    }
  }
}
*/
exports.Category = {
  products: ({id: categoryId}, {filter}, {products}) => {

    let categoryProducts = products.filter((product) => product.categoryId === categoryId)
    let filteredCategoryProducts = categoryProducts

    if (filter) {
      if(filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter((filteredCategoryProduct) => filteredCategoryProduct.onSale)
      } else {
        filteredCategoryProducts = filteredCategoryProducts.filter((filteredCategoryProduct) => filteredCategoryProduct.onSale === false)
      }
    }
    
    return filteredCategoryProducts
  }
}