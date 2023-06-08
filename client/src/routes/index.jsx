import { lazy } from 'react';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import Home from '../pages/Home/Home';
import JobsAvailable from '../pages/Jobs/JobsAvailable';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import ProfesionalList from '../pages/ProfesionalList/ProfesionalList';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';
import Services from '../pages/Services/Services';

const MainLayout = lazy(() => import('../layout/MainLayout'));

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout />} errorElement={<NotFound />}>
			<Route path='*' element={<NotFound />} />
			<Route index element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route
				path='/profile'
				element={
					<ProtectedRoute redirectTo='/login'>
						<Profile />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/jobs'
				element={
					<ProtectedRoute redirectTo='/login'>
						<JobsAvailable />
					</ProtectedRoute>
				}
			/>
			<Route path='/services' element={<Services />} />
			<Route path='/services/:id' element={<ProfesionalList />} />
		</Route>
	)
);
