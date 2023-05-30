import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import MyButton from '../Common/MyButton/MyButton';

const Navbar = () => {
	return (
		<nav className='w-full fixed h-24 px-10 flex items-center justify-between gap-28 z-10 bg-[--primaryColor] text-[--backgroundColor]'>
			<Link to='/' className='flex items-center gap-4'>
				<img src={Logo} alt='logo' />
				<h2 className='text-4xl'>MyService</h2>
			</Link>
			<div className='flex gap-10 text-xl flex-1'>
				<NavLink to='/'>Inicio</NavLink>
				<NavLink to='/services'>Servicios</NavLink>
				<NavLink to='/contact'>Contacto</NavLink>
			</div>
			<div className='flex justify-end items-center gap-4'>
				<MyButton typeStyle='secondary'>
					<Link to='/login'>Iniciar sesión</Link>
				</MyButton>
				<MyButton typeStyle='primary'>
					<Link to='/register'>Registrarse</Link>
				</MyButton>
			</div>
		</nav>
	);
};
export default Navbar;
