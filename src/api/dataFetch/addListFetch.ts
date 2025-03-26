import axios from 'axios';
import {userDataType} from '../../hooks/AuthorizationHook.tsx';

interface AddListFetchParams {
  filmId: number;
  status: number;
}

export async function AddListFetch({filmId, status}: AddListFetchParams) {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser) as userDataType;

    try {
      await axios.post(`https://12.react.htmlacademy.pro/wtw/favorite/${filmId}/${status}`, null, {headers: { 'X-Token': user.token}});
      // eslint-disable-next-line no-console
      console.log('Фильм добавлен успешно');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      throw error;
    }
  }
}
