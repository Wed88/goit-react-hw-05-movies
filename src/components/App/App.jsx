import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="movies" element={<div>MoviesPage</div>} />
      </Route>
    </Routes>
  );
};
