import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import MyButton from '../../components/Common/MyButton/MyButton';
import RequestBudget from '../JobForms/RequestBudget/RequestBudget';
import ProfileCard from '../ProfileCard/ProfileCard';

const CardProfesional = ({ ...props }) => {
	const MySwal = withReactContent(Swal);

	const handleBudget = () => {
		MySwal.fire({
			html: <RequestBudget />,
			showConfirmButton: false,
			width: 'fit-content',
			scrollbarPadding: false,
		});
	};

	const handleProfile = () => {
		MySwal.fire({
			html: <ProfileCard data={props} />,
			showConfirmButton: false,
			width: 'fit-content',
			// background: 'var(--secondaryColorHover)',
			background: 'transparent',
			scrollbarPadding: false,
		});
	};

	return (
		<div className='bg-[--secondaryColor] lg:p-4 p-10 flex justify-between  items-center rounded-3xl border-solid border-2 border-[--primaryColor] lg:px-10 lg:mx-20 flex-col lg:flex-row'>
			<div className='flex items-center gap-4 w-full '>
				<img
					className='w-24 rounded-full overflow-hidden border-solid border-2 border-[--primaryColor]'
					src={props.photo}
					alt='Avatar'></img>
				<div className='ml-4'>
					<p className='text-xl font-[GalanoBold]'>{props.name}</p>
					<p className='text-lg'>{props.jobs.join(', ')}</p>
				</div>
			</div>
			<div className='flex items-center gap-6'>
				<div className='flex gap-6 font-bold pt-6'>
					<MyButton
						typeStyle='primary border-solid border-2 border-[--primaryColor] hover:border-[--primaryColor]'
						onClick={handleBudget}>
						Contactar
					</MyButton>
					<MyButton typeStyle='tertiary' onClick={handleProfile}>
						Ver Perfil
					</MyButton>
				</div>
				<div className='flex items-center gap-2'>
					<p className='text-xl text-white font-bold'>{props.score}</p>
					<i className='fa-solid fa-star text-[--primaryColor] mt-1'></i>
				</div>
			</div>
		</div>
	);
};

export default CardProfesional;
