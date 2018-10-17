import React, { Component } from 'react'

 class Navigation extends Component {

  render() {
    return (
      <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">about</Link></li>
            <li><Link to="/blogs/">blogs</Link></li> 
        </ul>
      </div>
    )
  }
}

export default Navigation