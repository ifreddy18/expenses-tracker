import { ThunkDispatch } from 'redux-thunk';
import { ReduxAction, User } from '../../interfaces';
import loginService from '../../services/login';
import { types } from '../types';


export const startLoginEmailPassword = (email: string, password: string) => {
    return async (dispatch: ThunkDispatch<{}, {}, ReduxAction>): Promise<void> => {

        let userTemp: User;

        try {
            const { data: { user, token } } = await loginService.login(email, password)

            userTemp = {
                uid: user.uid,
                displayName: user.name,
                email: user.email,
            }

            localStorage.setItem('access_token', token);
            dispatch( loginAction(userTemp) );

        } catch (error) {
            console.log(error);
        }

    };
}

export const startLogout = () => {
    return async(dispatch: ThunkDispatch<{}, {}, ReduxAction>): Promise<void> => {

        try {
            localStorage.removeItem('access_token');
            dispatch( logoutAction() )

        } catch(error) {
            console.log(error);
        }
    }
}


const loginAction = (user: User): ReduxAction => ({
    type: types.authLogin,
    payload: user
});

const logoutAction = (): ReduxAction => ({
    type: types.authLogout
});

