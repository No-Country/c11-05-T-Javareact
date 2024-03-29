import { Link } from 'react-router-dom';
import homeImg1 from '../../assets/home/home1.png';
import homeImg2 from '../../assets/home/home2.png';
import Carousel from '../../components/Carousel/Carousel';
import MyButton from '../../components/Common/MyButton/MyButton';
import MyTitle from '../../components/Common/MyTitle/MyTitle';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import { TESTIMONIALS_DATA } from '../../constants/testimonials';
import { motion } from 'framer-motion';
import './home.css';

const Home = () => {
	return (
		<div className='h-full w-full flex align-center flex-col'>
			<div className='div-container__description flex flex-col-reverse justify-center mt-[20rem] lg:flex-row lg:mt-[10rem] lg:gap-6 gap-0'>
				<motion.div
					className='div-container__titulo'
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}>
					<MyTitle extraClass=''>Todos los Servicios en un solo lugar</MyTitle>
					<p className='text-xl text-[--tertiaryColor] pt-8 w-[80%]'>
						En Myservice, vas a poder encontrar profesionales de confianza para
						realizar todos los trabajos de mantenimiento de tu hogar
					</p>
					<Link to='/services' className='self-end'>
						<MyButton typeStyle='secondary'>Explorar</MyButton>
					</Link>
				</motion.div>
				<motion.img
					className='rounded-3xl h-full w-fit'
					src={homeImg1}
					alt=''
					initial={{ opacity: 0, translateX: '100%' }}
					whileInView={{ opacity: 1, translateX: '0' }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				/>
			</div>

			{/* Carrusel de fotos */}
			<div className='mt-[250px] lg:ml-6'>
				<Carousel />
			</div>

			{/* Trabaja con nosotros */}
			<div className=' div-container__description mb-20 flex flex-col lg:flex-row '>
				<motion.img
					className='rounded-3xl h-full w-fit'
					src={homeImg2}
					alt=''
					initial={{ opacity: 0, translateX: '-100%' }}
					whileInView={{ opacity: 1, translateX: '0' }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				/>
				<motion.div
					className='div-container__titulo'
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}>
					<MyTitle>Trabaja con nosotros</MyTitle>
					<p className='text-xl text-[--tertiaryColor] w-[80%] mt-6 '>
						Si sos un profesional que brinda servicios de mantenimiento del hogar, te
						invitamos a formar parte de MyService para poder expandir tu negocio
					</p>
					<Link to='/register' className='self-end'>
						<MyButton typeStyle='secondary mt-6'>
							Registrarme como profesional
						</MyButton>
					</Link>
				</motion.div>
			</div>

			{/* Testimonios */}
			<motion.div
				className='text-center mt-[30rem] lg:my-[250px]'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5 }}>
				<MyTitle>Testimonios</MyTitle>
				<div className='mt-[100px] flex-col lg:flex-row px-12 flex items-center gap-6 justify-evenly w-full'>
					{TESTIMONIALS_DATA.map((data, index) => (
						<TestimonialCard
							key={index}
							imagen={data.image}
							titulo={data.title}
							description={data.description}
							halfStar={data.halfStar}
						/>
					))}
				</div>
			</motion.div>
		</div>
	);
};
export default Home;
