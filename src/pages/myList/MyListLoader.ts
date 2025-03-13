import { film, films } from '../../mocks/films';

export interface MyListLoaderResults {
  filmsData: film[];
}

export function myListLoader(): Promise<MyListLoaderResults> {
  const filmsData = films.filter((filmData) => filmData.isFavorite);
  return Promise.resolve({ filmsData });
}
