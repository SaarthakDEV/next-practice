import React from 'react'

const Docs = async ({ params }) => {
    const { slug } = await params;
  if(slug?.length > 1){
    return (
    <div>
      Viewing docs for feature {slug[0]} and concept {slug[1]} 
    </div>
  ) 
}else if(slug?.length === 1){
    return (
        <div>Viewing docs for feature {slug[0]} </div>
    )
}

return <div>Home route</div>
}

export default Docs
