import React from 'react';

export default function MovieForm({ 
  movieTitle, setMovieTitle, 
  movieDirector, setMovieDirector, 
  movieYear, setMovieYear, 
  movieColor, setMovieColor, 
  addMovie }) {

  function handleSubmit(e){
    e.preventDefault();

    const movie = {
      id: Math.ceil(Math.random() * 10000),  
      title: movieTitle,
      director: movieDirector,
      year: movieYear,
      color: movieColor,
    };

    addMovie(movie);

    setMovieTitle('');
    setMovieDirector('');
    setMovieYear('');
    setMovieColor('purple');
  }
  return <form onSubmit={handleSubmit}>
    <label>
          Title: 
      <input required value={movieTitle} onChange={e => setMovieTitle(e.target.value)} />
    </label>
    <label>
        Director:
      
      <input required value={movieDirector} onChange={e => setMovieDirector(e.target.value)} />
    </label>
    <label>
      Year:
      <input required value={movieYear} onChange={e => setMovieYear(e.target.value)} />
    </label>
    <label>
    Poster Color: 
      <select value={movieColor} onChange={e => setMovieColor(e.target.value)}>
        <option value={'purple'}>Purple</option>
        <option value={'green'}>Green</option>
        <option value={'yellow'}>Yellow</option>
        <option value={'red'}>Red</option>
        <option value={'pink'}>Pink</option>
      </select>
    </label>

    <button>Add New Movie!</button>
  </form>;
}

