import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CandleForm() {
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
                .then((newCandle) => console.log(newCandle))
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
            <label>Name: {"   "}  
                <input type="text" id="name" name="name" value={newCandle.name} onChange={handleChange}/>
            </label><br/>
            <label>Producer: <br/>
                <input type="text" id="producer" name="producer" value={newCandle.producer} onChange={handleChange}/>
            </label><br/>
            <label>Notes: <br/>
                <input type="text" id="notes" name="notes" value={newCandle.notes} onChange={handleChange}/>
            </label><br/>
            <label>Size: <br/>
                <input type="text" id="size" name="size" value={newCandle.size} onChange={handleChange}/>
            </label><br/>
            <label>Price: <br/>
                <input type="text" id="price" name="price" value={newCandle.price} onChange={handleChange}/>
            </label><br/>
            <label>Image link: <br/>
                <input type="text" id="image_url" name="image_url" value={newCandle.image_url} onChange={handleChange}/>
            </label><br/>
            <input type="submit" value="Submit"/>
        </form>
        {errors.map((error) => {
            return <li key={error}>{error}</li>
        })}
    </div>
  )
}

// /* <form onSubmit={handleSubmit}>
// <label>Title: </label><br/>
// <input type="text" id="name" name="name" value={newPiece.name} onChange={handleChange}/><br/>
// <label>Artist: </label><br/>
// <input type="text" id="artist" name="artist" value={newPiece.artist} onChange={handleChange}/><br/>
// <label>Medium: </label><br/>
// <input type="text" id="medium" name="medium" value={newPiece.medium} onChange={handleChange}/><br/>
// <label>Height in inches: </label><br/>
// <input type="text" id="inchHeight" name="inchHeight" value={newPiece.inchHeight} onChange={handleChange}/><br/>
// <label>Width in inches: </label><br/>
// <input type="text" id="inchWidth" name="inchWidth" value={newPiece.inchWidth} onChange={handleChange}/><br/>
// <label>Year: </label><br/>
// <input type="text" id="year" name="year" value={newPiece.year} onChange={handleChange}/><br/>
// <label>Image URL: </label><br/>
// <input type="text" id="imageUrl" name="imageUrl" value={newPiece.imageUrl} onChange={handleChange}/><br/><br/>
// <input type="submit" value="Submit"/>
// </form>


// function handleAddArtwork(newArtwork){
//     setArtworks([...artworks, newArtwork])
//   }
  
//   function handleSubmit(e){
//     e.preventDefault()
//     fetch(`http://localhost:9292/artworks`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newPiece)
//     })
//     .then((r) => r.json())
//     .then((newArtwork) => handleAddArtwork(newArtwork))
//     setNewPiece({
//       "name": "",
//       "artist": "",
//       "medium": "",
//       "inchHeight": "",
//       "inchWidth": "",
//       "year": "",
//       "imageUrl": ""
//     })
//     console.log('submitted')
//   }


// export default function AddArtwork({ artworks, setArtworks }) 