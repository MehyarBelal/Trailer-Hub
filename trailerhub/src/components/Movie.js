import React from 'react'


const Movie = ({movie}) => {

    const imageUrl = 'https://image.tmdb.org/t/p/w342//' + movie.poster_path
    return <div className='card'> 

<div className='image'>
<img src={imageUrl} />
    </div>
    <div className='content'>
    <h1>{movie.original_title}</h1>
        <h4> Released: {movie.release_date}</h4>

<p>{movie.overview}</p>
<p className='rating'><span>⭐</span> {movie.vote_average}</p>
        </div>
       
    </div>
}

export default Movie