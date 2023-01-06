import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileReviews({ review }) {
    let reviewPreview = review.body.slice(0, 15)
  return (
    <Link className='profile-link' to={`/candles/${review.candle.id}`}>
      <div className='profile-review'>
          <div className='profile-review-title'>{review.candle.name}</div>
          <div>"{reviewPreview}..."</div>
      </div>
     </Link>
  )
}
