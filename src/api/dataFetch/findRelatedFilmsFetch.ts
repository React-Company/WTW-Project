import {film} from '../../mocks/films.ts';
import axios from 'axios';


export async function FindRelatedFilmsFetch(filmId: number): Promise<film[]> {
  try {
    const res = await axios.get<film[]>(`https://12.react.htmlacademy.pro/wtw/films/${filmId}/similar`);
    return res.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
}
