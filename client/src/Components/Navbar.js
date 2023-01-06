import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar( {currentUser, name }) {
  return (
    <div className="navbar">
        <NavLink to="/">
          <div className="nav-title">Burner</div>
        </NavLink>
        <div className="links">
          {currentUser ? <NavLink to="/candles/new">
            <div className="nav-add">Add candle</div>
          </NavLink> : null }
          <NavLink to={currentUser ? `/profile`: '/signup'}>
            <div className="nav-profile">{name}</div>
          </NavLink>
        </div>
    </div>
  )
}
