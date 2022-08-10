import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import ReviewList from './components/ReviewList'
import { v4 as uuidv4 } from 'uuid'
import { db, collection, getDocs } from './components/firebaseConfig'
import { doc, setDoc, deleteDoc, updateDoc } from "firebase/firestore"; 

const App = () => {
  const [ form, setForm ] = useState({ pizzaplace: '', date: '', custName: '', review: '', rating: '', id: uuidv4() })
  const [ reviews, setReviews ] = useState([])
  const [ editing, setEditing ] = useState(false)
  const [ rating, setRating ] = useState(0)
  const [ date, setDate ] = useState(new Date())

  useEffect(() => {
  getReviews(db)
}, [])

async function getReviews(dataBase) {
  const reviews = collection(dataBase, 'reviews')
  const reviewSnapshot = await getDocs(reviews)
  const reviewList = reviewSnapshot.docs.map(doc => doc.data())
  reviewList.forEach(review => review.date = review.date.toDate()) // date conversion from default firebase timestamp
  setReviews(reviewList)
}

const saveReview = (review) =>
    setDoc(doc(db, "reviews", review.id), {
    pizzaplace: review.pizzaplace, 
    date: review.date, 
    custName: review.custName, 
    review: review.review, 
    rating: review.rating, 
    id: review.id
})

const deleteReview = (id) => {
  deleteDoc(doc(db, 'reviews', id))
}

const updateFbReview = (review) => {
  updateDoc(doc(db, 'reviews', review.id), {
    pizzaplace: review.pizzaplace, 
    date: review.date, 
    custName: review.custName, 
    review: review.review, 
    rating: review.rating, 
    id: review.id
  })
}
  
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
        saveReview={saveReview}
        updateFbReview={updateFbReview}
      />
      <ReviewList 
        reviews={reviews}
        setReviews={setReviews}
        setForm={setForm}  
        setEditing={setEditing}
        setRating={setRating}
        setDate={setDate}
        saveReview={saveReview}
        deleteReview={deleteReview}
      />
    </div>
  )
}

export default App
