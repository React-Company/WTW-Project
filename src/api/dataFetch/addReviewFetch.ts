import axios from 'axios';
import {userDataType} from '../../hooks/AuthorizationHook.tsx';

interface AddReviewFetchParams {
  filmId: number;
  comment: string;
  rating: number;
}

export async function AddReviewFetch({filmId, comment, rating}: AddReviewFetchParams) {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser) as userDataType;

    try {
      const res = await axios.post(`https://12.react.htmlacademy.pro/wtw/comments/${filmId}`, {comment, rating}, {headers: { 'X-Token': user.token}});
      // eslint-disable-next-line no-console
      console.log(res);
      // eslint-disable-next-line no-console
      console.log('Комментарий добавлен успешно');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      throw error;
    }
  }
}
