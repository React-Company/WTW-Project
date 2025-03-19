import axios from 'axios';

interface login {
  email: string;
  password: string;
}

export interface userData {
  'id': number;
  'email': string;
  'name': string;
  'avatarUrl': string;
  'token': string;
}

export let dataUser: userData = {
  id: 0,
  email: '',
  name: '',
  avatarUrl: '',
  token: '',
};

export async function UserFetch({email, password}: login) {
  try {
    const res = await axios.post('https://12.react.htmlacademy.pro/wtw/login', {email, password});
    dataUser = res.data as userData;
    localStorage.setItem('user', JSON.stringify(dataUser));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
