import React from 'react'
import { redirect } from 'next/navigation'
// import { useRouter } from 'next/navigation'

const page = () => {
    // const router = useRouter();
    const handleClick = () => {
        console.log("Placing order")
        // router.push('/')
    }
    redirect("https://www.google.com")
    return (
    <div>
      <button onClick={handleClick}>Places order</button>
    </div>
  )
}

export default page
