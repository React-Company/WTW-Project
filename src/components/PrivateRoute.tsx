import {AuthorizationStatus} from '../const.ts';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to="/login" />
  );
};

export default PrivateRoute;
