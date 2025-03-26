import React from 'react';
import {AuthorizationStatus} from '../const.ts';
import {Link} from 'react-router-dom';
import {FiAlignJustify} from 'react-icons/fi';
import {useAuth} from '../hooks/AuthorizationHook.tsx';

export default function UserStatus() {
  const { logout, error, authorizationStatus, userData } = useAuth();

  const handleLogout = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    try {
      await logout();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Ошибка при выходе:', error);
    }
  };

  return (
    authorizationStatus === AuthorizationStatus.Auth ? (
      <ul className="user-block">
        <li className="user-block__item">
          <Link className="user-block__link" to="/mylist">
            <FiAlignJustify color="#dfcf77" size={40} />
          </Link>
        </li>
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={userData.avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
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
