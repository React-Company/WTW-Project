import { AuthorizationStatus } from '../const.ts';
import { Navigate } from 'react-router-dom';
import {useAuth} from '../hooks/AuthorizationHook.tsx';

const PrivateRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { authorizationStatus } = useAuth();

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to="/login" />
  );
};

export default PrivateRoute;
