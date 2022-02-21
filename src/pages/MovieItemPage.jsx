import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, NavLink } from 'react-router-dom';
import { getMovieById } from '../services/themoviedbAPI';
import { MovieItem } from 'components/MovieItem/MovieItem';
import Loader from '../components/Loader/Loader';

export const MovieItemPage = () => {
  const { movieId } = useParams();
  const [movieItem, setMovieItem] = useState({});
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
      <Link to="/Home">Go back</Link>
      {!error && <MovieItem movieItem={movieItem} />}
      <br />
      <div>
        <ul>
          <h4>Iditional information</h4>
          <li>
            <NavLink to={'cast'}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={'reviews'}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
