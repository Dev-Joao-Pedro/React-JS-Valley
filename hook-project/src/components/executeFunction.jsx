import React from 'react'

const executeFunction = (myFunction) => {
  return (
    <div>
      <button type='button' onClick={myFunction}>Clique para executar a função</button>
    </div>
  )
}

export default executeFunction