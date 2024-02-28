import React, { useCallback } from 'react';
import Form from './components/Form';
import MoviesList from './components/MoviesList';
import './App.css';
import { useState,useEffect } from 'react';
function App() {
  const [movies,setmovies]=useState([]);
  const [isloading,setisloading]=useState(false);
  const [error,seterror]=useState(null);


const addmoviesHandler= async(newData)=>{
 const response=await fetch('https://desire-acb3b-default-rtdb.firebaseio.com/movies.json',{
  method:'POST',
  body:JSON.stringify(newData),
  header:{
    'Content-type':'application/json'
  }
});
const data=await response.json();
console.log(data);
}

const handleDelete=(movieId)=>{
  console.log('Badhai ho Badhai',movieId)
  const updateMovies=movies.filter((movie)=>movie.id!==movieId)
  setmovies(updateMovies)
}


 const fetchMoviesHandler =useCallback(async()=>{
    setisloading(true);
    seterror(null);
    try{
      
  const response= await fetch('https://desire-acb3b-default-rtdb.firebaseio.com/movies.json')
  if(!response.ok){
    throw new Error('Something went wrong!...Retrying')
   
  };
   const data=await response.json();
   const loadedmovies=[];
   for(const key in data){
    loadedmovies.push({
      id:key,
      title:data[key].title,
      openingText:data[key].openingText,
      releaseDate:data[key].releaseDate,
    })
   }

    
    setmovies(loadedmovies);
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
      content=<MoviesList movies={movies} onDelete={handleDelete}/>;
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
        <div><Form addmoviesHandler={addmoviesHandler}></Form></div>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
      {content}
      </section>
    </React.Fragment>
  );
}

export default App;
