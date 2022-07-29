import React from 'react'
import ReviewItem from './ReviewItem'
import { v4 as uuidv4 } from 'uuid'

const ReviewList = ({ reviews, setReviews, setForm, setEditing, setRating, setDate, saveReview }) => {

    const handleDelete = id => {
        const updatedreviews = reviews.filter(review => review.id !== id)
        setReviews(updatedreviews)
        console.log(updatedreviews) 
        //saveReview(updatedreviews)
        setForm({ pizzaplace: '', date: '', custName: '', review: '', rating: '', id: uuidv4() })
        setRating(0)
        setDate(new Date())
        setEditing(false)
    }

    const handleEdit = id => {
        const editedReview = reviews.filter(review => review.id === id)
        setForm(editedReview[0])
        setRating(editedReview[0].rating)
        setDate(editedReview[0].date)
        setEditing(true)
        console.log(reviews) 
        //saveReview(reviews)
    }

    return (
        <div className='reviewList'>
            {reviews.map((review) => ( 
                <ReviewItem 
                    key={review.id}
                    review={review} 
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                /> 
                ))}
        </div>
    )
}

export default ReviewList