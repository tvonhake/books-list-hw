import './App.css';
import React, {useState, useEffect} from 'react'
import Books from './Books'
import axios from 'axios'

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
      debugger
    }catch(err){
      console.log(err)
      alert('Error occurred check log')
    }
  }

  const [books, setBooks]= useState([])

  return (
    <div className="App">
      <h1>Navigation</h1>
      <Books books={books} />
    </div>
  )
}

export default App;
