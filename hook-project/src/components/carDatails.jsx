const carDatails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h3>Detalhes do carro: </h3>
        <ul>
            <li>Marca: {brand} </li>
            <li>Km: {km} </li>
            <li>Cor: {color} </li>
        {newCar && <p>Este carro é novo</p>}
        {!newCar && <p>Este carro não é novo</p>}
        </ul>
    </div>
  )
}

export default carDatails
