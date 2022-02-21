import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieBySearchName } from '../services/themoviedbAPI';
import { MoviesList } from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

export const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      async function fetchItems() {
        setLoading(true);
        try {
          const data = await getMovieBySearchName(query);
          if (data.results.length === 0) {
            toast.error(' Enter the correct movie name');
            return;
          }

          setItems(data.results);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
      fetchItems();
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.query.value.trim() === '') {
      return;
    }

    setSearchParams({ query: form.elements.query.value });

    form.reset();
  };

  return (
    <main>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {loading && <Loader />}
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="query" placeholder="Enter name" />
        <button>Search</button>
      </form>
      {!error > 0 && <MoviesList items={items} />}
    </main>
  );
};
