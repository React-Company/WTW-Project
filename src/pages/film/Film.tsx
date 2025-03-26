import {Link, useLoaderData} from 'react-router-dom';
import LogoLink from '../../components/LogoLink';
import UserStatus from '../../components/UserStatus.tsx';
import {FilmLoaderData} from './FilmLoader.ts';
import AddMyList from '../../components/AddMyList.tsx';
import {useState} from 'react';
import CardList from '../../components/CardList.tsx';

export default function Film() {
  const { filmData, authInfo, relatedFilms } = useLoaderData() as FilmLoaderData;
  const [activeFilmTab, setActiveFilmTab] = useState<string>('Overview');

  const tabs = [
    'Overview',
    'Details',
    'Reviews',
  ];

  const backColor = {
    backgroundColor: filmData.backgroundColor,
  };

  const getRatingText = () => {
    if (filmData.rating === 10) {
      return 'Awesome';
    } else if (filmData.rating >= 8) {
      return 'Very good';
    } else if (filmData.rating >= 5) {
      return 'Good';
    } else if (filmData.rating >= 3) {
      return 'Normal';
    } else if (filmData.rating >= 0) {
      return 'Bad';
    } else {
      return 'Invalid score';
    }
  };

  function formatRuntime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  }

  const renderTab = () => {
    switch (activeFilmTab) {
      case 'Details':
        return (
          <div className="film-card__text film-card__row">
            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Director</strong>
                <span className="film-card__details-value">{filmData.director}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Starring</strong>
                <span className="film-card__details-value">
                  {filmData.starring.map((star, index) => (
                    <span key={star}>
                      {star}
                      {index < filmData.starring.length - 1 ? ',' : ''}
                      <br />
                    </span>
                  ))}
                </span>
              </p>
            </div>

            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Run Time</strong>
                <span className="film-card__details-value">{formatRuntime(filmData.runTime)}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Genre</strong>
                <span className="film-card__details-value">{filmData.genre}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Released</strong>
                <span className="film-card__details-value">{filmData.released}</span>
              </p>
            </div>
          </div>
        );
      case 'Reviews':
        return (
          <div>

          </div>
        );
      default:
        return (
          <div>
            <div className="film-rating">
              <div className="film-rating__score">{filmData.rating}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">{getRatingText()}</span>
                <span className="film-rating__count">{filmData.scoresCount}</span>
              </p>
            </div>

            <div className="film-card__text">
              <p>
                {filmData.description}
              </p>

              <p className="film-card__director"><strong>Director: {filmData.director}</strong></p>

              <p className="film-card__starring">
                <strong>Starring: {filmData.starring.map((star) => star).join(', ')}</strong>
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      <section className="film-card film-card--full" style={backColor}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmData.backgroundImage} alt={filmData.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <LogoLink light={false}/>
            <UserStatus/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmData.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmData.genre}</span>
                <span className="film-card__year">{filmData.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${filmData.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <AddMyList currentFilmId={filmData.id} authStatus={authInfo.authStatus}></AddMyList>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmData.posterImage} alt="The Grand Budapest Hotel poster" width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  {tabs.map((tab) => (
                    <li key={tab} className={`film-nav__item ${tab === activeFilmTab ? 'film-nav__item--active' : ''}`}>
                      <a className="film-nav__link" onClick={() => setActiveFilmTab(tab)}>{tab}</a>
                    </li>
                  ))}
                </ul>
              </nav>

              {renderTab()}

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {
          relatedFilms.filter((item) => item.id !== filmData.id).length > 0 ?
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>

              <CardList films={relatedFilms.filter((item) => item.id !== filmData.id)}/>
            </section>
            :
            null
        }


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
