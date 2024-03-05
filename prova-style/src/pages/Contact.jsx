import { useState } from 'react'
import './Contact.css'

const Contact = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
  
    const handleEnvioFormulario = () => {
      console.log('Nome:', nome);
      console.log('Email:', email);
      console.log('Mensagem:', mensagem);
    };

  return (
    <div className='body'>
        <form>
          <h1 className='h1-contact'>Entre em contato conosco</h1>
        <div className='forms'>
            <label htmlFor="nome">Informe seu nome:</label>
            <input type="text" id='nome' value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className='forms'>
            <label htmlFor="email">Informe seu e-mail:</label>
            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='forms'>
            <label htmlFor='mensagem'>Mensagem:</label>
            <textarea type="text" id='mensagem' value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
        </div>
        <button className='button-contact' type='button' onClick={handleEnvioFormulario}>Enviar</button>
        </form>
    </div>
  )
}

export default Contact
