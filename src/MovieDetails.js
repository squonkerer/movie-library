import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

const MovieDetails = ({ movie }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=24c64ea903d3b9426c0b72f5af3d2813&language=en-US&append_to_response=credits`);
      const data = await response.json();
      setDetails(data);
    };
    fetchDetails();
  }, [movie]);

  if (!details) {
    return <div>Loading</div>;
  }

  return (
    <Container>
      <h2>{details.title} ({details.release_date.split('-')[0]})</h2>
      <p><strong>Genre:</strong> {details.genres.map(genre => genre.name).join(', ')}</p>
      <p><strong>Director:</strong> {details.credits.crew.find(person => person.job === 'Director').name}</p>
      <p><strong>Overview:</strong> {details.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} />
    </Container>
  );
};

export default MovieDetails;