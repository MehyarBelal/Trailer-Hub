import React from 'react'


function Sidebar() {
  return (
    <div className='sidebar'>

<div className='logo'><h1>Trailer Hub <i class="fa-solid fa-clapperboard"></i></h1></div>
<ul class="links">
<li><i class="fas fa-play"></i>  Now Playing</li>
  <li><i class="fa-solid fa-arrow-trend-up"></i>  Trending</li>
  <li><i class="fa-solid fa-thumbs-up"></i>  Top Rated</li>


</ul>
        
    </div>
  )
}

export default Sidebar