import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CandleForm({ addCandle }) {
    const [newCandle, setNewCandle] = useState({
        "name": "",
        "producer": "",
        "notes": "",
        "size": "",
        "price": "",
        "image_url": ""
    })
    const [errors, setErrors] = useState([])

    function handleChange(e){
        setNewCandle({
            ...newCandle,
            [e.target.name]: e.target.value,
        })
    }

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/candles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCandle)
        })
        .then((r) => {
            if(r.ok){
                r.json()
                .then((newCandle) => addCandle(newCandle))
                setNewCandle({
                    "name": "",
                    "producer": "",
                    "notes": "",
                    "size": "",
                    "price": "",
                    "image_url": ""
                })
                navigate('/')
            } else{
                r.json().then(e => setErrors(e.errors))
            }
        })
    }

  return (
    <div className='form'>
        <h1 className="form-title">Don't see your favorite candle on our site? Submit it here!</h1>
        <form onSubmit={handleSubmit}>
            <label   ><span className='form-label'>Name: {"   "} </span>
                <input className='form-input' type="text" id="name" name="name" value={newCandle.name} onChange={handleChange}/>
            </label><br/><br/>
            <label><span className='form-label'>Producer: {"   "} </span>
                <input className='form-input' type="text" id="producer" name="producer" value={newCandle.producer} onChange={handleChange}/>
            </label><br/><br/>
            <label><span className='form-label'>Notes: {"   "} </span>
                <input className='form-input' type="text" id="notes" name="notes" value={newCandle.notes} onChange={handleChange}/>
            </label><br/><br/>
            <label><span className='form-label'>Size: {"   "} </span>
                <input className='form-input' type="text" id="size" name="size" value={newCandle.size} onChange={handleChange}/>
            </label><br/><br/>
            <label><span className='form-label'>Price: {"   "} </span>
                <input className='form-input' type="text" id="price" name="price" value={newCandle.price} onChange={handleChange}/>
            </label><br/><br/>
            <label className='image-input'><span className='form-label'>Image Url: {"   "} </span>
                <input className='form-input' type="text" id="image_url" name="image_url" value={newCandle.image_url} onChange={handleChange}/>
            </label><br/><br/>
            <input type="submit" value="Submit"/><br/><br/>
        </form>
        <div className='error-container'>
        {errors.map((error) => {
            return <li className='error' key={error}>{error}</li>
        })}
        </div>
    </div>
  )
}