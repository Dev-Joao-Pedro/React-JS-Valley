import { useState } from 'react'
import './App.css'
import icon from "./assets/images/react-logo-removebg-preview.png"

// Meu componentes
import FirstComponent from './components/firstComponent'
import SecondComponent from './components/secondComponent'
import EventClick from './components/eventClick'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        {/* Comentario */}
        <h1>Componentes</h1>
        { 2 + 8 }
        <FirstComponent />
        { 'Jotinha' + 'Dcria' }
        <SecondComponent />
        <EventClick />
        {/* Imagem da PUBLIC */}
        <img src="/react-logo-removebg-preview.png" alt="Imagem da Public" />
        {/* Imagem importada */}
        <img src={icon} alt="Imagem importada" />
      </div>
    </>
  )
}

export default App
