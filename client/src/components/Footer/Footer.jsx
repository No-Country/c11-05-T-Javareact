import { Link } from 'react-router-dom';
import AppStoreImg from '../../assets/AppStore.png';
import GooglePlayImg from '../../assets/GooglePlay.png';
import Logo from '../../assets/Logo.svg';

const Footer = () => {
	return (
		<div className='w-full p-8 pl-0 bg-[--primaryColor] text-[--backgroundColor] '>
			<div className='flex flex-col items-center gap-8 w-[80%] mx-auto'>
				<div className='flex justify-between items-center w-full'>
					<div className='flex items-center gap-8 text-4xl'>
						<Link
							to='https://www.facebook.com'
							target='_blank'
							rel='noreferrer'
							className='hover:text-[--secondaryColor] transition-all'>
							<i className='fa-brands fa-facebook'></i>
						</Link>
						<Link
							to='https://www.instagram.com'
							target='_blank'
							rel='noreferrer'
							className='hover:text-[--secondaryColor] transition-all'>
							<i className='fa-brands fa-square-instagram'></i>
						</Link>
						<Link
							to='https://www.twitter.com'
							target='_blank'
							rel='noreferrer'
							className='hover:text-[--secondaryColor] transition-all'>
							<i className='fa-brands fa-twitter'></i>
						</Link>
					</div>
					<img src={Logo} alt='' className='w-[90px] hidden lg:block' />
					<div className='flex flex-col items-center gap-4'>
						<img src={GooglePlayImg} alt='' />
						<img src={AppStoreImg} alt='' />
					</div>
				</div>
				<div className='h-[1.5px] w-[95%] bg-slate-600 '></div>
				<div className='flex justify-around items-center w-[80%] flex-col lg:flex-row gap-5 '>
					<div className='flex flex-col items-center gap-1 text-4xl'>
						<i className='fa-regular fa-envelope text-[--secondaryColor]'></i>
						<p className='text-lg font-[GalanoBold]'>MAIL</p>
						<p className='text-base'>info@myservice.com</p>
					</div>
					<div className='flex flex-col items-center gap-1 text-4xl'>
						<i className='fa-solid fa-phone text-[--secondaryColor]'></i>
						<p className='text-lg font-[GalanoBold]'>PHONE</p>
						<p className='text-base'>+55 3 123549672</p>
					</div>
					<div className='flex flex-col items-center gap-1 text-4xl'>
						<i className='fa-solid fa-location-dot text-[--secondaryColor]'></i>
						<p className='text-lg font-[GalanoBold]'>ADDRESS</p>
						<p className='text-base'>Calle Siempreviva 123</p>
					</div>
				</div>
				<div className='h-[1.5px] w-[95%] bg-slate-600'></div>
				<p className='text-sm'>&copy; Copyright 2023 All rights reserved</p>
			</div>
		</div>
	);
};
export default Footer;
