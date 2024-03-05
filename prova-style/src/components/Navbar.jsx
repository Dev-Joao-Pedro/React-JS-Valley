import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/' className={({isActive}) => (isActive ? "active" : undefined)}>Home</NavLink>
        <NavLink to='/Livros' className={({isActive}) => (isActive ? "active" : undefined)}>Livros</NavLink>
        <NavLink to='/Contato' className={({isActive}) => (isActive ? "active" : undefined)}>Contato</NavLink>
    </nav>
  )
}

export default Navbar
