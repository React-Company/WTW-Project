import { Params } from 'react-router-dom';
import { AuthFetch, AuthResponse } from '../../api/dataFetch/authFetch.ts';
import { film } from '../../mocks/films';
import {FilmFetch} from '../../api/dataFetch/filmFetch.ts';
import {FindRelatedFilmsFetch} from '../../api/dataFetch/findRelatedFilmsFetch.ts';

export interface FilmLoaderData {
  filmData: film;
  authInfo: AuthResponse;
  relatedFilms: film[];
}

interface LoaderArgs {
  params: Params;
}

export async function filmLoader({ params }: LoaderArgs): Promise<FilmLoaderData> {
  const filmIndex = Number(params.id);
  const filmData = await FilmFetch(filmIndex);

  const relatedFilms = await FindRelatedFilmsFetch(filmIndex);

  const authInfo = await AuthFetch(); // Получаем информацию об авторизации

  return {
    filmData,
    authInfo,
    relatedFilms,
  };
}
