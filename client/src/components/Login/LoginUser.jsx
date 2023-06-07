import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import loginImg from '../../assets/login.png';
import { useLoginUserMutation } from '../../redux/api/apiSlice';
import { setCredentials } from '../../redux/store/slices/authSlice';
import MyButton from '../Common/MyButton/MyButton';
import MyTitle from '../Common/MyTitle/MyTitle';
import Input from '../SignUp/Input/InputText';

const LoginUser = () => {
	const MySwal = withReactContent(Swal);

	const [
		loginUser,
		{ data: user, isSuccess, isError, error },
	] = useLoginUserMutation();

	const dispatch = useDispatch();

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const onSubmit = (data) => {
		const login = {
			email: data.email,
			password: data.password,
		};
		loginUser(login);
		reset();
	};

	// Logica del logueo
	useEffect(() => {
		if (isSuccess) {
			console.log(user);
			dispatch(setCredentials(user));
			MySwal.fire({
				title: (
					<h6 className='font-[GalanoBold] text-4xl mb-6 text-[--secondaryColor]'>
						Inicio de sesión exitoso!
					</h6>
				),
				icon: 'success',
				html: (
					<MyButton typeStyle='primary my-4' onClick={() => MySwal.close()}>
						Aceptar
					</MyButton>
				),
				showConfirmButton: false,
				scrollbarPadding: false,
			});
		} else if (isError) {
			console.log(error);
		}
	}, [isSuccess, isError]);

	return (
		<div className='flex items-center justify-center h-full '>
			<div className='flex justify-between items-center w-full lg:w-[60%] bg-[--secondaryColor] lg:rounded-3xl overflow-hidden mt-24 p-20 lg:p-0'>
				<div className='w-full px-12'>
					<MyTitle extraClass='text-white text-center text-[50px]'>Iniciar Sesión</MyTitle>
					<form
						className='pt-20 grid grid-cols-1 gap-7 justify-center'
						onSubmit={handleSubmit(onSubmit)}>
						<Input
							type='email'
							name='email'
							placeholder='Correo Electrónico'
							register={register}
							validation={{
								required: true,
								pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
							}}
							errors={errors}
							textAlert='Ingresa un correo válido'
						/>
						<Input
							type='password'
							name='password'
							placeholder='Contraseña'
							register={register}
							validation={{
								required: true,
								pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
							}}
							errors={errors}
							textAlert='Ingresa una contraseña válida'
						/>
						<a className='text-right text-white cursor-pointer mr-28'>
							¿Olvidaste tu contraseña?
						</a>
						<div className=' flex lg:justify-end justify-center  mr-30'>
							<MyButton type='submit' typeStyle='tertiary'>
								Iniciar sesión
							</MyButton>
						</div>
					</form>
					<div className='grid col-span-2	pt-8 pr-5 justify-center'>
						<h4 className='text-4xl text-center font-bold text-white'>
							¿No tenés cuenta?
						</h4>
						<div className='m-auto pt-10'>
							<Link to='/register'>
								<MyButton typeStyle='tertiary'>Registrate aquí</MyButton>
							</Link>
						</div>
					</div>
				</div>
				<img className='lg:w-auto hidden lg:block h-full' src={loginImg} alt='Imagen de perfil' />
			</div>
		</div>
	);
};

export default LoginUser;
