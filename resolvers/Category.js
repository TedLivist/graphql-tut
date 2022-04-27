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
  products: ({id: categoryId}, args, {products}) => {
    return products.filter((product) => product.categoryId === categoryId)
  }
}