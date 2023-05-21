import { motion } from 'framer-motion';
import './Carousel.css';

const Carousel = ({ content }) => {
	return (
		<motion.div className='container-carrusel'>
			<motion.div
				className='carrusel'
				drag='x'
				dragConstraints={{ right: 0, left: -2140 }}
				whileTap={{ cursor: 'grabbing' }}>
				{content.map((image, index) => (
					<motion.div className='item' key={index}>
						<img src={image} alt='' />
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};
export default Carousel;
