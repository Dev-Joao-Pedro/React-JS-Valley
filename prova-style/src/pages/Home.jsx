import React from 'react'
import './Home.css'
import LivroImagem from '../assets/images/—Pngtree—vintage book book free of_4407813.png'

const Home = () => {
  return (
    <>
        <div className='main'>
            <div className='left'>
            <p>Bem vindo a Stephen King</p>
            <h1>AVALIE SEUS LIVROS</h1>
            <p>Dê vida à sua paixão pela leitura avaliando os livros em nosso website! Sua opinião não apenas guia outros leitores na busca pelo próximo livro perfeito, mas também alimenta o ciclo de feedback essencial para autores e editoras, ajudando a moldar o futuro da literatura.</p>
            </div>
            <div className='right'>
                <img src={LivroImagem} alt="" />
            </div>
        </div>
    </>
  )
}

export default Home
