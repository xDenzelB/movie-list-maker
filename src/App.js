import './App.css';
import MovieItem from './MovieItem';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import { useMovieForm } from './useMovieForm';
function App() {
  const {
    allMovies, filteredMovies, 
    movieYear, setMovieYear,
    movieDirector, setMovieDirector,
    movieTitle, setMovieTitle,
    movieColor, setMovieColor,
    currentFilter, setCurrentFilter,
    addMovie, deleteMovie, 
  } = useMovieForm();

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
      <input value={currentFilter} onChange={(e) => setCurrentFilter(e.target.value)} />
      <MovieList 
        allMovies={filteredMovies || allMovies }
        deleteMovie={deleteMovie} />
    
    </div>
  );
}

export default App;
