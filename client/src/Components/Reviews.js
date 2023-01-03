import React, { useState } from 'react'
import Review from './Review'

export default function Reviews({candle, currentUser, setCurrentUser}) {
    const [review, setReview] = useState("")
    const [reviews, setReviews] = useState(candle.reviews)



    let displayReviews = reviews.map((review) => {
        return <Review review={review} key={review.id}/>
    })

    //gets array of usernames for users that have reviewed current candle
    let reviewers = candle.reviews.map((review) => review.user.username)

    //returns bool of whether or not current user has reviewed current candle
    let hasReviewed = reviewers.includes(currentUser.username)

    function updateReviews(updatedReview){
        const updatedReviews = reviews.map((review) => {
            if (review.id === updatedReview.id){
                return updatedReview
            }
            else {return review}
        })
        setReviews(updatedReviews)
    }


 
    function onSubmit(e){
        e.preventDefault()
        let newReview = {
            "body": review,
            "candle_id": candle.id
        }
        if(hasReviewed){
            fetch('/reviews', {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newReview)
            })
            .then((r) => r.json())
            .then((updatedReview) => updateReviews(updatedReview) )
            setReview("")
        } else{
            fetch('/reviews', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newReview)
              })
              .then((r) => r.json())
              .then((newReview) => setReviews([...reviews, newReview]))
              setReview("")
              setCurrentUser({
                ...currentUser,
                reviews: [...currentUser.reviews, reviews[-1]]
              })
        }
   
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
