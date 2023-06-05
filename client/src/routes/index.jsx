import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import JobsAvailable from '../pages/Jobs/JobsAvailable';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import ProfesionalList from '../pages/ProfesionalList/ProfesionalList';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';
import Services from '../pages/Services/Services';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout />} errorElement={<NotFound />}>
			<Route path='*' element={<NotFound />} />
			<Route index element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/profile' element={<Profile />} />
			<Route path='/jobs' element={<JobsAvailable />} />
			<Route path='/services' element={<Services />} />
			<Route path='/services/:id' element={<ProfesionalList />} />
		</Route>
	)
);
