import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRegisterUserMutation } from '../../../redux/api/apiSlice';
import { setCredentials } from '../../../redux/store/slices/authSlice';
import MyButton from '../../Common/MyButton/MyButton';
import MyTitle from '../../Common/MyTitle/MyTitle';
import Input from '../Input/InputText';

const SignUpProfesional = () => {
	const MySwal = withReactContent(Swal);
	const dispatch = useDispatch();

	const [
		registerUser,
		{ data: user, isSuccess, isError },
	] = useRegisterUserMutation();

	const {
		register,
		formState: { errors },
		handleSubmit,
		watch,
		reset,
	} = useForm();

	const onSubmit = (data) => {
		const formData = {
			name: data.nombre,
			lastname: data.apellido,
			email: data.email,
			password: data.password,
			pais: data.pais,
			provincia: data.provincia,
			localidad: data.localidad,
			profesion: data.profesion,
		};
		registerUser(formData);
		reset();
	};

	// Logica para cuando el registro es exitoso
	useEffect(() => {
		if (isSuccess) {
			console.log(user);
			dispatch(setCredentials(user));
			MySwal.fire({
				title: (
					<h6 className='font-[GalanoBold] text-4xl mb-6 text-[--secondaryColor]'>
						Te has registrado correctamente!
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
			MySwal.fire({
				title: (
					<p className='font-[GalanoBold] text-4xl mb-6 text-[--secondaryColor]'>
						Ha ocurrido un Error!
					</p>
				),
				icon: 'error',
				html: (
					<>
						<p className='mb-2'>Por favor vuelva a intentarlo</p>
						<MyButton typeStyle='primary my-4' onClick={() => MySwal.close()}>
							Aceptar
						</MyButton>
					</>
				),
				showConfirmButton: false,
				scrollbarPadding: false,
			});
		}
	}, [isSuccess, isError]);

	return (
		<>
			<MyTitle extraClass='text-white'>Crea tu cuenta como profesional</MyTitle>
			<form
				className='grid grid-cols-2 gap-7 justify-center w-full'
				onSubmit={handleSubmit(onSubmit)}>
				<Input
					type='text'
					name='nombre'
					placeholder='Nombre'
					register={register}
					validation={{ required: true, maxLength: 30 }}
					errors={errors}
					textAlert='El campo es requerido'
				/>
				<Input
					type='text'
					name='apellido'
					placeholder='Apellido'
					register={register}
					validation={{ required: true, maxLength: 30 }}
					errors={errors}
					textAlert='El campo es requerido'
				/>
				<Input
					type='text'
					name='email'
					placeholder='Correo electrónico'
					register={register}
					validation={{
						required: true,
						pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
					}}
					errors={errors}
					textAlert='No es una dirección de correo válida'
				/>
				<Input
					type='text'
					name='confirmEmail'
					placeholder='Confirmar correo electrónico'
					register={register}
					validation={{
						required: true,
						validate: (value) =>
							value === watch('email') || 'Los correos no coinciden',
					}}
					errors={errors}
					textAlert='Los correos no coinciden'
				/>
				<Input
					type='password'
					name='password'
					placeholder='Contraseña'
					register={register}
					validation={{ pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ }}
					errors={errors}
					textAlert='Mínimo 8 caracteres, una minúscula, una mayúscula y un número'
				/>
				<Input
					type='password'
					name='confirmPassword'
					placeholder='Confirmar contraseña'
					register={register}
					validation={{
						required: true,
						validate: (value) =>
							value === watch('password') || 'Las contraseñas no coinciden',
					}}
					errors={errors}
					textAlert='Las contraseñas no coinciden'
				/>
				<Input
					type='text'
					name='pais'
					placeholder='País'
					register={register}
					validation={{ required: true, maxLength: 20 }}
					errors={errors}
					textAlert='El campo es requerido'
				/>
				<Input
					type='text'
					name='provincia'
					placeholder='Provincia'
					register={register}
					validation={{ required: true, maxLength: 20 }}
					errors={errors}
					textAlert='El campo es requerido'
				/>
				<Input
					type='text'
					name='localidad'
					placeholder='Localidad'
					register={register}
					validation={{ required: true, maxLength: 20 }}
					errors={errors}
					textAlert='El campo es requerido'
				/>

				<div>
					<select
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg lg:w-2/'
						{...register('profesion', {
							required: true,
						})}>
						<option selected={true} disabled={true}>
							Profesión
						</option>
						<option value={'albañil'}>Albañil</option>
						<option value={'carpintero'}>Carpintero</option>
						<option value={'electricista'}>Electricista</option>
						<option value={'jardinero'}>Jardinero</option>
						<option value={'limpieza'}>Limpieza</option>
						<option value={'mudanza'}>Mudanza</option>
						<option value={'pintor'}>Pintor</option>
						<option value={'plomero'}>Plomero</option>
						<option value={'peluquero'}>Peluquero</option>
						<option value={'metalurgia'}>Herrero</option>
					</select>
					{errors.profesion?.type === 'required' && (
						<small className='font-extralight text-sm p-2'>
							Por favor, seleccione una profesión
						</small>
					)}
				</div>
				<div className='grid col-span-2	pr-5 justify-end'>
					<MyButton type='submit' typeStyle='tertiary'>
						Crear cuenta
					</MyButton>
				</div>
			</form>
		</>
	);
};

export default SignUpProfesional;
