import React from 'react'

export default function Navbar( {name }) {
  return (
    <div className="navbar">
        <div className="nav-title">Burner</div>
        <div className="links">
            <div className="nav-add">Add candle</div>
            <div className="nav-profile">{name}</div>
        </div>
    </div>
  )
}
