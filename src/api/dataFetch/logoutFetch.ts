import {dataUser, userData} from './loginFetch.ts';
import axios from 'axios';

export async function LogoutFetch() {
  const userJson = localStorage.getItem('user');
  const localDataUser: userData = userJson !== null ? JSON.parse(userJson) as userData : dataUser;

  await axios.delete('https://12.react.htmlacademy.pro/wtw/logout', {headers: {'X-Token': localDataUser.token}})
    .then(() => {
      localStorage.removeItem('user');
    })
    .catch((error) => {
      // eslint-disable-next-line no-alert
      alert(error);
    });
}
