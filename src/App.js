import React, { useState } from 'react';
import './App.css';
import MovieSearch from './MovieSearch';
import MovieDetails from './MovieDetails'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <Container>
        <Row className="app">
          <Col className="left-field">
            <MovieSearch onMovieSelect={handleMovieSelect} />
          </Col>
          <Col className="right-field">
            {selectedMovie ? <MovieDetails movie={selectedMovie} /> : <p>Select a movie to see details</p>}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
