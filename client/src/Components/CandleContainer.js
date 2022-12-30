import React from 'react'
import CandleCard from './CandleCard'

export default function CandleContainer({candles, favoriteCandles }) {
  const displayCandleCards = candles.map((candle) => {
    return <CandleCard favoriteCandles={favoriteCandles} key={candle.id} candle={candle}/>
  })


  return (
    <div className='candle-container'>{displayCandleCards}</div>
  )
}
