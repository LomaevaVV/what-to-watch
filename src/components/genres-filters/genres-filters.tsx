import { Link } from 'react-router-dom';
import { GenreFilter } from '../../const';

export default function Catalog(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {
        Object.values(GenreFilter).map((genre) => (
          <li
            key={genre}
            className='catalog__genres-item'
          >
            <Link to='#' className="catalog__genres-link">{genre}</Link >
          </li>
        ))
      }
    </ul>
  );
}

