import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

const MovieSearch = ({ onMovieSelect }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=24c64ea903d3b9426c0b72f5af3d2813&language=en-US&query=${query}&page=1&include_adult=false`);
    const data = await response.json();
    setMovies(data.results || []);
  };

  return (
    <Container>
      <form onSubmit={searchMovies}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for a movie" 
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} onClick={() => onMovieSelect(movie)}>
            {movie.title} ({movie.release_date.split('-')[0]})
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default MovieSearch;