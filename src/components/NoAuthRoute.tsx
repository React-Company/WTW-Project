import { AuthorizationStatus } from '../const.ts';
import { Navigate } from 'react-router-dom';
import {useAuth} from '../hooks/AuthorizationHook.tsx';

const NoAuthRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { authorizationStatus } = useAuth();

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to="/" />
  );
};

export default NoAuthRoute;
