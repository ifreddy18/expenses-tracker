import { useDispatch } from 'react-redux';
import { startLogout } from '../../redux/actions/auth.action';

export const DashboardScreen = () => {
	
	const dispatch = useDispatch();
	
	const handleLogout = (): void => {
		dispatch( startLogout() );
	};

	return (
		<div>
			<h1>Dashboard</h1>

			<button onClick={() => handleLogout() }>Logout</button>
		</div>
	)
};
