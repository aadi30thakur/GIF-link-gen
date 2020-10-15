import React, { useState } from 'react'
import useGif from '../useGif';
import '../comp.css'

const Tag=()=> {
    const [tag, setTag] = useState('Dog');
    const {gif,fetchGif} = useGif(tag);
    const handleClick =()=>{
        fetchGif(tag);
    }
    return (
        <div className="back">
            <h2 id="x">{tag} Gifs</h2>
                    <img src={gif} width="300" height="300" alt="GIf" />
                <br/>
                <br/>
                    <input type="text" value={tag} onChange={(e)=>{setTag(e.target.value)}}/>
                <br/>
                <br/>
                    <div className="btn btn-dark" onClick={handleClick}>Click to change</div>
                <br/>
                    <br/>
                <p>wanted to download this gif please <a href={gif} target="_blank" rel="noopener noreferrer">click here</a></p>
                <br/>
                <br/>

        </div>
    )
}

export default Tag
