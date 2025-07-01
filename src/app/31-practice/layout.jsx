import React from 'react'

const Layout = ({ user, revenue, notification, children }) => {
  return (
    <div>
        {user}
      {revenue}
      {notification}
      {children}
    </div>
  )
}

export default Layout
