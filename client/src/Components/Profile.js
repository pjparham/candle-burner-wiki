import React from 'react'
import ProfileFavorites from './ProfileFavorites'
import ProfileReviews from './ProfileReviews'
import { useNavigate } from 'react-router-dom'

export default function Profile({ user, onLogout, userReviews, candles, favoriteCandles }) {
  
    let allFavoriteCandles = candles.filter((candle) => {
        if (favoriteCandles.includes(candle.name)){
            return candle
        }
    })

    let displayFavorites = allFavoriteCandles.map((candle) => {
        return <ProfileFavorites key={candle.id} candle={candle}/>
    })

    let displayReviews = userReviews.map((review) => {
        return <ProfileReviews review={review} key={review.id}/>
    })

    const navigate = useNavigate()

    function handleLogout(){
        fetch('/logout', {
            method: "DELETE",
        }).then(() => onLogout())
        navigate('/')
    }

  return (
    <div className='profile-container'>
        <div className='profile-info profile-box'>
            <h3>{user.first_name + " " + user.last_name}</h3>
            <p>Username: {user.username}</p>
            <p>E-mail: {user.email}</p>
            <div onClick={handleLogout} className='logout-button'>Logout</div>
        </div>
        <div className='profile-favorites profile-box'>
            Your favorites
            {displayFavorites}
        </div>
        <div className='profile-reviews profile-box'>
            Your reviews
            {displayReviews}
        </div>
    </div>
  )
}
