import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage, MovieItemPage } from 'pages';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="movies" element={<div>MoviesPage</div>} />
        <Route path="movies/:movieId" element={<MovieItemPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
