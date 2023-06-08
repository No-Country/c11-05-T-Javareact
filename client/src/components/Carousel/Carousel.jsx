import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useGetCategoriesQuery } from '../../redux/api/apiSlice';
import Card from '../Card/Card';
import './Carousel.css';

const Carousel = () => {
	const { data } = useGetCategoriesQuery();

	const [carouselWith, setCarouselWith] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setCarouselWith(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<motion.div className='container-carrusel' ref={carousel}>
			<motion.div
				className='carrusel'
				drag='x'
				dragConstraints={{ right: 0, left: -(carouselWith + 100) }}
				whileTap={{ cursor: 'grabbing' }}>
				{data?.map((job, index) => (
					<motion.div className='item' key={index}>
						<Card
							imagen={job.imagen}
							titulo={job.titulo}
							description={job.descripcion}
							id={job.id}
						/>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};
export default Carousel;
