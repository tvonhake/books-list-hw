import React, {useState} from 'react'

const BookForm = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')

  const handleSubmit = (event) => {
    const {addBook} = props
    console.log(event)
    event.preventDefault()
    console.log('submitted')

    console.log(title)
    console.log(author)

    //add to books array in app.js
    addBook({title: title, author: author, genre: genre})
    setTitle('')
    setAuthor('')
  }
  return (
    <div className="input-form">
      <h2>form here</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-form-fields">
          <p>Title</p>
          <input 
            value={title}
            onChange={(event)=>{setTitle(event.target.value)}}
          />
          <p>Author</p>
          <input 
            value={author}
            onChange={(event)=>{setAuthor(event.target.value)}}
          />
          <p>Genre</p>
          <input 
            value={genre}
            onChange={(event)=>{setGenre(event.target.value)}}
          />
        </div>
        <div className="input-form-buttons">
          <button type='submit'>Create Book</button>
        </div>
      </form>
    </div>
  )
}

export default BookForm