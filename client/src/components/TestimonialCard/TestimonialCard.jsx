import './TestimonialCard.css';

const TestimonialCard = ({ imagen, titulo, description, halfStar }) => {
	return (
		<div className='testimonial-card'>
			<img className='testimonial-card-img' src={imagen} alt='' />
			<div className='testimonial-card-content'>
				<div className='flex gap-3 text-[--secondaryColor]'>
					<i className='fa-solid fa-star'></i>
					<i className='fa-solid fa-star'></i>
					<i className='fa-solid fa-star'></i>
					<i className='fa-solid fa-star'></i>
					{halfStar ? (
						<i className='fa-regular fa-star-half-stroke'></i>
					) : (
						<i className='fa-regular fa-star'></i>
					)}
				</div>
				<p>{description}</p>
				<h5 className='font-semibold'>{titulo}</h5>
			</div>
		</div>
	);
};
export default TestimonialCard;
