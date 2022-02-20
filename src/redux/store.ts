import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { authReducer } from './reducers';

// https://www.npmjs.com/package/redux-thunk
import thunk from 'redux-thunk';

// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = (
    typeof window !== 'undefined' && (window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;


const reducers = combineReducers({
    auth: authReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
