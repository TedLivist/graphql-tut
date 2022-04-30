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
  products: ({id: categoryId}, {filter}, {db}) => {

    let categoryProducts = db.products.filter((product) => product.categoryId === categoryId)
    let filteredCategoryProducts = categoryProducts

    if (filter) {
      const { onSale, avgRating } = filter

      if(onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter((filteredCategoryProduct) => filteredCategoryProduct.onSale)
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
          let sumRating = 0
          let numberOfReviews = 0
          db.reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating
              numberOfReviews++
            }
          })
          const avgProductRating = sumRating/numberOfReviews
          return avgProductRating >= avgRating
        })
      }
    }
    
    return filteredCategoryProducts
  }
}