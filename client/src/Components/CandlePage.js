import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Reviews from './Reviews'

export default function CandlePage({ candles, setCandles, favoriteCandles, setFavoriteCandles, currentUser, setCurrentUser, updateCandles}) {
    const params = useParams()
    let candle = candles.find(candle => candle.id === parseInt(params.id))
    let liked = favoriteCandles.includes(candle.name)

    function updateFavorites(newFavorite){
      let newFavorites = [...favoriteCandles, newFavorite]
      setFavoriteCandles(newFavorites)
      updateCandles()
    }

    
      function handleLike(e){
        e.preventDefault()
        if(liked){
          fetch('/favorites', {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({"candle_id": candle.id})
          })
          const updatedFavorites = favoriteCandles.filter((c) => c !== candle.name)
          setFavoriteCandles(updatedFavorites)
          updateCandles()
          // setLiked(!liked)
        } else {
          fetch('/favorites', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({"candle_id": candle.id})
          })
          .then((r) => r.json())
          .then((newFavorite) => updateFavorites(newFavorite.candle.name))
          // setLiked(!liked)
        }
      }

  return (
    <>
        <div className='candle-page'>
            <h3 className='card-title'>{candle.name}</h3>
            <img className='card-image' src={candle.image_url} alt={candle.name}/> 
            <p><i>Notes: {candle.notes}</i></p>
            <p className='card-info'>{candle.price} | {candle.size} | {candle.producer}</p>
            <div className='card-engage'>
                <div onClick={handleLike} className='card-favorite'>
                    {liked ? <i className="fa-solid fa-heart"></i> :  <i className="fa-regular fa-heart"></i>} 
                    {" "}{candle.favorites.length === 1 ? (candle.favorites.length) + " Like" : (candle.favorites.length) + " Likes"}
                    </div>
                <Link to={`/candles/${candle.id}`}>
                    <div className='card-review'><i className="fa-regular fa-comment"></i> {" "}{candle.reviews.length === 1 ? (candle.reviews.length ) + " Review" : (candle.reviews.length ) + " Reviews"}</div>
                </Link>
            </div>
        </div>
        <Reviews updateCandles={updateCandles} currentUser={currentUser} setCurrentUser={setCurrentUser} candle={candle}/>
    </>
  )
}