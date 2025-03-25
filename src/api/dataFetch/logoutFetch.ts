import axios from 'axios';
import { dataUser, userData } from './loginFetch.ts';

export async function LogoutFetch() {
  const userJson = localStorage.getItem('user');
  const localDataUser: userData = userJson !== null ? JSON.parse(userJson) as userData : dataUser;

  try {
    await axios.delete('https://12.react.htmlacademy.pro/wtw/logout', {
      headers: { 'X-Token': localDataUser.token },
    });
    localStorage.removeItem('user');
    // eslint-disable-next-line no-console
    console.log('localStorage after logout:', localStorage.getItem('user'));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // eslint-disable-next-line no-console
      console.error('Logout failed:', error.response?.status, error.message);
    } else if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error('Unexpected error:', error.message);
    } else {
      // eslint-disable-next-line no-console
      console.error('Unknown error occurred:', error);
    }

    throw error;
  }
}
