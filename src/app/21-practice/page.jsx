import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Link href={"21-practice/news/123?lang=en"} >Read in english </Link>
      <Link href={"21-practice/news/456?lang=fr"} >Read in French </Link>
    </div>
  )
}

export default page
