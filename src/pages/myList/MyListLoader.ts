import { film, films } from '../../mocks/films';
import {AuthFetch, AuthResponse} from '../../api/dataFetch/authFetch.ts';

export interface MyListLoaderResults {
  filmsData: film[];
  authInfo: AuthResponse;
}


export async function myListLoader(): Promise<MyListLoaderResults> {
  const filmsData = films.filter((filmData) => filmData.isFavorite);
  const authInfo = await AuthFetch(); // Используем await для получения authInfo
  return { filmsData, authInfo }; // Возвращаем оба значения
}
