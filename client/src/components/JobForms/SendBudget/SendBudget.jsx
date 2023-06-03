import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import MyButton from '../../Common/MyButton/MyButton';
import MyTitle from '../../Common/MyTitle/MyTitle';
import Input from '../../SignUp/Input/InputText';
import TextArea from '../../SignUp/Input/TextArea';

const SendBudget = () => {
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
		<div className='flex flex-col items-center justify-center gap-12 px-6'>
			<MyTitle>Enviar presupuesto</MyTitle>
			<form
				className=' grid grid-cols-2 gap-7 justify-center w-full m-auto'
				onSubmit={handleSubmit(onSubmit)}>
				<Input
					type='text'
					name='timeJob'
					placeholder='Tiempo de trabajo (Aprox)'
					register={register}
					validation={{ required: true, maxLength: 30 }}
					errors={errors}
					textAlert='El campo es requerido'
				/>
				<Input
					type='number'
					name='costo'
					placeholder='Costo (Aproximado)'
					register={register}
					validation={{ required: true, maxLength: 30 }}
					errors={errors}
					textAlert='El campo es requerido'
				/>
				<TextArea
					name='materiales'
					register={register}
					placeholder='Materiales 
(Detalla los materiales que el cliente debería comprar, o si estos están incluidos en el presupuesto)'
				/>
				<TextArea
					name='descripcion'
					register={register}
					placeholder='Descripción del trabajo
(Detalla lo que creas que sea necesario saber para el cliente sobre el trabajo a realizar)'
				/>
				<div className='grid col-span-2	pr-5 mb-2 mt-2 justify-end'>
					<MyButton type='submit' typeStyle='tertiary'>
						Enviar presupuesto
					</MyButton>
				</div>
			</form>
		</div>
	);
};

export default SendBudget;
