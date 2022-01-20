import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Rating } from 'react-simple-star-rating'

export const Form  = ( { form, setForm, reviews, setReviews, editing, setEditing } ) => {

    const [ rating, setRating ] = useState(0)

    const handleChange = e => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        form.rating = rating
        setReviews([ ...reviews, form ])
        setForm({ pizzaplace: '', review: '', rating: '', id: uuidv4() })
        setRating(0)
    }

    const handleUpdate = e => {
        e.preventDefault()
        setEditing(false)
        form.rating = rating
        const updatedReviews = reviews.map(review => review.id === form.id ? form : review)
        setReviews(updatedReviews)
        setForm({ pizzaplace: '', review: '', rating: '', id: uuidv4() })
        setRating(0)
    }

    const handleRating = e => {
        setRating(e)
    }

    return(
        <form className='form' onSubmit={editing ? handleUpdate : handleSubmit}>
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
            <button 
                type='submit'>{editing ? 'Update' : 'Submit'}
            </button>
        </form>
    )
}

export default Form