import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import MyButton from '../MyButton/MyButton';

const Navbar = () => {
	return (
		<nav className='w-full fixed py-4 px-10 flex items-center justify-between z-10 bg-[--primaryColor]'>
			<div className='flex justify-between items-center w-1/3'>
				<Link to='/' className='flex items-center gap-4'>
					<img src={Logo} alt='' />
					<h2 className='text-4xl'>MyService</h2>
				</Link>
				<div className='flex gap-4 text-xl'>
					<NavLink to='/'>Inicio</NavLink>
					<NavLink to='/services'>Servicios</NavLink>
					<NavLink to='/contact'>Contacto</NavLink>
				</div>
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
