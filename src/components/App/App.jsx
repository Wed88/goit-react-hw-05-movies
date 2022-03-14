import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage, MovieItemPage, MoviesPage } from 'pages';
import { Layout } from 'components/Layout/Layout';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

export const App = () => {
  return (
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
  );
};
