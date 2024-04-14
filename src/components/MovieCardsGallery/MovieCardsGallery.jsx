import MovieCardItem from 'components/MovieCards/MovieCards';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const MovieCardsGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className="MovieCardsGallery">
      {movies.map(movie => (
        <Link
          to={`/movies/${movie.id}`}
          state={{ from: location }}
          key={movie.id}
          className="movieLink"
        >
          <MovieCardItem key={movie.id} movie={movie} />
        </Link>
      ))}
    </ul>
  );
};

MovieCardsGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieCardsGallery;
