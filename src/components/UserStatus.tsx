import { useState, useEffect } from 'react';
import { AuthorizationStatus } from '../const.ts';
import { LogoutFetch } from '../api/dataFetch/logoutFetch.ts';

export interface UserStatusData {
  avatar: string;
}

export default function UserStatus({ avatar }: UserStatusData) {
  const [authStatus, setAuthStatus] = useState<AuthorizationStatus>(() => {
    // Проверяем localStorage при первой загрузке
    const userJson = localStorage.getItem('user');
    return userJson ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth;
  });

  // Синхронизируем состояние с localStorage при монтировании и изменении
  useEffect(() => {
    const userJson = localStorage.getItem('user');
    setAuthStatus(userJson ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth);
  }, []); // Пустой массив зависимостей — выполняется только при монтировании

  const handleLogout = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    try {
      await LogoutFetch();
      setAuthStatus(AuthorizationStatus.NoAuth); // Обновляем локальное состояние
      console.log('Logged out, authStatus:', AuthorizationStatus.NoAuth);
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  };

  return (
    authStatus === AuthorizationStatus.Auth ? (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={avatar} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link" onClick={handleLogout}>
            Sign out
          </a>
        </li>
      </ul>
    ) : (
      <ul className="user-block">
        <li className="user-block__item">
          <a className="user-block__link" href="/login">
            Sign in
          </a>
        </li>
      </ul>
    )
  );
}
