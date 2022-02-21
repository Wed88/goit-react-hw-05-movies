import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ items }) => {
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

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  //   location: PropTypes.object,
};
