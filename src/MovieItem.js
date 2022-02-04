import React from 'react';

export default function MovieItem({ title, director, year, deleteMovie, color }) {
  return <div onClick={() => deleteMovie ? deleteMovie(title) : null}
    className='movie-item' style={{ background: color }}>
    <h3>{title}</h3>
    <p>{year}</p>
    <p>Made by {director}</p>


  </div>;
}
