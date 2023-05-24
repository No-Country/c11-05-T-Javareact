import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input/InputText';
import MyTitle from '../../Common/MyTitle/MyTitle';
import MyButton from '../../Common/MyButton/MyButton';

const SignUpProfesional = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		watch,
	} = useForm();
	const [showModal, setShowModal] = useState(false);

	const onSubmit = (data) => {
		console.log(data);
		setShowModal(true);
	};
	const closeModal = () => {
		setShowModal(false);
	};

	const inputs = [
		{
			type: 'text',
			name: 'nombre',
			placeholder: 'Nombre',
			register: { register },
			validation: { required: true, maxLength: 12 },
			textAlert: 'El campo es requerido',
		},
		{
			type: 'text',
			name: 'apellido',
			placeholder: 'Apellido',
			register: { register },
			validation: { required: true, maxLength: 12 },
			textAlert: 'El campo es requerido',
		},
		{
			type: 'text',
			name: 'email',
			placeholder: 'Correo electronico',
			register: { register },
			validation: { pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ },
			textAlert: 'No es una dirección de correo valida',
		},
		{
			type: 'text',
			name: 'confirmEmail',
			placeholder: 'Confirmar correo electrónico',
			validation: {
				validate: (value) => value === watch('email') || 'Los correos no coinciden',
			},
			textAlert: 'Los correos no coinciden',
		},
		{
			type: 'password',
			name: 'password',
			placeholder: 'Contraseña',
			validation: { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ },
			passwordAlert:
				'Mínimo 8 caracteres, una minúscula, una mayúscula y un número',
		},
		{
			type: 'password',
			name: 'confirmPassword',
			placeholder: 'Confirmar contraseña',
			register: { register },
			validation: {
				required: true,
				validate: (value) =>
					value === watch('password') || 'Las contraseñas no coinciden',
			},
			textAlert: 'Las contraseñas no coinciden',
		},
		{
			type: 'text',
			name: 'pais',
			placeholder: 'Pais',
			register: { register },
			validation: { required: true, maxLength: 12 },
			textAlert: 'El campo es requerido',
		},
		{
			type: 'text',
			name: 'provincia',
			placeholder: 'Provincia',
			register: { register },
			validation: { required: true, maxLength: 12 },
			textAlert: 'El campo es requerido',
		},
		{
			type: 'text',
			name: 'localidad',
			placeholder: 'Localidad',
			register: { register },
			validation: { required: true, maxLength: 12 },
			textAlert: 'El campo es requerido',
		},
	];

	return (
		<div className='container w-full my-28 mx-auto p-16 bg-white flex flex-col gap-16'>
			<MyTitle>Registro como profesional</MyTitle>
			<form
				className='grid grid-cols-2 gap-7 justify-center'
				onSubmit={handleSubmit(onSubmit)}>
				{inputs.map((input, index) => (
					<Input
						key={index}
						type={input.type}
						name={input.name}
						placeholder={input.placeholder}
						register={register}
						validation={input.validation}
						errors={errors}
						compare={input.compare}
						textAlert={input.textAlert}
					/>
				))}
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
						<small className='font-extralight text-sm p-2'>
							Por favor, seleccione una profesión
						</small>
					)}
				</div>
				<div className='grid col-span-2	pr-5 justify-end'>
					<MyButton type='submit' typeStyle='primary'>
						Registrarse
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
		</div>
	);
};

export default SignUpProfesional;
