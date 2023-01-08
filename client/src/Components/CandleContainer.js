import React, { useState } from 'react'
import CandleCard from './CandleCard'

export default function CandleContainer({candles, favoriteCandles, setFavoriteCandles, setCandles, updateCandles, currentUser }) {
  const [search, setSearch] = useState('')

  let filteredCandles = candles.filter((candle) => candle.name.toLowerCase().includes(search.toLowerCase()))

  const displayCandleCards = filteredCandles.map((candle) => {
    return <CandleCard currentUser={currentUser} candles={candles} updateCandles={updateCandles} setCandles={setCandles} setFavoriteCandles={setFavoriteCandles} favoriteCandles={favoriteCandles} key={candle.id} candle={candle}/>
  })


  return (
    <>
    <div className='search-container'>
      <span className='search-text'>Search for your favorites:</span>
      <div className='search-input-container'>
        <input className='search-input' type='text' value={search} onChange={(e) => setSearch(e.target.value)}></input>
      </div>
    </div>
    <div className='candle-container'>{displayCandleCards}</div>
    </>
  )
}
