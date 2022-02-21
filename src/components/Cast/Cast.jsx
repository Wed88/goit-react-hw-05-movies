import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../services/themoviedbAPI';
import Loader from '../Loader/Loader';
import { Image, List } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieCast() {
      setIsLoading(true);

      try {
        const data = await getMovieCast(movieId);
        setMovieCast(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {movieCast ? (
        <List>
          {movieCast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </List>
      ) : (
        <p>We don't have any cast for this movie.</p>
      )}
    </>
  );
};
