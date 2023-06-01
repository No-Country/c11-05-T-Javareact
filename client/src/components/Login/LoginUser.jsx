import { useForm } from 'react-hook-form';
import Input from '../SignUp/Input/InputText';
import MyButton from '../Common/MyButton/MyButton';
import { useLoginUserMutation } from '../../redux/api/apiSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/login.png';
import MyTitle from '../Common/MyTitle/MyTitle';

const LoginUser = () => {
	const [
		loginUser,
		{ data: user, isSuccess, isError, error },
	] = useLoginUserMutation();

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const onSubmit = (data) => {
		/* const login = {
			username: data.username,
			password: data.password,
		};
		loginUser(login); */
		loginUser(data);
		reset();
	};

	// Logica del logueo
	useEffect(() => {
		if (isSuccess) {
			console.log(user);
		} else if (isError) {
			console.log(error);
		}
	}, [isSuccess, isError]);

	return (
		<div className='flex items-center justify-center h-full'>
			<div className='flex justify-between items-center w-[60%] bg-[--secondaryColor] rounded-3xl overflow-hidden mt-24'>
				<div className='w-full px-12'>
					<MyTitle extraClass='text-white text-center'>Iniciar Sesión</MyTitle>
					<form
						className='pt-20 grid grid-cols-1 gap-7 justify-center'
						onSubmit={handleSubmit(onSubmit)}>
						{/* <Input
							type='text'
							name='username'
							placeholder='Nombre de usuario'
							register={register}
							validation={{ required: true, maxLength: 30 }}
							errors={errors}
							textAlert='El campo es requerido'
						/> */}
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
						<div className=' flex justify-end mr-20'>
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
				<img className='w-auto h-full' src={loginImg} alt='Imagen de perfil' />
			</div>
		</div>
	);
};

export default LoginUser;
