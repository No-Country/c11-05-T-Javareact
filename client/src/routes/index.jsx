import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';

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
						path: '/register',
						element: <Register />,
					},
				],
			},
		],
	},
]);
