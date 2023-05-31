import { motion } from 'framer-motion';
import { JOBS_DATA } from '../../constants/jobs';
import './Carousel.css';
import Card from '../Card/Card';
import { useEffect, useRef, useState } from 'react';

const Carousel = () => {
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
				{JOBS_DATA.map((job, index) => (
					<motion.div className='item' key={index}>
						<Card
							imagen={job.imagen}
							titulo={job.titulo}
							description={job.description}
							id={job.id}
						/>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};
export default Carousel;
