import React from 'react'


const Movie = ({movie}) => {

    const imageUrl = 'https://image.tmdb.org/t/p/w342//' + movie.poster_path
    return <div> 

        <h1>{movie.original_title}</h1>
<img src={imageUrl} />
<p>{movie.overview}</p>
<p>Rating: {movie.vote_average}</p>
    </div>
}

export default Movie