import { useState } from 'react'
// import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Livros' element={<Books />} />
          <Route path='/Contato' element={<Contact />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
