import React from 'react'
import Review from './Review'

export default function Reviews({candle}) {
    let reviews = candle.reviews

    let displayReviews = reviews.map((review) => {
        return <Review review={review} key={review.id}/>
    })
    console.log(reviews)
  return (
    <div className="reviews-container">
        <h1 className="reviews-title">Reviews</h1>
        {displayReviews}
    </div>
  )
}
