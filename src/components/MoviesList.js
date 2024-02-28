import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  const handledelete=(movieId)=>{
    if(props.onDelete)
    {
      props.onDelete(movieId)
    }
  }
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDelete={handledelete}
        />
      ))}
    </ul>
  );
};

export default MovieList;
