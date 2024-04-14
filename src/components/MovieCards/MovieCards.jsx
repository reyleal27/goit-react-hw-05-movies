import React from "react";
import './MovieCardStyle.css';
import noPoster from 'image/no-poster.jpg';
import PropTypes from 'prop-types';

const MovieCardItem = ({ movie }) => {
    const { id, title, poster_path} = movie;
   
    
    const imageSrc = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : noPoster;
        return (
            <li className="MovieCardItem">
                <img className="MovieCardItemImage" loading="lazy" alt={id} src={imageSrc} />
                <div className="MovieDescription">
                <h2 className="MovieCardTitle">{title}</h2>
                </div>
            </li>
        )
    };

MovieCardItem.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired
        })
    )
}

export default MovieCardItem;