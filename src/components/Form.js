import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Rating } from 'react-simple-star-rating'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export const Form  = ( { form, setForm, reviews, setReviews, editing, setEditing, rating, setRating, date, setDate } ) => {

    const handleChange = e => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        form.rating = rating
        form.date = date
        setReviews([ ...reviews, form ])
        setForm({ pizzaplace: '', date: '', custName: '', review: '', rating: '', id: uuidv4() })
        setRating(0)
        setDate(new Date())
    }

    const handleUpdate = e => {
        e.preventDefault()
        setEditing(false)
        form.rating = rating
        form.date = date
        const updatedReviews = reviews.map(review => review.id === form.id ? form : review)
        setReviews(updatedReviews) 
        setForm({ pizzaplace: '', date: '', custName: '', review: '', rating: '', id: uuidv4() })
        setRating(0)
        setDate(new Date())
    }

    const handleRating = e => {
        setRating(e)
    }

    const handleDate = e => {
        setDate(e)
    }

    return(
        <form className='form' onSubmit={ editing ? handleUpdate : handleSubmit }>
            <h2>Leave a Review</h2>
            <label htmlFor='pizzaplace'>Pizza Place</label>
            <input 
                type='text'
                placeholder='Pizza Place Name...'
                name='pizzaplace'
                id='pizzaplace'
                autoComplete='off'
                value={form.pizzaplace}
                onChange={handleChange}
            />
            <label htmlFor='date'>Date of visit</label>
             <DatePicker 
                selected={date}
                onSelect={handleDate}
            />
            <label htmlFor='custName'>Name</label>
            <input 
                type='text'
                placeholder='Your Name...'
                name='custName'
                id='custName'
                autoComplete='off'
                value={form.custName}
                onChange={handleChange}
            />
            <label htmlFor='review'>Review</label>
            <textarea 
                placeholder='What did you think?'
                name='review'
                id='review'
                value={form.review}
                onChange={handleChange}
            />
            <label htmlFor='rating'>Rating</label>
            <Rating 
                ratingValue={rating}
                onClick={handleRating}
            />
            <button type='submit'>
                { editing ? 'Update' : 'Submit' }
            </button>
        </form>
    )
}

export default Form