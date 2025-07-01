import React from 'react'

const page = async ({ params, searchParams }) => {
    const { newsId } = await params;
    const { lang } = await searchParams;
  return (
    <div>
      <h1>Hey there</h1>
      <p>{`Dynamic route is ${ newsId} and query parameter is ${lang}`}</p>
    </div>
  )
}

export default page
