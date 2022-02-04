import { useState } from 'react';
import './App.css';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');
  
  function addMovie(newMovie) {
    const updateMovies = [...allMovies, newMovie];

    setAllMovies(updateMovies);
  }

  function deleteMovie(title) {
    const index = allMovies.findIndex(allMovies => movie.title === title);

    allMovies.splice(index, 1);

    setAllMovies([...allMovies]);
  }
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
