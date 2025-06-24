
const Review = async ({ params}) => {
    const product = await params;
  return (
    <div>
        This is review {product.reviewId} of product { product.productId }
    </div>
  )
}

export default Review
