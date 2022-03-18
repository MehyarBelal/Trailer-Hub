import axios from 'axios';
import React from 'react'
import {useEffect,useState} from 'react';
import Movie from './Movie';
import Moviegrid from './Moviegrid';
import Input from './Input';
import Logo from './Logo';
import Footer from './Footer'
import Sidebar from './Sidebar';
import Subtitle from './Subtitle';
function Main() {


    const [movies, setMovies] = useState([]);
    const [toprated, setToprated] = useState([]);
    const [nowplaying, setNowplaying] = useState([]);



useEffect(() =>{
    const fetchMovies = async () => {
        const result = await axios(

            `https://api.themoviedb.org/3/trending/all/day?api_key=35cfc478b958ad286f645acb4faf0c15`
        
        
            )

            console.log(result.data.results)
            setMovies(result.data.results)
          
    }
    fetchMovies()


    const fetchToprated = async () => {
      const result = await axios(

          `https://api.themoviedb.org/3/movie/top_rated?api_key=35cfc478b958ad286f645acb4faf0c15`
      
      
          )

          console.log(result.data.results)
          setToprated(result.data.results)
        
  }
  fetchToprated()


  const fetchnp = async () => {
    const result = await axios(

        `https://api.themoviedb.org/3/movie/now_playing?api_key=35cfc478b958ad286f645acb4faf0c15`
    
    
        )

        console.log(result.data.results)
        setNowplaying(result.data.results)
      
}
fetchnp()
},[])

  return (
    <div className='main'>
     

        <Input />

        <Subtitle name="Trending"/>


<Moviegrid   movies={movies}/>
<Subtitle name="Top Rated"/>
<Moviegrid   movies={toprated}/>
<Subtitle name="Now Playing"/>
<Moviegrid   movies={nowplaying}/>

<Footer />
    </div>
    
  )
}

export default Main