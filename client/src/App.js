import { useState, useEffect } from 'react';
import CandleContainer from './Components/CandleContainer';
import CandleForm from './Components/CandleForm';
import CandlePage from './Components/CandlePage';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [candles, setCandles] = useState([])
  const [currentUser, setCurrentUser] = useState()
  const [favoriteCandles, setFavoriteCandles] = useState([])
  const [userReviews, setUserReviews] = useState([])

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

  function updateCandles(){
    fetch("/candles")
    .then((r) => r.json())
    .then((candles) => setCandles(candles))
  }
  // console.log(candles)
  //this use effect sets the users favorite candles -> the if currentUser prevents error

  useEffect(()=>{
    if (currentUser){
      let userCandles = currentUser.favorite_candles.map((favorite) => favorite.name)
      setFavoriteCandles(userCandles)
      let currentUserReviews = currentUser.reviews
      setUserReviews(currentUserReviews)
    }
  }, [currentUser])


// console.log(currentUser.reviews)

  if (!currentUser){
    return (
      <div className="App">
      <Navbar name={"Sign-Up"}/>
      <Routes>
        <Route exact path='/' element={<Login setCurrentUser={setCurrentUser}/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>

    </div>
    )
  }
  return (
    <div className="App">
      <Navbar name={currentUser.first_name + " " + currentUser.last_name}/>
      <Routes>
        <Route exact path='/' element={<CandleContainer updateCandles={updateCandles} setFavoriteCandles={setFavoriteCandles} favoriteCandles={favoriteCandles} candles={candles} setCandles={setCandles}/>}/>
        <Route path='/candles/new' element={<CandleForm/>}/>
        <Route path ='/candles/:id' element={<CandlePage 
                                                updateCandles={updateCandles}
                                                setCurrentUser={setCurrentUser} 
                                                currentUser={currentUser} 
                                                candles={candles} 
                                                setCandles={setCandles} 
                                                setFavoriteCandles={setFavoriteCandles} 
                                                favoriteCandles={favoriteCandles}/>}/>
      </Routes>

    </div>
  );
}

export default App;
