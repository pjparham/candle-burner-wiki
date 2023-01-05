import React from 'react'

export default function Review({review, onDelete, currentUser}) {

  function onDeleteClick(){
    onDelete(review)
  }

  return (
    <div className="review-container">
        <div className="review-text">
            <div className="review-username">
              {review.user.username}
            </div>
            {review.user.id === currentUser.id ? <div onClick={onDeleteClick} className="review-delete"><i className="fa-solid fa-x"></i></div> : null}
            <p>"{review.body}"</p>
        </div>
    </div>
  )
}
