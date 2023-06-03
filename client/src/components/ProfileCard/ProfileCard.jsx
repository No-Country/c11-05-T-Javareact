import Swal from 'sweetalert2';
import MyButton from '../Common/MyButton/MyButton';

const ProfileCard = ({ data }) => {
	return (
		<div className='flex flex-col items-center gap-10 p-14 bg-[--secondaryColorHover] border-solid border-2 border-black rounded-xl'>
			<div className='flex gap-10 items-start'>
				<img
					className='w-56 rounded-full border-solid border-2 border-[--primaryColor]'
					src={data.photo}
					alt='avatar'
				/>
				<div className='flex flex-col gap-10 items-start'>
					<h4 className='font-[GalanoBold] text-white text-5xl'>
						Perfil del Profesional
					</h4>
					<div className='flex flex-col items-start gap-3 text-gray-900'>
						<p className='text-2xl font-[GalanoBold]'>{data.name}</p>
						<p className='text-xl'>{data.jobs?.join(', ')}</p>
					</div>
				</div>
			</div>
			<p className='text-white max-w-3xl text-start'>
				Comencé a trabajar como plomero hace ocho años, como ayudante de un
				familiar, al ganar más experiencia y tener contacto con los clientes decidí
				independizarme. Al ver que muchos clientes me consultaban si también era
				electricista, hice varios cursos para poder atender a sus necesidades.
			</p>
			<div className='flex flex-col gap-6 w-full px-10'>
				<div className='flex items-end justify-between gap-10'>
					<h6 className='font-[GalanoBold] text-white text-4xl'>Calificaciones</h6>
					<div className='flex gap-2'>
						<p className='text-3xl text-white font-bold'>{data.score}</p>
						<i className='fa-solid fa-star text-[--primaryColor] mt-1 text-xl'></i>
					</div>
				</div>
				<div className='flex gap-6 justify-center'>
					<div className='bg-[--primaryColor] flex flex-col gap-6 w-72 rounded-3xl p-6'>
						<div className='flex gap-4 items-center justify-between'>
							<img
								className='w-16 rounded-full'
								src='https://randomuser.me/api/portraits/men/9.jpg'
								alt='avatar'
							/>
							<div className='text-white text-start'>
								<p className='font-[GalanoBold] text-base'>Martin Aguirre</p>
								<p className='text-sm'>23/04/2023</p>
							</div>
							<div className='flex gap-2 text-lg'>
								<p className='text-white font-bold'>5</p>
								<i className='fa-solid fa-star text-[--secondaryColor] mt-1'></i>
							</div>
						</div>
						<p className='text-white text-sm'>
							Carlos hizo un muy buen trabajo en mi casa, super prolijo y profesional.
							Recomendado!
						</p>
					</div>
					<div className='bg-[--primaryColor] flex flex-col gap-6 w-72 rounded-3xl p-6'>
						<div className='flex gap-4 items-center justify-between'>
							<img
								className='w-16 rounded-full'
								src='https://randomuser.me/api/portraits/women/9.jpg'
								alt='avatar'
							/>
							<div className='text-white text-start'>
								<p className='font-[GalanoBold] text-base'>Agustina Figueroa</p>
								<p className='text-sm'>23/04/2023</p>
							</div>
							<div className='flex gap-2 text-lg'>
								<p className='text-white font-bold'>5</p>
								<i className='fa-solid fa-star text-[--secondaryColor] mt-1'></i>
							</div>
						</div>
						<p className='text-white text-sm'>
							Excelente servicio, rapido y ordenado.
						</p>
					</div>
				</div>
			</div>
			<div className='self-end'>
				<MyButton
					typeStyle='primary border-solid border-2 border-[--primaryColor] hover:border-[--primaryColor]'
					onClick={() => Swal.close()}>
					Cerrar
				</MyButton>
			</div>
		</div>
	);
};
export default ProfileCard;
