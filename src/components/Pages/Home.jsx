import { useEffect, useState } from 'react';
import MovieCardsGallery from 'components/MovieCardsGallery/MovieCardsGallery';
import { getTrendingMovies } from 'components/Services/api';


const Home = () => {
  const [movieCard, setMovieCard] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();

        setMovieCard(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
      <div>
          <h2 className='homeTitle'>Trending Movies</h2>
          <MovieCardsGallery movies={movieCard} />
        
    </div>
  );
};

export default Home;
