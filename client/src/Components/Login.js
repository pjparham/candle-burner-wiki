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
                res.json().then(setCurrentUser) && console.log('success')
            } else {
                alert("Wrong username or password")
            }
        })
    }


  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <br />
                <input type="text" id="username" name="username" value={user.username} onChange={handleChange}/>
            </label><br/>
            <label>
                Password
                <br />
                <input type="password" id="password" name="password" value={user.password} onChange={handleChange}/>
            </label> <br/>
            <input type="submit" value="Log in"/>
        </form>
        <div>Don't have an account yet? Sign up <NavLink to="/signup">here.</NavLink></div>
    </div>
  )
}
