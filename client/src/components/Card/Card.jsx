import { Link } from 'react-router-dom';
import MyButton from '../Common/MyButton/MyButton';
import './Card.css';

const Card = ({ imagen, titulo, description, id }) => {
	return (
		<div className='card'>
			<img className='card-img' src={imagen} alt='' />
			<div className='card-content'>
				<h5 className='font-[GalanoBold]'>{titulo}</h5>
				<p>{description}</p>
				<MyButton typeStyle='tertiary self-end'>
					<Link to={`/services/${id}`}>Explorar</Link>
				</MyButton>
			</div>
		</div>
	);
};
export default Card;
