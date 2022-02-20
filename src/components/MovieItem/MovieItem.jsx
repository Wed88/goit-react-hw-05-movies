import { MovieCard, Image, Container } from './MovieItem.styled';

export const MovieItem = ({ movieItem }) => {
  return (
    <MovieCard>
      <Image>
        {movieItem.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
            alt="poster"
          />
        ) : (
          <p>No image</p>
        )}
      </Image>
      <Container>
        <h1>
          {movieItem.title || movieItem.name}
          {movieItem.release_date && (
            <span>({movieItem.release_date.slice(0, 4)})</span>
          )}
        </h1>
        <p>User score: {Math.round((movieItem.vote_average * 100) / 10)}%</p>
        <h2>Overview</h2>
        <p>{movieItem.overview}</p>

        {movieItem.genres && (
          <>
            <h2>Genres</h2>
            <ul>
              {movieItem.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </MovieCard>
  );
};
