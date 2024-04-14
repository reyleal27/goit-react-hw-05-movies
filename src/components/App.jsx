import { Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import Movies from './Pages/Movies';
// import MovieDetails from './Pages/MovieDetails';
import SharedLayout from './SharedLayout/SharedLayout';
import { NotFoundPage } from './NotFoundPage/NotFoundPage';
import Cast from './Cast/Cast';
import { Reviews } from './Reviews/Review';
import { lazy } from 'react';

const Home = lazy(() => import('./Pages/Home'));
const Movies = lazy(() => import('./Pages/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
