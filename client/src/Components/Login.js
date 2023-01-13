import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Login({setCurrentUser}) {
    const [user, setUser] = useState({
        "username": "",
        "password": ""
    })

    function handleChange(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/login`, {
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if (res.ok){
                res.json().then(setCurrentUser)
            } else {
                alert("Wrong username or password")
            }
        })
    }

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input className="login-input"placeholder="Username" type="text" id="username" name="username" value={user.username} onChange={handleChange}/>
                </label>
                <label>
                    <br />
                    <input className="login-input" placeholder="Password" type="password" id="password" name="password" value={user.password} onChange={handleChange}/>
                </label> <br/>
                <div className='login-button-container'>
                    <div onClick={handleSubmit} className='login-button'>Login</div>
                    <NavLink to="/signup"><div className='login-signup-button'>Sign-Up</div></NavLink>
                </div>
            </form>
        </div>
    )
}

