import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSingleCat } from "../requests";

const Cat = () => {
  const { id } = useParams();
  const [cat, setCat] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setCat(await getSingleCat(id));
    }
    fetchData();
  }, [id])

  return (
    <div>
      <h1>Miau {cat.name}</h1>
      <p>{cat.description}</p>
    </div>
  )
}

export default Cat
