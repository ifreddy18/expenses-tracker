import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../pages/auth/LoginScreen';

export const AuthRouter = (): JSX.Element => {
  return (
    <>
        <Routes>
            <Route path='/login' element={ <LoginScreen title="Login" /> } />
            <Route path='/register' element={ <LoginScreen title="Register" /> } />
            <Route path='*' element={ <Navigate replace to="/login" /> } />
        </Routes>
    </>
  )
}
