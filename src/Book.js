import React from 'react'

const Book = (props) => {
  const {isbn, title, author, genre, deleteBook} = props
  return (
    <div className="book-container">
      <div className="book-header">
        <h1>{title}</h1>
        <div>
          <p>Author: {author}</p>
          <p>Genre: {genre}</p>
          <p>isbn: {isbn}</p>
        </div>
      </div>
      <button onClick={() => deleteBook(isbn)}>Delete this book</button>
    </div>
  )

}

export default Book