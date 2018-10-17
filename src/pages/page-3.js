import React from 'react'
import Link from 'gatsby-link'

const ThirdPage = () => (
<div>
    <h1>Hi from the third page</h1>
    <p>Welcome to page 2</p>
   <p> <Link to="/page-2/" >Go to Page2 </Link></p>


  <Link to="/">Go back to the homepage</Link>
</div>


)

export default ThirdPage
