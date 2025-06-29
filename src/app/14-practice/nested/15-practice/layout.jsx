import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
      <section>
        This is nested header
      </section>
      {children}
      <section>
        This is nested footer
      </section>
    </div>
  )
}

export default layout
