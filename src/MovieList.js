import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ allMovies, deleteMovie }) {
  return <div className='movie-list'>
    {
      allMovies.map((movie, i) => <MovieItem deleteMovie={deleteMovie}
        key={`${movie.title}-${i}`} {...movie} />)
    }
  </div>;
}