import {AddListFetch} from '../api/dataFetch/addListFetch.ts';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../const.ts';
import {useEffect, useState} from 'react';
import {MyListFetch} from '../api/dataFetch/myListFetch.ts';
import {useAuth} from '../hooks/AuthorizationHook.tsx';

interface AddMyListProps {
  currentFilmId: number;
}

export default function AddMyList({currentFilmId}: AddMyListProps) {
  const [countFavoriteFilms, setCountFavoriteFilms] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { authorizationStatus } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        if (authorizationStatus === AuthorizationStatus.Auth) {
          const favorites = await MyListFetch();
          console.log(favorites);
          setCountFavoriteFilms(favorites.length);
          // Обновляем статус, если он изменился с момента монтирования
          setIsFavorite(favorites.some((f) => f.id === currentFilmId));
        }
      } catch (error) {
        // Обработка ошибок
      }
    }

    fetchData();
  }, [authorizationStatus]);

  const handleButton = async () => {
    await AddListFetch({filmId: currentFilmId, status: isFavorite ? 0 : 1})
      .then(() => {
        setIsFavorite(!isFavorite);
        setCountFavoriteFilms((prev) => isFavorite ? prev - 1 : prev + 1);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        // eslint-disable-next-line no-alert
        alert('Произошла ошибка добавления фильма в list');
      });
  };

  if(authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <button className="btn btn--list film-card__button" type="submit" onClick={handleButton}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
        </svg>
        <span>My list</span><span className="film-card__count">{countFavoriteFilms}</span>
      </button>
    );
  }

  return (
    <Link className = "btn btn--list film-card__button"
      type = "button"
      to = "/login"
    >
      <svg
        viewBox = "0 0 19 20"
        width = "19"
        height = "20"
      >
        <use xlinkHref = '#add'> </use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">0</span>
    </Link>
  );
}
