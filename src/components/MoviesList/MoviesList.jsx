import { Link } from 'react-router-dom';

export const MovieList = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title || name}</Link>
        </li>
      ))}
    </ul>
  );
};
