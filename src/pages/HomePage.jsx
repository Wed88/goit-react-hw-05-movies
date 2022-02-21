import { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/themoviedbAPI';
import { MovieList } from 'components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

export const HomePage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      setIsLoading(true);

      try {
        const data = await getPopularMovies();
        setItems(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchItems();
  }, []);

  return (
    <main>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      <h1>Trending today</h1>
      {!error && <MovieList items={items} />}
    </main>
  );
};
// state={{ from: location }}
