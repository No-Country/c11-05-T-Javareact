import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { selectCurrentToken } from '../../redux/store/slices/authSlice';
import MyButton from '../Common/MyButton/MyButton';

const Navbar = () => {
	const token = useSelector(selectCurrentToken);

	return (
		<nav className='w-full fixed h-24 px-10 flex items-center justify-between gap-28 z-10 bg-[--primaryColor] text-[--backgroundColor]'>
			<Link to='/' className='flex items-center gap-4'>
				<img src={Logo} alt='logo' />
				<h2 className='text-4xl'>MyService</h2>
			</Link>
			<div className='flex gap-10 text-xl flex-1'>
				<NavLink to='/'>Inicio</NavLink>
				<NavLink to='/services'>Servicios</NavLink>
				<NavLink to='/jobs'>Trabajos Disponibles</NavLink>
			</div>
			<div className='flex justify-end items-center gap-4'>
				{token ? (
					<MyButton typeStyle='primary'>
						<i className='fa-solid fa-user mr-3'></i>Perfil
					</MyButton>
				) : (
					<>
						<Link to='/login'>
							<MyButton typeStyle='secondary'>Iniciar sesión</MyButton>
						</Link>
						<Link to='/register'>
							<MyButton typeStyle='primary'>Registrarse</MyButton>
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};
export default Navbar;
