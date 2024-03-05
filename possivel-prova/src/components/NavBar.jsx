import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <h1><Link to={'/'}>Cats</Link></h1>
    </nav>
  )
}

export default NavBar
