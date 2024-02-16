import { useState } from 'react'
import './App.css'
import icon from "./assets/images/react-logo-removebg-preview.png"

// Meu componentes
import FirstComponent from './components/firstComponent'
import SecondComponent from './components/secondComponent'
import EventClick from './components/eventClick'
import MessageState from './components/messageState'
import ExecuteFunction from './components/executeFunction'

function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <div className='App'>
        {/* Comentario */}
        <h1>Componentes</h1>
        { 2 + 32 }
        <FirstComponent />
        { 'Jotinha' + 'Dcria' }
        <SecondComponent />
        <EventClick />
        {/* Imagem da PUBLIC */}
        <img src="/react-logo-removebg-preview.png" alt="Imagem da Public" />
        {/* Imagem importada */}
        <img src={icon} alt="Imagem importada" />
        <MessageState msg={message} />
        <ExecuteFunction handleMessage={handleMessage} />
      </div>
    </>
  )
}

export default App
