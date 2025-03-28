import axios from 'axios';
import {film} from '../../mocks/films.ts';
import {userDataType} from '../../hooks/AuthorizationHook.tsx';

export async function MyListFetch(): Promise<film[]>{
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser) as userDataType;

    try {
      const res = await axios.get<film[]>(' https://12.react.htmlacademy.pro/wtw/favorite', {headers: {'X-Token': user.token}});
      return res.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      throw error;
    }
  }
  return [];
}
