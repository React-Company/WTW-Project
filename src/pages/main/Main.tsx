import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import CardList from '../../components/CardList.tsx';
import LogoLink from '../../components/LogoLink.tsx';
import { MainLoaderData } from './MainLoader.ts';
import UserStatus from '../../components/UserStatus.tsx';

function Main() {
  const { favoriteFilm, filmsArray, authInfo } = useLoaderData() as MainLoaderData;

  // Состояние для количества отображаемых фильмов
  const [visibleFilmsCount, setVisibleFilmsCount] = useState(8);

  // Состояние для активного жанра (по умолчанию "All genres")
  const [activeGenre, setActiveGenre] = useState<string>('All genres');

  // Список жанров (можно вынести в отдельный массив или файл)
  const genres = [
    'All genres',
    'Comedies',
    'Crime',
    'Documentary',
    'Dramas',
    'Horror',
    'Kids & Family',
    'Romance',
    'Sci-Fi',
    'Thrillers',
  ];

  // Обработчик для кнопки "Show more"
  const handleShowMore = () => {
    setVisibleFilmsCount((prevCount) => prevCount + 8);
  };

  // Обработчик выбора жанра
  const handleGenreSelect = (genre: string) => {
    setActiveGenre(genre);
    setVisibleFilmsCount(8); // Сбрасываем количество видимых фильмов при смене жанра
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
          <img src={favoriteFilm.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <LogoLink light={false} />
          <UserStatus avatar={authInfo.userAuthData.avatarUrl} />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={favoriteFilm.posterImage}
                alt={favoriteFilm.name}
                width="218"
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
                <Link
                  to={`/player/${favoriteFilm.id}`}
                  className="btn btn--play film-card__button"
                  type="button"
                >
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
            {genres.map((genre) => (
              <li
                key={genre}
                className={`catalog__genres-item ${
                  activeGenre === genre ? 'catalog__genres-item--active' : ''
                }`}
              >
                <a
                  href="#"
                  className="catalog__genres-link"
                  onClick={(e) => {
                    e.preventDefault(); // Предотвращаем переход по ссылке
                    handleGenreSelect(genre);
                  }}
                >
                  {genre}
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
