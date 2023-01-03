import React from 'react'
import CandleCard from './CandleCard'

export default function CandleContainer({candles, favoriteCandles, setFavoriteCandles }) {
  const displayCandleCards = candles && candles.map((candle) => {
    return <CandleCard setFavoriteCandles={setFavoriteCandles} favoriteCandles={favoriteCandles} key={candle.id} candle={candle}/>
  })


  return (
    <div className='candle-container'>{displayCandleCards}</div>
  )
}
