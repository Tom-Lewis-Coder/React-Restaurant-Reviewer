import React from 'react'
import ReviewItem from './ReviewItem'

const ReviewList = ({ reviews, setReviews, setForm, setEditing }) => {

    const handleDelete = id => {
        const updatedreviews = reviews.filter(review => review.id !== id)
        setReviews(updatedreviews)
    }

    const handleEdit = id => {
        const editedReview = reviews.filter(review => review.id === id)
        setForm(editedReview[0])
        setEditing(true)
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
