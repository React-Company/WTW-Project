import {AddListFetch} from '../api/dataFetch/addListFetch.ts';
import {useNavigate} from 'react-router-dom';

export interface AddMyListButton {
  countFavoriteFilms: number;
  currentFilmInList: boolean;
  currentFilmId: number;
}

export default function AddMyList({countFavoriteFilms, currentFilmInList, currentFilmId}: AddMyListButton) {
  const navigate = useNavigate();

  const handleButton = async () => {
    await AddListFetch({filmId: currentFilmId, status: currentFilmInList ? 0 : 1})
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Произошла ошибка добавления фильма в list');
      });
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <button className="btn btn--list film-card__button" type="button" onClick={handleButton}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={currentFilmInList ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span><span className="film-card__count">{countFavoriteFilms}</span>
    </button>
  );
}
