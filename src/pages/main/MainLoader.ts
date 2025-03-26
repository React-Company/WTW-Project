import {PromoFetch} from '../../api/dataFetch/promoFetch.ts';
import {FilmsFetch} from '../../api/dataFetch/filmsFetch.ts';
import {film} from '../../mocks/films.ts';

export interface MainLoaderData
{
  promoFilm: film;
  filmsArray: film[];
}

export async function mainLoader(): Promise<MainLoaderData> {
  const promoFilm = await PromoFetch();
  const filmsArray = await FilmsFetch();

  return {
    promoFilm,
    filmsArray,
  };
}
