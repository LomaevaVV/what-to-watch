import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getIsUserAuth } from '../../store/user-process/selectors';

export default function Header(): JSX.Element {
  const isUserAuth = useAppSelector(getIsUserAuth);
  window.console.log(isUserAuth);
  window.console.log('привет!');


  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link >
      </div>
      { isUserAuth
        ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to='#' className="user-block__link">Sign out</Link >
          </li>
        </ul>
        :
        <div className="user-block">
          <Link
            className="user-block__link"
            to={AppRoute.SignIn}
          >
          Sign in
          </Link>
        </div>}
    </header>
  );
}

