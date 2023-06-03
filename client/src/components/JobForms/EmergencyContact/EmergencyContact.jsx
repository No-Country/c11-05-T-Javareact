import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import MyButton from '../../Common/MyButton/MyButton';
import MyTitle from '../../Common/MyTitle/MyTitle';
import Input from '../../SignUp/Input/InputText';

const EmergencyContact = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset();
		Swal.fire({
			title: 'Envío Exitoso!',
			icon: 'success',
		});
	};

	return (
		<div className='flex flex-col gap-12 px-6'>
			<MyTitle extraClass='text-start'>Solicitar trabajo de urgencia</MyTitle>
			<form
				className='grid grid-cols-2 gap-7 justify-center w-full'
				onSubmit={handleSubmit(onSubmit)}>
				<Input
					type='text'
					name='titulo'
					placeholder='Titulo de trabajo'
					register={register}
					validation={{ required: true, maxLength: 30 }}
					errors={errors}
					textAlert='El campo es requerido'
				/>
				<div>
					<select
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg lg:w-2/'
						{...register('area', {
							required: true,
						})}>
						<option selected={true} disabled={true}>
							Area de trabajo
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
					{errors.area?.type === 'required' && (
						<small className='font-extralight text-sm p-2'>
							Por favor, seleccione un area
						</small>
					)}
				</div>
				<Input
					type='text'
					name='calle'
					placeholder='Calle'
					register={register}
					validation={{ required: true, maxLength: 30 }}
					errors={errors}
					textAlert='El campo es requerido'
				/>
				<div className='flex justify-center space-x-9'>
					<Input
						type='number'
						name='number'
						placeholder='Numeracion'
						register={register}
						validation={{
							required: true,
						}}
						errors={errors}
						textAlert='El campo es requerido'
					/>
					<Input
						type='text'
						name='barrio'
						placeholder='Barrio'
						register={register}
						validation={{
							required: true,
						}}
						errors={errors}
						textAlert='El campo es requerido'
					/>
				</div>
				<Input
					type='text'
					name='entreCalle'
					placeholder='Entre Calles'
					register={register}
					validation={{ required: true }}
					errors={errors}
					textAlert='El campo es requerido'
				/>
				<div className='flex justify-center space-x-9'>
					<Input
						type='text'
						name='piso'
						placeholder='Piso'
						register={register}
						validation={{
							required: true,
						}}
						errors={errors}
						textAlert='El campo es requerido'
					/>
					<Input
						type='text'
						name='dpto'
						placeholder='Departamento'
						register={register}
						validation={{ required: true, maxLength: 20 }}
						errors={errors}
						textAlert='El campo es requerido'
					/>
				</div>
				<textarea
					name='descripcion'
					className='col-span-2 bg-white max-w-6xl grid justify-center p-12 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg resize-none'
					placeholder='Descripción del trabajo
(Describe lo mas detalladamente posible, el trabajo que debe realizar el profesional)'
					{...register('descripcion', { required: true })}></textarea>
				<div className='col-span-2'>
					<input
						type='file'
						className='rounded-3xl shadow w-full ring-1 ring-red-400 placeholder-black text-lg file:border-none file:p-10 file:bg-[--secondaryColorHover] cursor-pointer'
						accept='.jpg, .jpeg, .png'
						multiple
					/>
				</div>
				<div className='grid col-span-2	pr-5 mb-2 justify-end'>
					<MyButton type='submit' typeStyle='tertiary'>
						Enviar
					</MyButton>
				</div>
			</form>
		</div>
	);
};

export default EmergencyContact;
