import React, { useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useState,useEffect } from 'react';
function App() {
  const [movies,setmovies]=useState([]);
  const [isloading,setisloading]=useState(false);
  const [error,seterror]=useState(null);


 const fetchMoviesHandler =useCallback(async()=>{
    setisloading(true);
    seterror(null);
    try{
      
  const response= await fetch('https://swapi.dev/api/films/')
  if(!response.ok){
    throw new Error('Something went wrong!...Retrying')
   
  };
   const data=await response.json();
  const transformedMovies=data.results.map(moviedata=>{
      return {
        id:moviedata.episode_id,
        title:moviedata.title,
        openingText:moviedata.opening_crawl,
        releaseDate:moviedata.release_date
      }
    })

    
    setmovies(transformedMovies);
    setisloading(false);
  
 }catch(error){
  seterror(error.message)
 }
 setisloading(false)
    },[]);

    useEffect(()=>{
      fetchMoviesHandler()
    },[fetchMoviesHandler])
    

    let content=<p>Found no movies.</p>;
    if(movies.length>0)
    {
      content=<MoviesList movies={movies} />;
    };
    if(error){
      content=<p>{error}</p>
    };
    if(isloading)
    {
      content=<p>Loading....</p>
    }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
      {content}
      </section>
    </React.Fragment>
  );
}

export default App;
