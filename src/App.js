import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useState } from 'react';
function App() {
  const [movies,setmovies]=useState([]);
  const [isloading,setisloading]=useState(false)
 
  async function fetchMoviesHandler(){
  const response= await fetch('https://swapi.dev/api/films/')
  const data=await response.json()
  setisloading(true)
 const transformedMovies=data.results.map(moviedata=>{
      return {
        id:moviedata.episode_id,
        title:moviedata.title,
        openingText:moviedata.opening_crawl,
        releaseDate:moviedata.release_date
      }
    })
    setmovies(transformedMovies);
    setisloading(false)
  
 }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
       {!isloading&& movies.length>0 &&<MoviesList movies={movies} />}
       {isloading&&<h2>Loading....</h2>}
       {movies.length===0 && <p>Found No movies</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
