const { products } = require("../db")

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
  products: (parent, args, context) => {
    const categoryId = parent.id
    return products.filter((product) => product.categoryId === categoryId)
  }
}