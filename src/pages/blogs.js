import React from 'react'
import Link from 'gatsby-link'

const blogs = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
<Link to="/page-3">Go to Page 3</Link>
<Link to="/">Go back to the homepage</Link>
  </div>
)

export default blogs
