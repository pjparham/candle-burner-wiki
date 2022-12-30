import React from 'react'

export default function CandleCard({ candle }) {

    const { name, notes, price, producer, image_url, size } = candle
    console.log(candle.favorites.length)

  return (
    <div className='candle-card'>
        <h3 className='card-title'>{name}</h3>
        <img className='card-image' src={image_url} alt={name}/> 
        <p><i>Notes: {notes}</i></p>
        <p className='card-info'>{price} | {size} | {producer}</p>
    </div>
  )
}
