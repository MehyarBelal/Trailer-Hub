import React from 'react'
import {useState} from 'react';
import Movie from './Movie';


const Moviegrid = ({movies}) =>{
    const [count, setCount] = useState(0);

    
    return(
      
        <section>


{movies.map(movie =>(
    <Movie key={movie.id} movie={movie}>{movie.id}</Movie>
))}

        </section>
        
    )
}

export default Moviegrid;