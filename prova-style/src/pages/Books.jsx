import React, { useEffect, useState } from 'react'
import './Books.css'
import axios from 'axios'
import Book from '../components/Book';



const Books = () => {  

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Erro ao consumir API:', error);
      });
  }, []);


  return (
    <>
    <div className='body-books container'>
        <div className='card row'>
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Books
