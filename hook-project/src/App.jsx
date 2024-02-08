import { useState } from 'react'
import './App.css'

// Meus componentes
import Data from './components/data'
import ListRender from './components/listRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hooks</h1>
      <Data />
      <hr />
      <ListRender />
    </>
  )
}

export default App
