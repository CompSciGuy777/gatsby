import React, { Component } from 'react'
import Link from 'gatsby-link'


 class Navigation extends Component {

  render() {
    return (
      <div className="row navigationRow">
      <nav>
        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">about</Link></li>
            <li><Link to="/blogs/">blogs</Link></li> 
        </ul>
      </nav>
      </div>
    )
  }
}

export default Navigation