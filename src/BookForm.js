import React, {useState} from 'react'

const BookForm = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (event) => {
    const {addBook} = props
    console.log(event)
    event.preventDefault()
    console.log('submitted')

    console.log(title)
    console.log(author)

    //add to books array in app.js
    addBook({title: title, author: author})
    setTitle('')
    setAuthor('')
  }
  return (
    <div>
      <h2>form here</h2>
      <form onSubmit={handleSubmit}>
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
        <div>
        <button type='submit'>Create Book</button>
        <button type='reset'>Reset Form</button>
        </div>
      </form>
    </div>
  )
}

export default BookForm