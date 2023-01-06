import { useState, useEffect } from 'react';
import CandleContainer from './Components/CandleContainer';
import CandleForm from './Components/CandleForm';
import CandlePage from './Components/CandlePage';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
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

console.log(userReviews)


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

  function addCandle(newCandle){
    let allCandles = [...candles, newCandle]
    setCandles(allCandles)
  }

  function onLogout(){
    setCurrentUser()
    setFavoriteCandles([])
    setUserReviews([])
  }

  //this use effect sets the users favorite candles -> the if currentUser prevents error
  useEffect(()=>{
    if (currentUser){
      let userCandles = currentUser.favorite_candles.map((favorite) => favorite.name)
      setFavoriteCandles(userCandles)
      let currentUserReviews = currentUser.reviews
      setUserReviews(currentUserReviews)
    }
  }, [currentUser])

  if (!currentUser){
    return (
      <div className="App">
      <Navbar currentUser={currentUser} name={"Sign-Up"}/>
      <Routes>
        <Route exact path='/' element={<Login setCurrentUser={setCurrentUser}/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>

    </div>
    )
  }
  return (
    <div className="App">
      <Navbar  currentUser={currentUser} name={currentUser.first_name + " " + currentUser.last_name}/>
      <Routes>
        <Route exact path='/' element={<CandleContainer currentUser={currentUser} updateCandles={updateCandles} setFavoriteCandles={setFavoriteCandles} favoriteCandles={favoriteCandles} candles={candles} setCandles={setCandles}/>}/>
        <Route path='/candles/new' element={<CandleForm addCandle={addCandle}/>}/>
        <Route path ='/candles/:id' element={<CandlePage 
                                                updateCandles={updateCandles}
                                                userReviews={userReviews}
                                                setUserReviews={setUserReviews}
                                                setCurrentUser={setCurrentUser} 
                                                currentUser={currentUser} 
                                                candles={candles} 
                                                setCandles={setCandles} 
                                                setFavoriteCandles={setFavoriteCandles} 
                                                favoriteCandles={favoriteCandles}/>}/>
        <Route path='/profile' element={<Profile onLogout={onLogout}user={currentUser} userReviews={userReviews} favoriteCandles={favoriteCandles} candles={candles} />}/>
      </Routes>

    </div>
  );
}

export default App;
