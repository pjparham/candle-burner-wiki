import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Images/burner_logo.png'

export default function Navbar( {currentUser, name }) {
  return (
    <div className="navbar">
        <NavLink to="/">
          <div className="nav-title">
            <div className='nav-image-container'><img className='nav-logo' src={logo} alt="Burner Logo"/></div>
            <div className='nav-title-container'>Burner</div>
          </div>
        </NavLink>
        <div className="links">
          {currentUser ? <NavLink to="/-candles/new">
            <div className="nav-add">Add candle</div>
          </NavLink> : null }
          <NavLink to={currentUser ? `/profile`: '/signup'}>
            <div className="nav-profile">{name}</div>
          </NavLink>
        </div>
        <div className='mobile-links'>
          {currentUser ? <NavLink to="/-candles/new">
            <div className="nav-add">New</div>
          </NavLink> : null }
          <NavLink to={currentUser ? `/profile`: '/signup'}>
            <div className="nav-profile">{currentUser ? 'Me' : "Sign up"}</div>
          </NavLink>
        </div>
    </div>
  )
}
