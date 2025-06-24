import React from 'react'

const DynamicSlug = async ({ params }) => {
  const product = await params
    return (
    <div>
      This is {product.slug} page
    </div>
  )
}

export default DynamicSlug
