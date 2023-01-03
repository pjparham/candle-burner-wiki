import React from 'react'

export default function Review({review}) {
    console.log(review)
    let user = review.user
  return (
    <div className="review-container">
        <div className="review-text">
            <p className="review-username">{user.username}</p>
            <p>"{review.body}"</p>
        </div>
    </div>
  )
}
