import { film } from '../../mocks/films';
import {AuthFetch, AuthResponse} from '../../api/dataFetch/authFetch.ts';

export interface MainLoaderData
{
  favoriteFilm: film;
  filmsArray: film[];
  authInfo: AuthResponse;
}

export async function mainLoader(): Promise<MainLoaderData> {
  const favoriteFilmRes = await fetch('https://12.react.htmlacademy.pro/wtw/promo');
  const favoriteFilm: film = await favoriteFilmRes.json() as film;

  const filmsDataRes = await fetch('https://12.react.htmlacademy.pro/wtw/films');
  const filmsArray: film[] = await filmsDataRes.json() as film[];

  const authInfo = await AuthFetch();

  return {
    favoriteFilm,
    filmsArray,
    authInfo
  };
}
