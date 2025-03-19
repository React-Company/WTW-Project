import { useEffect, useState } from 'react';
import { AuthorizationStatus } from '../const.ts';
import { Navigate } from 'react-router-dom';
import {AuthFetch} from '../api/dataFetch/authFetch.ts';

const PrivateRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [authorizationStatus, setAuthorizationStatus] = useState<AuthorizationStatus>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { authStatus } = await AuthFetch();
      setAuthorizationStatus(authStatus);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to="/login" />
  );
};

export default PrivateRoute;
