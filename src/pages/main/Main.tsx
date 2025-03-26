import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import CardList from '../../components/CardList.tsx';
import LogoLink from '../../components/LogoLink.tsx';
import { MainLoaderData } from './MainLoader.ts';
import UserStatus from '../../components/UserStatus.tsx';
import AddMyList from '../../components/AddMyList.tsx';

function Main() {
  const { promoFilm, filmsArray, authInfo} = useLoaderData() as MainLoaderData;

  // Состояние для количества отображаемых фильмов
  const [visibleFilmsCount, setVisibleFilmsCount] = useState(8);

  const [activeGenre, setActiveGenre] = useState<string>('All genres');

  const genres = {
    'All genres': 'All genres',
    'Comedies': 'Comedy',
    'Crime': 'Crime',
    'Documentary': 'Documentary',
    'Dramas': 'Drama',
    'Horror': 'Horror',
    'Kids & Family': 'Kids & Family',
    'Romance': 'Romance',
    'Sci-Fi': 'Sci-Fi',
    'Thrillers': 'Thriller',
  } as const;

  type GenreKey = keyof typeof genres;

  const handleShowMore = () => {
    setVisibleFilmsCount((prevCount) => prevCount + 8);
  };

  const handleGenreSelect = (genreKey: GenreKey) => {
    setActiveGenre(genres[genreKey]);
    setVisibleFilmsCount(8);
  };

  // Фильтруем фильмы по жанру
  const filteredFilms =
    activeGenre === 'All genres'
      ? filmsArray // Если выбран "All genres", показываем все фильмы
      : filmsArray.filter((film) => film.genre === activeGenre);

  // Определяем, показывать ли кнопку "Show more"
  const hasMoreFilms = visibleFilmsCount < filteredFilms.length;

  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <LogoLink light={false} />
          <UserStatus/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilm.posterImage}
                alt={promoFilm.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`/player/${promoFilm.id}`}
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <AddMyList currentFilmId={promoFilm.id} authStatus={authInfo.authStatus} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {(Object.keys(genres) as GenreKey[]).map((genreKey) => (
              <li
                key={genreKey}
                className={`catalog__genres-item ${
                  activeGenre === genres[genreKey] ? 'catalog__genres-item--active' : ''
                }`}
              >
                <a
                  href="#"
                  className="catalog__genres-link"
                  onClick={(e) => {
                    e.preventDefault(); // Предотвращаем переход по ссылке
                    handleGenreSelect(genreKey);
                  }}
                >
                  {genreKey}
                </a>
              </li>
            ))}
          </ul>

          {/* Передаём отфильтрованные фильмы с ограничением по visibleFilmsCount */}
          <CardList films={filteredFilms.slice(0, visibleFilmsCount)} />

          {/* Показываем кнопку только если есть ещё фильмы */}
          {hasMoreFilms && (
            <div className="catalog__more">
              <button className="catalog__button" type="button" onClick={handleShowMore}>
                Show more
              </button>
            </div>
          )}
        </section>

        <footer className="page-footer">
          <LogoLink light />
          <div className="copyright">
            <p>© What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Main;
