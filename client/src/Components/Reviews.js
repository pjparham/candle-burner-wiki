import React, { useState } from 'react'
import Review from './Review'

export default function Reviews({candle, currentUser, setCurrentUser, updateCandles, candles, setCandles, userReviews, setUserReviews}) {
    //state for controlled form
    const [review, setReview] = useState("")

    function onDelete(deletedReview){
        fetch(`/reviews/${deletedReview.id}`, {
          method: "DELETE",
        })
        .then((r) => {
            if(r.ok){
                //sets state for user reviews
                let updatedReviews = userReviews.filter((review) => review.id !== deletedReview.id)
                setUserReviews(updatedReviews)
                //sets state for candles
                let updatedCandleReviews = candle.reviews.filter((review) => review.id !== deletedReview.id)
                let updatedCandles = candles.map((aCandle) => {
                    if (aCandle.id === candle.id){
                        let updatedCandle = {
                            ...candle,
                            reviews: updatedCandleReviews
                        }
                        return updatedCandle
                    } else {return aCandle}
                })
                setCandles(updatedCandles)
            }
        })
      }


    function updateReviews(updatedReview){
        //sets userReview state to include updated review
        let updatedUserReviews = userReviews.map((review) => {
            if (review.id === updatedReview.id){
                return updatedReview
            } else {return review}
        })
        setUserReviews(updatedUserReviews)
        //sets candles state to include updated review
        // updatedCandleReviews gets the correct review array for the current candle
        let updatedCandleReviews = candle.reviews.map((review) =>{
            if (review.id === updatedReview.id){
                return updatedReview
            } else {return review}
        })
        let updatedCandles = candles.map((aCandle) => {
            if (aCandle.id === candle.id){
                let updatedCandle = {
                    ...candle,
                    reviews: updatedCandleReviews
                }
                return updatedCandle
            } else {return aCandle}
        })
        setCandles(updatedCandles)
    }

    function addReview(newReview){
        setUserReviews([...userReviews, newReview])
        let updatedCandles = candles.map((aCandle) => {
            if (aCandle.id === candle.id){
                let updatedCandle = {
                    ...candle,
                    reviews: [...candle.reviews, newReview]
                }
                return updatedCandle
            } else {return aCandle}
        })
        setCandles(updatedCandles)
    }

    function onSubmit(e){
        e.preventDefault()
        let newReview = {
            "body": review,
            "candle_id": candle.id
        }
        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview)
            })
            .then((r) => r.json())
            .then((newReview) => addReview(newReview))
            setReview("")
    }

    let displayReviews = candle.reviews.map((review) => {
        return <Review updateReviews={updateReviews} onDelete={onDelete} currentUser={currentUser} review={review} key={review.id}/>
    })

  return (
    <div className="reviews-container">
        <h1 className="reviews-title">Reviews</h1>
        {displayReviews}
        <h1>Write a review:</h1>
        <form onSubmit={onSubmit}>
            <textarea value={review} onChange={e => setReview(e.target.value)} className="review-input" type="textarea" id="review" name="review"></textarea><br></br>
            <div onClick={onSubmit} className='review-submit-button'>Submit</div>
        </form>
    </div>
  )
}
