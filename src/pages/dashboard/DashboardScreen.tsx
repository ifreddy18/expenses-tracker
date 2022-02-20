import { useDispatch } from 'react-redux';
import { Navbar } from '../../components/shared/Navbar';
import { startLogout, startGetAuthState } from '../../redux/actions/auth.action';
import { useEffect } from 'react';

export const DashboardScreen = () => {
	
	const dispatch = useDispatch();
	
	const handleLogout = (): void => {
		dispatch( startLogout() );
	};

	useEffect(() => {
		dispatch( startGetAuthState() );
	}, [])
	
	return (
		<div>
			<Navbar />
			<h1>Dashboard</h1>

			<button onClick={() => handleLogout() }>Logout</button>
		</div>
	)
};
