import { useState } from 'react';
import './App.css';
import MovieItem from './MovieItem';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [movieYear, setMovieYear] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieColor, setMovieColor] = useState('');
  
  function addMovie(newMovie) {
    const updateMovies = [...allMovies, newMovie];

    setAllMovies(updateMovies);
  }

  function deleteMovie(title) {
    const index = allMovies.findIndex(movie => movie.title === title);

    allMovies.splice(index, 1);

    setAllMovies([...allMovies]);
  }

  function filterMovies(query) {
    const filteredMovies = allMovies.filter(movie => movie.title.includes(query));

    setFilteredMovies(filteredMovies);
  }
  return (
    <div className="App">
      <div className='movie-section'>
        <MovieForm
          movieTitle={movieTitle}
          setMovieTitle={setMovieTitle}
          movieDirector={movieDirector}
          setMovieDirector={setMovieDirector}
          movieYear={movieYear}
          setMovieYear={setMovieYear}
          movieColor={movieColor}
          setMovieColor={setMovieColor}
          addMovie={addMovie} />

        {
          movieTitle && <MovieItem
            title={movieTitle}
            director={movieDirector}
            year={movieYear}
            color={movieColor} />
        }
      </div>
      <p>Find a Movie!</p>
      <input onChange={(e) => filterMovies(e.target.value)} />
      <MovieList 
        allMovies={filteredMovies || allMovies }
        deleteMovie={deleteMovie} />
    
    </div>
  );
}

export default App;
