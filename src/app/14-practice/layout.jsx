import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
      <section>
        This is header
      </section>
      {children}
      <section>
        This is footer
      </section>
    </div>
  )
}

export default layout
