import {AuthorizationStatus} from '../../const.ts';
import axios from 'axios';
import {dataUser, userData} from './loginFetch.ts';

export interface AuthResponse {
  authStatus: AuthorizationStatus;
  userAuthData: userData;
}

export async function AuthFetch (): Promise<AuthResponse> {

  const userJson = localStorage.getItem('user');
  const localDataUser: userData = userJson !== null ? JSON.parse(userJson) as userData : dataUser;
  let authStatus: AuthorizationStatus = AuthorizationStatus.NoAuth;
  await axios.get('https://12.react.htmlacademy.pro/wtw/login', {headers: {'X-Token': localDataUser.token}})
    .then(() => {
      authStatus = AuthorizationStatus.Auth;
    })
    .catch(() => {
      authStatus = AuthorizationStatus.NoAuth;
    });

  const userAuthData = localDataUser;

  return {
    authStatus,
    userAuthData,
  };
}
