import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import ReviewList from './components/ReviewList'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [ form, setForm ] = useState({ pizzaplace: '', date: '', custName: '', review: '', rating: '', id: uuidv4() })
  const [ reviews, setReviews ] = useState([])
  const [ editing, setEditing ] = useState(false)
  const [ rating, setRating ] = useState(0)
  const [ date, setDate ] = useState(new Date())
  
  return (
    <div className='app'>
      <Header 
        Header={'Pizza Place Reviews'} 
      />
      <Form 
        form={form} 
        setForm={setForm} 
        reviews={reviews} 
        setReviews={setReviews} 
        editing={editing}
        setEditing={setEditing}
        rating={rating}
        setRating={setRating}
        date={date}
        setDate={setDate}
      />
      <ReviewList 
        reviews={reviews}
        setReviews={setReviews}
        setForm={setForm}  
        setEditing={setEditing}
        setRating={setRating}
        setDate={setDate}
      />
    </div>
  )
}

export default App