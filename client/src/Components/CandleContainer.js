import React, { useState } from 'react'
import CandleCard from './CandleCard'

export default function CandleContainer({candles, favoriteCandles, setFavoriteCandles, setCandles, updateCandles, currentUser }) {
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [filterState, setFilterState] = useState('recent')

  let searchedCandles = candles.filter((candle) => candle.name.toLowerCase().includes(search.toLowerCase()))

  let filteredCandles = searchedCandles
    .sort((candle1, candle2) => {
      if (filterState === "review"){
        return candle2.reviews.length - candle1.reviews.length
      }
      else if (filterState === "favorite"){
        return candle2.favorites.length - candle1.favorites.length
      }
      else { return candle2.id - candle1.id}
    })

  // console.log(filteredCandles)


  const displayCandleCards = searchedCandles.map((candle) => {
    return <CandleCard currentUser={currentUser} candles={candles} updateCandles={updateCandles} setCandles={setCandles} setFavoriteCandles={setFavoriteCandles} favoriteCandles={favoriteCandles} key={candle.id} candle={candle}/>
  })

  function handleFilter(e){
    setFilterState(e.target.title)
    setIsOpen(false)
  }


  return (
    <>
    <div className='search-container'>
      <span className='search-text'>Search for your favorites:</span>
      <div className='search-input-container'>
        <input className='search-input' type='text' value={search} onChange={(e) => setSearch(e.target.value)}></input>
      </div>
    </div>
    <div onClick={() => setIsOpen(!isOpen)}>Filter by:</div>
    {isOpen ?
     <><div title='review' onClick={handleFilter}>Review Count</div>
      <div title='favorite' onClick={handleFilter}>Favorite Count</div>
      <div title='recent' onClick={handleFilter}>Recently added</div></> : null}
    <div className='candle-container'>{displayCandleCards}</div>
    </>
  )
}
