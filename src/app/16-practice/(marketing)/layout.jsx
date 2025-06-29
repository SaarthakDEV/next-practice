import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
      <section>
        This is marketing header
      </section>
      {children}
      <section>
        This is marketing footer
      </section>
    </div>
  )
}

export default layout
