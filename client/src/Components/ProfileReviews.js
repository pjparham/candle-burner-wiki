import React from 'react'

export default function ProfileReviews({ review }) {
    console.log(review)
    let reviewPreview = review.body.slice(0, 15)
  return (
    <div className='profile-review'>
        <div className='profile-review-title'>{review.candle.name}</div>
        <div>"{reviewPreview}..."</div>
        
    </div>
  )
}
