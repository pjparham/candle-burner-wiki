import { useState, useEffect } from 'react';
import CandleContainer from './Components/CandleContainer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [candles, setCandles] = useState([])
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    fetch("/candles")
    .then((r) => r.json())
    .then((candles) => setCandles(candles))    
  }, [])

  console.log(currentUser)


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
        <Route exact path='/' element={<CandleContainer candles={candles}/>}/>
      </Routes>

    </div>
  );
}

export default App;
