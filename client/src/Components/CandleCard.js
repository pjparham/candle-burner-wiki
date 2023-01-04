import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CandleCard({ candle, favoriteCandles, setFavoriteCandles, candles, setCandles, updateCandles }) {
  const { name, notes, price, producer, image_url, size } = candle
  const [likeCount, setLikeCount] = useState(candle.favorites.length)
  // const [liked, setLiked] = useState(favoriteCandles.includes(name))
  let liked = favoriteCandles.includes(name)

 

  function updateFavorites(newFavorite){
    let newFavorites = [...favoriteCandles, newFavorite.candle.name]
    setFavoriteCandles(newFavorites)
    updateCandles()
    setLikeCount(candle.favorites.length)
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
      const updatedFavorites = favoriteCandles.filter((c) => c !== name)
      setFavoriteCandles(updatedFavorites)
      updateCandles()
      setLikeCount(candle.favorites.length)
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
      .then((newFavorite) => updateFavorites(newFavorite))
      // setLiked(!liked)
    }
  }


  return (
    <div className='candle-card'>
        <h3 className='card-title'>{name}</h3>
        <img className='card-image' src={image_url} alt={name}/> 
        <p><i>Notes: {notes}</i></p>
        <p className='card-info'>{price} | {size} | {producer}</p>
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
  )
}
