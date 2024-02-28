import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [iamgens, setImagens] = useState([])

  useEffect(()=> {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then((res)=>res.json())
    .then((json) => {
      setImagens(json)
      .catch((err) => console.log(err))
    })
  },[])
  

  return (
    <>
    <h1>biel corno</h1>
    {iamgens && iamgens.map((imagem) =>(
    <img src={imagem.url} alt="" key={imagem.id} width={imagem.width} height={imagem.height} />
    
    ))}
    </>
  )
}

export default App
