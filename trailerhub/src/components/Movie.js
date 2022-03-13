import React from 'react'
import axios from 'axios';

import {useEffect,useState} from 'react';

const Movie = ({movie}) => {


    const [trailer, setTrailer] = useState('');


useEffect(() =>{
    const fetchTrailer = async () => {
        const result = await axios(

                `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=35cfc478b958ad286f645acb4faf0c15&language=en-US`
        
            )

            console.log(result.data.results[0].key)
            
          setTrailer(result.data.results[0].key)
    }
    fetchTrailer()

  
},[])


let url = 'https://www.youtube.com/embed/' + trailer;

    const imageUrl = 'https://image.tmdb.org/t/p/w342//' + movie.poster_path
    return <div className='card'> 

<div className='image'>
<img src={imageUrl} />
    </div>
    <div className='content'>
    <h1>{movie.original_title ? movie.original_title :  movie.name}</h1>
        <h4> Release: {movie.release_date ? movie.release_date : "TBA"}</h4>

<p>{movie.overview}</p>
<p className='rating'><span>⭐</span> {movie.vote_average}</p>

<iframe src={url}></iframe>


        </div>
       
    </div>
}

export default Movie