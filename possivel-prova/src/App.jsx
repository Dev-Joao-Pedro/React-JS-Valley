import { useEffect, useState } from 'react'
// import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'

const url = 'http://20.20.1.222:8000/api/cat/'

function App() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(url)
      console.log(response.data.results);
      setCats(response.data.results)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
