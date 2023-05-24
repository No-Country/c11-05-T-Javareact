import Carousel from '../../components/Carousel/Carousel';
import MyButton from '../../components/Common/MyButton/MyButton';
import MyTitle from '../../components/Common/MyTitle/MyTitle';
import images from '../../constants/images';
import './home.css';

const Home = () => {
	return (
		<div className='h-full w-full'>
			<div className='div-container__description w-11/12'>
				<div className='div-container__titulo'>
					<MyTitle>Todos los Servicios en un solo lugar</MyTitle>
					<p className='text-xl text-gray-400 font-light my-6'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
						doloremque voluptatum quibusdam illum voluptatibus maiores reiciendis
						dignissimos dolore, vero omnis necessitatibus
					</p>
					<MyButton typeStyle='secondary'>Explorar</MyButton>
				</div>
				<div className='div-container__img'>
					<img
						className='h-full w-full rounded-3xl'
						src='https://picsum.photos/200/300'
						alt=''
					/>
				</div>
			</div>

			{/* Carrusel de fotos */}
			<div className='mt-[250px]'>
				<Carousel content={images} />
			</div>

			{/* Trabaja con nosotros */}
			<div className=' div-container__description w-11/12'>
				<div className='div-container__img'>
					<img
						className='h-full w-full rounded-3xl'
						src='https://picsum.photos/200/300'
						alt=''
					/>
				</div>
				<div className='div-container__titulo'>
					<MyTitle>
						Trabaja con
						<br />
						nosotros
					</MyTitle>
					<p className='text-xl text-gray-400 font-light my-6'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
						doloremque voluptatum quibusdam illum voluptatibus maiores reiciendis
						dignissimos dolore, vero omnis necessitatibus
					</p>
					<MyButton typeStyle='secondary'>Registrarme como profecional</MyButton>
				</div>
			</div>

			{/* Testimonios */}
			<div className='text-center my-[250px]'>
				<MyTitle>Testimonios</MyTitle>
				<div className='mt-[50px]'>
					<Carousel content={images} />
				</div>
			</div>
		</div>
	);
};
export default Home;
