import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage, MovieItemPage } from 'pages';
import { Layout } from 'components/Layout/Layout';
import { Cast } from 'components/Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="movies" element={<div>MoviesPage</div>} />
        <Route path="movies/:movieId" element={<MovieItemPage />}>
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
};
