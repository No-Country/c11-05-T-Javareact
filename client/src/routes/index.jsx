import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Services from '../pages/Services/Services';
import Login from '../pages/Login/Login';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{
				errorElement: <NotFound />,
				children: [
					{
						index: true,
						element: <Home />,
					},
					{
						path: '/login',
						element: <Login />,
					},
					{
						path: '/register',
						element: <Register />,
					},
					{
						path: '/services',
						element: <Services />,
					},
				],
			},
		],
	},
]);
