import React from 'react'

const DynamicSlug = async ({ params }) => {
  const product = await params
  console.log(product)
    return (
    <div>
     Hello {product.productId}
    </div>
  )
}

export default DynamicSlug