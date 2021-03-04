import './App.css';
import React, {useState, useEffect} from 'react'
import Books from './Books'
import axios from 'axios'
import BookForm from './BookForm'

const dummyBooks = [
  {
    "id": 1,
    "title": "Farenheit 451",
    "author": "Ray Bradbury"
  },
  {
    "id": 2,
    "title": "Brave New World",
    "author": "Aldous Huxley"
  }]

function App() {
  //when this component mounts (renders), load data
  useEffect(()=>{
    loadData()

  }, []) //only triggers once by putting array here

  const loadData = async () =>{
    try{
      let res = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
      setBooks(res.data.data)
      setLoading(false)
      // debugger
    }catch(err){
      console.log(err)
      alert('Error occurred check log')
      setLoading(false)
    }
  }

  const deleteBook = (isbn) => {
    console.log('deleteBookOne called')
    console.log(books)
    let filterBooks = books.filter(book => book.isbn !== isbn)
    setBooks(filterBooks)
    console.log(filterBooks)
  }

  const addBook = (book) =>{
    console.log('add book called')
    console.log(book)
    let idBook = {...book, isbn:Math.random()}
    //add new book to array
    setBooks([idBook, ...books])
  }

  const [books, setBooks]= useState([])
  const [loading, setLoading]= useState(true)
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="App">
      <h1>Navigation</h1>
      <button onClick={()=>setShowForm(!showForm)}>{showForm ? "Hide Form" : "Create Book"}</button>
      {showForm && <BookForm addBook={addBook}/>}
      {loading && <p>Loading books...</p>}
      <Books books={books} deleteBook={deleteBook} loading={loading}/>
    </div>
  )
}

export default App;
