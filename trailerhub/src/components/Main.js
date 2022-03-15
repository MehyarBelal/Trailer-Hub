import axios from 'axios';
import React from 'react'
import {useEffect,useState} from 'react';
import Movie from './Movie';
import Moviegrid from './Moviegrid';
import Input from './Input';
import Logo from './Logo';
import Footer from './Footer'
import Sidebar from './Sidebar';
<<<<<<< HEAD

=======
>>>>>>> 67358f03cb9e517c6c714d0f2353b548fc27cfcb
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
    <div className='main'>
   
 
      
        <Sidebar />

<Moviegrid   movies={movies}/>
<Input />
<Footer />
    </div>
    
  )
}

export default Main