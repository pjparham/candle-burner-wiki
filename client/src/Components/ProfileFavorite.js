import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileFavorite({ candle }) {
  return (
    <div className="profile-favorite-card">
        <Link className='profile-link' to={`/-candles/${candle.id}`}>
        <img className='profile-favorite-image' src={candle.image_url} alt={candle.name}/>
        <div className='profile-favorite-title'>{candle.name}</div>
        </Link>
    </div>
  )
}
