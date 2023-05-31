import MyButton from '../../components/Common/MyButton/MyButton';

const CardProfesional = ({ ...props }) => {
	return (
		<div className='bg-[--secondaryColor] p-4 flex justify-between items-center rounded-3xl border-solid border-2 border-[--primaryColor] px-10'>
			<div className='flex items-center gap-4'>
				<img
					className='w-24 rounded-full border-solid border-2 border-[--primaryColor]'
					src={props.photo}
					alt='Avatar'></img>
				<div className=' ml-4'>
					<p className='text-xl font-[GalanoBold]'>{props.name}</p>
					<p className='text-lg'>{props.jobs.join(', ')}</p>
				</div>
			</div>
			<div className='flex items-center gap-6'>
				<div className='flex gap-6 font-bold'>
					<MyButton typeStyle='primary border-solid border-2 border-[--primaryColor] hover:border-[--primaryColor]'>
						Contactar
					</MyButton>
					<MyButton typeStyle='tertiary'>Ver Perfil</MyButton>
				</div>
				<div className='flex items-center gap-2'>
					<p className='text-xl text-white font-bold'>{props.score}</p>
					<i className='fa-solid fa-star text-[--primaryColor] mt-1'></i>
				</div>
			</div>
		</div>
	);
};

export default CardProfesional;
