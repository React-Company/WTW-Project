import axios from 'axios';
import {film} from '../../mocks/films.ts';

export async function PromoFetch(): Promise<film>{
  try {
    const res = await axios.get<film>('https://12.react.htmlacademy.pro/wtw/promo');
    return res.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
}
