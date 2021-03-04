import React from 'react'

const Book = (props) => {
  const {isbn, title, author, deleteBook} = props
  return (
    <div>
      <hr></hr>
      <p>title: {title}</p>
      <p>author: {author}</p>
      <p>isbn: {isbn}</p>
      <button onClick={() => deleteBook(isbn)}>Delete this book</button>
    </div>
  )

}

export default Book