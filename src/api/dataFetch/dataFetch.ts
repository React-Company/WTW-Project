interface login {
  email: string;
  password: string;
}

interface userData {
  'id': number;
  'email': string;
  'name': string;
  'avatarUrl': string;
  'token': string;
}

export async function UserFetch({email, password}: login): Promise<userData> {

}
