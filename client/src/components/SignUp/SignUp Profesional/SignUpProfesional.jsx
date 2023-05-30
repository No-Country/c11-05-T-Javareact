import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input/InputText';
import MyTitle from '../../Common/MyTitle/MyTitle';
import MyButton from '../../Common/MyButton/MyButton';
import { useRegisterUserMutation } from '../../../redux/api/apiSlice';

const SignUpProfesional = () => {
	const [showModal, setShowModal] = useState(false);
	const [
		registerUser,
		{ data: user, isSuccess, isError, error },
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
			// username: data.username,
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
	};

	const closeModal = () => {
		setShowModal(false);
	};

	// Logica para cuando el registro es exitoso
	useEffect(() => {
		if (isSuccess) {
			console.log(user);
			setShowModal(true);
			reset();
		} else if (isError) {
			console.log(error);
		}
	}, [isSuccess, isError]);

	return (
		<>
			<MyTitle extraClass='text-white'>Crea tu cuenta como profesional</MyTitle>
			<form
				className='grid grid-cols-2 gap-7 justify-center w-full'
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
			{showModal && (
				<div className='fixed inset-0 flex items-center justify-center z-50'>
					<div className='bg-gray-800 bg-opacity-50 absolute inset-0 flex items-center justify-center'>
						<div className='bg-white rounded-lg p-6 max-w-sm'>
							<p className='text-center text-red-500 text-xl mb-4'>
								Te has registrado correctamente!
							</p>
							<div className='flex items-center justify-center'>
								<button
									className='text-center bg-[--secondaryColor] text-white py-2 px-4 rounded hover:bg-[--secondaryColorHover] focus:outline-none'
									onClick={closeModal}>
									Aceptar
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SignUpProfesional;
