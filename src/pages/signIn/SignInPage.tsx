import LogoLink from '../../components/LogoLink';
import {useState} from 'react';
import {UserFetch} from '../../api/dataFetch/loginFetch.ts';
import {useNavigate} from 'react-router-dom';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await UserFetch({email: email, password: password})
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Произошла ошибка при авторизации.');
      });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <LogoLink light={false}/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                id="user-email" onChange={handleEmailChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                id="user-password" onChange={handlePasswordChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <LogoLink light/>

        <div className="copyright">
          <p>© What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

