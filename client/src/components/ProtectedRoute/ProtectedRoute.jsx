import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { selectCurrentToken } from '../../redux/store/slices/authSlice';
import MyButton from '../Common/MyButton/MyButton';

export const ProtectedRoute = ({ redirectTo, children }) => {
	const token = useSelector(selectCurrentToken);
	const MySwal = withReactContent(Swal);
	const navigate = useNavigate();

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
						Porfavor inicie sesión para poder visitar esta página
					</p>
					<MyButton typeStyle='primary my-4' onClick={() => MySwal.close()}>
						Aceptar
					</MyButton>
				</>
			),
			showConfirmButton: false,
			scrollbarPadding: false,
			didClose: () => navigate(redirectTo),
		});
	} else {
		return children;
	}
};
