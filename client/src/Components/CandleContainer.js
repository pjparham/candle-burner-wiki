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
    <div className='filter-container'>
      <div className='filter-button' onClick={() => setIsOpen(!isOpen)}>Sort</div>
      {isOpen ?
      <div className='filter-options'>
        <div className='filter-option filter-single-option' title='review' onClick={handleFilter}>Reviews</div>
        <div className='filter-option filter-single-option' title='favorite' onClick={handleFilter}>Favorites</div>
        <div className='filter-option' title='recent' onClick={handleFilter}>Recently added</div>
      </div> : null}
    </div>
    <div className='candle-container'>{displayCandleCards}</div>
    </>
  )
}
