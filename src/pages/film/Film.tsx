import { FilmData } from "../../api/types/types";
import { useLoaderData } from "react-router-dom";
import LogoLink from "../../components/LogoLink";

export default function Film() {
  const { film_data }: FilmData = useLoaderData() as FilmData;

  const backColor = {
    backgroundColor: film_data.backgroundColor,
  }

  const getRatingText = () => {
    if (film_data.rating === 10) {
        return 'Awesome';
    } else if (film_data.rating >= 8) {
        return 'Very good';
    } else if (film_data.rating >= 5) {
        return 'Good';
    } else if (film_data.rating >= 3) {
        return 'Normal';
    } else if (film_data.rating >= 0) {
        return 'Bad';
    } else {
        return 'Invalid score'; 
    }
};

  return (
    <section className="film-card film-card--full" style={backColor}>
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={film_data.backgroundImage} alt={film_data.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
        <LogoLink light={false}/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{film_data.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film_data.genre}</span>
              <span className="film-card__year">{film_data.released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
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
            <img src={film_data.posterImage} alt="The Grand Budapest Hotel poster" width="218"
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
              <div className="film-rating__score">{film_data.rating}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">{getRatingText()}</span>
                <span className="film-rating__count">{film_data.scoresCount}</span>
              </p>
            </div>

            <div className="film-card__text">
              <p>
                {film_data.description}
              </p>

              <p className="film-card__director"><strong>Director: {film_data.director}</strong></p>

              <p className="film-card__starring"><strong>Starring: {film_data.starring.map((star) => star).join(', ')}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
