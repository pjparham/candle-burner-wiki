import React, { useState } from 'react'

export default function Review({review, onDelete, currentUser, updateReviews }) {
  const [editing, setEditing] = useState(false)
  const [reviewBody, setReviewBody] = useState(review.body)

  function onDeleteClick(){
    onDelete(review)
  }

  function handleUpdate(e){
    e.preventDefault()
    let updatedReview = {
      "body": reviewBody,
    }
    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview)
    })
    .then((r) => r.json())
    .then((updatedReview) => updateReviews(updatedReview))
    setEditing(false)
            // if(hasReviewed){
        //     fetch('/reviews', {
        //         method: "PATCH",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(newReview)
        //     })
        //     .then((r) => r.json())
        //     .then((updatedReview) => updateReviews(updatedReview) )
        //     setReview("")
  }


  if (editing){
    return (
      <div className="review-container">
        <div className="review-text">
          <div className="review-username">
            {review.user.username}
          </div>
          <div onClick={() => setEditing(false)} className="review-delete"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></div>
          <form onSubmit={null}>
            <textarea className="review-update" value={reviewBody} onChange={e => setReviewBody(e.target.value)}/>
          </form>
          <div onClick={handleUpdate} className="review-delete review-send"><i className="fa-regular fa-paper-plane"></i></div>
        </div>
      </div>
    )
  }
  return (
    <div className="review-container">
        <div className="review-text">
            <div className="review-username">
              {review.user.username}
            </div>
            {review.user.id === currentUser.id ? 
              <>
                <div onClick={onDeleteClick} className="review-delete"><i className="fa-solid fa-x"></i></div>
                <div onClick={() => setEditing(true)} className="review-delete"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></div>
              </> : null}
            <p>"{review.body}"</p>
        </div>
    </div>
  )
}
