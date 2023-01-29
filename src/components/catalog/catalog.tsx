import { Link } from 'react-router-dom';
import GenreFilters from '../genres-filters/genres-filters';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/data-films/selectors';

export default function Catalog(): JSX.Element {

  const films = useAppSelector(getFilms);
  window.console.log(films);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreFilters />

      <div className="catalog__films-list">
        {
          films.map((film) => (
            <article
              key={film.id}
              className="small-film-card catalog__films-card"
            >
              <div className="small-film-card__image">
                <img
                  src={film.previewImage}
                  width="280"
                  height="175"
                  alt='film'
                />
              </div>
              <h3 className="small-film-card__title">
                <Link to='#' className="small-film-card__link">
                  {film.name}
                </Link >
              </h3>
            </article>
          ))
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

