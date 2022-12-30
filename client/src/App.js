import { useState, useEffect } from 'react';
import CandleContainer from './Components/CandleContainer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [candles, setCandles] = useState([])
  const [currentUser, setCurrentUser] = useState()
  const [favoriteCandles, setFavoriteCandles] = useState([])

  useEffect(() => {
    fetch("/candles")
    .then((r) => r.json())
    .then((candles) => setCandles(candles))    
  }, [])

  useEffect(()=> {
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user=> setCurrentUser(user))
      }
    })
  }, [])

  useEffect(()=>{
    if (currentUser){
      let userCandles = currentUser.favorite_candles.map((favorite) => favorite.name)
      setFavoriteCandles(userCandles)
    }
  }, [currentUser])




  if (!currentUser){
    return (
      <div className="App">
      <div>Navbar</div>
      <Routes>
        <Route exact path='/' element={<Login setCurrentUser={setCurrentUser}/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>

    </div>
    )
  }
  return (
    <div className="App">
      <div>Navbar</div>
      <Routes>
        <Route exact path='/' element={<CandleContainer favoriteCandles={favoriteCandles} candles={candles}/>}/>
      </Routes>

    </div>
  );
}

export default App;
