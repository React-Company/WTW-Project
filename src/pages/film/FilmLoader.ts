import { Params } from 'react-router-dom';
import { films } from '../../mocks/films';
import { AuthFetch, AuthResponse } from '../../api/dataFetch/authFetch.ts';
import { film } from '../../mocks/films';

export interface FilmLoaderData {
  filmData: film; // Данные одного фильма
  authInfo: AuthResponse; // Информация об авторизации
}

interface LoaderArgs {
  params: Params;
}

export async function filmLoader({ params }: LoaderArgs): Promise<FilmLoaderData> {
  const id = Number(params.id); // Преобразуем id в число
  const filmIndex = id - 1; // Индекс начинается с 0, а id с 1
  const filmData = films[filmIndex]; // Получаем фильм

  if (!filmData || filmIndex < 0 || filmIndex >= films.length) {
    throw new Response('Film not found', { status: 404 }); // Бросаем ошибку, если фильма нет
  }

  const authInfo = await AuthFetch(); // Получаем информацию об авторизации

  return {
    filmData, // Убедились, что filmData существует
    authInfo,
  };
}
