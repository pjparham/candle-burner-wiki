import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar( {name }) {
  return (
    <div className="navbar">
        <NavLink to="/">
          <div className="nav-title">Burner</div>
        </NavLink>
        <div className="links">
          <NavLink to="/candles/new">
            <div className="nav-add">Add candle</div>
          </NavLink>
          <NavLink to={`/profile`}>
            <div className="nav-profile">{name}</div>
          </NavLink>
        </div>
    </div>
  )
}
