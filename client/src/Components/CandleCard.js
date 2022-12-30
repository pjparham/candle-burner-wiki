import React from 'react'

export default function CandleCard({ candle, favoriteCandles }) {

    const { name, notes, price, producer, image_url, size } = candle
    // console.log(candle.favorites.length)
    // console.log('from card', favoriteCandles)
    // console.log('test from card', favoriteCandles.includes({name}), name)
    // console.log(name === favoriteCandles[0], name, favoriteCandles[0])

    let liked = favoriteCandles.includes(name)


  return (
    <div className='candle-card'>
        <h3 className='card-title'>{name}</h3>
        <img className='card-image' src={image_url} alt={name}/> 
        <p><i>Notes: {notes}</i></p>
        <p className='card-info'>{price} | {size} | {producer}</p>
        <div className='card-engage'>
          <div className='card-favorite'>{liked ? <i className="fa-solid fa-heart"></i> :  <i className="fa-regular fa-heart"></i>}</div>
          <div className='card-review'>Review</div>
        </div>
    </div>
  )
}
