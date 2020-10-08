import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API = process.env.REACT_APP_API;
function Random() {
    const [gif, setGif] = useState("")
    const fetchGif =async()=>{
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API}`
        const data = await axios.get(url)
        const imageUrl = data.data.data.images.downsized_large.url;
        setGif(imageUrl)
    }
    useEffect(() => {
        fetchGif()
    }, [])

    const handleClick =()=>{
        fetchGif();
    }

    return (
        <div>
            <h2>Random Gifs</h2>
            <img src={gif} width="auto" height="auto" alt="GIf" />
            <br/>
            <div className="btn btn-dark" onClick={handleClick}>hello</div>
            <p>the url of the gif is {gif}</p>
        </div>
    )
}

export default Random
