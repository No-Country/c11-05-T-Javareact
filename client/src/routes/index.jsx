import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Services from '../pages/Services/Services';
import Login from '../pages/Login/Login';
import ProfesionalList from '../pages/ProfesionalList/ProfesionalList';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout />} errorElement={<NotFound />}>
			<Route path='*' element={<NotFound />} />
			<Route index element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/services' element={<Services />} />
			<Route path='/services/:id' element={<ProfesionalList />} />
		</Route>
	)
);
