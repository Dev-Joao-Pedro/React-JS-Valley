import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <Link to={'/'} >HOME</Link>
      <Link to={'/About'} >Sobre Nós</Link>
      <Link to={'/Products'} >Produtos</Link>
    </nav>
  )
}

export default NavBar
