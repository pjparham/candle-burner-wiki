import React, { useState } from 'react'
import Review from './Review'

export default function Reviews({candle}) {
    const [review, setReview] = useState("")
    const [reviews, setReviews] = useState(candle.reviews)


    let displayReviews = reviews.map((review) => {
        return <Review review={review} key={review.id}/>
    })

    function onSubmit(e){
        e.preventDefault()
        console.log(review)
    }

  return (
    <div className="reviews-container">
        <h1 className="reviews-title">Reviews</h1>
        {displayReviews}
        <h1>Write your own review:</h1>
        <form onSubmit={onSubmit}>
            <textarea value={review} onChange={e => setReview(e.target.value)} className="review-input" type="textarea" id="review" name="review"></textarea><br></br>
            <input className='review-submit' type="submit" value="Submit"/>
        </form>
    </div>
  )
}
