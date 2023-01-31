import React from 'react'
import { Link } from 'react-router-dom'

export default function CandleCard({ candle, favoriteCandles, setFavoriteCandles, candles, setCandles, currentUser }) {
  const { name, notes, price, producer, image_url, size } = candle

  let liked = candle.favorites.map((favorite)=> {
    if (favorite.user_id === currentUser.id){
      return true
    } else {return false}
  })

  function updateFavorites(newFavorite){
    let newFavorites = [...favoriteCandles, newFavorite.candle.name]
    setFavoriteCandles(newFavorites)
    let updatedCandles = candles.map((aCandle) => {
      if (aCandle.id === candle.id){
        let updatedCandle = {
          ...candle,
          favorites: [...candle.favorites, newFavorite]
        }
        return updatedCandle
      }
      else {return aCandle}
    })
    setCandles(updatedCandles)
  }

  function deleteFavorite(){
    let updatedFavorites = candle.favorites.filter((favorite) => favorite.user_id !== currentUser.id)
    let updatedCandles = candles.map((aCandle) => {
      if (aCandle.id === candle.id){
        let updatedCandle = {
          ...candle,
          favorites: updatedFavorites
        }
        return updatedCandle
      } else {return aCandle}
    })
    setCandles(updatedCandles)
  }

  function handleLike(e){
    e.preventDefault()
    if(liked.includes(true)){
      fetch('/favorites', {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"candle_id": candle.id})
      })
      const updatedFavorites = favoriteCandles.filter((c) => c !== name)
      setFavoriteCandles(updatedFavorites)
      deleteFavorite()
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
    }
  }


  return (
    <div className='candle-card'>
        <h3 className='card-title'>{name}</h3>
        <Link to={`/-candles/${candle.id}`}>
          <img className='card-image' src={image_url} alt={name}/> 
        </Link>
        <p><i>Notes: {notes}</i></p>
        <p className='card-info'>{price} | {size} | {producer}</p>
        <div className='card-engage'>
          <div onClick={handleLike} className='card-favorite'>
            {liked.includes(true) ? <i className="fa-solid fa-heart"></i> :  <i className="fa-regular fa-heart"></i>} 
            {" "}{candle.favorites.length === 1 ? (candle.favorites.length) + " Like" : (candle.favorites.length) + " Likes"}
            </div>
          <Link to={`/-candles/${candle.id}`}>
            <div className='card-review'><i className="fa-regular fa-comment"></i> {" "}{candle.reviews.length === 1 ? (candle.reviews.length ) + " Review" : (candle.reviews.length ) + " Reviews"}</div>
          </Link>
        </div>
    </div>
  )
}
