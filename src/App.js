import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import ReviewList from './components/ReviewList'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [ form, setForm ] = useState({ pizzaplace: '', review: '', rating: '', id: uuidv4() })
  const [ reviews, setReviews ] = useState([])
  const [ editing, setEditing ] = useState(false)
  const [ rating, setRating ] = useState(0)
  
  return (
    <div className="app">
      <h1>Pizza Place Reviews</h1>
      <Form 
        form={form} 
        setForm={setForm} 
        reviews={reviews} 
        setReviews={setReviews} 
        editing={editing}
        setEditing={setEditing}
        rating={rating}
        setRating={setRating}
      />
      <ReviewList 
        reviews={reviews}
        setReviews={setReviews}
        setForm={setForm}  
        setEditing={setEditing}
        setRating={setRating}
      />
    </div>
  )
}

export default App
