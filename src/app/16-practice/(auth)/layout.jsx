import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
      <section>
        This is Auth header
      </section>
      {children}
      <section>
        This is Auth footer
      </section>
    </div>
  )
}

export default layout
