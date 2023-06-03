import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import MyButton from '../../Common/MyButton/MyButton';
import MyTitle from '../../Common/MyTitle/MyTitle';
import Input from '../../SignUp/Input/InputText';

const RequestBudget = () => {
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
			<MyTitle extraClass='text-start'>Solicitar presupuesto</MyTitle>
			<form
				className='grid grid-cols-2 gap-7 justify-center w-full'
				onSubmit={handleSubmit(onSubmit)}>
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

export default RequestBudget;
