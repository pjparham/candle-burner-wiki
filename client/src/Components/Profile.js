import React from 'react'
import ProfileFavorites from './ProfileFavorites'

export default function Profile({ user, candles, favoriteCandles }) {
  
    let allFavoriteCandles = candles.filter((candle) => {
        if (favoriteCandles.includes(candle.name)){
            return candle
        }
    })

    let displayFavorites = allFavoriteCandles.map((candle) => {
        return <ProfileFavorites candle={candle}/>
    })

  return (
    <div className='profile-container'>
        <div className='profile-info profile-box'>
            <h3>{user.first_name + " " + user.last_name}</h3>
            <p>Username: {user.username}</p>
            <p>E-mail: {user.email}</p>
        </div>
        <div className='profile-favorites profile-box'>
            Your favorites
            {displayFavorites}
        </div>
        <div className='profile-reviews profile-box'>
            reviews
        </div>
    </div>
  )
}
