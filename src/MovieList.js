import React from 'react';

export default function MovieList({ allMovies, deleteMovie }) {
  return <div className='movie-list'>
    {
      allMovies.map((movie, i) => <MovieItem deleteMovie={deleteMovie}
        key={`${movie.title}-${i}`} movie={movie} />)
    }
  </div>;
}