import React from 'react'
import { FaTrash, FaEdit, FaStar  } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

const ReviewItem = ({ review, handleDelete, handleEdit }) => {
    return (
        <div className={(review.rating/20) <= 2 ? 'reviewItemBad' : (review.rating/20) === 3 ? 'reviewItemMedium' : 'reviewItemGood'}> 
            <div id='pizzaPlaceItem'>{review.pizzaplace}</div>
            <div id='starItem'>
                {[...Array(review.rating/20).keys()].map(el => el = <FaStar key={uuidv4()} />)}
            </div>
            <div id='reviewItem'>{review.review}</div>
            <div id='custNameItem'>{review.custName}</div>
            <div id='dateItem'>{review.date.toDateString()}</div>
            <div className='buttonItem'>
                <button id='buttonDelete' onClick={() => handleDelete(review.id)} >
                    <FaTrash />
                </button>
                <button id='buttonEdit' onClick={() => handleEdit(review.id)} >
                    <FaEdit />
                </button>
            </div>
        </div>
    )
}

export default ReviewItem