import { ReduxAction } from '../../interfaces';
import { types } from '../types';

export const authReducer = ( state = {}, action: ReduxAction ) => {

    switch ( action.type ) {
        case types.authLogin:
            return {
                uid: action.payload.uid,
                displayName: action.payload.displayName,
                email: action.payload.email,
            };

        case types.authLogout:
            return {};

        case types.authGetState:
            return {
                uid: action.payload.uid,
                displayName: action.payload.displayName,
                email: action.payload.email,
            };
    
        default:
            return state;
    }

};