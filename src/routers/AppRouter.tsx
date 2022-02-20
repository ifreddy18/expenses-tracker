import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Routers
import { AuthRouter } from './AuthRouter';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

// Pages
import { DashboardScreen } from '../pages/dashboard/DashboardScreen'
import { useSelector } from 'react-redux';

export const AppRouter = (): JSX.Element => {

	const state = useSelector( (state: any) => state.auth );

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const token = localStorage.getItem('access_token');
	
	useEffect(() => {
		if (token) {
			setIsLoggedIn( true );
		} else {
			setIsLoggedIn( false );
		}
	}, [token, state])
	

    return (
		<> 
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={
						<PublicRoutes isLoggedIn={ isLoggedIn } >
							<AuthRouter />
						</PublicRoutes>
					}/>

					<Route path='/' element={
						<PrivateRoutes isLoggedIn={ isLoggedIn } >
							<DashboardScreen /> 
						</PrivateRoutes>
					}/>
				</Routes>
			</BrowserRouter>
		</>
    );
};
