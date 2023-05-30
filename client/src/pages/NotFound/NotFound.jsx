import imageError from '../../assets/404.svg';
import MyButton from '../../components/Common/MyButton/MyButton';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='min-h-screen flex justify-center items-center '>
			<div className='flex gap-16 items-center mt-24'>
				<div className='flex flex-col gap-10 text-[--secondaryColorHover]'>
					<h1 className='text-8xl font-[GalanoBold]'>404</h1>
					<h2 className='text-6xl font-[GalanoBold]'>Pagina no encontrada</h2>
					<p className='text-3xl'>
						Lo sentimos, la página que estas <br></br>buscando no existe
					</p>
					<MyButton typeStyle='tertiary self-end mt-16'>
						<Link to='/'>Volver al inicio</Link>
					</MyButton>
				</div>
				<div>
					<img src={imageError}></img>
				</div>
			</div>
		</div>
	);
};
export default NotFound;
