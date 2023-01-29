import { Link } from 'react-router-dom';

export default function Catalog(): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <Link to='#' className="catalog__genres-link">All genres</Link >
        </li>
        <li className="catalog__genres-item">
          <Link to='#' className="catalog__genres-link">Comedies</Link >
        </li>
        <li className="catalog__genres-item">
          <Link to='#' className="catalog__genres-link">Crime</Link >
        </li>
        <li className="catalog__genres-item">
          <Link to='#' className="catalog__genres-link">Documentary</Link >
        </li>
        <li className="catalog__genres-item">
          <Link to='#' className="catalog__genres-link">Dramas</Link >
        </li>
        <li className="catalog__genres-item">
          <Link to='#' className="catalog__genres-link">Horror</Link >
        </li>
        <li className="catalog__genres-item">
          <Link to='#' className="catalog__genres-link">Kids & Family</Link >
        </li>
        <li className="catalog__genres-item">
          <Link to='#' className="catalog__genres-link">Romance</Link >
        </li>
        <li className="catalog__genres-item">
          <Link to='#' className="catalog__genres-link">Sci-Fi</Link >
        </li>
        <li className="catalog__genres-item">
          <Link to='#' className="catalog__genres-link">Thrillers</Link >
        </li>
      </ul>

      <div className="catalog__films-list">
        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Fantastic Beasts: The Crimes of Grindelwald</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Bohemian Rhapsody</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Macbeth</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Aviator</Link >
          </h3>
        </article>


        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">We need to talk about Kevin</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">What We Do in the Shadows</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/revenant.jpg" alt="Revenant" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Revenant</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/johnny-english.jpg" alt="Johnny English" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Johnny English</Link >
          </h3>
        </article>


        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/shutter-island.jpg" alt="Shutter Island" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Shutter Island</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/pulp-fiction.jpg" alt="Pulp Fiction" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Pulp Fiction</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/no-country-for-old-men.jpg" alt="No Country for Old Men" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">No Country for Old Men</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/snatch.jpg" alt="Snatch" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Snatch</Link >
          </h3>
        </article>


        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/moonrise-kingdom.jpg" alt="Moonrise Kingdom" width="280" height="175" />

          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Moonrise Kingdom</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/seven-years-in-tibet.jpg" alt="Seven Years in Tibet" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Seven Years in Tibet</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/midnight-special.jpg" alt="Midnight Special" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Midnight Special</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/war-of-the-worlds.jpg" alt="War of the Worlds" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">War of the Worlds</Link >
          </h3>
        </article>


        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/dardjeeling-limited.jpg" alt="Dardjeeling Limited" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Dardjeeling Limited</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/orlando.jpg" alt="Orlando" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Orlando</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/mindhunter.jpg" alt="Mindhunter" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Mindhunter</Link >
          </h3>
        </article>

        <article className="small-film-card catalog__films-card">
          <div className="small-film-card__image">
            <img src="img/midnight-special.jpg" alt="Midnight Special" width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to='#' className="small-film-card__link">Midnight Special</Link >
          </h3>
        </article>
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

