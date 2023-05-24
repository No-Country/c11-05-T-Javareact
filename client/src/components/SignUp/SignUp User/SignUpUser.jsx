import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Input/InputText';
import MyTitle from '../../Common/MyTitle/MyTitle';
import MyButton from '../../Common/MyButton/MyButton';

const SignUpUser = () => {
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
			validation: { required: true, maxLength: 12 },
			textAlert: 'El campo es requerido',
		},
		{
			type: 'text',
			name: 'apellido',
			placeholder: 'Apellido',
			validation: { required: true, maxLength: 12 },
			textAlert: 'El campo es requerido',
		},
		{
			type: 'text',
			name: 'email',
			placeholder: 'Correo electrónico',
			validation: {
				required: true,
				pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
			},
			textAlert: 'No es una dirección de correo válida',
		},
		{
			type: 'text',
			name: 'confirmEmail',
			placeholder: 'Confirmar correo electrónico',
			validation: {
				required: true,
				validate: (value) => value === watch('email') || 'Los correos no coinciden',
			},
			textAlert: 'Los correos no coinciden',
		},
		{
			type: 'password',
			name: 'password',
			placeholder: 'Contraseña',
			validation: { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ },
			textAlert: 'Mínimo 8 caracteres, una minúscula, una mayúscula y un número',
		},
		{
			type: 'password',
			name: 'confirmPassword',
			placeholder: 'Confirmar contraseña',
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
			placeholder: 'País',
			validation: { required: true, maxLength: 12 },
			textAlert: 'El campo es requerido',
		},
		{
			type: 'text',
			name: 'provincia',
			placeholder: 'Provincia',
			validation: { required: true, maxLength: 12 },
			textAlert: 'El campo es requerido',
		},
		{
			type: 'text',
			name: 'localidad',
			placeholder: 'Localidad',
			validation: { required: true, maxLength: 12 },
			textAlert: 'El campo es requerido',
		},
	];

	return (
		<div className='container w-full my-28 mx-auto p-16 bg-white flex flex-col gap-16'>
			<MyTitle>Crea tu cuenta</MyTitle>
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
						textAlert={input.textAlert}
					/>
				))}
				<div className='grid col-span-2 pr-5 justify-end'>
					<MyButton type='submit' typeStyle='primary'>
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
		</div>
	);
};

export default SignUpUser;
