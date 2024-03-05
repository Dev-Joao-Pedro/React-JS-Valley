import { useState } from "react"
import { createCat } from "../requests";

const Create = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit() {
    await createCat({ name, description });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nome: 
        <input
          type="text"
          id="name"
          placeholder="Nome do gato"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label htmlFor="description">
        Descrição: 
        <input
          type="text"
          id="description"
          placeholder="Nome do gato"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">enviar</button>
    </form>
  )
}

export default Create
