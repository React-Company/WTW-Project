import axios from 'axios';
import {film} from '../../mocks/films.ts';
import {dataUser, userData} from './loginFetch.ts';

export async function MyListFetch(): Promise<film[]>{
  const userJson = localStorage.getItem('user');
  const localDataUser: userData = userJson !== null ? JSON.parse(userJson) as userData : dataUser;

  try {
    const res = await axios.get<film[]>(' https://12.react.htmlacademy.pro/wtw/favorite', {headers: {'X-Token': localDataUser.token}});
    return res.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }

}
