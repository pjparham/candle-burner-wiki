import React from 'react'
import CandleCard from './CandleCard'

export default function CandleContainer({candles, favoriteCandles, setFavoriteCandles, setCandles, updateCandles }) {
  const displayCandleCards = candles && candles.map((candle) => {
    return <CandleCard candles={candles} updateCandles={updateCandles} setCandles={setCandles} setFavoriteCandles={setFavoriteCandles} favoriteCandles={favoriteCandles} key={candle.id} candle={candle}/>
  })


  return (
    <div className='candle-container'>{displayCandleCards}</div>
  )
}
