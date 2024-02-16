import { useState } from 'react'
import './App.css'

// Meu componentes
import MyCssComponent from './components/myCssComponent'
import Title from './components/title'

function App() {
  const [count, setCount] = useState(0)
  const fator = 1
  const goldTitle = true

  return (
    <>
      {/* CSS GLOBAL */}
      <h1>CSS GLOBAL</h1>
      {/* CSS COMPONENT */}
      <MyCssComponent />
      <p>Esse é o parágrafo do APP</p>
      {/* CSS INLINE */}
      <p style={{ 
        color: '#ffffff', 
        border: 'none', 
        padding: '25px', 
        borderTop: '3px solid red',
        borderRadius: '10px' 
        }}>Esse elemento tem CSS STYLE</p>
      {/* CSS INLINE DINÂMICO */}
      <p style={fator < 10 ? {color: 'gold', fontSize: '20px'} : {color: 'pink', fontSize: '22px'}}>Esse CSS é DINÂMICO</p>
      <p style={fator > 10 ? {color: 'gold', fontSize: '20px'} : {color: 'pink', fontSize: '22px'}}>Esse CSS é DINÂMICO</p>
      {/* CSS CLASS DINÂMICO */}
      <h2 className={goldTitle ? 'gold-title' : 'red-title'}>Esse titulo é alterado por uma classe</h2>
      {/* CSS MODULE */}
      <Title />
    </>
  )
}

export default App
