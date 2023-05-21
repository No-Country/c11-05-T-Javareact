import MyButton from '../Common/MyButton/MyButton';
import './Card.css';

const Card = ({ imagen, titulo }) => {
	return (
		<div className='card'>
			<img className='card-img' src={imagen} alt='' />
			<div className='card-content'>
				<h5 className='font-semibold'>{titulo}</h5>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam tempore
				</p>
				<MyButton typeStyle='primary'>Explorar</MyButton>
			</div>
		</div>
	);
};
export default Card;
