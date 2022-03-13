import axios from 'axios';
import React from 'react'
import {useEffect,useState} from 'react';
import Movie from './Movie';
import Moviegrid from './Moviegrid';
function Main() {


    const [movies, setMovies] = useState([]);


useEffect(() =>{
    const fetchMovies = async () => {
        const result = await axios(

            `https://api.themoviedb.org/3/trending/all/day?api_key=35cfc478b958ad286f645acb4faf0c15`
        
        
        
            )

            console.log(result.data.results)
            setMovies(result.data.results)
          
    }
    fetchMovies()
},[])

  return (
    <div>Main


<Moviegrid   movies={movies}/>

    </div>
    
  )
}

export default Main