import { film } from '../../mocks/films';
import {MyListFetch} from '../../api/dataFetch/myListFetch.ts';

export interface MyListLoaderResults {
  favoritsFilms: film[];
}


export async function myListLoader(): Promise<MyListLoaderResults> {
  const favoritsFilms = await MyListFetch();
  return { favoritsFilms};
}
