import { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { getMovieById } from '../../services/themoviedbAPI';
import { MovieItem } from 'components/MovieItem/MovieItem';
import Loader from '../../components/Loader/Loader';
import { FiCornerUpLeft } from 'react-icons/fi';
import { Button } from './MovieItemPage.styled';

export const MovieItemPage = () => {
  const { movieId } = useParams();
  const [movieItem, setMovieItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

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
      <Button to={location?.state?.from ?? '/'}>
        <FiCornerUpLeft />
        Go back
      </Button>
      {!error && <MovieItem movieItem={movieItem} />}
      <br />
      <div>
        <ul>
          <h4>Iditional information</h4>
          <li>
            <NavLink to={'cast'} state={{ from: location?.state?.from }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={'reviews'} state={{ from: location?.state?.from }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
