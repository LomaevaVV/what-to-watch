import { Fragment } from 'react';
import Catalog from '../../components/catalog/catalog';
import FilmCardSection from '../../components/film-card-section/film-card-section';
import Footer from '../../components/footer/footer';

export default function MainPage(): JSX.Element {
  return (
    <Fragment>
      <FilmCardSection />

      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </Fragment>
  );
}

