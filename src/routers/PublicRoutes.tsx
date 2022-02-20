import { Navigate } from 'react-router-dom';
import { AuthRoute } from '../interfaces';

export const PublicRoutes = ({ isLoggedIn, children }: AuthRoute): JSX.Element => {
    return isLoggedIn
        ? <Navigate to="/" />
        : children
}
