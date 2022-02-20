import { Navigate } from 'react-router-dom';
import { AuthRoute } from "../interfaces";

export const PrivateRoutes = ({ isLoggedIn, children }: AuthRoute): JSX.Element => {
    return isLoggedIn
        ? children
        : <Navigate to="/login" />
}
