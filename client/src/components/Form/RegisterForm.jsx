import { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
	const {
		register,
		watch,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		document.querySelector('.modal').style.display = 'grid';
	};
	const [email, setEmail] = useState('');

	const handleChange = (event) => {
		setEmail(event.target.value);
	};

	return (
		<div className='container w-full mx-auto p-20 bg-white border '>
			<h2 className='py-6 pb-9 lg:ml-14 text-5xl text-red-500 font-extrabold'>
				Registro como profesional
			</h2>
			<form
				className='grid grid-cols-2 gap-7 mx-auto justify-center'
				onSubmit={handleSubmit(onSubmit)}>
				<div className=''>
					<input
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto border-2 ring-1 ring-red-400 placeholder-black text-lg'
						type='text'
						name=''
						placeholder='Nombre'
						{...register('nombre', {
							required: true,
							maxLength: 12,
						})}
					/>
					{errors.nombre?.type === 'required' && (
						<p className='font-extralight text-sm p-2'>El campo es requerido</p>
					)}
				</div>
				<div>
					<input
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg'
						type='text'
						name=''
						placeholder='Apellido'
						{...register('apellido', {
							required: true,
							maxLength: 12,
						})}
					/>
					{errors.apellido?.type === 'required' && (
						<p className='font-extralight text-sm p-2'>El campo es requerido</p>
					)}
				</div>
				<div>
					<input
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg'
						type='text'
						name=''
						placeholder='Correo electronico'
						onChange={handleChange}
						{...register('email', {
							pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
						})}
					/>
					{errors.email?.type === 'pattern' && (
						<p className='font-extralight text-sm p-2'>No es una dirección valida</p>
					)}
				</div>
				<div>
					<input
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg'
						type='text'
						name='confirmEmail'
						placeholder='Confirmar correo'
						{...register('emailConfirm', {
							pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
						})}
					/>
					{watch('emailConfirm') === email && (
						<p className='font-extralight text-sm p-2'>
							El correo ingresado no coincide
						</p>
					)}
				</div>

				<div>
					<input
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg'
						type='password'
						name=''
						placeholder='Elige una contraseña'
						{...register('password', {
							pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
						})}
					/>
					{errors.password?.type === 'pattern' && (
						<p className='font-extralight text-sm p-2'>
							La contraseña debe tener al menos una 8 caracteres, una mayúscula, una
							minuscula y un número
						</p>
					)}
				</div>

				<div>
					<input
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg'
						type='password'
						name=''
						placeholder='Confirma la contraseña'
						{...register('passwordConfirm', {
							pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
						})}
					/>
				</div>
				<div>
					<select
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg lg:w-2/'
						{...register('profesion', {
							required: true,
						})}>
						<option selected={true} disabled={true}>
							Profesión
						</option>
						<option value={'plomero'}>Plomero</option>
						<option value={'albañol'}>Albañil</option>
						<option value={'peluquero'}>Peluquero</option>
					</select>
					{errors.profesion?.type === 'required' && (
						<p className='font-extralight text-sm p-2'>
							Por favor, seleccione una profesión
						</p>
					)}
				</div>
				<div>
					<input
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg'
						type='text'
						name=''
						placeholder='Pais'
						{...register('pais')}
					/>
				</div>
				<div>
					<input
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg'
						type='text'
						name=''
						placeholder='Provincia'
						{...register('provincia')}
					/>
				</div>
				<div>
					<input
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg'
						type='text'
						name=''
						placeholder='Localidad'
						{...register('localidad')}
					/>
				</div>
				<div className='grid col-span-2	pr-5 justify-end'>
					<input
						className=' bg-red-600 text-white m-10 p-4 rounded-3xl shadow mx-auto'
						type='submit'
						value={'Registrarse'}
					/>
				</div>
			</form>
			<div className='hidden modal absolute bottom-0 left-0 right-0 top-0 place-items-center '>
				<p className='p-10 max-w-sm rounded bg-green-400'>
					Te has registrado correctamente
				</p>
			</div>
		</div>
	);
};

export default RegisterForm;
