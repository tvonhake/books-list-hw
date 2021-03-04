import React from 'react'

const Book = (props) => {
  const {id, title, author} = props
  return (
    <div>
      <hr></hr>
      {/* <p>id: {id}</p> */}
      <p>title: {title}</p>
      <p>author: {author}</p>
    </div>
  )

}

export default Book