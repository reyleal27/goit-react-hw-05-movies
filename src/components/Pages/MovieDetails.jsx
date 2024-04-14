import { getMovieDetails } from 'components/Services/api';
import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';
import noPoster from 'image/no-poster.jpg';
import './MovieDetailStyle.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from || '/';

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const movie = await getMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        Notiflix.Notify.failure(`${error}`, {
          position: 'center-top',
        });
      }
    };
    movieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <Loader />;
  }

  const { poster_path, title, vote_average, overview, genres } = movieDetails;
  const moviePopularity = Math.round(vote_average * 10);

  return (
    <div className="MovieDetailsContainer">
      <Link to={backLink} className="backLink">
        <button className="goBackBtn">Go Back</button>
      </Link>
      <div className="MovieDetails">
        <img
          className="movieDetailImg"
          width="500px"
          height="600px"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : noPoster
          }
          alt={title}
        />
        <div className="MovieDetailDescription">
          <h1 className="Title">{title}</h1>
          <h2 className="UserScore">User Score: {moviePopularity}%</h2>
          <h2>Overview</h2>
          <p className="Overview">{overview}</p>
          <h2>Genres</h2>
          <p className="Genres">
            {genres.map(genre => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p>
        </div>
      </div>
      <div className="additionInfoContainer">
        <h2>Addition Information</h2>
        <Link to="cast" className="MovieDetailLinks">
          <button className="MovieDetailBtn">Cast</button>
        </Link>
        <Link to="reviews" className="MovieDetailBtn">
          <button className="MovieDetailBtn">Reviews</button>
        </Link>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
