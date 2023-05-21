import { NavLink } from 'react-router-dom';
import AppStoreImg from '../../assets/AppStore.png';
import GooglePlayImg from '../../assets/GooglePlay.png';
import Logo from '../../assets/Logo.svg';

const Footer = () => {
	return (
		<div className='w-full py-16 bg-[--primaryColor] text-[--backgroundColor]'>
			<div className='m-auto flex justify-between items-center w-[80%]'>
				<div className='flex justify-between w-1/4'>
					<div className='flex flex-col items-center gap-1'>
						<img src={Logo} alt='' className='w-[90px]' />
						<h2 className='text-3xl'>MyService</h2>
					</div>
					<div className='flex flex-col gap-2 text-2xl'>
						<NavLink to='/contact'>Contacto</NavLink>
						<NavLink to='/faqs'>FAQs</NavLink>
						<NavLink to='/about'>Acerca de</NavLink>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center gap-6'>
					<img src={GooglePlayImg} alt='' />
					<img src={AppStoreImg} alt='' />
				</div>
			</div>
		</div>
	);
};
export default Footer;
