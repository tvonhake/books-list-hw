import React from 'react'
import Book from './Book'

const Books = (props) => {
  const {books, deleteBook, loading} = props

  const renderBooks = () => {
    if ((books.length === 0) && (loading == false)){
      return (<p>No books</p>)
    }

    return books.map( book => {
      return <Book deleteBook={deleteBook} key={book.isbn} {...book}/>
    })
  }

  return(
    <div>
      <h1>Books list:</h1>
      <div className="books-container">
        {renderBooks()}
      </div>
      
    </div>
  )
}

export default Books