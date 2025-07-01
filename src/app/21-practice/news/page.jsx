import React from 'react'

const page = async ({ params, searchParams }) => {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000))
  return (
    <div>
      <h1>Hey there</h1>
    </div>
  )
}

export default page
