import React, { useState } from 'react'

const data = () => {

    let someData = 10
    const [anotherNumber, setAnotherNumber] = useState(10)
    console.log(anotherNumber)

    return (
        <div>
            <div>
                <p>Valor: { someData }</p>
                <button type='button' onClick={() => (someData = 15)}>Mudar Valor</button>
            </div>
            <hr />
            <div>
                <p>Valor: {anotherNumber}</p>
                <button type='button' onClick={() => setAnotherNumber(20)} style={{marginRight: 5}}>Mudar Valor</button>
                <button type='button' onClick={() => setAnotherNumber(10)}>Voltar ao Valor Inicial</button>
            </div>
        </div>
    )
}

export default data