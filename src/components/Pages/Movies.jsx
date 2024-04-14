import SearchBar from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import MovieCardsGallery from 'components/MovieCardsGallery/MovieCardsGallery';
import Button from 'components/LoadmoreBtn/Button';
import { getSearchMovies } from 'components/Services/api';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movieCard, setMovieCard] = useState([]);
  const [page, setPage] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? 'Friends';

  useEffect(() => {
    if (movieName === '') return;

    const fetchSearchMovies = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await getSearchMovies(movieName, page);
        const data = response;

        setMovieCard(prevMovies =>
          page === 1 ? data : [...prevMovies, ...data]
        );
        setIsLoading(false);

        if (data.length === 0) {
          setIsEnd(true);
          Notiflix.Notify.warning('No movies found. Try a different search.', {
            position: 'center-top',
          });
          return;
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        Notiflix.Notify.failure(
          `An error occured while fetching data: ${error}`,
          {
            position: 'center-top',
          }
        );
      }
    };
    fetchSearchMovies();
  }, [movieName, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  return (
    <div className="Movies-container">
      <SearchBar onChange={updateQueryString} />
      <MovieCardsGallery movies={movieCard} />
      {!isLoading && !isError && movieCard.length > 0 && !isEnd && (
        <Button onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default Movies;
