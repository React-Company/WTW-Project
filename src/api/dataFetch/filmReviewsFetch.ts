import axios from 'axios';
import {userDataType} from '../../hooks/AuthorizationHook.tsx';
import {reviews} from '../../mocks/films.ts';

export async function FilmReviewsFetch(filmId: number) {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser) as userDataType;

    try {
      const res = await axios.get<reviews[]>(`https://12.react.htmlacademy.pro/wtw/comments/${filmId}`, {headers: { 'X-Token': user.token}});
      return res.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      throw error;
    }
  }
  return [];
}
