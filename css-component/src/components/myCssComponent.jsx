import React from 'react'
import './myCssComponent.css'

const myCssComponent = () => {
  return (
    <div>
      <h1>CSS COMPONENT</h1>
      <p>Esse parágrafo é do componente!</p>
      <p className='component-paragraph'>Novo parágrafo do COMPONENTE</p>
    </div>
  )
}

export default myCssComponent
