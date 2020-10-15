import axios from 'axios';
import { useEffect, useState } from 'react'
const API = process.env.REACT_APP_API;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API}`


const useGif =(tag)  => {
    // const [tag, setTag] = useState('dogs')
    const [gif, setGif] = useState("")
    const fetchGif =async(tag)=>{
        const data = await axios.get(tag? `${url}&tag=${tag}`:url )
        const imageUrl = data.data.data.images.downsized_large.url;
        setGif(imageUrl)
    }
    useEffect(() => {
        fetchGif(tag)
    }, [tag])

    return {gif,fetchGif};


}

export default useGif
