import { useState } from "react";

const Book = ({ book }) => {

    const [number, setNumber] = useState('');

    const handleMostrarNumero = () => {
        console.log('Avaliação:', number)
    }
    return (
        <div className='col-12 col-lg-4'>
            <h3 key={book.id}>Titulo: {book.Title}</h3>
            <p className='p-books' key={book.id}>Ano: <span>{book.Year}</span></p>
            <p className='p-books' key={book.id}>Editora: <span>{book.Publisher}</span></p>
            <p className='p-books' key={book.id}>Páginas: <span>{book.Pages}</span></p>
            <div className='form'>
                <input className='input-books' value={number} type="number" onChange={(e) => setNumber(e.target.value)} min={0} max={10} />
                <button className='button-books' type='button' onClick={handleMostrarNumero}>Avaliar</button>
            </div>
        </div>
    )
}

export default Book
