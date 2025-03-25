import {AuthFetch, AuthResponse} from '../../api/dataFetch/authFetch.ts';
import {PromoFetch} from '../../api/dataFetch/promoFetch.ts';
import {FilmsFetch} from '../../api/dataFetch/filmsFetch.ts';
import {film} from '../../mocks/films.ts';
import {MyListFetch} from '../../api/dataFetch/myListFetch.ts';

export interface MainLoaderData
{
  promoFilm: film;
  filmsArray: film[];
  authInfo: AuthResponse;
  countFavoriteFilm: number;
}

export async function mainLoader(): Promise<MainLoaderData> {
  const promoFilm = await PromoFetch();
  const filmsArray = await FilmsFetch();
  const authInfo = await AuthFetch();

  let countFavoriteFilm = 0;
  if (authInfo) {
    const favoriteFilms: film[] = await MyListFetch();
    countFavoriteFilm = favoriteFilms.length;
  }

  return {
    promoFilm,
    filmsArray,
    authInfo,
    countFavoriteFilm
  };
}
