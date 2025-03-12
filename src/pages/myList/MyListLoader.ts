import { film, films } from "../../mocks/films";

export interface MyListLoaderResults {
  films_data: film[];
}

export function myListLoader(): Promise<MyListLoaderResults> {
  const films_data = films.filter(film => film.isFavorite);
  return  Promise.resolve({ films_data });
}