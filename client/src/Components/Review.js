import React from 'react'

export default function Review({review, hasReviewed, onDelete}) {

  function onDeleteClick(){
    onDelete(review)
  }

    let user = review.user
  return (
    <div className="review-container">
        <div className="review-text">
            <div className="review-username">
              {user.username}
            </div>
            {hasReviewed ? <div onClick={onDeleteClick} className="review-delete"><i class="fa-solid fa-x"></i></div> : null}
            <p>"{review.body}"</p>
        </div>
    </div>
  )
}
