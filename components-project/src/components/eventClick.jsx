const eventClick = () => {
  // Função do evento de click
  const handleEventClick = (e) => {
    console.log('ativou o evento')
  }

  const renderAlgumaCoisa = (x) => {
    if (x) {
      return <h1>Isso foi renderizado</h1>
    } else {
      return <h1>Isso foi também foi renderizado</h1>
    }
  }

  return (
    <div>
      <button type="button" onClick={
        // Evento no console
        //arrowFunction ja tem umm return embutido
        () => console.log('Clique de evento')
        }>Clique Aqui</button>
        <hr />
        <button type="button" onClick={handleEventClick}>Clique Aqui 02</button>
        <hr />
        {renderAlgumaCoisa(true)}
        {renderAlgumaCoisa(false)}
    </div>
  )
}

export default eventClick
