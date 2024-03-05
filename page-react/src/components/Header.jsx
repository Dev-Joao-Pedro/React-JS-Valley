import React from 'react'
import './Header.css'
import Navbar from './Navbar'

const Header = (props) => {
  return (
    <header className='header-class'>
      <h1>MeuSite</h1>
      <Navbar />
    </header>
  )
}

export default Header