import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

const HomePage = lazy(() =>
  import('pages/HomePage/HomePage').then(module => ({ default: module.HomePage })));
const MovieItemPage = lazy(() =>
  import('pages/MovieItemPage/MovieItemPage').then(module => ({ default: module.MovieItemPage })));
const MoviesPage = lazy(() =>
  import('pages/MoviesPage/MoviesPage').then(module => ({ default: module.MoviesPage })));

export const App = () => {
  return (
    <Suspense fallback=''>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId/*" element={<MovieItemPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
