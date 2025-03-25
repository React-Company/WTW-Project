import axios from 'axios';
import {film} from '../../mocks/films.ts';

export async function FilmsFetch(): Promise<film[]>{
  try {
    const res = await axios.get<film[]>('https://12.react.htmlacademy.pro/wtw/films');
    return res.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
}
