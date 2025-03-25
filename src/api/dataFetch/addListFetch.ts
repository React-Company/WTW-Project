import {dataUser, userData} from './loginFetch.ts';
import axios from 'axios';

export interface AddListFetchParams {
  filmId: number;
  status: number;
}

export async function AddListFetch({filmId, status}: AddListFetchParams) {
  const userJson = localStorage.getItem('user');
  const localDataUser: userData = userJson !== null ? JSON.parse(userJson) as userData : dataUser;

  try {
    await axios.post(`https://12.react.htmlacademy.pro/wtw/favorite/${filmId}/${status}`, null, {headers: { 'X-Token': localDataUser.token}});
    // eslint-disable-next-line no-console
    console.log('Фильм добавлен успешно');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
}
