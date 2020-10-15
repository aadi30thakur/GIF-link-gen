import React from 'react'
import useGif from '../useGif';
import '../comp.css'

const Tag=()=> {
    const {gif,fetchGif} = useGif();
    const handleClick =()=>{
        fetchGif();
    }
    return (
        <div className="back">
        <h2 id="x">Random Gifs</h2>
                <img src={gif} width="300" height="300" alt="GIf" />
            <br/>
            <br/>
                <div className="btn btn-dark" onClick={handleClick}>Click to change</div>
            <br/>
                <br/>
            <p>wanted to download this gif please <a href={gif} target="_blank" rel="noopener noreferrer">click here</a></p>
            <br/>
            <br/>
            <br/>
            <br/>

    </div>
    )
}

export default Tag
