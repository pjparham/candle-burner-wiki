import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Reviews from './Reviews'

export default function CandlePage({ candles, setCandles, favoriteCandles, setFavoriteCandles, currentUser, setCurrentUser, updateCandles, userReviews, setUserReviews}) {
    const params = useParams()

    let candle = candles.find(candle => candle.id === parseInt(params.id))

    let liked
    
    if (candles.length != 0){
      liked = candle.favorites.map((favorite)=> {
        if (favorite.user_id === currentUser.id){
          return true
        } else {return false}
      })
    }
 
 

 

  

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
          const updatedFavorites = favoriteCandles.filter((c) => c !== candle.name)
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
    if (candles.length == 0){
      return (
        <></>
      )
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
                    {liked.includes(true) ? <i className="fa-solid fa-heart"></i> :  <i className="fa-regular fa-heart"></i>} 
                    {" "}{candle.favorites.length === 1 ? (candle.favorites.length) + " Like" : (candle.favorites.length) + " Likes"}
                    </div>
                <Link to={`/candles/${candle.id}`}>
                    <div className='card-review'><i className="fa-regular fa-comment"></i> {" "}{candle.reviews.length === 1 ? (candle.reviews.length ) + " Review" : (candle.reviews.length ) + " Reviews"}</div>
                </Link>
            </div>
        </div>
        <Reviews userReviews={userReviews} setUserReviews={setUserReviews} candles={candles} setCandles={setCandles} currentUser={currentUser} setCurrentUser={setCurrentUser} candle={candle}/>
    </>
  )
}