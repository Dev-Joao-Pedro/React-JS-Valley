import { useEffect } from "react";
import { useState } from "react"
import { deleteCat, getCats } from "../requests";
import { Link } from "react-router-dom";

const Home = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCats(await getCats());
    }
    fetchData();
  }, [])

  return (
    <div>
      <h1>Aqui estão nossos gatos</h1>

      {
        cats.map(cat => (
          <figure key={cat.id}>
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>

            <Link to={`/cat/${cat.id}`}>Veja mais informações</Link>
            <button type="button" onClick={async () => await deleteCat(cat.id)}>Deletar</button>
          </figure>
        ))
      }
    </div>
  )
}

export default Home
