import { useState } from "react"

const conditionalRender = () => {

    const [x] = useState(true)
    const [name, setName] = useState('Paulo')

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se X for igual a TRUE.</p>}
            {!x && <p>Se X for igual a FALSE.</p>}
            <hr />
            {name === 'João' ? (
                <div>
                    <h4>Eu me chamo João</h4>
                </div>
            ) : (
                <div>
                    <h4>Nome não encontrado!</h4>
                </div>
            )}
            <button type="button" onClick={() => setName('João')}>Alterar nome</button>
        </div>
    )
}

export default conditionalRender
