import axios from 'axios';
import { dataUser, userData } from './loginFetch.ts';

export async function LogoutFetch() {
  const userJson = localStorage.getItem('user');
  const localDataUser: userData = userJson !== null ? JSON.parse(userJson) as userData : dataUser;

  try {
    await axios.delete('https://12.react.htmlacademy.pro/wtw/logout', {
      headers: { 'X-Token': localDataUser.token },
    });
    localStorage.removeItem('user'); // Удаляем данные
    console.log('localStorage after logout:', localStorage.getItem('user')); // Должно быть null
  } catch (error) {
    console.error('Logout failed:', error.response?.status, error.message);
    throw error;
  }
}
