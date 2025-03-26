import {AuthFetch, AuthResponse} from '../../api/dataFetch/authFetch.ts';
import {PromoFetch} from '../../api/dataFetch/promoFetch.ts';
import {FilmsFetch} from '../../api/dataFetch/filmsFetch.ts';
import {film} from '../../mocks/films.ts';

export interface MainLoaderData
{
  promoFilm: film;
  filmsArray: film[];
  authInfo: AuthResponse;
}

export async function mainLoader(): Promise<MainLoaderData> {
  const promoFilm = await PromoFetch();
  const filmsArray = await FilmsFetch();
  const authInfo = await AuthFetch();
  // eslint-disable-next-line no-console
  console.log(authInfo);

  return {
    promoFilm,
    filmsArray,
    authInfo
  };
}
