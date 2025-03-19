import { Link, useLoaderData } from 'react-router-dom';
import CardList from '../../components/CardList.tsx';
import LogoLink from '../../components/LogoLink.tsx';
import {MainLoaderData} from './MainLoader.ts';
import UserStatus from '../../components/UserStatus.tsx';


function Main() {
  const { favoriteFilm, filmsArray, authInfo }: MainLoaderData = useLoaderData() as MainLoaderData;


  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">

          <LogoLink light={false} />

          <UserStatus avatar={authInfo.userAuthData.avatarUrl} authStatus={authInfo.authStatus} />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={favoriteFilm.posterImage} alt={favoriteFilm.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{favoriteFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{favoriteFilm.genre}</span>
                <span className="film-card__year">{favoriteFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${favoriteFilm.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to="/mylist">
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">0</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <CardList films={filmsArray}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <LogoLink light/>

          <div className="copyright">
            <p>© What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Main;
