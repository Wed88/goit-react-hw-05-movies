import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/themoviedbAPI';
import { MovieItem } from 'components/MovieItem/MovieItem';
import Loader from '../components/Loader/Loader';

export const MovieItemPage = () => {
  const { movieId } = useParams();
  const [movieItem, setMovieItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieItem() {
      setIsLoading(true);

      try {
        const data = await getMovieById(movieId);
        setMovieItem(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieItem();
  }, [movieId]);

  return (
    <main>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {!error && <MovieItem movieItem={movieItem} />}
    </main>
  );
};
