import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [newUser, setNewUser] = useState({
        "username": "",
        "password": "",
        "first_name": "",
        "last_name": "",
        "email": ""
    })

    console.log('hey')

    function handleChange(e){
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
    }

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
   
        fetch('/users', {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newUser)            
        })
        .then(r => {
            if(r.ok){
                navigate('/')
                alert("Sign-up successful! Please login now.")
            }
            else {r.json().then(e => console.log(e))}
        })
    }


  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Pick your username
                <br />
                <input type="text" id="username" name="username" value={newUser.username} onChange={handleChange}/>
            </label><br/>
            <label>
                Password
                <br />
                <input type="password" id="password" name="password" value={newUser.password} onChange={handleChange}/>
            </label> <br/>
            <label>
                First Name
                <br />
                <input type="text" id="first_name" name="first_name" value={newUser.first_name} onChange={handleChange}/>
            </label> <br/>
            <label>
                Last Name
                <br />
                <input type="text" id="last_name" name="last_name" value={newUser.last_name} onChange={handleChange}/>
            </label> <br/>
            <label>
                E-mail
                <br />
                <input type="text" id="email" name="email" value={newUser.email} onChange={handleChange}/>
            </label> <br/>
            <input type="submit" value="Sign-Up"/>
        </form>
    </div>
  )
}
