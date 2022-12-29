import React, { useState } from 'react'

export default function Signup() {
    const [newUser, setNewUser] = useState({
        "username": "",
        "password": "",
        "first_name": "",
        "last_name": "",
        "email": ""
    })

    function handleChange(e){
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
    }


  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={null}>
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
