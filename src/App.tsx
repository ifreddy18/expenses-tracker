import { Provider } from 'react-redux';
import './assets/scss/App.scss';

import { store } from './redux/store';
import { AppRouter } from './routers/AppRouter';

export const App = (): JSX.Element => {
	return (
		<Provider store={ store }>
			<AppRouter />
		</Provider>
	);
};
