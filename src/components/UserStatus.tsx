import {AuthorizationStatus} from '../const.ts';
import {LogoutFetch} from '../api/dataFetch/logoutFetch.ts';

export interface UserStatusData {
  avatar: string;
  authStatus: AuthorizationStatus;
}

export default function UserStatus({avatar, authStatus}: UserStatusData) {

  const handleLogout = async () => {
    await LogoutFetch();
  };

  return (
    authStatus === AuthorizationStatus.Auth ?
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar"><img src={avatar} alt="User avatar" width="63" height="63"/></div>
        </li>
        <li className="user-block__item"><a className="user-block__link">Sign out</a></li>
      </ul>
      :
      <ul className="user-block">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <li className="user-block__item"><a className="user-block__link" onClick={handleLogout} >Sign out</a></li>
      </ul>
  );
}
