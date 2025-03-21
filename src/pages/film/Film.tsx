import { FilmData } from '../../api/types/types';
import {Link, useLoaderData} from 'react-router-dom';
import LogoLink from '../../components/LogoLink';
import UserStatus from '../../components/UserStatus.tsx';
import {MainLoaderData} from '../main/MainLoader.ts';

export default function Film() {
  const { filmData }: FilmData = useLoaderData() as FilmData;
  const { authInfo }: MainLoaderData = useLoaderData() as MainLoaderData;

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

  return (
    <section className="film-card film-card--full" style={backColor}>
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={filmData.backgroundImage} alt={filmData.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <LogoLink light={false}/>

          <UserStatus avatar={authInfo.userAuthData.avatarUrl} />
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
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 18 14" width="18" height="14">
                  <use xlinkHref="#in-list"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
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
                <li className="film-nav__item film-nav__item--active">
                  <a href="#" className="film-nav__link">Overview</a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">Details</a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

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

              <p className="film-card__starring"><strong>Starring: {filmData.starring.map((star) => star).join(', ')}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
