import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../comp.css'
const API = process.env.REACT_APP_API;
function Random() {
    const [tag, setTag] = useState('Dog');
    const [gif, setGif] = useState("")
    const fetchGif =async(tag)=>{
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API}&tag=${tag}`
        const data = await axios.get(url)
        const imageUrl = data.data.data.images.downsized_large.url;
        setGif(imageUrl)
    }
    useEffect(() => {
        fetchGif(tag);
    }, [tag])

    const handleClick =()=>{
        fetchGif(tag);
    }

    return (
        <div className="back">
            <h2 id="x">{tag} Gifs</h2>
                    <img src={gif} width="300" height="300" alt="GIf" />
                <br/>
                    <input type="text" value={tag} onChange={(e)=>{setTag(e.target.value)}}/>
                <br/>
                    <div className="btn btn-dark" onClick={handleClick}>hello</div>
                    <br/>
                <p>the url of the gif is {gif}</p>
        </div>
    )
}

export default Random
