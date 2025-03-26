import {AddListFetch} from '../api/dataFetch/addListFetch.ts';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../const.ts';
import {useEffect, useState} from 'react';
import {MyListFetch} from '../api/dataFetch/myListFetch.ts';

interface AddMyListProps {
  currentFilmId: number;
  authStatus: AuthorizationStatus;
}

export default function AddMyList({currentFilmId, authStatus}: AddMyListProps) {
  const [countFavoriteFilms, setCountFavoriteFilms] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);


  useEffect(() => {
    async function fetchData() {
      try {
        if (authStatus === AuthorizationStatus.Auth) {
          const favorites = await MyListFetch();
          setCountFavoriteFilms(favorites.length);
          // Обновляем статус, если он изменился с момента монтирования
          setIsFavorite(favorites.some((f) => f.id === currentFilmId));
        }
      } catch (error) {
        // Обработка ошибок
      }
    }

    fetchData();
  }, [authStatus, currentFilmId]);

  const handleButton = async () => {
    await AddListFetch({filmId: currentFilmId, status: isFavorite ? 0 : 1})
      .then(() => {
        setIsFavorite(!isFavorite);
        setCountFavoriteFilms((prev) => isFavorite ? prev - 1 : prev + 1);
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Произошла ошибка добавления фильма в list');
      });
  };

  return (
    authStatus === AuthorizationStatus.Auth ?
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
      <button className="btn btn--list film-card__button" type="submit" onClick={handleButton}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
        </svg>
        <span>My list</span><span className="film-card__count">{countFavoriteFilms}</span>
      </button>
      :
      <Link className="btn btn--list film-card__button" type="button" to="/login">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref='#add'></use>
        </svg>
        <span>My list</span><span className="film-card__count">0</span>
      </Link>
  );
}
