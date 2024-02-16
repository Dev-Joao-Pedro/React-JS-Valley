import { useState } from 'react'
import './App.css'

// Meus componentes
import Data from './components/data'
import ListRender from './components/listRender'
import ConditionalRender from './components/conditionalRender'
import ShowUserName from './components/showUserName'
import CarDatails from './components/carDatails'
import Container from './components/container.JSX'
import ExecuteFunction from './components/executeFunction'

function App() {
  const [count, setCount] = useState(0)
  const userName = 'Caça Rato'
  const [newUser] = useState('Blue Pen')

  const cars = [
    {id:1, brand:'Porsche', color:'Vermelho da cor de sangue', newCar: true, km: 0},
    {id:2, brand:'McLaren', color:'Preto', newCar: false, km: 49000},
    {id:3, brand:'Lambourghini', color:'Laranjão', newCar: false, km: 12000}
  ]

  function showMessage () {
    console.log('Evento do componente PAI.')
  }

  return (
    <>
      <h1>Hooks</h1>
      <Data />
      <hr />
      <ListRender />
      <hr />
      <ConditionalRender />
      <hr />
      <ShowUserName name={newUser} />
      <hr />
      <CarDatails brand='Fiat' km={125000} color='Verdão' newCar={false} />
      <CarDatails brand='Ford' km={0} color='Amarelão' newCar={true} />
      <CarDatails brand='Toyota' km={34000} color='Azul da cor do mar' newCar={false} />
      <hr />
      {cars.map((car) => (
        <CarDatails
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
        newCar={car.newCar}
        />
      ))}
      <Container newValue='teste'>
        <p>Este conteudo é um children</p>
      </Container>
      <Container newValue='Loading...'>
        <p>Este conteudo é novo</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
    </>
  )
}

export default App
