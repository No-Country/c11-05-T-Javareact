import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import MyButton from '../../components/Common/MyButton/MyButton';
import RequestBudget from '../JobForms/RequestBudget/RequestBudget';
import ProfileCard from '../ProfileCard/ProfileCard';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../redux/store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const CardProfesional = ({ ...props }) => {
	const token = useSelector(selectCurrentToken);
	const MySwal = withReactContent(Swal);
	const navigate = useNavigate();

	const handleBudget = () => {
		if (!token) {
			MySwal.fire({
				title: (
					<h6 className='font-[GalanoBold] text-4xl mb-4 text-[--secondaryColor]'>
						Acceso no permitido!
					</h6>
				),
				icon: 'error',
				html: (
					<>
						<p className='mb-2'>
							Porfavor inicie sesión para poder contactar con el Profesional
						</p>
						<MyButton typeStyle='primary my-4' onClick={() => MySwal.close()}>
							Aceptar
						</MyButton>
					</>
				),
				showConfirmButton: false,
				scrollbarPadding: false,
				didClose: () => navigate('/login'),
			});
		} else {
			MySwal.fire({
				html: <RequestBudget />,
				showConfirmButton: false,
				width: 'fit-content',
				scrollbarPadding: false,
			});
		}
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
		<div className='bg-[--secondaryColor] p-4 flex justify-between items-center rounded-3xl border-solid border-2 border-[--primaryColor] px-10 mx-20'>
			<div className='flex items-center gap-4'>
				<img
					className='w-24 rounded-full border-solid border-2 border-[--primaryColor]'
					src={props.photo}
					alt='Avatar'></img>
				<div className='ml-4'>
					<p className='text-xl font-[GalanoBold]'>{props.name}</p>
					<p className='text-lg'>{props.jobs.join(', ')}</p>
				</div>
			</div>
			<div className='flex items-center gap-6'>
				<div className='flex gap-6 font-bold'>
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
