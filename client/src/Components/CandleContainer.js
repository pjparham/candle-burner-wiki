import React from 'react'
import CandleCard from './CandleCard'

export default function CandleContainer({candles, favoriteCandles, setFavoriteCandles, setCandles, updateCandles, currentUser }) {
  const displayCandleCards = candles.map((candle) => {
    return <CandleCard currentUser={currentUser} candles={candles} updateCandles={updateCandles} setCandles={setCandles} setFavoriteCandles={setFavoriteCandles} favoriteCandles={favoriteCandles} key={candle.id} candle={candle}/>
  })


  return (
    <div className='candle-container'>{displayCandleCards}</div>
  )
}
