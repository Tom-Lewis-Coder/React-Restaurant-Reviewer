import React from 'react'
import { FaTrash, FaEdit, FaStar  } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

const ReviewItem = ({ review, handleDelete, handleEdit }) => {
    return (
        <div className={(review.rating/20) <= 2 ? 'reviewItemBad' : (review.rating/20) === 3 ? 'reviewItemMedium' : 'reviewItemGood'}> 
            <h2 className='pizzaPlace'>{review.pizzaplace}</h2>
            <h3 className='date'>{review.date.toDateString()}</h3>
            <h3 className='custName'>{review.custName}</h3>
            <h3 className='review'>{review.review}</h3>
            <h3 className='star'>
                {[...Array(review.rating/20).keys()].map(el => el = <FaStar key={uuidv4()} />)}
            </h3>
            <div className='buttons'>
                <button onClick={() => handleDelete(review.id)} >
                    <FaTrash />
                </button>
                <button onClick={() => handleEdit(review.id)} >
                    <FaEdit />
                </button>
            </div>
        </div>
    )
}

export default ReviewItem
